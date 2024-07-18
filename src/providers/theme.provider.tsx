'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { FC } from 'react'

const ThemeProvider: FC<ThemeProviderProps> = ({ children, ...props }) => {
	return (
		<NextThemeProvider
			attribute='class'
			defaultTheme='system'
			enableColorScheme
			disableTransitionOnChange
			{...props}
		>
			{children}
		</NextThemeProvider>
	)
}

export default ThemeProvider
