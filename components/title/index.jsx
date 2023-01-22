import useCtxLofi from '../../hooks/theme/useLofiThemeState'
import { getTextStyle } from '../../modules/style/textStyle'

export default function Title({ children, sizeOfText }) {
	const [isLofi] = useCtxLofi()
	const textStyle = getTextStyle(isLofi)
	return (
		<>
			<span
				className={`font-serif ${
					sizeOfText ?? 'text-4xl md:text-8xl'
				} dark:text-transparent transition-all duration-200`}
				style={textStyle}>
				{children}
			</span>
		</>
	)
}
