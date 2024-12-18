import NavBar from "./classes_for_info/nav.js";
import FeaturesCard from "./classes_for_info/feature-cards.js";
import { navInfo, featuresInfo} from "./dataFromBackend/data.js";





// INTIALIZING THE APP AND THE COMPONENTS
 const headerNavCompo = new NavBar(navInfo , 'navUl' , 'mobile-nav-ul');  //Nav component for header
 headerNavCompo.renderNavPages();
 headerNavCompo.renderMobileNav();


 const cardsFragment = document.createDocumentFragment(); //Creating cards components for feature section
 const cardsContainer = document.getElementById('feature-card-container');
 featuresInfo.forEach((item) => {
   const card =  new FeaturesCard(item.heading ,item.iconUrl ,item.description , item.buttonText, item.light);
    cardsFragment.append(card.root)
 });
cardsContainer.append(cardsFragment);



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
