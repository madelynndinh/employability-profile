'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getProfileData } from '@/utils/profile';
import { ProfileData } from '@/types/profile';

export default function ContactPage() {
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
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mx-auto max-w-3xl text-center"
            >
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Thank You
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    {profileData?.contact.thankYouNote || 'Loading...'}
                </p>

                {/* Submission Details */}
                <div className="mt-12 rounded-lg bg-gray-50 p-8 text-left">
                    <h2 className="text-xl font-semibold text-gray-900">Submission Details</h2>
                    <div className="mt-6 space-y-4">
                        <div>
                            <dt className="font-medium text-gray-900">MyUni Submission Status</dt>
                            <dd className="mt-1 text-gray-600">
                                ✅ Submitted on June 10, 2025
                            </dd>
                        </div>
                        <div>
                            <dt className="font-medium text-gray-900">Portfolio Website</dt>
                            <dd className="mt-1 text-gray-600">
                                ✅ All sections completed and reviewed
                            </dd>
                        </div>
                        <div>
                            <dt className="font-medium text-gray-900">Supporting Documents</dt>
                            <dd className="mt-1 text-gray-600">
                                ✅ All certificates and evidence uploaded
                            </dd>
                        </div>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="mt-12">
                    <h2 className="text-xl font-semibold text-gray-900">Let's Connect</h2>
                    <p className="mt-4 text-gray-600">
                        I'm always open to connecting with fellow professionals, industry experts,
                        and potential collaborators.
                    </p>
                    <div className="mt-8 flex justify-center space-x-6">
                        <Link
                            href={profileData?.about.linkedIn || "#"}
                            className="text-gray-600 hover:text-gray-900"
                        >
                            <span className="sr-only">LinkedIn</span>
                            <svg
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </Link>
                        <a
                            href={`mailto:${profileData?.contact.email || ''}`}
                            className="text-gray-600 hover:text-gray-900"
                        >
                            <span className="sr-only">Email</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Final Note */}
                <div className="mt-12 rounded-lg bg-blue-50 p-8">
                    <p className="text-lg font-medium text-blue-900">
                        "This portfolio represents not just my academic achievements, but my
                        commitment to continuous learning and professional development. I look
                        forward to applying these experiences in my future career."
                    </p>
                    <p className="mt-4 text-sm text-blue-700">— {profileData?.name || 'Loading...'}</p>
                </div>
            </motion.div>
        </div>
    );
} 