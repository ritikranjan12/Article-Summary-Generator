import {logo} from '../assets'
const Hero = () => {
  return (
    <header className='flex w-full flex-col justify-center items-center'>
       <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="logo" className='w-28 object-contain'/>
        <button 
          type='button'
          className='black_btn'
          onClick={() => window.open('https://github.com/ritikranjan12/Article-Summary-Generator')}
        >
          GitHub
        </button>
        </nav> 
        <h1 className="head_text">
          <span className='red_gradient'>
          Summarize Articles with</span> <br className='max-md:hidden'/>
        <span className="cyanandgreen_gradient">Article Summary Generator</span></h1>

        <h2 className='desc'>
        Enhance your reading experience with ASG, an open-source article summarization tool designed to distill extensive articles into elegantly crafted, succinct summaries presented in various expressive forms.
        </h2>
    </header>
  )
}

export default Hero
