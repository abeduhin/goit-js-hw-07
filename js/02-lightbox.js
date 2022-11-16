import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// Перевіряємо чи працює імпорт

const galleryImageEl = document.querySelector('.gallery');
// Звертаємось до елементу з класом gallery
const items = [];
// Створюємо пустий масив
galleryItems.forEach(element => {
	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = element.original
	const galleryImage = document.createElement('img')
	galleryImage.className = 'gallery__image'
	galleryImage.src = element.preview
	galleryImage.setAttribute('title', element.description)
	galleryImage.alt = element.description

	galleryLink.append(galleryImage)
	items.push(galleryLink)
})
// Перебираємо кожен елемент вихідної галереї зображень та добавляємо HTML теги та новий атрибут до опису зображення , потім вкладаємо (розмітка HTML) та добавляємо в массив

galleryImageEl.append(...items);

// Вставляємо в HTML

new SimpleLightbox('.gallery a', {
	captionDelay: 250
})
// Підключаємо бібліотеку та вибираєсмо опцію затримки зображення 250мс.