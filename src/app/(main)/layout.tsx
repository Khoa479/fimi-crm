import { FC, PropsWithChildren } from 'react'

import Navbar from '@/components/shared/nav-bar'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	)
}

export default MainLayout
