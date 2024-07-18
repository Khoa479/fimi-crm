import {
	dehydrate,
	HydrationBoundary,
	QueryClient
} from '@tanstack/react-query'

import { getUsersPagination } from '@/actions/user/get-users-pagination'
import Users from '@/components/users'

const UserManagment = async () => {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery({
		queryKey: ['users', 10],
		queryFn: async () => await getUsersPagination({ page: 1, limit: 10 })
	})

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Users />
		</HydrationBoundary>
	)
}

export default UserManagment
