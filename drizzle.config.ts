import { defineConfig } from 'drizzle-kit';
import { env } from './env.schema';

export default defineConfig({
	schema: './db/schema.ts',
	driver: 'mysql2',
	dbCredentials: {
		uri: env.DATABASE_URL,
	},
	verbose: true,
	strict: true,
});
