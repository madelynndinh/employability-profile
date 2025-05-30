'use client';

import Modal from './Modal';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface Activity {
    id: number;
    title: string;
    date: string;
    location: string;
    summary: string;
    image: string[];
    certificate: string | null;
    category: string;
}

interface ActivityModalProps {
    activity: Activity | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ActivityModal({ activity, isOpen, onClose }: ActivityModalProps) {
    if (!activity) return null;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={activity.title}
            size="xl"
        >
            <div className="space-y-6">
                {/* Images */}
                {activity.image && activity.image.length > 0 && (
                    <div className="relative">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={0}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            className="h-80 w-full rounded-lg"
                        >
                            {activity.image.map((imgSrc, index) => (
                                <SwiperSlide key={index} className="relative h-full w-full">
                                    <Image
                                        src={imgSrc}
                                        alt={`${activity.title} - image ${index + 1}`}
                                        fill
                                        className="object-cover rounded-lg"
                                        priority={index === 0}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                )}

                {/* Activity Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Date & Time</h4>
                            <div className="mt-1 flex items-center text-gray-900">
                                <svg
                                    className="mr-2 h-5 w-5 flex-shrink-0 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                {activity.date}
                            </div>
                        </div>

                        <div>
                            <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Location</h4>
                            <div className="mt-1 flex items-center text-gray-900">
                                <svg
                                    className="mr-2 h-5 w-5 flex-shrink-0 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                {activity.location}
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide">Category</h4>
                        <div className="mt-1">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                {activity.category}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div>
                    <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">Description</h4>
                    <p className="text-gray-700 leading-relaxed">{activity.summary}</p>
                </div>

                {/* Certificate Link */}
                {activity.certificate && (
                    <div className="pt-4 border-t border-gray-200">
                        <a
                            href={activity.certificate}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 hover:border-blue-300 transition-colors"
                        >
                            <svg
                                className="mr-2 h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                            </svg>
                            View Certificate
                            <svg
                                className="ml-1 h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                            </svg>
                        </a>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex justify-end pt-4 border-t border-gray-200">
                    <button
                        type="button"
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </Modal>
    );
} 