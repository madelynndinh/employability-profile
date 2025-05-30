'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { getProfileData } from '@/utils/profile';
import { ProfileData } from '@/types/profile';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Reflections', href: '/reflections' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [profileData, setProfileData] = useState<ProfileData | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        async function fetchProfile() {
            try {
                const data = await getProfileData();
                setProfileData(data);
            } catch (error) {
                console.error('Failed to fetch profile data:', error);
            }
        }
        fetchProfile();
    }, []);

    return (
        <header className="bg-white shadow-sm">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-gray-900">
                            {profileData?.name || 'Loading...'}
                        </Link>
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-base font-medium ${pathname === item.href
                                    ? 'text-blue-600'
                                    : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex md:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {mobileMenuOpen ? (
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`block rounded-md px-3 py-2 text-base font-medium ${pathname === item.href
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
} 