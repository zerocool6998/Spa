import React from 'react';

interface LegalPageProps {
  page: 'terms' | 'privacy' | 'refund';
  onBack: () => void;
}

const LegalPage: React.FC<LegalPageProps> = ({ page, onBack }) => {
  const getTitle = () => {
    switch (page) {
      case 'terms': return 'Terms of Service';
      case 'privacy': return 'Privacy Policy';
      case 'refund': return 'Refund Policy';
    }
  };

  const getContent = () => {
    switch (page) {
      case 'terms':
        return (
          <>
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <h3 className="text-xl font-serif mb-2 mt-6">1. Introduction</h3>
            <p className="mb-4">Welcome to Aura Books. By accessing our website and purchasing our products, you agree to be bound by these Terms of Service.</p>
            
            <h3 className="text-xl font-serif mb-2 mt-6">2. Digital Products</h3>
            <p className="mb-4">All products sold on this site are digital goods (ebooks). Upon purchase, you will receive a download link via email. No physical products will be shipped.</p>
            
            <h3 className="text-xl font-serif mb-2 mt-6">3. Intellectual Property</h3>
            <p className="mb-4">All content included on this site, such as text, graphics, logos, and digital downloads, is the property of Aura Books or its content suppliers and protected by international copyright laws.</p>
            
            <h3 className="text-xl font-serif mb-2 mt-6">4. License and Access</h3>
            <p className="mb-4">We grant you a limited, non-exclusive, non-transferable license to access and make personal use of this site and the digital products you purchase. This license does not include any resale or commercial use of our products.</p>
          </>
        );
      case 'privacy':
        return (
          <>
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <h3 className="text-xl font-serif mb-2 mt-6">1. Information We Collect</h3>
            <p className="mb-4">We collect information you provide directly to us, such as when you create an account, make a purchase, or sign up for our newsletter. This may include your name, email address, and payment information.</p>
            
            <h3 className="text-xl font-serif mb-2 mt-6">2. How We Use Your Information</h3>
            <p className="mb-4">We use the information we collect to process your orders, send you the digital products you purchase, and communicate with you about your order.</p>
            
            <h3 className="text-xl font-serif mb-2 mt-6">3. Data Security</h3>
            <p className="mb-4">We implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage.</p>
          </>
        );
      case 'refund':
        return (
          <>
            <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            <h3 className="text-xl font-serif mb-2 mt-6">1. Refund Policy for Digital Goods</h3>
            <p className="mb-4">Due to the nature of digital products, all sales are generally final once the download link has been sent. However, we want you to be satisfied with your purchase.</p>
            
            <h3 className="text-xl font-serif mb-2 mt-6">2. Exceptions</h3>
            <p className="mb-4">We may offer a refund within 14 days of purchase if:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>The file is corrupted or does not work as described.</li>
              <li>You have not downloaded the file yet.</li>
              <li>There was a technical error with the transaction.</li>
            </ul>
            
            <h3 className="text-xl font-serif mb-2 mt-6">3. How to Request a Refund</h3>
            <p className="mb-4">To request a refund, please contact us at support@aurabooks.com with your order number and the reason for your request.</p>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-[#F5F2EB] animate-fade-in-up">
      <div className="max-w-3xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors mb-12"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Home
        </button>

        <h1 className="text-4xl font-serif text-[#2C2A26] mb-8">{getTitle()}</h1>
        
        <div className="prose prose-stone max-w-none text-[#5D5A53]">
          {getContent()}
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
