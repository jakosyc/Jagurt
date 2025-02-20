// Funktion zur Aktualisierung von Datum und Uhrzeit
function updateDateTime() {
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    const now = new Date();

    // Format für das Datum (z. B. "29.11.2024")
    const dateString = now.toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    // Format für die Uhrzeit (z. B. "14:35:08")
    const timeString = now.toLocaleTimeString('de-DE', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    // Setze den Textinhalt der Elemente
    dateElement.textContent = dateString;
    timeElement.textContent = timeString;
}

// Aktualisiere Datum und Uhrzeit jede Sekunde
setInterval(updateDateTime, 1000);

// Starte die Funktion direkt beim Laden der Seite
updateDateTime();
