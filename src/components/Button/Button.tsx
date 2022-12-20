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
		if (isStatic) styles = styles + 'hover:byu-bg-[#1a66b7] byu-py-1';
		else
			styles = styles + 'byu-transition-all byu-duration-300 hover:byu-scale-[1.15] byu-py-3';
		if (variant === 'primary')
			styles = styles + ' byu-bg-btn-primary byu-text-white byu-border-btn-primary';
		else if (variant === 'secondary')
			styles = styles + ' byu-bg-navy byu-text-white byu-border-navy';
		else if (variant === 'white')
			styles = styles + ' byu-bg-white byu-text-btn-primary byu-border-gray';
		return styles;
	};

	return (
		<button
			className={`${getStyles()} ${className} byu-rounded byu-border byu-border-solid byu-px-5 byu-font-semibold`}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
