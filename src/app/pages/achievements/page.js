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
        'Certified as Postman API Fundamentals Student Expert for showing essential skills in API interaction and Postman essentials.',
      urlOfTheAchievement:
        'https://badgr.com/public/assertions/u9_k1c49QaOWTqEvt0oOzA?identity__email=somenathchoudhury35@gmail.com',
    },
    {
      id: 2,
      nameOfTheAchievement: 'Devfolio Live the Code 2.0 Hackathon',
      photoOfTheAchievement: DevfolioAchievmentPic,
      descriptionOfTheAchievement:
        'Recognized as a Pool Prize Winner among 100 teams in the Devfolio Live The Code 2.0 Hackathon.',
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
    <div className="min-h-screen bg-slate-900 flex flex-col gap-10 items-center px-4">

      <div className="mt-14 w-3/4 lg:w-1/4">
        <PageHeading heading="My Achievements" />
      </div>

      <div className="mb-16 w-11/12 lg:w-4/5 flex items-center justify-center">
        <motion.div 
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className="h-full flex flex-col overflow-hidden bg-slate-950/60 text-white font-poppins border border-slate-800 hover:border-green-500/50 transition-all duration-200 rounded-2xl"
            >
              <div className="relative w-full aspect-video bg-slate-900">
                <Image
                  src={achievement.photoOfTheAchievement}
                  alt={achievement.nameOfTheAchievement}
                  fill
                  className="object-cover"
                />
              </div>

              <CardHeader className="flex flex-col gap-2 text-center">
                <CardTitle className="text-green-400 text-lg">
                  {achievement.nameOfTheAchievement}
                </CardTitle>
                <CardDescription>
                  <span className="text-gray-400 text-sm">
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

              <CardContent className="mt-auto flex items-center justify-center pb-7">
                <Button
                  variant="outline"
                  className="w-56 p-6 bg-transparent border-2 border-green-500/50 hover:border-green-500 hover:bg-slate-800 hover:text-white transition-all duration-150 uppercase"
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
            <AlertDialogContent className="w-[92vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl max-h-[88vh] overflow-y-auto rounded-2xl border border-green-500/30 bg-slate-900 p-0">

              <div className="grid md:grid-cols-2">

                {/* image column - object-contain keeps the whole image visible and centered */}
                <div className="relative h-56 sm:h-72 md:h-full flex items-center justify-center bg-slate-950/60 md:rounded-l-2xl overflow-hidden p-4">
                  <Image
                    src={getCurrentAchievement.photoOfTheAchievement}
                    alt={getCurrentAchievement.nameOfTheAchievement}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* details column */}
                <div className="p-5 sm:p-7 flex flex-col">
                  <AlertDialogHeader className="text-left">
                    <AlertDialogTitle className="font-poppins text-2xl font-bold text-green-400">
                      {getCurrentAchievement.nameOfTheAchievement}
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                      <span className="flex flex-col gap-6 mt-4 font-poppins">

                        <span className="flex flex-col gap-2">
                          <span className="text-sm font-semibold text-green-400">
                            Description
                          </span>
                          <span className="text-sm text-slate-300 leading-relaxed">
                            {getCurrentAchievement.descriptionOfTheAchievement}
                          </span>
                        </span>

                        <span className="flex flex-col gap-2">
                          <span className="text-sm font-semibold text-green-400">
                            Link
                          </span>
                          <span>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Link
                                    href={getCurrentAchievement.urlOfTheAchievement}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 px-3 py-2 text-xs rounded-lg border border-slate-700 hover:border-green-400 hover:text-green-400 text-slate-300 transition-all duration-150 w-fit"
                                  >
                                    <IoIosLink className="text-lg" />
                                    View Certificate
                                  </Link>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <span>Open Link</span>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </span>
                        </span>

                      </span>
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <AlertDialogFooter className="mt-auto pt-6">
                    <div className="flex items-center justify-end w-full">
                      <Button
                        onClick={() => setOpenModal(false)}
                        className="px-6 py-2 border-2 border-green-400 bg-transparent text-green-400 font-poppins hover:bg-slate-800 hover:text-green-400 transition-all duration-200"
                      >
                        Close
                      </Button>
                    </div>
                  </AlertDialogFooter>
                </div>
              </div>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
    </div>
  );
};

export default Page;