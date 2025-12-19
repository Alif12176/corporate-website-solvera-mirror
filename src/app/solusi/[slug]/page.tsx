import { notFound } from "next/navigation";
import { getSolutionBySlug } from "@/features/solusi/api/solusi";
import { SolusiDetailPage } from "@/features/solusi/components/SolusiDetailPage";

// export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
//     const { slug } = await params;
//     const data = await getSolutionBySlug(slug);

//     if (!data) {
//         return {
//             title: "Solusi Tidak Ditemukan",
//         };
//     }

//     return {
//         title: `${data.hero.title} | Solvera`,
//         description: data.hero.description,
//     };
// }


export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = await getSolutionBySlug(slug);

    if (!data) {
        return notFound();
    }

    return (
        <main className="flex flex-col w-full">
            <SolusiDetailPage solution={data} />
        </main>
    );
}
