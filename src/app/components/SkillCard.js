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
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
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



const SkillCard = ({ skillArray }) => {


  const [openModal, setOpenModal] = useState(false);


  const [getCurrentSkill, setGetCurrentSkill] = useState();


  const handleOpenModal = (currSkill) => {

    setGetCurrentSkill(currSkill);

    setOpenModal(true);

  };


  return (

    <div className="mb-10 w-7/12 flex items-center justify-center">

      <div className="w-full grid grid-cols-2 gap-x-8 gap-y-6 items-center">

        {skillArray.map((skill) => (
          <Card
            key={skill.id}
            className="w-full text-center bg-transparent/10 text-white font-poppins border-2 border-green-500"
          >
            <CardHeader className='flex flex-col gap-2'>
              <CardTitle>{skill.nameOfTheProject}</CardTitle>
              <CardDescription>
                <span className='text-gray-400'>{skill.descOfTheProject.split(' ').length <= 6 ? skill.descOfTheProject : skill.descOfTheProject.split(' ').slice(0, 6).join(' ') + ' . . . .'}</span>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                className="w-56 p-6 bg-transparent border-2 hover:border-green-500 hover:bg-slate-800 hover:text-white transition-all duration-150 uppercase"
                onClick={() => handleOpenModal(skill)}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {getCurrentSkill && <AlertDialog open={openModal} onOpenChange={setOpenModal}>
        <AlertDialogContent className="overflow-auto max-h-[90vh] bg-slate-800 border-slate-800">
          <AlertDialogHeader>
            <AlertDialogTitle className='mb-4 font-poppins text-2xl text-green-400 text-center'>{getCurrentSkill.nameOfTheProject}</AlertDialogTitle>
            <AlertDialogDescription className='flex flex-col gap-6 font-poppins'>
              <span className='flex flex-col items-center justify-center text-center gap-2 text-base text-green-400'>
                <span className='font-bold'>Description:</span>
                <span className='text-white'>{getCurrentSkill.descOfTheProject}</span>
              </span>
              <span className='flex flex-col items-center justify-center text-center gap-2 text-base text-green-400'>
                <span className='font-bold'>Tech Stack Used:</span>
                <span className='text-white'>{getCurrentSkill.techStackUsedInTheProject}</span>
              </span>
                <span className='flex flex-col items-center justify-center text-center gap-2 text-base text-green-400'>
                  <span className='font-bold'>Links:</span>
                  <span className='mt-1 flex items-center justify-center gap-4'>
                      <span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Link href={getCurrentSkill.livePreviewOfTheProject} target='_blank'><IoIosLink className='text-white hover:text-green-400 text-3xl transition-all duration-150' /></Link>
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
                            <Link href={getCurrentSkill.githubLinkOfTheProject} target='_blank'><FaGithub className='text-white hover:text-green-400 text-3xl transition-all duration-150' /></Link>
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
            <AlertDialogAction onClick={() => setOpenModal(false)} className='border-2 border-green-400 bg-transparent text-green-400 font-poppins hover:bg-slate-700 hover:text-green-400 transition-all duration-200'>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>}

    </div>
  );
};

export default SkillCard;
