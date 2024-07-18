import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { FC, PropsWithChildren } from 'react'

import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import ClientProvider from '@/providers/client.provider'
import ThemeProvider from '@/providers/theme.provider'

const font = Nunito({ subsets: ['latin', 'vietnamese'] })

export const metadata: Metadata = {
	title: 'FIMI',
	description: 'FIMI-crm'
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={cn('antialiased', font.className)}>
				<ThemeProvider>
					<ClientProvider>{children}</ClientProvider>
				</ThemeProvider>
				<Toaster />
			</body>
		</html>
	)
}

export default RootLayout
