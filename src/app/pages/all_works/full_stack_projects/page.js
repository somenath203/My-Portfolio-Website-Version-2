"use client";

import PageHeading from "@/app/components/PageHeading";
import WorkCard from "@/app/components/WorkCard";

import MyExpenseManagerPic from "./../../../assets/full_stack_development_pics/myexpensemanager.png";
import NextFinanceTrackerPic from "./../../../assets/full_stack_development_pics/nextfinancetrackerpic.png";
import JShareProjectPic from "./../../../assets/full_stack_development_pics/jshareprojimg.png";

const Page = () => {
  const fullStackProjects = [
    {
      id: 1,
      nameOfTheProject: "My Finance Manager",
      descOfTheProject:
        "My Finance Manager is a full-stack personal finance management application that allows users to track their savings, expenses, and investments. Based on the recorded financial data, the application provides insights to help users manage their money more effectively.",
      techStackUsedInTheProject:
        "React, Tailwind CSS, Ant Design, Express.js, MongoDB",
      picOfTheProj: MyExpenseManagerPic,
      livePreviewOfTheProject:
        "https://my-finance-manager-frontend.vercel.app/",
      githubLinkOfTheProject:
        "https://github.com/somenath203/My-Finance-Manager-Frontend",
      youtubeVideoLink: "https://www.youtube.com/",
    },
    {
      id: 2,
      nameOfTheProject: "Next Finance Tracker",
      descOfTheProject:
        "Next Finance Tracker is a full-stack finance management application built with Next.js that helps users track income, expenses, and overall financial activity through an intuitive and interactive dashboard.",
      techStackUsedInTheProject:
        "Next.js, Tailwind CSS, Ant Design, MongoDB, Zustand, Clerk Authentication, Recharts",
      picOfTheProj: NextFinanceTrackerPic,
      livePreviewOfTheProject:
        "https://next-finance-tracker-fullstack.vercel.app/",
      githubLinkOfTheProject:
        "https://github.com/somenath203/next-finance-tracker",
      youtubeVideoLink: "https://www.youtube.com/",
    },
    {
      id: 3,
      nameOfTheProject: "JShare",
      descOfTheProject:
        "JShare is a full-stack web application that allows users to store, manage, and share JSON data with ease. Users can generate shareable links, making it simple to collaborate and exchange JSON data with others.",
      techStackUsedInTheProject:
        "Next.js, shadcn/ui, Tailwind CSS, Prisma ORM, Neon PostgreSQL, Clerk Authentication, @uiw/react-codemirror, React JSON View",
      picOfTheProj: JShareProjectPic,
      livePreviewOfTheProject: "https://j-share-som.vercel.app/",
      githubLinkOfTheProject: "https://github.com/somenath203/JShare",
      youtubeVideoLink: "https://www.youtube.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center">
      <div className="mt-14 w-4/6 lg:w-1/4">
        <PageHeading heading="Full Stack Projects" />
      </div>

      <WorkCard workArray={fullStackProjects} accentColor="#a78bfa" />
    </div>
  );
};

export default Page;
