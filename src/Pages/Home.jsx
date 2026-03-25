import React from 'react';
import Hero from '../Components/Hero';
import FeaturedPosts from '../Components/FeaturedPosts';
import CategoryList from '../Components/CategoryList';

const Home = () => {
    return (
        <div>
            <Hero/>
            <FeaturedPosts/>
            <CategoryList/>
        </div>
    );
};

export default Home;