export default function ButtonSection({ text, isPrev }) {
	return (
		<>
			<div className="flex flex-col align-center justify-center">
				{isPrev && (
					<div className="flex w-full mx-auto justify-center mt-8 animate-bounce">
						<img
							src="/icons/downArrow.svg"
							className="rotate-180"
						/>
					</div>
				)}
				<span>{text}</span>
				{!isPrev && (
					<div className="flex w-full mx-auto justify-center mt-5 animate-bounce">
						<img src="/icons/downArrow.svg" alt="" />
					</div>
				)}
			</div>
		</>
	)
}
