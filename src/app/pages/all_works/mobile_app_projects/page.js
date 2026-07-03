"use client";

import PageHeading from "@/app/components/PageHeading";
import WorkCard from "@/app/components/WorkCard";
import FlutterFireabseTodoProjImg from "./../../../assets/app_development_pics/flutterfirebasetodoappprojimg.png";
import AoraProjImg from "./../../../assets/app_development_pics/aoraprojectpic.png";
import RydeProjImg from "./../../../assets/app_development_pics/rydeprojimg.jpg";

const Page = () => {
  
  const appProjects = [
    {
      id: 2,
      nameOfTheProject: "Aora",
      descOfTheProject:
        "Aora is a mobile video-sharing application that allows users to upload videos along with custom titles and thumbnails. Users can also explore and discover videos shared by the community, providing a seamless platform for content creation and video discovery.",
      techStackUsedInTheProject: "React Native, Expo, NativeWind, Appwrite",
      picOfTheProj: AoraProjImg,
      livePreviewOfTheProject: "https://www.youtube.com/watch?v=IyuRW4DlVfM",
      githubLinkOfTheProject: "https://github.com/somenath203/Aora",
      youtubeVideoLink: "https://www.youtube.com/",
    },
    {
      id: 3,
      nameOfTheProject: "Ryde",
      descOfTheProject:
        "Ryde is a ride-booking mobile application that enables users to book rides with ease. The app supports user authentication, real-time location detection, destination search, driver selection, and secure online payments, providing a smooth and reliable ride-booking experience.",
      techStackUsedInTheProject:
        "React Native, Expo, NativeWind, Zustand, Clerk Authentication, Google Places API, Google Directions API, Stripe, Geoapify API, Neon PostgreSQL",
      picOfTheProj: RydeProjImg,
      livePreviewOfTheProject: "https://www.youtube.com/watch?v=lbGS07Fiw2c",
      githubLinkOfTheProject: "https://github.com/somenath203/Ryde",
      youtubeVideoLink: "https://www.youtube.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center">
      <div className="mt-14 w-5/6 lg:w-1/4">
        <PageHeading heading="App Development Projects" />
      </div>

      <WorkCard workArray={appProjects} accentColor="#f472b6" />
    </div>
  );
};

export default Page;
