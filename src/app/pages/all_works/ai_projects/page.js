"use client";

import PageHeading from "@/app/components/PageHeading";
import WorkCard from "@/app/components/WorkCard";

import StudentSuccessDropoutPredictorPic from "./../../../assets/ai_development_pics/studentsuccessdropoutpredictor.png";
import SkinLesionPic from "./../../../assets/ai_development_pics/skinlesionimg.png";
import ClusterNewsPic from "./../../../assets/ai_development_pics/clusternewspic.png";
import ForecastInClothingLSTM from "./../../../assets/ai_development_pics/forecastclothfuturelstmpic.png";
import RemoveNoiseFromImg from "./../../../assets/ai_development_pics/reducenoiseprojectimg.png";
import MulticlassBrainTumorImg from "./../../../assets/ai_development_pics/multiclassbraintumorprojectimage.png";
import TomatoLeafImg from "./../../../assets/ai_development_pics/tomatoleafprojectpic.png";
import ColdEmailGeneratorImg from "./../../../assets/ai_development_pics/coldemailgeneratorpic.png";
import FitbitesProjImg from "./../../../assets/ai_development_pics/fitbitesprojpic.png";
import ChatFolioProjImg from "./../../../assets/ai_development_pics/chatfolioprojectimg.png";
import GeminiContentWizardPic from "./../../../assets/ai_development_pics/geminicontentwizardprojectpic.png";
import LeadRankerProjImg from "./../../../assets/ai_development_pics/leadrankerprojimg.png";
import QuillSenseProjImg from "./../../../assets/ai_development_pics/quillsenseprojimg.jpg";

const Page = () => {
  const aiProjects = [
    {
      id: 1,
      nameOfTheProject: "Student Academic Success Dropout Predictor",
      descOfTheProject:
        "This is a machine learning project that predicts whether a student is likely to drop out or successfully complete their academic journey.",
      techStackUsedInTheProject:
        "React, Tailwind CSS, Ant Design, Express.js, MongoDB, FastAPI, Pandas, NumPy, Seaborn, Scikit-learn",
      picOfTheProj: StudentSuccessDropoutPredictorPic,
      livePreviewOfTheProject:
        "https://predict-students-dropout-and-academic-success-frontend.vercel.app/",
      githubLinkOfTheProject:
        "https://github.com/somenath203/Predict-students-dropout-and-academic-success-frontend",
      youtubeVideoLink: "https://www.youtube.com/",
    },
    {
      id: 2,
      nameOfTheProject: "Skin Lesion Segmentation using OpenCV",
      descOfTheProject:
        "This project uses OpenCV to segment skin lesion images. Skin lesion segmentation is one of the first steps toward the computer-aided diagnosis of skin cancer.",
      techStackUsedInTheProject: "NumPy, Matplotlib, OpenCV",
      picOfTheProj: SkinLesionPic,
      livePreviewOfTheProject:
        "https://github.com/somenath203/Skin-Lesion-Segmentation-OpenCV/blob/main/skin_lesion_segmentation_multiple_image_computer_vision_project.ipynb",
      githubLinkOfTheProject:
        "https://github.com/somenath203/Skin-Lesion-Segmentation-OpenCV",
      youtubeVideoLink: "https://www.youtube.com/",
    },
    {
      id: 3,
      nameOfTheProject: "Clustering News using Unsupervised Machine Learning",
      descOfTheProject:
        "This machine learning project uses unsupervised learning algorithms such as K-Means, K-Medoids, and Agglomerative Hierarchical Clustering to group news articles into meaningful clusters based on their content.",
      techStackUsedInTheProject:
        "NumPy, Pandas, Matplotlib, NLTK, Scikit-learn, FastAPI",
      picOfTheProj: ClusterNewsPic,
      livePreviewOfTheProject: "https://fake-news-pred.onrender.com/docs",
      githubLinkOfTheProject:
        "https://github.com/somenath203/Clustering-News-Unsupervised-Machine-Learning",
      youtubeVideoLink: "https://www.youtube.com/",
    },
    {
      id: 4,
      nameOfTheProject:
        "Predicting Future Retail Sales of Clothing Stores using LSTM",
      descOfTheProject:
        "This deep learning project uses Long Short-Term Memory (LSTM), a type of Recurrent Neural Network (RNN), to forecast future retail sales for clothing and clothing accessory stores.",
      techStackUsedInTheProject: "TensorFlow, Keras Sequential API, LSTM",
      picOfTheProj: ForecastInClothingLSTM,
      livePreviewOfTheProject:
        "https://github.com/somenath203/Predicting-Future-Retail-Sales-of-Clothing-Stores-using-LSTM/blob/main/Predicting%20Future%20Retail%20Sales%20of%20Clothing%20using%20LSTM.ipynb",
      githubLinkOfTheProject:
        "https://github.com/somenath203/Predicting-Future-Retail-Sales-of-Clothing-Stores-using-LSTM",
      youtubeVideoLink: "https://www.youtube.com/",
    },
    {
      id: 5,
      nameOfTheProject:
        "Removing Noise from MNIST Handwritten Digit Images using Autoencoder",
      descOfTheProject:
        "This deep learning project demonstrates how an autoencoder neural network can remove noise from handwritten digit images in the MNIST dataset.",
      techStackUsedInTheProject:
        "TensorFlow, Keras Sequential API, Autoencoder",
      picOfTheProj: RemoveNoiseFromImg,
      livePreviewOfTheProject:
        "https://github.com/somenath203/Removing-Noise-from-MNIST-handwritten-digit-images-using-Autoencoder/blob/main/removing_noise_from_MNIST_handwritten_digit_images_using_autoencoder.ipynb",
      githubLinkOfTheProject:
        "https://github.com/somenath203/Removing-Noise-from-MNIST-handwritten-digit-images-using-Autoencoder",
      youtubeVideoLink: "https://www.youtube.com/",
    },
    {
      id: 6,
      nameOfTheProject: "Multiclass Brain Tumor Classification",
      descOfTheProject:
        "This deep learning project classifies brain MRI images into three tumor categories: glioma, meningioma, and pituitary tumor.",
      techStackUsedInTheProject:
        "TensorFlow, CNN, Transfer Learning, Ensemble Learning, Next.js, FastAPI",
      picOfTheProj: MulticlassBrainTumorImg,
      livePreviewOfTheProject:
        "https://multiclass-brain-tumor-classification.vercel.app/",
      githubLinkOfTheProject:
        "https://github.com/somenath203/Multiclass-Brain-Tumor-Classification-using-TensorFlow",
      youtubeVideoLink: "https://www.youtube.com/",
    },
    {
      id: 7,
      nameOfTheProject: "TomatoLeaf Care",
      descOfTheProject:
        "This deep learning project identifies and classifies diseases in tomato leaves, helping farmers proactively monitor crop health and improve decision-making for effective crop management.",
      techStackUsedInTheProject:
        "TensorFlow, Transfer Learning, Ensemble Learning, React, Clerk Authentication, Tailwind CSS, Express.js, FastAPI",
      picOfTheProj: TomatoLeafImg,
      livePreviewOfTheProject: "https://tomatoleaf-care.vercel.app/",
      githubLinkOfTheProject: "https://github.com/somenath203/TomatoLeaf-Care",
      youtubeVideoLink: "https://www.youtube.com/",
    },
    {
      id: 8,
      nameOfTheProject: "Cold Email Generator",
      descOfTheProject:
        "Cold Email Generator is an AI-powered web application that helps job seekers create personalized cold emails tailored to specific job postings. Users simply provide a job post URL and a brief summary of their skills to generate a professional email.",
      techStackUsedInTheProject:
        "Streamlit, Groq API, LangChain, Llama 3.1 70B Versatile",
      picOfTheProj: ColdEmailGeneratorImg,
      livePreviewOfTheProject:
        "https://cold-email-generator-som.streamlit.app/",
      githubLinkOfTheProject:
        "https://github.com/somenath203/Cold-Email-Generator",
      youtubeVideoLink: "https://www.youtube.com/",
    },
    {
      id: 9,
      nameOfTheProject: "FitBites",
      descOfTheProject:
        "FitBites is an AI-powered nutrition and diet planning web application that generates personalized meal plans, recommends recipes, and tracks daily calorie intake based on each user's preferences and health goals.",
      techStackUsedInTheProject:
        "Next.js, shadcn/ui, Tailwind CSS, Clerk Authentication, Prisma ORM, Neon PostgreSQL, FastAPI, Groq API, LangChain, Llama 3 8B 8192",
      picOfTheProj: FitbitesProjImg,
      livePreviewOfTheProject: "https://fitbites-som.vercel.app/",
      githubLinkOfTheProject: "https://github.com/somenath203/FitBites",
      youtubeVideoLink: "https://www.youtube.com/",
    },
    {
      id: 10,
      nameOfTheProject: "ChatFolio",
      descOfTheProject:
        "ChatFolio is a personal AI chatbot that answers questions about my resume, including my skills, education, projects, achievements, and certifications, providing an interactive way to explore my professional profile.",
      techStackUsedInTheProject:
        "Next.js, shadcn/ui, Tailwind CSS, LangChain, BAAI/bge-small-en-v1.5 Embeddings, FAISS, LangChain Groq, Google Gemma 2 9B IT",
      picOfTheProj: ChatFolioProjImg,
      livePreviewOfTheProject: "https://chatfolio-som.vercel.app/",
      githubLinkOfTheProject: "https://github.com/somenath203/ChatFolio",
      youtubeVideoLink: "https://www.youtube.com/",
    },
    {
      id: 11,
      nameOfTheProject: "Gemini Content Wizard",
      descOfTheProject:
        "Gemini Content Wizard is an AI-powered content generation platform that helps users create high-quality content for blogs, YouTube, social media, and various other use cases with the help of Google Gemini.",
      techStackUsedInTheProject:
        "Next.js, Tailwind CSS, shadcn/ui, Drizzle ORM, Neon Database, Clerk Authentication, Google Gemini API",
      picOfTheProj: GeminiContentWizardPic,
      livePreviewOfTheProject: "https://gemini-content-wizard.vercel.app/",
      githubLinkOfTheProject:
        "https://github.com/somenath203/Gemini-Content-Wizard",
      youtubeVideoLink: "https://www.youtube.com/",
    },
    {
      id: 12,
      nameOfTheProject: "LeadRanker",
      descOfTheProject:
        "LeadRanker is a full-stack web application that helps organizations discover, analyze, and prioritize top developers from GitHub. It also generates AI-powered insights and personalized outreach emails for potential candidates.",
      techStackUsedInTheProject:
        "Next.js, Tailwind CSS, shadcn/ui, Clerk Authentication, Prisma ORM, Neon Database, Google Gemini API, React Hook Form, Zod, FileSaver.js",
      picOfTheProj: LeadRankerProjImg,
      livePreviewOfTheProject: "https://lead-ranker-somm.vercel.app/",
      githubLinkOfTheProject: "https://github.com/somenath203/leadranker",
      youtubeVideoLink: "https://www.youtube.com/",
    },
    {
      id: 13,
      nameOfTheProject: "QuillSense",
      descOfTheProject:
        "QuillSense is an AI-powered handwriting analysis mobile application that helps users understand their handwriting patterns, mood, and overall well-being by analyzing handwriting samples along with user-provided information.",
      techStackUsedInTheProject:
        "React Native, Expo, NativeWind, Zustand, FastAPI, Google Gemini API, React Native Chart Kit, Expo Image Picker, Expo Speech, Expo Sharing",
      picOfTheProj: QuillSenseProjImg,
      livePreviewOfTheProject: "https://www.youtube.com/watch?v=DP3Wns3og7Y",
      githubLinkOfTheProject: "https://github.com/somenath203/quillsense",
      youtubeVideoLink: "https://www.youtube.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center">
      <div className="mt-14 w-4/6 lg:w-1/6">
        <PageHeading heading="AI Projects" />
      </div>

      <WorkCard workArray={aiProjects} accentColor="#34d399" />
    </div>
  );
};

export default Page;
