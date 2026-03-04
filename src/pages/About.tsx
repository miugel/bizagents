import React from 'react'
import { motion } from 'motion/react'
import { Users, Zap, Award, Globe, Building2 } from 'lucide-react'

const AutomationGraphic = () => {
  return (
    <div className='relative aspect-square bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-12'>
      <div className='absolute inset-0 opacity-20'>
        <div
          className='absolute inset-0'
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <div className='relative w-full h-full'>
        {/* Central Hub */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-indigo-500/30 rounded-full flex items-center justify-center'
        >
          <div className='w-24 h-24 border-2 border-indigo-400/50 rounded-full border-dashed' />
        </motion.div>

        {/* Floating Nodes */}
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{
              scale: [1, 1.1, 1],
              x: Math.cos((angle * Math.PI) / 180) * 100,
              y: Math.sin((angle * Math.PI) / 180) * 100
            }}
            transition={{
              scale: { duration: 2, repeat: Infinity, delay: i * 0.4 },
              x: { duration: 0 },
              y: { duration: 0 }
            }}
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          >
            <div className='w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20'>
              {i === 0 && <Zap className='text-white w-6 h-6' />}
              {i === 1 && <Users className='text-white w-6 h-6' />}
              {i === 2 && <Globe className='text-white w-6 h-6' />}
              {i === 3 && <Building2 className='text-white w-6 h-6' />}
              {i === 4 && <Award className='text-white w-6 h-6' />}
            </div>
          </motion.div>
        ))}

        {/* Connecting Lines */}
        <svg
          className='absolute inset-0 w-full h-full opacity-20'
          viewBox='0 0 400 400'
        >
          <motion.circle
            cx='200'
            cy='200'
            r='100'
            fill='none'
            stroke='#4f46e5'
            strokeWidth='1'
            strokeDasharray='5,5'
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
        </svg>
      </div>
    </div>
  )
}

export const About = () => {
  const experience = [
    {
      name: 'Shopify',
      logo: 'https://cdn.worldvectorlogo.com/logos/shopify.svg'
    },
    {
      name: 'Atlassian',
      logo: 'https://cdn.worldvectorlogo.com/logos/atlassian-1.svg'
    },
    {
      name: 'Salesforce',
      logo: 'https://cdn.worldvectorlogo.com/logos/salesforce-2.svg'
    },
    {
      name: 'J&J',
      logo: 'https://cdn.worldvectorlogo.com/logos/johnson-johnson.svg'
    },
    { name: 'Adobe', logo: 'https://cdn.worldvectorlogo.com/logos/adobe-2.svg' }
  ]

  return (
    <div className='pt-32 pb-24'>
      <div className='max-w-7xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='text-center mb-20'
        >
          <h1 className='font-display text-5xl md:text-6xl font-bold text-slate-900 mb-6'>
            Our Story
          </h1>
          <p className='text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed'>
            Based in the heart of New Jersey, BizAgents was founded by a team of
            industry veterans with a simple mission: to bring enterprise-grade
            automation to businesses of all sizes.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-16 items-center mb-32'>
          <div className='relative'>
            <AutomationGraphic />
            <div className='absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hidden md:block'>
              <p className='text-4xl font-bold text-indigo-600 mb-1'>10+</p>
              <p className='text-slate-500 font-medium'>Years of Experience</p>
            </div>
          </div>
          <div>
            <h2 className='font-display text-3xl font-bold text-slate-900 mb-6'>
              Local Roots, Global Expertise
            </h2>
            <p className='text-slate-600 text-lg mb-6 leading-relaxed'>
              For years, we've been helping businesses across New Jersey and
              beyond navigate the complexities of digital transformation. Our
              team brings together decades of experience from the world's
              leading technology and healthcare companies.
            </p>
            <div className='grid grid-cols-2 gap-6'>
              <div className='flex items-start gap-3'>
                <div className='p-2 bg-indigo-50 rounded-lg'>
                  <Award className='text-indigo-600 w-5 h-5' />
                </div>
                <div>
                  <p className='font-bold text-slate-900'>Proven Impact</p>
                  <p className='text-sm text-slate-500'>
                    Helping local businesses scale efficiently.
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-3'>
                <div className='p-2 bg-emerald-50 rounded-lg'>
                  <Globe className='text-emerald-600 w-5 h-5' />
                </div>
                <div>
                  <p className='font-bold text-slate-900'>Enterprise DNA</p>
                  <p className='text-sm text-slate-500'>
                    Bringing big-tech logic to every project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-slate-50 rounded-3xl p-12 md:p-20 text-center'>
          <h3 className='font-display text-2xl font-bold text-slate-900 mb-12 uppercase tracking-widest text-sm opacity-50'>
            Our Team's Background Includes
          </h3>
          <div className='flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-70'>
            {experience.map((company, idx) => (
              <div key={idx} className='flex flex-col items-center gap-4'>
                <div className='w-20 h-20 bg-white rounded-xl shadow-sm flex items-center justify-center p-4'>
                  <img
                    src={company.logo}
                    alt={company.name}
                    className='max-w-full max-h-full object-contain'
                    referrerPolicy='no-referrer'
                  />
                </div>
                <span className='font-bold text-slate-400 text-sm'>
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
