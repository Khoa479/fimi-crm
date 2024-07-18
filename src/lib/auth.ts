import { PrismaAdapter } from '@auth/prisma-adapter'
import { Department, Role } from '@prisma/client'
import NextAuth from 'next-auth'

import authConfig from '@/config/auth.config'
import { db } from '@/lib/db'

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut
} = NextAuth({
	adapter: PrismaAdapter(db),
	session: {
		strategy: 'jwt'
	},
	...authConfig,
	callbacks: {
		signIn: async ({ account }) => {
			if (account?.provider !== 'credentials') return true

			return true
		},
		session: async ({ token, session }) => {
			if (token.sub && session.user) session.user.id = token.sub

			if (token.role && session.user) session.user.role = token.role as Role

			if (token.departments && session.user)
				session.user.departments = token.departments as Department[]

			if (session.user) {
				session.user.name = token.name
				session.user.email = token.email as string
			}

			return session
		},
		jwt: async ({ token }) => {
			if (!token.sub) return token

			const existingUser = await db.user.findUnique({
				where: { id: token.sub }
			})

			if (!existingUser) return token

			token.name = existingUser.name
			token.email = existingUser.email

			token.role = existingUser.role
			token.departments = existingUser.departments

			return token
		}
	}
})

export const currentUser = async () => {
	const session = await auth()

	return session?.user
}

export const isAdmin = async () => {
	const session = await auth()

	if (!session) return false

	const role = session.user.role

	if (role === 'ADMIN') return true

	return false
}

export const currentDepartment = async (department: Department) => {
	const session = await auth()

	const allowAccess = session?.user.departments.includes(department)

	return allowAccess
}
