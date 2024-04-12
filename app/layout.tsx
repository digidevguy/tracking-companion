import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Navbar } from '@/components/nav';
import AuthButton from '@/components/AuthButton';
import { Footer } from '@/components/common/footer';

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: 'http://localhost:3000';

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: 'Habit Companion',
	description: 'A simple habit tracker',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={GeistSans.className}>
			<body className='flex-1 flex flex-col gap-20 items-center bg-background text-foreground'>
				<header className='w-full flex justify-center border-b border-b-foreground/10 h-16'>
					<div className='w-full max-w-4xl flex justify-between items-center p-3 text-sm'>
						<h1 className='text-xl font-semibold'>Habit Companion</h1>
						<Navbar />
						<AuthButton />
					</div>
				</header>
				<main className='min-h-screen flex flex-col items-center'>
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
