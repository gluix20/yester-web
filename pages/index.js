import React from 'react'
import Footer from '../src/components/Footer'
import Layout from '../src/components/Layout'
import Navbar from '../src/components/Navbar'

export default () => (
  <Layout title='Yester - write the story of your life'>
    <Navbar />
    <header className='header'>
      <div className='container'>
        <h1>
          Write and keep your memoirs. Forever.
        </h1>
        <img className='baloon-scene' src='/static/baloon-scene@2x.png' aria-hidden='true' />
        <h2>
          What if you could easily wirte your memoirs?
        </h2>
        <h2>
          <strong>
            Yester will help you to do it, soon.
          </strong>
        </h2>
      </div>
    </header>
    <section className='transition-area' />
    {/* <section className='email-subscription'>
      <label htmlFor='email'>Your email address</label>
      <input id='email' placeholder='Your email address'/>
      <button>I want to know first!</button>
    </section> */}
    <main>
      <div className='container'>
        <section className='description'>
          <div>
            <img src='/static/colorful-yester.svg' alt='colorful yester logo' />
          </div>
          <h3>
            Yester is a beautiful way of writing the book of your life!
          </h3>
          <p>
          Yester will help you to write the story of your life by sending you daily topics to start writing about them.
          It will be divided by chapters regarding human ages: childhood, adolescence, etc. We will collect your data and
          we offer to complete your life book in 2 years top.
          </p>
        </section>
        <div className='yester-app'>
          <img src='/static/phone.png' alt='yester app' />
        </div>
      </div>
    </main>
    <Footer />
  </Layout>
)
