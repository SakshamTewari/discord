import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <>
      <div className='text-3xl font-bold text-indigo-500'>Discord</div>;
      <Button className={cn('bg-gray-500' && false)}>Click here !</Button>;
      <ModeToggle />
    </>
  );
}
