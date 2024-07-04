'use client';

import Link from 'next/link';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

import PageHeading from '@/app/components/PageHeading';


const Page = () => {
  const allWorkLinks = [
    {
      id: 1,
      workName: 'Frontend WebApp Projects',
      workDescription: 'Click here to view all my work related to frontend web development.',
      linkToWork: '/pages/all_works/frontend_web_projects'
    },
    {
      id: 2,
      workName: 'Backend Projects',
      workDescription: 'Click here to view all my work related to backend development.',
      linkToWork: '/pages/all_works/backend_projects'
    },
    {
      id: 3,
      workName: 'Full Stack Projects',
      workDescription: 'Click here to view all my work related to full stack.',
      linkToWork: '/pages/all_works/full_stack_projects'
    },
    {
      id: 4,
      workName: 'AI Projects',
      workDescription: 'Click here to view all my work related to artificial intelligence.',
      linkToWork: '/pages/all_works/ai_projects'
    },
    {
      id: 5,
      workName: 'MobileApp Projects',
      workDescription: 'Click here to view all my work related to mobile app development.',
      linkToWork: '/pages/all_works/mobile_app_projects'
    },
    {
      id: 6,
      workName: 'Chrome Extension Projects',
      workDescription: 'Click here to view all my work related to chrome extensions.',
      linkToWork: '/pages/all_works/chrome_extension_projects'
    },
  ];

  return (

    <div className="min-h-screen bg-slate-900 flex flex-col items-center">


      <div className="mt-14 w-4/6 lg:w-1/6">
        <PageHeading heading='My Works' />
      </div>

      <div className='w-11/12 lg:w-4/5 mb-10'>

        <div className="w-full mt-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-x-4 gap-y-8 font-poppins">
          {allWorkLinks.map((work) => (
            <motion.div 
              key={work.id}
              initial={{ opacity: 0, y: 50, scale: 0 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Card className='text-center flex flex-col items-center justify-center bg-transparent/10 text-white'>
                <CardHeader>
                  <CardTitle className='tracking-wide text-green-300 text-center'>{work.workName}</CardTitle>
                </CardHeader>
                <CardContent className='flex flex-col gap-4 items-center justify-center'>
                  <p className='text-gray-400 text-base text-center'>{work.workDescription}</p>
                  <Link href={work.linkToWork} className='w-56'>
                    <Button variant="outline" className='w-full p-6 bg-transparent border-2 hover:border-green-500 hover:bg-slate-800 hover:text-white transition-all duration-150 uppercase'>Click Here</Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>


    </div>
  );
};

export default Page;
