import React from 'react';



// Assurez-vous que ButtonProps inclut 'onClick' et les autres attributs HTML standard pour un bouton
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon: React.ReactNode;
    label: string;
    className?: string;
    isLoading?: boolean
}


// Utilisation d'un bouton HTML avec une gestion correcte des événements onClick
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ icon, children, label, onClick, className, ...props }) => {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-x-2 px-4 py-2 bg-[#79CE25] text-white rounded hover:bg-[#a6ff4d] ${className}`}
            {...props} // Inclure tous les autres attributs HTML standard
        >
            {icon && <span>{icon}</span>}
            <span>{label}</span>
            
            {children}
        </button>
    );
})


Button.displayName = "Button"

export default Button;

