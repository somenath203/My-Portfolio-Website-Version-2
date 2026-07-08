'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaJava } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiStreamlit } from "react-icons/si";
import { FaLayerGroup } from "react-icons/fa";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { GoGraph } from "react-icons/go";
import { SiScikitlearn } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { LuSparkles } from "react-icons/lu";
import { FaDocker } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import PageHeading from '@/app/components/PageHeading';


const Page = () => {

  const tabListName = [
    { id: 1, name: 'Programming Languages' },
    { id: 2, name: 'Frontend Web Development' },
    { id: 3, name: 'Backend Development' },
    { id: 4, name: 'App Development' },
    { id: 5, name: 'Data Science & Visualization' },
    { id: 6, name: 'Artificial Intelligence' },
    { id: 7, name: 'DevOps' },
  ];

  const tabContents = [
    {
      id: 1,
      tabName: 'Programming Languages',
      tabContent: [
        { id: 1, icon: <FaJava />, nameOfTooltip: 'JAVA' },
        { id: 2, icon: <FaPython />, nameOfTooltip: 'Python' },
        { id: 3, icon: <IoLogoJavascript />, nameOfTooltip: 'Javascript' },
      ],
    },
    {
      id: 2,
      tabName: 'Frontend Web Development',
      tabContent: [
        { id: 1, icon: <FaHtml5 />, nameOfTooltip: 'Html' },
        { id: 2, icon: <FaCss3 />, nameOfTooltip: 'CSS' },
        { id: 3, icon: <FaReact />, nameOfTooltip: 'ReactJS' },
        { id: 4, icon: <RiNextjsFill />, nameOfTooltip: 'NextJS' },
        { id: 5, icon: <RiTailwindCssFill />, nameOfTooltip: 'TailwindCSS' },
        { id: 6, icon: <SiAntdesign />, nameOfTooltip: 'Antd Design' },
        { id: 7, icon: <SiMui />, nameOfTooltip: 'Material UI' },
        { id: 8, icon: <SiChakraui />, nameOfTooltip: 'Chakra UI' },
        { id: 9, icon: <SiShadcnui />, nameOfTooltip: 'ShadcnUI' },
        { id: 10, icon: <SiStreamlit />, nameOfTooltip: 'Streamlit' },
        { id: 11, icon: <FaLayerGroup />, nameOfTooltip: 'Gradio' },
      ],
    },
    {
      id: 3,
      tabName: 'Backend Development',
      tabContent: [
        { id: 1, icon: <FaNodeJs />, nameOfTooltip: 'NodeJS' },
        { id: 2, icon: <SiExpress />, nameOfTooltip: 'ExpressJS' },
        { id: 3, icon: <SiFastapi />, nameOfTooltip: 'FastAPI' },
      ],
    },
    {
      id: 4,
      tabName: 'App Development',
      tabContent: [
        { id: 1, icon: <TbBrandReactNative />, nameOfTooltip: 'React Native' },
      ],
    },
    {
      id: 5,
      tabName: 'Data Science & Visualization',
      tabContent: [
        { id: 1, icon: <SiNumpy />, nameOfTooltip: 'Numpy' },
        { id: 2, icon: <SiPandas />, nameOfTooltip: 'Pandas' },
        { id: 3, icon: <GoGraph />, nameOfTooltip: 'Matplotlib and Seaborn' },
      ]
    },
    {
      id: 6,
      tabName: 'Artificial Intelligence',
      tabContent: [
        { id: 1, icon: <SiScikitlearn />, nameOfTooltip: 'Scikit learn' },
        { id: 2, icon: <SiTensorflow />, nameOfTooltip: 'TensorFlow' },
        { id: 3, icon: <LuSparkles />, nameOfTooltip: 'Generative AI' },
      ],
    },
    {
      id: 7,
      tabName: 'DevOps',
      tabContent: [
        { id: 1, icon: <FaDocker />, nameOfTooltip: 'Docker' }
      ],
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabListName[0].name);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-10 items-center font-poppins px-4">

      <div className="mt-14 w-3/6 lg:w-1/6">
        <PageHeading heading='My Skills' />
      </div>

      <Tabs
        defaultValue={selectedTab}
        className="w-11/12 lg:w-4/5 mb-16 border border-slate-800 rounded-2xl bg-slate-950/40 p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8"
      >

        <TabsList className="w-full h-auto bg-transparent p-0 lg:col-span-1">

          <div className="w-full flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {tabListName.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.name}
                className={`shrink-0 lg:w-full text-left rounded-lg px-4 py-3 border-l-4 transition-all duration-200 ${
                  selectedTab === tab.name
                    ? '!bg-slate-800 !text-white border-green-400'
                    : '!bg-transparent border-transparent hover:!bg-slate-800/50'
                }`}
                onClick={() => setSelectedTab(tab.name)}
              >
                <span className="font-poppins text-white tracking-wide text-sm whitespace-nowrap lg:whitespace-normal">
                  {tab.name}
                </span>
              </TabsTrigger>
            ))}
          </div>

        </TabsList>

        <TabsList className="bg-transparent p-0 w-full h-auto lg:col-span-3">
          {tabContents.map((tabcontent) => (
            <TabsContent
              key={tabcontent.id}
              value={tabcontent.tabName}
              className="text-white w-full mt-0"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {tabcontent.tabContent.map((icon) => (
                  <TooltipProvider key={icon.id}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-green-500/60 hover:bg-slate-800 transition-all duration-200">
                          <div className="text-4xl text-green-400">
                            {icon.icon}
                          </div>
                          <span className="text-xs text-slate-400 text-center leading-tight">
                            {icon.nameOfTooltip}
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{icon.nameOfTooltip}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </TabsContent>
          ))}
        </TabsList>

      </Tabs>
    </div>
  );
};

export default Page;