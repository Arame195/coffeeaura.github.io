const modal = document.getElementById('drinkModal');
const modalContent = document.querySelector('.modal-content');

const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const priceSmall = document.getElementById('priceSmall');
const priceMedium = document.getElementById('priceMedium');
const priceLarge = document.getElementById('priceLarge');


let currentIndex = 0;

const drinksData = {

  // ===== КОФЕ =====
  "эспрессо": { description: "Освежающий союз эспрессо.", prices: ["90 ₽"] },
  "эспрессо тоник": { description: "Освежающий союз эспрессо и тоника с яркой цитрусовой горчинкой.", prices: ["240 ₽"] },
  "глясе": { description: "Контраст горячего эспрессо и нежного ванильного мороженого.", prices: ["300 ₽"] },
  "горячий шоколад": { description: "Густой горячий шоколад с насыщенной какао-глубиной.", prices: ["250 ₽"] },
  "раф": { description: "Бархатный, деликатный вкус с тонкой сливочной сладостью", prices: ["250 ₽"] },
  "армянский американо": { description: "Глубокий, Армянский и чистый вкус с благородной горчинкой и выразительным ароматом.", prices: ["150 ₽"] },
  "американо": { description: "Глубокий, чистый вкус с благородной горчинкой и выразительным ароматом.", prices: ["150 ₽"] },
  "капучино": { description: "Идеальный баланс эспрессо и воздушной молочной текстуры.", prices: ["210 ₽"] },
  "Флэт уайт": { description: "Концентрированный вкус кофе с бархатной сливочной глубиной.", prices: ["230 ₽"] },
  "какао": { description: "Густой, тёплый шоколад с насыщенным ароматом какао-бобов.", prices: ["210 ₽"] },
  "латте": { description: "Нежная текстура молока, подчёркивающая характер эспрессо.", prices: ["210 ₽"] },
  "мокачино": { description: "Слияние кофе и тёмного шоколада с изысканной сладостью.", prices: ["230 ₽"] },
  "раф с урбечем": { description: "Сливочный раф с ореховым оттенком и мягкой карамельной нотой.", prices: ["280 ₽"] },
  

  // ===== МИЛКШЕЙКИ =====
  "фраппучино": { description: "Освежающий кофейный коктейль с ледяной текстурой.", prices: ["260 ₽"] },
  "айс латте": { description: "Освежающая интерпретация классики с мягким молочным послевкусием.", prices: ["230  ₽"] },
  "Айс с урбечем": { description: "Холодный кофе с тонкими ореховыми акцентами и кремовой структурой.", prices: ["350 ₽"] },
  "нутелла": { description: "Густая шоколадно-ореховая гармония с кремовой текстурой.", prices: ["300 ₽"] },
  "киндер": { description: "Нежный сливочный профиль с мягкой шоколадной нотой.", prices: ["300 ₽"] },
  "марс": { description: "Карамель и шоколад в насыщенном, плотном исполнении.", prices: ["300 ₽"] },
  "блек стар": { description: "Интенсивный шоколадный вкус с глубоким ароматом.", prices: ["300 ₽"] },
  "баунти": { description: "Кокосовая свежесть в сочетании с деликатным шоколадом.", prices: ["300 ₽"] },
  "финик с бананом": { description: "Естественная сладость банана с благородной глубиной финика.", prices: ["300 ₽"] },
  "Милкшейк": { description: "Классический густой коктейль с идеально сбалансированным вкусом.", prices: ["260 ₽"] },
  "Cookie": { description: "Кремовая текстура с хрустящими нотами печенья.", prices: ["300 ₽"] },
  "орео": { description: "Шоколадное печенье и нежный крем в бархатной подаче.", prices: ["280 ₽"] },

  // ===== ХОЛОДНЫЕ НАПИТКИ =====
  "бамбл": { description: "Освежающий напиток с ярким вкусом и лёгкой игристой текстурой.", prices: ["260 ₽"] },
  "апельсиновый бамбл": { description: "Более лёгкая и бодрящая версия с чистым фруктовым профилем.", prices: ["380 ₽"] },
  "зелёный матча": { description: "Тонкий травяной профиль с освежающей глубиной вкуса.", prices: ["200 ₽"] },
  "розовая матча": { description: "Более выразительный матча с насыщенным ароматом.", prices: ["200 ₽"] },
  "Яблоко - киви": { description: "Освежающий фруктовый напиток с лёгкой кислинкой.", prices: ["270 ₽"] },
  "мохито": { description: "Свежесть лайма и мяты в лёгком прохладном исполнении.", prices: ["250 ₽"] },
  "мохито клубничный": { description: "Сочная клубника и мята с освежающим послевкусием.", prices: ["250 ₽"] },
  "манго": { description: "Тропическая глубина манго с выразительной маракуйей.", prices: ["250 ₽"] },
  "Ягодный лимонад": { description: "Насыщенный ягодный микс с мягкой кислинкой и свежим послевкусием.", prices: ["250 ₽"] },
  "Цитрусовый лимонад": { description: "Яркий цитрусовый купаж с освежающей природной кислотностью.", prices: ["250 ₽"] },

  // ===== ЧАЙ =====
  "клубничный": { description: "Нежный клубничный аромат с лёгкой сладостью и мягким послевкусием.", prices: ["210 ₽"] },
  "малина-гранатовый": { description: "Яркая малина в сочетании с благородной кислинкой граната.", prices: ["210 ₽"] },
  "каркаде": { description: "Фруктовая композиция с насыщенным ароматом и лёгкой свежестью.", prices: ["220 ₽"] },
  "зелёный": { description: "Классический зелёный чай с чистым вкусом и тонким травяным профилем.", prices: ["200 ₽"] },
  "персиковый": { description: "Деликатный персиковый оттенок в мягкой чайной основе.", prices: ["220 ₽"] },
  "фирменный": { description: "Авторская смесь с глубоким ароматом и выразительным характером.", prices: ["250 ₽"] },
  "цитрусовый": { description: "Освежающий цитрусовый купаж с бодрящим послевкусием.", prices: ["230 ₽"] },
  "Чёрный": { description: "Насыщенный чёрный чай с плотной структурой и благородной терпкостью.", prices: ["200 ₽"] },
  "жасминовый": { description: "Тонкий цветочный аромат жасмина в изящной чайной композиции.", prices: ["210 ₽"] },
  "Английская Королева": { description: "Элегантный классический купаж с глубоким, бархатным вкусом.", prices: ["200 ₽"] },
  "ягодный": { description: "Ягодный букет с мягкой кислинкой и насыщенным ароматом.", prices: ["250 ₽"] },
  "облепиховый": { description: "Облепиха с яркой природной кислинкой и согревающим эффектом.", prices: ["250 ₽"] },
  "горный": { description: "Чистый травяной профиль с освежающей горной свежестью.", prices: ["210 ₽"] },
  "таёжный": { description: "Глубокий травяной купаж с природной хвойной нотой.", prices: ["210 ₽"] },
  "глинтвейн": { description: "Пряный аромат специй и фруктов в согревающей интерпретации.", prices: ["250 ₽"] },
  "манго": { description: "Тропическая сладость манго с яркой маракуйей в чайной основе.", prices: ["210 ₽"] },
  
  // ===== Десерты =====
  "тирамису": { description: "Нежный итальянский десерт с ароматом кофе и сливочной маскарпоне, тающий во рту.", prices: ["220 ₽"]},
  "эклер": { description: "Легкий и воздушный эклер с бархатистой начинкой, который заставляет улыбаться с первого укуса.", prices: ["80 ₽"]},
  "кольцо": { description: "Сладкое кольцо из нежного теста с золотистой корочкой и мягкой, ароматной серединкой.", prices: ["80 ₽"]},
  "сникерс": { description: "Сочетание карамели, орехов и шоколада, которое дарит настоящий взрыв вкуса.", prices: ["220 ₽"]},
  "молочная девочка": { description: " Молочный десерт с нежной текстурой и тонким сладким ароматом, словно из детства.", prices: ["210 ₽"]},
  "Пахлава": { description: "Восточная сладость с орехами, медом и золотистой слоёной корочкой, тающая во рту.", prices: ["120 ₽"]},
  "трайфл": { description: "Яркий многослойный десерт с фруктами, кремом и бисквитом, словно маленький праздник.", prices: ["210 ₽"]},
  "бургер": { description: "Мини-десерт в форме бургерчика с нежной начинкой, сладкий и забавный одновременно.", prices: ["180 ₽"]},
  "блинний": { description: " Тонкие блинчики с легкой начинкой, которые дарят тепло и уют с каждым кусочком.", prices: ["100 ₽"]},
  "сендвич": { description: "Сладкий сэндвич с кремовой начинкой, идеален к чашке кофе или чая.", prices: ["180 ₽" ]},
};

function updateModal(index) {

  const cards = document.querySelectorAll('.coffee-card');
const modalCategory = document.getElementById('modal-category');

cards.forEach((card, index) => {
  
  card.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(index);

    const section = this.closest('.coffee-section');
    const categoryTitle = section.querySelector('.coffee-title').textContent;

    modalCategory.textContent = categoryTitle;
  });
});
  const card = cards[index];

  const imgSrc = card.querySelector('img').src;
  const title = card.querySelector('.coffee-name').textContent.trim();

  modalImg.src = imgSrc;
  modalTitle.textContent = title;

  const drink = drinksData[title];

  if (drink) {
    modalDescription.textContent = drink.description;
    priceSmall.textContent = drink.prices[0];
    priceMedium.textContent = drink.prices[1];
    priceLarge.textContent = drink.prices[2];
  } else {
    modalDescription.textContent = "...";
    priceSmall.textContent = "...";
    priceMedium.textContent = "...";
    priceLarge.textContent = "...";
  }
}

function openModal(index) {
  currentIndex = index;
  updateModal(index);
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}

cards.forEach((card, index) => {
  card.addEventListener('click', () => openModal(index));
});

document.querySelector('.close-btn').addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
  if (!modalContent.contains(e.target)) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === "Escape") closeModal();
});

document.querySelector('.arrow.left').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateModal(currentIndex);
});

document.querySelector('.arrow.right').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateModal(currentIndex);
});