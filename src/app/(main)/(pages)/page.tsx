import { redirect } from 'next/navigation'

import { auth } from '@/lib/auth'

const HomePage = async () => {
	const isLoggedIn = await auth()

	if (!isLoggedIn) return redirect('/auth/login')

	return <div>HomePage</div>
}

export default HomePage
