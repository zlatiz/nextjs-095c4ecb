import Image from "next/image";
import React from "react";

export default function Header(): JSX.Element {
  const logoUrl = "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png";
  const safeLogo = encodeURI(logoUrl);
  return (
    <header className="header-root">
      <div className="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 0'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
          <a href="/">
            <Image src={safeLogo} alt="Garber Bros logo" width={180} height={60} unoptimized />
          </a>
        </div>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            <li><a className="nav-link" href="/">Home</a></li>
            <li><a className="nav-link" href="/about">About Us</a></li>
            <li><a className="nav-link" href="/lock-status">Lock Status</a></li>
            <li><a className="nav-link" href="/vessels">Vessels</a></li>
            <li><a className="nav-link" href="/barges">Barges</a></li>
            <li><a className="nav-link" href="/websites/garberbrosinc/images/application.pdf" target="_blank" rel="noreferrer">Employment</a></li>
            <li><a className="nav-link" href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
