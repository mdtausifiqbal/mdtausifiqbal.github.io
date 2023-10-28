import { groq } from "next-sanity";
import { cache } from "react";
import client from "./sanity.client";

let fetchCount = 0;

export const getProfile = cache(async () => {
    const data = await client.fetch(
        groq`*[_type == "profile"]{
          _id,
          fullName,
          headline,
          profileImage {alt, "image": asset->url},
          shortBio,
          location,
          fullBio,
          email,
          "resumeURL": resumeURL.asset->url,
          socialLinks,
          skills
        }`,
    );
    fetchCount++;
    console.log(`[${fetchCount}] Fetching Profile...`);
    return data[0];
});

export const getProjects = cache(async () => {
    const projects = await client.fetch(
        groq`*[_type == "project" &&  listed] {
      _id,
      name,
      shortDescription,
      thumbnail { alt, "image": asset->url},
      projectUrl,
      liveDemoUrl,
    }`,
    );
    return projects;
});
