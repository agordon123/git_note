import { NextAuthOptions, User, getServerSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import dbConnect from "@/database/dbConnect";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/database/clientPromise";
import { getOneUser } from "./actions/user.actions";
import { validatePassword } from "./utils";

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise!, { databaseName: "git_note" }),
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/",
    signOut: "/sign-up",
    newUser: "/onboarding/1",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
  },
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Credentials({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email", placeholder: "..." },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        await dbConnect();
        if (credentials?.password === null || credentials?.email === null)
          throw new Error("Please fill Out all Fields");
        try {
          const user = await getOneUser(credentials?.email!);
          if (!user) {
            throw new Error("User not found, please check your credentials");
          }
          if (user) {
            const isMatch = await validatePassword(
              credentials!.password,
              user.password
            );

            if (isMatch) {
              return user as User;
            } else {
              throw new Error("Email or password is incorrect");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, isNewUser }: any) {
      if (user) {
        token.isNewUser = !!isNewUser;
        token.user = user;
        return { ...token, user };
      }

      return token;
    },

    session: async ({ session, token }: any) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
};

export const getSession = async () => await getServerSession(authOptions);
