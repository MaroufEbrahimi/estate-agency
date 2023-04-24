import React, { useState, useEffect, Suspense } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Loading from "./components/Loading/Loading"
import Header from "../src/components/Header/Header"
import Footer from "../src/components/Footer/Footer"
import Layout from "../src/components/Layout/Layout"
import Modal from "./components/Modal/Modal"
import ModalContent from "./components/Modal/ModalContent/ModalContent"
import Home from "./pages/Home/Home"
import BackToTop from "./components/BackToTop/BackToTop"
import About from "./pages/About/About"
import Property from "./pages/Property/Property"
import Blog from "./pages/Blog/Blog"
import Contact from "./pages/Contact/Contact"
import AgentSingle from "./pages/AgentSingle/AgentSingle"
import AgentsGrid from "./pages/AgentsGrid/AgentsGrid"
import PropertySingle from "./pages/PropertySingle/PropertySingle"
import BlogDetails from "./pages/BlogDetails/BlogDetails"
import NotFound from "./components/NotFound/NotFound"

// ###----- images -----###
// slider
import slide1 from "./assets/agents/slider/slide-1.jpg"

// agents
import slideAbout1 from "./assets/about/slide-about-1.jpg"
import about2 from "./assets/about/about-2.jpg"
import agent1 from "./assets/agents/agent-1.jpg"
import agent2 from "./assets/agents/agent-2.jpg"
import agent3 from "./assets/agents/agent-3.jpg"
import agent4 from "./assets/agents/agent-4.jpg"
import agent5 from "./assets/agents/agent-5.jpg"
import agent6 from "./assets/agents/agent-6.jpg"
import agent7 from "./assets/agents/agent-7.jpg"

// Property images
import propertySlide1 from "./assets/agents/slider/slide-1.jpg"
import propertySlide2 from "./assets/agents/slider/slide-2.jpg"
import propertySlide3 from "./assets/agents/slider/slide-3.jpg"
import property_1 from "./assets/latest-property/property-1.jpg"
import property_2 from "./assets/latest-property/property-2.jpg"
import property_3 from "./assets/latest-property/property-3.jpg"
import property_4 from "./assets/latest-property/property-4.jpg"
import property_5 from "./assets/latest-property/property-5.jpg"
import property_6 from "./assets/latest-property/property-6.jpg"
import property_7 from "./assets/latest-property/property-7.jpg"
import property_8 from "./assets/latest-property/property-8.jpg"
import property_9 from "./assets/latest-property/property-9.jpg"

// Blog images
import blog1 from "./assets/blog/post-1.jpg"
import blog2 from "./assets/blog/post-2.jpg"
import blog3 from "./assets/blog/post-3.jpg"
import blog4 from "./assets/blog/post-4.jpg"
import blog5 from "./assets/blog/post-5.jpg"
import blog6 from "./assets/blog/post-6.jpg"
import blog7 from "./assets/blog/post-7.jpg"

// Testimonials
import testimonial1 from "./assets/testimonials/testimonial-1.jpg"
import testimonial2 from "./assets/testimonials/testimonial-2.jpg"
import testimonialMini1 from "./assets/testimonials/mini-testimonial-1.jpg"
import testimonialMini2 from "./assets/testimonials/mini-testimonial-2.jpg"

// Author
import author1 from "./assets/author/author-1.jpg"

const App = (props) => {
  const [show, handleShow] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [backToTop, setBackToTop] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(
      "https://estate-agency-ca974-default-rtdb.firebaseio.com/products.json"
    )
      .then((response) => {
        return response.json()
      })
      .then((responseDate) => {
        const loadedProducts = []

        for (const item in responseDate) {
          loadedProducts.push({
            id: item,
            name: responseDate[item].name,
            email: responseDate[item].email,
            comment: responseDate[item].comment,
          })
        }

        setProducts(loadedProducts)
      })

    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        setBackToTop(true)
        handleShow(true)
      } else {
        setBackToTop(false)
        handleShow(false)
      }
    })
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  const showModalHandler = () => {
    setShowModal(true)
  }

  const modalCloseHandler = () => {
    setShowModal(false)
  }

  const backToTopFun = () => {
    window.scroll(0, 0)
  }

  const addProductHandler = (item) => {
    fetch(
      "https://estate-agency-ca974-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        body: JSON.stringify(item),
        headers: { "Content-Type": "application/json" },
      }
    ).then((response) => {
      response.json().then((responseDate) => {
        setProducts((prevState) => {
          return [
            ...prevState,
            {
              id: responseDate.name,
              ...item,
            },
          ]
        })
      })
    })
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="app">
        <Layout>
          <Router>
            <Switch>
              <Route path="/estate-agency" exact>
                <Modal showBackdrop={showModal} removeModal={modalCloseHandler}>
                  <ModalContent removeModal={modalCloseHandler} />
                </Modal>
                <Header
                  show={show}
                  handleShow={handleShow}
                  headerSearch={showModalHandler}
                  backToTopFun={backToTopFun}
                />
                <Home
                  slide1={slide1}
                  property_1={property_1}
                  property_2={property_2}
                  property_3={property_3}
                  agent1={agent1}
                  agent2={agent2}
                  agent3={agent3}
                  blog1={blog1}
                  blog2={blog2}
                  blog3={blog3}
                  testimonial2={testimonial2}
                  testimonial1={testimonial1}
                  testimonialMini1={testimonialMini1}
                  testimonialMini2={testimonialMini2}
                />
                <Footer />
                <BackToTop
                  backToTop={backToTop}
                  setBackToTop={setBackToTop}
                  backToTopFun={backToTopFun}
                />
              </Route>

              <Route path="/about">
                <Modal showBackdrop={showModal} removeModal={modalCloseHandler}>
                  <ModalContent removeModal={modalCloseHandler} />
                </Modal>
                <Header
                  show={show}
                  handleShow={handleShow}
                  headerSearch={showModalHandler}
                  backToTopFun={backToTopFun}
                />
                <About
                  slideAbout1={slideAbout1}
                  about2={about2}
                  agent7={agent7}
                  agent6={agent6}
                  agent5={agent5}
                />
                <Footer />
                <BackToTop
                  backToTop={backToTop}
                  setBackToTop={setBackToTop}
                  backToTopFun={backToTopFun}
                />
              </Route>
              <Route path="/property">
                <Modal showBackdrop={showModal} removeModal={modalCloseHandler}>
                  <ModalContent removeModal={modalCloseHandler} />
                </Modal>
                <Header
                  show={show}
                  handleShow={handleShow}
                  headerSearch={showModalHandler}
                  backToTopFun={backToTopFun}
                />
                <Property
                  property_4={property_4}
                  property_5={property_5}
                  property_6={property_6}
                  property_7={property_7}
                  property_8={property_8}
                  property_9={property_9}
                />
                <Footer />
                <BackToTop
                  backToTop={backToTop}
                  setBackToTop={setBackToTop}
                  backToTopFun={backToTopFun}
                />
              </Route>
              <Route path="/blog">
                <Modal showBackdrop={showModal} removeModal={modalCloseHandler}>
                  <ModalContent removeModal={modalCloseHandler} />
                </Modal>
                <Header
                  show={show}
                  handleShow={handleShow}
                  headerSearch={showModalHandler}
                  backToTopFun={backToTopFun}
                />
                <Blog
                  blog2={blog2}
                  blog3={blog3}
                  blog4={blog4}
                  blog5={blog5}
                  blog6={blog6}
                  blog7={blog7}
                />
                <Footer />
                <BackToTop
                  backToTop={backToTop}
                  setBackToTop={setBackToTop}
                  backToTopFun={backToTopFun}
                />
              </Route>
              <Route path="/contact">
                <Modal showBackdrop={showModal} removeModal={modalCloseHandler}>
                  <ModalContent removeModal={modalCloseHandler} />
                </Modal>
                <Header
                  show={show}
                  handleShow={handleShow}
                  headerSearch={showModalHandler}
                  backToTopFun={backToTopFun}
                />
                <Contact />
                <Footer />
                <BackToTop
                  backToTop={backToTop}
                  setBackToTop={setBackToTop}
                  backToTopFun={backToTopFun}
                />
              </Route>
              <Route path="/agent-single">
                <Modal showBackdrop={showModal} removeModal={modalCloseHandler}>
                  <ModalContent removeModal={modalCloseHandler} />
                </Modal>
                <Header
                  show={show}
                  handleShow={handleShow}
                  headerSearch={showModalHandler}
                  backToTopFun={backToTopFun}
                />
                <AgentSingle
                  agent7={agent7}
                  property_4={property_4}
                  property_5={property_5}
                  property_6={property_6}
                  property_7={property_7}
                  property_8={property_8}
                  property_9={property_9}
                />
                <Footer />
                <BackToTop
                  backToTop={backToTop}
                  setBackToTop={setBackToTop}
                  backToTopFun={backToTopFun}
                />
              </Route>
              <Route path="/agent-grid">
                <Modal showBackdrop={showModal} removeModal={modalCloseHandler}>
                  <ModalContent removeModal={modalCloseHandler} />
                </Modal>
                <Header
                  show={show}
                  handleShow={handleShow}
                  headerSearch={showModalHandler}
                  backToTopFun={backToTopFun}
                />
                <AgentsGrid
                  agent1={agent1}
                  agent2={agent2}
                  agent3={agent3}
                  agent4={agent4}
                  agent5={agent5}
                  agent6={agent6}
                />
                <Footer />
                <BackToTop
                  backToTop={backToTop}
                  setBackToTop={setBackToTop}
                  backToTopFun={backToTopFun}
                />
              </Route>
              <Route path="/property-single">
                <Modal showBackdrop={showModal} removeModal={modalCloseHandler}>
                  <ModalContent removeModal={modalCloseHandler} />
                </Modal>
                <Header
                  show={show}
                  handleShow={handleShow}
                  headerSearch={showModalHandler}
                  backToTopFun={backToTopFun}
                />
                <PropertySingle
                  currentSlide={currentSlide}
                  setCurrentSlide={setCurrentSlide}
                  agent4={agent4}
                  propertySlide1={propertySlide1}
                  propertySlide2={propertySlide2}
                  propertySlide3={propertySlide3}
                />
                <Footer />
                <BackToTop
                  backToTop={backToTop}
                  setBackToTop={setBackToTop}
                  backToTopFun={backToTopFun}
                />
              </Route>
              <Route path="/blog-details">
                <Modal showBackdrop={showModal} removeModal={modalCloseHandler}>
                  <ModalContent removeModal={modalCloseHandler} />
                </Modal>
                <Header
                  show={show}
                  handleShow={handleShow}
                  headerSearch={showModalHandler}
                  backToTopFun={backToTopFun}
                />
                <BlogDetails
                  propertySlide3={propertySlide3}
                  author1={author1}
                  addProduct={addProductHandler}
                  products={products}
                  onRemoveItem={() => {}}
                />
                <Footer />
                <BackToTop
                  backToTop={backToTop}
                  setBackToTop={setBackToTop}
                  backToTopFun={backToTopFun}
                />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </Layout>
      </div>
    </Suspense>
  )
}

export default App
