"use client";

import { useState } from "react";
import { TiMessage, TiMail, TiPhone, TiBook, TiPlus, TiMinus } from "react-icons/ti";

export default function SupportPage({ onGo, onToast }) {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How do I convert crypto to fiat?",
      answer: "You can convert crypto to fiat by going to the 'Exchange' section, selecting your crypto, choosing 'Sell', and following the prompts. Fiat funds will be deposited to your linked bank account within 1-3 business days."
    },
    {
      question: "When do loyalty points expire?",
      answer: "Loyalty points expire 12 months after they are earned. You can check your points balance and expiration dates in the 'Loyalty' section of your dashboard."
    },
    {
      question: "How long do USDT withdrawals take?",
      answer: "USDT withdrawals typically process within 5-30 minutes, depending on network congestion. Large withdrawals may require additional security verification and can take up to 2 hours."
    },
    {
      question: "Can I use my MUDRA card internationally?",
      answer: "Yes, your MUDRA card works internationally in over 160 countries. Foreign transaction fees are 1% for Gold members and 2% for Standard members."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="dash-pad">
      <div className="dash-bc">
        <span onClick={() => onGo("home")}>Dashboard</span>
        <span>›</span>
        <span className="dash-cur">Support</span>
      </div>

      <div className="dash-h1">Support Center</div>

      <div className="dash-g4">
        <div className="dash-scard" onClick={() => onToast("Opening live chat — avg 2 min response")}>
          <div className="dash-sico" style={{ background: "var(--grbg)", color: "var(--gr)" }}>
            <TiMessage size={20} />
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--tx)", marginBottom: 2 }}>Live Chat</div>
          <div style={{ fontSize: 11, color: "var(--tx3)" }}>Agent available now</div>
        </div>
        <div className="dash-scard" onClick={() => onToast("Email ticket form opened")}>
          <div className="dash-sico" style={{ background: "var(--blbg)", color: "var(--bl)" }}>
            <TiMail size={20} />
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--tx)", marginBottom: 2 }}>Email Support</div>
          <div style={{ fontSize: 11, color: "var(--tx3)" }}>Reply within 24 hours</div>
        </div>
        <div className="dash-scard" onClick={() => onToast("Calling MUDRA Gold hotline")}>
          <div className="dash-sico" style={{ background: "var(--pubg)", color: "var(--pu)" }}>
            <TiPhone size={20} />
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--tx)", marginBottom: 2 }}>Phone Support</div>
          <div style={{ fontSize: 11, color: "var(--tx3)" }}>Gold members priority</div>
        </div>
        <div className="dash-scard" onClick={() => onToast("Opening documentation")}>
          <div className="dash-sico" style={{ background: "var(--gdim)", color: "var(--glt)" }}>
            <TiBook size={20} />
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--tx)", marginBottom: 2 }}>Docs & Guides</div>
          <div style={{ fontSize: 11, color: "var(--tx3)" }}>API, FAQs & walkthroughs</div>
        </div>
      </div>

      <div className="dash-card" style={{ marginTop: 12 }}>
        <div className="dash-ch">
          <div className="dash-ct flexing-div">Frequently Asked Questions</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {faqs.map((faq, idx) => (
            <div key={idx} className="dash-faq-i">
              <div 
                className="dash-faq-q"
                onClick={() => toggleFaq(idx)}
                style={{ 
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 16px"
                }}
              >
                <span>{faq.question}</span>
                {openFaq === idx ? <TiMinus size={16} className="faq-ico" /> : <TiPlus size={16} className="faq-ico" />}
              </div>
              {openFaq === idx && (
                <div style={{ 
                  padding: "12px 16px", 
                  fontSize: 13, 
                  color: "var(--tx2)",
                  borderTop: "1px solid var(--bd)",
                  backgroundColor: "var(--bg2)",
                  lineHeight: 1.5
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}