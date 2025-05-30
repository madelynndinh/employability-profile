import { Profile } from '@/types/portfolio';

const profile: Profile = {
    name: 'Minh Tam Dinh',
    title: 'Future UX Designer',
    location: 'Sydney, Australia',
    degree: 'Bachelor of Design (Digital Technologies)',
    careerAspiration: 'UX/UI Designer in Tech Industry',
    linkedIn: 'https://linkedin.com/in/samanthatan',
    introduction: 'I am a passionate design student with a keen interest in creating user-centered digital experiences. Currently pursuing my degree, I combine creativity with technical skills to solve real-world problems through design thinking and innovative solutions.',
    quote: 'Success is where preparation and opportunity meet.',
    profileImage: '/profile.jpg',
};

export default function AboutPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Me</h2>
                    <div className="mt-6 flex items-center gap-x-6">
                        <img
                            src={profile.profileImage}
                            alt={profile.name}
                            className="h-40 w-40 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-lg leading-8 text-gray-600">{profile.introduction}</p>
                            {profile.quote && (
                                <blockquote className="mt-6 border-l-2 border-gray-200 pl-6 italic text-gray-500">
                                    {profile.quote}
                                </blockquote>
                            )}
                        </div>
                    </div>
                </div>

                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="flex flex-col-reverse">
                        <dt className="text-base leading-7 text-gray-600">Location</dt>
                        <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            {profile.location}
                        </dd>
                    </div>
                    <div className="flex flex-col-reverse">
                        <dt className="text-base leading-7 text-gray-600">Degree Program</dt>
                        <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            {profile.degree}
                        </dd>
                    </div>
                    <div className="flex flex-col-reverse">
                        <dt className="text-base leading-7 text-gray-600">Career Aspiration</dt>
                        <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            {profile.careerAspiration}
                        </dd>
                    </div>
                    {profile.linkedIn && (
                        <div className="flex flex-col-reverse">
                            <dt className="text-base leading-7 text-gray-600">Connect</dt>
                            <dd className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                <a
                                    href={profile.linkedIn}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800"
                                >
                                    LinkedIn
                                </a>
                            </dd>
                        </div>
                    )}
                </dl>
            </div>
        </div>
    );
} 