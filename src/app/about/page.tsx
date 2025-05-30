'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MotionDiv } from '@/components/motion/MotionDiv';
import { getProfileData } from '@/utils/profile';
import { ProfileData } from '@/types/profile';

export default function AboutPage() {
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
        <div className="py-12">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-1 gap-12 lg:grid-cols-2"
            >
                {/* Profile Photo */}
                <div className="relative h-[700px] overflow-hidden rounded-lg">
                    <Image
                        src={profileData?.image ? `/${profileData.image}` : "/placeholder-profile.jpg"}
                        alt={profileData?.name || "Profile"}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Profile Content */}
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        About Me
                    </h1>

                    <div className="mt-6 text-lg leading-8 text-gray-600">
                        <p>
                            {profileData?.about.introduction || 'Loading...'}
                        </p>
                        <p className="mt-4">
                            {profileData?.about.closing || 'Loading...'}
                        </p>
                    </div>

                    {/* Quick Highlights */}
                    <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                        <div className="border-l-4 border-blue-600 pl-4">
                            <dt className="text-sm font-medium text-gray-500">Location</dt>
                            <dd className="mt-1 text-base font-semibold text-gray-900">{profileData?.about.location || 'Loading...'}</dd>
                        </div>
                        <div className="border-l-4 border-blue-600 pl-4">
                            <dt className="text-sm font-medium text-gray-500">Degree Program</dt>
                            <dd className="mt-1 text-base font-semibold text-gray-900">{profileData?.about.degreeProgram || 'Loading...'}</dd>
                        </div>
                        <div className="border-l-4 border-blue-600 pl-4">
                            <dt className="text-sm font-medium text-gray-500">Career Aspiration</dt>
                            <dd className="mt-1 text-base font-semibold text-gray-900">{profileData?.about.careerAspiration || 'Loading...'}</dd>
                        </div>
                        <div className="border-l-4 border-blue-600 pl-4">
                            <dt className="text-sm font-medium text-gray-500">LinkedIn</dt>
                            <dd className="mt-1 text-base font-semibold text-gray-900">
                                <Link href={profileData?.about.linkedIn || "#"} className="text-blue-600 hover:text-blue-500">
                                    View Profile
                                </Link>
                            </dd>
                        </div>
                    </dl>

                    {/* Quote Box */}
                    <blockquote className="mt-10 border-l-4 border-blue-600 pl-4 italic text-gray-900">
                        "{profileData?.about.quote || 'Loading...'}"
                    </blockquote>
                </div>
            </MotionDiv>
        </div>
    );
} 