import type { Project } from "$lib/data/projects";

/** Get a link for a cloudflare hosted image */
export const makeImageLink = (imageID: string): string =>
    `https://imagedelivery.net/zthi1l8fKrUGB5ig08mq-Q/${imageID}/public`;

/** Get a link for a cloudflare hosted image */
export const getProjectImage = (project: Project): string =>
    "imageID" in project ? makeImageLink(project.imageID) : project.imageLink;
