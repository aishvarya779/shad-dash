import { Moon } from 'lucide-react';
import Link from 'next/link';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

const Navbar = () => {
    return (
        <nav className="p-4 flex align-center justify-between">
            {/* LFT Side */}
            collapseButton
            {/* Right Side */}
            <div className='flex items-center gap-4'>
                <Link href="#">Dashboard</Link>
                <Moon />
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </nav>
    )
}

export default Navbar;