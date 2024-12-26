import { useState } from 'react';
import AnchorLinks from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
const Link= ({page,selectedPage,setSelectedPage})=>{
    const lowercasePage = page.toLowerCase();
    return (<AnchorLinks 
    href={`#${lowercasePage}`}
    onClick={() =>{setSelectedPage(lowercasePage)}}
    className={`${selectedPage===lowercasePage?"text-purple-700":" hover:text-yello transition duration-500"}`} >
    {page}
    </AnchorLinks>)
}

const Navbar = ({isTopOfPage,selectedPage,setSelectedPage}) => {
    const [isMenuToggled,setIsMenuToggled] = useState(false);
    const isAboveSmallScreen=useMediaQuery("(min-width:748px)")
    const navbarBackground=isTopOfPage?"":"bg-deep-blue";
  return (
    <nav className={`${navbarBackground} Nav-bar z-40 w-full fixed top-0 py-6`}>
        <div className=' flex items-center justify-between mx-auto w-5/6'>
            <h4 className='font-playfair text-3xl font-bold'>RVK</h4>
            {
                isAboveSmallScreen?
                (
                  <div className='flex justify-between gap-16 font-opensans text-[18px] font-semibold px-1'>
                    <Link
                     page="Home"
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                    />
                    <Link
                     page="Skills"
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                    />
                    <Link
                     page="Projects"
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                    />
                    <Link
                     page="Experience"
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                    />
                    <Link
                     page="Contact"
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                    />                    
                  </div>
                ):(
                <div className='flex items-center'>
                    <button 
                         className='rounded-full bg-gray-500 p-2'
                        onClick={() => { setIsMenuToggled(!isMenuToggled) }}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3 8V6H21V8H3ZM3 13H21V11H3V13ZM3 18H21V16H3V18Z" fill="white"/>
                        </svg>
                    </button>
                    
                    {
                        !isAboveSmallScreen && isMenuToggled && (
                            <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px] transition-all duration-500 ease-in-out transform translate-x-full opacity-0 animate-slideIn'>
                                    <div className='flex justify-end p-12'>
                                            <button 
                                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                                            >
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white" fillOpacity="0.54"/>
                                                </svg>
                                            </button>
                                    </div>
                             <div className='open flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
                                    <Link
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                        className='animate-fadeIn animate-delay-0'
                                    />
                                    <Link
                                        page="Skills"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                        className='animate-fadeIn animate-delay-100'
                                    />
                                    <Link
                                        page="Projects"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                        className='animate-fadeIn animate-delay-200'
                                    />
                                    <Link
                                        page="Experience"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                        className='animate-fadeIn animate-delay-300'
                                    />
                                    <Link
                                        page="Contact"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                        className='animate-fadeIn animate-delay-400'
                                    />   
                                        </div>
                            </div>

 
                        )
                    }
                </div>
                
                )
            }
        </div>
    </nav>
  )
}

export default Navbar;
