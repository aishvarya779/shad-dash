import { Button } from '@/components/ui/button';
import { CirclePlus } from 'lucide-react';
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button variant="destructive" className="rounded-full text-dash-primary" size="lg">
        <CirclePlus />
        Click me
      </Button>
    </div>
  );
}
