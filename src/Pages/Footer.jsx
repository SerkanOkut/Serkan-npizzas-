import React from "react";
import "./Footer.css";

function Footer() {
  const instaImages = [
    "/images/iteration-2-images/footer/insta/li-0.png",
    "/images/iteration-2-images/footer/insta/li-1.png",
    "/images/iteration-2-images/footer/insta/li-2.png",
    "/images/iteration-2-images/footer/insta/li-3.png",
    "/images/iteration-2-images/footer/insta/li-4.png",
    "/images/iteration-2-images/footer/insta/li-5.png",
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Teknolojik Yemekler</h3>
          <p>
            <img
              src="/images/iteration-2-images/footer/icons/icon-1.png"
              alt="Location Icon"
              className="footer-icon"
            />
            34 Londonderry Road, Istanbul Türkiye
          </p>
          <p>
            <img
              src="/images/iteration-2-images/footer/icons/icon-2.png"
              alt="Email Icon"
              className="footer-icon"
            />
            aciktim@teknolojikyemekler.com
          </p>
          <p>
            <img
              src="/images/iteration-2-images/footer/icons/icon-3.png"
              alt="Phone Icon"
              className="footer-icon"
            />
            +90 212 123 45 67
          </p>
        </div>
        <div className="footer-section">
          <h3>Hot Menu</h3>
          <ul>
            <li>Terminal Pizza</li>
            <li>5 Kişilik Hackathon Pizza</li>
            <li>useEffect Tavuklu Pizza</li>
            <li>Beyaz Console Frosty</li>
            <li>Tester Geçti Mutlu Burger</li>
            <li>Position Absolute Acı Burger</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Instagram</h3>
          <div className="instagram-gallery">
            {instaImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Instagram ${index + 1}`}
                className="instagram-image"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Teknolojik Yemekler.</p>
        <img
          src="/images/iteration-2-images/footer/icons/twitter.png"
          alt="Twitter Icon"
          className="footer-icon"
        />
      </div>
    </footer>
  );
}

export default Footer;

