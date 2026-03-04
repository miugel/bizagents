import React from 'react';
import { motion } from 'motion/react';
import { useForm } from 'react-hook-form';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="font-display text-5xl font-bold text-slate-900 mb-6 tracking-tight">Let's build your <br /><span className="gradient-text">automated future</span>.</h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Whether you're looking to automate customer support, streamline internal workflows, or build custom AI agents, we're here to help.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-indigo-200">
                  <CheckCircle2 className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Free Consultation</h3>
                  <p className="text-slate-500">We'll analyze your current processes and identify automation opportunities.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-emerald-200">
                  <CheckCircle2 className="text-white w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Custom Strategy</h3>
                  <p className="text-slate-500">Receive a tailored roadmap for implementing AI in your business.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden"
          >
            <div className="p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="text-emerald-600 w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Received!</h3>
                  <p className="text-slate-600">Thank you for reaching out. We'll be in touch soon.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-indigo-600 font-medium hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit(onSubmit)} 
                  className="space-y-6"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Full Name</label>
                      <input 
                        {...register("name", { required: "Name is required" })}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-hidden transition-all",
                          errors.name && "border-red-500"
                        )}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Work Email</label>
                      <input 
                        {...register("email", { required: "Email is required" })}
                        className={cn(
                          "w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-hidden transition-all",
                          errors.email && "border-red-500"
                        )}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Company Name</label>
                      <input 
                        {...register("company")}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-hidden transition-all"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Company Website</label>
                      <input 
                        {...register("website")}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-hidden transition-all"
                        placeholder="https://www.acme.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                    <input 
                      {...register("phone")}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-hidden transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">How can we help?</label>
                    <textarea 
                      {...register("message", { required: "Please tell us a bit about your needs" })}
                      rows={4}
                      className={cn(
                        "w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-hidden transition-all resize-none",
                        errors.message && "border-red-500"
                      )}
                      placeholder="Tell us about the processes you'd like to automate..."
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
