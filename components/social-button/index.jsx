export default function SocialButton({ bg, bgLofi, href, isLofi }) {
	const backgroundUrl = isLofi ? bgLofi : bg
	return (
		<>
			<a href={href} target="_blank">
				<div className={`w-10 h-10 md:w-16 md:h-16 rounded-2xl`}>
					<img src={backgroundUrl} alt="" />
				</div>
			</a>
		</>
	)
}
