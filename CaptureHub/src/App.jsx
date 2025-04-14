import React from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import ShippingWarrantySection from './components/ShippingWarrantySection'
import ProductShowcase from './components/ProductShowCase'

function App() {
    return (
        <div>
            <Header />
            <Hero />
            <ProductShowcase />
            <ShippingWarrantySection />
            <Footer />
        </div>
    )
}

export default App
