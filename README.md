# Study Buddy

Study Buddy è un'app semplice per studiare con la tecnica Pomodoro e gestire i task.
Questa versione è client-side: non richiede backend. I dati vengono salvati nel tuo browser (localStorage).

Features:
- Timer Pomodoro (work/short break/long break)
- Lista di task (add/complete/delete)
- Statistiche giornaliere: sessioni completate e minuti studiati
- Funziona offline: basta aprire index.html

Quick start
-----------
1. Clona la repo:

   git clone https://github.com/federicotaranudev/study-buddy.git
   cd study-buddy

2. Apri il file `index.html` con il browser (doppio click) oppure esegui un semplice server:

   python -m http.server 5173
   # poi apri http://localhost:5173

3. Usa l'app: imposta i minuti, aggiungi task, premi Start.

Note per sviluppatori
---------------------
- Tutto il codice principale è in `app.js` e `styles.css`.
- Dati memorizzati in localStorage con chiavi:
  - `studyBuddy:tasks` → lista task
  - `studyBuddy:settings` → impostazioni dei minutes
  - `studyBuddy:stats:YYYY-MM-DD` → statistiche giornaliere

Licenza
-------
MIT — vedi LICENSE

Contribuire
-----------
Se vuoi che configuri CI, deploy su GitHub Pages o aggiunga funzionalità (autenticazione, backend per sincronizzazione), dimmi e lo aggiungo.
