'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MotionDiv } from '@/components/motion/MotionDiv';
import { getProfileData } from '@/utils/profile';
import { ProfileData } from '@/types/profile';

export default function HomePage() {
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
    <div className="relative isolate">
      {/* Background gradient */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-200 to-blue-800 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Hero content */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {profileData?.hero.title || 'Loading...'}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {profileData?.hero.subtitle || 'Loading...'}
            </p>
            <p className="mt-2 text-base text-gray-500">
              {profileData?.hero.tagline || 'Loading...'}
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href="/experiences"
              className="rounded-md bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View My Experience
            </Link>
            <Link
              href="/reflections"
              className="rounded-md bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Read My Reflections
            </Link>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
