import { Alert, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Page = () => {
  const cards = [
    {
      id: 1,
      cardName: 'Programming Languages',
      cardDescription:
        'Click the button below to checkout the skills related to programming languages.',
    },
    {
      id: 2,
      cardName: 'Web Development',
      cardDescription:
        'Click the button below to checkout the skills related to web development.',
    },
    {
      id: 3,
      cardName: 'App Development',
      cardDescription:
        'Click the button below to checkout the skills related to app development.',
    },
    {
      id: 4,
      cardName: 'Artificial Intelligence',
      cardDescription:
        'Click the button below to checkout the skills related to artificial intelligence.',
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col gap-14 items-center">
      <div className="mt-14 w-1/6">
        <Alert className="bg-transparent font-poppins w-full flex items-center justify-center text-xl text-green-300">
          <AlertTitle className="tracking-wider">My Skills</AlertTitle>
        </Alert>
      </div>

      <div className="grid grid-cols-2 w-9/12 items-center gap-x-8 gap-y-8">
        {cards.map((card) => (
          <div className="w-full" key={card.id}>
            <Card className="font-poppins w-full bg-white/5">
              <CardHeader className="text-center flex flex-col gap-3">
                <CardTitle className="text-green-200">
                  {card.cardName}
                </CardTitle>
                <CardDescription className="text-white">
                  {card.cardDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex items-center justify-center">
                <Button
                  variant="ghost"
                  className="border-2 border-green-500 text-white uppercase tracking-wider hover:bg-slate-800 transition-all duration-150 text-base hover:text-white py-6 w-3/4 flex items-center justify-center gap-2"
                >
                  <span>Click Here</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
