import { FC, PropsWithChildren } from 'react'

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='flex h-full w-full items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary via-primary/80 to-primary/70'>
			{children}
		</div>
	)
}

export default AuthLayout
