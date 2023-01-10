import { useState } from 'react'
import ToggleTheme from '../toggle-theme'

export default function Header({ toggleCallback }) {
	const [isToggleMenu, setIsToggleMenu] = useState(false)
	const genericHamburgerLine = `h-[0.2rem] w-6 my-[0.1rem] rounded-full bg-black transition ease transform duration-300`

	const manageClickMenu = () => {
		setIsToggleMenu(!isToggleMenu)
	}

	return (
		<>
			<header className="fixed top-0 w-full flex h-[10vh] backdrop-blur-2xl md:px-10 px-2 items-center justify-between z-10 shadow-md">
				<div className="hidden md:flex justify-between gap-2 md:gap-8 md:text-xl text-sm">
					<a href="#sobre-mi">
						<div>
							<span>Sobre mí</span>
						</div>
					</a>
					<a href="#proyectos">
						<div>
							<span>Proyectos</span>
						</div>
					</a>
					<a href="#contacta-conmigo">
						<div>
							<span>Contacto</span>
						</div>
					</a>
				</div>
				<div className="block md:hidden">
					<button
						className="flex flex-col h-10 w-10 outline-0 rounded justify-center items-center group"
						onClick={manageClickMenu}>
						<div
							className={`${genericHamburgerLine} ${
								isToggleMenu
									? 'rotate-45 mt-3 translate-y-0 group-hover:opacity-100'
									: 'group-hover:opacity-100'
							}`}
						/>
						<div
							className={`${genericHamburgerLine} ${
								isToggleMenu
									? 'opacity-0'
									: 'group-hover:opacity-100'
							}`}
						/>
						<div
							className={`${genericHamburgerLine} ${
								isToggleMenu
									? '-rotate-45 -translate-y-[0.85rem] group-hover:opacity-100'
									: 'group-hover:opacity-100'
							}`}
						/>
					</button>
				</div>
				<div className="mt-12">
					<ToggleTheme callback={toggleCallback} />
				</div>
			</header>
		</>
	)
}
