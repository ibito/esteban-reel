import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import '../css/base.css'
import '../css/sandbox.css'
import '../css/embla.css'

const galleryImages = require.context('../public/gallery', false, /\.(png|jpe?g|svg)$/);

console.log(galleryImages.keys())
const OPTIONS = { align: 'start', loop: true }
const SLIDE_COUNT = 13
const SLIDES = galleryImages; //Array.from(Array(SLIDE_COUNT).keys())

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const repo = await res.json()
  // Pass data to the page via props
  return { props: { repo } }
}

const Home = () => (
  <>
    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
  </>
)



export default Home;
