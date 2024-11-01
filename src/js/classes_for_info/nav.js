export default class NavaBar {

    constructor(navInfo , navId , mobileNavId) {
        this.navInfo = navInfo;
        this.navul = document.getElementById(navId);
        this.mobileNav =  document.getElementById(mobileNavId);
    }

    renderNavPages () {        
            const l = this.navInfo.map((item) => {
                return `<li class="text-[.7rem] hover:text-white text-n-2"><a href="${item.url}">${item.title}</a></li>`
            }).join('');
            this.navul.innerHTML = l
        }

    renderMobileNav() {
        const l = this.navInfo.map((item) => {
            return `<li><a href="${item.url}" class="hover:text-violet-500 text-[1.2rem]">${item.title}</a></li>`
        }).join('');
        this.mobileNav.innerHTML = l
    }
}




