'use client';

import { MotionDiv } from '@/components/motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import ActivityModal from '@/components/ui/ActivityModal';
import { useActivities } from '@/hooks/useActivities';

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

export default function ExperiencesPage() {
    const { activities, loading, error } = useActivities();
    const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);
    const [activeFilter, setActiveFilter] = useState('All Activities');
    const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Update filtered activities when activities change
    useEffect(() => {
        if (activities.length > 0) {
            if (activeFilter === 'All Activities') {
                setFilteredActivities(activities);
            } else {
                setFilteredActivities(
                    activities.filter((activity) => activity.category === activeFilter)
                );
            }
        }
    }, [activities, activeFilter]);

    const handleFilter = (category: string) => {
        setActiveFilter(category);
    };

    const handleActivityClick = (activity: Activity) => {
        setSelectedActivity(activity);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedActivity(null);
    };

    const filters = ['All Activities', 'Workshops', 'Industry Events', 'University Sessions', 'Work Experience', 'Job Application'];

    if (loading) {
        return (
            <div className="py-12">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Experiences & Activities
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">Loading activities...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-12">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Experiences & Activities
                    </h1>
                    <p className="mt-4 text-lg text-red-600">Error loading activities: {error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="py-12">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Experiences & Activities
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    A collection of my industry engagements, workshops, and learning experiences.
                </p>

                {/* Filter Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => handleFilter(filter)}
                            className={`rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition-colors ${activeFilter === filter
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Activity Grid */}
                <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredActivities.map((activity) => (
                        <MotionDiv
                            key={activity.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex flex-col overflow-hidden rounded-lg bg-white shadow cursor-pointer hover:shadow-lg transition-shadow duration-200"
                            onClick={() => handleActivityClick(activity)}
                        >
                            {activity.image && activity.image.length > 0 && (
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    className="h-48 w-full"
                                >
                                    {activity.image.map((imgSrc, index) => (
                                        <SwiperSlide key={index} className="relative h-full w-full">
                                            <Image
                                                src={imgSrc}
                                                alt={`${activity.title} - image ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                priority={index === 0}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                            <div className="flex flex-1 flex-col justify-between p-6">
                                <div className="flex-1">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {activity.title}
                                    </h3>
                                    <div className="mt-2 flex items-center text-sm text-gray-500">
                                        <svg
                                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
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
                                    <div className="mt-2 flex items-center text-sm text-gray-500">
                                        <svg
                                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
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
                                    <p className="mt-3 text-base text-gray-500 line-clamp-3">{activity.summary}</p>
                                </div>
                                {activity.certificate && (
                                    <div className="mt-6">
                                        <span className="text-sm font-medium text-blue-600">
                                            Certificate Available
                                        </span>
                                    </div>
                                )}
                                <div className="mt-4">
                                    <span className="text-sm text-blue-600 font-medium hover:text-blue-500">
                                        Click to view details →
                                    </span>
                                </div>
                            </div>
                        </MotionDiv>
                    ))}
                </div>
            </MotionDiv>

            {/* Activity Detail Modal */}
            <ActivityModal
                activity={selectedActivity}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
} 