import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Me' },
    { href: '/experiences', label: 'Experiences' },
    { href: '/reflections', label: 'Reflections' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
];

export function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-xl font-bold text-gray-900">
                                Minh Tam Dinh
                            </Link>
                            <span className="ml-2 text-sm text-gray-500">Future UX Designer</span>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={twMerge(
                                    'inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2',
                                    pathname === item.href
                                        ? 'border-blue-500 text-gray-900'
                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                )}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
} 