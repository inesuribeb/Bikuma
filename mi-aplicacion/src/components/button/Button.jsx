import './Button.css';

function Button({ 
  children, 
  variant = 'solid', 
  onClick, 
  icon = null, 
  className = '', 
  ...props 
}) {
  return (
    <button
      onClick={onClick}
      className={`button ${variant} ${className}`}
      {...props}
    >
      <div className="button-content">
        {icon && icon}
        {children}
      </div>
    </button>
  );
}

export default Button;