import "./highrisebutton.css";

const HighriseButton = ({ label, fontSize, onClick, type, padding }) => {
  return (
    <div className="button-container h-full flex justify-center items-center mb-4">
      <button
        type={type}
        className={`highrise-button ${padding}`}
        onClick={onClick}
      >
        <span className={fontSize} data-glitch={label}>
          {label}
        </span>
      </button>
    </div>
  );
};

export default HighriseButton;
