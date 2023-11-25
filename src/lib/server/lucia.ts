import { lucia } from 'lucia';
import { sveltekit } from 'lucia/middleware';
import { planetscale } from '@lucia-auth/adapter-mysql';
import { connection } from './db';

export const auth = lucia({
	env: 'DEV', // "PROD" if deployed to HTTPS,
	middleware: sveltekit(),
	adapter: planetscale(connection, {
		user: 'auth_user',
		key: 'user_key',
		session: 'user_session',
	}),
});

export type Auth = typeof auth;
