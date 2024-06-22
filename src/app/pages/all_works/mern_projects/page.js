'use client';

import PageHeading from '@/app/components/PageHeading';
import WorkCard from '@/app/components/WorkCard';

import ImageGalleryPic from './../../../assets/mern_development_pics/imagegallery.png';
import MyExpenseManagerPic from './../../../assets/mern_development_pics/myexpensemanager.png';
import ShortMyURLPic from './../../../assets/mern_development_pics/shortmyurlpic.png';
import MernAuthWithEmailVerifyPic from './../../../assets/mern_development_pics/authwithemailverification.png';
import ShareYourFilePic from './../../../assets/mern_development_pics/sharefileprojpic.png';
import WeatherAppPic from './../../../assets/mern_development_pics/weatherappimage.png';

const Page = () => {

  const mernProjects = [
    {
      id: 1,
      nameOfTheProject: 'Image Gallery',
      descOfTheProject: 'This is a project with the help of which a user would be able to store his/her best memories in his/her life.',
      techStackUsedInTheProject: 'React, TailwindCSS, ExpressJS, MongoDB, Cloudinary',
      picOfTheProj: ImageGalleryPic,
      livePreviewOfTheProject: 'https://mern-stack-image-gallery-frontend-fh09y4t7a-somenath203.vercel.app/login',
      githubLinkOfTheProject: 'https://github.com/somenath203/Mern-Stack-Image-Gallery-Frontend',
    },
    {
      id: 2,
      nameOfTheProject: 'My Finance Manager',
      descOfTheProject: 'This is a project where a user would be able to add his/her savings, expenditures, and investments and on the basis of that, the user will get to know how he/she should use his/her money.',
      techStackUsedInTheProject: 'React, TailwindCSS, antd, ExpressJS, MongoDB',
      picOfTheProj: MyExpenseManagerPic,
      livePreviewOfTheProject: 'https://my-finance-manager-frontend.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/My-Finance-Manager-Frontend',
    },
    {
      id: 3,
      nameOfTheProject: 'ShortMyURL',
      descOfTheProject: 'This is website where a user would be able to reduce the size of url of any length.',
      techStackUsedInTheProject: 'React, TailwindCSS, ExpressJS, MongoDB',
      picOfTheProj: ShortMyURLPic,
      livePreviewOfTheProject: 'https://mern-stack-url-shortener-frontend.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Mern-Stack-URL-Shortener-Frontend',
    },
    {
      id: 4,
      nameOfTheProject: 'Advanced Mern Authenitcation',
      descOfTheProject: 'This is a project where the account of the user is activated when the user clicks on the activation link sent to him/her in there respective email address when the user registers for a new account.',
      techStackUsedInTheProject: 'React, Bootstrap, ExpressJS, MongoDB, Nodemailer',
      picOfTheProj: MernAuthWithEmailVerifyPic,
      livePreviewOfTheProject: 'https://mern-authentication-with-email-activation-frontend.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Mern-Authentication-with-Email-Activation-Frontend',
    },
    {
      id: 5,
      nameOfTheProject: 'Share Your File',
      descOfTheProject: 'This is a web tool that let users share files easily. Just upload your files, and it will give you a link to share them.',
      techStackUsedInTheProject: 'React, antd, ExpressJS, MongoDB',
      picOfTheProj: ShareYourFilePic,
      livePreviewOfTheProject: 'https://shareyourfile.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Share-Your-File',
    },
    {
      id: 6,
      nameOfTheProject: 'Weather App',
      descOfTheProject: 'This is a project created with the help of React, TailwindCSS, ExpressJS and OpenWeatherAPI where a user can get the temperature and humidity of any city in the world.',
      techStackUsedInTheProject: 'React, TailwindCSS, ExpressJS, OpenWeatherAPI',
      picOfTheProj: WeatherAppPic,
      livePreviewOfTheProject: 'https://weather-app-frontend-nine.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Weather-App-Frontend',
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center">

      <div className="mt-14 w-4/6 lg:w-1/4">

        <PageHeading heading='MERN Projects' />

      </div>

      <WorkCard workArray={mernProjects} />

    </div>
  );
};

export default Page;