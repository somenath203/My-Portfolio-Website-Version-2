import { Alert, AlertTitle } from '@/components/ui/alert';

const PageHeading = ({ heading }) => {
  return (
    <Alert className="bg-transparent font-poppins w-full flex items-center justify-center text-xl text-green-300">
      <AlertTitle className="tracking-wider">
        {heading}
      </AlertTitle>
    </Alert>
  );
};

export default PageHeading;
