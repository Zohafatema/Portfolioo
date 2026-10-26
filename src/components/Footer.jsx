
import { ArrowUpRight, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a className="brand" href="#home">
          portfolio<span className="accent">.</span>
        </a>

        <p>
          Designed & built with <Heart size={14} className="heart-icon" /> and React.
        </p>

        <a href="#home" className="footer-top">
          Back to top <ArrowUpRight size={15} />
        </a>

        <span className="footer-copy">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
