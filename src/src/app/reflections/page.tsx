import { Reflection } from '@/types/portfolio';
import { StarReflection } from '@/components/sections/StarReflection';

// Sample reflection data - replace with your actual reflections
const reflection: Reflection = {
    preReflection: 'As I began this semester, I was uncertain about my path in UX design. While I had theoretical knowledge from my coursework, I lacked practical experience and industry connections. I hoped to bridge this gap through active participation in industry events and hands-on workshops.',
    postReflection: {
        experience1: {
            situation: 'I attended a UX Design workshop hosted by a leading tech company.',
            task: 'The workshop required us to redesign a mobile banking app's user interface.',
      action: 'I collaborated with a team of four, conducting user research and creating wireframes.',
            result: 'Our team's design was selected as one of the top three solutions.',
      learningPoints: [
                'Importance of user research in design decisions',
                'Value of collaborative design processes',
                'Real-world application of design principles',
      ],
        },
        experience2: {
            situation: 'I participated in an industry panel discussion with UX leaders.',
            task: 'To learn about current industry trends and network with professionals.',
            action: 'Asked thoughtful questions and connected with speakers afterward.',
            result: 'Gained valuable insights and made two professional connections.',
            learningPoints: [
                'Understanding of industry expectations',
                'Importance of networking',
                'Current UX design trends',
            ],
        },
        conclusion: 'These experiences have transformed my understanding of UX design and strengthened my resolve to pursue this career path. I now have a clearer vision of the industry's expectations and the skills I need to develop.',
  },
};

export default function ReflectionsPage() {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        My Reflections
                    </h2>

                    <div className="mt-10">
                        <h3 className="text-xl font-semibold text-gray-900">Before the Journey Began</h3>
                        <p className="mt-4 text-lg text-gray-600">{reflection.preReflection}</p>
                    </div>

                    <div className="mt-16">
                        <h3 className="text-xl font-semibold text-gray-900">How the Journey Changed Me</h3>

                        <div className="mt-8 space-y-8">
                            <StarReflection
                                title="Experience 1: UX Design Workshop"
                                {...reflection.postReflection.experience1}
                            />

                            <StarReflection
                                title="Experience 2: Industry Panel Discussion"
                                {...reflection.postReflection.experience2}
                            />

                            <div className="bg-white shadow sm:rounded-lg">
                                <div className="px-4 py-5 sm:p-6">
                                    <h3 className="text-lg font-medium leading-6 text-gray-900">Conclusion</h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        {reflection.postReflection.conclusion}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 