import { Children, ReactNode } from "react";
import Button from "../Button/Button";

const getChildByName = (children: ReactNode, name: string) =>
	// @ts-ignore
	Children.map(children, child => (child.type.name === name ? child : null));

function ContactInfo({ children }: { children: ReactNode}) {
	const title = getChildByName(children, "Title");
	const address = getChildByName(children, "Address");
	const email = getChildByName(children, "Email");
	const phone = getChildByName(children, "Phone");
	const button = getChildByName(children, "Button");
	return (
		<div className="byu-mb-10 byu-mr-10 byu-flex byu-flex-col byu-gap-1">
			{title}
			{address}
			{email}
			{phone}
			<div className="byu-mt-4">{button}</div>
		</div>
	);
}

function Title({ children }: { children: ReactNode}) {
	return (
		<div className="byu-mb-3 byu-font-headings byu-text-sm byu-font-extrabold byu-uppercase byu-tracking-widest">
			{children}
		</div>
	);
}
ContactInfo.Title = Title;

function Phone({ children }: { children: ReactNode}) {
	return <a href={`tel:${children}`}>{children}</a>;
}
ContactInfo.Phone = Phone;

function Email({ children }: { children: ReactNode}) {
	return <a href={`mailto:${children}`}>{children}</a>;
}
ContactInfo.Email = Email;

function Address({ children }: { children: ReactNode}) {
	return <>{children}</>;
}
ContactInfo.Address = Address;

ContactInfo.Button = Button;

export default ContactInfo;
