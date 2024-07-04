'use client';

import PageHeading from '@/app/components/PageHeading';
import WorkCard from '@/app/components/WorkCard';

import TextSearchImg from './../../../assets/chrome_extension_projects/TextSearchProjImgPic.png';


const Page = () => {

  const chromeExtensionProjects = [
    {
      id: 1,
      nameOfTheProject: 'TextSearch',
      descOfTheProject: 'TextSearch improves your browsing experience by allowing you to search any selected text with a simple right-click. You can choose from multiple search engines, including Google, Bing, DuckDuckGo, and Yahoo. Customize your preferred search engine in the extension options and enjoy seamless, efficient web searches without the hassle of copying and pasting.',
      techStackUsedInTheProject: 'Html, CSS, Javascript',
      picOfTheProj: TextSearchImg,
      livePreviewOfTheProject: 'https://chromewebstore.google.com/detail/lblfeoenhlakknjhjlcbjohgfkbbikbd',
      githubLinkOfTheProject: 'https://github.com/somenath203/TextSearch-Chrome-Extension',
    }
  ];



  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center">

      <div className="mt-14 w-4/5 lg:w-1/4">
        <PageHeading heading="Chrome Extension Projects" />
      </div>

      <WorkCard workArray={chromeExtensionProjects} />

    </div>
  );
};

export default Page;