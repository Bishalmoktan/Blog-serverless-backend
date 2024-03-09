import z from 'zod';

export const siginInput = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const signupInput = z.object({
  email: z.string().email({
    message: 'Invalid email',
  }),
  password: z.string().min(6, {
    message: 'Minimum 6 character required',
  }),
  authorId: z.string().optional(),
});

export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export const updateBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

export type siginInput = z.infer<typeof siginInput>;
export type signupInput = z.infer<typeof signupInput>;
export type createBlogInput = z.infer<typeof createBlogInput>;
export type updateBlogInput = z.infer<typeof updateBlogInput>;