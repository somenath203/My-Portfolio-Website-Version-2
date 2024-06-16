'use client';

import PageHeading from '@/app/components/PageHeading';
import WorkCard from '@/app/components/WorkCard';


const Page = () => {

  const backendProjects = [
    {
      id: 1,
      nameOfTheProject: 'Blog API',
      descOfTheProject: 'This is an API where user can perform all blog related activities like creating, readin, updating and deleting blogs, viewing other user\'s blogs, following and unfollowing user, liking a blog, commenting on a blog and many more.',
      techStackUsedInTheProject: 'ExpressJS, MongoDB, Cloudinary',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://blog-api-links.netlify.app/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Blog-Backend-API',
    },
    {
      id: 2,
      nameOfTheProject: 'Jobs API',
      descOfTheProject: 'This is a API which recruiters can use to hire potential candidates for there respective companies/organizations.',
      techStackUsedInTheProject: 'ExpressJS, MongoDB, Cloudinary, Sendgrid',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://jobs-api-backend.onrender.com/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Jobs-API',
    },
    {
      id: 3,
      nameOfTheProject: 'Amazon Web Scrapper API',
      descOfTheProject: 'This is a web scrapping API which a user can use to get different types of details about a particular product in Amazon.',
      techStackUsedInTheProject: 'ExpressJS, ScraperAPI',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://amazon-web-scrapping-api.onrender.com/',
      githubLinkOfTheProject: 'https://github.com/somenath203/Amazon-Web-Scraper-API',
    },
    {
      id: 4,
      nameOfTheProject: 'Food Delivery API',
      descOfTheProject: 'This is an API which users can use to order his/her favourite dish from his/her favourite restuarant.',
      techStackUsedInTheProject: 'ExpressJS, MongoDB',
      picOfTheProj: '',
      livePreviewOfTheProject: 'https://documenter.getpostman.com/view/14623339/2s93zFXKXo',
      githubLinkOfTheProject: 'https://github.com/somenath203/Food-Delivery-API-NodeJS',
    }
  ];



  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center">

      <div className="mt-14 w-1/5">
        <PageHeading heading="Backend Projects" />
      </div>

      <WorkCard workArray={backendProjects} />

    </div>
  );
};

export default Page;