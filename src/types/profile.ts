export interface ProfileData {
    name: string;
    image: string;
    hero: {
        title: string;
        subtitle: string;
        tagline: string;
    };
    about: {
        introduction: string;
        closing: string;
        location: string;
        degreeProgram: string;
        careerAspiration: string;
        linkedIn: string;
        quote: string;
    };
    contact: {
        thankYouNote: string;
        email: string;
    };
} 