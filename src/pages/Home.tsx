import React from 'react';
import { motion } from 'motion/react';
import { 
  Bot, 
  PhoneCall, 
  Workflow, 
  Sparkles,
  CheckCircle2, 
  ArrowRight, 
  Users,
  Star,
  User
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { cn } from '../lib/utils';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-50 -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-indigo-600 uppercase bg-indigo-50 rounded-full">
            The Future of Business Operations
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            Automate Your Business with <br />
            <span className="gradient-text">Intelligent Agents</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            From AI chatbots to automated phone handling, we build the digital workforce that helps your business scale without the overhead.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-200 flex items-center justify-center gap-2">
              Start Automating <ArrowRight className="w-5 h-5" />
            </Link>
            <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              View Our Services
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 relative max-w-5xl mx-auto"
        >
          <div className="aspect-video bg-slate-50 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 relative flex items-center justify-center p-8 md:p-16">
            <div className="absolute inset-0 bg-linear-to-tr from-indigo-50/50 to-emerald-50/50 opacity-30" />
            <div className="relative w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 z-10">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-slate-100">
                  <Users className="text-slate-600 w-8 h-8" />
                </div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Customer Inquiry</p>
              </div>
              <div className="hidden md:block flex-1 h-px bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-500 w-1/4 animate-flow" />
              </div>
              <div className="md:hidden text-slate-300"><ArrowRight className="rotate-90" /></div>
              <div className="flex flex-col items-center gap-4">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="w-24 h-24 bg-indigo-600 rounded-3xl shadow-xl shadow-indigo-200 flex items-center justify-center relative"
                >
                  <Bot className="text-white w-12 h-12" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white animate-pulse" />
                </motion.div>
                <p className="text-sm font-bold text-indigo-600 uppercase tracking-wider">BizAgent AI</p>
              </div>
              <div className="hidden md:block flex-1 h-px bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500 w-1/4 animate-flow" style={{ animationDelay: '0.5s' }} />
              </div>
              <div className="md:hidden text-slate-300"><ArrowRight className="rotate-90" /></div>
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-slate-100">
                  <CheckCircle2 className="text-emerald-600 w-8 h-8" />
                </div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Resolved Task</p>
              </div>
            </div>
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden lg:block">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-50 rounded-lg">
                <Workflow className="text-emerald-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">85%</p>
                <p className="text-sm text-slate-500">Efficiency Increase</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 hidden lg:block">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-50 rounded-lg">
                <Users className="text-indigo-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">24/7</p>
                <p className="text-sm text-slate-500">Customer Support</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const services = [
    {
      icon: <Bot className="w-8 h-8 text-indigo-600" />,
      title: "AI Chatbots",
      description: "Human-like conversational agents that handle inquiries, book appointments, and qualify leads on your website 24/7."
    },
    {
      icon: <PhoneCall className="w-8 h-8 text-emerald-600" />,
      title: "Phone Call Handling",
      description: "Automated voice agents that manage inbound calls, provide information, and route complex issues to the right person."
    },
    {
      icon: <Workflow className="w-8 h-8 text-amber-600" />,
      title: "Workflow Automation",
      description: "Seamlessly connect your tools and automate repetitive tasks across your entire business ecosystem."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-violet-600" />,
      title: "Custom AI Agents",
      description: "Bespoke AI solutions tailored to your specific business logic, proprietary data, and complex workflows."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">Our Core Offerings</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We provide the building blocks for a modern, automated business that works while you sleep.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <Link 
              key={idx}
              to={
                idx === 0 ? "/services/chatbots" : 
                idx === 1 ? "/services/phone-handling" : 
                idx === 2 ? "/services/workflow-automation" : 
                "/services/custom-agents"
              }
              className="block"
            >
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-8 h-full rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all flex flex-col"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-grow">{service.description}</p>
                <div className="mt-6 flex items-center gap-2 text-indigo-600 font-semibold text-sm">
                  Learn More <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const Impact = () => {
  const points = [
    "Reduce operational costs by up to 60%",
    "Eliminate human error in repetitive tasks",
    "Scale your operations without hiring more staff",
    "Improve customer satisfaction with instant responses",
    "Free up your team for creative, high-value work"
  ];

  return (
    <section id="impact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 blur-3xl rounded-full" />
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Impact of <br />
              <span className="text-indigo-400">Business Automation</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Automation isn't just about saving time; it's about transforming how your business competes in a digital-first world.
            </p>
            <ul className="space-y-4">
              {points.map((point, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-emerald-400 w-5 h-5 shrink-0" />
                  <span className="text-slate-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <p className="text-3xl font-bold mb-1">10k+</p>
                <p className="text-sm text-slate-400">Hours Saved Yearly</p>
              </div>
              <div className="bg-indigo-600 p-8 rounded-2xl shadow-lg shadow-indigo-500/20">
                <p className="text-3xl font-bold mb-1">2.5x</p>
                <p className="text-sm text-indigo-100">Revenue Growth</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <p className="text-3xl font-bold mb-1">0%</p>
                <p className="text-sm text-slate-400">Downtime</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                <p className="text-3xl font-bold mb-1">24/7</p>
                <p className="text-sm text-slate-400">Availability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "CEO, TechFlow Solutions",
      content: "BizAgents transformed our customer support. Their AI agents handle 70% of our queries perfectly, allowing our team to focus on complex client needs.",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      name: "Michael Chen",
      role: "Operations Director, Global Logistics",
      content: "The workflow automation they implemented saved us over 20 hours a week in manual data entry. It's been a complete game-changer for our efficiency.",
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      name: "Elena Rodriguez",
      role: "Founder, Bloom Retail",
      content: "As a small business, I couldn't afford a call center. BizAgents' phone handling gives my customers a professional experience at a fraction of the cost.",
      color: "bg-amber-100 text-amber-600"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />)}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all">
              <p className="text-slate-600 italic mb-8">"{review.content}"</p>
              <div className="flex items-center gap-4">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center border border-slate-200", review.color)}>
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{review.name}</p>
                  <p className="text-sm text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = (data: any) => {
    console.log('Form Data:', data);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="p-8 md:p-12">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-slate-900 mb-3">Ready to Scale?</h2>
              <p className="text-slate-600">Fill out the form below and our team will get back to you within 24 hours.</p>
            </div>

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
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
              </motion.div>
            ) : (
              <form 
                onSubmit={handleSubmit(onSubmit)} 
                className="space-y-6"
                name="contact-home"
                method="POST"
                data-netlify="true"
              >
                <input type="hidden" name="form-name" value="contact-home" />
                
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
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
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

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200"
                  >
                    Send Message
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-4">
                    By submitting this form, you agree to our <Link to="/privacy" className="underline">Privacy Policy</Link> and <Link to="/terms" className="underline">Terms of Service</Link>.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Impact />
      <Testimonials />
      <ContactForm />
    </>
  );
};
