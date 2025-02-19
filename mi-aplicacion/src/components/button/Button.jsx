import './Button.css';

function Button({ 
  children, 
  variant = 'solid', 
  size = 'default', 
  onClick, 
  icon = null, 
  className = '', 
  ...props 
}) {
  return (
    <button
      onClick={onClick}
      className={`button ${variant} ${size} ${className}`}
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