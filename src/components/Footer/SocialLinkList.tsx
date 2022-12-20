import { Children, ReactNode, ReactElement } from "react";
import FacebookLogo from "../../assets/PNG/Social Media Icons/FacebookLogo.png";
import TwitterLogo from "../../assets/SVG/Icons/social/TwitterLogo.svg?url";
import InstagramLogo from "../../assets/SVG/Icons/social/InstagramLogo.svg?url";
import YouTubeLogo from "../../assets/PNG/Social Media Icons/YouTubeLogo.png";
import LinkedInLogo from "../../assets/PNG/Social Media Icons/LinkedInLogo.png";


const getChildByName = (children: ReactNode, name: string) =>
  // @ts-ignore
  Children.map(children, child => (child.type.name === name ? child : null));

interface SocialLinkListProps {
  children: ReactNode
}
function SocialLinkList({ children }: SocialLinkListProps) {
  let subComponentList = Object.keys(SocialLinkList);

  let subComponents = subComponentList
    .map(key => getChildByName(children, key))
    .filter(childArr => {
      // @ts-ignore
      if (childArr.length === 0) return true;
      else {
        // @ts-ignore
        return childArr[0].type.name !== "Title";
      }
    });

  const title = getChildByName(children, "Title");
  return (
    <div className="byu-mb-10 byu-mr-10 byu-flex byu-flex-col byu-gap-2 sm:max-lg:byu-basis-1/3">
      {title}
      <div className="byu-flex byu-flex-wrap">
        {subComponents.map(component => component)}
      </div>
    </div>
  );
}

interface TitleProps {
  children: React.ReactNode;
}
function Title({ children }: TitleProps) {
  return (
    <div className="byu-mb-2 byu-font-headings byu-text-sm byu-font-extrabold byu-uppercase byu-tracking-widest">
      {children}
    </div>
  );
}
SocialLinkList.Title = Title;

interface LinkProps {
  type?: string
  onClick?: () => void;
  href?: string;
  children?: React.ReactNode;
  className?: string;
  [propName: string]: any;
}

function Link({ href, type, className, ...props }: LinkProps) {
  let classNames = "byu-mx-1";
  let image = null;
  switch (type) {
    case "Facebook":
      image = (
        <img
          className=" byu-h-5 w-5 byu-transition-all byu-duration-200 hover:byu-opacity-70 "
          src={FacebookLogo}
        />
      );
      break;
    case "Twitter":
      image = (
        <img
          className="byu-h-5 byu-w-5 byu-transition-all byu-duration-200 hover:byu-opacity-70"
          src={TwitterLogo}
        />
      );
      break;
    case "Instagram":
      image = (
        <img
          className="byu-h-5 byu-w-5 byu-transition-all byu-duration-200 hover:byu-opacity-70"
          src={InstagramLogo}
        />
      );
      break;
    case "YouTube":
      image = (
        <img
          className="byu-mt-1 byu-w-5 byu-transition-all byu-duration-200 hover:byu-opacity-70"
          src={YouTubeLogo}
        />
      );
      break;
    case "LinkedIn":
      image = (
        <img
          className="byu-h-5 byu-w-5 byu-transition-all byu-duration-200 hover:byu-opacity-70"
          src={LinkedInLogo}
        />
      );
      break;
  }
  return (
    <a
      href={href}
      referrerPolicy="no-referrer"
      className={`${classNames} ${className}`}
      {...props}
    >
      {image}
    </a>
  );
}
SocialLinkList.Link = Link;

export default SocialLinkList;
