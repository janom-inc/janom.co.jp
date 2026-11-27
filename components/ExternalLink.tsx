import type { AnchorHTMLAttributes } from "react";

/** A link that opens in a new tab (replacement of the old `data-newtab`). */
export default function ExternalLink({
  children,
  className,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={["external-link", className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </a>
  );
}
