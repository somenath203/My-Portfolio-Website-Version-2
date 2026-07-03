'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion } from 'framer-motion';

import WelcomePageImg from './assets/welcome_page_pics/welcome_page_img.png';

const Page = () => {

  const socialLinksArray = [
    {
      id: 1,
      nameOfTheSocialLink: 'GitHub',
      urlOfTheSocialLink: 'https://github.com/somenath203',
      iconOfTheSocialLink: 'ri-github-line'
    },
    {
      id: 2,
      nameOfTheSocialLink: 'Linkedin',
      urlOfTheSocialLink: 'https://www.linkedin.com/in/somenath-choudhury/',
      iconOfTheSocialLink: 'ri-linkedin-fill'
    },
    {
      id: 3,
      nameOfTheSocialLink: 'StackOverflow',
      urlOfTheSocialLink: 'https://stackoverflow.com/users/14437554/somenath-choudhury',
      iconOfTheSocialLink: 'ri-stack-overflow-line'
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-slate-900 font-poppins relative overflow-hidden">

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <motion.div 
          className="flex items-center justify-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 mt-16 lg:mt-6 px-4">

            <div className="text-white flex flex-col gap-6">

              <div>
                <p className="text-gray-300 text-center lg:text-left">
                  Welcome to my Porfolio
                </p>
              </div>

              <div className="flex justify-center text-center lg:justify-start lg:text-start">
                <span className="font-mono text-xs sm:text-sm px-3 py-1.5 rounded-full border border-green-500/40 bg-green-500/10 text-green-400">
                  {'>_'} Full Stack Developer • AI Enthusiast
                </span>
              </div>

              <div>
                <p className="flex flex-col text-3xl lg:text-5xl text-center lg:text-left">
                  <span>My name is</span>
                  <motion.span 
                    className="text-green-400 font-semibold tracking-wide"
                    initial={{ opacity: 0, x: '-100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ duration: 2 }}
                  >
                    Somenath Choudhury
                  </motion.span>
                </p>
              </div>

              <div className="text-gray-400 px-3 lg:p-0 max-w-lg text-center lg:text-left leading-relaxed">
                I have 3 years of hands-on experience in developing full stack
                webapps, AI models and deploying them in production.
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start w-full">

                <Link href="/pages/works" className="w-5/6 sm:w-auto">
                  <Button
                    className="border-2 border-green-500 bg-green-500 hover:bg-green-400 transition-all duration-150 text-base text-slate-900 font-semibold py-6 w-full sm:w-auto px-6 flex items-center justify-center gap-2"
                  >
                    <span>View My Work</span>
                    <i className="ri-arrow-right-line text-xl"></i>
                  </Button>
                </Link>

                <Link href="https://drive.google.com/file/d/1VizRj4hqxedNLaFQsaSU4FbXI7hTCRcH/view?usp=sharing" target='_blank' className="w-5/6 sm:w-auto">
                  <Button
                    variant="ghost"
                    className="border-2 border-green-500 hover:bg-slate-800 transition-all duration-150 text-base hover:text-white py-6 w-full sm:w-auto px-6 flex items-center justify-center gap-2"
                  >
                    <i className="ri-download-cloud-line text-2xl font-poppins"></i>
                    <span>Download Resume</span>
                  </Button>
                </Link>

              </div>

              <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-2 mt-2 m-auto lg:m-0">

                <span className="text-xl lg:text-lg tracking-wider font-poppins mr-2 text-center lg:text-left">
                  Social Links:
                </span>

                <span className="flex items-center gap-4">

                  {socialLinksArray.map((social) => (
                    <TooltipProvider key={social.id}>
                      <Tooltip>
                        <TooltipTrigger>
                          <Link
                            href={social.urlOfTheSocialLink}
                            target="_blank"
                          >
                            <i className={`${social.iconOfTheSocialLink} hover:bg-slate-800 cursor-pointer transition-all duration-150 text-3xl lg:text-2xl border-2 text-green-500 border-green-400 p-2 rounded-full`}></i>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{social.nameOfTheSocialLink} Profile Link</p>
                        </TooltipContent>
                      </Tooltip>
                  </TooltipProvider>
                  ))}

                </span>
              </div>
            </div>

            <motion.div
              className="hidden lg:flex justify-center"
              initial={{ opacity: 0, y: 50, scale: 0 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            >
              <div className="relative w-[450px]">

                <div className="absolute inset-0 rounded-3xl bg-green-500/10 blur-3xl scale-95" />

                <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-black/40">

                  <div className="flex items-center gap-2 px-4 py-3 bg-slate-950/80 border-b border-slate-800">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    <span className="ml-3 font-mono text-xs text-slate-500">
                      somenath.jsx
                    </span>
                  </div>

                  <Image
                    className="object-cover object-center w-full h-auto"
                    alt="hero img"
                    src={WelcomePageImg}
                    width={450}
                    height={450}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Page;