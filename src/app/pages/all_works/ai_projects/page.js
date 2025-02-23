'use client';

import PageHeading from '@/app/components/PageHeading';
import WorkCard from '@/app/components/WorkCard';

import TitanicProjPic from './../../../assets/ai_development_pics/titanic_proj.png';
import HousePredictorPic from './../../../assets/ai_development_pics/californiahousepricepredictionimg.png';
import StudentSuccessDropoutPredictorPic from './../../../assets/ai_development_pics/studentsuccessdropoutpredictor.png';
import CreditCardFraudDetectImg from './../../../assets/ai_development_pics/creditcardfrauddetectimg.png';
import SpamEmailDetectImg from './../../../assets/ai_development_pics/spamemailpredictionimg.png';
import RockVSMineImg from './../../../assets/ai_development_pics/rockvsminepredcitionpic.png';
import LoanStatusImg from './../../../assets/ai_development_pics/loanstatuspredictionpic.png';
import GoldPriceImg from './../../../assets/ai_development_pics/goldpricepredimg.png';
import ParkinsonImg from './../../../assets/ai_development_pics/parkinsondiseasepredpic.png';
import SpamSMSImg from './../../../assets/ai_development_pics/spamsmsimg.png';
import SuicideDepressionImg from './../../../assets/ai_development_pics/suicidedepressionimg.png';
import AirQualityPic from './../../../assets/ai_development_pics/airqualitypic.png';
import SkinLesionPic from './../../../assets/ai_development_pics/skinlesionimg.png';
import ClusterNewsPic from './../../../assets/ai_development_pics/clusternewspic.png';
import SummarizeTextPic from './../../../assets/ai_development_pics/textsummarizerimg.png';
import CNNWithMNISTPic from './../../../assets/ai_development_pics/cnnmnistprojectpic.png';
import CNNwithCIFARTEN from './../../../assets/ai_development_pics/cifartenprojectimg.png';
import BrainTumorPic from './../../../assets/ai_development_pics/braintumorpic.png';
import ForecastInClothingLSTM from './../../../assets/ai_development_pics/forecastclothfuturelstmpic.png';
import RemoveNoiseFromImg from './../../../assets/ai_development_pics/reducenoiseprojectimg.png';
import MulticlassBrainTumorImg from './../../../assets/ai_development_pics/multiclassbraintumorprojectimage.png';
import SatelliteImageClassificationProjImg from './../../../assets/ai_development_pics/satelliteimgclassifyprojectimg.png';
import LanguageIdentifierProjImg from './../../../assets/ai_development_pics/languageidentifierprojectimg.png';
import MalariaImgCellClassifyProjImg from './../../../assets/ai_development_pics/malariacellclassification.png';
import NamedEntityRecognizerImg from './../../../assets/ai_development_pics/namedentityrecognizerpic.png';
import TomatoLeafImg from './../../../assets/ai_development_pics/tomatoleafprojectpic.png';
import QuestionAnswerAiLlama3ChatAppImg from './../../../assets/ai_development_pics/langchainollamallama3projpic.png';
import PDFChatAppLlama3GroqImg from './../../../assets/ai_development_pics/pdfchatllamathreegroqpic.png';
import MovieRecommenderSystemImg from './../../../assets/ai_development_pics/movierecommendationsystempic.png';
import MarketingContentGeneratorImg from './../../../assets/ai_development_pics/marketingcontentgeneratorpic.png';
import Nllb200LanguageTranslationImg from './../../../assets/ai_development_pics/languagetranslationpic.png';
import FourInOneAIToolkitImg from './../../../assets/ai_development_pics/fourinoneaitoolproj.png';
import ColdEmailGeneratorImg from './../../../assets/ai_development_pics/coldemailgeneratorpic.png';
import FitbitesProjImg from './../../../assets/ai_development_pics/fitbitesprojpic.png';
import ChatFolioProjImg from './../../../assets/ai_development_pics/chatfolioprojectimg.png';
import ScholarSyncProjImg from './../../../assets/ai_development_pics/scholarsyncprojpic.png';
import PDFfyProjImg from './../../../assets/ai_development_pics/pdffyaiprojimg.png';
import GeminiContentWizardPic from './../../../assets/ai_development_pics/geminicontentwizardprojectpic.png';
import NextJSGeminiChatAppPic from './../../../assets/ai_development_pics/nextgeminichatapppic.png';
import OptiMediaHubPic from './../../../assets/ai_development_pics/optimediahubprojectpic.png';
import SmartWebChatPic from './../../../assets/ai_development_pics/smartwebchatpic.png';
import PureTextProjectPic from './../../../assets/ai_development_pics/puretextprojimgpic.png';
import ImageExtractorAppImg from './../../../assets/ai_development_pics/imagetextextractorimage.png';
import ToxicCommentClassificationProjImg from './../../../assets/ai_development_pics/toxiccommentclassificationproj.png';
import SnapStoryProjImg from './../../../assets/ai_development_pics/snapstoryprojectpic.jpg';
import NeuroPadProjImg from './../../../assets/ai_development_pics/neuropadprojimg.png';
import VidWiseProjImg from './../../../assets/ai_development_pics/vidwiseprojimgpic.png';
import LogoCraftAIProjImg from './../../../assets/ai_development_pics/logocraftaiprojimg.png';
import LeadRankerProjImg from './../../../assets/ai_development_pics/leadrankerprojimg.png';
import AquaYieldAIProjImg from './../../../assets/ai_development_pics/aquayieldaiprojimg.png';
import QuillSenseProjImg from './../../../assets/ai_development_pics/quillsenseprojimg.jpg';


const Page = () => {

  const aiProjects = [
    {
        id: 1,
        nameOfTheProject: 'Titanic Survival Project',
        descOfTheProject: 'This is a project which predicts weather a particular person would survive the Titanic Disaster or not if he/she was present in Titanic at that point of time.',
        techStackUsedInTheProject: 'React, ChakraUI, FastAPI, Pandas, Seaborn, Scikit-learn',
        picOfTheProj: TitanicProjPic,
        livePreviewOfTheProject: 'https://titanic-survival-project-frontend.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Titanic-Survival-Project-Frontend'
    },
    {
        id: 2,
        nameOfTheProject: 'California House Price Predictor',
        descOfTheProject: 'This is a simple A.I. powered website created using Streamlit and Linear Regression Model which predicts the price of California House Data',
        techStackUsedInTheProject: 'Streamlit, Pandas, Numpy, Scikit-learn',
        picOfTheProj: HousePredictorPic,
        livePreviewOfTheProject: 'https://ai-powered-california-house-price-predictor.streamlit.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/A.I.-Powered-California-House-Price-Predictor-Website'
    },
    {
        id: 3,
        nameOfTheProject: 'Student Academic Success Dropout Predictor',
        descOfTheProject: 'This is a project which predicts whether a particular student would dropout or succeed in academics in the future.',
        techStackUsedInTheProject: 'React, TailwindCSS, antd, ExpressJS, MongoDB, FastAPI, Pandas, Numpy, Seaborn, Scikit-learn',
        picOfTheProj: StudentSuccessDropoutPredictorPic,
        livePreviewOfTheProject: 'https://predict-students-dropout-and-academic-success-frontend.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Predict-students-dropout-and-academic-success-frontend'
    },
    {
        id: 4,
        nameOfTheProject: 'Credit Card Fraud Detection',
        descOfTheProject: 'This is a machine-learning model built with the help of Logistic Regression which helps in detecting fraudulent credit card transactions so that customers are not charged for the items that they did not purchase.',
        techStackUsedInTheProject: 'Numpy, Pandas, Scikit-learn',
        picOfTheProj: CreditCardFraudDetectImg,
        livePreviewOfTheProject: 'https://github.com/somenath203/Credit-Card-Fraud-Detection/blob/main/credit_card_fraud_detection.ipynb',
        githubLinkOfTheProject: 'https://github.com/somenath203/Credit-Card-Fraud-Detection'
    },
    {
        id: 5,
        nameOfTheProject: 'Spam Email Detection',
        descOfTheProject: 'This is a machine-learning model built with the help of Logistic Regression which helps in detecting whether a particular email is spam or not.',
        techStackUsedInTheProject: 'Numpy, Pandas, Scikit-learn',
        picOfTheProj: SpamEmailDetectImg,
        livePreviewOfTheProject: 'https://github.com/somenath203/Spam-Email-Detection/blob/main/spam_email_detection.ipynb',
        githubLinkOfTheProject: 'https://github.com/somenath203/Spam-Email-Detection'
    },
    {
        id: 6,
        nameOfTheProject: 'Sonar Rock VS Mine Prediction',
        descOfTheProject: 'This is a machine-learning model that helps a submarine predict whether the thing beneath it is a rock or a naval mine. Here, the prediction is made based on the data received from sonar signals that bounce back to the submarine after interacting with the underwater object.',
        techStackUsedInTheProject: 'Numpy, Pandas, Scikit-learn',
        picOfTheProj: RockVSMineImg,
        livePreviewOfTheProject: 'https://github.com/somenath203/Sonar-Rock-VS-Mine-Prediction/blob/main/sonar_rock_vs_mine_prediction.ipynb',
        githubLinkOfTheProject: 'https://github.com/somenath203/Sonar-Rock-VS-Mine-Prediction'
    },
    {
        id: 7,
        nameOfTheProject: 'Loan Status Prediction',
        descOfTheProject: 'This is a project created with the help of NextJS, fastAPI and Random forest classifier Model which enables bank employees predict whether an applicant is eligible for receiving loan or not.',
        techStackUsedInTheProject: 'NextJS, TailwindCSS, antd, FastAPI, Numpy, Pandas, Seaborn, Scikit-learn',
        picOfTheProj: LoanStatusImg,
        livePreviewOfTheProject: 'https://loan-status-prediction-frontend.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Loan-Status-Prediction-Frontend'
    },
    {
        id: 8,
        nameOfTheProject: 'Gold Price Prediction',
        descOfTheProject: 'This is a project created with the help of ReactJS, fastAPI and Random forest Regressor Model which predicts the price of gold based on certain input.',
        techStackUsedInTheProject: 'ReactJS, antd, FastAPI, Pandas, Matplotlib, Seaborn, Scikit-learn',
        picOfTheProj: GoldPriceImg,
        livePreviewOfTheProject: 'https://gold-price-detection.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Gold-Price-Prediction'
    },
    {
        id: 9,
        nameOfTheProject: 'Parkinson\'s Disease Prediction',
        descOfTheProject: 'This is a project created with the help of ReactJS, fastAPI and Support Vector Classifier Model which predicts whether a person is having Parkinson\'s Disease or not.',
        techStackUsedInTheProject: 'ReactJS, FastAPI, Numpy, Pandas, Scikit-learn',
        picOfTheProj: ParkinsonImg,
        livePreviewOfTheProject: 'https://parkinson-disease-predictor.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/vishal815/Parkinsons-Disease-Detection'
    },
    {
        id: 10,
        nameOfTheProject: 'Spam SMS Prediction',
        descOfTheProject: 'This is a project created with the help of NextJS, TailwindCSS, fastAPI and Multinomial Naive Bayes Classifier Model which predicts whether a SMS is spam or not.',
        techStackUsedInTheProject: 'NextJS, TailwindCSS, FastAPI, Numpy, Pandas, Matplotlib, Seaborn, NLTK, Scikit-learn',
        picOfTheProj: SpamSMSImg,
        livePreviewOfTheProject: 'https://spam-sms-predictor-frontend.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Spam-SMS-Predictor-Frontend'
    },
    {
        id: 11,
        nameOfTheProject: 'Suicide Depression Predictor',
        descOfTheProject: 'The Suicide Depression Predictor is a healthcare project that uses machine learning to predict the risk of suicide and depression in individuals.',
        techStackUsedInTheProject: 'ReactJS, TailwindCSS, FastAPI, Numpy, Pandas, Matplotlib, Seaborn, NLTK, Scikit-learn',
        picOfTheProj: SuicideDepressionImg,
        livePreviewOfTheProject: 'https://suicidal-thought-and-depression-predictor-frontend.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Suicide-Depression-Predictor'
    },
    {
        id: 12,
        nameOfTheProject: 'Air Quality Predictor',
        descOfTheProject: 'Air Quality Predictor is a machine learning project designed to help predict the quality of the air based on four parameters: year, month, day, and hour of the measurement.',
        techStackUsedInTheProject: 'ReactJS, TailwindCSS, FastAPI, Pandas, Matplotlib, Seaborn, Scikit-learn',
        picOfTheProj: AirQualityPic,
        livePreviewOfTheProject: 'https://air-quality-predictor.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Air-Quality-Predictor'
    },
    {
        id: 13,
        nameOfTheProject: 'Skin Lesion Segmentation OpenCV',
        descOfTheProject: 'This repository contains the code for segmenting skin lesions images using OpenCV. Skin lesion segmentation is one of the first steps towards automatic Computer-Aided Diagnosis of skin cancer.',
        techStackUsedInTheProject: 'Numpy, Matplotlib, OpenCV',
        picOfTheProj: SkinLesionPic,
        livePreviewOfTheProject: 'https://github.com/somenath203/Skin-Lesion-Segmentation-OpenCV/blob/main/skin_lesion_segmentation_multiple_image_computer_vision_project.ipynb',
        githubLinkOfTheProject: 'https://github.com/somenath203/Skin-Lesion-Segmentation-OpenCV'
    },
    {
        id: 14,
        nameOfTheProject: 'Clustering News Unsupervised Machine Learning',
        descOfTheProject: 'This is a machine learning project which uses unsupervised machine learning algorithms such as k-means, k-medoids and agglomerative hierarchical clustering to group news articles into clusters based on their respective types.',
        techStackUsedInTheProject: 'Numpy, Pandas, Matplotlib, NLTK, Scikit-learn, FastAPI',
        picOfTheProj: ClusterNewsPic,
        livePreviewOfTheProject: 'https://fake-news-pred.onrender.com/docs',
        githubLinkOfTheProject: 'https://github.com/somenath203/Clustering-News-Unsupervised-Machine-Learning'
    },
    {
        id: 15,
        nameOfTheProject: 'Text Summarizer using Transformers',
        descOfTheProject: 'This is a application which is created with the help of Gradio whose work is to summarize text articles with the help of \'Summarization Pipeline\' provided by Transformer.',
        techStackUsedInTheProject: 'Transformers, Gradio',
        picOfTheProj: SummarizeTextPic,
        livePreviewOfTheProject: 'https://som11-text-summary-using-gradio-and-transformer.hf.space/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Text-Summarizer-using-Transformers-and-Gradio'
    },
    {
        id: 16,
        nameOfTheProject: 'CNN with MNIST Dataset',
        descOfTheProject: 'This is a project which is created with the help of Tensorflow and Convolutional Neural Network (CNN) that classifies handwritten digits from the MNIST dataset.',
        techStackUsedInTheProject: 'Tensorflow, Sequential, CNN',
        picOfTheProj: CNNWithMNISTPic,
        livePreviewOfTheProject: 'https://github.com/somenath203/CNN-with-MNIST-Dataset/blob/main/cnn_on_mnist.ipynb',
        githubLinkOfTheProject: 'https://github.com/somenath203/CNN-with-MNIST-Dataset'
    },
    {
        id: 17,
        nameOfTheProject: 'CNN with CIFAR-10 Dataset',
        descOfTheProject: 'This is a project that utilizes Convolutional Neural Network (CNN) to classify images from the CIFAR-10 dataset, which comprises 60,000 32x32 color images across 10 different classes, including airplanes, cars, birds, cats, deer, dogs, frogs, horses, ships, and trucks.',
        techStackUsedInTheProject: 'Tensorflow, Sequential, CNN',
        picOfTheProj: CNNwithCIFARTEN,
        livePreviewOfTheProject: 'https://github.com/somenath203/CNN_With_CIFAR_10_Dataset/blob/main/CNN_with_CIFAR_10_Dataset.ipynb',
        githubLinkOfTheProject: 'https://github.com/somenath203/CNN_With_CIFAR_10_Dataset'
    },
    {
        id: 18,
        nameOfTheProject: 'Binaryclass Brain Tumor Classification',
        descOfTheProject: 'This is a project which uses Tensorflow, Convolutional Neural Network (CNN), and Streamlit to analyze MRI images of Brain and detect the presence or absence of Tumors.',
        techStackUsedInTheProject: 'Tensorflow, Sequential, CNN, Streamlit',
        picOfTheProj: BrainTumorPic,
        livePreviewOfTheProject: 'https://som11-brain-tumor-classification-using-cnn.hf.space',
        githubLinkOfTheProject: 'https://github.com/somenath203/Brain-Tumor-Classification-using-CNN'
    },
    {
        id: 19,
        nameOfTheProject: 'Predicting Future Retail Sales of Clothing Stores using LSTM',
        descOfTheProject: 'This is a project which uses Tensorflow and Long Short Term Memory(LSTM), a type of Recurrent Neural Network(RNN), to forecast the future retail sales of clothing and clothing accessory stores.',
        techStackUsedInTheProject: 'Tensorflow, Sequential, LSTM',
        picOfTheProj: ForecastInClothingLSTM,
        livePreviewOfTheProject: 'https://github.com/somenath203/Predicting-Future-Retail-Sales-of-Clothing-Stores-using-LSTM/blob/main/Predicting%20Future%20Retail%20Sales%20of%20Clothing%20using%20LSTM.ipynb',
        githubLinkOfTheProject: 'https://github.com/somenath203/Predicting-Future-Retail-Sales-of-Clothing-Stores-using-LSTM'
    },
    {
        id: 20,
        nameOfTheProject: 'Removing Noise from MNIST handwritten digit images using Autoencoder',
        descOfTheProject: 'This project demonstrates how to use autoencoder a type of neural network, to remove noise from images of handwritten digits of the MNIST dataset.',
        techStackUsedInTheProject: 'Tensorflow, Sequential, Autoencoder',
        picOfTheProj: RemoveNoiseFromImg,
        livePreviewOfTheProject: 'https://github.com/somenath203/Removing-Noise-from-MNIST-handwritten-digit-images-using-Autoencoder/blob/main/removing_noise_from_MNIST_handwritten_digit_images_using_autoencoder.ipynb',
        githubLinkOfTheProject: 'https://github.com/somenath203/Predicting-Future-Retail-Sales-of-Clothing-Stores-using-LSTM'
    },
    {
        id: 21,
        nameOfTheProject: 'Multiclass Brain Tumor Classification',
        descOfTheProject: 'This is a project which uses deep learning algorithm to classify the type of tumor present in the brain MRI image. The model is only able to detect three type of tumors as of now i.e. glioma, meningioma and pituitary.',
        techStackUsedInTheProject: 'Tensorflow, CNN, Transfer learning, Ensemble Learning, NextJS, FastAPI',
        picOfTheProj: MulticlassBrainTumorImg,
        livePreviewOfTheProject: 'https://multiclass-brain-tumor-classification.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Multiclass-Brain-Tumor-Classification-using-TensorFlow'
    },
    {
        id: 22,
        nameOfTheProject: 'Satellite Image Classifier',
        descOfTheProject: "The aim of this project is to classify satellite images into their respective categories i.e. 'Cloudy', 'Desert', 'Green Area' and 'Water' using Convolutional Neural Networks (CNNs) implemented with TensorFlow.",
        techStackUsedInTheProject: 'Tensorflow, CNN, Transfer learning, Gradio',
        picOfTheProj: SatelliteImageClassificationProjImg,
        livePreviewOfTheProject: 'https://som11-satellite-image-classification.hf.space',
        githubLinkOfTheProject: 'https://github.com/somenath203/satellite-image-classification-using-tensorflow'
    },
    {
        id: 23,
        nameOfTheProject: 'Language Identifier',
        descOfTheProject: "This is a deep learning project created with the help of Tensorflow that predicts the language of a given text snippet.",
        techStackUsedInTheProject: 'Tensorflow, Transfer learning, Ensemble Learning, Gradio',
        picOfTheProj: LanguageIdentifierProjImg,
        livePreviewOfTheProject: 'https://som11-language-predictor.hf.space',
        githubLinkOfTheProject: 'https://github.com/somenath203/Language-Identifier-using-Tensorflow'
    },
    {
        id: 24,
        nameOfTheProject: 'Malaria Image Cell Classification',
        descOfTheProject: "This is a deep learning project created with the help of Tensorflow that predicts the language of a given text snippet.",
        techStackUsedInTheProject: 'Tensorflow, CNN, Transfer learning, Ensemble Learning, NextJS, ExpressJS, Razorpay',
        picOfTheProj: MalariaImgCellClassifyProjImg,
        livePreviewOfTheProject: 'https://malaria-cell-classifier.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/malaria-cell-image-classification'
    },
    {
        id: 25,
        nameOfTheProject: 'Named Entity Recognizer',
        descOfTheProject: "This project is designed to help you extract and categorize named entities from text using state-of-the-art NLP models like dslim/bert-base-NER and Spacy's en_core_web_sm model.",
        techStackUsedInTheProject: 'Transformers, Spacy, Streamlit',
        picOfTheProj: NamedEntityRecognizerImg,
        livePreviewOfTheProject: 'https://som11-named-entity-recognition.hf.space/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Named-Entity-Recognizer'
    },
    {
        id: 26,
        nameOfTheProject: 'Tomato Leaf Disease Classification',
        descOfTheProject: "In this project, deep learning techniques are used to detect and classify diseases in tomato leaves. This project is designed to help farmers know more about the health of their crops, providing valuable insights for effective crop management.",
        techStackUsedInTheProject: 'Tensorflow, Transfer Learning, Ensemble Learning, ReactJS, Clerk Authentication, TailwindCSS, Transfer Learning, ExpressJS, FastAPI',
        picOfTheProj: TomatoLeafImg,
        livePreviewOfTheProject: 'https://healthy-tomato.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/tomato-disease-classification-ten-classes'
    },
    {
        id: 27,
        nameOfTheProject: 'Machine Learning and Deep learning Assistant using Langchain, Ollama and Llama3',
        descOfTheProject: "This is a simple Question Answering application created with the help of Langchain, Ollama, Llama3 Large Language Model and Streamlit that answer questions and produce code related to machine learning and deep learning.",
        techStackUsedInTheProject: 'langChain, Ollama, Llama LLM, Streamlit',
        picOfTheProj: QuestionAnswerAiLlama3ChatAppImg,
        livePreviewOfTheProject: 'https://github.com/somenath203/Machine-Learning-and-Deep-learning-Assistant-using-langchain-Ollama-and-Llama3?tab=readme-ov-file#demo-video-of-the-application',
        githubLinkOfTheProject: 'https://github.com/somenath203/Machine-Learning-and-Deep-learning-Assistant-using-langchain-Ollama-and-Llama3'
    },
    {
        id: 28,
        nameOfTheProject: 'PDF Insights: Interactive Q&A with Llama3 and Groq API',
        descOfTheProject: "This project is an interactive Q&A application designed to provide insights from PDF documents. The project uses Llama3, a large language model, and the Groq API to deliver accurate and efficient responses. Users can upload PDF documents, ask questions, and receive relevant answers based on the content of the uploaded PDF.",
        techStackUsedInTheProject: 'langChain, Streamlit, Llama3, Groq API, FAISS, HuggingFace Embeddings',
        picOfTheProj: PDFChatAppLlama3GroqImg,
        livePreviewOfTheProject: 'https://pdf-insights-interactive-q-and-a-with-llamathree-groq-api.streamlit.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/pdf-insights-interactive-q-and-a-with-llamathree-groq-api'
    },
    {
        id: 29,
        nameOfTheProject: 'Movie Recommender System',
        descOfTheProject: "The Movie Recommender System is a machine learning project designed to recommend movies to users based on various criteria. This project uses Content based Filtering technique to provide personalized movie recommendations.",
        techStackUsedInTheProject: 'Scikit-learn, Streamlit',
        picOfTheProj: MovieRecommenderSystemImg,
        livePreviewOfTheProject: 'https://som11-movie-recommendation-system.hf.space/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Movie-Recommender-System'
    },
    {
        id: 30,
        nameOfTheProject: 'Marketing Content Generator',
        descOfTheProject: "This is an application designed to generate marketing content. The application uses Langchain and Open Source Meta's Llama-3-8B-Instruct Large language Model to create engaging and relevant marketing copy based on user input and the content type.",
        techStackUsedInTheProject: 'langchain, HuggingFace, Llama-3-8B-Instruct, Streamlit',
        picOfTheProj: MarketingContentGeneratorImg,
        livePreviewOfTheProject: 'https://marketing-content-generator.streamlit.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/marketing-content-generator'
    },
    {
        id: 31,
        nameOfTheProject: 'NextNLLB200 Language Translator',
        descOfTheProject: "This application allows you to translate text between over 50 languages using the powerful NLLB-200 model by Meta. Built with modern technologies such as Next.js, Tailwind CSS, ShadcnUI, and FastAPI, this web app provides a seamless and efficient translation experience.",
        techStackUsedInTheProject: 'NextJS, ShadcnUI, FastAPI, transformers, Meta\'s NLLB-200 Model',
        picOfTheProj: Nllb200LanguageTranslationImg,
        livePreviewOfTheProject: 'https://language-translator-nllb-200-nextjs.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/next-nllb200-language-translator'
    },
    {
        id: 32,
        nameOfTheProject: '4 in 1 AI Toolkit Powered by Google Gemini API',
        descOfTheProject:
          "This is an application created with Google Gemini API that provides 4 services and those are: 'Chatbot', 'Image Caption Generator', 'Text Embedding Generator' and 'Question Answer System'.",
        techStackUsedInTheProject: 'Streamlit, Google Gemini API',
        picOfTheProj: FourInOneAIToolkitImg,
        livePreviewOfTheProject:
          'https://four-in-one-ai-toolkit-powered-by-gemini-api.streamlit.app/',
        githubLinkOfTheProject:
          'https://github.com/somenath203/four-in-one-ai-toolkit-powered-by-google-gemini-api',
      },
    {
        id: 33,
        nameOfTheProject: 'Cold Email Generator',
        descOfTheProject: "The Cold Email Generator is a web application designed to help job seekers create personalized cold emails tailored to specific job postings. By providing the URL of a job post and a brief description of your skills and experience, the application automatically generates a well-crafted email to increase your chances of securing an interview.",
        techStackUsedInTheProject: 'Streamlit, Groq API, Langchain, LLaMA-3.1-70B-Versatile Model',
        picOfTheProj: ColdEmailGeneratorImg,
        livePreviewOfTheProject: 'https://cold-email-generator-som.streamlit.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Cold-Email-Generator'
    },
    {
        id: 34,
        nameOfTheProject: 'FitBites',
        descOfTheProject: "FitBites is a personalized nutrition and diet web app that helps users plan meals, suggest recipes, and track their daily calorie intake. Powered by the Groq API with the Llama3-8b-8192 model, FitBites generates customized meal plans and recipe suggestions based on user preferences and tracks detailed caloric progress to support health goals.",
        techStackUsedInTheProject: 'NextJS, ShadcnUI, TailwindCSS, Clerk Authentication, Prisma ORM, Neon PostgreSQL Database, FastAPI, Groq API, Langchain, Llama3-8b-8192 Model',
        picOfTheProj: FitbitesProjImg,
        livePreviewOfTheProject: 'https://fitbites-som.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/FitBites'
    },
    {
        id: 35,
        nameOfTheProject: 'ChatFolio',
        descOfTheProject: "ChatFolio is a personal chatbot designed to answer questions based on my resume. It provides insights into my background, including my skills, education, projects, achievements, and certifications. By interacting with ChatFolio, users can quickly access specific information about my professional profile, allowing for a more personalized and efficient way to explore my qualifications.",
        techStackUsedInTheProject: 'NextJS, ShadcnUI, TailwindCSS, Langchain, BAAI/bge-small-en-v1.5 embeddings model, FAISS, LangChain Groq, Google’s Gemma 2-9B-IT model',
        picOfTheProj: ChatFolioProjImg,
        livePreviewOfTheProject: 'https://chatfolio-som.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/ChatFolio'
    },
    {
        id: 36,
        nameOfTheProject: 'Scholar Sync',
        descOfTheProject: "Scholar Sync is a web app designed to help students and their parents manage and enhance the study experience. By offering tools for personalized study plans, question-and-answer generation, and organized YouTube study resources, Scholar Sync empowers both students and parents to take control of academic planning. Built with modern web technology, Scholar Sync makes it easy to organize, plan, and access essential learning materials all in one place.",
        techStackUsedInTheProject: 'NextJS, ShadcnUI, TailwindCSS, Kinde Authentication, React-Hook-Form, Zod validation, Prisma ORM, Neon PostgreSQL Database, FastAPI, Groq API, Google’s Gemma 2-9B-IT model',
        picOfTheProj: ScholarSyncProjImg,
        livePreviewOfTheProject: 'https://scholarsync-som.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Scholar-Sync'
    },
    {
        id: 37,
        nameOfTheProject: 'PDFfy AI',
        descOfTheProject: "PDFfy AI is a SaaS application designed to simplify note-taking and question-answering directly from your PDFs. With this app, users can upload PDFs, take notes, and even generate AI-powered answers for selected text, all in a seamless interface. Whether you’re studying, researching, or organizing your thoughts, PDFfy AI is here to make your workflow smarter and more efficient.",
        techStackUsedInTheProject: 'NextJS, ShadcnUI, TailwindCSS, Clerk Authentication, Convex Database, Google Gemini API, TipTap Editor, Langchain, Razorpay',
        picOfTheProj: PDFfyProjImg,
        livePreviewOfTheProject: 'https://pdffy-ai-som.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/PDFfy-AI'
    },
    {
        id: 38,
        nameOfTheProject: 'Gemini Content Wizard',
        descOfTheProject: "Gemini Content Wizard is an AI-powered content generation application designed to simplify your content creation process. Whether you're a blogger, YouTuber, social media manager, or developer, Gemini Content Wizard offers a variety of tools to help you generate high-quality content with ease. Simply input your desired parameters, and let the power of AI craft the perfect output for you.",
        techStackUsedInTheProject: 'NextJS, TailwindCSS, ShadcnUI, Drizzle ORM, Neon Database, Clerk, Google Gemini API',
        picOfTheProj: GeminiContentWizardPic,
        livePreviewOfTheProject: 'https://gemini-content-wizard.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Gemini-Content-Wizard',
    },
    {
        id: 39,
        nameOfTheProject: 'Next Gemini ChatApp',
        descOfTheProject: 'This project is a full stack chatbot application built using modern web development technologies. It uses Next.js for the frontend and integrates the Gemini API to provide chatbot functionalities. The app is designed to offer a seamless and interactive user experience. Along with chat functionality, users can also view detailed histories of each chat session conducted in the past.',
        techStackUsedInTheProject: 'NextJS, TailwindCSS, antd, MongoDB, Zustand, Clerk, Vercel-AI SDK, Google Gemini API',
        picOfTheProj: NextJSGeminiChatAppPic,
        livePreviewOfTheProject: 'https://next-gemini-chat-app.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Next-Gemini-ChatApp',
    },
    {
        id: 40,
        nameOfTheProject: 'OptiMedia Hub',
        descOfTheProject: "OptiMedia Hub is an easy-to-use tool that helps you prepare images and videos for social media. It lets content creators quickly format their media for platforms like Instagram, Twitter, and Facebook. The app uses Cloudinary for processing media, Clerk for user authentication, and Neon PostgreSQL for managing data, all within a simple and friendly interface built with Next.js",
        techStackUsedInTheProject: 'NextJS, Clerk, TailwindCSS, DaisyUI, Cloudinary, Next-Cloudinary, Prisma ORM, Neon Database',
        picOfTheProj: OptiMediaHubPic,
        livePreviewOfTheProject: 'https://optimedia-hub.onrender.com/',
        githubLinkOfTheProject: 'https://github.com/somenath203/OptiMedia-Hub',
    },
    {
        id: 41,
        nameOfTheProject: 'Smart Web Chat',
        descOfTheProject: "Smart Web Chat is a platform designed to facilitate interactive conversations with websites. Powered by the Meta-Llama-3-8B-Instruct Large Language Model, it delivers a smooth and engaging experience for users. Whether you're seeking information or looking for specific answers, Smart Web Chat enhances your interaction with web content through advanced AI capabilities.",
        techStackUsedInTheProject: 'NextJS, TailwindCSS, NextUI, Upstash Redis Database, Upstash RAG Model, Meta-Llama-3-8B-Instruct',
        picOfTheProj: SmartWebChatPic,
        livePreviewOfTheProject: 'https://smart-web-chat.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Smart-Web-Chat',
    },
    {
        id: 42,
        nameOfTheProject: 'PureText',
        descOfTheProject: "PureText is a text analysis tool designed to help developers detect whether a given sentence contains any offensive word or not. This tool can be easily integrated into various applications to ensure safer communication and create a more respectful online environment. Using real-time evaluations powered by Upstash's vector database, PureText quickly identifies potentially toxic or offensive content, providing immediate feedback to users.",
        techStackUsedInTheProject: 'NextJS, TailwindCSS, daisyUI, Upstash Vector Database, HonoJS, Cloudfare Workers',
        picOfTheProj: PureTextProjectPic,
        livePreviewOfTheProject: 'https://pure-text-som.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/PureText'
    },
    {
        id: 43,
        nameOfTheProject: 'Image Text Extractor',
        descOfTheProject: 'This is a web app that lets users extract text from any image and also the user has the option to copy the extracted text in the clipboard as well.',
        techStackUsedInTheProject: 'NextJS, TailwindCSS, daisyUI, FastAPI, pytesseract',
        picOfTheProj: ImageExtractorAppImg,
        livePreviewOfTheProject: 'https://image-text-generator.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Image-Text-Extractor',
    },
    {
        id: 44,
        nameOfTheProject: 'Toxic Comment Classifier',
        descOfTheProject: 'This is a project which categorizes a particular toxic comment entered by the user into mainly 6 categories and those are: toxic, severe_toxic, obscene, threat, insult and identity_hate.',
        techStackUsedInTheProject: 'Flutter, FastAPI, Toxic-Bert HuggingFace Model',
        picOfTheProj: ToxicCommentClassificationProjImg,
        livePreviewOfTheProject: 'https://github.com/somenath203/Toxic-Comment-Classifier?tab=readme-ov-file#demo-video-of-the-project',
        githubLinkOfTheProject: 'https://github.com/somenath203/Toxic-Comment-Classifier',
    },
    {
        id: 45,
        nameOfTheProject: 'Snap Story',
        descOfTheProject: 'Snap Story is a mobile application that creates imaginative short stories from images. With Snap Story, you can simply take or select a photo, and the app will analyze it to generate an engaging story based on the image. The app uses the power of Google Gemini\'s image analysis to interpret the content of the photo and produce a creative short story, making it a fun tool for storytelling and creativity.',
        techStackUsedInTheProject: 'React Native, Expo, NativeWind, Zustand, FastAPI, Google Gemini API',
        picOfTheProj: SnapStoryProjImg,
        livePreviewOfTheProject: 'https://www.youtube.com/shorts/ByOS_1Es0ZA',
        githubLinkOfTheProject: 'https://github.com/somenath203/SnapStory',
    },
    {
        id: 46,
        nameOfTheProject: 'NeuroPad',
        descOfTheProject: 'Snap Story is a mobile application that creates imaginative short stories from images. With Snap Story, you can simply take or select a photo, and the app will analyze it to generate an engaging story based on the image. The app uses the power of Google Gemini\'s image analysis to interpret the content of the photo and produce a creative short story, making it a fun tool for storytelling and creativity.',
        techStackUsedInTheProject: 'NextJS, TailwindCSS, ShadcnUI, Clerk Authentication, Prisma ORM, MongoDB, React-Hook-Form, Zod validation, Pinecone Vector Database, Google Gemini API',
        picOfTheProj: NeuroPadProjImg,
        livePreviewOfTheProject: 'https://neuro-pad-som.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/NeuroPad',
    },
    {
        id: 47,
        nameOfTheProject: 'VidWise',
        descOfTheProject: 'VidWise is a cutting-edge video analysis application powered by Google Gemini 1.5 Flash and PhiData, designed to provide detailed and actionable insights from video content.',
        techStackUsedInTheProject: 'Streamlit, DuckDuckGo-Search, PhiData, Google Generative AI',
        picOfTheProj: VidWiseProjImg,
        livePreviewOfTheProject: 'https://vidwisesomm.streamlit.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/VidWise',
    },
    {
        id: 48,
        nameOfTheProject: 'LogoCraft AI',
        descOfTheProject: 'LogoCraft AI is a web application that enables users to create personalized logos for their websites, apps, or businesses with the help of AI.',
        techStackUsedInTheProject: 'NextJS, TailwindCSS, ShadcnUI, Clerk Authentication, Firebase, Google Gemini API, HuggingFace, Flux-Midjourney-Mix2-LoRA Model, Cashfree Payments',
        picOfTheProj: LogoCraftAIProjImg,
        livePreviewOfTheProject: 'https://www.youtube.com/watch?v=Je7fMf9B2fY',
        githubLinkOfTheProject: 'https://github.com/somenath203/LogoCraft-AI',
    },
    {
        id: 49,
        nameOfTheProject: 'LeadRanker',
        descOfTheProject: 'LeadRanker is a full-stack web application designed to help organizations and companies identify, analyze, and prioritize top developer talent from GitHub. With LeadRanker, users can quickly find developers based on their specific job requirements, generate detailed insights about the leads, and create personalized email communications. The application streamlines the talent search process and makes it easy to download and manage developer data.',
        techStackUsedInTheProject: 'NextJS, TailwindCSS, ShadcnUI, Clerk Authentication, Prisma ORM, Neon Database, Google Gemini API, React Hook Form, Zod Validation, FileSaver.js',
        picOfTheProj: LeadRankerProjImg,
        livePreviewOfTheProject: 'https://lead-ranker-somm.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/leadranker',
    },
    {
        id: 50,
        nameOfTheProject: 'AquaYield AI',
        descOfTheProject: 'AquaYield AI is an advanced, AI-powered solution designed to revolutionize sustainable agriculture by optimizing water usage, tracking environmental conditions, and implementing intelligent irrigation scheduling. By integrating cutting-edge AI technologies, AquaYield AI empowers farmers with actionable insights, helping them make data-driven decisions for efficient farm management.',
        techStackUsedInTheProject: 'NextJS, TailwindCSS, daisyUI, Zustand, Recharts, React-Markdown, Puppeteer-Core, @sparticuz/chromium, FastAPI, Phidata, Google Gemini API, OpenAI API',
        picOfTheProj: AquaYieldAIProjImg,
        livePreviewOfTheProject: 'https://aquayieldaisom.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/aquayieldai',
    },
    {
        id: 51,
        nameOfTheProject: 'QuillSense',
        descOfTheProject: 'QuillSense is an AI-powered handwriting analysis application that helps users understand their handwriting patterns, mood, and overall well-being. This app takes user input, including their full name, age, sleep hours, current mood, exercise history, and a sample photo of their handwriting.',
        techStackUsedInTheProject: 'React Native, Expo, NativeWind, Zustand, FastAPI, Google Gemini API, React Native Chart Kit, Expo Image Picker, Expo Speech, Expo Sharing',
        picOfTheProj: QuillSenseProjImg,
        livePreviewOfTheProject: 'https://www.youtube.com/watch?v=DP3Wns3og7Y',
        githubLinkOfTheProject: 'https://github.com/somenath203/quillsense',
    },
];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center">

      <div className="mt-14 w-4/6 lg:w-1/6">

       <PageHeading heading='AI Projects' />

      </div>

      <WorkCard workArray={aiProjects} />

    </div>
  );
};

export default Page;