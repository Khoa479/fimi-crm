import { redirect } from 'next/navigation'

import { isAdmin } from '@/lib/auth'

const AdminPage = async () => {
	const allowAccess = await isAdmin()

	if (!allowAccess) return redirect('/')

	return <div>AdminPage</div>
}

export default AdminPage
