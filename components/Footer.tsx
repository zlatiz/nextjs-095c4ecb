import React from "react";

export default function Footer(): JSX.Element {
  return (
    <footer className="footer-root">
      <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
          <div style={{fontSize: 14}}>© Copyright 2015 by <span>Garber Bros, Inc.</span>. All Rights Reserved.</div>
        </div>
        <div style={{textAlign: 'right'}}>
          <div style={{marginBottom: 6}}><a href="/transparency-in-coverage" style={{color: 'inherit', textDecoration: 'none'}}>Transparency in Coverage</a></div>
          <div style={{fontSize: 13}}>
            <a href="http://www.goodhiring.com/garberbrosinc/apply/open">http://www.goodhiring.com/garberbrosinc/apply/open</a>
            <span style={{marginLeft: 12}}></span>
          </div>
          <div style={{marginTop: 6}}>
            <a href="contact.aspx">contact.aspx</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
