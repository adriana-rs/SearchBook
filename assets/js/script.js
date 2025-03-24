import '../css/style.css';
import myImage from '../img/bookshelf_1470368.png';
import axios from 'axios';

// Creazione degli elementi DOM
const imgElement = document.createElement('img');
const imgContainer = document.getElementById('img-id');
const bookList = document.getElementById('bookList');
imgElement.src = myImage;  
imgContainer.appendChild(imgElement);

// Funzione per mostrare o nascondere elementi
function toggleVisibility(elementId, show) {
    const element = document.getElementById(elementId);
    if(show) {
        element.classList.remove('hidden');
        element.classList.add('visible');
    } else {
        element.classList.remove('visible');
        element.classList.add('hidden');
    }
}

// Funzione per indicatore di caricamento
function showLoading(show) {
    toggleVisibility('loading', show);
}

// Funzione per mostrare il titolo della lista dei libri
function listTitle(show) {
    toggleVisibility('researchTitle', show);
}

// Funzione per mostrare la descrizione del libro 
function descriptionBook(show) {
    toggleVisibility('descriptionTitle', show);
    toggleVisibility('descriptionDiv', show);
}

// Funzione per cercare i libri in base alla categoria
function searchBook() {
    imgElement.src = myImage;  
    imgContainer.appendChild(imgElement);
    
    const category = document.getElementById('categoryInput').value.trim();

    if(category) {
        showLoading(true);
        axios.get(`https://openlibrary.org/subjects/${category}.json`)
        .then(response => {
            console.log('Data received from the API:', response.data);
            showLoading(false);
            displayBook(response.data);
        })
        .catch(error => {
            console.error('Error in the API request:', error);
            showLoading(false);
            alert('Unable to load the data. Please try again later.');
        })
    } else {
        console.log('Category not entered:', category);
        alert('Please enter a category');
    }
}

// Funzione per visualizzare la lista dei libri
function displayBook(data) {
     bookList.innerHTML = '';
    if(data.works && data.works.length > 0) {
        data.works.forEach(book => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${book.title}</strong><br>
                Authors: ${book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown'}<br>
                <button id="bookBtn${book.key}">Show description</button>
            `;
            bookList.appendChild(li);

            // Aggiungo il click per mostrare la descrizione del libro
            document.getElementById(`bookBtn${book.key}`).addEventListener('click', function() {
                fetchBookDescription(book.key);
        });
    });
        listTitle(true); 
    } else {
        bookList.innerHTML = 'No books found for this category.';
        listTitle(false);
        descriptionBook(false);
    }
}

// Funzione per ottenere la descrizione
function fetchBookDescription(bookKey) {
    console.log('Book key:', bookKey); 
    axios.get(`https://openlibrary.org${bookKey}.json`)
        .then(response => {
            const data = response.data;
            const description = data.description ? (typeof data.description === 'string' ? data.description : data.description.value) : 'Description not available.';
            console.log('Book description:', description);
            document.getElementById('descriptionDiv').innerText = description;
            descriptionBook(true)

            // Scroll della pagina fino a descriptionDiv
            document.getElementById('descriptionDiv').scrollIntoView({ behavior: 'smooth' });
        })
        .catch(error => {
            showLoading(false);
            console.log('Error retrieving the book description: ', error);
            document.getElementById('descriptionDiv').innerText = 'Error retrieving the description';
            descriptionBook(false);
        });
    }

    // Funzione per mostrare/ nascondere il bottone di scroll
    function handleScroll() {
    const scrollBtn = document.getElementById('scroll');
    window.onscroll = function() {
        if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    };

    // Funzione per scrollare verso l'altro con il click
    scrollBtn.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    };
}

    // Funzione per inizializzare gli eventListener
    function init() {
    // Aggiungo EventListener al bottore per la ricerca 
    document.getElementById('searchBtn').addEventListener('click', searchBook);

    // Aggiungo il click da tastiera con il tasto "Enter"
    document.getElementById('categoryInput').addEventListener('keydown', function (event) {
        if(event.key === 'Enter') {
            searchBook();
        }
    });
}

// Funzione per inizializzare tutte le iterazioni
function initializeApp() {
    init();
    handleScroll();
}

// Chiamata a funzione per inizializzare tutto
initializeApp();

