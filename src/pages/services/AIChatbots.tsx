import React from 'react';
import { motion } from 'motion/react';
import { Bot, ArrowRight, MessageSquare, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AIChatbots = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
              Customer Experience
            </div>
            <h1 className="font-display text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Intelligent <span className="text-indigo-600">AI Chatbots</span> for Your Website
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Our AI chatbots aren't just scripts. They are intelligent agents trained on your business data, capable of handling complex inquiries, qualifying leads, and booking appointments 24/7.
            </p>
            <div className="space-y-4 mb-10">
              {[
                'Instant responses to common questions',
                'Seamless lead qualification and CRM integration',
                'Multi-language support for global reach',
                'Human-like conversational flow'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Zap className="text-emerald-600 w-3 h-3" />
                  </div>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-12 relative">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)', backgroundSize: '32px 32px' }} />
              </div>
              
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-48 h-48 bg-indigo-600 rounded-3xl shadow-2xl flex items-center justify-center relative z-10"
                >
                  <Bot className="text-white w-24 h-24" />
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-400 rounded-full border-4 border-slate-900"
                  />
                </motion.div>
                
                {/* Floating Chat Bubbles */}
                <motion.div
                  animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl"
                >
                  <MessageSquare className="text-indigo-600 w-6 h-6" />
                </motion.div>
                <motion.div
                  animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-10 left-10 bg-white p-4 rounded-2xl shadow-xl"
                >
                  <Shield className="text-emerald-600 w-6 h-6" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="bg-indigo-600 rounded-3xl p-12 md:p-20 text-center text-white">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Ready to automate your customer support?</h2>
          <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
            Join hundreds of businesses that have scaled their operations with our intelligent AI agents.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all shadow-xl"
          >
            Get Started Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
