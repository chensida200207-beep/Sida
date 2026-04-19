import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Zap, Shield, BarChart3 } from 'lucide-react';

export default function ProductDemo(){
  const [count,setCount]=useState(1284);
  return (
    <div className='min-h-screen bg-gradient-to-b from-slate-50 to-white p-6 md:p-10'>
      <div className='max-w-6xl mx-auto space-y-10'>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className='grid md:grid-cols-2 gap-8 items-center'>
          <div className='space-y-6'>
            <div className='inline-block px-3 py-1 rounded-full bg-slate-100 text-sm'>New AI SaaS Demo</div>
            <h1 className='text-5xl font-bold tracking-tight'>NovaFlow</h1>
            <p className='text-lg text-slate-600'>Automate tasks, analyze data, and boost team productivity in one clean workspace.</p>
            <div className='flex gap-3'>
              <Button size='lg'>Start Free Trial</Button>
              <Button size='lg' variant='outline'>Watch Demo</Button>
            </div>
          </div>
          <Card className='rounded-2xl shadow-xl'>
            <CardContent className='p-6 space-y-4'>
              <div className='text-sm text-slate-500'>Live Dashboard</div>
              <div className='text-4xl font-bold'>{count}</div>
              <div className='text-sm text-slate-500'>Automations completed today</div>
              <Button onClick={()=>setCount(count+17)} className='w-full'>Run Automation</Button>
            </CardContent>
          </Card>
        </motion.div>

        <div className='grid md:grid-cols-3 gap-6'>
          {[
            ['Lightning Fast', 'Deploy workflows in minutes', Zap],
            ['Enterprise Security', 'Bank-grade protection', Shield],
            ['Smart Insights', 'Real-time analytics', BarChart3],
          ].map(([title,desc,Icon],i)=>(
            <motion.div key={title} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.1}}>
              <Card className='rounded-2xl h-full'>
                <CardContent className='p-6 space-y-3'>
                  <Icon className='w-6 h-6' />
                  <h3 className='font-semibold text-xl'>{title}</h3>
                  <p className='text-slate-600'>{desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className='rounded-2xl'>
          <CardContent className='p-8'>
            <h2 className='text-2xl font-bold mb-4'>Why teams choose NovaFlow</h2>
            <div className='grid md:grid-cols-2 gap-4'>
              {['Save 10+ hours weekly','No-code automation builder','Integrates with 100+ tools','Scales with your business'].map(item=>(
                <div key={item} className='flex items-center gap-2'><Check className='w-4 h-4'/><span>{item}</span></div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
