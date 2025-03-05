//Funzione per l'indicatore di caricamento
function showLoading(show) {
    const loadingElement = document.getElementById('loading');
    if(show) {
        loadingElement.classList.add('visible');
        loadingElement.classList.remove('hidden');
    } else {
        loadingElement.classList.add('hidden');
        loadingElement.classList.remove('visible');
        }
    }
    
    // Funzione per cercare i libri in base alla categoria inserita
    function searchBook() {
        const category = document.getElementById('categoryInput').value.trim();
        if (category) {
            // Costruisco l'URL dell'API per la categoria
            const url = `https://openlibrary.org/subjects/${category}.json`;
            showLoading(true);
    
            // Eseguo la richiesta fetch all'API di Open Library
            fetch(url)
                .then(response => response.json()) // Risposta in formato JSON) 
                .then(data => {
                    showLoading(false);
                    displayBook(data);
                }) // Mostra i libri ottenuti
                .catch(error => {
                    console.error('Errore nella richiesta API:', error);
                });
        } else {
            alert('Per favore inserisci una categoria!');
        }
    }
    
    // Funzione per visualizzare la lista dei libri
    function displayBook(data) {
        const bookList = document.getElementById('bookList');
        bookList.innerHTML = ''; // Pulisce la lista precedente
    
        if (data.works && data.works.length > 0) {
            data.works.forEach(book => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <strong>${book.title}</strong><br>
                    Autori: ${book.authors ? book.authors.map(author => author.name).join(', ') : 'Sconosciuti'}<br>
                    <button onclick="fetchBookDescription('${book.key}')">Mostra descrizione</button>
                `;
                bookList.appendChild(li);
            });
        } else {
            bookList.innerHTML = "Nessun libro trovato per questa categoria.";
        }
    }
    
    // Funzione per ottenere la descrizione completa di un libro
    function fetchBookDescription(bookKey) {
        const url = `https://openlibrary.org${bookKey}.json`;
        showLoading(true);
    
        // Eseguo la richiesta per ottenere la descrizione del libro
        fetch(url)
            .then(response => response.json()) // Risposta in formato JSON
            .then(data => {
                showLoading(false);
                const description = data.description ? (typeof data.description === 'string' ? data.description : data.description.value) : 'Descrizione non disponibile.';
                const descriptionDiv = document.getElementById('description');
    
                // Aggiungi la descrizione al div
                descriptionDiv.innerText = description;
                
                // Aggiungi la classe per rendere il div visibile
                descriptionDiv.classList.add('visible');
                descriptionDiv.classList.remove('hidden');
    
                // Scrolla la pagina fino al div della descrizione
                descriptionDiv.scrollIntoView({ behavior: 'smooth' });
            })
            .catch(error => {
                showLoading(false);
                console.error('Errore nel recupero della descrizione del libro: ', error);
                const descriptionDiv = document.getElementById('description');
                descriptionDiv.innerText = 'Errore nel recupero della descrizione.';
                descriptionDiv.classList.add('visible');
                descriptionDiv.classList.remove('hidden');
    
                // Scrolla la pagina fino al div della descrizione
                descriptionDiv.scrollIntoView({ behavior: 'smooth' });
            });
    }
    
    // Pulsante di scroll
    const scrollButton = document.getElementById('scroll');
    
    //Funzione per mostrare/nascondere il bottone di scroll in base alla posizione
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    };
    
    // Funzione per scrollare verso l'alto con il click
    scrollButton.onclick = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    
    // Aggiungi un event listener all'input per attivare la ricerca con il tasto "Enter"
    document.getElementById('categoryInput').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            searchBook();
        }
    });
    