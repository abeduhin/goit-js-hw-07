import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// Перевіряємо чи працює імпорт

const galleryImageEl = document.querySelector('.gallery')
// Звертаємось до елементу з класом gallery
const itemsArray = []
// Створюємо пустий масив

galleryItems.forEach(element => {
	const galleryItem = document.createElement('div')
	galleryItem.className = 'gallery__item';

	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = element.original;

	const galleryImage = document.createElement('img')
    galleryImage.className = 'gallery__image'
    galleryImage.src = element.preview;

    galleryImage.setAttribute('data-source', element.original)
    galleryImage.alt = element.description;

	galleryItem.append(galleryLink)
	galleryLink.append(galleryImage)
	itemsArray.push(galleryItem)
})

// Перебираємо кожен елемент вихідної галереї зображень та добавляємо HTML теги та новий атрибут до великого зображення , потім вкладаємо (розмітка HTML) та добавляємо в массив

galleryImageEl.append(...itemsArray)

// Вставляємо в HTML

galleryImageEl.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = e.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)

    instance.show()
// Вішаємо слухача події на клік, відміняємо по замовчуванню роботу браузера та визиваємо модальне вікно через бібліотеку. Делегуємо подію. Призначаємо модальному вікну значення атрибуту великого зображення.
    
    galleryImageEl.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			instance.close()
		}
	})
// Добавляємо відміну модального вікна кнопкою Escape (натискання)
})