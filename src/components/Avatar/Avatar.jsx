import "./Avatar.css";

export function Avatar({ name, size = "md", image, initialOverlay }) {
    const initials = name
        .split (" ")
        .map ((word) => word[0])
        .join ("");
    
    return (
       <div className={`avatar avatar--${size}`}>
            {image ? <img src={image} alt={name} /> : !initialOverlay && initials}
            {initialOverlay && <div className="avatar__overlay">{initials}</div>}

        </div>
    );
}