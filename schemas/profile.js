import { BiUser } from "react-icons/bi";
import { defineField } from "sanity";

export default {
    name: "profile",
    title: "Profile",
    type: "document",
    icon: BiUser,
    fields: [
        defineField({
            name: "fullName",
            title: "Full Name",
            type: "string",
            validation: rule => rule.required(),
        }),
        defineField({
            name: "headline",
            title: "Job Title",
            type: "string",
            description: "In one short sentence, what do you do?",
            validation: Rule => Rule.required().min(40).max(50),
        }),
        {
            name: "profileImage",
            title: "Profile Image",
            type: "image",
            description: "Upload a profile picture",
            options: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string",
                },
            ],
        },
        {
            name: "shortBio",
            title: "Short Bio",
            type: "text",
            rows: 4,
        },
        {
            name: "email",
            title: "Email Address",
            type: "string",
        },
        {
            name: "location",
            title: "Location",
            type: "string",
        },
        {
            name: "fullBio",
            title: "Full Bio",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "resumeURL",
            title: "Upload Resume",
            type: "file",
        },
        {
            name: "socialLinks",
            title: "Social Links",
            type: "object",
            description: "Add your social media links:",
            fields: [
                {
                    name: "facebook",
                    title: "Facebook URL",
                    type: "url",
                    initialValue: "https://facebook.com/",
                },
                {
                    name: "instagram",
                    title: "Instagram URL",
                    type: "url",
                    initialValue: "https://instagram.com/",
                },
                {
                    name: "twitter",
                    title: "Twitter URL",
                    type: "url",
                    initialValue: "https://twitter.com/",
                },
                {
                    name: "linkedin",
                    title: "Linkedin URL",
                    type: "url",
                    initialValue: "https://linkedin.com/in/",
                },
                {
                    name: "github",
                    title: "Github URL",
                    type: "url",
                    initialValue: "https://github.com/",
                },
                {
                    name: "freelancer",
                    title: "Freelancer URL",
                    type: "url",
                    initialValue: "https://freelancer.com/",
                },
                {
                    name: "upwork",
                    title: "Upwork URL",
                    type: "url",
                    initialValue: "https://upwork.com/",
                },
            ],
            options: {
                collapsed: false,
                collapsible: true,
                columns: 2,
            },
        },
        {
            name: "skills",
            title: "Skills",
            type: "array",
            description: "Add a list of skills",
            of: [{ type: "string" }],
        },
    ],
};
