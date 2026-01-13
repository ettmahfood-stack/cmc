
const translations = {
    fr: {
        nav_home: "Accueil",
        nav_about: "Institut",
        nav_infra: "Campus",
        nav_majors: "Filières",
        nav_life: "Vie Étudiante",
        nav_contact: "Contact",
        apply_btn: "Postuler",
        hero_badge: "✨ Session 2024 - 2025 ouverte",
        hero_title: "L'Élite du <span class='text-blue-500'>Sahara</span> Professionnel",
        hero_desc: "Le CMC Laâyoune est le pôle d'innovation majeur pour former les futurs leaders économiques des provinces du Sud. Un écosystème d'apprentissage 4.0 unique au Maroc.",
        hero_cta_1: "Voir les filières",
        hero_cta_2: "Découvrir CMC",
        about_subtitle: "Notre Identité",
        about_title: "Un Nouveau Modèle de Formation",
        about_text: "Inspiré par la vision Royale pour la régionalisation avancée, le CMC Laâyoune est bien plus qu'un institut. C'est une cité des métiers où la technologie rencontre l'ambition pour propulser le Sahara vers une économie de savoir.",
        about_features: [
            { title: "Standard Global", desc: "Diplômes accrédités & reconnus" },
            { title: "Leadership Lab", desc: "Coaching carrière personnalisé" },
            { title: "Digital Center", desc: "Infrastructures IT de pointe" },
            { title: "Soft Skills", desc: "Focus sur le développement humain" }
        ],
        admission_steps: [
            { step: "01", title: "Inscription", desc: "Déposez votre dossier via notre plateforme digitale MyWay." },
            { step: "02", title: "Sélection", desc: "Test de positionnement psychotechnique et technique." },
            { step: "03", title: "Entretien", desc: "Rencontre avec notre jury pour évaluer votre motivation." },
            { step: "04", title: "Admission", desc: "Confirmation et début de votre parcours d'excellence." }
        ],
        infra_subtitle: "Le Campus",
        infra_title: "Environnement de Classe Mondiale",
        infra_list: [
            { title: "Studio Digital", desc: "Laboratoire de création de contenu et de e-learning.", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600" },
            { title: "Médiathèque", desc: "Espace connecté de recherche et de culture.", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600" },
            { title: "Innovation Space", desc: "Espace coworking pour l'entrepreneuriat étudiant.", img: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=600" },
            { title: "Social Hub", desc: "Zones de détente et d'échanges conviviaux.", img: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=600" }
        ],
        majors_subtitle: "Filières",
        majors_title: "Métiers de Demain",
        majors_list: [
            { name: "Gestion & Finance", desc: "Pilotage stratégique et management opérationnel.", img: "https://images.unsplash.com/photo-1454165833767-027ffea70288?q=80&w=800" },
            { name: "Digital & Design", desc: "Stratégies e-commerce et création graphique.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
            { name: "Développement Web", desc: "Coding, Full-stack et Intelligence Artificielle.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800" },
            { name: "Logistique Portuaire", desc: "Gestion des flux et commerce international.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800" }
        ],
        life_subtitle: "Vie Étudiante",
        life_title: "Vivre son Potentiel",
        life_text: "L'apprentissage au CMC ne s'arrête pas à la sortie de classe. Notre écosystème favorise l'expression de tous vos talents.",
        life_items: [
            "Clubs Sportifs (Foot, Basket, Padel)",
            "Activités Artistiques & Culturelles",
            "Conférences & Masterclasses Leaders",
            "Événements de Networking Professionnel"
        ],
        faq_subtitle: "FAQ",
        faq_title: "Tout Savoir sur CMC",
        faq_items: [
            { q: "Quelles sont les conditions d'admission ?", a: "Être titulaire d'un Baccalauréat (toutes séries) ou d'un diplôme équivalent. La sélection se base sur les performances académiques et un entretien." },
            { q: "Le diplôme est-il reconnu à l'international ?", a: "Absolument. Nos diplômes sont certifiés par l'OFPPT et l'État, ouvrant des portes vers des carrières mondiales." },
            { q: "Y a-t-il une aide pour les stages ?", a: "Oui, notre 'Career Center' accompagne chaque étudiant dans sa recherche de stage via notre réseau d'entreprises." }
        ],
        contact_form_title: "Contactez l'Admission",
        contact_send: "Envoyer le Message",
        placeholder_name: "Nom complet",
        placeholder_email: "Adresse email",
        placeholder_msg: "Votre demande...",
    },
    ar: {
        nav_home: "الرئيسية",
        nav_about: "المعهد",
        nav_infra: "الحرم الجامعي",
        nav_majors: "التخصصات",
        nav_life: "الحياة الطلابية",
        nav_contact: "اتصل بنا",
        apply_btn: "سجل الآن",
        hero_badge: "✨ باب التسجيل مفتوح 2024 - 2025",
        hero_title: "نخبة <span class='text-blue-500'>الصحراء</span> المهنية",
        hero_desc: "مدينة المهن والكفاءات بالعيون هي القطب الرئيسي لتكوين قادة الاقتصاد في الأقاليم الجنوبية. بيئة تعليمية فريدة من نوعها في المغرب.",
        hero_cta_1: "استكشف التخصصات",
        hero_cta_2: "اكتشف المركز",
        about_subtitle: "هويتنا",
        about_title: "نموذج تكوين جديد",
        about_text: "تعتبر مدينة المهن والكفاءات بالعيون أكثر من مجرد معهد؛ إنها مدينة للمهن حيث تلتقي التكنولوجيا بالطموح لدفع الصحراء نحو اقتصاد المعرفة.",
        about_features: [
            { title: "معايير عالمية", desc: "دبلومات معتمدة ومعترف بها" },
            { title: "مختبر القيادة", desc: "مواكبة مهنية مخصصة" },
            { title: "المركز الرقمي", desc: "بنية تحتية تكنولوجية متطورة" },
            { title: "المهارات اللينة", desc: "تركيز على التطوير البشري" }
        ],
        admission_steps: [
            { step: "01", title: "التسجيل", desc: "قدم ملفك عبر منصتنا الرقمية MyWay." },
            { step: "02", title: "الانتقاء", desc: "اختبار تقني ونفسي لتحديد المستوى." },
            { step: "03", title: "المقابلة", desc: "لقاء مع اللجنة لتقييم الحوافز والمهارات." },
            { step: "04", title: "القبول", desc: "تأكيد التسجيل وبدء مسار التميز." }
        ],
        infra_subtitle: "الحرم الجامعي",
        infra_title: "بيئة تعليمية عالمية",
        infra_list: [
            { title: "الاستوديو الرقمي", desc: "مختبر لصناعة المحتوى والتعليم الإلكتروني.", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600" },
            { title: "المكتبة الوسائطية", desc: "فضاء متصل للبحث والقراءة.", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600" },
            { title: "فضاء الابتكار", desc: "مساحة عمل مشتركة لريادة الأعمال الطلابية.", img: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=600" },
            { title: "فضاء الحياة", desc: "مناطق استراحة وتواصل اجتماعي.", img: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=600" }
        ],
        majors_subtitle: "التخصصات",
        majors_title: "مهن المستقبل",
        majors_list: [
            { name: "التدبير والمالية", desc: "القيادة الاستراتيجية والتدبير العملياتي.", img: "https://images.unsplash.com/photo-1454165833767-027ffea70288?q=80&w=800" },
            { name: "التسويق الرقمي", desc: "استراتيجيات التجارة الإلكترونية والإبداع.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
            { name: "تطوير البرمجيات", desc: "البرمجة والذكاء الاصطناعي.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800" },
            { name: "لوجستيك الموانئ", desc: "تدبير التدفقات والتجارة الدولية.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800" }
        ],
        life_subtitle: "الحياة الطلابية",
        life_title: "تحقيق الإمكانات",
        life_text: "التعلم في المركز لا ينتهي عند الفصل الدراسي؛ بيئتنا تدعم التعبير عن كل مواهبك.",
        life_items: [
            "أندية رياضية (كرة قدم، كرة سلة)",
            "أنشطة فنية وثقافية",
            "ندوات ولقاءات مع القادة",
            "فعاليات التواصل المهني"
        ],
        faq_subtitle: "الأسئلة الشائعة",
        faq_title: "كل ما تود معرفته",
        faq_items: [
            { q: "ما هي شروط القبول؟", a: "الحصول على شهادة البكالوريا أو ما يعادلها. يعتمد القبول على الانتقاء والمقابلة الشخصية." },
            { q: "هل الدبلوم معترف به دولياً؟", a: "بالتأكيد، دبلوماتنا معتمدة من الدولة وتفتح آفاقاً مهنية عالمية." },
            { q: "هل هناك مساعدة في الحصول على تدريب؟", a: "نعم، مركز المسار المهني يواكب كل طالب في بحثه عن تدريب مهني." }
        ],
        contact_form_title: "اتصل بقسم القبول",
        contact_send: "إرسال الرسالة",
        placeholder_name: "الاسم الكامل",
        placeholder_email: "البريد الإلكتروني",
        placeholder_msg: "طلبك هنا...",
    },
    en: {
        nav_home: "Home",
        nav_about: "Institute",
        nav_infra: "Campus",
        nav_majors: "Majors",
        nav_life: "Student Life",
        nav_contact: "Contact",
        apply_btn: "Apply Now",
        hero_badge: "✨ 2024 - 2025 Admissions Open",
        hero_title: "The Professional <span class='text-blue-500'>Sahara</span> Elite",
        hero_desc: "CMC Laayoune is the major innovation hub training future economic leaders of the Southern Provinces. A unique 4.0 learning ecosystem in Morocco.",
        hero_cta_1: "View Programs",
        hero_cta_2: "Discover CMC",
        about_subtitle: "Our Identity",
        about_title: "A New Training Model",
        about_text: "Inspired by the Royal vision for advanced regionalization, CMC Laayoune is more than an institute. It's a vocational city where technology meets ambition to drive the Sahara towards a knowledge economy.",
        about_features: [
            { title: "Global Standard", desc: "Accredited & recognized degrees" },
            { title: "Leadership Lab", desc: "Personalized career coaching" },
            { title: "Digital Center", desc: "Cutting-edge IT infrastructure" },
            { title: "Soft Skills", desc: "Human development focus" }
        ],
        admission_steps: [
            { step: "01", title: "Registration", desc: "Submit your file via our MyWay digital platform." },
            { step: "02", title: "Selection", desc: "Psychometric and technical positioning tests." },
            { step: "03", title: "Interview", desc: "Meet our jury to evaluate your motivation." },
            { step: "04", title: "Admission", desc: "Confirmation and start of your excellence journey." }
        ],
        infra_subtitle: "The Campus",
        infra_title: "World-Class Environment",
        infra_list: [
            { title: "Digital Studio", desc: "Content creation and e-learning laboratory.", img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600" },
            { title: "Media Library", desc: "Connected research and cultural space.", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600" },
            { title: "Innovation Space", desc: "Coworking space for student entrepreneurship.", img: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=600" },
            { title: "Social Hub", desc: "Relaxation zones and social exchange areas.", img: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=600" }
        ],
        majors_subtitle: "Programs",
        majors_title: "Jobs of Tomorrow",
        majors_list: [
            { name: "Management & Finance", desc: "Strategic steering and operational management.", img: "https://images.unsplash.com/photo-1454165833767-027ffea70288?q=80&w=800" },
            { name: "Digital & Design", desc: "E-commerce strategies and graphic design.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800" },
            { name: "Web Development", desc: "Coding, Full-stack and Artificial Intelligence.", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800" },
            { name: "Port Logistics", desc: "Flow management and international trade.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800" }
        ],
        life_subtitle: "Student Life",
        life_title: "Live Your Potential",
        life_text: "Learning at CMC doesn't stop when class ends. Our ecosystem promotes the expression of all your talents.",
        life_items: [
            "Sports Clubs (Football, Basketball)",
            "Artistic & Cultural Activities",
            "Leader Masterclasses",
            "Professional Networking Events"
        ],
        faq_subtitle: "FAQ",
        faq_title: "Everything About CMC",
        faq_items: [
            { q: "What are the admission requirements?", a: "High School Diploma or equivalent. Selection is based on academic performance and interview." },
            { q: "Is the degree internationally recognized?", a: "Absolutely. Our degrees are accredited by OFPPT and the State, opening doors worldwide." },
            { q: "Is there help for internships?", a: "Yes, our Career Center supports every student in finding internships via our network." }
        ],
        contact_form_title: "Contact Admissions",
        contact_send: "Send Message",
        placeholder_name: "Full name",
        placeholder_email: "Email address",
        placeholder_msg: "Your request...",
    }
};

let currentLang = localStorage.getItem('lang') || 'fr';

const navItems = [
    { key: 'nav_home', href: '#home' },
    { key: 'nav_about', href: '#about' },
    { key: 'nav_infra', href: '#infra' },
    { key: 'nav_majors', href: '#majors' },
    { key: 'nav_life', href: '#life' },
    { key: 'nav_contact', href: '#contact' },
];

window.changeLanguage = function(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateUI();
};

function updateUI() {
    const t = translations[currentLang];
    const isRtl = currentLang === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;

    // Language select sync
    document.getElementById('lang-select').value = currentLang;

    // Nav
    const navCont = document.getElementById('nav-items');
    const mobileCont = document.getElementById('mobile-menu');
    const navHtml = navItems.map(i => `<a href="${i.href}" class="hover:text-blue-400 transition-colors uppercase tracking-[0.2em] font-bold">${t[i.key]}</a>`).join('');
    if(navCont) navCont.innerHTML = navHtml;
    if(mobileCont) mobileCont.innerHTML = navHtml.replace(/href/g, 'onclick="toggleMenu()" href');

    // Hero content
    document.getElementById('hero-title').innerHTML = t.hero_title;
    document.getElementById('hero-desc').textContent = t.hero_desc;

    // Admission Steps
    const stepsGrid = document.getElementById('steps-grid');
    if(stepsGrid) {
        stepsGrid.innerHTML = t.admission_steps.map(s => `
            <div class="step-card bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 reveal relative overflow-hidden group">
                <div class="text-blue-600 font-black text-6xl opacity-10 absolute -right-2 -top-2 group-hover:opacity-20 transition-opacity">${s.step}</div>
                <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 font-black text-sm">${s.step}</div>
                <h4 class="text-xl font-black mb-4 text-slate-900 leading-tight">${s.title}</h4>
                <p class="text-slate-500 text-sm font-medium leading-relaxed">${s.desc}</p>
            </div>
        `).join('');
    }

    // Static Texts (data-i18n)
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(t[key]) el.innerHTML = t[key];
    });

    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if(t[key]) el.placeholder = t[key];
    });

    // Features grid (About)
    const featGrid = document.getElementById('features-grid');
    if(featGrid) {
        featGrid.innerHTML = t.about_features.map(f => `
            <div class="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:border-blue-300 transition-all duration-500 shadow-sm">
                <h5 class="font-black text-slate-900 mb-2 text-lg">${f.title}</h5>
                <p class="text-slate-400 text-[11px] font-black uppercase tracking-widest">${f.desc}</p>
            </div>
        `).join('');
    }

    // Infrastructure
    const infraGrid = document.getElementById('infra-grid');
    if(infraGrid) {
        infraGrid.innerHTML = t.infra_list.map(f => `
            <div class="group relative rounded-[2.5rem] overflow-hidden h-80 shadow-2xl reveal">
                <img src="${f.img}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                    <h4 class="text-white font-black text-2xl mb-2">${f.title}</h4>
                    <p class="text-blue-100/60 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-700">${f.desc}</p>
                </div>
            </div>
        `).join('');
    }

    // Majors
    const majorGrid = document.getElementById('majors-grid');
    if(majorGrid) {
        majorGrid.innerHTML = t.majors_list.map(m => `
            <div class="bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-3xl transition-all duration-700 border border-slate-100 reveal">
                <div class="h-64 relative overflow-hidden">
                    <img src="${m.img}" class="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700">
                    <div class="absolute inset-0 bg-blue-600/10"></div>
                </div>
                <div class="p-12">
                    <h4 class="text-2xl font-black mb-4 text-slate-900 leading-tight">${m.name}</h4>
                    <p class="text-slate-500 text-sm mb-10 leading-relaxed font-medium">${m.desc}</p>
                    <a href="#contact" class="flex items-center text-blue-600 font-black text-xs uppercase tracking-[0.2em] group">
                        CANDIDATER
                        <svg class="w-4 h-4 ml-3 rtl:mr-3 rtl:ml-0 group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </a>
                </div>
            </div>
        `).join('');
    }

    // Life items
    const lifeList = document.getElementById('life-list');
    if(lifeList) {
        lifeList.innerHTML = t.life_items.map(item => `
            <div class="flex items-center space-x-6 rtl:space-x-reverse reveal">
                <div class="w-12 h-px bg-blue-500 shrink-0"></div>
                <span class="text-slate-200 text-lg font-bold">${item}</span>
            </div>
        `).join('');
    }

    // FAQ
    const faqCont = document.getElementById('faq-container');
    if(faqCont) {
        faqCont.innerHTML = t.faq_items.map((item, i) => `
            <div class="faq-item">
                <button onclick="toggleFaq(${i})" class="faq-question">
                    <span>${item.q}</span>
                    <svg class="faq-icon w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </button>
                <div class="faq-answer">
                    <p class="font-medium leading-relaxed">${item.a}</p>
                </div>
            </div>
        `).join('');
    }

    handleScrollReveal();
}

window.toggleFaq = function(index) {
    const items = document.querySelectorAll('.faq-item');
    const isActive = items[index].classList.contains('active');
    items.forEach(it => it.classList.remove('active'));
    if(!isActive) items[index].classList.add('active');
};

window.toggleMenu = function() {
    const m = document.getElementById('mobile-menu');
    m.classList.toggle('hidden');
};

document.getElementById('mobile-btn').onclick = window.toggleMenu;

function handleScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 50) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', () => {
    const n = document.getElementById('navbar');
    const btt = document.getElementById('back-to-top');
    if(window.scrollY > 80) {
        n.classList.add('scrolled');
        btt.style.opacity = "1";
        btt.style.transform = "translateY(0)";
    } else {
        n.classList.remove('scrolled');
        btt.style.opacity = "0";
        btt.style.transform = "translateY(32px)";
    }
    handleScrollReveal();
});

document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('year');
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();
    updateUI();
});
