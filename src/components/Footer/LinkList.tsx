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
    <div className="mb-10 mr-10 flex flex-col gap-2 sm:max-lg:basis-1/3">
      {subComponents.map(component => component)}
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
LinkList.Title = Title;

interface LinkProps {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  className?: string;
  [propName: string]: any;
}
function Link({ onClick, href, className = "", children, ...props }: LinkProps) {
  let classNames = "text-[#0057b8] cursor-pointer";
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
