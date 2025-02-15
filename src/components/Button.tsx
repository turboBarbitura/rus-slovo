import React, {ButtonHTMLAttributes, PropsWithChildren} from 'react';

export const Button: React.FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>> =
    ({children, ...props}) => {
    return (
        <button
            {...props}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-blue-300"
        >
            {children}
        </button>
    );
};