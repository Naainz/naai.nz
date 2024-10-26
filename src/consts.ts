export const SITE_TITLE = "Naainz";
export const SITE_DESCRIPTION = "Software developer from GB who loves to code and learn all things tech.";

export interface ProjectProps {
    name: string;
    description: string;
    stack: string;
    repo: string;
    demo?: string;
}

export interface LayoutProps {
    title?: string;
    description?: string;
    image?: string;
    children: any;
}
