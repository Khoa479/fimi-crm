import bcrypt from 'bcryptjs'
import { type NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { db } from '@/lib/db'
import { loginSchema } from '@/schemas/auth/schema'

const authConfig = {
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {}
			},
			authorize: async credentials => {
				const validatedFields = loginSchema.safeParse(credentials)

				if (validatedFields.success) {
					const { email, password } = validatedFields.data

					const existingUser = await db.user.findUnique({
						where: {
							email
						}
					})

					if (!existingUser || !existingUser.password) return null

					const verifiedPassword = await bcrypt.compare(
						password,
						existingUser.password
					)

					if (verifiedPassword) return existingUser
				}

				return null
			}
		})
	]
} satisfies NextAuthConfig

export default authConfig
