import "./Avatar.css";

export function Avatar({ name, size = "md" }) {
    const initials = name
        .split (" ")
        .map ((word) => word[0])
        .join ("");
    return (
        <div className={`avatar avatar--${size}`}>
            {initials}
        </div>
    );
}