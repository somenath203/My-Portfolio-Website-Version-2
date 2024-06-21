'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';

import PageHeading from '@/app/components/PageHeading';
import firebaseDB from '@/firebaseConfig';


const Page = () => {

  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [messageOfUser, setMessageOfUser] = useState('');

  const [loading, setLoading] = useState();


  const onSubmitForm = async (e) => {

    e.preventDefault();

    try {

      const responseDetail = {
        fullName: fullName,
        emailAddress: emailAddress,
        messageOfUser: messageOfUser
      };

      setLoading(true);

      await addDoc(collection(firebaseDB, 'feedbackDetailsOfUsers'), responseDetail);

      setLoading(false);

      toast.success('Thank you for filling out the form✌️. Your details has been saved successfully⭐.', {
        position: "top-center",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      
    } catch (error) {

      setLoading(false);
      
      toast.error(`Firebase: ${error?.message}. Please try again later.`, {
        position: "top-center",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

    }

    setFullName('');
    setEmailAddress('');
    setMessageOfUser('');
    setLoading();

  }

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center">

      <div className="mt-14 w-4/6 lg:w-1/6">
        <PageHeading heading="Connect With Me" />
      </div>

      <div className="w-11/12 lg:w-3/5">

        <form className="w-full flex flex-col gap-6" onSubmit={onSubmitForm}>

          <div className="flex flex-col gap-3">
            <Label className="text-white">Full Name</Label>
            <Input
              type="text"
              value={fullName}
              placeholder="enter your fullname"
              className="bg-transparent text-white"
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label className="text-white">Email Address</Label>
            <Input
              type="email"
              value={emailAddress}
              placeholder="enter your email address"
              className="bg-transparent text-white"
              onChange={(e) => setEmailAddress(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-3">
            <Label className="text-white">Your Message</Label>
            <Textarea
              className="bg-transparent h-40 text-white resize-none"
              value={messageOfUser}
              placeholder="drop your message here"
              onChange={(e) => setMessageOfUser(e.target.value)}
              required
            />
          </div>

          {loading ? <i className="fa-solid fa-spinner text-white text-center text-2xl transition-all animate-spin duration-700"></i> : <Button
            variant="outline"
            className="bg-transparent p-6 text-lg font-poppins tracking-wide text-white hover:text-white hover:bg-slate-800 transition-all duration-200"
          >
            Submit
          </Button>}
        </form>
      </div>

      <p className="text-white text-xl lg:text-2xl text-center font-poppins tracking-wide">
        ------------ OR ------------
      </p>

      <div className="mb-10 text-center text-lg lg:text-xl text-white font-poppins tracking-widest flex flex-col gap-1 items-center justify-center">
        <span className="h-0.5 bg-white mb-4 w-72 lg:w-80"></span>
        <span>
          Click{' '}
          <a
            href="mailto:somenathchoudhury38@gmail.com"
            target="_blank"
            className="text-green-400 font-semibold"
          >
            HERE
          </a>{' '}
          to email me directly
        </span>
        <span className="h-0.5 bg-white my-4 w-72 lg:w-80"></span>
      </div>
    </div>
  );
};

export default Page;
