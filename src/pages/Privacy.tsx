import React from 'react';

export const Privacy = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-display text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>At bizagents.org, we take your privacy seriously. This policy outlines how we collect, use, and protect your information.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you fill out a contact form or communicate with us via email.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8">2. How We Use Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, and to communicate with you about our offerings.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Data Security</h2>
          <p>We implement reasonable security measures to protect your information from unauthorized access, disclosure, or destruction.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8">4. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@bizagents.org.</p>
        </div>
      </div>
    </div>
  );
};
