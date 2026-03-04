import React from 'react';
import { motion } from 'motion/react';
import { Workflow, ArrowRight, Layers, Cpu, Network } from 'lucide-react';
import { Link } from 'react-router-dom';

export const WorkflowAutomation = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-amber-600 uppercase bg-amber-50 rounded-full">
              Efficiency & Scale
            </div>
            <h1 className="font-display text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Seamless <span className="text-amber-600">Workflow Automation</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Connect your favorite tools and eliminate repetitive manual tasks. We build robust automation pipelines that handle data entry, notifications, and cross-platform synchronization.
            </p>
            <div className="space-y-4 mb-10">
              {[
                'Custom integrations between 1000+ apps',
                'Automated data processing and reporting',
                'Error-free synchronization across departments',
                'Scalable infrastructure that grows with you'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center">
                    <Layers className="text-amber-600 w-3 h-3" />
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
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #f59e0b 1px, transparent 0)', backgroundSize: '32px 32px' }} />
              </div>
              
              <div className="relative w-full h-full">
                {/* Central Hub */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-amber-500/30 rounded-full flex items-center justify-center"
                >
                  <div className="w-40 h-40 border-2 border-amber-400/50 rounded-full border-dashed" />
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-500 rounded-3xl shadow-2xl flex items-center justify-center z-10"
                >
                  <Workflow className="text-white w-16 h-16" />
                </motion.div>

                {/* Orbiting Nodes */}
                {[0, 90, 180, 270].map((angle, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      x: Math.cos((angle + (i * 10)) * Math.PI / 180) * 120,
                      y: Math.sin((angle + (i * 10)) * Math.PI / 180) * 120,
                    }}
                    transition={{ duration: 0 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <motion.div
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, delay: i * 0.5 }
                      }}
                      className="w-12 h-12 bg-slate-800 rounded-xl border border-amber-500/30 flex items-center justify-center shadow-lg"
                    >
                      {i === 0 && <Cpu className="text-amber-400 w-6 h-6" />}
                      {i === 1 && <Network className="text-amber-400 w-6 h-6" />}
                      {i === 2 && <Layers className="text-amber-400 w-6 h-6" />}
                      {i === 3 && <ArrowRight className="text-amber-400 w-6 h-6" />}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="bg-amber-500 rounded-3xl p-12 md:p-20 text-center text-white">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Automate the boring stuff</h2>
          <p className="text-amber-50 text-lg mb-10 max-w-2xl mx-auto">
            Focus on what matters most while our automation engine handles the rest.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-amber-50 transition-all shadow-xl"
          >
            Build Your Workflow <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};
