'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

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

      toast.success('Thank you for filling out the form. Your details has been saved successfully.', {
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
    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center px-4">

      <div className="mt-14 w-4/6 lg:w-1/6">
        <PageHeading heading="Connect With Me" />
      </div>

      <p className="font-mono text-sm text-slate-500 -mt-6">
        <span className="text-green-400">{'//'}</span> let&apos;s build something together
      </p>

      <div className="w-11/12 lg:w-4/5 mb-14 grid lg:grid-cols-5 gap-8 items-start">

        <motion.div
          className="lg:col-span-2 flex flex-col gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-3">
            <h3 className="text-white text-xl font-poppins font-semibold">
              Have a project in mind or just want to say hi?
            </h3>
            <p className="text-slate-400 font-poppins leading-relaxed">
              Fill out the form and I&apos;ll get back to you as soon as I can.
            </p>
          </div>

          <div className="border border-slate-800 rounded-2xl bg-slate-950/60 p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                <FaEnvelope size={18} />
              </span>
              <span className="text-white font-poppins font-medium">Prefer email?</span>
            </div>
            <p className="text-slate-400 text-sm font-poppins">
              Reach out directly and I&apos;ll reply within a day or two.
            </p>
            <a href="mailto:somenathchoudhury38@gmail.com" target="_blank" className="text-center border-2 border-green-400 text-green-400 rounded-lg py-2.5 font-poppins font-medium hover:bg-green-400 hover:text-slate-900 transition-all duration-200">
              somenathchoudhury38@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-3 border border-slate-800 rounded-2xl bg-slate-950/40 p-6 sm:p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <form className="w-full flex flex-col gap-6" onSubmit={onSubmitForm}>

            <div className="flex flex-col gap-3">
              <Label className="text-white">Full Name</Label>
              <Input
                type="text"
                value={fullName}
                placeholder="enter your fullname"
                className="bg-transparent text-white border-slate-700 focus-visible:ring-green-400"
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
                className="bg-transparent text-white border-slate-700 focus-visible:ring-green-400"
                onChange={(e) => setEmailAddress(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col gap-3">
              <Label className="text-white">Your Message</Label>
              <Textarea
                className="bg-transparent h-40 text-white resize-none border-slate-700 focus-visible:ring-green-400"
                value={messageOfUser}
                placeholder="drop your message here"
                onChange={(e) => setMessageOfUser(e.target.value)}
                required
              />
            </div>

            {loading ? (
              <i className="fa-solid fa-spinner text-green-400 text-center text-2xl transition-all animate-spin duration-700"></i>
            ) : (
              <Button
                variant="outline"
                className="bg-transparent border-2 border-green-400 p-6 text-lg font-poppins tracking-wide text-green-400 hover:text-slate-900 hover:bg-green-400 transition-all duration-200 flex items-center justify-center gap-2"
              >
                Submit
                <FaPaperPlane size={14} />
              </Button>
            )}
          </form>
        </motion.div>

      </div>
    </div>
  );
};

export default Page;