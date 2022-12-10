import { ReactElement, ReactNode, useState, Children } from 'react';
import Plus from '../../assets/SVG/Icons/Plus.svg';
import '../../global.css';

interface AccordianListProps {
	title?: string;
	children?:
		| ReactElement<AccordianItemProps>
		| Array<ReactElement<AccordianItemProps>>;
}
export function AccordianList({ title, children }: AccordianListProps) {
	const AccordianItems = Children.toArray(children).filter(
		// @ts-ignore
		(child) => child.type.name === 'AccordianItem'
	);
	return (
		<div className="p-5">
			{title && (
				<div className="touch-none uppercase font-black text-sm md:text-lg tracking-widest font-headings">
					{title}
				</div>
			)}
			{AccordianItems}
		</div>
	);
}

interface AccordianItemProps {
	title: string;
	children?: ReactNode;
}
export function AccordianItem({ title, children }: AccordianItemProps) {
	const [open, setOpen] = useState(false);
	return (
		<div className="w-full bg-white px-5 py-8 border-b border-[#e9e6e3]">
			<div className="flex items-center justify-start">
				<Plus
					onClick={() => setOpen(!open)}
					className={`cursor-pointer transition-transform duration-300 fill-navy ${
						open ? '' : 'rotate-45'
					}`}
					height="15px"
					width="15px"
				/>
				<div
					onClick={() => setOpen(!open)}
					className="ml-3 select-none font-bold text-base cursor-pointer"
				>
					{title}
				</div>
			</div>
			{open && <p className="pt-5 ml-8 font-light">{children}</p>}
		</div>
	);
}
