import BYUWhiteLogo from '../../assets/SVG/BYU Logos/BYU monogram_white.svg';
import ThreeLines from "../../assets/SVG/Icons/three-lines.svg?url";
import AccountIcon from '../../assets/SVG/Icons/account.svg';
import CloseX from "../../assets/SVG/Icons/close-x.svg?url";
import MagnifyingGlass from "../../assets/SVG/Icons/magnifying-glass.svg";
import Button from "../Button/Button";
import "../../global.css";
import { ReactNode, useState } from "react";

interface signInProps {
	signedIn: boolean
	userName: string
	signIn: () => void
	signOut: () => void
}

interface AccountOptionsProps {
	signInOptions: signInProps
	className: string
}

function AccountOptions({ signInOptions, className = "" }: AccountOptionsProps) {
	return (
		<div className={`flex items-center font-headings text-base ${className}`}>
			{signInOptions.signedIn && <>{signInOptions.userName}</>}
			<AccountIcon className="mx-2 h-5 w-5" />
			{signInOptions.signedIn ? (
				<div className="cursor-pointer" onClick={signInOptions.signOut}>
					Sign Out
				</div>
			) : (
				<div className="cursor-pointer" onClick={signInOptions.signIn}>
					Sign In
				</div>
			)}
		</div>
	);
}

interface LinkProps {
	onClick?: () => void
	href?: string,
	children: ReactNode
	className: string
	[propName: string]: any;
}

function Link({ onClick, href, children, className, ...props }: LinkProps) {
	if (onClick)
		return (
			<div
				className={`cursor-pointer ${className}`}
				onClick={onClick}
				{...props}
			>
				{children}
			</div>
		);
	else if (href)
		return (
			<a href={href} className={className} {...props}>
				{children}
			</a>
		);
	else
		return (
			<div className={className} {...props}>
				{children}
			</div>
		);
}

interface TextProps {
	text: string
	onClick?: () => void
	href?: string
}

interface NavBarProps {
	title?: TextProps
	subtitle?: TextProps,
	breadcrumbs?: TextProps[],
	nav?: TextProps[],
	active?: string,
	button?: TextProps,
	executeSearch?: (query: string) => void,
	signInOptions?: signInProps
}

export default function NavBar({
	title,
	subtitle,
	breadcrumbs,
	nav,
	active,
	button,
	executeSearch,
	signInOptions,
}: NavBarProps) {
	const dropdownMenuExists =
		!!nav || !!button || !!executeSearch || !!signInOptions;
	const [dropdownOpen, setDropdownOpen] = useState(false);
	return (
		<header className="header z-20 flex flex-col shadow-bottom">
			<div className="flex items-center bg-navy p-3 font-headings">
				{/* BYU Logo */}
				<div
					id="byu-logo-div"
					className="flex h-full flex-initial items-center"
				>
					<a href="https://www.byu.edu/">
						<BYUWhiteLogo width="100px"/>
					</a>
				</div>
				{/* Blue Line Divider */}
				<div className="clear-both mr-3 h-12 w-1 flex-initial border-l border-solid border-l-divider" />
				{/* Title, Subtitle, and Breacrumbs */}
				<div id="titles-and-breadcrumbs" className="flex-intial mr-auto">
					<div className="w-fit">
						{/* Breadcrumbs */}
						{breadcrumbs && breadcrumbs.length !== 0 && (
							<div className="flex flex-wrap items-center divide-x divide-divider ">
								{breadcrumbs.map(({ text, href, onClick }, idx) => (
									<Link
										key={`${text}-${idx}`}
										onClick={onClick}
										href={href}
										className={`${
											idx === 0 ? "pr-2" : "px-2"
										} text-xs text-white opacity-75 transition-opacity duration-200 ease-out hover:opacity-100 hover:ease-in md:text-sm`}
									>
										{text}
									</Link>
								))}
							</div>
						)}
						{/* Title */}
						{title && (
							<Link
								className="text-lg text-white md:text-xl lg:text-2xl"
								onClick={title.onClick}
								href={title.href}
							>
								{title.text}
							</Link>
						)}
						{/* Subtitle */}
						{subtitle && (
							<Link
								className="text-sm text-white md:text-base"
								onClick={subtitle.onClick}
								href={subtitle.href}
							>
								{subtitle.text}
							</Link>
						)}
					</div>
				</div>
				{/* Button - Desktop */}
				{button && (
					<div className="hidden flex-initial md:block">
						<Button isStatic onClick={button.onClick}>
							{button.text}
						</Button>
					</div>
				)}
				{/* User - Desktop */}
				{signInOptions && (
					<AccountOptions
						signInOptions={signInOptions}
						className="mx-3 hidden text-white md:flex"
					/>
				)}
				{/* Search Bar - Desktop */}
				{executeSearch && (
					<form onSubmit={e => {
						e.preventDefault(); 
						const target = e.target as typeof e.target & {
							query: { value: string };
						};
						const query = target.query.value;
						executeSearch(query);
					}} className="relative hidden flex-initial flex-row items-center md:flex">
						<input
							name="query"
							placeholder="Search"
							className="h-9 w-36 rounded-full px-3 pr-8"
							type="text"
						/>
						<button type="submit" className="absolute right-1 m-1">
							<MagnifyingGlass className="h-5 w-5 fill-navy" />
						</button>
					</form>
				)}

				{/* Mobile Dropdown Button */}
				{dropdownMenuExists && (
					<button
						onClick={() => setDropdownOpen(!dropdownOpen)}
						className={`h-8 w-8 flex-none origin-center transition duration-200 ease-in-out hover:scale-110 md:hidden ${
							dropdownOpen ? "bg-[#0057b8]" : "hover:bg-[#004286]"
						}`}
					>
						<div
							className={`h-8 w-8 transition-transform duration-150 active:rotate-90 ${
								dropdownOpen ? "rotate-90 " : ""
							}`}
							style={{
								backgroundImage: `url('${dropdownOpen ? CloseX : ThreeLines}')`,
							}}
						/>
					</button>
				)}
			</div>
			{/* Navigation - Desktop */}
			{nav && nav.length != 0 && (
				<nav className="hidden h-[50px] w-full border-b border-[#ddd] bg-white pl-28 font-normal text-navy md:flex">
					{nav.map(({ text, href, onClick }, idx) => (
						<Link
							key={`${text}-${idx}`}
							href={href}
							onClick={onClick}
							className={`py-auto mr-0.5 flex h-full items-center justify-center border-b-[3px] px-[22px] hover:border-b-navy hover:bg-[#fafafa] ${
								text === active ? "border-b-navy" : "border-b-transparent"
							}`}
						>
							{text}
						</Link>
					))}
				</nav>
			)}
			{/* Dropdown Menu */}
			{dropdownMenuExists && dropdownOpen && (
				<div className="h-15 flex w-full flex-col bg-white">
					{/* Search Bar - Mobile */}
					{executeSearch && (
						<form onSubmit={e => {
							e.preventDefault(); 
							const target = e.target as typeof e.target & {
								query: { value: string };
							};
							const query = target.query.value;
							executeSearch(query);
						}} className="relative flex flex-row flex-nowrap items-center">
							<input
								name="query"
								placeholder="Search"
								className="flex-auto py-3 px-4 shadow-[0_5px_6px_-7px_rgba(0,0,0,0.3)] outline-2 focus:outline focus-visible:outline-[#0066f481]"
							/>
							<button type="submit" className="absolute right-1 m-1 flex-none">
								<MagnifyingGlass className="h-5 w-5 fill-navy" />
							</button>
						</form>
					)}
					{/* Button and User - Mobile */}
					{(button || signInOptions) && (
						<div
							className={`flex w-full px-4 py-3 ${
								!!button && !!signInOptions ? "justify-between" : "justify-end"
							}`}
						>
							{button && (
								<Button isStatic onClick={button.onClick}>
									{button.text}
								</Button>
							)}
							{signInOptions && (
								<AccountOptions
									signInOptions={signInOptions}
									className="text-navy"
								/>
							)}
						</div>
					)}
					{/* Navigation - Mobile */}
					{nav && nav.length !== 0 && (
						<nav className="flex flex-col border-b border-b-[#ddd] text-navy">
							{nav.map(({ text, href, onClick }, idx) => (
								<Link
									key={`${text}-${idx}`}
									href={href}
									onClick={onClick}
									className={`w-full border-l-[3px] px-[22px] py-[11px] hover:border-l-navy hover:bg-[#fafafa] ${
										text === active ? "border-l-navy" : "border-l-transparent"
									}`}
								>
									{text}
								</Link>
							))}
						</nav>
					)}
				</div>
			)}
		</header>
	);
}
