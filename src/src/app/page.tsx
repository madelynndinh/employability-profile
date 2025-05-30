import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="relative isolate overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                    <div className="mt-24 sm:mt-32 lg:mt-16">
                        <div className="inline-flex space-x-6">
                            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-500/20">
                                Semester 1, 2025
                            </span>
                        </div>
                    </div>
                    <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Hi, I'm Minh Tam Dinh
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        A passionate student preparing for the professional world. This is my employability profile
                        for Semester 1, 2025 — a journey of learning, engagement, and growth.
                    </p>
                    <div className="mt-10 flex items-center gap-x-6">
                        <Link href="/experiences">
                            <Button variant="primary" size="lg">
                                View My Experience
                            </Button>
                        </Link>
                        <Link href="/reflections">
                            <Button variant="outline" size="lg">
                                Read My Reflections
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                    <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                        <img
                            src="/hero-image.jpg"
                            alt="Portfolio preview"
                            className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
} 