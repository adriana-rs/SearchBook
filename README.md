# SearchBook

**SearchBook** è una semplice applicazione che  permette di cercare libri tramite la Open Library API. Gli utenti possono cercare libri per categoria, visualizzare le descrizioni dei libri e aggiungerli ai preferiti, che vengono salvati nel localStorage del browser.

***

![Screenshot dell'app](./assets/img/Screenshot%202025-03-13%20150723.png)

***

## Funzionalità principali

- **Ricerca per categoria**: Gli utenti possono inserire una categoria nel campo di ricerca e visualizzare i libri correlati.
- **Descrizione del libro**: Dopo aver selezionato un libro, l'utente può visualizzarne la descrizione.
- **Preferiti**: I libri possono essere aggiunti ai preferiti e vengono salvati nel localStorage per una consultazione futura.
- **Caricamento dinamico**: L'app mostra un indicatore di caricamento durante il recupero dei dati dall'API.
- **Scroll per la descrizione**: Una volta che una descrizione del libro è disponibile, la pagina scorre automaticamente fino alla sezione della descrizione.
- **Design responsivo**: L'app è progettata per essere compatibile con dispositivi desktop e mobili.

***

## Come funziona

1. L'utente inserisce una categoria di libri nel campo di ricerca.
2. Viene inviata una richiesta API a Open Library per ottenere i libri correlati alla categoria inserita.
3. Una lista di libri viene visualizzata, con il titolo e gli autori.
4. Se l'utente desidera visualizzare ulteriori dettagli, può cliccare sul bottone "Mostra descrizione" per ogni libro.
5. Ogni libro ha un'icona a forma di cuore per aggiungerlo o rimuoverlo dai preferiti.
6. L'applicazione mostra un indicatore di caricamento durante la ricerca e il recupero delle descrizioni.

## LocalStorage

I libri che vengono aggiunti ai preferiti vengono salvati nel localStorage del browser e saranno visibili anche nelle sessioni future.

***

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