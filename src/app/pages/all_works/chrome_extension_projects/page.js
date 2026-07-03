"use client";

import PageHeading from "@/app/components/PageHeading";
import WorkCard from "@/app/components/WorkCard";

import TextSearchImg from "./../../../assets/chrome_extension_projects/TextSearchProjImgPic.png";
import EmailScrappingImg from "./../../../assets/chrome_extension_projects/EmailScrappingProjImg.png";

const Page = () => {
  const chromeExtensionProjects = [
    {
      id: 1,
      nameOfTheProject: "TextSearch",
      descOfTheProject:
        "TextSearch is a Chrome extension that enhances your browsing experience by allowing you to search any selected text with a simple right-click.",
      techStackUsedInTheProject: "JavaScript",
      picOfTheProj: TextSearchImg,
      livePreviewOfTheProject:
        "https://chromewebstore.google.com/detail/lblfeoenhlakknjhjlcbjohgfkbbikbd",
      githubLinkOfTheProject:
        "https://github.com/somenath203/TextSearch-Chrome-Extension",
      youtubeVideoLink: "https://www.youtube.com/",
    },
    {
      id: 2,
      nameOfTheProject: "Easy Email Scrapper",
      descOfTheProject:
        "Easy Email Scrapper is a Chrome extension that helps users collect email addresses from any website. With a single click, it extracts all email addresses from the current webpage and displays them in a clean and organized table.",
      techStackUsedInTheProject: "React, Tailwind CSS, Chakra UI",
      picOfTheProj: EmailScrappingImg,
      livePreviewOfTheProject:
        "https://chromewebstore.google.com/detail/easy-email-scrapper/phjgbhdkjbnhnaddndackijhjijjnaca?authuser=5&hl=en-GB",
      githubLinkOfTheProject:
        "https://github.com/somenath203/Easy-Email-Scrapper-Chrome-Extension",
      youtubeVideoLink: "https://www.youtube.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center">
      <div className="mt-14 w-4/5 lg:w-1/4">
        <PageHeading heading="Chrome Extension Projects" />
      </div>

      <WorkCard workArray={chromeExtensionProjects} accentColor="#fbbf24" />
    </div>
  );
};

export default Page;
