# Photo blog
## Giorno 1

## CONSEGNA
**Milestone 1**
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una 
singola fotografia (usiamo una qualunque immagine a piacimento)

**Milestone 2**
Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

**Milestone 3**
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API di JSON Placeholder, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!

**Bonus**
Rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata
Buon Lavoro

**Font**
Edu TAS Beginner;
Sometype Mono.
Presenti su google fonts.
--------------------------------------------------------------------------------------------------------------------------------------------------------

## Giorno 2
**CONSEGNA**

**Milestone 1**
Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.

**Milestone 2**
Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il `display: none` .
Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
Cliccando invece il button di chiusura, l’overlay scompare nuovamente.

**Milestone 3**
Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
Ci sono diversi modi di farlo, prova a sperimentare.

**Bonus**
Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, il tutto in manierà fluida. Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare
Buon Lavoro

## Descrizione del codice
Abbiamo il codice HTML nel quale sono collegati il file css e js. Il codice è suddiviso in due macro-aree, header e main. Header contiene il titolo e l'immagine di sfondo. Main si suddivide in due sotto aree, ovvero griglia e overlay.
Griglia è composta da un div #grid che racchiude la griglia e al suo interno una .riga che appunto rappresenta la riga dentro la quale, mediante la function photoGen vengono inserite le .card. Ogni card contiene due immagini (la pin e l'immagine effettiva del contenuto) e un testo.
La function photoGen prima di generare e inserire in HTML le card, tramite un API genera prima le foto che ci servono. Successivamente alla generazione delle immagini e delle card, photoGen richiama la funzione overlay che mediante un eventlistener aggiunge al click su ogni immagine un overlay.
Con questo ci colleghiamo alla seconda parte del nostro html.
La seconda area del nostro main è infatti data da overlay, un div con classe hidden che lo rende nascosto, contenente un altro div all'interno del quale c'è il pulsante di chiusura dell'overlay. 
Tramite la function overlay rimuoviamo la classe hidden e la sostituiamo con flex. Preleviamo il valore data-url dall'elemento card nel quale è salvata l'immagine e lo salviamo nella variabile url. Infine, al div #contOverlay aggiungiamo tramite innerHTML il button e l'immagine con la variabile URL.
Infine, sempre nella variabile photoGen tramite addevenlistener attribuiamo la function remove a closeElm e overElm.
Infine, richiamiamo photoGen.