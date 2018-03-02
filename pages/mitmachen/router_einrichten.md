---
title: Router einrichten
layout: page
sub_menu: true
top_url: /mitmachen/
sub_weight: 4
permalink: /mitmachen/router-einrichten/
---

### Den Router anschließen


1. Lade das passende Erstinstallations-Firmware-Image für deinen Router [von unserer Seite](https://firmware.darmstadt.freifunk.net/) herunter.
2. Verbinde deinen Computer mit einem der gelben LAN-Anschlüsse des Routers.
3. Dein Computer erhält nun automatisch via DHCP eine IP-Adresse.

### Installiere das Freifunk-Image

1. Öffne das Webinterface deines Routers in deinem Browser.
2. Folge den Anweisungen im Handbuch deines Routers um die Firmware zu aktualisieren.
3. Nutze nun das von der zuvor heruntergeladene Firmware-Image.
4. Warte bis der Router wieder gestartet ist.

### Konfigurationsmodus

Dein Router sollte nun in den Konfigurationsmodus starten. Du erhälst erneut IP-Adresse per DHCP, dein Freifunk-Router ist nun unter [http://192.168.1.1](http://192.168.1.1) in deinem Browser erreichbar.

### Den Router konfigurieren

1. Wähle einen Namen nach dem Schema `PLZ-Wahlname`, also bspw. `64283-Kaesekuchen`.
2. Aktiviere das `Mesh-VPN`, um eine Verbindung mit dem Freifunk-Netz über das Internet herzustellen
3. Füge GPS-Koordinaten des Router-Standorts ein. Diese kannst du auf unterschiedliche Weisen erhalten:
  - Am PC: über [unsere Karte](https://map.darmstadt.freifunk.net) (Zuerst Pin klicken, dann Doppelklick auf die Position des Routers)
  - Android: [GPS Status & Toolbox](https://play.google.com/store/apps/details?id=com.eclipsim.gpsstatus2)
4. [optional] Trage eine Kontaktmöglichkeit an. Diese wird anschließend auf der öffentlichen Info-Seite deines Knotens angezeigt.
5. Nach einem Klick auf `Speichern und Neustarten` siehst du den Öffentlichen Schlüssel für den VPN-Zugang. Diesen sendest du bitte per E-Mail an [keys@darmstadt.freifunk.net](mailto:keys@darmstadt.freifunk.net).

	> &#35; PLZ-Wahlname \\
	> key "f1d2d2f924e986ac86fdf7b36c94bcdf32beec15";

Danach startet der Router neu, sendet das WLAN `darmstadt.freifunk.net` aus und versucht sich per Mesh mit anderen Nachbarn zu verbinden. Falls du keine Mesh-Nachbarn hast, ist eine Verbindung mit dem WLAN-Netzwerk erst dann möglich, sobald der Schlüssel auf den Gateways eingetragen wurde. Darüber informieren wir dich zeitnah mit einer Begrüßungs-Email.

Der Router ist jetzt im Normalbetrieb und nicht mehr unter der [http://192.168.1.1](http://192.168.1.1) erreichbar, für weitere Änderungen siehe [FAQ](/was-ist-freifunk/faq/).

### Den Router aufstellen
Als Standort empfehlen sich Fenster, Balkone oder Dächer. Je näher er der Außenwelt ist, desto wahrscheinlicher ist es, dass er für Passanten erreichbar ist und sich mit anderen Routern verbindet um eine [Meshverbindung](https://de.wikipedia.org/wiki/Vermaschtes_Netz) zu bilden.

### Verbinde den Router mit dem Netzwerk

Wenn du deinen Internetzugang zur Verfügung stellen möchtest, verbinde jetzt den blauen WAN-Anschluss deines Freifunk-Router mit deinem vorhandenen Internetrouter. Möchtest oder kannst du das nicht bist du auf andere Freifunker in deiner Nähe angewiesen um eine Verbindung zum Freifunk-Netzwerk und ins Internet herzustellen.

### Fertig

Super, du hast es geschafft. Dein Freifunk-Knoten funktioniert jetzt und sollte, wenn du GPS Koordinaten angegeben hast, in Kürze auf der [Karte](https://map.darmstadt.freifunk.net/) erscheinen.
