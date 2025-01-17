'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FaJava } from 'react-icons/fa';
import { FaPython } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { TbBrandCpp } from 'react-icons/tb';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiShadcnui } from "react-icons/si";
import { SiStreamlit } from "react-icons/si";
import { FaLayerGroup } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";
import { GoGraph } from "react-icons/go";
import { SiScikitlearn } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
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
    { id: 5, name: 'Artificial Intelligence' },
    { id: 6, name: 'DevOps' },
  ];

  const tabContents = [
    {
      id: 1,
      tabName: 'Programming Languages',
      tabContent: [
        { id: 1, icon: <TbBrandCpp />, nameOfTooltip: 'C++' },
        { id: 2, icon: <FaJava />, nameOfTooltip: 'JAVA' },
        { id: 3, icon: <FaPython />, nameOfTooltip: 'Python' },
        { id: 4, icon: <IoLogoJavascript />, nameOfTooltip: 'Javascript' },
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
        { id: 3, icon: <SiFlask />, nameOfTooltip: 'Flask' },
        { id: 4, icon: <SiFastapi />, nameOfTooltip: 'FastAPI' },
      ],
    },
    {
      id: 4,
      tabName: 'App Development',
      tabContent: [
        { id: 1, icon: <SiFlutter />, nameOfTooltip: 'FLutter' },
        { id: 2, icon: <TbBrandReactNative />, nameOfTooltip: 'React Native' },
      ],
    },
    {
      id: 5,
      tabName: 'Artificial Intelligence',
      tabContent: [
        { id: 1, icon: <SiNumpy />, nameOfTooltip: 'Numpy' },
        { id: 2, icon: <SiPandas />, nameOfTooltip: 'Pandas' },
        { id: 3, icon: <GoGraph />, nameOfTooltip: 'Matplotlib and Seaborn' },
        { id: 4, icon: <SiScikitlearn />, nameOfTooltip: 'Scikit learn' },
        { id: 5, icon: <SiTensorflow />, nameOfTooltip: 'TensorFlow' },
      ],
    },
    {
      id: 6,
      tabName: 'DevOps',
      tabContent: [
        { id: 1, icon: <FaDocker />, nameOfTooltip: 'Docker' }
      ],
    },
  ];

  const [selectedTab, setSelectedTab] = useState(tabListName[0].name);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-16 lg:gap-48 items-center font-poppins">


      <div className="mt-14 w-3/6 lg:w-1/6">
        <PageHeading heading='My Skills' />
      </div>


      <Tabs defaultValue={selectedTab} className="w-5/6 lg:w-3/6 flex flex-col lg:flex-row gap-48 lg:gap-5">

        <TabsList className="w-full bg-transparent ">

          <div className='w-full h-16 lg:h-80 flex flex-row lg:flex-col gap-6 overflow-x-auto lg:overflow-y-auto pr-0 lg:pr-6'>
            {tabListName.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.name}
                className={`w-full border-2 border-green-500 rounded-lg p-4 ${
                  selectedTab === tab.name
                    ? '!bg-slate-800 !text-white'
                    : '!bg-transparent'
                }`}
                onClick={() => setSelectedTab(tab.name)}
              >
                <span className="font-poppins text-white tracking-wide">
                  {tab.name}
                </span>
              </TabsTrigger>
            ))}
          </div>

        </TabsList>


        <TabsList className="bg-transparent w-full">
          {tabContents.map((tabcontent) => (
            <TabsContent
              key={tabcontent.id}
              value={tabcontent.tabName}
              className="text-white w-full"
            >
              <div className="overflow-y-auto h-80">
                <div className="flex lg:items-center lg:justify-center">
                  <div className="flex lg:items-center lg:justify-center gap-5 overflow-x-auto lg:grid lg:grid-cols-2 lg:gap-x-4 lg:gap-y-4">
                    {tabcontent.tabContent.map((icon) => (
                      <div key={icon.id} className="p-10 rounded-lg bg-slate-800">
                        <div className="text-6xl">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger>
                                <div className="text-6xl hover:text-green-300 transition-all duration-200">{icon.icon}</div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{icon.nameOfTooltip}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </TabsList>


      </Tabs>
    </div>
  );
};

export default Page;