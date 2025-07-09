# aerei-carini
Progetto: frontend di un'agenzia viaggi
Realizzare l'interfaccia utente di un sito web per un'agenzia viaggi che permetta di:

Esplorare pacchetti vacanza
Richiedere preventivi
Consultare offerte
Navigare contenuti informativi (destinazioni, servizi, chi siamo, contatti)
 

Struttura generale del sito (sitemap)
Homepage
Destinazioni
Pacchetti Viaggio
Preventivatore (form wizard)
Chi Siamo
Contatti
Offerte speciali / Last minute

Tecnologie
HTML5 – Struttura pagine
CSS3 – Stile personalizzato
Bootstrap 5 – Responsive design, layout a griglia e componenti
JavaScript – Interattività base  (moduli, toggle, filtri) e preventivatore
Componenti chiave da sviluppare
1. Header e Navbar
Logo a sinistra
Navbar responsive con Bootstrap
Menu con le varie voci
Bottone “Richiedi Preventivo” evidenziato

2. Hero Section (Homepage)
Sfondo con immagine/video ispirazionale
Testo motivazionale: “Scopri il viaggio dei tuoi sogni”
Call to action: “Esplora le offerte” + “Richiedi Preventivo”

3. Destinazioni
Griglia Bootstrap responsive (es. 3 colonne su desktop, 1 su mobile)
Card per ogni destinazione: immagine, nome, breve descrizione, bottone “Scopri”
Filtro JavaScript per continente o tipologia (mare, montagna, città, ecc.)

4. Pacchetti Viaggio
Lista pacchetti con card
Dettagli: titolo, descrizione, prezzo, durata, rating (stelle)
Pulsante “Dettagli” → popup/modal con info estese
Ordinamento JS (per prezzo, durata, ecc.)

5. Form Preventivo (wizard step-by-step)
Seguire gli step come le immagini in allegato:
andate su canvas perché github non è simpatico


Utilizzare: Progress bar Bootstrap + validazione JS
Il costo viene stabilito unicamente al primo step, sulla base di questi parametri: Parigi € 300, Roma € 100, Madrid € 200, Bangkok € 250.
Il costo viene poi moltiplicato per durata e partecipanti.
Es: scelgo Parigi, durata 2 giorni, 5 partecipanti (300x2x5).
Gli altri step non saranno utilizzati per calcolare il costo totale.

6. Chi Siamo
Testo descrittivo + Timeline agenzia
Team: card con foto, nome, ruolo, social

7. Contatti
Modulo contatto con validazione JS
Mappa Google (embed)
Info: indirizzo, telefono, mail
Orari apertura

8. Footer
Link utili (FAQ, Termini, Privacy)
Social media icons
Newsletter (input email + invia)
