'use client';

import { Tab } from '@headlessui/react';
import { MotionDiv } from '@/components/motion';
import Image from 'next/image';

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
                            Before Semester 1, I perceived my skills as adequate but untested in real-world scenarios. I believed my technical knowledge was solid, yet I lacked confidence in networking and navigating the professional landscape. Activities like the JuniorDev Adelaide Panel Event and The Big Meet significantly reshaped this view. Engaging with industry professionals and recruiters highlighted the importance of soft skills, like communication and adaptability, which I initially undervalued. These experiences revealed gaps in my practical knowledge and interview techniques, prompting me to actively refine my resume and networking approach. Now, I recognize the tech industry demands continuous learning and proactive engagement. This shift has instilled a more realistic and ambitious perspective on my career, driving me to seek further opportunities for growth and skill development. I now prioritize not just technical proficiency but also networking and professional development as essential components of my career journey.                        </p>
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
                                Experience #1: JuniorDev Adelaide Panel Event
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
                                Experience #2: The Big Meet Student Careers Fair
                            </Tab>
                        </Tab.List>
                        <Tab.Panels className="mt-6">
                            <Tab.Panel className="rounded-xl bg-white p-6 shadow">
                                <h3 className="text-lg font-medium text-gray-900">JuniorDev Adelaide Panel Event</h3>
                                <dl className="mt-4 space-y-6">
                                    <div>
                                        <dt className="font-medium text-gray-900">Situation</dt>
                                        <dd className="mt-2 text-gray-600">
                                            On May 15, 2025, I attended the JuniorDev Adelaide Panel Event at Flinders University City Campus. The event was designed to help students and early-career professionals launch their careers in technology. The panel featured engineers, AI experts, and HR leaders, including Jamie Sherrah, who is not only an industry leader but also my current internship host.
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-gray-900">Task</dt>
                                        <dd className="mt-2 text-gray-600">
                                            My goal was to gain practical insights into the tech industry, especially regarding how to secure my first role, excel in interviews, and understand the evolving impact of AI on tech careers. Additionally, I aimed to expand my professional network by connecting with both panelists and fellow attendees.
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-gray-900">Action</dt>
                                        <dd className="mt-2 text-gray-600">
                                            I actively participated in the event by preparing questions in advance, engaging with panelists during the Q&A session, and networking with other attendees afterward. Knowing Jamie Sherrah personally gave me the confidence to approach other panelists and industry professionals, which I might have hesitated to do otherwise. I took detailed notes on the advice shared, particularly around interview preparation and teamwork in tech environments.
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-gray-900">Result</dt>
                                        <dd className="mt-2 text-gray-600">
                                            The event provided me with a clearer understanding of the tech industry's expectations and the skills most valued by employers. I learned specific strategies for standing out in interviews and was inspired by the panelists' diverse career journeys. Most importantly, I left the event with several new professional connections, including senior engineers and HR representatives, which expanded my network significantly.
                                        </dd>
                                        <dd className="mt-4">
                                            <div className="rounded-lg border border-gray-200 p-4">
                                                <h4 className="mb-2 font-medium text-gray-900">Evidence: LinkedIn Connections</h4>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <Image
                                                        src="/images/linkedIn/1.png"
                                                        alt="LinkedIn connection with Simon Cook from Encode Talent"
                                                        width={400}
                                                        height={300}
                                                        className="rounded-lg"
                                                    />
                                                    <Image
                                                        src="/images/linkedIn/2.png"
                                                        alt="LinkedIn connection with Meghan Ede from Comwire IT"
                                                        width={400}
                                                        height={300}
                                                        className="rounded-lg"
                                                    />
                                                </div>
                                            </div>
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-gray-900">Learning/Personal Development</dt>
                                        <dd className="mt-2 text-gray-600">
                                            This experience profoundly impacted my confidence and approach to career development. Hearing firsthand from industry leaders demystified the recruitment process and made the tech industry feel more accessible. I realized the importance of networking and how personal connections can open doors. As a result, I have become more proactive in seeking out networking opportunities and engaging with professionals in my field. My communication skills improved as I practiced introducing myself and articulating my interests to strangers. The event also motivated me to stay updated on industry trends, especially in AI, which I now follow more closely.
                                        </dd>
                                    </div>
                                </dl>
                            </Tab.Panel>
                            <Tab.Panel className="rounded-xl bg-white p-6 shadow">
                                <h3 className="text-lg font-medium text-gray-900">The Big Meet Student Careers Fair</h3>
                                <dl className="mt-4 space-y-6">
                                    <div>
                                        <dt className="font-medium text-gray-900">Situation</dt>
                                        <dd className="mt-2 text-gray-600">
                                            On March 28, 2025, I attended The Big Meet Student Careers Fair at the Adelaide Convention Centre. The event brought together up to 100 top organizations offering graduate employment, internships, and other opportunities. Many employers were closing applications soon, making this a critical event for career planning.
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-gray-900">Task</dt>
                                        <dd className="mt-2 text-gray-600">
                                            My objective was to explore potential employers, particularly targeting leading companies like Maptek, EY, BHP, and KPMG. I aimed to learn about their graduate programs, understand their recruitment processes, and make meaningful connections with recruiters. My goals were comprehensive: I needed to research and identify companies that aligned with my technical interests and career goals, gather detailed information about their internship programs and application processes, make a strong first impression by preparing tailored questions for each company, and collect feedback on my resume and interview preparation strategy.
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-gray-900">Action</dt>
                                        <dd className="mt-2 text-gray-600">
                                            My preparation for the career fair was thorough and methodical. I developed a compelling one-minute elevator pitch highlighting my technical skills and project experience, while also creating a professional resume specifically tailored for tech roles. I invested time in researching each target company's recent projects and tech stack, and prepared specific questions about their graduate programs and company culture.

                                            During the fair itself, I implemented a strategic approach to maximize my interactions. I took advantage of the Quiet Hour to have more focused conversations with recruiters, during which I asked detailed questions about their tech stack and development methodologies. I shared my portfolio and discussed relevant projects that aligned with each company's interests. After each meaningful conversation, I took detailed notes to ensure effective follow-up and made a point to connect with recruiters on LinkedIn within 24 hours of meeting them, maintaining the momentum of our initial interactions.
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-gray-900">Result</dt>
                                        <dd className="mt-2 text-gray-600">
                                            My strategic approach at The Big Meet yielded significant outcomes across multiple fronts. I successfully submitted applications to several graduate programs, each carefully personalized based on my interactions at the fair. The feedback I received on my resume proved invaluable, leading to meaningful improvements in how I presented my technical skills and experiences. Through these interactions, I established valuable connections with technical recruiters and hiring managers, gaining insider knowledge about assessment centers and technical interviews that would prove crucial in my application journey.

                                            Perhaps most importantly, I developed a clear understanding of different companies' tech cultures and values, while building a robust professional network on LinkedIn with both recruiters and current graduates. This experience was transformative in helping me identify which organizations best aligned with my career aspirations and gave me newfound confidence in navigating professional networking events. The connections and insights gained continue to influence my career development strategy.
                                        </dd>
                                        <dd className="mt-4">
                                            <div className="rounded-lg border border-gray-200 p-4">
                                                <h4 className="mb-2 font-medium text-gray-900">Evidence: LinkedIn Interactions</h4>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <Image
                                                        src="/images/linkedIn/3.png"
                                                        alt="LinkedIn interaction with Saumil about KPMG Vacationer Program"
                                                        width={400}
                                                        height={300}
                                                        className="rounded-lg"
                                                    />
                                                    <Image
                                                        src="/images/linkedIn/4.png"
                                                        alt="LinkedIn interaction about AI Cadet Program"
                                                        width={400}
                                                        height={300}
                                                        className="rounded-lg"
                                                    />
                                                </div>
                                            </div>
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-gray-900">Learning/Personal Development</dt>
                                        <dd className="mt-2 text-gray-600">
                                            This event marked a turning point in my professional development. I became more comfortable initiating conversations with recruiters and learned how to present myself effectively. The feedback I received helped me refine my resume and application strategy. I also developed a better understanding of the competitive nature of graduate recruitment and the importance of early preparation. Personally, I grew more resilient in handling rejection and more determined to seek out opportunities actively rather than waiting for them to come to me.
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
                        Overall Impact and Changes
                    </h3>
                    <p className="mt-4 text-lg text-gray-700">
                        Reflecting on these experiences, I see significant growth in both my personal and professional life. Professionally, I am now more strategic in my job search and more confident in networking and self-presentation. Personally, I have developed greater self-awareness, resilience, and motivation to pursue my goals. These experiences have taught me the value of stepping out of my comfort zone, being proactive, and continuously seeking learning opportunities. As a result, I am better prepared for future challenges and more optimistic about my career prospects in the tech industry. I plan to continue building on these experiences by attending more industry events, seeking mentorship, and staying engaged with the professional community.
                    </p>
                </div>
            </MotionDiv>
        </div>
    );
} 