export default class FeaturesCard {

    constructor(title , icon , para , btntext , check = null) {
        this.root = FeaturesCard.createRoot(title , icon , para , btntext , check);        
    }

    static createRoot(title , icon , para , btntext , check) {
        const range = document.createRange();
        const card = range.createContextualFragment(
            `<div class="feature-card relative rounded-3xl group bg-black lg:basis-[30%]">

                 <div class="absolute inset-0 rounded-3xl bg-transparent bg-cover bg-no-repeat opacity-0  transition-all duration-300   group-hover:opacity-30 group-hover:bg-[url('/assets/assets/benefits/image-2.png')]">
                 </div> 

                    <div class="relative flex flex-col gap-6 ">
                        <h5 class="h5">${title}</h5>
                        <p class="text-[#cac6dd]">${para}</p>
                    </div>
                <div class="relative  flex justify-between">
                    <img src="${icon}" alt="">
                    <button class="text-[.75rem]">${btntext}</button>
                </div>
                ${check ? `<img src="/assets/assets/gradient.png" class="absolute lg:left-28 -z-10 -inset-6 rounded-full opacity-20 ">` : ''}
            </div>`
        );

        return card.firstElementChild;
    }
}