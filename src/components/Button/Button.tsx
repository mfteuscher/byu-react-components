import '../../global.css';
import { ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode;
	onClick?: () => void;
	className?: string;
	type?: 'button' | 'submit' | 'reset';
	isStatic?: boolean;
	variant?: 'primary' | 'secondary' | 'white';
	[propName: string]: any;
}

export default function Button({
	children,
	onClick,
	className = '',
	type = 'button',
	isStatic = false,
	variant = 'primary',
}: ButtonProps) {
	const getStyles = () => {
		let styles = '';
		if (isStatic) styles = styles + 'hover:bg-[#1a66b7] py-1';
		else
			styles = styles + 'transition-all duration-300 hover:scale-[1.15] py-3';
		if (variant === 'primary')
			styles = styles + ' bg-btn-primary text-white border-btn-primary';
		else if (variant === 'secondary')
			styles = styles + ' bg-navy text-white border-navy';
		else if (variant === 'white')
			styles = styles + ' bg-white text-btn-primary border-gray';
		return styles;
	};

	return (
		<button
			className={`${getStyles()} ${className} rounded border border-solid px-5 font-semibold`}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
