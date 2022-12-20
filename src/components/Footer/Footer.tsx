import BYUWordMark from "../../assets/SVG/BYU Logos/byu-wordmark-ring.svg";
import BYUWhiteLogo from "../../assets/SVG/BYU Logos/BYU monogram_white.svg";
import { ReactNode } from "react";

interface FooterProps {
  children?: ReactNode;
}
function Footer({ children }: FooterProps) {
  return (
	<footer className="byu-flex byu-w-full byu-flex-col byu-bg-white ">
		{children && <FooterNav>{children}</FooterNav>}
	  <UniversityFooter />
	</footer>
  );
}

interface FooterNavProps {
  children: ReactNode;
}
function FooterNav({ children }: FooterNavProps) {
  return (
	<div className="byu-mx-auto">
	  <div
		className={`byu-flex byu-max-w-screen-xl byu-flex-col byu-flex-wrap xl:byu-w-[1000px] 2xl:byu-w-[1280px] ${
		  // @ts-ignore
		  children.props.children.length === 3
			? "byu-justify-between"
			: "byu-justify-around"
		} byu-p-5 sm:byu-flex-row 2xl:byu-gap-14`}
	  >
		{children}
	  </div>
	</div>
  );
}

function UniversityFooter() {
  return (
	<div className="byu-flex byu-justify-center byu-bg-navy byu-px-5 byu-py-4 byu-text-white md:byu-px-10">
	  <div className="byu-flex byu-max-w-screen-lg byu-grow byu-flex-col byu-items-center byu-gap-4 md:byu-gap-6 md:max-xl:byu-flex-row">
		<a className="byu-flex-initial" href="https://www.byu.edu/">
		  <BYUWordMark className="byu-hidden xl:byu-block" />
		  <BYUWhiteLogo className="byu-block byu-w-20 md:byu-w-24 xl:byu-hidden" />
		</a>
		<div className="byu-mx-auto byu-flex-1 byu-text-center">
		  <div className="byu-mb-1 byu-text-[10px] sm:byu-text-sm">
			<span className="byu-whitespace-nowrap">Provo, UT 84602, USA</span> |{" "}
			<span className="byu-whitespace-nowrap">801-422-4636</span> |{" "}
			<span className="byu-whitespace-nowrap">
			  © {new Date().getFullYear()} All rights reserved
			</span>
		  </div>
		  <div className="byu-text-[10px] sm:byu-text-sm">
			<a
			  rel="external"
			  referrerPolicy="no-referrer"
			  className="hover:byu-underline"
			  target="_blank"
			  href="http://www.byu.edu/privacy"
			>
			  Privacy Notice
			</a>{" "}
			|{" "}
			<a
			  rel="external"
			  referrerPolicy="no-referrer"
			  className="hover:byu-underline"
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
