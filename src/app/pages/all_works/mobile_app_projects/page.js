'use client';

import { Alert, AlertTitle } from '@/components/ui/alert';

const Page = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-11 items-center">

      <div className="mt-14 w-1/6">

        <Alert className="bg-transparent font-poppins w-full flex items-center justify-center text-xl text-green-300">
          <AlertTitle className="tracking-wider">MobieApp Projects</AlertTitle>
        </Alert>

      </div>

    </div>
  );
};

export default Page;
