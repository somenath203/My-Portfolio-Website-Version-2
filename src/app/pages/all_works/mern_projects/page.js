'use client';

import PageHeading from '@/app/components/PageHeading';
import WorkCard from '@/app/components/WorkCard';

const Page = () => {

  const mernProjects = [
    {
      id: 1,
      nameOfTheProject: 'Image Gallery',
      descOfTheProject: 'This is a project with the help of which a user would be able to store his/her best memories in his/her life.',
      techStackUsedInTheProject: 'React, TailwindCSS, ExpressJS, MongoDB, Cloudinary',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://mern-stack-image-gallery-frontend-fh09y4t7a-somenath203.vercel.app/login',
      githubLinkOfTheProject: 'https://github.com/somenath203/Mern-Stack-Image-Gallery-Frontend',
    },
    {
      id: 2,
      nameOfTheProject: 'My Finance Manager',
      descOfTheProject: 'This is a project where a user would be able to add his/her savings, expenditures, and investments and on the basis of that, the user will get to know how he/she should use his/her money.',
      techStackUsedInTheProject: 'React, TailwindCSS, antd, ExpressJS, MongoDB',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://my-finance-manager-frontend.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/My-Finance-Manager-Frontend',
    },
    {
      id: 3,
      nameOfTheProject: 'ShortMyURL',
      descOfTheProject: 'This is website where a user would be able to reduce the size of url of any length.',
      techStackUsedInTheProject: 'React, TailwindCSS, ExpressJS, MongoDB',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://mern-stack-url-shortener-frontend.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Mern-Stack-URL-Shortener-Frontend',
    },
    {
      id: 4,
      nameOfTheProject: 'Advanced Mern Authenitcation',
      descOfTheProject: 'This is a project where the account of the user is activated when the user clicks on the activation link sent to him/her in there respective email address when the user registers for a new account.',
      techStackUsedInTheProject: 'React, Bootstrap, ExpressJS, MongoDB, Nodemailer',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://mern-authentication-with-email-activation-frontend.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Mern-Authentication-with-Email-Activation-Frontend',
    },
    {
      id: 5,
      nameOfTheProject: 'Share Your File',
      descOfTheProject: 'This is a web tool that let users share files easily. Just upload your files, and it will give you a link to share them.',
      techStackUsedInTheProject: 'React, antd, ExpressJS, MongoDB',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://shareyourfile.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Share-Your-File',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center">

      <div className="mt-14 w-1/6">

        <PageHeading heading='MERN Projects' />

      </div>

      <WorkCard workArray={mernProjects} />

    </div>
  );
};

export default Page;