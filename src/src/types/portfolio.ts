export interface Experience {
    id: string;
    title: string;
    date: string;
    location: string;
    type: 'workshop' | 'industry' | 'university' | 'other';
    summary: string;
    evidenceUrl?: string;
    imageUrl?: string;
}

export interface Profile {
    name: string;
    title: string;
    location: string;
    degree: string;
    careerAspiration: string;
    linkedIn?: string;
    cv?: string;
    introduction: string;
    quote?: string;
    profileImage?: string;
}

export interface Reflection {
    preReflection: string;
    postReflection: {
        experience1: {
            situation: string;
            task: string;
            action: string;
            result: string;
            learningPoints: string[];
        };
        experience2: {
            situation: string;
            task: string;
            action: string;
            result: string;
            learningPoints: string[];
        };
        conclusion: string;
    };
}

export interface GalleryItem {
    id: string;
    title: string;
    date: string;
    type: 'workshop' | 'industry' | 'university' | 'other';
    imageUrl: string;
    description?: string;
} 