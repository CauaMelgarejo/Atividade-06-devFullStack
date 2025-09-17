import React from 'react';

type ButtonProps = {
  children: React.ReactNode; 
  onClick?: () => void; 
  variant?: 'solid' | 'outline' | 'ghost'; 
  disabled?: boolean;
}

function Button({ children, onClick, variant = "solid", disabled }: ButtonProps) {
  let finalClassName = "btn";

  if (variant === "outline") { 
    finalClassName = finalClassName + " btn-outline";
  } else if (variant === "ghost") {
    finalClassName = finalClassName + " btn-ghost";
  } else {
    finalClassName = finalClassName + " btn-solid";
  }

  return (
    <button onClick={onClick} disabled={disabled} className={finalClassName}>
      {children}
    </button>
  );
}

export default Button;