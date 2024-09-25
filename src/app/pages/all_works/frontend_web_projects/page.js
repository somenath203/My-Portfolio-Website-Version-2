'use client';

import PageHeading from '@/app/components/PageHeading';
import WorkCard from '@/app/components/WorkCard';

import OmnifoodPic from './../../../assets/frontend_development_pics/omnifoodpic.png';
import KolkataDinesPic from './../../../assets/frontend_development_pics/kolkatadinespic.png';
import YourSecretMessagePic from './../../../assets/frontend_development_pics/yoursecretmessage.png';
import CharacterCounterPic from './../../../assets/frontend_development_pics/charactercounter.png';
import BookmarkAppPic from './../../../assets/frontend_development_pics/bookmarkapp.jpg';
import JSONFormatterPic from './../../../assets/frontend_development_pics/jsonformatter.png';
import LoremIpsumGeneratorPic from './../../../assets/frontend_development_pics/loremipsumgeneratorpic.png';
import ColorsGeneratorPic from './../../../assets/frontend_development_pics/colorsgenerator.png';
import GroceryPic from './../../../assets/frontend_development_pics/grocerybud.png';
import MiniDictionaryPic from './../../../assets/frontend_development_pics/minidictionaryimage.png';
import CurrencyConverterPic from './../../../assets/frontend_development_pics/currencyconverterimg.png';
import QrCodeProjPic from './../../../assets/frontend_development_pics/playwithqrcode.png';
import MarkdownPreviewerPic from './../../../assets/frontend_development_pics/markdownpreviewerprojimg.png';
import PortfolioPic from './../../../assets/frontend_development_pics/portfolioimage.png';
import DeleteBgImgPic from './../../../assets/frontend_development_pics/delebgprojimgpic.png';

const Page = () => {
  const frontendProjects = [
    {
      id: 1,
      nameOfTheProject: 'Omnifood',
      descOfTheProject:
        'This is a fictional online food ordering website created with the help of Html and CSS.',
      techStackUsedInTheProject: 'Html, CSS',
      picOfTheProj: OmnifoodPic,
      livePreviewOfTheProject: 'https://omnifood-somenath.netlify.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Omnifood',
    },
    {
      id: 2,
      nameOfTheProject: 'Kolkata Dines',
      descOfTheProject:
        'This is website of a fictional hotel by the name Kolkata Dines created with the help of Html and CSS.',
      techStackUsedInTheProject: 'Html, CSS',
      picOfTheProj: KolkataDinesPic,
      livePreviewOfTheProject: 'https://lovely-rabanadas-dc5fc8.netlify.app/',
      githubLinkOfTheProject:
        'https://github.com/somenath203/css-hotel-website',
    },
    {
      id: 3,
      nameOfTheProject: 'Your Secret Message',
      descOfTheProject:
        "This is a project which the user can use to send a secret message to anyone. Atfirst, user needs to types the message and create on 'Create Share Link' button. After user clicks on the button, a link is generated which user can send to any person and when the person opens the link, then the message is displayed.",
      techStackUsedInTheProject: 'Html, CSS, Javacript',
      picOfTheProj: YourSecretMessagePic,
      livePreviewOfTheProject: 'https://secretmessage-pied.vercel.app/',
      githubLinkOfTheProject:
        'https://github.com/somenath203/Your-Secret-Message',
    },
    {
      id: 4,
      nameOfTheProject: 'Character Counter',
      descOfTheProject:
        'This is a simple character counter created using html, css and javascript. Here, the user can see how many characters he/she has written and also the user can copy the written text. This website also contains Dark Mode feature as well.',
      techStackUsedInTheProject: 'Html, CSS, Javascript',
      picOfTheProj: CharacterCounterPic,
      livePreviewOfTheProject: 'https://merry-sprite-9115d1.netlify.app/',
      githubLinkOfTheProject:
        'https://github.com/somenath203/javascript-Character-Counter',
    },
    {
      id: 5,
      nameOfTheProject: 'Bookmark App',
      descOfTheProject:
        'With the help of this website, the user can add bookmarks to all the important websites that the user wants to access in no time. This website all has the feature of Localstorage means if the user refresh the page or close the page and then reopen it again, then, all the bookmarks that was previosuly added by the user will stay as it is.',
      techStackUsedInTheProject: 'Html, CSS, Javascript',
      picOfTheProj: BookmarkAppPic,
      livePreviewOfTheProject: 'https://javascript-bookmark-app.vercel.app/',
      githubLinkOfTheProject:
        'https://github.com/somenath203/Javascript-Bookmark-App',
    },
    {
      id: 6,
      nameOfTheProject: 'JSON Formatter',
      descOfTheProject:
        'This is a project where the user would be able to format his/her JSON data as well as get a minified version of the JSON data as well.',
      techStackUsedInTheProject: 'Html, CSS, Javascript',
      picOfTheProj: JSONFormatterPic,
      livePreviewOfTheProject: 'https://json-formatter-som.netlify.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/JSON-Formatter',
    },
    {
      id: 7,
      nameOfTheProject: 'Lorem Ipsum Generator',
      descOfTheProject:
        'This is a project created with the help of ReactJS and TailwindCSS where a user can generate lorem ipsum text.',
      techStackUsedInTheProject: 'React, TailwindCSS',
      picOfTheProj: LoremIpsumGeneratorPic,
      livePreviewOfTheProject: 'https://generate-lorem-ipsum-11.netlify.app/',
      githubLinkOfTheProject:
        'https://github.com/somenath203/React-Lorem-Ipsum-Generator',
    },
    {
      id: 8,
      nameOfTheProject: 'Color Generator',
      descOfTheProject:
        'This is a project where the user will be able to generate various tints and shades of a particular color by writing the hex code of that color in the input box.',
      techStackUsedInTheProject: 'React',
      picOfTheProj: ColorsGeneratorPic,
      livePreviewOfTheProject:
        'https://62b72a3ff57baf0f4ffb805a--mycolors-generator.netlify.app/',
      githubLinkOfTheProject:
        'https://github.com/somenath203/React-Colors-Generator',
    },
    {
      id: 9,
      nameOfTheProject: 'Grocery Bud',
      descOfTheProject:
        'This is a simple react CRUD application where the user will be able to add, update and delete groceries.',
      techStackUsedInTheProject: 'React',
      picOfTheProj: GroceryPic,
      livePreviewOfTheProject: 'https://grocery-bud-lemon.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Grocery-Bud',
    },
    {
      id: 10,
      nameOfTheProject: 'Mini Dictionary',
      descOfTheProject:
        'This is an application created with the help of FreeDictionaryAPI where the user can get the meaning of any word by just entering that particular word in the input field and pressing the submit button.',
      techStackUsedInTheProject:
        'React, Material UI, TailwindCSS, FreeDictionaryAPI',
      picOfTheProj: MiniDictionaryPic,
      livePreviewOfTheProject: 'https://mini-dictionary.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Mini-Dictionary',
    },
    {
      id: 11,
      nameOfTheProject: 'Currency Converter',
      descOfTheProject:
        'This is an application which is designed to provide a fast and reliable way to convert currencies using real-time exchange rates.',
      techStackUsedInTheProject: 'Vite, TailwindCSS, Frankfurter API',
      picOfTheProj: CurrencyConverterPic,
      livePreviewOfTheProject: 'https://mini-dictionary.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Mini-Dictionary',
    },
    {
      id: 12,
      nameOfTheProject: 'Play With QRCode',
      descOfTheProject:
        'This is a website developed with the help of NextJS, tailwindCSS and ShadcnUI that lets user generate and scan QRCodes.',
      techStackUsedInTheProject: 'NextJS, TailwindCSS, ShadcnUI',
      picOfTheProj: QrCodeProjPic,
      livePreviewOfTheProject: 'https://play-with-qr-code.vercel.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Play-With-QRCode',
    },
    {
      id: 13,
      nameOfTheProject: 'Markdown Previewer',
      descOfTheProject:
        'Markdown Previewer is an application created with the help of NextJS, tailwincCSS and daisyUI that allows you to instantly preview your markdown syntax as rendered HTML.',
      techStackUsedInTheProject: 'NextJS, TailwindCSS, daisyUI, react-markdown',
      picOfTheProj: MarkdownPreviewerPic,
      livePreviewOfTheProject:
        'https://markdown-previewer-psi-liard.vercel.app/',
      githubLinkOfTheProject:
        'https://github.com/somenath203/Markdown-Previewer',
    },
    {
      id: 14,
      nameOfTheProject: 'My Porfolio Website Version 1',
      descOfTheProject: 'This is my portfolio website version 1',
      techStackUsedInTheProject: 'React, TailwindCSS',
      picOfTheProj: PortfolioPic,
      livePreviewOfTheProject: 'https://somenath-portfolio-website.vercel.app/',
      githubLinkOfTheProject:
        'https://github.com/somenath203/My-Portfolio-Project',
    },
    {
      id: 15,
      nameOfTheProject: 'Delete BG',
      descOfTheProject: 'Delete BG is a website designed to make removing image backgrounds quick and easy. With just a few clicks, you can upload an image, remove its background, and download the result—all within a fully mobile-responsive interface',
      techStackUsedInTheProject: 'NextJS, TailwindCSS, ShadcnUI, Aceternity UI, Remove-BG API',
      picOfTheProj: DeleteBgImgPic,
      livePreviewOfTheProject: 'https://delete-bg-som.vercel.app/',
      githubLinkOfTheProject:
        'https://github.com/somenath203/Delete-BG',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center">
      <div className="mt-14 w-5/6 lg:w-1/4">
        <PageHeading heading="Frontend WebApp Projects" />
      </div>

      <WorkCard workArray={frontendProjects} />
    </div>
  );
};

export default Page;
