'use client';

import PageHeading from '@/app/components/PageHeading';
import WorkCard from '@/app/components/WorkCard';

import ToxicCommentClassificationProjImg from './../../../assets/app_development_pics/toxiccommentclassificationproj.png';
import FlutterFireabseTodoProjImg from './../../../assets/app_development_pics/flutterfirebasetodoappprojimg.png';
import AoraProjImg from './../../../assets/app_development_pics/aoraprojectpic.png';


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
      nameOfTheProject: 'Toxic Comment Classifier',
      descOfTheProject: 'This is a project which categorizes a particular toxic comment entered by the user into mainly 6 categories and those are: toxic, severe_toxic, obscene, threat, insult and identity_hate.',
      techStackUsedInTheProject: 'Flutter, FastAPI, Toxic-Bert HuggingFace Model',
      picOfTheProj: ToxicCommentClassificationProjImg,
      livePreviewOfTheProject: 'https://github.com/somenath203/Toxic-Comment-Classifier?tab=readme-ov-file#demo-video-of-the-project',
      githubLinkOfTheProject: 'https://github.com/somenath203/Toxic-Comment-Classifier',
    },
    {
      id: 3,
      nameOfTheProject: 'Aora',
      descOfTheProject: 'Aora is a mobile application that allows users to upload videos along with their titles and thumbnails. Users can also explore a diverse range of videos shared by the entire community. Aora offers a seamless platform for video sharing and discovery, making it easy to connect with content from fellow users.',
      techStackUsedInTheProject: 'React Native, NativeWind, Appwrite',
      picOfTheProj: AoraProjImg,
      livePreviewOfTheProject: 'https://www.youtube.com/watch?v=IyuRW4DlVfM',
      githubLinkOfTheProject: 'https://github.com/somenath203/Aora',
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
