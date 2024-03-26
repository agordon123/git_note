import { z } from "zod";

// Basic Info Form Schema
const BasicInfoSchema = z.object({
  fullname: z.string().optional(),
  email: z.string().email(),
  location: z.string().optional(),
  portfolio: z.string().url().optional(),
});

// Security Form Schema
const SecuritySchema = z.object({
  password: z.string().min(8), // Assuming you want to include password updates in a separate form
});

// Learning Goals Form Schema
const GoalSchema = z.object({
  name: z.string(),
  completed: z.boolean(),
});
const LearningGoalsSchema = z.array(GoalSchema);

// Technologies Form Schema
const TechnologiesSchema = z.array(z.string()); // Assuming technologies are strings

// Experiences Form Schema
const ExperiencesSchema = z.array(
  z.object({
    name: z.string(),
  })
);

// Availability Form Schema
const AvailabilitySchema = z.object({
  startTime: z.date(),
  endTime: z.date(),
});

// Socials Form Schema
const SocialsSchema = z.object({
  twitter: z.string().url().optional(),
  facebook: z.string().url().optional(),
  linkedin: z.string().url().optional(),
  github: z.string().url().optional(),
  instagram: z.string().url().optional(),
  dribbble: z.string().url().optional(),
});

// Combining all schemas for a complete Profile Edit Schema (if needed as one)
const CompleteProfileEditSchema = z.object({
  fullname: z.string().optional(),
  email: z.string().email(),
  location: z.string().optional(),
  portfolio: z.string().url().optional(),
  learningGoals: LearningGoalsSchema.optional(),
  technologies: TechnologiesSchema.optional(),
  experiences: ExperiencesSchema.optional(),
  availability: AvailabilitySchema.optional(),
  socials: z.array(SocialsSchema).optional(),
  newProjects: z.boolean().default(false),
});

export {
  BasicInfoSchema,
  SecuritySchema,
  LearningGoalsSchema,
  TechnologiesSchema,
  ExperiencesSchema,
  AvailabilitySchema,
  SocialsSchema,
  CompleteProfileEditSchema,
};
