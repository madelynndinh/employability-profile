import { Button } from '@/components/ui/Button';

export default function ContactPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Thank You
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Thank you for reviewing my employability profile. Semester 1, 2025 has been a transformative
                        experience that has shaped my professional growth and future aspirations.
                    </p>
                </div>

                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Submission Details</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            This portfolio has been submitted to MyUni as part of the course requirements. All
                            evidence and documentation have been properly archived and submitted through the
                            appropriate channels.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-blue-600">
                                What's included
                            </h4>
                            <div className="h-px flex-auto bg-gray-100" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            <li className="flex gap-x-3">
                                <svg
                                    className="h-6 w-5 flex-none text-blue-600"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Portfolio Website
                            </li>
                            <li className="flex gap-x-3">
                                <svg
                                    className="h-6 w-5 flex-none text-blue-600"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Experience Documentation
                            </li>
                            <li className="flex gap-x-3">
                                <svg
                                    className="h-6 w-5 flex-none text-blue-600"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Reflective Essays
                            </li>
                            <li className="flex gap-x-3">
                                <svg
                                    className="h-6 w-5 flex-none text-blue-600"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Supporting Evidence
                            </li>
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">Connect with me</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <a
                                        href="https://linkedin.com/in/samanthatan"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-5xl font-bold tracking-tight text-gray-900"
                                    >
                                        <Button variant="primary" size="lg" className="w-full">
                                            LinkedIn
                                        </Button>
                                    </a>
                                </p>
                                <p className="mt-6 text-xs leading-5 text-gray-600">
                                    Feel free to connect with me professionally
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}