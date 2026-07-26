import styles from "./Footer.module.css";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">

        <div className={styles.top}>

          {/* Company */}

          <div className={styles.company}>

            <h2>FurniLux</h2>

            <p>
              Beautiful furniture crafted for modern homes.
              Quality materials, timeless design, and comfort
              for every room.
            </p>

            <div className={styles.social}>

              <a href="#">
                <FiFacebook />
              </a>

              <a href="#">
                <FiInstagram />
              </a>

              <a href="#">
                <FiTwitter />
              </a>

              <a href="#">
                <FiYoutube />
              </a>

            </div>

          </div>

          {/* Links */}

          <div>

            <h4>Links</h4>

            <ul>

              <li>Home</li>

              <li>Shop</li>

              <li>About</li>

              <li>Blog</li>

              <li>Contact</li>

            </ul>

          </div>

          {/* Help */}

          <div>

            <h4>Help</h4>

            <ul>

              <li>Payment Options</li>

              <li>Returns</li>

              <li>Privacy Policy</li>

              <li>Terms & Conditions</li>

            </ul>

          </div>

          {/* Newsletter */}

          <div>

            <h4>Newsletter</h4>

            <div className={styles.newsletter}>

              <input
                type="email"
                placeholder="Enter your email"
              />

              <button>
                Subscribe
              </button>

            </div>

          </div>

        </div>

        <div className={styles.bottom}>

          © 2026 FurniLux. All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}

export default Footer;