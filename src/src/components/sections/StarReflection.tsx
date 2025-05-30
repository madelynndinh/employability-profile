interface StarReflectionProps {
    title: string;
    situation: string;
    task: string;
    action: string;
    result: string;
    learningPoints: string[];
}

export function StarReflection({
    title,
    situation,
    task,
    action,
    result,
    learningPoints,
}: StarReflectionProps) {
    return (
        <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>

                <div className="mt-5 space-y-6">
                    <div>
                        <h4 className="font-medium text-gray-900">Situation</h4>
                        <p className="mt-2 text-sm text-gray-500">{situation}</p>
                    </div>

                    <div>
                        <h4 className="font-medium text-gray-900">Task</h4>
                        <p className="mt-2 text-sm text-gray-500">{task}</p>
                    </div>

                    <div>
                        <h4 className="font-medium text-gray-900">Action</h4>
                        <p className="mt-2 text-sm text-gray-500">{action}</p>
                    </div>

                    <div>
                        <h4 className="font-medium text-gray-900">Result</h4>
                        <p className="mt-2 text-sm text-gray-500">{result}</p>
                    </div>

                    <div>
                        <h4 className="font-medium text-gray-900">Learning Points</h4>
                        <ul className="mt-2 list-disc list-inside space-y-1">
                            {learningPoints.map((point, index) => (
                                <li key={index} className="text-sm text-gray-500">
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
} 