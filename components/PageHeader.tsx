import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  level?: 1 | 2;
  decorated?: boolean;
};

export default function PageHeader({ children, level = 1, decorated = true }: Props) {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <div className="page-header">
      <Heading>
        {decorated && (
          <span className="decoration" aria-hidden="true">
            <span className="decoration-bar-1" />
            <span className="decoration-bar-2" />
            <span className="decoration-bar-3" />
          </span>
        )}
        {children}
      </Heading>
    </div>
  );
}
