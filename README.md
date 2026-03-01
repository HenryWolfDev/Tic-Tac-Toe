# Tic-Tac-Toe

### Phase 1: Setup & Grundstruktur

    Repository erstellen: HTML/CSS/JS-Dateien anlegen und Git initialisieren.
    Das Gameboard-Modul: Erstelle ein Modul (const gameboard = ...), das das Spielfeld als Array (9 Felder) speichert.
    Die Player-Factory: Erstelle eine Factory-Funktion, um Spieler-Objekte mit Namen und Markierung (X oder O) zu generieren.

### Phase 2: Die Spiellogik (Backend-Fokus)

    Der Game-Controller: Erstelle ein Modul, das den Spielablauf steuert:
        Wer ist gerade am Zug?
        Funktion zum Setzen einer Markierung im gameboard-Array.
        Überprüfung auf Sieg oder Unentschieden nach jedem Zug.
    Konsolen-Test: Teste das Spiel komplett in der Browser-Konsole. Stelle sicher, dass Züge korrekt verarbeitet werden, bevor du die UI baust.

### Phase 3: Die Benutzeroberfläche (Frontend)

    Display-Controller: Erstelle ein Modul, das die Daten aus dem gameboard-Array auf den Bildschirm rendert (DOM-Manipulation).
    Event-Listener: Füge Klick-Events zu den Feldern hinzu, die den Game-Controller triggern.
    Spieler-Interface: Baue Formulare/Eingabefelder für die Namen und einen "Start/Restart"-Button ein.

### Phase 4: Polishing

    Validierung: Stelle sicher, dass kein Feld doppelt belegt werden kann und das Spiel nach einem Sieg stoppt.
    Ergebnis-Anzeige: Zeige den Gewinner oder ein Unentschieden prominent auf der Seite an.

Pro-Tipp: Halte dich strikt daran, so wenig Code wie möglich global zu schreiben. Alles sollte in Modulen oder Factories leben!
