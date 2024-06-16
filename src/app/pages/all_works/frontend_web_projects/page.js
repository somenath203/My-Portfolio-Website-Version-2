'use client';

import PageHeading from '@/app/components/PageHeading';
import WorkCard from '@/app/components/WorkCard';


const Page = () => {

  const frontendProjects = [
    {
      id: 1,
      nameOfTheProject: 'Omnifood',
      descOfTheProject: 'This is a fictional online food ordering website created with the help of Html and CSS.',
      techStackUsedInTheProject: 'Html, CSS',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://omnifood-somenath.netlify.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Omnifood',
    },
    {
      id: 2,
      nameOfTheProject: 'Kolkata Dines',
      descOfTheProject: 'This is website of a fictional hotel by the name Kolkata Dines created with the help of Html and CSS.',
      techStackUsedInTheProject: 'Html, CSS',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://lovely-rabanadas-dc5fc8.netlify.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/css-hotel-website',
    },
    {
      id: 3,
      nameOfTheProject: 'Your Secret Message',
      descOfTheProject: 'This is a project which the user can use to send a secret message to anyone. Atfirst, user needs to types the message and create on \'Create Share Link\' button. After user clicks on the button, a link is generated which user can send to any person and when the person opens the link, then the message is displayed.',
      techStackUsedInTheProject: 'Html, CSS, Javacript',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://secretmessage-pied.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Your-Secret-Message',
    }
  ];



  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center">

      <div className="mt-14 w-1/4">
        <PageHeading heading="Frontend WebApp Projects" />
      </div>

      <WorkCard workArray={frontendProjects} />

    </div>
  );
};

export default Page;
