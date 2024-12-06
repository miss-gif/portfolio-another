import { z } from "zod";

export const projectSchema = z.object({
  projectName: z.string().optional(),
  description: z.string().optional(),
  thumbnail: z.string().optional(),
  client: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  teamSize: z.number().optional(),
  planning: z.string().optional(),
  design: z.string().optional(),
  publishing: z.string().optional(),
  development: z.string().optional(),
  badgeProjectDevice: z.string().optional(),
  badgeProjectType: z.string().optional(),
  badgeParticipation: z.string().optional(),
  demoUrl: z.string().optional(),
  githubUrl: z.string().optional(),
  canvaUrl: z.string().optional(),
  figmaUrl: z.string().optional(),
  swaggerUrl: z.string().optional(),
  techStack: z.array(z.string()).optional(),
  descriptionDetail: z.string().optional(),
});
