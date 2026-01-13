
import { translations } from './data.js';

let currentLang = localStorage.getItem('lang') || 'fr';

const navItems = [
    { key: 'nav_home', href: '#home' },
    { key: 'nav_about', href: '#about' },
    { key: 'nav_majors', href: '#majors' },
    { key: 'nav_infra', href: '#facilities' },
    { key: 'nav_contact', href: '#contact' },
];

function init() {
    render();
    window.addEventListener('scroll', handleNavbar);
    document.getElementById('mobile-menu-btn').onclick = toggleMobileMenu;
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('contact-form').onsubmit = (e) => {
        e.preventDefault();
        alert('Merci pour votre message !');
    };
}

function handleNavbar() {
    const nav = document.getElementById('navbar');
    const logoText = document.getElementById('logo-text');
    const navLinks = document.querySelector('#nav-items');
    const menuBtn = document.getElementById('mobile-menu-btn');
    
    if (window.scrollY > 50) {
        nav.classList.add('glass', 'shadow-md', 'py-2');
        nav.classList.remove('py-4');
        logoText.classList.replace('text-white', 'text-slate-900');
        navLinks.classList.replace('text-slate-100', 'text-slate-600');
        menuBtn.classList.replace('text-white', 'text-slate-900');
    } else {
        nav.classList.remove('glass', 'shadow-md', 'py-2');
        nav.classList.add('py-4');
        logoText.classList.replace('text-slate-900', 'text-white');
        navLinks.classList.replace('text-slate-600', 'text-slate-100');
        menuBtn.classList.replace('text-slate-900', 'text-white');
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const isOpen = !menu.classList.contains('hidden');
    if (isOpen) {
        menu.classList.add('opacity-0', '-translate-y-4');
        setTimeout(() => menu.classList.add('hidden'), 300);
    } else {
        menu.classList.remove('hidden');
        setTimeout(() => menu.classList.remove('opacity-0', '-translate-y-4'), 10);
    }
}

window.setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    render();
};

function render() {
    const t = translations[currentLang];
    const isRtl = currentLang === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    // Logo & Lang Label
    document.getElementById('logo-text').innerHTML = t.logo;
    document.getElementById('current-lang-label').textContent = currentLang.toUpperCase();

    // Nav Items
    const navContainer = document.getElementById('nav-items');
    const mobileNavContainer = document.getElementById('mobile-nav-items');
    navContainer.innerHTML = navItems.map(item => `<a href="${item.href}" class="hover:text-blue-500 transition-colors">${t[item.key]}</a>`).join('');
    mobileNavContainer.innerHTML = navItems.map(item => `<a href="${item.href}" onclick="toggleMobileMenu()" class="block py-3 text-lg font-medium border-b border-slate-100">${t[item.key]}</a>`).join('');

    // Static Texts (using data-i18n)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.innerHTML = t[key];
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.placeholder = t[key];
    });

    // Hero Specifics
    document.getElementById('hero-title').innerHTML = t.hero_title;
    document.getElementById('hero-desc').textContent = t.hero_desc;

    // Majors Grid
    const majorsGrid = document.getElementById('majors-grid');
    majorsGrid.innerHTML = t.majors.map((m, i) => `
        <div class="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
            <div class="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            </div>
            <h4 class="text-xl font-bold mb-3">${m.name}</h4>
            <p class="text-slate-600 text-sm leading-relaxed">${m.desc}</p>
        </div>
    `).join('');

    // Infra Grid
    const infraGrid = document.getElementById('infra-grid');
    infraGrid.innerHTML = t.infra.map((f, i) => `
        <div class="group relative rounded-2xl overflow-hidden h-80 shadow-lg">
            <img src="https://picsum.photos/seed/inf${i}/600/800" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
            <div class="absolute bottom-0 left-0 right-0 p-6">
                <h4 class="text-white font-bold text-lg mb-2">${f.title}</h4>
                <p class="text-slate-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity">${f.desc}</p>
            </div>
        </div>
    `).join('');

    // Life Grid
    const lifeGrid = document.getElementById('life-grid');
    lifeGrid.innerHTML = t.life.map(l => `
        <div class="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
            <h4 class="text-blue-400 font-bold mb-2">${l.title}</h4>
            <p class="text-slate-400 text-sm">${l.desc}</p>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', init);
