import {
  BadgeCheck,
  FileText,
  Leaf,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css";

const contactDetails = [
  {
    value: (
      <>
        Gat No.166/1, Godown No.4, Shinde Mala, Uruli Devachi, Ta. Haveli,
        Dist. Pune (MH) - 412308
      </>
    ),
    icon: MapPin,
  },
  {
    value: "cropixo08@gmail.com",
    href: "mailto:cropixo08@gmail.com",
    icon: Mail,
  },
  {
    value: "+91 90112 00034",
    href: "tel:+919011200034",
    icon: Phone,
  },
  {
    value: "License No.: LCFWD2026070863",
    icon: BadgeCheck,
  },
  {
    value: "Importer-Exporter Code: AZMPP1640E",
    icon: FileText,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="benfertico-footer">
      <div className="benfertico-footer-inner">
        <div className="benfertico-footer-grid">
          <div className="benfertico-company">
            <div className="benfertico-company-heading">
              <span className="benfertico-leaf-icon">
                <Leaf size={24} strokeWidth={1.8} />
              </span>

              <div>
                <p className="benfertico-company-label">
                  Import, Packed &amp; Marketed by:
                </p>

                <p className="benfertico-company-name">
                 Benefertico Nutrition
                </p>
              </div>
            </div>

            <p className="benfertico-description">
            Advanced fertilizer formulations designed to deliver balanced nutrition, stronger crop growth, and consistent results.
            </p>
          </div>

          <nav className="benfertico-navigation" aria-label="Footer navigation">
            <Link to="/products">Products</Link>
            <Link to="/#agriculture">About</Link>
            <Link to="/#contact">Contact</Link>
          </nav>

          <div className="benfertico-contact">
            <h2>Contact</h2>

            <div className="benfertico-contact-list">
              {contactDetails.map((detail, index) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={index}
                    className="benfertico-contact-item"
                  >
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      className="benfertico-contact-icon"
                    />

                    <div>
                      {detail.href ? (
                        <a href={detail.href}>{detail.value}</a>
                      ) : (
                        <span>{detail.value}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}