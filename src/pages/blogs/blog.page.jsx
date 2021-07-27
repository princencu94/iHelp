import React from 'react';
import './blog.styles.css';


import Navbar from '../../components/navbar/navbar.component';
import BlogPosts from '../../components/blog-posts/blog-posts.component';

const Blogs = () => {
    return (
        <div class="blog-container">
            <Navbar/>

            <div className="blog-header">
                <h1>Blogs</h1>
            </div>

            <div className="blog-content">
                <BlogPosts/>
            </div>
        </div>
    )
}

export default Blogs;