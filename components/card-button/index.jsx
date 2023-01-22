import Link from 'next/link'

export default function CardButton({
	isAlternative,
	isLofi,
	title,
	date,
	routeToGo,
	hasGoToOtherPage
}) {
	const getCardButton = () => {
		return (
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
							? 'bg-white border-2 border-black text-transparent'
							: "bg-[url('/prtfolio/img/UX_UI.webp')]"
						: isLofi
						? 'bg-white border-2 border-black text-transparent'
						: "bg-[url('/prtfolio/img/DisenoGrafico.webp')]"
				}
                bg-cover
                flex
                flex-col
                justify-center
                items-center
                hover:cursor-pointer
				w-40 h-40
				md:w-56 md:h-56 shadow transition-all duration-300 hover:w-36 hover:h-36 md:hover:w-[13.5rem] md:hover:h-[13.5rem] hover:shadow-2xl rounded-3xl select-none`}>
				<div
					className={`w-full flex items-center justify-center ${
						date && 'h-[66%]'
					} text-center px-8`}>
					<span
						className={`font-serif text-2xl ${
							date && 'mt-[33%]'
						} select-none`}>
						{title}
					</span>
				</div>
				{date && (
					<div className="pt-4 h-[33%] font-serif w-full text-right pr-6">
						<span className="md:text-xl">{date}</span>
					</div>
				)}
			</div>
		)
	}
	return (
		<>
			{hasGoToOtherPage ? (
				<Link href={routeToGo}>{getCardButton()}</Link>
			) : (
				<a href={`${routeToGo}`}>{getCardButton()}</a>
			)}
		</>
	)
}
