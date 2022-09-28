import { z } from 'zod';

export const RatedObjectSchema = z.object({
	id: z.string().optional(),
	name: z.string().min(1),
	ratings: z.object({
		pia: z.number().optional(),
		justin: z.number().optional()
	}),
	tags: z.array(z.string())
});

export type RatedObject = z.infer<typeof RatedObjectSchema>;
