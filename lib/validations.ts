import * as z from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(16),
});

export const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(16),
  fullname: z.string().min(4).max(50),
});
export const onboardingSchemaOne = z.object({
  fullname: z.string().min(4).max(50),
  portfolio: z.string().min(4).max(50),
  profilePicture: z.string().url(),
});
export const onboardingSchemaTwo = z.object({
  learningGoals: z.array(z.string().min(5).max(80)),
});
export const onboardingSchemaThree = z.object({
  experiences: z.array(z.string().min(5).max(80)),
});
export const onboardingSchemaFour = z.object({
  availability: z.array(z.date()),
});
export const onboardingSchema = z.object({
  onboardingSchemaOne,
  onboardingSchemaTwo,
  onboardingSchemaThree,
  onboardingSchemaFour,
});

const SocialsZodSchema = z.object({
  twitter: z.string().url(),
  facebook: z.string().url(),
  linkedin: z.string().url(),
  github: z.string().url(),
  instagram: z.string().url(),
  dribbble: z.string().url(),
});

export const GoalZodSchema = z.object({
  goals: z
    .array(z.object({ name: z.string(), completed: z.boolean() }))
    .optional(),
});

const UserEditZodSchema = z.object({
  fullname: z.string().optional(),
  email: z.string().optional().readonly(),
  location: z.string().optional(),
  image: z.string().optional(),
  portfolio: z.string().optional(),
  learningGoals: GoalZodSchema,
  technologies: z.array(z.string()).optional(),
  experiences: z.array(z.object({ name: z.string() })).optional(),
  availability: z
    .array(z.date().min(new Date(Date.now().toFixed(2))))
    .optional(),
  socials: z.array(SocialsZodSchema).optional(),
});

export default UserEditZodSchema;
