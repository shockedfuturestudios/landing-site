import React from 'react';

// Pass through className and other props to the SVG
export default function Logo(props: React.SVGProps<SVGSVGElement>) {
    return (
        // REPLACE THIS SVG WITH YOUR OWN LOGO
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            {...props} // This applies className, etc.
        >
            <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
        </svg>
        // END OF PLACEHOLDER
    );
}