import { ExtendedUser } from '@/lib/types'

declare module 'next-auth' {
	interface Session {
		user: ExtendedUser
	}
}
