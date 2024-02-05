import Navbar from './Navbar'

const Hero = () => {
  return (
    <>
        <Navbar/>
        <section className="herodiv" id="home">
            <div className='header-text'>
                <h1>Small Effort<br />make <span className='header-spn'>Big Change</span></h1>
            </div>
            <div className='header-text2'>
                <p>We are ready to provide better service to make the world happy</p>
            </div>
        </section>
    </>
  )
}

export default Hero