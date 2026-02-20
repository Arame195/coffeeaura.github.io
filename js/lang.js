const buttons = document.querySelectorAll('.lang-switch button');
const texts = document.querySelectorAll('[data-am]');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;

        texts.forEach(el => {
            el.textContent = el.dataset[lang];
        });
    });
});

const translations = {
    ru: {
        // Burger Manu
        glavnaya: "Главная",
        menu: "Меню",
        about: "О Нас",

        // Index HTML
        welcome: "Добро пожаловать в Aura",
        welcome_p: "Aura — кофейня, где каждый глоток кофе создаёт настроение и дарит маленькие моменты радости. Мы открылись для всех, кто ценит уютную атмосферу, качественные напитки и искреннее гостеприимство.",
        podrobno: "читать подробно",
        love: "Следуй за любовью...",
        hero_p: "Наша история начинается с этой чашки. Первый адрес, первый аромат и ты — наш самый важный гость. Мы только открылись, чтобы каждый твой день был наполнен вкусом и теплом. Приходи за вдохновением — наша общая история только начинается!",
        why_aura: "Почему выбирают нас?",
        zerna: "☕️ Свежие зёрна",
        barists: "👨‍🍳 Опытные бариста",
        mesto: "📍 Удобное место",
        vdoxnovenie: "☕️🥤 Вдохновение в каждой чашке",
        energy: "☕️❄️ Энергия для новых идей",
        vkus: "🥛 Вкус, который запомнится",
        modno: "☑️ Здесь модно пить кофе",
        adres: "Наш адрес",
        location: "г.Черкесск ул.Горького 2",
        phone: "Телефон",
        works: "Часы работы",
        svyaz: "Свяжитесь с нами",
        svyaz_p: "Мы готовим лучший кофе в городе.Приходите насладиться ароматом свежей арабики и уютной атмосферой.",
        private_text: "© 2026 — Все права защищены",

        // About Page
        text1: "В Aura мы создаём атмосферу уюта и вкуса.Свежая обжарка, авторские напитки и внимание к деталям — это больше, чем кофе. Это ощущение.",
        text2: "Aura — это пространство, где аромат свежемолотого кофе встречается с тёплым светом и спокойной атмосферой.",
        text3: "Мы тщательно подбираем зёрна, работаем со свежей обжаркой и создаём напитки, в которых чувствуется характер — от мягкого латте до насыщенного эспрессо.",
        text4: "Здесь удобно встретиться с друзьями, провести деловую встречу или спокойно поработать за ноутбуком. Мягкие кресла, большие столы и тишина, в которой легко сосредоточиться.",
        text5: "Aura — это не просто кофе. Это ощущение. Почувствуйте нашу атмосферу лично. Ваше идеальное место в Aura уже ждёт вас.",

        // Menu Page
        kofe: "Кофе, который вдохновляет",
        kofe_text: "От насыщенного эспрессо до нежных авторских напитков — в нашем меню вы найдёте вкус для любого настроения. Здесь кофе — это не просто напиток, а маленький ритуал удовольствия.",
        menu: "МЕНЮ",
        data_kofe: "Кофе",
        milkshake: "Милкшейки",
        napitki: "Холодные Напитки",
        tea: "Чай",
    },

    hy: {
        // Burger Manu
        glavnaya: "Գլխավոր",
        menu: "Ճաշացանկ",
        about: "Մեր Մասին",

        // Index HTML
        welcome: "Բարի գալուստ Aura‑ում",
        welcome_p: "Aura‑ն սրճարան է, որտեղ սուրճի յուրաքանչյուր գավաթ ստեղծում է տրամադրություն և փոքր երջանիկ պահեր։ Մենք բացվել ենք բոլորի համար, ովքեր գնահատում են հարմարավետ աուրան, որակյալ ըմպելիքները և անկեղծ հյուրընկալությունը։",
        podrobno: "կարդալ մանրամասն",
        love: "Եղիր սիրո հետևում...",
        hero_p: "Մեր պատմությունը սկսվում է այս գավաթից։ Առաջին հասցե, առաջին բույրը և դու — մեր ամենաարժեքավոր հյուր։ Մենք պարզապես բացվել ենք, որպեսզի քո յուրաքանչյուր օր լցված լինի համով և ջերմությամբ։ Գնա ոգեշնչման համար՝ մեր ընդհանուր պատմությունը միայն սկսվում է։",
        why_aura: "Ինչու ընտրում են մեզ?",
        zerna: "☕️ Թարմ սերմեր",
        barists: "👨‍🍳 Փորձառու բարիստաներ",
        mesto: "📍 Հարմար վայր",
        vdoxnovenie: "☕️🥤 Ոգեշնչում յուրաքանչյուր գավաթում",
        energy: "☕️❄️ Էներգիա նոր գաղափարների համար",
        vkus: "🥛 Համ, որը կմնա հիշողության մեջ",
        modno: "☑️ Այստեղ արդիական է սուրճ ըմպելը",
        adres: "Մեր հասցեն",
        location: "Ք. Չերքեսսկ, Գորգկի 2",
        phone: "Հեռախոս",
        works: "Աշխատաժամեր",
        svyaz: "Կապ մեզ հետ",
        svyaz_p: "Մենք պատրաստում ենք քաղաքի լավագույն սուրճը։ Եկեք հաճույք ստանալ թարմ Արաբիկայի բույրով և հարմարավետ մթնոլորտով։",
        private_text: "© 2026 — Բոլոր իրավունքները պաշտպանված են",

        // About Page
        text1: "Aura‑ում մենք ստեղծում ենք հարմարավետության և համի ազդակ։ Թարմ տոստավորում, հեղինակային ըմպելիքներ և մանրամասներին ուշադրություն — սա ավելի է, քան սուրճ։ Դա զգացողություն է։",
        text2: "Aura‑ն այն տարածքն է, ուր թարմացած սուրճի բույրը հանդիպում է զով լույսին և խաղաղ մթնոլորտին։",
        text3: "Մենք կշռադատ կերպով ընտրում ենք սերմերը, աշխատում ենք թարմ տոստավորումով և ստեղծում ըմպելիքներ, որոնց մեջ երեւում է բնավորությունը՝ զով լատտեից մինչ խորը էսպրեսո։",
        text4: "Այստեղ հարմար է հանդիպել ընկերների հետ, անցկացնել բիզնես հանդիպում կամ հանգիստ աշխատել նոութբուքով։ Թույլ բազմոցներ, մեծ սեղաններ և լռություն, որտեղ հեշտ է կենտրոնանալ։",
        text5: "Aura‑ն միայն սուրճ չէ։ Դա զգացողություն է։ Զգացեք մեր աուրան ինքնուրույն։ Ձեր ձիեռքնավոր տեղը Aura‑ում արդեն սպասում է ձեզ։",

        // Menu Page
        kofe: "Սուրճ, որը ոգեշնչում է",
        kofe_text: "խորը էսպրեսոյից մինչև նուրբ հեղինակային ըմպելիքներ — մեր մենյուում կգտնեք համ ցանկացած տրամադրության։ Այստեղ սուրճը ոչ միայն ըմպելիք է, այլ փոքր ժամադրություն հաճույքի համար։",
        menu: "MENU",
        data_kofe: "Սուրճ",
        milkshake: "Միլքշեյկեր",
        napitki: "Սառը Ըմպելիքներ",
        tea: "Թեյ",
    },

    en: {
        // Burger Manu
        glavnaya: "Home",
        menu: "Menu",
        about: "About Us",

        // Index HTML
        welcome: "Welcome to Aura",
        welcome_p: "Aura is a café where every sip of coffee creates a mood and brings little moments of joy. We opened for everyone who appreciates a cozy atmosphere, quality drinks, and genuine hospitality.",
        podrobno: "read more",
        love: "Follow the love...",
        hero_p: "Our story begins with this cup. First address, first aroma, and you — our most important guest. We have just opened to fill your days with taste and warmth. Come for inspiration — our shared story is just beginning!",
        why_aura: "Why choose us?",
        zerna: "☕️ Fresh beans",
        barists: "👨‍🍳 Experienced baristas",
        mesto: "📍 Convenient location",
        vdoxnovenie: "☕️🥤 Inspiration in every cup",
        energy: "☕️❄️ Energy for new ideas",
        vkus: "🥛 A taste to remember",
        modno: "☑️ It’s trendy to drink coffee here",
        adres: "Our address",
        location: "Cherkessk city, Gorky Street 2",
        phone: "Phone",
        works: "Working hours",
        svyaz: "Contact us",
        svyaz_p: "We make the best coffee in town. Come enjoy the aroma of fresh Arabica and a cozy atmosphere.",
        private_text: "© 2026 — All rights reserved",

        // About Page
        text1: "At Aura we create an atmosphere of comfort and taste. Fresh roasting, signature drinks, and attention to detail — it’s more than coffee. It’s a feeling.",
        text2: "Aura is a space where the aroma of freshly ground coffee meets warm light and a calm atmosphere.",
        text3: "We carefully select beans, work with fresh roasts, and create drinks with character — from smooth lattes to rich espresso.",
        text4: "It’s a great place to meet friends, hold a business meeting, or quietly work on your laptop. Soft chairs, large tables, and peaceful surroundings help you focus.",
        text5: "Aura is not just coffee. It’s a feeling. Experience our atmosphere in person. Your perfect spot at Aura is waiting for you.",

        // Menu Page
        kofe: "Coffee that inspires",
        kofe_text: "From rich espresso to delicate signature drinks — in our menu you’ll find a taste for every mood. Here coffee isn’t just a drink, it’s a small ritual of pleasure.",
        menu: "MENU",
        data_kofe: "Coffee",
        milkshake: "Milkshakes",
        napitki: "Cold Drinks",
        tea: "Tea",
    }
};

function changeLanguage(lang) {
    localStorage.setItem('lang', lang);

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // 🔥 ДОБАВЛЯЕМ ВОТ ЭТО
    if (typeof initScrollText === "function") {
        initScrollText();
    }

    if (typeof updateAnimation === "function") {
        updateAnimation();
    }
}

// При загрузке страницы проверяем выбранный язык
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'ru';
    changeLanguage(savedLang);
});

// Кнопки смены языка
const langButtons = document.querySelectorAll('.lang-switch button');
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        changeLanguage(lang);

        // Закрываем меню после смены языка
        const menu = document.querySelector('.menu'); // ваш селектор меню
        if (menu) menu.classList.remove('active');
    });
});