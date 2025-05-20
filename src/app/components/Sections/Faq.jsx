"use client";
import { useState, useEffect } from "react";
import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";

const faq = [
  {
    qw: "What credit score do I need to apply for a credit card?",
    answ: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    qw: "How can I apply for a credit card online?",
    answ: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    qw: "Are there any annual fees associated with the credit card?",
    answ: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    qw: "How long does it take to receive the credit card once approved?",
    answ: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    qw: "How can I check my credit card balance and transactions?",
    answ: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    qw: "What should I do if my credit card is lost or stolen?",
    answ: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
  {
    qw: "Is my credit card information secure?",
    answ: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
  },
];

function SectionFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.qw,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answr,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="section section_faq">
      <div className="container text-center">
        <h2>FAQs</h2>

        <div className="accordion">
          {faq.map((i, ind) => (
            <motion.div
              className="accordion_item"
              key={ind}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                mass: 0.3,
                delay: ind * 0.1,
              }}
              viewport={{ once: false }}
            >
              <div className="accordion_toggle" onClick={() => toggleItem(ind)}>
                <h2 className="text-xl my-0">{i.qw}</h2>
                {openIndex === ind ? <Minus /> : <Plus />}
              </div>

              <div
                className={`accordion_body ${
                  openIndex === ind
                    ? "max-h-auto opacity-50 translate-y-0 py-6"
                    : "max-h-0 opacity-0 translate-y-2"
                }`}
              >
                {i.answ}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionFaq;
