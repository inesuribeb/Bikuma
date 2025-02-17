import './Logotipos.css'

function Logotipos() {
    const logotiposObj = {
        bizkaiadforal: "/images/logotipos/g10.png",
        bbva: "/images/logotipos/Group.png",
        alsa: "/images/logotipos/Vector.png",
        bilbobus: "/images/logotipos/text14418.png",
        bizkaibus: "/images/logotipos/g27550.png",
        vilamuseu: "/images/logotipos/logo-vilamuseu 2.png",
    };
    return (
        <div className="logotipos-container">
            {Object.entries(logotiposObj).map(([name, src]) => (
                <img
                    key={name}
                    src={src}
                    alt={`${name} logo`}
                    className="logo-image"
                />
            ))}
        </div>
    )
}

export default Logotipos;