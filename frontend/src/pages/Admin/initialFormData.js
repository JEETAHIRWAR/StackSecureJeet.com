export const initialAboutFormData = {
    name: "",
    email: "",
    mobile: "",
    profileImage: "",
    details: {
        bio: "",
        website: "",
        address: "",
        digitalSignature: "",
        social_media: {
            twitter: "",
            linkedin: "",
            github: "",
            instagram: "",
            facebook: "",
            other: "",
        },
    },
    description: "",
};

export const initialSkillsFormData = {
    skills: [
        {
            proficientIn: [],
            technicalSkills: [],
            softSkills: [],
            toolsAndFrameworks: [],
        },
    ],
};

export const initialProjectsFormData = {
    projects: [
        {
            title: "",
            projectImage: "",
            techStacks: [],
            projectLink: "",
        },
    ],
};

export const initialAcademicFormData = {
    education: [
        {
            collegeName: "",
            location: "",
            degreeName: "",
            percentage: "",
            startDate: null,
            endDate: null,
            fieldOfStudy: "",
            description: "",
        },
    ],
};

export const initialWorkExperienceFormData = {
    experience: [
        {
            jobTitle: "",
            companyName: "",
            startDate: null,
            endDate: null,
            location: "",
            description: "",
        },
    ],
};

export const initialAchievementFormData = {
    achievements: [
        {
            certificateName: "",
            issueDate: null,
            organizationName: "",
            description: "",
            gainedSkills: [],
            liveLink: "",
        },
    ],
};

export const initialMyLearningsFormData = {
    learnings: [
        {
            title: "",
            heading: "",
            summary: "",
            description: "",
            learningsImages: [],
        },
    ],
};

export const initialServicesFormData = {
    serviceName: [
        {
            serviceName: "",
            description: "",
            serviceCoverImage: "",
        },
    ],
};

export const initialBlogFormData = {
    blog: [
        {
            thumbnailImage: "",
            title: "",
            postDate: "",
            blogSummary: "",
        },
    ],
};

export const initialStickyNotesFormData = {
    stickyNotes: [
        {
            title: "",
            content: "",
        },
    ],
};

export const initialTodoFormData = {
    todo: [
        {
            title: "",
            description: "",
            completed: false,
            createdAt: new Date().toISOString(), // Assuming you want to initialize with the current date and time
        },
    ],
};

export const initialResumeFormData = {
    resumeShowcase: [
        {
            resumeLink: "", // Initialize with an empty string or provide a default value
        },
    ],
};

export const initialFaqsFormData = {
    faqs: [
        {
            question: "",
            answer: "",
        },
    ],
};

export const initialCaseStudiesFormData = {
    caseStudies: [
        {
            title: "",
            description: "",
            imageUrl: "",
        },
    ],
};