import Link from 'next/link';
import React from 'react';

// Define the props
type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'tertiary';
    href?: string;
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
    variant = 'primary',
    href,
    children,
    className = '',
    ...props
}: ButtonProps) {

    // Base styles (M3 Expressive: rounded-full, focus ring, transition)
    const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary";

    // Variant-specific styles
    const variantStyles = {
        primary: "bg-primary text-on-primary hover:shadow-md hover:bg-opacity-90",
        secondary: "border border-outline text-primary hover:bg-primary-container",
        tertiary: "text-primary hover:bg-primary-container",
    };

    const combinedClassName = `${baseStyle} ${variantStyles[variant]} ${className}`;

    // Render as a Next.js Link if 'href' is provided
    if (href) {
        return (
            <Link href={href} className={combinedClassName} {...props}>
                {children}
            </Link>
        );
    }

    // Otherwise, render as a standard button
    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}