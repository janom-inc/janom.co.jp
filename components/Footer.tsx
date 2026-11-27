import { GITHUB_REPOSITORY } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const version = process.env.NEXT_PUBLIC_COMMIT_HASH ?? "unknown";
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p>Copyright &copy; Janom LLC 2014-{year}. All rights reserved.</p>
          <p className="version">version: {version}</p>
        </div>
        <div>
          [ Source Code is Available at{" "}
          <a href={GITHUB_REPOSITORY} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{" "}
          ]
        </div>
      </div>
    </footer>
  );
}
