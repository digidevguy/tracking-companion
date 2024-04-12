const games = [
	{
		id: '1',
		title: 'Against the Storm',
	},
	{
		id: '2',
		title: 'Songs of Conquest',
	},
	{
		id: '3',
		title: 'Inkbound',
	},
	{
		id: '4',
		title: 'Skull: The Hero Slayer',
	},
	{
		id: '5',
		title: 'The Last Spell',
	},
	{
		id: '6',
		title: 'The Riftbreaker',
	},
	{
		id: '7',
		title: 'Dungeon Drafters',
	},
	{
		id: '8',
		title: 'Helldivers 2',
	},
	{
		id: '9',
		title: 'Roboquest',
	},
	{
		id: '10',
		title: 'Deep Rock Galactic: Survivor',
	},
	{
		id: '11',
		title: 'Star Ocean: The Second Story R',
	},
	{
		id: '12',
		title: 'Gunfire Reborn',
	},
	{
		id: '13',
		title: 'Remnant II',
	},
	{
		id: '14',
		title: 'One Step From Eden',
	},
].sort((a, b) => a.title.localeCompare(b.title));

export default function Games() {
	return (
		<section className='mx-4 flex flex-col items-center space-y-2'>
			<h2 className='text-3xl font-semibold'>Games</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
				{games.map((game) => (
					<div
						key={game.id}
						className='border border-foreground/10 p-4 rounded-md'
					>
						<h3 className='text-xl font-semibold'>{game.title}</h3>
					</div>
				))}
			</div>
		</section>
	);
}
