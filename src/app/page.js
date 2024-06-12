import Image from 'next/image';
import { Button } from "@/components/ui/button";

import WelcomePageImg from './assets/welcome_page_img.png';


const Page = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-900 font-poppins">

        <div className="flex items-center justify-center">

          <div className="grid grid-cols-2 items-center gap-10 mt-6">

            <div className='text-white flex flex-col gap-7'>

              <div>
                <p className='text-gray-300'>Welcome to my Porfolio</p>
              </div>
              <div>
                <p className='flex flex-col text-5xl'>
                  <span>My name is</span> 
                  <span className='text-green-400 font-semibold tracking-wide'>Somenath Choudhury</span>
                </p>
              </div>
              <div className='text-gray-400 max-w-lg'>
                I have 2 years of hands-on experience in developing full stack webapps, ai models and 
                deploying them in production.
              </div>
              <div>
              <Button variant="ghost" className="border-2 border-green-500 hover:bg-slate-800 transition-all duration-150 text-base hover:text-white py-6 w-3/6 flex items-center justify-center gap-2">
                <i className="ri-download-cloud-line text-2xl font-poppins"></i>
                <span>Download Resume</span>
              </Button>
              </div>
              <div className='flex items-center gap-2 mt-2'>
                <span className='text-lg tracking-wider font-poppins mr-2'>
                  Social Links: 
                </span>

                <span className='flex items-center gap-4'>

                  <span>
                    <i class="ri-github-line hover:bg-slate-800 cursor-pointer transition-all duration-150 text-2xl border-2 text-green-500 border-green-400 p-2 rounded-full"></i>
                  </span>
                  <span>
                    <i class="ri-stack-overflow-line hover:bg-slate-800 cursor-pointer transition-all duration-150 text-2xl border-2 text-green-500 border-green-400 p-2 rounded-full"></i>
                  </span>

                </span>

              </div>
            </div>

            <div>
              <Image
                class="object-cover object-center rounded-full border-4 border-dashed border-green-500"
                alt="hero img"
                src={WelcomePageImg}
                width={550}
                height={550}
              />
            </div>

          </div>

        </div>

      </div>
    </>
  );
};

export default Page;
