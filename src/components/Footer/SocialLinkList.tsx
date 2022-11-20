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
    <div className="mb-10 mr-10 flex flex-col gap-2 sm:max-lg:basis-1/3">
      {title}
      <div className="flex flex-wrap">
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
    <div className="mb-2 font-headings text-sm font-extrabold uppercase tracking-widest">
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
  let classNames = "mx-1";
  let image = null;
  switch (type) {
    case "Facebook":
      image = (
        <img
          className=" h-5 w-5 transition-all duration-200 hover:opacity-70 "
          src={FacebookLogo}
        />
      );
      break;
    case "Twitter":
      image = (
        <img
          className="h-5 w-5 transition-all duration-200 hover:opacity-70"
          src={TwitterLogo}
        />
      );
      break;
    case "Instagram":
      image = (
        <img
          className="h-5 w-5 transition-all duration-200 hover:opacity-70"
          src={InstagramLogo}
        />
      );
      break;
    case "YouTube":
      image = (
        <img
          className="mt-1 w-5 transition-all duration-200 hover:opacity-70"
          src={YouTubeLogo}
        />
      );
      break;
    case "LinkedIn":
      image = (
        <img
          className="h-5 w-5 transition-all duration-200 hover:opacity-70"
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
