import React, { useState } from 'react';

const faqs = [
  {
    question: "How do I install the plugins?",
    answer: "After purchase, you will receive a download link and a license key. Follow the installation guide provided in the download for your specific DAW (Ableton, FL Studio, Logic Pro)."
  },
  {
    question: "What are the system requirements for your tools?",
    answer: "Our tools are compatible with Windows 10+ and macOS 10.13+ (Intel & Apple Silicon). They are available in VST3, AU, and AAX formats. A minimum of 8GB RAM is recommended."
  },
  {
    question: "What is your refund policy?",
    answer: "Due to the nature of digital products, we generally do not offer refunds. However, if you are experiencing technical issues that we cannot resolve, we will consider a refund on a case-by-case basis. Please contact support within 14 days of purchase."
  },
  {
    question: "How do I access the educational courses?",
    answer: "Once you enroll in a course, it will be available in your account dashboard. You can stream the videos anytime and have lifetime access to the content."
  }
];

const FAQItem: React.FC<{ faq: { question: string; answer: string; } }> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-700">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-4 px-2"
            >
                <span className="text-lg font-medium text-white">{faq.question}</span>
                <svg
                    className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            {isOpen && (
                <div className="pb-4 px-2 text-brand-text-muted">
                    <p>{faq.answer}</p>
                </div>
            )}
        </div>
    );
};


const Support: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-white mb-8 border-l-4 border-brand-primary pl-4">Support</h1>
      <p className="text-lg text-brand-text-muted mb-12">Have questions? We're here to help. Check our FAQ below or contact us directly.</p>
      
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>

        <div className="mt-16 p-8 bg-brand-surface rounded-lg text-center">
            <h3 className="text-xl font-bold text-white mb-4">Can't find an answer?</h3>
            <p className="text-brand-text-muted mb-6">Our support team is ready to assist you with any issue.</p>
            <a href="mailto:support@timvestudio.com" className="bg-brand-primary text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105 inline-block">
                Contact Support
            </a>
        </div>
      </div>
    </div>
  );
};

export default Support;
