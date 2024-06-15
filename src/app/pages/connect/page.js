'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import PageHeading from '@/app/components/PageHeading';


const Page = () => {

  return (

    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center">

      <div className="mt-14 w-1/6">

        <PageHeading heading='Connect With Me' />

      </div>

      <div className='w-3/5'>

        <form className='w-full flex flex-col gap-6'>

          <div className='flex flex-col gap-3'>
            <Label className='text-white'>Full Name</Label>
            <Input type='text' placeholder='enter your fullname' className='bg-transparent' required />
          </div>

          <div className='flex flex-col gap-3'>
            <Label className='text-white'>Email Address</Label>
            <Input type='email' placeholder='enter your email address' className='bg-transparent' required />
          </div>

          <div className="flex flex-col gap-3">
            <Label className='text-white'>Your Message</Label>
            <Textarea className='bg-transparent h-40' placeholder='drop your message here' required />
          </div>

          <Button variant="outline" className='bg-transparent p-6 text-lg font-poppins tracking-wide text-white hover:text-white hover:bg-slate-800 transition-all duration-200'>Submit</Button>

        </form>

      </div>

      <p className='text-white text-2xl font-poppins tracking-wide'>------------ OR ------------</p>

      <div className='mb-10 text-xl text-white font-poppins tracking-widest flex flex-col gap-1 items-center justify-center'>
        <span className='h-0.5 bg-white mb-4 w-80'></span>
        <span>
          Click <a href="mailto:somenathchoudhury38@gmail.com" target='_blank' className='text-green-400 font-semibold'>HERE</a> to email me directly
        </span>
        <span className='h-0.5 bg-white my-4 w-80'></span>
      </div>

    </div>
  );
};

export default Page;
