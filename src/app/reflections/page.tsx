'use client';

import { Tab } from '@headlessui/react';
import { MotionDiv } from '@/components/motion';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function ReflectionsPage() {
    return (
        <div className="py-12">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Reflections
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    My journey of personal and professional growth throughout the semester.
                </p>

                {/* Pre-Reflection Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-gray-900">Before the Journey Began</h2>
                    <div className="mt-6 rounded-lg bg-blue-50 p-6">
                        <p className="text-lg text-gray-700">
                        When I first embarked on this journey, I was filled with both excitement and uncertainty. My primary goal was to gain practical experience as a software developer and begin building meaningful connections within the tech industry. I aimed to bridge the gap between what I had learned academically and the demands of real-world development environments, while also sharpening the soft skills crucial for thriving in a collaborative setting.
                        </p>
                        <p className="mt-4 text-lg text-gray-700">
                        I recognized that I needed to improve my ability to work effectively in development teams and gain confidence in explaining my code and technical decisions to both technical and non-technical stakeholders. Additionally, I wanted to explore different areas within software development—such as frontend, backend, and DevOps—to better understand where my true interests and strengths lie.


                        </p>
                    </div>
                </div>

                {/* Post-Reflection Section */}
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-gray-900">How the Journey Changed Me</h2>

                    <Tab.Group as="div" className="mt-6">
                        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white text-blue-700 shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                Experience #1: InjectAI Internship
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white text-blue-700 shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                Experience #2: ExpertEase Work Experience
                            </Tab>
                        </Tab.List>
                        <Tab.Panels className="mt-6">
                            <Tab.Panel className="rounded-xl bg-white p-6 shadow">
                                <h3 className="text-lg font-medium text-gray-900"> InjectAI Internship</h3>
                                <dl className="mt-4 space-y-6">
                                    <div>
                                        <dt className="font-medium text-gray-900">Situation</dt>
                                        <dd className="mt-2 text-gray-600">
                                        As an intern at InjectAI, I joined a team building a customized chatbot powered by a Retrieval-Augmented Generation (RAG) pipeline. Early in the project, we hit a major roadblock: the system often retrieved irrelevant or low-quality information, leading to poor user responses.
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-gray-900">Task</dt>
                                        <dd className="mt-2 text-gray-600">
                                        I was responsible for enhancing the system’s retrieval quality. My challenge was to analyze the performance bottlenecks and implement strategies that would make the chatbot’s responses more accurate, contextual, and helpful.
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-gray-900">Action</dt>
                                        <dd className="mt-2 text-gray-600">
                                        I dove deep into designing and testing different retrieval mechanisms—keyword-based, vector-based, and hybrid retrievers—and integrated a LLM-powered reranking module to further refine the results. I also initiated and led the development of a benchmarking framework to evaluate retrieval performance consistently. Working collaboratively with my team, we turned experimentation into iteration, balancing speed with rigor.
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-gray-900">Result</dt>
                                        <dd className="mt-2 text-gray-600">
                                        The final solution led to a 60% improvement in response relevance and consistency. Our chatbot’s accuracy and user trust improved significantly, resulting in a successful deployment for internal workspace communication.
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-gray-900">Learning/Pivot</dt>
                                        <dd className="mt-2 text-gray-600">
                                        This experience deepened my understanding of how critical retrieval quality is in LLM-based applications. It also strengthened my skills in designing evaluation frameworks, integrating AI components, and working cross-functionally with a technical team. I learned how to approach ambiguous problems methodically and how to iterate quickly based on data-driven insights.
                                        </dd>
                                    </div>
                                </dl>
                            </Tab.Panel>
                            <Tab.Panel className="rounded-xl bg-white p-6 shadow">
                                <h3 className="text-lg font-medium text-gray-900">ExpertEase Work Experience</h3>
                                <dl className="mt-4 space-y-6">
                                    <div>
                                        <dt className="font-medium text-gray-900">Situation</dt>
                                        <dd className="mt-2 text-gray-600">
                                        At ExpertEaseAi, I worked on a chatbot platform designed to support NDIS providers. While the chatbot was functional, the user interface lacked polish and accessibility features, which limited adoption and client satisfaction.

                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-gray-900">Task</dt>
                                        <dd className="mt-2 text-gray-600">
                                        My responsibility was to revamp the chatbot’s front-end to improve engagement, accessibility, and alignment with client needs. This involved collaborating closely with clients and the backend team to deliver a seamless and user-friendly experience.                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-gray-900">Action</dt>
                                        <dd className="mt-2 text-gray-600">
                                        I used React and Next.js to redesign the UI, focusing on responsiveness, performance, and key accessibility improvements like keyboard navigation, ARIA roles, and screen reader support. I maintained continuous client communication to iterate on UI/UX based on their feedback. Additionally, I worked alongside the backend team to integrate APIs hosted on Azure efficiently.                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-gray-900">Result</dt>
                                        <dd className="mt-2 text-gray-600">
                                        The improved UI and accessibility features attracted over 30 NDIS providers, significantly boosting platform adoption. Client satisfaction increased, and the project established a new usability and inclusivity standard for the product.                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-gray-900">Learning/Pivot</dt>
                                        <dd className="mt-2 text-gray-600">
                                        This experience taught me the importance of accessibility and client collaboration in front-end development. I gained hands-on experience balancing technical implementation with user-centric design and learned how iterative feedback can drive meaningful improvements.


                                        </dd>
                                    </div>
                                </dl>
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>

                {/* Final Reflection */}
                <div className="mt-12 rounded-lg bg-gray-50 p-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                        How these experiences changed my personal and professional outlook
                    </h3>
                    <p className="mt-4 text-lg text-gray-700">
                    Through my work at InjectAI and ExpertEaseAi, I have grown significantly both personally and professionally. At InjectAI, tackling the complexities of optimizing a RAG pipeline taught me how to approach technical challenges methodically and the importance of data-driven iteration. It strengthened my problem-solving mindset and deepened my appreciation for collaborative teamwork in AI development.

Meanwhile, at ExpertEaseAi, enhancing the chatbot’s user interface and accessibility highlighted the critical role of user-centered design and empathetic communication. I learned how to balance technical skills with client needs, ensuring that solutions are not only functional but inclusive and engaging.

Together, these experiences have helped me embrace challenges as opportunities for growth, sharpen my communication and leadership skills, and develop a holistic perspective that bridges AI innovation with user experience. Most importantly, I discovered a genuine passion for building impactful, user-focused technology that makes a meaningful difference in people’s lives.
                    </p>
                </div>
            </MotionDiv>
        </div>
    );
} 