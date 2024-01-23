import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";

export default function Navbar() {
	return (
		<header className="padding-x py-8 absolute z-10 w-full">
			<nav className="flex justify-between items-center max-container">
				<a href="/">
					<img src={headerLogo} alt="Logo" />
				</a>
				<ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
					{navLinks.map((link) => (
						<li key={link.href}>
							<a
								href={link.href}
								className="font-montserrat leading-normal text-lg text-slate-gray"
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
				<div className="hidden max-lg:block">
					<img
						src={hamburger}
						width={25}
						height={25}
						alt="hamburguer-menu"
					/>
				</div>
			</nav>
		</header>
	);
}
