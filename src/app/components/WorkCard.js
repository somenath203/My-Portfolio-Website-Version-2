import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useState } from 'react';
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';


const WorkCard = ({ workArray }) => {


  const [page, setPage] = useState(1);

  const [openModal, setOpenModal] = useState(false);

  const [getCurrentWork, setGetCurrentWork] = useState();


  const handleOpenModal = (currWork) => {

    setGetCurrentWork(currWork);

    setOpenModal(true);

  };


  return (

    <div className="mb-10 w-11/12 lg:w-4/5 flex flex-col gap-8 items-center justify-center">

      <div className='w-full flex justify-end mr-12'>

        <div className="flex flex-col items-center justify-center gap-2">

          <p className='text-white text-xl text-center'>{page} / {Math.ceil(workArray.length / 6)}</p>

          <div className='flex gap-5'>
            <button 
              disabled={page === 1}
              className='flex items-center justify-center text-green-300 border-2 p-2 border-green-200 hover:border-green-400 transition-all duration-200 disabled:text-slate-400 disabled:border-slate-500 disabled:cursor-not-allowed rounded-lg text-2xl lg:text-3xl font-bold'
              onClick={() => setPage(page - 1)}
            >
              <i className="ri-arrow-left-line"></i>
            </button>
            <button 
              disabled={page === Math.ceil(workArray.length / 6)}
              className='flex items-center justify-center text-green-300 border-2 p-2 border-green-200 hover:border-green-400 transition-all duration-200 disabled:text-slate-400 disabled:border-slate-500 disabled:cursor-not-allowed rounded-lg text-2xl lg:text-3xl font-bold'
              onClick={() => setPage(page + 1)}
            >
              <i class="ri-arrow-right-line"></i>
            </button>
          </div>

        </div>

      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 items-center">

        {workArray.slice(page * 6 - 6, page * 6).map((work) => (
          <motion.div 
            key={work.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card
              className="w-full text-center bg-transparent/10 text-white font-poppins border-2 border-green-500"
            >
              <CardHeader className='flex flex-col gap-2'>
                <CardTitle>{work.nameOfTheProject}</CardTitle>
                <CardDescription>
                  <span className='text-gray-400'>{work.descOfTheProject.split(' ').length <= 6 ? work.descOfTheProject : work.descOfTheProject.split(' ').slice(0, 6).join(' ') + ' . . . .'}</span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-56 p-6 bg-transparent border-2 hover:border-green-500 hover:bg-slate-800 hover:text-white transition-all duration-150 uppercase"
                  onClick={() => handleOpenModal(work)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {getCurrentWork && <AlertDialog open={openModal} onOpenChange={setOpenModal}>
        <AlertDialogContent className="overflow-auto max-h-[90vh] bg-slate-800 border-slate-800">
          <AlertDialogHeader>
            <AlertDialogTitle className='mb-4 font-poppins text-xl text-green-400 text-center'>{getCurrentWork.nameOfTheProject}</AlertDialogTitle>
            <AlertDialogDescription className='flex flex-col gap-6 font-poppins'>
              <span className='flex flex-col items-center justify-center text-center gap-2 text-base text-green-400'>
                
              <Image 
                className='w-full h-full rounded-xl shadow-xl object-cover object-center border-8 border-green-500'
                src={getCurrentWork.picOfTheProj} 
                width=""
                height="" 
                alt={getCurrentWork.nameOfTheAchievement} 
              />

                <span className='font-bold mt-5'>Description:</span>
                <span className='text-white'>{getCurrentWork.descOfTheProject}</span>
              </span>
              <span className='flex flex-col items-center justify-center text-center gap-2 text-base text-green-400'>
                <span className='font-bold'>Tech Stack Used:</span>
                <span className='text-white'>{getCurrentWork.techStackUsedInTheProject}</span>
              </span>
                <span className='flex flex-col items-center justify-center text-center gap-2 text-base text-green-400'>
                  <span className='font-bold'>Links:</span>
                  <span className='mt-1 flex items-center justify-center gap-4'>
                      <span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Link href={getCurrentWork.livePreviewOfTheProject} target='_blank'><IoIosLink className='text-white hover:text-green-400 text-3xl transition-all duration-150' /></Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <span>Live Preview</span>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                      <span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Link href={getCurrentWork.githubLinkOfTheProject} target='_blank'><FaGithub className='text-white hover:text-green-400 text-3xl transition-all duration-150' /></Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <span>GitHub Link</span>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </span>
                  </span>
                </span>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className='flex items-center justify-end'>
              <Button onClick={() => setOpenModal(false)} className='p-6 border-2 border-green-400 bg-transparent text-green-400 font-poppins hover:bg-slate-700 hover:text-green-400 transition-all duration-200'>Close</Button>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>}

    </div>
  );
};

export default WorkCard;
