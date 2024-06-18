'use client';

import PageHeading from '@/app/components/PageHeading';
import WorkCard from '@/app/components/WorkCard';

const Page = () => {

  const aiProjects = [
    {
        id: 1,
        nameOfTheProject: 'Titanic Survival Project',
        descOfTheProject: 'This is a project which predicts weather a particular person would survive the Titanic Disaster or not if he/she was present in Titanic at that point of time.',
        techStackUsedInTheProject: 'React, ChakraUI, FastAPI, Pandas, Seaborn, Scikit-learn',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://titanic-survival-project-frontend.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Titanic-Survival-Project-Frontend'
    },
    {
        id: 2,
        nameOfTheProject: 'House Price Predictor',
        descOfTheProject: 'This is a project which predicts the price of a new house on the basis of Boston House Dataset.',
        techStackUsedInTheProject: 'Streamlit, Pandas, Numpy, Scikit-learn',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://share.streamlit.io/somenath203/a.i.-powered-boston-house-price-predictor-website/main/boston_house_web_app.py',
        githubLinkOfTheProject: 'https://github.com/somenath203/A.I.-Powered-Boston-House-Price-Predictor-Website'
    },
    {
        id: 3,
        nameOfTheProject: 'Student Academic Success Dropout Predictor',
        descOfTheProject: 'This is a project which predicts whether a particular student would dropout or succeed in academics in the future.',
        techStackUsedInTheProject: 'React, TailwindCSS, antd, ExpressJS, MongoDB, FastAPI, Pandas, Numpy, Seaborn, Scikit-learn',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://predict-students-dropout-and-academic-success-frontend.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Predict-students-dropout-and-academic-success-frontend'
    },
    {
        id: 4,
        nameOfTheProject: 'Credit Card Fraud Detection',
        descOfTheProject: 'This is a machine-learning model built with the help of Logistic Regression which helps in detecting fraudulent credit card transactions so that customers are not charged for the items that they did not purchase.',
        techStackUsedInTheProject: 'Numpy, Pandas, Scikit-learn',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://github.com/somenath203/Credit-Card-Fraud-Detection/blob/main/credit_card_fraud_detection.ipynb',
        githubLinkOfTheProject: 'https://github.com/somenath203/Credit-Card-Fraud-Detection'
    },
    {
        id: 5,
        nameOfTheProject: 'Spam Email Detection',
        descOfTheProject: 'This is a machine-learning model built with the help of Logistic Regression which helps in detecting whether a particular email is spam or not.',
        techStackUsedInTheProject: 'Numpy, Pandas, Scikit-learn',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://github.com/somenath203/Spam-Email-Detection/blob/main/spam_email_detection.ipynb',
        githubLinkOfTheProject: 'https://github.com/somenath203/Spam-Email-Detection'
    },
    {
        id: 6,
        nameOfTheProject: 'Sonar Rock VS Mine Prediction',
        descOfTheProject: 'This is a machine-learning model that helps a submarine predict whether the thing beneath it is a rock or a naval mine. Here, the prediction is made based on the data received from sonar signals that bounce back to the submarine after interacting with the underwater object.',
        techStackUsedInTheProject: 'Numpy, Pandas, Scikit-learn',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://github.com/somenath203/Sonar-Rock-VS-Mine-Prediction/blob/main/sonar_rock_vs_mine_prediction.ipynb',
        githubLinkOfTheProject: 'https://github.com/somenath203/Sonar-Rock-VS-Mine-Prediction'
    },
    {
        id: 7,
        nameOfTheProject: 'Loan Status Prediction',
        descOfTheProject: 'This is a project created with the help of NextJS, fastAPI and Random forest classifier Model which enables bank employees predict whether an applicant is eligible for receiving loan or not.',
        techStackUsedInTheProject: 'NextJS, TailwindCSS, antd, FastAPI, Numpy, Pandas, Seaborn, Scikit-learn',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://loan-status-prediction-frontend.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Loan-Status-Prediction-Frontend'
    },
    {
        id: 8,
        nameOfTheProject: 'Gold Price Prediction',
        descOfTheProject: 'This is a project created with the help of ReactJS, fastAPI and Random forest Regressor Model which predicts the price of gold based on certain input.',
        techStackUsedInTheProject: 'ReactJS, antd, FastAPI, Pandas, Matplotlib, Seaborn, Scikit-learn',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://gold-price-detection.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Gold-Price-Prediction'
    },
    {
        id: 9,
        nameOfTheProject: 'Parkinson\'s Disease Prediction',
        descOfTheProject: 'This is a project created with the help of ReactJS, fastAPI and Support Vector Classifier Model which predicts whether a person is having Parkinson\'s Disease or not.',
        techStackUsedInTheProject: 'ReactJS, FastAPI, Numpy, Pandas, Scikit-learn',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://parkinson-disease-predictor.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/vishal815/Parkinsons-Disease-Detection'
    },
    {
        id: 10,
        nameOfTheProject: 'Spam SMS Prediction',
        descOfTheProject: 'This is a project created with the help of NextJS, TailwindCSS, fastAPI and Multinomial Naive Bayes Classifier Model which predicts whether a SMS is spam or not.',
        techStackUsedInTheProject: 'NextJS, TailwindCSS, FastAPI, Numpy, Pandas, Matplotlib, Seaborn, NLTK, Scikit-learn',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://spam-sms-predictor-frontend.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Spam-SMS-Predictor-Frontend'
    },
    {
        id: 11,
        nameOfTheProject: 'Suicide Depression Predictor',
        descOfTheProject: 'The Suicide Depression Predictor is a healthcare project that uses machine learning to predict the risk of suicide and depression in individuals.',
        techStackUsedInTheProject: 'ReactJS, TailwindCSS, FastAPI, Numpy, Pandas, Matplotlib, Seaborn, NLTK, Scikit-learn',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://suicidal-thought-and-depression-predictor-frontend.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Suicide-Depression-Predictor'
    },
    {
        id: 12,
        nameOfTheProject: 'Air Quality Predictor',
        descOfTheProject: 'Air Quality Predictor is a machine learning project designed to help predict the quality of the air based on four parameters: year, month, day, and hour of the measurement.',
        techStackUsedInTheProject: 'ReactJS, TailwindCSS, FastAPI, Pandas, Matplotlib, Seaborn, Scikit-learn',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://air-quality-predictor.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Air-Quality-Predictor'
    },
    {
        id: 13,
        nameOfTheProject: 'Skin Lesion Segmentation OpenCV',
        descOfTheProject: 'This repository contains the code for segmenting skin lesions images using OpenCV. Skin lesion segmentation is one of the first steps towards automatic Computer-Aided Diagnosis of skin cancer.',
        techStackUsedInTheProject: 'Numpy, Matplotlib, OpenCV',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://github.com/somenath203/Skin-Lesion-Segmentation-OpenCV/blob/main/skin_lesion_segmentation_multiple_image_computer_vision_project.ipynb',
        githubLinkOfTheProject: 'https://github.com/somenath203/Skin-Lesion-Segmentation-OpenCV'
    },
    {
        id: 14,
        nameOfTheProject: 'Clustering News Unsupervised Machine Learning',
        descOfTheProject: 'This is a machine learning project which uses unsupervised machine learning algorithms such as k-means, k-medoids and agglomerative hierarchical clustering to group news articles into clusters based on their respective types.',
        techStackUsedInTheProject: 'Numpy, Pandas, Matplotlib, NLTK, Scikit-learn, FastAPI',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://fake-news-pred.onrender.com/docs',
        githubLinkOfTheProject: 'https://github.com/somenath203/Clustering-News-Unsupervised-Machine-Learning'
    },
    {
        id: 15,
        nameOfTheProject: 'Text Summarizer using Transformers',
        descOfTheProject: 'This is a application which is created with the help of Gradio whose work is to summarize text articles with the help of \'Summarization Pipeline\' provided by Transformer.',
        techStackUsedInTheProject: 'Transformers, Gradio',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://som11-text-summary-using-gradio-and-transformer.hf.space/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Text-Summarizer-using-Transformers-and-Gradio'
    },
    {
        id: 16,
        nameOfTheProject: 'CNN with MNIST Dataset',
        descOfTheProject: 'This is a project which is created with the help of Tensorflow and Convolutional Neural Network (CNN) that classifies handwritten digits from the MNIST dataset.',
        techStackUsedInTheProject: 'Tensorflow, Sequential, CNN',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://github.com/somenath203/CNN-with-MNIST-Dataset/blob/main/cnn_on_mnist.ipynb',
        githubLinkOfTheProject: 'https://github.com/somenath203/CNN-with-MNIST-Dataset'
    },
    {
        id: 17,
        nameOfTheProject: 'CNN with CIFAR-10 Dataset',
        descOfTheProject: 'This is a project that utilizes Convolutional Neural Network (CNN) to classify images from the CIFAR-10 dataset, which comprises 60,000 32x32 color images across 10 different classes, including airplanes, cars, birds, cats, deer, dogs, frogs, horses, ships, and trucks.',
        techStackUsedInTheProject: 'Tensorflow, Sequential, CNN',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://github.com/somenath203/CNN_With_CIFAR_10_Dataset/blob/main/CNN_with_CIFAR_10_Dataset.ipynb',
        githubLinkOfTheProject: 'https://github.com/somenath203/CNN_With_CIFAR_10_Dataset'
    },
    {
        id: 18,
        nameOfTheProject: 'Binaryclass Brain Tumor Classification',
        descOfTheProject: 'This is a project which uses Tensorflow, Convolutional Neural Network (CNN), and Streamlit to analyze MRI images of Brain and detect the presence or absence of Tumors.',
        techStackUsedInTheProject: 'Tensorflow, Sequential, CNN, Streamlit',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://som11-brain-tumor-classification-using-cnn.hf.space',
        githubLinkOfTheProject: 'https://github.com/somenath203/Brain-Tumor-Classification-using-CNN'
    },
    {
        id: 19,
        nameOfTheProject: 'Predicting Future Retail Sales of Clothing Stores using LSTM',
        descOfTheProject: 'This is a project which uses Tensorflow and Long Short Term Memory(LSTM), a type of Recurrent Neural Network(RNN), to forecast the future retail sales of clothing and clothing accessory stores.',
        techStackUsedInTheProject: 'Tensorflow, Sequential, LSTM',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://github.com/somenath203/Predicting-Future-Retail-Sales-of-Clothing-Stores-using-LSTM/blob/main/Predicting%20Future%20Retail%20Sales%20of%20Clothing%20using%20LSTM.ipynb',
        githubLinkOfTheProject: 'https://github.com/somenath203/Predicting-Future-Retail-Sales-of-Clothing-Stores-using-LSTM'
    },
    {
        id: 20,
        nameOfTheProject: 'Removing Noise from MNIST handwritten digit images using Autoencoder',
        descOfTheProject: 'This project demonstrates how to use autoencoder a type of neural network, to remove noise from images of handwritten digits of the MNIST dataset.',
        techStackUsedInTheProject: 'Tensorflow, Sequential, Autoencoder',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://github.com/somenath203/Removing-Noise-from-MNIST-handwritten-digit-images-using-Autoencoder/blob/main/removing_noise_from_MNIST_handwritten_digit_images_using_autoencoder.ipynb',
        githubLinkOfTheProject: 'https://github.com/somenath203/Predicting-Future-Retail-Sales-of-Clothing-Stores-using-LSTM'
    },
    {
        id: 21,
        nameOfTheProject: 'Multiclass Brain Tumor Classification',
        descOfTheProject: 'This is a project which uses deep learning algorithm to classify the type of tumor present in the brain MRI image. The model is only able to detect three type of tumors as of now i.e. glioma, meningioma and pituitary.',
        techStackUsedInTheProject: 'Tensorflow, CNN, Transfer learning, Ensemble Learning, NextJS, FastAPI',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://multiclass-brain-tumor-classification.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Binaryclass-Brain-Tumor-Classification-using-CNN'
    },
    {
        id: 22,
        nameOfTheProject: 'Satellite Image Classifier',
        descOfTheProject: "The aim of this project is to classify satellite images into their respective categories i.e. 'Cloudy', 'Desert', 'Green Area' and 'Water' using Convolutional Neural Networks (CNNs) implemented with TensorFlow.",
        techStackUsedInTheProject: 'Tensorflow, CNN, Transfer learning, Gradio',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://som11-satellite-image-classification.hf.space',
        githubLinkOfTheProject: 'https://github.com/somenath203/satellite-image-classification-using-tensorflow'
    },
    {
        id: 23,
        nameOfTheProject: 'Language Identifier',
        descOfTheProject: "This is a deep learning project created with the help of Tensorflow that predicts the language of a given text snippet.",
        techStackUsedInTheProject: 'Tensorflow, Transfer learning, Ensemble Learning, Gradio',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://som11-language-predictor.hf.space',
        githubLinkOfTheProject: 'https://github.com/somenath203/Language-Identifier-using-Tensorflow'
    },
    {
        id: 24,
        nameOfTheProject: 'Malaria Image Cell Classification',
        descOfTheProject: "This is a deep learning project created with the help of Tensorflow that predicts the language of a given text snippet.",
        techStackUsedInTheProject: 'Tensorflow, CNN, Transfer learning, Ensemble Learning, NextJS, ExpressJS, Razorpay',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://malaria-cell-classifier.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/malaria-cell-image-classification'
    },
    {
        id: 25,
        nameOfTheProject: 'Named Entity Recognizer',
        descOfTheProject: "This project is designed to help you extract and categorize named entities from text using state-of-the-art NLP models like dslim/bert-base-NER and Spacy's en_core_web_sm model.",
        techStackUsedInTheProject: 'Transformers, Spacy, Streamlit',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://som11-named-entity-recognition.hf.space/',
        githubLinkOfTheProject: 'https://github.com/somenath203/Named-Entity-Recognizer'
    },
    {
        id: 26,
        nameOfTheProject: 'Tomato Leaf Disease Classification',
        descOfTheProject: "In this project, deep learning techniques are used to detect and classify diseases in tomato leaves. This project is designed to help farmers know more about the health of their crops, providing valuable insights for effective crop management.",
        techStackUsedInTheProject: 'Tensorflow, Transfer Learning, Ensemble Learning, ReactJS, TailwindCSS, Transfer Learning, ExpressJS, FastAPI',
        picOfTheProj: '',
        livePreviewOfTheProject: 'https://healthy-tomato.vercel.app/',
        githubLinkOfTheProject: 'https://github.com/somenath203/tomato-disease-classification-ten-classes'
    },
];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center">

      <div className="mt-14 w-1/6">

       <PageHeading heading='AI Projects' />

      </div>

      <WorkCard workArray={aiProjects} />

    </div>
  );
};

export default Page;