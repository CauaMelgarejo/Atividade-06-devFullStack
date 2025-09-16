function Button({ children, onClick, variant = "solid", disabled }) {
  let finalClassName = "btn";

  if (variante === "outline") {
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
