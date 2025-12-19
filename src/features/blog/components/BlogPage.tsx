"use client";

import React from 'react'
import { BlogNewPost } from './BlogNewPost'
import { BlogNewsletter } from './BlogNewsletter'
import { BlogMainContent } from './BlogMainContent'

export const BlogPage = () => {
    return (
        <main className="flex flex-col w-full">
            <BlogNewPost />
            <BlogNewsletter />
            <BlogMainContent />
        </main>
    )
}
