'use client';

import PageHeading from '@/app/components/PageHeading';
import WorkCard from '@/app/components/WorkCard';
import FlutterFireabseTodoProjImg from './../../../assets/app_development_pics/flutterfirebasetodoappprojimg.png';
import AoraProjImg from './../../../assets/app_development_pics/aoraprojectpic.png';
import RydeProjImg from './../../../assets/app_development_pics/rydeprojimg.jpg';


const Page = () => {

  const appProjects = [
    {
      id: 1,
      nameOfTheProject: 'Flutter Firebase Todo App',
      descOfTheProject: 'This is a mobile application developed with the help of Flutter and Firebase where the user, after authenticating himself/herself successfully will be able to add todo which will be stored in his/her respective account. The user also has the option to delete the todo by swapping the todo left or right and along with that, the user can update a particular todo as well by just tapping on it.',
      techStackUsedInTheProject: 'Flutter, Firebase',
      picOfTheProj: FlutterFireabseTodoProjImg,
      livePreviewOfTheProject: 'https://github.com/somenath203/flutter-firebase-todo-app?tab=readme-ov-file#demo-video-of-the-application',
      githubLinkOfTheProject: 'https://github.com/somenath203/flutter-firebase-todo-app',
    },
    {
      id: 2,
      nameOfTheProject: 'Aora',
      descOfTheProject: 'Aora is a mobile application that allows users to upload videos along with their titles and thumbnails. Users can also explore a diverse range of videos shared by the entire community. Aora offers a seamless platform for video sharing and discovery, making it easy to connect with content from fellow users.',
      techStackUsedInTheProject: 'React Native, Expo, NativeWind, Appwrite',
      picOfTheProj: AoraProjImg,
      livePreviewOfTheProject: 'https://www.youtube.com/watch?v=IyuRW4DlVfM',
      githubLinkOfTheProject: 'https://github.com/somenath203/Aora',
    },
    {
      id: 3,
      nameOfTheProject: 'Ryde',
      descOfTheProject: 'Ryde is a user-friendly online car booking mobile application built using React Native. The app provides an easy and efficient way to book rides. It allows users to authenticate, view their current location, search for destinations, choose a driver, and make secure payments for their rides. The app is designed to deliver a seamless and reliable ride-booking experience.',
      techStackUsedInTheProject: 'React Native, Expo, NativeWind, Zustand, Clerk, Google Places API, Google Directions API, Stripe, GEOAPIFY_API, Neon PostgreSQL Database',
      picOfTheProj: RydeProjImg,
      livePreviewOfTheProject: 'https://www.youtube.com/watch?v=lbGS07Fiw2c',
      githubLinkOfTheProject: 'https://github.com/somenath203/Ryde',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center">

      <div className="mt-14 w-5/6 lg:w-1/4">

        <PageHeading heading='App Development Projects' />

      </div>

      <WorkCard workArray={appProjects} />

    </div>
  );
};

export default Page;
