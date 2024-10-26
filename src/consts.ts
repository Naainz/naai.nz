export const SITE_TITLE = "Naainz";
export const SITE_DESCRIPTION = "Passionate and very knowledgable full-stack developer with a strong background in web development and experience in building web applications.";

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
