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
      <div className="min-h-screen bg-slate-900 font-poppins">

        <motion.div 
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 mt-16 lg:mt-6">

            <div className="text-white flex flex-col gap-7">

              <div>
                <p className="text-gray-300 text-center lg:text-left">
                  Welcome to my Porfolio
                </p>
              </div>

              <div>
                <p className="flex flex-col text-3xl lg:text-5xl text-center lg:text-left">
                  <span>My name is</span>
                  <motion.span 
                    className="text-green-400 font-semibold tracking-wide"
                    initial={{ opacity: 0, x: '-100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: '100%' }}
                    transition={{ duration: 3 }}
                  >
                    Somenath Choudhury
                  </motion.span>
                </p>
              </div>

              <div className="text-gray-400 px-3 lg:p-0 max-w-lg text-center lg:text-left">
                I have 3 years of hands-on experience in developing full stack
                webapps, AI models and deploying them in production.
              </div>

              <Link href="https://drive.google.com/file/d/1VizRj4hqxedNLaFQsaSU4FbXI7hTCRcH/view?usp=sharing" target='_blank'>
                <Button
                  variant="ghost"
                  className="border-2 m-auto lg:m-0 border-green-500 hover:bg-slate-800 transition-all duration-150 text-base hover:text-white py-6 w-5/6 lg:w-3/6 flex items-center justify-center gap-2"
                >
                  <i className="ri-download-cloud-line text-2xl font-poppins"></i>
                  <span>Download Resume</span>
                </Button>
              </Link>

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
              initial={{ opacity: 0, y: 50, scale: 0 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 3 }}
              viewport={{ once: true }}
            >
              <Image
                class="hidden lg:block object-cover object-center rounded-full border-4 border-dashed border-green-500"
                alt="hero img"
                src={WelcomePageImg}
                width={550}
                height={550}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Page;
