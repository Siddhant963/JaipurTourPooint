"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/legacy/image";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="floating-container">
      <button className="contact-btn" onClick={() => setIsOpen(!isOpen)}>
        📞 Contact
      </button>
      {isOpen && (
        <div className="social-icons">
          <Link href="https://wa.me/+918209479644" target="_blank" className="social-icon whatsapp">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg
" alt="WhatsApp" width={30} height={30} />
          </Link>
          <Link href="https://www.instagram.com/YOUR_INSTAGRAM" target="_blank" className="social-icon instagram">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg
" alt="Instagram" width={30} height={30} />
          </Link>
          <Link href="https://www.facebook.com/YOUR_FACEBOOK" target="_blank" className="social-icon facebook">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" width={30} height={30} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default FloatingContact;

