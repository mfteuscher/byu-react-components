import BYUWordMark from '../../assets/SVG/BYU Logos/byu-wordmark-ring.svg';
import BYUWhiteLogo from '../../assets/SVG/BYU Logos/BYU monogram_white.svg';
import React from "react";

interface FooterProps {
	children: React.ReactNode;
}
function Footer({ children }: FooterProps) {
	return (
		<footer className="flex w-full flex-col bg-white ">
			{children && <FooterNav>{children}</FooterNav>}
			<UniversityFooter />
		</footer>
	);
}

interface FooterNavProps {
	children: React.ReactNode;
}
function FooterNav({ children }: FooterNavProps) {
	return (
		<div className="mx-auto">
			<div
				className={`flex max-w-screen-xl flex-col flex-wrap xl:w-[1000px] 2xl:w-[1280px] ${
					// @ts-ignore
					children.props.children.length === 3
						? "justify-between"
						: "justify-around"
				} p-5 sm:flex-row 2xl:gap-14`}
			>
				{children}
			</div>
		</div>
	);
}

function UniversityFooter() {
	return (
		<div className="flex justify-center bg-navy px-5 py-4 text-white md:px-10">
			<div className="flex max-w-screen-lg grow flex-col items-center gap-4 md:gap-6 md:max-xl:flex-row">
				<a className="flex-initial" href="https://www.byu.edu/">
					<BYUWordMark className="hidden xl:block"/>
					<BYUWhiteLogo className="block w-20 md:w-24 xl:hidden"/>
				</a>
				<div className="mx-auto flex-1 text-center">
					<div className="mb-1 text-[10px] sm:text-sm">
						<span className="whitespace-nowrap">Provo, UT 84602, USA</span> |{" "}
						<span className="whitespace-nowrap">801-422-4636</span> |{" "}
						<span className="whitespace-nowrap">
							© {new Date().getFullYear()} All rights reserved
						</span>
					</div>
					<div className="text-[10px] sm:text-sm">
						<a
							rel="external"
							referrerPolicy="no-referrer"
							className="hover:underline"
							target="_blank"
							href="http://www.byu.edu/privacy"
						>
							Privacy Notice
						</a>{" "}
						|{" "}
						<a
							rel="external"
							referrerPolicy="no-referrer"
							className="hover:underline"
							target="_blank"
							href="https://www.byu.edu/cookie-preferences"
						>
							Cookie Preferences
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
