'use client';

import Image from 'next/image';
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
import { IoIosLink } from 'react-icons/io';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import { motion } from 'framer-motion';

import PageHeading from '@/app/components/PageHeading';

import PostmanStudentExpertImg from './../../assets/achievements_pics/postmanstudentexpertbatchimg.png';
import DevfolioAchievmentPic from './../../assets/achievements_pics/devfolio_achievment.png';


const Page = () => {
  const achievements = [
    {
      id: 1,
      nameOfTheAchievement: 'Postman API Fundamentals Student Expert',
      photoOfTheAchievement: PostmanStudentExpertImg,
      descriptionOfTheAchievement:
        'Got this batch for successfully testing APIs with Postman.',
      urlOfTheAchievement:
        'https://badgr.com/public/assertions/u9_k1c49QaOWTqEvt0oOzA?identity__email=somenathchoudhury35@gmail.com',
    },
    {
      id: 2,
      nameOfTheAchievement: 'Devfolio Live the Code 2.0 Hackathon',
      photoOfTheAchievement: DevfolioAchievmentPic,
      descriptionOfTheAchievement:
        'Secured Rank 5 and became Pool Prize Winner in Devfolio Live the Code 2.0 Hackathon out of 100 teams.',
      urlOfTheAchievement:
        'https://drive.google.com/file/d/1SHrwWFKx7aovLIpB6Lks4EEZ7cN9oscM/view',
    },
  ];

  const [openModal, setOpenModal] = useState(false);

  const [getCurrentAchievement, setGetCurrentAchievement] = useState();

  const handleOpenModal = (currAchievement) => {
    setGetCurrentAchievement(currAchievement);

    setOpenModal(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center">
      <div className="mt-14 w-3/4 lg:w-1/4">
        <PageHeading heading="My Achievements" />
      </div>

      <div className="mb-10 w-11/12 lg:w-4/5 flex items-center justify-center">
        <motion.div 
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 items-center"
          initial={{ opacity: 0, y: 50, scale: 0 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className="w-full text-center bg-transparent/10 text-white font-poppins"
            >
              <CardHeader className="flex flex-col gap-2">
                <CardTitle className="text-green-300 text-center">
                  {achievement.nameOfTheAchievement}
                </CardTitle>
                <CardDescription>
                  <span className="text-gray-400 text-center">
                    {achievement.descriptionOfTheAchievement.split(' ')
                      .length <= 6
                      ? achievement.descriptionOfTheAchievement
                      : achievement.descriptionOfTheAchievement
                          .split(' ')
                          .slice(0, 6)
                          .join(' ') + ' . . . .'}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-56 p-6 bg-transparent border-2 hover:border-green-500 hover:bg-slate-800 hover:text-white transition-all duration-150 uppercase"
                  onClick={() => handleOpenModal(achievement)}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {getCurrentAchievement && (
          <AlertDialog open={openModal} onOpenChange={setOpenModal}>
            <AlertDialogContent className="overflow-auto max-h-[90vh] bg-slate-800 border-slate-800">
              <AlertDialogHeader>
                <AlertDialogTitle className="mb-4 font-poppins text-xl text-green-400 text-center">
                  {getCurrentAchievement.nameOfTheAchievement}
                </AlertDialogTitle>
                <AlertDialogDescription className="flex flex-col gap-6 font-poppins">

                  <span className="flex flex-col items-center justify-center text-center gap-2 text-base text-green-400">

                    <Image 
                      className='w-full h-full rounded-xl shadow-xl object-cover object-center border-8 border-green-400'
                      src={getCurrentAchievement.photoOfTheAchievement} 
                      width="" 
                      height=""
                      alt={getCurrentAchievement.nameOfTheAchievement} 
                    />

                    <span className="font-bold mt-5">Description:</span>
                    <span className="text-white">
                      {getCurrentAchievement.descriptionOfTheAchievement}
                    </span>

                  </span>

                  <span className="flex flex-col items-center justify-center text-center gap-2 text-base text-green-400">
                    <span className="font-bold">Link:</span>
                    <span className="mt-1 flex items-center justify-center gap-4">
                      <span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <Link
                                href={getCurrentAchievement.urlOfTheAchievement}
                                target="_blank"
                              >
                                <IoIosLink className="text-white hover:text-green-400 text-3xl transition-all duration-150" />
                              </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                              <span>Live Preview</span>
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
                  <Button
                    onClick={() => setOpenModal(false)}
                    className="p-6 border-2 border-green-400 bg-transparent text-green-400 font-poppins hover:bg-slate-700 hover:text-green-400 transition-all duration-200"
                  >
                    Close
                  </Button>
                </div>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
    </div>
  );
};

export default Page;