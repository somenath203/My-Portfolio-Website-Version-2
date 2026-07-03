'use client';

import PageHeading from '@/app/components/PageHeading';
import WorkCard from '@/app/components/WorkCard';

import BlogProjImg from './../../../assets/backend_development_pics/blogproj.png';
import JobsAPIProjImg from './../../../assets/backend_development_pics/jobsapi.png';
import AmazonWebScrapperProjImg from './../../../assets/backend_development_pics/amazonwebscrapper.png';
import FoodDeliveryProjImg from './../../../assets/backend_development_pics/fooddeliveryproject.png';


const Page = () => {

  const backendProjects = [
  {
    id: 1,
    nameOfTheProject: 'Blog API',
    descOfTheProject:
      'This is a REST API that allows users to perform various blog-related operations, including creating, reading, updating, and deleting blogs. Users can also view other users’ blogs, follow or unfollow users, like posts, comment on blogs, and much more.',
    techStackUsedInTheProject: 'Express.js, MongoDB, Cloudinary',
    picOfTheProj: BlogProjImg,
    livePreviewOfTheProject: 'https://blog-api-links.netlify.app/',
    githubLinkOfTheProject:
      'https://github.com/somenath203/Blog-Backend-API',
    youtubeVideoLink: 'https://www.youtube.com/',
  },
  {
    id: 2,
    nameOfTheProject: 'Jobs API',
    descOfTheProject:
      'This is a REST API designed to help recruiters manage the hiring process by posting job openings and finding potential candidates for their organizations.',
    techStackUsedInTheProject:
      'Express.js, MongoDB, Cloudinary, SendGrid',
    picOfTheProj: JobsAPIProjImg,
    livePreviewOfTheProject: 'https://jobs-api-backend.onrender.com/',
    githubLinkOfTheProject: 'https://github.com/somenath203/Jobs-API',
    youtubeVideoLink: 'https://www.youtube.com/',
  },
  {
    id: 3,
    nameOfTheProject: 'Amazon Web Scraper API',
    descOfTheProject:
      'This is a web scraping API that allows users to retrieve various details about products listed on Amazon, such as product information, pricing, ratings, and more.',
    techStackUsedInTheProject: 'Express.js, ScraperAPI',
    picOfTheProj: AmazonWebScrapperProjImg,
    livePreviewOfTheProject:
      'https://amazon-web-scrapping-api.onrender.com/',
    githubLinkOfTheProject:
      'https://github.com/somenath203/Amazon-Web-Scraper-API',
    youtubeVideoLink: 'https://www.youtube.com/',
  },
  {
    id: 4,
    nameOfTheProject: 'Food Delivery API',
    descOfTheProject:
      'This is a REST API that enables users to browse restaurants, place food orders, and manage the complete food ordering process.',
    techStackUsedInTheProject: 'Express.js, MongoDB',
    picOfTheProj: FoodDeliveryProjImg,
    livePreviewOfTheProject:
      'https://documenter.getpostman.com/view/14623339/2s93zFXKXo',
    githubLinkOfTheProject:
      'https://github.com/somenath203/Food-Delivery-API-NodeJS',
    youtubeVideoLink: 'https://www.youtube.com/',
  },
];



  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center">

      <div className="mt-14 w-4/6 lg:w-1/5">
        <PageHeading heading="Backend Projects" />
      </div>

      <WorkCard workArray={backendProjects} accentColor="#fb923c" />

    </div>
  );
};

export default Page;