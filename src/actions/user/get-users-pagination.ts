'use server'

import { db } from '@/lib/db'

interface GetUsersPaginationParam {
	page: number
	limit: number
}

export const getUsersPagination = async ({
	page,
	limit = 10
}: GetUsersPaginationParam) => {
	const [total, users] = await db.$transaction([
		db.user.count(),
		db.user.findMany({
			take: limit,
			skip: (page - 1) * limit
		})
	])

	return {
		users,
		totalPage: Math.ceil(total / limit)
	}
}
