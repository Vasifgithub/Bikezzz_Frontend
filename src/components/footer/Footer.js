import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <>
      <div className={styles.Footer}>
        <div>
          <h4>Bikezzz</h4>
          <div className={styles.Footer__highlight}></div>
          <div className={styles.Footer__flex}>
            <div>
              <img
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/white-mail-f7a800f328eab451231c558115ad0067bdd6c5ba04b7acd19f22ae4036e702d1.png"
                alt="mail"
              ></img>
            </div>
            <div>support@Bikezzzindia.com</div>
          </div>
          <div className={styles.Footer__flex}>
            <div>
              <img
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/white-phone-d7daea12563d63fb4bd1cbb2fa0a824d19501def56934aff125e23343912895e.png"
                alt="mail"
              ></img>
            </div>
            <div>+919543545467</div>
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <div className={styles.Footer__highlight}></div>
          <div>
            <p>About us</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div>
          <h4>Policies</h4>
          <div className={styles.Footer__highlight}></div>
          <div>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <div className={styles.Footer__highlight}></div>
          <div>
            <p>Offers</p>
            <p>New Bikes</p>
            <p>Own a franchise</p>
            <p>Earn with us</p>
            <p>Address</p>
          </div>
        </div>
      </div>
      <div className={styles.Footer__desc}>
        <h2>Make Life a Ride</h2>
        <h2>Own the road</h2>
      </div>
      <div className={styles.Footer__end}>
        <h3>
          Made with
          <img
            src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/like-b8b570f724101252e5c39d8bd66246607fb226e93e3ba17b0516209b20832345.png"
            alt="love"
          ></img>
          by BIKEZZZ
          <div class="text-light copyRightTitle">© Copyright 2023 -  Software Pvt. Ltd. All Rights Reserved.</div>
        </h3>
      </div>
    </>
  );
}

export default Footer;
