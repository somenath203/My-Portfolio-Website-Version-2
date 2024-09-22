'use client';

import PageHeading from '@/app/components/PageHeading';
import WorkCard from '@/app/components/WorkCard';

import ImageGalleryPic from './../../../assets/full_stack_development_pics/imagegallery.png';
import MyExpenseManagerPic from './../../../assets/full_stack_development_pics/myexpensemanager.png';
import ShortMyURLPic from './../../../assets/full_stack_development_pics/shortmyurlpic.png';
import MernAuthWithEmailVerifyPic from './../../../assets/full_stack_development_pics/authwithemailverification.png';
import ShareYourFilePic from './../../../assets/full_stack_development_pics/sharefileprojpic.png';
import WeatherAppPic from './../../../assets/full_stack_development_pics/weatherappimage.png';
import SimpleTaskManagerAppPic from './../../../assets/full_stack_development_pics/taskmanagerprojimg.png';
import NextJSGeminiChatAppPic from './../../../assets/full_stack_development_pics/nextgeminichatapppic.png';
import NextFinanceTrackerPic from './../../../assets/full_stack_development_pics/nextfinancetrackerpic.png';
import AIFormBuilderPic from './../../../assets/full_stack_development_pics/aiformbuilderprojimg.png';
import ResumeBuilderPic from './../../../assets/full_stack_development_pics/resumebuilderprojpic.png';
import GeminiContentWizardPic from './../../../assets/full_stack_development_pics/geminicontentwizardprojectpic.png';
import SmartWebChatPic from './../../../assets/full_stack_development_pics/smartwebchatpic.png';
import OptiMediaHubPic from './../../../assets/full_stack_development_pics/optimediahubprojectpic.png';
import WriteMyThoughtsPic from './../../../assets/frontend_development_pics/writemythoughts.png';
import CarePulsePic from './../../../assets/full_stack_development_pics/carepulseimage.png';
import TrimrrPic from './../../../assets/full_stack_development_pics/trimrrurlshortenerpic.png';
import TweetsDjangoAppPic from './../../../assets/full_stack_development_pics/tweeetdjangoapp.png';
import HomeAwayProjectPic from './../../../assets/full_stack_development_pics/homeawayprojectimg.png';


const Page = () => {

  const fullStackProjects = [
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
    },
    {
      id: 7,
      nameOfTheProject: 'Simple Task Manager',
      descOfTheProject: 'This is a simple task manager webapp where authenticated user will be able to create a new task with a due date, view all created tasks, view details of a particular task, edit a task and as well as, delete a task.',
      techStackUsedInTheProject: 'NextJS, TailwindCSS, ShadcnUI, ExpressJS, MongoDB',
      picOfTheProj: SimpleTaskManagerAppPic,
      livePreviewOfTheProject: 'https://task-manager-pedalstart.vercel.app/pages/login',
      githubLinkOfTheProject: 'https://github.com/somenath203/PedalStart-Task-Manager-Assignment',
    },
    {
      id: 8,
      nameOfTheProject: 'Next Gemini ChatApp',
      descOfTheProject: 'This project is a full stack chatbot application built using modern web development technologies. It uses Next.js for the frontend and integrates the Gemini API to provide chatbot functionalities. The app is designed to offer a seamless and interactive user experience. Along with chat functionality, users can also view detailed histories of each chat session conducted in the past.',
      techStackUsedInTheProject: 'NextJS, TailwindCSS, antd, MongoDB, Zustand, Clerk, Vercel-AI SDK, Google Gemini API',
      picOfTheProj: NextJSGeminiChatAppPic,
      livePreviewOfTheProject: 'https://next-gemini-chat-app.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Next-Gemini-ChatApp',
    },
    {
      id: 9,
      nameOfTheProject: 'Next Finance Tracker',
      descOfTheProject: 'Next Finance Tracker is a full stack finance management application built with Next.js, designed to help users track and manage their finances in real time.',
      techStackUsedInTheProject: 'NextJS, TailwindCSS, antd, MongoDB, Zustand, Clerk, Recharts',
      picOfTheProj: NextFinanceTrackerPic,
      livePreviewOfTheProject: 'https://next-finance-tracker-fullstack.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/next-finance-tracker',
    },
    {
      id: 10,
      nameOfTheProject: 'Next AI Form Builder',
      descOfTheProject: 'Next AI Form Builder is an AI-powered application that helps users create forms quickly and easily. By providing a prompt, users can generate forms with the help of the Google Gemini API. Users can customize, preview, and share these forms. Additionally, they can manage and export form responses.',
      techStackUsedInTheProject: 'NextJS, TailwindCSS, ShadcnUI, daisyUI, Drizzle ORM, Neon Database, Clerk, Google Gemini API',
      picOfTheProj: AIFormBuilderPic,
      livePreviewOfTheProject: 'https://next-ai-form-builder.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Next-AI-Form-Builder',
    },
    {
      id: 11,
      nameOfTheProject: 'Next Resumeee',
      descOfTheProject: 'Next Resumeee is a comprehensive full stack Resume Builder Application developed using NextJS. It allows users to generate their resumes with ease by selecting from various templates. The application offers both free and premium templates. Users with a premium subscription can download any resume template they prefer. Additionally, the application features robust admin functionalities for managing templates and viewing user information in a structured format.',
      techStackUsedInTheProject: 'NextJS, TailwindCSS, Antd Design, MongoDB, Firebase, Zustand, Stripe',
      picOfTheProj: ResumeBuilderPic,
      livePreviewOfTheProject: 'https://next-resumeee.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Next-Resumeee',
    },
    {
      id: 12,
      nameOfTheProject: 'Gemini Content Wizard',
      descOfTheProject: "Gemini Content Wizard is an AI-powered content generation application designed to simplify your content creation process. Whether you're a blogger, YouTuber, social media manager, or developer, Gemini Content Wizard offers a variety of tools to help you generate high-quality content with ease. Simply input your desired parameters, and let the power of AI craft the perfect output for you.",
      techStackUsedInTheProject: 'NextJS, TailwindCSS, ShadcnUI, Drizzle ORM, Neon Database, Clerk, Google Gemini API',
      picOfTheProj: GeminiContentWizardPic,
      livePreviewOfTheProject: 'https://gemini-content-wizard.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Gemini-Content-Wizard',
    },
    {
      id: 13,
      nameOfTheProject: 'Smart Web Chat',
      descOfTheProject: "Smart Web Chat is a platform designed to facilitate interactive conversations with websites. Powered by the Meta-Llama-3-8B-Instruct Large Language Model, it delivers a smooth and engaging experience for users. Whether you're seeking information or looking for specific answers, Smart Web Chat enhances your interaction with web content through advanced AI capabilities.",
      techStackUsedInTheProject: 'NextJS, TailwindCSS, NextUI, Upstash Redis Database, Upstash RAG Model, Meta-Llama-3-8B-Instruct',
      picOfTheProj: SmartWebChatPic,
      livePreviewOfTheProject: 'https://smart-web-chat.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Smart-Web-Chat',
    },
    {
      id: 14,
      nameOfTheProject: 'OptiMedia Hub',
      descOfTheProject: "OptiMedia Hub is an easy-to-use tool that helps you prepare images and videos for social media. It lets content creators quickly format their media for platforms like Instagram, Twitter, and Facebook. The app uses Cloudinary for processing media, Clerk for user authentication, and Neon PostgreSQL for managing data, all within a simple and friendly interface built with Next.js",
      techStackUsedInTheProject: 'NextJS, Clerk, TailwindCSS, DaisyUI, Cloudinary, Next-Cloudinary, Prisma ORM, Neon Database',
      picOfTheProj: OptiMediaHubPic,
      livePreviewOfTheProject: 'https://optimedia-hub.onrender.com/',
      githubLinkOfTheProject: 'https://github.com/somenath203/OptiMedia-Hub',
    },
    {
      id: 15,
      nameOfTheProject: 'Write Your Thoughts',
      descOfTheProject: 'This is a web app where a user can express his/her thoughts in front of the whole world.',
      techStackUsedInTheProject: 'React, Firebase',
      picOfTheProj: WriteMyThoughtsPic,
      livePreviewOfTheProject: 'https://write-your-thoughts.netlify.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/WriteYourThoughts',
    },
    {
      id: 16,
      nameOfTheProject: 'CarePulse',
      descOfTheProject: "CarePulse is a comprehensive healthcare management application designed to streamline patient and admin interactions. The application is divided into two main parts: user and admin functionalities. Users can register, submit their medical information, and book appointments, while admins can manage appointments and handle user requests.",
      techStackUsedInTheProject: 'NextJS, TailwindCSS, ShadcnUI, Appwrite, Nodemailer, Gmail SMTP, Sentry.IO, Zod',
      picOfTheProj: CarePulsePic,
      livePreviewOfTheProject: 'https://care-pulse-som.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/CarePulse',
    },
    {
      id: 17,
      nameOfTheProject: 'Trimrr',
      descOfTheProject: "Trimrr is a URL shortening web application that allows users to easily create and manage short URLs. After signing up, users can generate short URLs from long ones, track from where their links are being accessed, and view detailed statistics about the devices and cities from which their links are visited. With Trimrr, user can also generate QR codes for your short links, making it easy to share them.",
      techStackUsedInTheProject: 'React (via Vite), TailwindCSS, ShadcnUI, Supabase, Yup, Recharts, IPAPI, UA-Parser-JS',
      picOfTheProj: TrimrrPic,
      livePreviewOfTheProject: 'https://trimrr-som.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Trimrr',
    },
    {
      id: 18,
      nameOfTheProject: 'Tweeets',
      descOfTheProject: "Tweeets is a simple web application that allows users to create, edit, and delete tweets. Each tweet consists of a description, and optionally, an image. Users can also view tweets created by other users. To interact with the application (create, edit, or delete tweets), users must first authenticate themselves first.",
      techStackUsedInTheProject: 'Django, Django Templating Engine, SQLite3 (db.sqlite3), Django Tailwind',
      picOfTheProj: TweetsDjangoAppPic,
      livePreviewOfTheProject: 'https://www.youtube.com/watch?v=9J0202Y7sLk',
      githubLinkOfTheProject: 'https://github.com/somenath203/Tweeets',
    },
    {
      id: 19,
      nameOfTheProject: 'HomeAway',
      descOfTheProject: "HomeAway is a full-stack rental booking application that allows users to browse, create, and book rentals across various categories. Users can filter and search for rentals, like and share them via email or social media, as well as leave ratings and comments. The application also provides functionalities to manage user profiles, handle bookings, and view reviews. Admin users can track important statistics such as total users, properties, and bookings. The app features both dark and light modes and is fully responsive.",
      techStackUsedInTheProject: 'NextJS, TailwindCSS, ShadcnUI, Neon Database, Supabase, LeafletJS',
      picOfTheProj: HomeAwayProjectPic,
      livePreviewOfTheProject: 'https://home-away-somm.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/HomeAway',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center">

      <div className="mt-14 w-4/6 lg:w-1/4">

        <PageHeading heading='Full Stack Projects' />

      </div>

      <WorkCard workArray={fullStackProjects} />

    </div>
  );
};

export default Page;