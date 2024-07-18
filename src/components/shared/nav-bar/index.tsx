import LogoLink from '@/components/shared/logo-link'
import ModeToggle from '@/components/shared/mode-toggle'

const Navbar = () => {
	return (
		<header className='sticky inset-x-0 top-0 z-50 border-b bg-background shadow-md'>
			<div className='container flex items-center justify-between py-2'>
				<LogoLink className='w-20' />
				<ModeToggle />
			</div>
		</header>
	)
}

export default Navbar
