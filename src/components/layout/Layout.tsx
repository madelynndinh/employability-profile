'use client';

import { ReactNode, useEffect, useState } from 'react';
import Header from './Header';
import { getProfileData } from '@/utils/profile';
import { ProfileData } from '@/types/profile';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const [profileData, setProfileData] = useState<ProfileData | null>(null);

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
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>
            <footer className="bg-white mt-auto">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                    <div className="text-center text-sm text-gray-500">
                        <p>© {new Date().getFullYear()} {profileData?.name || 'Loading...'}. All rights reserved.</p>
                        <p className="mt-2">
                            Employability Profile - Semester 1, 2025
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
} 