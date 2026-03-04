import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, ArrowRight, Mic, Volume2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PhoneHandling = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-emerald-600 uppercase bg-emerald-50 rounded-full">
              Voice Automation
            </div>
            <h1 className="font-display text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Automated <span className="text-emerald-600">Phone Handling</span> Solutions
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Never miss a call again. Our AI-powered voice agents handle inbound calls with natural-sounding speech, providing information, routing calls, and taking messages even after hours.
            </p>
            <div className="space-y-4 mb-10">
              {[
                'Natural language processing for fluid conversations',
                'Smart call routing to the right departments',
                'Automated appointment scheduling via voice',
                'Real-time transcription and sentiment analysis'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-indigo-100 rounded-full flex items-center justify-center">
                    <ShieldCheck className="text-indigo-600 w-3 h-3" />
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
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)', backgroundSize: '32px 32px' }} />
              </div>
              
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-48 h-48 bg-emerald-600 rounded-full shadow-2xl flex items-center justify-center relative z-10"
                >
                  <PhoneCall className="text-white w-24 h-24" />
                  <motion.div
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0, 0.3]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-emerald-400 rounded-full -z-10"
                  />
                </motion.div>
                
                {/* Sound Waves */}
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 2],
                      opacity: [0.5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      delay: i * 1,
                      ease: "easeOut"
                    }}
                    className="absolute w-48 h-48 border-2 border-emerald-500/30 rounded-full"
                  />
                ))}

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-10 left-10 bg-white p-4 rounded-2xl shadow-xl"
                >
                  <Mic className="text-emerald-600 w-6 h-6" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                  className="absolute bottom-10 right-10 bg-white p-4 rounded-2xl shadow-xl"
                >
                  <Volume2 className="text-indigo-600 w-6 h-6" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="bg-emerald-600 rounded-3xl p-12 md:p-20 text-center text-white">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Stop missing valuable business calls</h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
            Our voice agents provide a professional experience for your customers, day or night.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl"
          >
            Talk to an Expert <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
