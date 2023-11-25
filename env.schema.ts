import z from 'zod';

export const envSchema = z
	.object({
		DATABASE_HOST: z.string().default('localhost'),
		DATABASE_USERNAME: z.string().default('root'),
		DATABASE_PASSWORD: z.string().default(''),
		DATABASE_NAME: z.string().default('ootd'),
	})
	.transform((obj) => ({
		...obj,
		DATABASE_URL: `mysql://${obj.DATABASE_USERNAME}:${obj.DATABASE_PASSWORD}@${obj.DATABASE_HOST}/${obj.DATABASE_NAME}?ssl={"rejectUnauthorized":true}`,
	}));

export const env = envSchema.parse(process.env);

export type Env = typeof env;
