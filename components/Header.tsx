"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BLOG_URL } from "@/lib/site";

const services = [
  { href: "/services/cryptocurrency", label: "暗号通貨関連サービス" },
  { href: "/services/consulting", label: "ソリューション／コンサルティング" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Close menus on navigation.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
    setDropdownOpen(false);
  }

  // Close the dropdown when clicking outside of it.
  useEffect(() => {
    if (!dropdownOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setDropdownOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdownOpen(false);
    };
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [dropdownOpen]);

  const isActive = (href: string) => pathname === href || pathname === `${href}.html`;

  return (
    <nav className="navbar" aria-label="メインメニュー">
      <div className="container navbar-inner">
        <Link className="navbar-brand" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/logo+text.png" alt="合同会社ジャノム" height={25} />
        </Link>
        <button
          type="button"
          className="navbar-toggle"
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="sr-only">メニューを開閉</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <div id="navbar-menu" className={`navbar-menu${menuOpen ? " open" : ""}`}>
          <ul className="nav">
            <li className={isActive("/about") ? "active" : undefined}>
              <Link href="/about">会社概要</Link>
            </li>
            <li
              ref={dropdownRef}
              className={`dropdown${dropdownOpen ? " open" : ""}${
                services.some((s) => isActive(s.href)) ? " active" : ""
              }`}
            >
              <button
                type="button"
                className="dropdown-toggle"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onClick={() => setDropdownOpen((v) => !v)}
              >
                事業内容 <span className="caret" aria-hidden="true" />
              </button>
              <ul className="dropdown-menu">
                {services.map((s) => (
                  <li key={s.href} className={isActive(s.href) ? "active" : undefined}>
                    <Link href={s.href}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className={isActive("/members") ? "active" : undefined}>
              <Link href="/members">メンバー紹介</Link>
            </li>
          </ul>
          <ul className="nav nav-right">
            <li>
              <a href={BLOG_URL} target="_blank" rel="noopener noreferrer">
                ブログ (外部サイト)
              </a>
            </li>
            <li className={isActive("/recruit") ? "active" : undefined}>
              <Link href="/recruit">採用情報</Link>
            </li>
            <li className={isActive("/contact") ? "active" : undefined}>
              <Link href="/contact">お問い合わせ</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
