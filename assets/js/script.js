import '../css/style.css';
import myImage from '../img/bookshelf_1470368.png';
import axios from 'axios';

const bookList = document.getElementById('bookList');

//funzione per mostrare o nascondere elementi
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
//funzione per indicatore di caricamento
function showLoading(show) {
    toggleVisibility('loading', show);
}

//funzione per mostrare il titolo della lista dei libri
function listTitle(show) {
    toggleVisibility('researchTitle', show);
}

//funzione per mostrare la descrizione del libro 
function descriptionBook(show) {
    toggleVisibility('descriptionTitle', show);
    toggleVisibility('descriptionDiv', show);
}

//funzione per cercare i libri in base alla categoria
function searchBook() {
    const category = document.getElementById('categoryInput').value.trim();
    if(category) {
        showLoading(true);

axios.get(`https://openlibrary.org/subjects/${category}.json`)
    .then(response => {
        console.log('Dati ricevuti dalla API:', response.data);
        showLoading(false);
        displayBook(response.data);
    })
    .catch(error => {
        console.error('Errore nella richiesta API:', error);
        showLoading(false);
        alert('Impossibile caricare i dati. Riprova più tardi.');
    })
} else {
    console.log('Categoria non inserita:', category);
    alert('Per favore inserisci una categoria');
    }
}

//aggiungo EventListener al bottore per la ricerca 
document.getElementById('searchBtn').addEventListener('click', searchBook);

//aggiungo il click da tastiera con il tasto "Enter"
document.getElementById('categoryInput').addEventListener('keydown', function (event) {
    if(event.key === 'Enter') {
        searchBook();
    }
});

//funzione per visualizzare la lista dei libri
function displayBook(data) {
    bookList.innerHTML = '';
    if(data.works && data.works.length > 0) {
        data.works.forEach(book => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${book.title}</strong><br>
                Autori: ${book.authors ? book.authors.map(author => author.name).join(', ') : 'Sconosciuti'}<br>
                <button id="bookBtn${book.key}">Mostra descrizione</button>
            `;
            bookList.appendChild(li);
            document.getElementById(`bookBtn${book.key}`).addEventListener('click', function() {
                fetchBookDescription(book.key);
        });
    });
        listTitle(true); 
    } else {
        bookList.innerHTML = 'Nessun libro trovato per questa categoria.';
        listTitle(false);
        descriptionBook(false);
    }
}

//funzione per ottenere la descrizione
function fetchBookDescription(bookKey) {
    console.log('Key del libro:', bookKey); 
    axios.get(`https://openlibrary.org${bookKey}.json`)
        .then(response => {
            const data = response.data;
            const description = data.description ? (typeof data.description === 'string' ? data.description : data.description.value) : 'Descrizione non disponibile.';
            console.log('Descrizione del libro:', description);
            document.getElementById('descriptionDiv').innerText = description;
            descriptionBook(true)

            //scroll della pagina fino a descriptionDiv
            document.getElementById('descriptionDiv').scrollIntoView({ behavior: 'smooth' });
        })
        .catch(error => {
            showLoading(false);
            console.log('Errore nel recupero della descrizione del libro: ', error);
            document.getElementById('descriptionDiv').innerText = 'Errore nel recupero della descrizione';
            descriptionBook(false);
        });
    }

//funzione per mostrare/nascondere il btn scroll
const scrollBtn = document.getElementById('scroll');
window.onscroll = function() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
};

//funzione per scrollare verso l'altro con il click
scrollBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
};
