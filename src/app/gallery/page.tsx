'use client';

import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { MotionDiv } from '@/components/motion/MotionDiv';
import { useActivities } from '@/hooks/useActivities';

interface GalleryImage {
    id: string;
    src: string;
    title: string;
    date: string;
    category: string;
    activityTitle: string;
    evidence?: {
        type: string;
        items: string[];
    };
    learningOutcomes?: string[];
    certificate?: string;
}

export default function GalleryPage() {
    const { activities, loading: activitiesLoading, error } = useActivities();
    const [activeFilter, setActiveFilter] = useState<string>('All');

    // Memoize the processed images to prevent unnecessary recalculation
    const images = useMemo(() => {
        if (!activities.length) return [];

        const allImages: GalleryImage[] = [];
        activities.forEach((activity) => {
            activity.image.forEach((imagePath, index) => {
                allImages.push({
                    id: `${activity.id}-${index}`,
                    src: imagePath,
                    title: `${activity.title} - Image ${index + 1}`,
                    date: activity.date,
                    category: activity.category,
                    activityTitle: activity.title,
                });
            });
        });
        return allImages;
    }, [activities]);

    // Memoize filtered images
    const filteredImages = useMemo(() => {
        if (activeFilter === 'All') return images;
        return images.filter(image => image.category === activeFilter);
    }, [images, activeFilter]);

    // Memoize categories
    const categories = useMemo(() =>
        ['All', ...Array.from(new Set(activities.map(activity => activity.category)))],
        [activities]
    );

    // Filter images based on category
    const handleFilterChange = (category: string) => {
        setActiveFilter(category);
    };

    if (activitiesLoading) {
        return (
            <div className="py-12">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Gallery
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">Loading images...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="py-12">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Gallery
                    </h1>
                    <p className="mt-4 text-lg text-red-600">Error loading images: {error}</p>
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
                    Gallery
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Visual documentation of my journey through workshops, events, and learning experiences.
                </p>

                {/* Filter Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleFilterChange(category)}
                            className={`rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition-colors ${activeFilter === category
                                ? 'bg-blue-600 text-white hover:bg-blue-500'
                                : 'bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Images Count */}
                <div className="mt-6">
                    <p className="text-sm text-gray-500">
                        Showing {filteredImages.length} of {images.length} images
                    </p>
                </div>

                {/* Image Grid */}
                <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredImages.map((image) => (
                        <MotionDiv
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="group relative overflow-hidden rounded-lg bg-white shadow"
                        >
                            <div className="aspect-h-3 aspect-w-4 relative h-[300px]">
                                <Image
                                    src={image.src}
                                    alt={image.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <h3 className="text-lg font-semibold">{image.activityTitle}</h3>
                                <p className="mt-1 text-sm">{image.date}</p>
                                <p className="mt-1 text-sm text-blue-200">{image.category}</p>
                                {image.evidence && (
                                    <div className="mt-2">
                                        <h4 className="text-sm font-semibold text-green-300">Evidence:</h4>
                                        <ul className="text-xs list-disc list-inside">
                                            {image.evidence.items.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {image.learningOutcomes && (
                                    <div className="mt-2">
                                        <h4 className="text-sm font-semibold text-yellow-300">Learning Outcomes:</h4>
                                        <ul className="text-xs list-disc list-inside">
                                            {image.learningOutcomes.map((outcome, idx) => (
                                                <li key={idx}>{outcome}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                                {image.certificate && (
                                    <a
                                        href={image.certificate}
                                        className="mt-2 inline-block text-xs bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Certificate
                                    </a>
                                )}
                            </div>
                        </MotionDiv>
                    ))}
                </div>

                {/* No images message */}
                {filteredImages.length === 0 && (
                    <div className="mt-10 text-center">
                        <p className="text-gray-500">No images found for the selected category.</p>
                    </div>
                )}
            </MotionDiv>
        </div>
    );
} 