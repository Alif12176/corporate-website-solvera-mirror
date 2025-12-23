"use client";

import React, { useState, useEffect } from 'react';
import { BlogSidebar } from './BlogSidebar';
import { BlogCard } from './BlogCard';
import { Button, Spinner } from "@heroui/react";
import { useArticles } from '../hooks/useBlog';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

export const BlogMainContent = () => {
    const [page, setPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("");
    const limit = 6;

    const { data, isLoading, isError, isFetching } = useArticles({
        page,
        limit,
        category: selectedCategory !== "" ? selectedCategory : undefined
    });

    const articles = data?.data?.items || [];
    const hasMore = data?.data?.has_more || false;

    useEffect(() => {
        if (!isFetching) {
            const element = document.getElementById('blog-content-start');
            if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [page, selectedCategory, isFetching]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setPage(1);
    };

    return (
        <section className="bg-background min-h-screen">
            <div id="blog-content-start" className="h-1"></div>

            <div className='container mx-auto py-12 md:py-16 px-page-global'>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

                    {/* Sidebar */}
                    <div className="lg:col-span-1 order-2 lg:order-1">
                        <div className={isFetching ? "opacity-50 pointer-events-none transition-opacity" : "transition-opacity"}>
                            <BlogSidebar
                                selectedCategory={selectedCategory}
                                onSelectCategory={handleCategoryChange}
                            />
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 order-1 lg:order-2 flex flex-col gap-12 relative min-h-[500px]">

                        {isFetching && !isLoading && (
                            <div className="absolute inset-0 z-10 bg-white/60 backdrop-blur-[1px] flex justify-center items-start pt-32 rounded-xl transition-all duration-300">
                                <div className="bg-white p-4 rounded-full shadow-lg flex items-center gap-3">
                                    <Spinner size="sm" color="primary" />
                                    <span className="text-sm font-medium text-brand-primary">Memuat data...</span>
                                </div>
                            </div>
                        )}

                        {isError && !isLoading && (
                            <div className="w-full flex flex-col items-center justify-center py-10 text-center">
                                <p className="text-red-500 font-medium mb-2">Terjadi kesalahan saat memuat artikel.</p>
                                <Button
                                    size="sm"
                                    variant="flat"
                                    color="danger"
                                    onClick={() => window.location.reload()}
                                >
                                    Muat Ulang
                                </Button>
                            </div>
                        )}

                        {isLoading && (
                            <div className="flex justify-center items-center h-64 w-full">
                                <Spinner size="lg" color="primary" />
                            </div>
                        )}

                        {/* Content Grid */}
                        {!isLoading && !isError && articles.length > 0 && (
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-opacity duration-300 ${isFetching ? 'opacity-40' : 'opacity-100'}`}>
                                {articles.map((post) => (
                                    <BlogCard
                                        key={post.id}
                                        image={post.image_url}
                                        category={post.categories[0]?.name || "Umum"}
                                        date={post.published_at}
                                        title={post.title}
                                        description={post.summary}
                                        link={`/blog/${post.slug}`}
                                        orientation="vertical"
                                    />
                                ))}
                            </div>
                        )}

                        {!isLoading && !isError && articles.length === 0 && (
                            <div className="w-full text-center py-10 text-gray-500">
                                Tidak ada artikel ditemukan.
                            </div>
                        )}

                        {/* Pagination Buttons */}
                        {!isLoading && !isError && articles.length > 0 && (
                            <div className="flex justify-center items-center gap-4 mt-8">
                                <Button
                                    isDisabled={page === 1 || isFetching}
                                    onPress={() => setPage((prev) => prev - 1)}
                                    variant="bordered"
                                    color="primary"
                                    startContent={<FaChevronLeft />}
                                >
                                    Sebelumnya
                                </Button>
                                <span className="text-sm font-medium text-brand-text-secondary">
                                    Halaman {page}
                                </span>
                                <Button
                                    isDisabled={!hasMore || isFetching}
                                    onPress={() => setPage((prev) => prev + 1)}
                                    variant="solid"
                                    color="primary"
                                    endContent={<FaChevronRight />}
                                >
                                    Selanjutnya
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};