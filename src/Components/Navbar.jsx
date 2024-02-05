// import { useState } from 'react';
const Navbar = () => {
    /*===== MENU SHOW =====*/ 
    const handleMenuToggle = () => {
        const toggle = document.getElementById("nav-toggle");
        const nav = document.getElementById("nav-menu");
    
        if (toggle && nav) {
          nav.classList.toggle("show");
        }
    };


    /*==================== REMOVE MENU MOBILE ====================*/
    const navLink = document.querySelectorAll('.nav__link')

    function linkAction(){
        const navMenu = document.getElementById('nav-menu')
        // When we click on each nav__link, we remove the show-menu class
        navMenu.classList.remove('show')
    }
    navLink.forEach(n => n.addEventListener('click', linkAction))

    /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
    const sections = document.querySelectorAll('section[id]')

    function scrollActive(){
        const scrollY = window.pageYOffset

        sections.forEach(current =>{
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
            }
        })
    }
    window.addEventListener('scroll', scrollActive)
    //  ====== change background to white ==== //
    // const [nav, setnav] = useState(false);

    // const changeBackground = () => {
    //     if (window.scrollY >= 50) {
    //         setnav(true);
    //     }
    //     else {
    //         setnav(false);
    //     }
    // }
    // window.addEventListener('scroll', changeBackground)
    
  return (
    <>
        <header className="l-header">
            <nav className="nav bd-grid">
                <div className='logo-div'>
                    <img src="https://i.postimg.cc/SKZVPQNR/logo-AHDC-African-Developement.jpg" alt="logo-AHDC-African-Developement" className="nav__logo"/>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link active">HOME</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">ABOUT US</a></li>
                        <li className="nav__item"><a href="#gallery" className="nav__link">GALLERY</a></li>
                        <li className="nav__item"><a href="#blog" className="nav__link">BLOG</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link">CONTACT US</a></li>
                        <div className="donate-btn">
                            <a href="#" className="top-btn">Donate Now</a>
                        </div>
                    </ul>
                </div>
                
                <div className="nav__toggle" id="nav-toggle" onClick={handleMenuToggle}>
                    <i className='bx bx-menu'></i>
                </div>

                <div className="donate-btn2">
                    <a href="#" className="top-btn">Donate Now</a>
                </div>

            </nav>
        </header>
    </>
  )
}

export default Navbar