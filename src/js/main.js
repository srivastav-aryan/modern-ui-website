import NavBar from "./classes_for_info/nav.js";
import { navInfo } from "./dataFromBackend/data.js";


// INTIALIZING THE APP AND THE COMPONENTS
 const headerNavCompo = new NavBar(navInfo , 'navUl' , 'mobile-nav-ul');  //Nav for header
 headerNavCompo.renderNavPages();
 headerNavCompo.renderMobileNav();


//  EVENT FUNCTIONS AND LOGIC
    const burgerButton = document.querySelector('.burger');
    const mobileMenu = document.getElementById('mobile-menu');

    burgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        document.body.classList.toggle("overflow-hidden")
        
        if (mobileMenu.classList.contains('hidden')) {
            burgerButton.innerHTML = '&#8801;'; // Show hamburger icon
            mobileMenu.classList.remove("flex")
        } else {
            burgerButton.innerHTML = '&#x2715;'; // Show "X" symbol
            mobileMenu.classList.add("flex")
        }
    });
