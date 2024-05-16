import mongoose from "mongoose";

// Define schema for admin data
const adminDataSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    about: [{
        // title: {
        //     type: String,
        //     required: true
        // },
        name: {
            type: String,
            required: [true, 'Name is required'],
        },
        mobile: {
            type: String,
            unique: true,
            required: [true, 'Mobile number is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
        },
        profileImage: {
            type: String
        },
        details: [{
            bio: {
                type: String,
                required: true
            },
            website: {
                type: String,
            },
            address: {
                type: String,
            },
            digitalSignature: {
                type: String
            },
            social_media: [{
                twitter: {
                    type: String
                },
                linkedin: {
                    type: String
                },
                github: {
                    type: String
                },
                instagram: {
                    type: String
                },
                facebook: {
                    type: String
                },
                other: {
                    type: String
                },
            }]

        }],
        description: {
            type: String,
            required: true
        },
    }],
    skills: [{
        proficientIn: {
            type: [String],
            default: []
        },
        technicalSkills: {
            type: [String],
            default: []
        },
        softSkills: {
            type: [String],
            default: []
        },
        toolsAndFrameworks: {
            type: [String],
            default: []
        }
    }],
    projects: [{
        projectId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Projects"
        },
        title: {
            type: String,
            required: true
        },
        projectImage: {
            type: String,
            // Assuming this is a URL from cloudinary
        },
        techStacks: {
            type: [String],
            default: []
        },
        projectLink: {
            type: String
        }
    }],
    education: [{
        collegeName: {
            type: String
        },
        location: {
            type: String
        },
        degreeName: {
            type: String
        },
        percentage: {
            type: String
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        fieldOfStudy: {
            type: String
        },
        description: {
            type: String
        },
    }],
    experience: [{
        jobTitle: {
            type: String
        },
        companyName: {
            type: String
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        location: {
            type: String
        },
        description: {
            type: String
        },
    }],
    achievements: [{
        certificateName: {
            type: String
        },
        issueDate: {
            type: Date
        },
        organizationName: {
            type: String
        },
        description: {
            type: String
        },
        gainedSkills: {
            type: [String]
        },
        liveLink: {
            type: String
        }
    }],
    learnings: [{
        title: {
            type: String
        },
        heading: {
            type: String
        },
        summary: {
            type: String
        },
        description: {
            type: String
        },
        learningsImages: {
            type: [String]
        },
    }],
    services: [{
        serviceName: {
            type: String
        },
        serviceCoverImage: {
            type: [String]
        },
        description: {
            type: String
        },
    }],
    blog: [{
        thumbnailImage: {
            type: String
        }, // URL or file path for thumbnail image
        title: {
            type: String
        },
        postDate: {
            type: Date
        },
        blogSummary: {
            type: String
        },
    }],
    stickyNotes: [{
        title: {
            type: String
        },
        content: {
            type: String
        },
    }],
    todo: [{
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: '',
        },
        completed: {
            type: Boolean,
            default: false,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    }],
    resumeShowcase: [{
        resumeLink: {
            type: String, // pdf, formats
            required: true
        },
    }],
    faqs: [{
        question: {
            type: String
        },
        answer: {
            type: String
        },
    }],
    CaseStudies: [{
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imageUrl: {
            type: [String],
            required: true
        },
    }],
}, { timestamps: true });

// Export admin data schema
export default mongoose.model("AdminData", adminDataSchema);












// import aboutSchema from "./about.model"
// import skillsSchema from "./skills.model"
// import projectSchema from "./projects.model"
// import educationSchema from "./education.model"
// import experienceSchema from "./experience.model"
// import achievementsSchema from "./experience.model"
// import learningsSchema from "./learnings.model"
// import servicesSchema from "./services.model"
// import blogSchema from "./blog.model"
// import stickyNotesSchema from "./stickyNotes.model"
// import todoSchema from "./todo.model"
// import resumeSchema from "./resume.model"
// import faqsSchema from "./faqs.model"

// export { aboutSchema, skillsSchema, projectSchema, educationSchema, experienceSchema, achievementsSchema, learningsSchema, servicesSchema, blogSchema, stickyNotesSchema, todoSchema, resumeSchema, faqsSchema }