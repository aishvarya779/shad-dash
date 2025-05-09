import { Button } from '@/components/ui/button';
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button variant="ghost" className="absolute top-4 left-4">
        Click me
      </Button>
    </div>
  );
}
