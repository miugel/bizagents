import React from 'react';

export const Terms = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-display text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
        <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>By using bizagents.org, you agree to the following terms and conditions.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8">1. Acceptance of Terms</h2>
          <p>By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8">2. Use of Services</h2>
          <p>You agree to use our services only for lawful purposes and in accordance with these terms.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8">3. Intellectual Property</h2>
          <p>All content on this website, including text, graphics, and logos, is the property of bizagents.org and is protected by copyright laws.</p>
          
          <h2 className="text-2xl font-bold text-slate-900 mt-8">4. Limitation of Liability</h2>
          <p>Bizagents.org shall not be liable for any direct, indirect, or consequential damages arising out of your use of our services.</p>
        </div>
      </div>
    </div>
  );
};
