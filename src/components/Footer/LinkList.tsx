import { Children, ReactNode } from "react";

interface LinkListProps {
  children: ReactNode
}
function LinkList({ children }: LinkListProps) {
  let subComponentList = Object.keys(LinkList);

  let subComponents = subComponentList.map(key => {
    return Children.map(children, child =>
      // @ts-ignore
      child.type.name === key ? child : null
    );
  });
  return (
    <div className="byu-mb-10 byu-mr-10 byu-flex byu-flex-col byu-gap-2 sm:max-lg:byu-basis-1/3">
      {subComponents.map(component => component)}
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
LinkList.Title = Title;

interface LinkProps {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  className?: string;
  [propName: string]: any;
}
function Link({ onClick, href, className = "", children, ...props }: LinkProps) {
  let classNames = "byu-text-[#0057b8] byu-cursor-pointer";
  if (onClick)
    return (
      <span {...props} className={classNames + className} onClick={onClick}>
        {children}
      </span>
    );
  else if (href)
    return (
      <a className={classNames + className} {...props} href={href}>
        {children}
      </a>
    );
  else return <>{children}</>;
}
LinkList.Link = Link;

export default LinkList;
