import Link from 'next/link';

const navItems = {
	'/': {
		name: 'home',
	},
	'/activities': {
		name: 'activities',
	},
	// '/coding': {
	// 	name: 'coding',
	// },
	// '/fitness': {
	// 	name: 'fitness',
	// },
	// '/reports': {
	// 	name: 'reports',
	// },
};

export function Navbar() {
	return (
		<nav
			className='flex flex-row items-start relative px-0 pb-0 face md:overflow-auto scroll-pr-6 md:relative'
			id='nav'
		>
			<div className='flex flex-row space-x-0 pr-10'>
				{Object.entries(navItems).map(([path, { name }]) => (
					<Link
						key={path}
						href={path}
						className='transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2'
					>
						{name}
					</Link>
				))}
			</div>
		</nav>
	);
}
