import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { IoIosLink } from "react-icons/io";
import { FaGithub, FaYoutube } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const WorkCard = ({ workArray, accentColor = "#4ade80" }) => {
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [getCurrentWork, setGetCurrentWork] = useState();

  const handleOpenModal = (currWork) => {
    setGetCurrentWork(currWork);
    setOpenModal(true);
  };

  return (
    <div className="mb-10 w-11/12 lg:w-4/5 flex flex-col gap-8 items-center justify-center">
      <div className="w-full flex justify-end mr-12">
        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-white text-xl text-center">
            {page} / {Math.ceil(workArray.length / 6)}
          </p>

          <div className="flex gap-5">
            <button
              disabled={page === 1}
              className="flex items-center justify-center text-green-300 border-2 p-2 border-green-200 hover:border-green-400 transition-all duration-200 disabled:text-slate-400 disabled:border-slate-500 disabled:cursor-not-allowed rounded-lg text-2xl lg:text-3xl font-bold"
              onClick={() => setPage(page - 1)}
            >
              <i className="ri-arrow-left-line"></i>
            </button>
            <button
              disabled={page === Math.ceil(workArray.length / 6)}
              className="flex items-center justify-center text-green-300 border-2 p-2 border-green-200 hover:border-green-400 transition-all duration-200 disabled:text-slate-400 disabled:border-slate-500 disabled:cursor-not-allowed rounded-lg text-2xl lg:text-3xl font-bold"
              onClick={() => setPage(page + 1)}
            >
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>

      <div
        style={{ "--accent": accentColor }}
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 items-stretch"
      >
        {workArray.slice(page * 6 - 6, page * 6).map((work) => {
          const techStackTags = work.techStackUsedInTheProject
            .split(",")
            .map((tech) => tech.trim());

          return (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden bg-slate-950/40 text-white font-poppins border-2 border-[var(--accent)]">
                <div className="relative w-full aspect-video">
                  <Image
                    src={work.picOfTheProj}
                    alt={work.nameOfTheProject}
                    fill
                    className="object-cover"
                  />
                </div>

                <CardHeader className="flex flex-col gap-2 text-center">
                  <CardTitle>{work.nameOfTheProject}</CardTitle>
                  <CardDescription>
                    <span className="text-gray-400">
                      {work.descOfTheProject.split(" ").length <= 6
                        ? work.descOfTheProject
                        : work.descOfTheProject
                            .split(" ")
                            .slice(0, 6)
                            .join(" ") + " . . . ."}
                    </span>
                  </CardDescription>
                </CardHeader>

                <CardContent className="mt-auto flex flex-col gap-5 items-center">
                  <div className="flex flex-wrap justify-center gap-2">
                    {techStackTags.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 text-[var(--accent)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    {work.livePreviewOfTheProject && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Link
                              href={work.livePreviewOfTheProject}
                              target="_blank"
                            >
                              <IoIosLink className="text-white hover:text-[var(--accent)] text-2xl transition-all duration-150" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <span>Live Preview</span>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}

                    {work.githubLinkOfTheProject && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Link
                              href={work.githubLinkOfTheProject}
                              target="_blank"
                            >
                              <FaGithub className="text-white hover:text-[var(--accent)] text-2xl transition-all duration-150" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <span>GitHub Link</span>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}

                    {work.youtubeVideoLink && (
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Link href={work.youtubeVideoLink} target="_blank">
                              <FaYoutube className="text-white hover:text-[var(--accent)] text-2xl transition-all duration-150" />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>
                            <span>Watch Video</span>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    className="w-56 p-6 bg-transparent border-2 border-[var(--accent)]/50 hover:border-[var(--accent)] hover:bg-slate-800 hover:text-white transition-all duration-150 uppercase"
                    onClick={() => handleOpenModal(work)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {getCurrentWork && (
        <AlertDialog open={openModal} onOpenChange={setOpenModal}>
          <AlertDialogContent
            style={{ "--accent": accentColor }}
            className="w-[92vw] sm:max-w-2xl md:max-w-3xl lg:max-w-4xl max-h-[88vh] overflow-y-auto rounded-2xl border border-[var(--accent)]/30 bg-slate-900 p-0"
          >
            
            <div className="grid md:grid-cols-2">

              <div className="relative h-56 sm:h-72 md:h-full">
                <Image
                  src={getCurrentWork.picOfTheProj}
                  alt={getCurrentWork.nameOfTheProject}
                  fill
                  className="object-cover md:rounded-l-2xl"
                />
              </div>

              <div className="p-5 sm:p-7 flex flex-col">
                <AlertDialogHeader className="text-left">
                  <AlertDialogTitle className="font-poppins text-2xl font-bold text-[var(--accent)]">
                    {getCurrentWork.nameOfTheProject}
                  </AlertDialogTitle>

                  <AlertDialogDescription>
                    <span className="flex flex-col gap-6 mt-4 font-poppins">
                      <span className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-[var(--accent)]">
                          Description
                        </span>
                        <span className="text-sm text-slate-300 leading-relaxed">
                          {getCurrentWork.descOfTheProject}
                        </span>
                      </span>

                      <span className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-[var(--accent)]">
                          Tech Stack
                        </span>
                        <span className="flex flex-wrap gap-2">
                          {getCurrentWork.techStackUsedInTheProject
                            .split(",")
                            .map((tech) => tech.trim())
                            .map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 text-[var(--accent)]"
                              >
                                {tech}
                              </span>
                            ))}
                        </span>
                      </span>

                      <span className="flex flex-col gap-2">
                        <span className="text-sm font-semibold text-[var(--accent)]">
                          Links
                        </span>
                        <span className="flex flex-wrap gap-3">
                          {getCurrentWork.livePreviewOfTheProject && (
                            <Link
                              href={getCurrentWork.livePreviewOfTheProject}
                              target="_blank"
                              className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg border border-slate-700 hover:border-[var(--accent)] hover:text-[var(--accent)] text-slate-300 transition-all duration-150"
                            >
                              <IoIosLink className="text-lg" />
                              Live Preview
                            </Link>
                          )}

                          {getCurrentWork.githubLinkOfTheProject && (
                            <Link
                              href={getCurrentWork.githubLinkOfTheProject}
                              target="_blank"
                              className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg border border-slate-700 hover:border-[var(--accent)] hover:text-[var(--accent)] text-slate-300 transition-all duration-150"
                            >
                              <FaGithub className="text-lg" />
                              GitHub
                            </Link>
                          )}

                          {getCurrentWork.youtubeVideoLink && (
                            <Link
                              href={getCurrentWork.youtubeVideoLink}
                              target="_blank"
                              className="flex items-center gap-2 px-3 py-2 text-xs rounded-lg border border-slate-700 hover:border-[var(--accent)] hover:text-[var(--accent)] text-slate-300 transition-all duration-150"
                            >
                              <FaYoutube className="text-lg" />
                              Watch Video
                            </Link>
                          )}
                        </span>
                      </span>
                    </span>
                  </AlertDialogDescription>
                </AlertDialogHeader>

                <AlertDialogFooter className="mt-auto pt-6">
                  <div className="flex items-center justify-end w-full">
                    <Button
                      onClick={() => setOpenModal(false)}
                      className="px-6 py-2 border-2 border-[var(--accent)] bg-transparent text-[var(--accent)] font-poppins hover:bg-slate-800 hover:text-[var(--accent)] transition-all duration-200"
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
  );
};

export default WorkCard;
