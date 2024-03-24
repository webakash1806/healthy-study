import React from 'react'
import Hero from '../Components/Hero'
import HomeLayout from '../Layouts/HomeLayout'
import ProductList from './Products/ProductList'


const HomePage = () => {
    return (
        <HomeLayout>
            <Hero />
            <ProductList />

        </HomeLayout>
    )
}

export default HomePage
