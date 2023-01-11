import ButtonSection from '../button-section'

export default function Section({
	id,
	children,
	prevSection,
	prevSectionHref,
	nextSection,
	nextSectionHref,
	isFirstSection
}) {
	return (
		<>
			<section
				className="h-[100dvh] pt-[10vh] mx-8 md:mx-28 snap-start transition-all"
				id={id}>
				<div className="w-full relative flex justify-center items-start h-[15%]">
					{prevSection && (
						<a href={prevSectionHref}>
							<ButtonSection text={prevSection} isPrev="true" />
						</a>
					)}
				</div>

				<div className="h-[70%]">{children}</div>

				<div className="w-full flex justify-center items-center h-[15%]">
					{nextSection && (
						<a href={nextSectionHref}>
							<ButtonSection text={nextSection} />
						</a>
					)}
				</div>
			</section>
		</>
	)
}
