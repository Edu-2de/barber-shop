import { cx } from "class-variance-authority";
import type React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface MainContentProps extends React.ComponentProps<"main"> {}

export const MainContent = ({
	children,
	className,
	...props
}: MainContentProps) => {
	return (
		<main className={cx( className)} {...props}>
			{children}
		</main>
	);
};
