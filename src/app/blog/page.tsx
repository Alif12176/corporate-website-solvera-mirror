import { BlogPage } from "@/features/blog/components/BlogPage";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - Solvera.id",
    description: "Blog Solvera.id adalah platform yang menyediakan berbagai artikel dan informasi terkait dengan berbagai topik yang relevan dengan industri IT dan teknologi"
}

export default function Page() {
    return <BlogPage />
}