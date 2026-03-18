import "./Badge.css";

export function Badge({ label, variant = "default" }) {
  return (
    <span className={`badge badge--${variant}`}>
      {label}
    </span>
  );
}