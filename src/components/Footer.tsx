import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, MessageSquare, Shield, Users } from 'lucide-react'

export const Footer = () => {
  return (
    <footer className='bg-white border-t border-slate-200 py-12'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between gap-12 mb-12'>
          <div className='max-w-sm'>
            <div className='flex items-center gap-2 mb-6'>
              <div className='w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center'>
                <Zap className='text-white w-5 h-5' />
              </div>
              <span className='font-display font-bold text-xl tracking-tight'>
                bizagents.org
              </span>
            </div>
            <p className='text-slate-500 leading-relaxed'>
              Empowering businesses of all sizes with intelligent AI agents and
              seamless workflow automation. Build a smarter digital workforce
              today.
            </p>
          </div>

          <div className='flex flex-col md:flex-row gap-12 md:gap-24 md:pr-32'>
            <div>
              <h4 className='font-bold text-slate-900 mb-6'>Solutions</h4>
              <ul className='space-y-4 text-slate-500'>
                <li>
                  <Link
                    to='/services/chatbots'
                    className='hover:text-indigo-600 transition-colors'
                  >
                    AI Chatbots
                  </Link>
                </li>
                <li>
                  <Link
                    to='/services/phone-handling'
                    className='hover:text-indigo-600 transition-colors'
                  >
                    Phone Handling
                  </Link>
                </li>
                <li>
                  <Link
                    to='/services/workflow-automation'
                    className='hover:text-indigo-600 transition-colors'
                  >
                    Workflow Automation
                  </Link>
                </li>
                <li>
                  <Link
                    to='/services/custom-agents'
                    className='hover:text-indigo-600 transition-colors'
                  >
                    Custom AI Agents
                  </Link>
                </li>
              </ul>
            </div>
            <div className='md:text-left'>
              <h4 className='font-bold text-slate-900 mb-6'>Company</h4>
              <ul className='space-y-4 text-slate-500'>
                <li>
                  <Link
                    to='/about'
                    className='hover:text-indigo-600 transition-colors'
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to='/privacy'
                    className='hover:text-indigo-600 transition-colors'
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to='/terms'
                    className='hover:text-indigo-600 transition-colors'
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    to='/contact'
                    className='hover:text-indigo-600 transition-colors'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4'>
          <p className='text-slate-400 text-sm'>
            © {new Date().getFullYear()} BizAgents. All rights reserved.
          </p>
          <div className='flex gap-6 text-slate-400'>
            <Link
              to='/contact'
              className='hover:text-indigo-600 transition-colors'
            >
              <MessageSquare className='w-5 h-5' />
            </Link>
            <Link
              to='/terms'
              className='hover:text-indigo-600 transition-colors'
            >
              <Shield className='w-5 h-5' />
            </Link>
            <Link
              to='/privacy'
              className='hover:text-indigo-600 transition-colors'
            >
              <Users className='w-5 h-5' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
