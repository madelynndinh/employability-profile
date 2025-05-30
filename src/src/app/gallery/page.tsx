import { GalleryItem } from '@/types/portfolio';
import { Button } from '@/components/ui/Button';

// Sample gallery data - replace with your actual gallery items
const galleryItems: GalleryItem[] = [
    {
        id: '1',
        title: 'UX Design Workshop',
        date: 'March 15, 2025',
        type: 'workshop',
        imageUrl: '/gallery/workshop1.jpg',
        description: 'Working on user interface wireframes during the workshop.',
    },
    {
        id: '2',
        title: 'Industry Panel Discussion',
        date: 'April 2, 2025',
        type: 'industry',
        imageUrl: '/gallery/panel.jpg',
        description: 'Networking with industry professionals after the panel discussion.',
    },
    // Add more gallery items as needed
];

export default function GalleryPage() {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Gallery</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Visual documentation of my journey and experiences.
                    </p>
                </div>

                <div className="mt-8 flex justify-center space-x-4">
                    <Button variant="secondary" size="sm">
                        All
                    </Button>
                    <Button variant="ghost" size="sm">
                        Workshops
                    </Button>
                    <Button variant="ghost" size="sm">
                        Industry
                    </Button>
                    <Button variant="ghost" size="sm">
                        University
                    </Button>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                        >
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="absolute inset-0 -z-10 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                            <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                <time dateTime={item.date} className="mr-8">
                                    {item.date}
                                </time>
                                <div className="-ml-4 flex items-center gap-x-4">
                                    <span className="capitalize">{item.type}</span>
                                </div>
                            </div>
                            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                                <span className="absolute inset-0" />
                                {item.title}
                            </h3>
                            {item.description && (
                                <p className="mt-2 text-sm leading-6 text-gray-300">{item.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 