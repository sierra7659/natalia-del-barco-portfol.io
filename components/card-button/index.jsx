import Link from 'next/link'

export default function CardButton({
	isAlternative,
	isLofi,
	title,
	date,
	routeToGo
}) {
	return (
		<>
			<Link href={routeToGo}>
				<div
					style={
						isLofi
							? {
									WebkitTextStroke: '1px black'
							  }
							: {
									WebkitTextStrokeWidth: 0,
									WebkitTextStrokeColor: 'none'
							  }
					}
					className={`${
						isAlternative
							? isLofi
								? 'bg-transparent border-2 border-black text-transparent'
								: "bg-[url('/img/DisenoGrafico.jpg')]"
							: isLofi
							? 'bg-transparent border-2 border-black text-transparent'
							: "bg-[url('/img/UX:UI.jpg')]"
					}
                bg-cover
                flex
                flex-col
                justify-center
                items-center
                hover:cursor-pointer
					w-40 h-40
				md:w-64 md:h-64
				 mt-[-10vh] shadow transition-all duration-300 hover:w-36 hover:h-36 md:hover:w-72 md:hover:h-72 hover:shadow-2xl rounded-3xl select-none`}>
					<div className="w-full text-center">
						<span className="font-serif text-2xl select-none">
							{title}
						</span>
					</div>
				</div>
			</Link>
		</>
	)
}
