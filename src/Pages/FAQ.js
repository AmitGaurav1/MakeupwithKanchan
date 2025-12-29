import React from "react";
import Nav from "../Components/nav";
import Footer from "../Components/Footer";
import '../CSS/InfoPage.css';

function FAQ() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of purchase. Products must be unused and in original packaging. Please contact our customer service team to initiate a return."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we ship within the United States. International shipping options will be available soon. Please check back for updates."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days. Express shipping options are available at checkout for faster delivery (2-3 business days)."
    },
    {
      question: "Are your products cruelty-free?",
      answer: "Yes! All our products are cruelty-free and we are committed to never testing on animals. We are proud to be a cruelty-free brand."
    },
    {
      question: "Can I track my order?",
      answer: "Yes, once your order ships, you will receive a tracking number via email. You can use this to track your package's journey to you."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay. All transactions are secure and encrypted."
    },
    {
      question: "Do you offer samples?",
      answer: "Yes! We offer sample sizes for many of our products. Check individual product pages for sample availability."
    },
    {
      question: "How do I choose the right foundation shade?",
      answer: "Use our shade finder tool or contact our beauty consultants. We recommend testing foundation in natural light for the best match."
    },
    {
      question: "Are your products suitable for sensitive skin?",
      answer: "Many of our products are formulated for sensitive skin. Look for products labeled 'hypoallergenic' or 'for sensitive skin'. Always patch test new products."
    },
    {
      question: "Can I cancel my order?",
      answer: "Orders can be cancelled within 24 hours of placement if they haven't shipped yet. Contact customer service immediately to cancel."
    }
  ];

  return (
    <div className="info-page">
      <Nav />
      <div className="info-container">
        <h1>Frequently Asked Questions</h1>
        
        <div className="faq-content">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h2 className="faq-question">{faq.question}</h2>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
        
        <div className="contact-section">
          <h2>Still have questions?</h2>
          <p>Contact our customer service team at info@glowmuse.com or call us at +1 (555) 123-4567</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;

