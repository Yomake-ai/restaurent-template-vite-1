import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollbarProgress from "@layouts/scrollbar-progress/Index"
import Header from "@layouts/headers/Index"
import Footer from "@layouts/footers/Index"

// Lazy load page components
const Home = lazy(() => import('./app/(pages)/page'))
const Home2 = lazy(() => import('./app/(pages)/home-2/page'))
const About = lazy(() => import('./app/(pages)/about/page'))
const About2 = lazy(() => import('./app/(pages)/about-2/page'))
const Menu = lazy(() => import('./app/(pages)/menu/page'))
const Menu2 = lazy(() => import('./app/(pages)/menu-2/page'))
const Menu3 = lazy(() => import('./app/(pages)/menu-3/page'))
const Menu4 = lazy(() => import('./app/(pages)/menu-4/page'))
const Menu5 = lazy(() => import('./app/(pages)/menu-5/page'))
const Menu6 = lazy(() => import('./app/(pages)/menu-6/page'))
const Products = lazy(() => import('./app/(pages)/products/page'))
const Products2 = lazy(() => import('./app/(pages)/products-2/page'))
const Product = lazy(() => import('./app/(pages)/product/page'))
const Cart = lazy(() => import('./app/(pages)/cart/page'))
const Checkout = lazy(() => import('./app/(pages)/checkout/page'))
const Shop = lazy(() => import('./app/(pages)/shop/page'))
const Shop2 = lazy(() => import('./app/(pages)/shop-2/page'))
const Blog = lazy(() => import('./app/(pages)/blog/page'))
const BlogPost = lazy(() => import('./app/(pages)/blog/[id]/page'))
const BlogArchive = lazy(() => import('./app/(pages)/blog/archive/[id]/page'))
const BlogAuthor = lazy(() => import('./app/(pages)/blog/author/[id]/page'))
const BlogCategory = lazy(() => import('./app/(pages)/blog/category/[id]/page'))
const BlogTag = lazy(() => import('./app/(pages)/blog/tag/[id]/page'))
const BlogPage = lazy(() => import('./app/(pages)/blog/page/[page]/page'))
const Blog2 = lazy(() => import('./app/(pages)/blog-2/page'))
const Blog3 = lazy(() => import('./app/(pages)/blog-3/page'))
const Gallery = lazy(() => import('./app/(pages)/gallery/page'))
const Gallery2 = lazy(() => import('./app/(pages)/gallery-2/page'))
const Reviews = lazy(() => import('./app/(pages)/reviews/page'))
const Faq = lazy(() => import('./app/(pages)/faq/page'))
const Reservation = lazy(() => import('./app/(pages)/reservation/page'))
const Contact = lazy(() => import('./app/(pages)/contact/page'))
const Search = lazy(() => import('./app/(pages)/search/page'))
const NotFound = lazy(() => import('./app/not-found'))

function App() {
  return (
    <div className="sb-app">
      <Header layout="default" />

      <div id="sb-dynamic-content" className="sb-transition-fade">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home-2" element={<Home2 />} />
            <Route path="/about" element={<About />} />
            <Route path="/about-2" element={<About2 />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu-2" element={<Menu2 />} />
            <Route path="/menu-3" element={<Menu3 />} />
            <Route path="/menu-4" element={<Menu4 />} />
            <Route path="/menu-5" element={<Menu5 />} />
            <Route path="/menu-6" element={<Menu6 />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products-2" element={<Products2 />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop-2" element={<Shop2 />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/blog/archive/:id" element={<BlogArchive />} />
            <Route path="/blog/author/:id" element={<BlogAuthor />} />
            <Route path="/blog/category/:id" element={<BlogCategory />} />
            <Route path="/blog/tag/:id" element={<BlogTag />} />
            <Route path="/blog/page/:page" element={<BlogPage />} />
            <Route path="/blog-2" element={<Blog2 />} />
            <Route path="/blog-3" element={<Blog3 />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/gallery-2" element={<Gallery2 />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer layout="default" />
      </div>

      <ScrollbarProgress />
    </div>
  )
}

export default App
