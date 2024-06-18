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
    },
    {
      id: 4,
      nameOfTheProject: 'Character Counter',
      descOfTheProject: 'This is a simple character counter created using html, css and javascript. Here, the user can see how many characters he/she has written and also the user can copy the written text. This website also contains Dark Mode feature as well.',
      techStackUsedInTheProject: 'Html, CSS, Javascript',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://merry-sprite-9115d1.netlify.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/javascript-Character-Counter',
    },
    {
      id: 5,
      nameOfTheProject: 'Bookmark App',
      descOfTheProject: 'With the help of this website, the user can add bookmarks to all the important websites that the user wants to access in no time. This website all has the feature of Localstorage means if the user refresh the page or close the page and then reopen it again, then, all the bookmarks that was previosuly added by the user will stay as it is.',
      techStackUsedInTheProject: 'Html, CSS, Javascript',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://javascript-bookmark-app.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Javascript-Bookmark-App',
    },
    {
      id: 6,
      nameOfTheProject: 'JSON Formatter',
      descOfTheProject: 'This is a project where the user would be able to format his/her JSON data as well as get a minified version of the JSON data as well.',
      techStackUsedInTheProject: 'Html, CSS, Javascript',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://json-formatter-som.netlify.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/JSON-Formatter',
    },
    {
      id: 7,
      nameOfTheProject: 'Lorem Ipsum Generator',
      descOfTheProject: 'This is a project created with the help of ReactJS and TailwindCSS where a user can generate lorem ipsum text.',
      techStackUsedInTheProject: 'React, TailwindCSS',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://generate-lorem-ipsum-11.netlify.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/React-Lorem-Ipsum-Generator',
    },
    {
      id: 8,
      nameOfTheProject: 'Color Generator',
      descOfTheProject: 'This is a project where the user will be able to generate various tints and shades of a particular color by writing the hex code of that color in the input box.',
      techStackUsedInTheProject: 'React',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://62b72a3ff57baf0f4ffb805a--mycolors-generator.netlify.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/React-Colors-Generator',
    },
    {
      id: 9,
      nameOfTheProject: 'Grocery Bud',
      descOfTheProject: 'This is a simple react CRUD application where the user will be able to add, update and delete groceries.',
      techStackUsedInTheProject: 'React',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://grocery-bud-lemon.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Grocery-Bud',
    },
    {
      id: 10,
      nameOfTheProject: 'Mini Dictionary',
      descOfTheProject: 'This is an application created with the help of FreeDictionaryAPI where the user can get the meaning of any word by just entering that particular word in the input field and pressing the submit button.',
      techStackUsedInTheProject: 'React, Material UI, TailwindCSS, FreeDictionaryAPI',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://mini-dictionary.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Mini-Dictionary',
    },
    {
      id: 11,
      nameOfTheProject: 'Currency Converter',
      descOfTheProject: 'This is an application which is designed to provide a fast and reliable way to convert currencies using real-time exchange rates.',
      techStackUsedInTheProject: 'Vite, TailwindCSS, Frankfurter API',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://mini-dictionary.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Mini-Dictionary',
    },
    {
      id: 12,
      nameOfTheProject: 'Play With QRCode',
      descOfTheProject: 'This is a website developed with the help of NextJS, tailwindCSS and ShadcnUI that lets user generate and scan QRCodes.',
      techStackUsedInTheProject: 'NextJS, TailwindCSS, ShadcnUI',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://play-with-qr-code.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Play-With-QRCode',
    },
    {
      id: 13,
      nameOfTheProject: 'Markdown Previewer',
      descOfTheProject: 'Markdown Previewer is an application created with the help of NextJS, tailwincCSS and daisyUI that allows you to instantly preview your markdown syntax as rendered HTML.',
      techStackUsedInTheProject: 'NextJS, TailwindCSS, daisyUI, react-markdown',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://markdown-previewer-psi-liard.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Markdown-Previewer',
    },
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
