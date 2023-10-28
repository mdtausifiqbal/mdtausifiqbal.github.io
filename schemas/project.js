import { BiPackage } from "react-icons/bi";
import { defineField } from "sanity";

const project = {
  name: "project",
  title: "Project",
  description: "Project Schema",
  type: "document",
  icon: BiPackage,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the name of the project",
    },
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "string",
      validation: (rule) => rule.max(120).required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    {
      name: "thumbnail",
      title: "Thumbnail",
      type: "image",
    },
    {
        name: "screenshots",
        Title: "Upload Screenshots",
        type: "array",
        description: "Upload more than one screenshots",
        of: [{ type: "image" }],
    }, 
    {
      name: "projectUrl",
      title: "Project URL",
      type: "url",
    },
    {
      name: "liveDemoUrl",
      title: "Live Demo URL",
      type: "url",
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "Upload a cover image for this project",
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
      name: "description",
      title: "Description",
      type: "array",
      description: "Write a full description about this project",
      of: [{ type: "block" }],
    },
    {
        name: "pinned",
        title: "Pinned",
        description: "In top projects listing will be done",
        type: "boolean"
    },
    {
        name: "featured",
        title: "Featured",
        description: "In featured projects listing will be done",
        type: "boolean"
    },
    {
        name: "listed",
        title: "Listed",
        description: "Disbale/Enable listing of projects into the portfolio",
        type: "boolean"
    },
    {
        name: "labels",
        title: "Labels",
        type: "array",
        of: [{type: "string"}]
    },
    {
        name: "category",
        title: "Project Category",
        type: "string",
        options: {
          list: ["Website", "Web App", "Mobile App", "Desktop App", "Chrome Extension", "ChatBot"]
        },
        validation: (rule) => rule.required(),
    },
    {
        name: "technologies",
        title: "Technologies",
        type: "array",
        of: [{type: "string"}]
    },
  ],
};

export default project;