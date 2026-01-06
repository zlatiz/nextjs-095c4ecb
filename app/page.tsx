import React from "react";
import Image from "next/image";
import Card from "../components/ui/card";
import { Button } from "../components/ui/button";

interface SiteImage {
  url: string;
  alt: string;
}

const IMAGES: SiteImage[] = [
  { url: "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png", alt: "Logo" },
  { url: "https://garberbrosinc.com/websites/garberbrosinc/images/home-vessels.jpg", alt: "Our Vessels" },
  { url: "https://garberbrosinc.com/websites/garberbrosinc/images/home-employment.jpg", alt: "Employment Application" },
  { url: "https://garberbrosinc.com/websites/garberbrosinc/images/home-contact.jpg", alt: "Contact Garber Bros" }
];

export default function Page(): JSX.Element {
  const images = Array.isArray(IMAGES) ? IMAGES : [];
  const heroImage = images[1];
  const galleryImages = images;

  return (
    <div>
      <section className="container hero" aria-labelledby="hero-heading">
        <div className="hero-card">
          <h1 id="hero-heading" style={{marginTop: 0}}>Garber Bros, Inc.</h1>
          <p>
            For over 55 years, Garber Bros Inc., based in Morgan City, LA, has been a leading provider of marine transportation services for the offshore oil and gas industry. We pride ourselves on supplying the absolute best marine services to all types of industries. Contact Garber Bros Inc. for all your marine transportation and service needs.
          </p>
          <div style={{marginTop: 12}}>
            <Button href="/vessels">View Our Fleet of Vessels</Button>
          </div>
        </div>
        <div>
          {heroImage && (
            <div style={{borderRadius: 8, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)'}}>
              {(() => {
                const safeSrc = encodeURI(heroImage.url);
                return <Image src={safeSrc} alt={heroImage.alt} width={560} height={360} unoptimized />;
              })()}
            </div>
          )}
        </div>
      </section>

      <section className="container" aria-labelledby="tiles-heading">
        <h2 id="tiles-heading" style={{marginTop: 20}}>Quick Links</h2>
        <div className="tiles-grid">
          <Card title="Our Vessels">
            <div className="img-wrap">
              {(() => {
                const img = images[1];
                const safeSrc = encodeURI(img.url);
                return <Image src={safeSrc} alt={img.alt} width={400} height={240} unoptimized />;
              })()}
            </div>
            <p>Garber Bros Inc has an elite fleet of vessels of use in all types of projects.</p>
            <a href="/vessels">View Our Vessels »</a>
          </Card>

          <Card title="Employment">
            <div className="img-wrap">
              {(() => {
                const img = images[2];
                const safeSrc = encodeURI(img.url);
                return <Image src={safeSrc} alt={img.alt} width={400} height={240} unoptimized />;
              })()}
            </div>
            <p>Interested in working at Garber Bros? Download our employment application.</p>
            <a href="/websites/garberbrosinc/images/application.pdf">View Our Employment Application »</a>
          </Card>

          <Card title="Contact Us">
            <div className="img-wrap">
              {(() => {
                const img = images[3];
                const safeSrc = encodeURI(img.url);
                return <Image src={safeSrc} alt={img.alt} width={400} height={240} unoptimized />;
              })()}
            </div>
            <p>To contact Garber Bros Inc regarding vessel availability, click here.</p>
            <a href="/contact">Contact Garber Bros Inc »</a>
          </Card>
        </div>
      </section>

      <section className="container" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading" style={{marginTop: 28}}>Gallery</h2>
        <div className="gallery" role="list">
          {(Array.isArray(galleryImages) ? galleryImages : []).map((img, idx) => {
            const safeSrc = encodeURI(img.url);
            return (
              <div key={idx} style={{borderRadius: 6, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.06)'}}>
                <Image src={safeSrc} alt={img.alt} width={260} height={160} unoptimized />
              </div>
            );
          })}
        </div>
      </section>

      <section className="container" aria-labelledby="extras-heading" style={{paddingTop: 28, paddingBottom: 40}}>
        <h2 id="extras-heading">More</h2>
        <p style={{marginTop: 8}}>Additional links included from the original site:</p>
        <ul>
          <li><a href="/">/</a></li>
          <li><a href="/about">/about</a></li>
          <li><a href="/lock-status">/lock-status</a></li>
          <li><a href="/vessels">/vessels</a></li>
          <li><a href="/barges">/barges</a></li>
          <li><a href="/websites/garberbrosinc/images/application.pdf">/websites/garberbrosinc/images/application.pdf</a></li>
          <li><a href="/contact">/contact</a></li>
          <li><a href="javascript:previousSlide6347994()">javascript:previousSlide6347994()</a></li>
          <li><a href="javascript:nextSlide6347994()">javascript:nextSlide6347994()</a></li>
          <li><a href="http://www.goodhiring.com/garberbrosinc/apply/open">http://www.goodhiring.com/garberbrosinc/apply/open</a></li>
          <li><a href="contact.aspx">contact.aspx</a></li>
          <li><a href="/transparency-in-coverage">/transparency-in-coverage</a></li>
          <li><a href="#">#</a></li>
        </ul>
      </section>
    </div>
  );
}
