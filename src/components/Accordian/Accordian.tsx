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
				<div className="byu-touch-none byu-uppercase byu-font-black byu-text-sm md:byu-text-lg byu-tracking-widest byu-font-headings">
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
		<div className="byu-w-full byu-bg-white byu-px-5 byu-py-8 byu-border-b byu-border-[#e9e6e3]">
			<div className="byu-flex byu-items-center byu-justify-start">
				<Plus
					onClick={() => setOpen(!open)}
					className={`byu-cursor-pointer byu-transition-transform byu-duration-300 byu-fill-navy ${
						open ? '' : 'byu-rotate-45'
					}`}
					height="15px"
					width="15px"
				/>
				<div
					onClick={() => setOpen(!open)}
					className="byu-ml-3 byu-select-none byu-font-bold byu-text-base byu-cursor-pointer"
				>
					{title}
				</div>
			</div>
			{open && <p className="byu-pt-5 byu-ml-8 byu-font-light">{children}</p>}
		</div>
	);
}
