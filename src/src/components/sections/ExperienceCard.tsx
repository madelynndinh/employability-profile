import { Experience } from '@/types/portfolio';
import { Button } from '../ui/Button';

interface ExperienceCardProps {
    experience: Experience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
    return (
        <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
            {experience.imageUrl && (
                <div className="flex-shrink-0">
                    <img
                        className="h-48 w-full object-cover"
                        src={experience.imageUrl}
                        alt={experience.title}
                    />
                </div>
            )}
            <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                    <p className="text-sm font-medium text-blue-600">
                        {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
                    </p>
                    <div className="mt-2">
                        <h3 className="text-xl font-semibold text-gray-900">{experience.title}</h3>
                        <p className="mt-3 text-base text-gray-500">{experience.summary}</p>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="sr-only">Date</span>
                            <svg
                                className="h-5 w-5 text-gray-400"
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
                        </div>
                        <div className="ml-2 flex space-x-4">
                            <p className="text-sm text-gray-500">{experience.date}</p>
                            <p className="text-sm text-gray-500">{experience.location}</p>
                        </div>
                    </div>
                    {experience.evidenceUrl && (
                        <div className="mt-4">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(experience.evidenceUrl, '_blank')}
                            >
                                View Evidence
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}