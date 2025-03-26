# SearchBook

**SearchBook** è una semplice applicazione che consente agli utenti di cercare libri per categoria e gestire la loro lista di libri preferiti. Utilizza l'API di Open Library per recuperare i libri e le loro descrizioni. L'app consente agli utenti di aggiungere libri ai preferiti e di memorizzarli localmente usando localStorage.

***

![Screenshot dell'app](./assets/img/Screenshot%202025-03-13%20150723.png)

***

## Funzionalità principali

- **Ricerca per categoria**: Gli utenti possono inserire una categoria nel campo di ricerca e visualizzare i libri correlati.
- **Visualizzazione della Lista dei Libri**: I libri vengono visualizzati in una lista con il titolo, gli autori e un pulsante per mostrare le descrizioni.
- **Libri Preferiti**: Gli utenti possono aggiungere libri ai preferiti facendo clic sull'icona a forma di cuore. I libri preferiti vengono salvati in localStorage e rimangono disponibili anche dopo la chiusura e riapertura dell'app.
- **Caricamento dinamico**: L'app mostra un indicatore di caricamento durante il recupero dei dati dall'API.
- **Mostra Descrizioni dei Libri**: Quando l'utente clicca sul pulsante "Show description" di un libro, l'app recupera e visualizza la descrizione del libro.
- **Scroll per la descrizione**: Una volta che una descrizione del libro è disponibile, la pagina scorre automaticamente fino alla sezione della descrizione.
-**Scroll per Tornare in Alto**: : L'app fornisce un pulsante per tornare in alto che appare dopo aver fatto scroll giù di 200px.
- **Design responsivo**: L'app è progettata per essere compatibile con dispositivi desktop e mobili.

***

## Funzioni in JavaScript

**toggleVisibility**: Gestisce la visibilità di un elemento HTML aggiungendo o rimuovendo le classi CSS hidden e visible.

**showLoading**: Mostra un indicatore di caricamento durante il recupero dei dati dall'API.

**listTitle**: Mostra o nasconde il titolo della lista dei libri.

**showError**: Mostra un messaggio di errore quando si verifica un problema (ad esempio, nessun libro trovato o errore nell'API).

**descriptionBook**: Mostra o nasconde la sezione della descrizione di un libro.

**searchBook**: Recupera i libri dall'API di Open Library in base alla categoria inserita dall'utente.

**displayBook**: Visualizza la lista dei libri recuperati dall'API nel DOM.

**toggleFavorite**: Aggiunge o rimuove un libro dalla lista dei preferiti e lo salva in localStorage.

**fetchBookDescription**: Recupera e visualizza la descrizione di un libro selezionato.

**handleScroll**: Gestisce la visualizzazione del pulsante di ritorno in alto in base alla posizione dello scroll.

**init**: Imposta gli event listener per le azioni di ricerca (clic sul pulsante e pressione del tasto "Enter").

**initializeApp**: Inizializza tutte le funzioni quando l'app viene caricata.

## LocalStorage

I libri che vengono aggiunti ai preferiti vengono salvati nel localStorage del browser e saranno visibili anche nelle sessioni future.

***
## Utilizzo

## Ricerca Libri

1. Inserisci una categoria (ad esempio "fiction", "scienza", ecc.) nel campo di input.

2. Clicca sul pulsante "Cerca" oppure premi "Enter" per recuperare i libri relativi a quella categoria.

3. I libri verranno visualizzati con il titolo, gli autori e un pulsante per mostrare la descrizione.

4. Clicca sul pulsante "Mostra descrizione" per vedere ulteriori dettagli sul libro.

## Gestire i Libri Preferiti

1. Clicca sull'icona a forma di cuore (🤍) accanto a un libro per aggiungerlo ai preferiti.

2. Una volta aggiunto, il cuore diventerà pieno (❤️).

3. I tuoi libri preferiti vengono salvati in localStorage e rimarranno disponibili anche dopo aver ricaricato la pagina.

## Funzionalità aggiuntive

1. **Scroll automatico**: Quando l'utente clicca sul bottone per visualizzare la descrizione di un libro, la pagina scorre automaticamente fino alla sezione di descrizione.

2. **Scroll verso l'alto**: Un bottone "scroll up" è visibile quando l'utente scorre più di 200px verso il basso, permettendo di tornare facilmente all'inizio della pagina.

***

## Tecnologie utilizzate

- **HTML**: Struttura base della pagina.
- **CSS**: Stili per la presentazione e il layout.
- **JavaScript**: Funzionalità interattive.
- **Axios**: Per le chiamate API.
- **Open Library API**: Per recuperare dati sui libri.

***

## Demo Online

Puoi provare l'applicazione direttamente online tramite il seguente link:

[Demo di SearchBook](https://rs-searchbook.netlify.app/)

Cliccando sul link, verrai indirizzato alla versione live dell'applicazione, dove potrai testare tutte le funzionalità direttamente nel tuo browser.

***

## Contribuire

Se desideri contribuire a questo progetto, segui questi passaggi:

1. Fork il repository.
2. Crea un branch per la tua funzionalità (`git checkout -b feature-nome`).
3. Aggiungi e committa i tuoi cambiamenti (`git commit -am 'Aggiungi una nuova funzionalità'`).
4. Push al tuo branch (`git push origin feature-nome`).
5. Crea una pull request.

***

## Licenza

Distribuito sotto la licenza MIT. Vedi `LICENSE` per maggiori dettagli.

***

## Autore
 
Questo progetto è stato creato da [Adriana Russo](https://adriana-rs.github.io)

***

## Contatti 

- [Instagram]()
- [Facebook]()
- [LinkedIn]()

***

Grazie per aver visitato il progetto SearchBook! 😊

***

## About 

Progetto realizzato come test finale del corso di JavaScript Advanced presso start2Impact