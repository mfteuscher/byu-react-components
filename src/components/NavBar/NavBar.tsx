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
		<div className={`byu-flex byu-items-center byu-font-headings byu-text-base ${className}`}>
			{signInOptions.signedIn && <>{signInOptions.userName}</>}
			<AccountIcon className="byu-mx-2 byu-h-5 byu-w-5" />
			{signInOptions.signedIn ? (
				<div className="byu-cursor-pointer" onClick={signInOptions.signOut}>
					Sign Out
				</div>
			) : (
				<div className="byu-cursor-pointer" onClick={signInOptions.signIn}>
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
				className={`byu-cursor-pointer ${className}`}
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
		<header className="byu-z-20 byu-flex byu-flex-col byu-shadow-bottom">
			<div className="byu-flex byu-items-center byu-bg-navy byu-p-3 byu-font-headings">
				{/* BYU Logo */}
				<div
					id="byu-logo-div"
					className="byu-flex byu-h-full byu-flex-initial byu-items-center"
				>
					<a href="https://www.byu.edu/">
						<BYUWhiteLogo width="100px"/>
					</a>
				</div>
				{/* Blue Line Divider */}
				<div className="byu-clear-both byu-mr-3 byu-h-12 byu-w-1 byu-flex-initial byu-border-l byu-border-solid byu-border-l-divider" />
				{/* Title, Subtitle, and Breacrumbs */}
				<div id="titles-and-breadcrumbs" className="byu-flex-intial byu-mr-auto">
					<div className="byu-w-fit">
						{/* Breadcrumbs */}
						{breadcrumbs && breadcrumbs.length !== 0 && (
							<div className="byu-flex byu-flex-wrap byu-items-center byu-divide-x byu-divide-divider ">
								{breadcrumbs.map(({ text, href, onClick }, idx) => (
									<Link
										key={`${text}-${idx}`}
										onClick={onClick}
										href={href}
										className={`${
											idx === 0 ? "byu-pr-2" : "byu-px-2"
										} byu-text-xs byu-text-white byu-opacity-75 byu-transition-opacity byu-duration-200 byu-ease-out hover:byu-opacity-100 hover:byu-ease-in md:byu-text-sm`}
									>
										{text}
									</Link>
								))}
							</div>
						)}
						{/* Title */}
						{title && (
							<Link
								className="byu-text-lg byu-text-white md:byu-text-xl lg:byu-text-2xl"
								onClick={title.onClick}
								href={title.href}
							>
								{title.text}
							</Link>
						)}
						{/* Subtitle */}
						{subtitle && (
							<Link
								className="byu-text-sm byu-text-white md:byu-text-base"
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
					<div className="byu-hidden byu-flex-initial md:byu-block">
						<Button isStatic onClick={button.onClick}>
							{button.text}
						</Button>
					</div>
				)}
				{/* User - Desktop */}
				{signInOptions && (
					<AccountOptions
						signInOptions={signInOptions}
						className="byu-mx-3  byu-hidden byu-text-white md:byu-flex"
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
					}} className="byu-relative byu-hidden byu-flex-initial byu-flex-row byu-items-center md:byu-flex">
						<input
							name="query"
							placeholder="Search"
							className="byu-h-9 byu-w-36 byu-rounded-full byu-px-3 byu-pr-8"
							type="text"
						/>
						<button type="submit" className="byu-absolute byu-right-1 byu-m-1">
							<MagnifyingGlass className="byu-h-5 byu-w-5 byu-fill-navy" />
						</button>
					</form>
				)}

				{/* Mobile Dropdown Button */}
				{dropdownMenuExists && (
					<button
						onClick={() => setDropdownOpen(!dropdownOpen)}
						className={`byu-h-8 byu-w-8 byu-flex-none byu-origin-center byu-transition byu-duration-200 byu-ease-in-out hover:byu-scale-110 md:byu-hidden ${
							dropdownOpen ? "byu-bg-[#0057b8]" : "hover:byu-bg-[#004286]"
						}`}
					>
						<div
							className={`byu-h-8 byu-w-8 byu-transition-transform byu-duration-150 active:byu-rotate-90 ${
								dropdownOpen ? "byu-rotate-90 " : ""
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
				<nav className="byu-hidden byu-h-[50px] byu-w-full byu-border-b byu-border-[#ddd] byu-bg-white byu-pl-28 byu-font-normal byu-text-navy md:byu-flex">
					{nav.map(({ text, href, onClick }, idx) => (
						<Link
							key={`${text}-${idx}`}
							href={href}
							onClick={onClick}
							className={`byu-py-auto byu-mr-0.5 byu-flex byu-h-full byu-items-center byu-justify-center byu-border-b-[3px] byu-px-[22px] hover:byu-border-b-navy hover:byu-bg-[#fafafa] ${
								text === active ? "byu-border-b-navy" : "byu-border-b-transparent"
							}`}
						>
							{text}
						</Link>
					))}
				</nav>
			)}
			{/* Dropdown Menu */}
			{dropdownMenuExists && dropdownOpen && (
				<div className="byu-h-15 byu-flex byu-w-full byu-flex-col byu-bg-white">
					{/* Search Bar - Mobile */}
					{executeSearch && (
						<form onSubmit={e => {
							e.preventDefault(); 
							const target = e.target as typeof e.target & {
								query: { value: string };
							};
							const query = target.query.value;
							executeSearch(query);
						}} className="byu-relative byu-flex byu-flex-row byu-flex-nowrap byu-items-center">
							<input
								name="query"
								placeholder="Search"
								className="byu-flex-auto byu-py-3 byu-px-4 byu-shadow-[0_5px_6px_-7px_rgba(0,0,0,0.3)] byu-outline-2 focus:byu-outline focus-visible:byu-outline-[#0066f481]"
							/>
							<button type="submit" className="byu-absolute byu-right-1 byu-m-1 byu-flex-none">
								<MagnifyingGlass className="byu-h-5 byu-w-5 byu-fill-navy" />
							</button>
						</form>
					)}
					{/* Button and User - Mobile */}
					{(button || signInOptions) && (
						<div
							className={`byu-flex byu-w-full byu-px-4 byu-py-3 ${
								!!button && !!signInOptions ? "byu-justify-between" : "byu-justify-end"
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
									className="byu-text-navy"
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
									className={`byu-w-full byu-border-l-[3px] byu-px-[22px] byu-py-[11px] hover:byu-border-l-navy hover:byu-bg-[#fafafa] ${
										text === active ? "byu-border-l-navy" : "byu-border-l-transparent"
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
