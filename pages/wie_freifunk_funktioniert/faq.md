---
title: Häufige Fragen
layout: page
sub_menu: true
top_url: /wie-freifunk-funktioniert/
sub_weight: 6
permalink: /wie-freifunk-funktioniert/faq/
---

### Wie verbinde ich mich mit dem Freifunk-Netz?

Wenn du dich in der Nähe eines Freifunk-Knotens befindest, öffne die WLAN-Einstellungen auf deinem Endgerät und suche nach dem Netzwerk darmstadt.freifunk.net. Mit einem Klick auf dieses verbindest du dich mit dem Darmstädter Freifunk-Netz.

### Wo stehen schon Freifunk-Router?

Schau mal auf der [Karte](../../karte/) nach. Wenn es bei dir noch keinen Freifunk-Router in der Nachbarschaft gibt, dann sei die oder der Erste!

### Warum ist das alles kostenlos? Wo ist der Haken?

Freifunk ist eine gemeinschaftliche Bewegung, die einen freien Netzzugang als gesellschaftlichen Grundstein sieht. Wir verfolgen kein kommerzielles Interesse und betreiben das Netz ehrenamtlich. Unser Ziel ist es, eine für jeden gleichberechtigt nutzbare Infrastruktur aufzubauen und dabei den derzeitigen rechtlichen (WLAN-Störerhaftung) sowie datenschutzrechtlichen (Kundendaten sammeln) Problematiken aus dem Weg zu gehen. Unsere Infrastruktur wird ausschließlich über Spenden finanziert.

### Ich habe von der Störerhaftung gehört. Was hat es damit auf sich?
Die Störerhaftung, oder genauer genommen die WLAN-Störerhaftung, ist ein rechtliches Konstrukt, welches den Betreiber eines offenen WLAN-Hotspots automatisch für die Rechtsvergehen seiner Nutzer haftbar macht. Ob diese Regelung mit europäischem Recht vereinbar ist, ist aktuell stark umstritten. Freifunk Darmstadt löst diese rechtliche Unsicherheit, indem der Datenverkehr, der an einem Freifunk-Router anfällt, nicht direkt ins Internet, sondern zuvor über die Server des [Freifunk Rheinland e.V.](https://freifunk-rheinland.net/) geleitet wird, welcher als Internetdienstanbieter vom sogenannten Providerprivileg Gebrauch machen kann und damit von der Störerhaftung ausgenommen ist. Der Ausleitungsstandort ist dabei jederzeit in Deutschland.

### Benötige ich einen Router für 2,4 GHz oder 5 GHz?

Jedes Endgerät heutzutage funkt mindestens auf dem 2,4 GHz Band, modernere Modelle können außerdem das 5 GHz Band nutzen, auf dem, wenn nicht allzu viel Sichtbehinderung vorliegt, höhere Datenraten erreicht werden können.

Beachte: Damit sich ein Freifunk-Router mit einem anderen Freifunk-Router über WLAN verbinden kann, müssen beide Router im gleichen Frequenzband (2,4 GHz oder 5 GHz) arbeiten.

### Können mehrere Freifunk-Router an einem Ort miteinander verbunden werden?

Mehrere Freifunk-Router können sowohl über Funk meshen, als auch per Kabel über den WAN-Port. Hierzu gibt es die Mesh-on-WAN-Funktion, welche sich in den Experteneinstellungen aktivieren lässt. Natürlich können die Router auch völlig unabhängig voneinander eine Verbindung zum Rest der Freifunk-Wolke herstellen.

### Kann ich den Freifunk-Router auch drahtlos über ein existierendes privates WLAN anbinden?

Dies ist aus verschiedenen Gründen mit der Standard-Freifunk-Firmware nicht möglich:

 - Das im Router verbaute WLAN-Modul kann meist nur auf einer Frequenz gleichzeitig funken. Somit wäre allein technisch eine Verbindung nur dann möglich, wenn das Uplink-WLAN auf der gleichen Frequenz wie Freifunk sendet.
 - In diesem Fall würde die "Airtime" (also die Zeit, die der Funkkanal aktiv genutzt wird) doppelt beansprucht, zum Senden im Freifunk-Netz und zum Weiterreichen ins Uplink-WLAN.
 - Zwei WLAN-Radios an einem Freifunkrouter könnten einen Uplink theoretisch auch auf einem anderen Kanal ermöglichen, dies erfordert jedoch manuelle Konfiguration, welche bei aktivem Autoupdater kaputt gehen könnte.
 - Ein USB-WLAN-Stick, welcher das 2. Radio bereitstellen könnte, kostet auch ~15€, ungefähr so viel wie schon ein kleiner vollständiger Freifunk-Router.

Unsere Empfehlung wäre daher, einen Freifunk-Router an der Quelle aufzustellen (dort, wo es ein Netzwerkkabel gibt), und am zweiten Standort einen zweiten Freifunk-Router, welcher mit dem ersten mesht und so den Zugang zum Rest des Netzes bereitstellt. Diese Lösung ist auch updatesicher und erfordert keine manuelle Konfiguration.

### Wie kann ich nachträglich Änderungen am Router vornehmen?

Im Normalbetrieb ist auf dem Router nur eine [Statusseite](http://nextnode.ffda) erreichbar. Willst du Änderungen vornehmen, musst du den Router in den Config-Mode versetzen. Hierzu drückst du am hochgefahrenen Router die `WPS/Reset`-Taste so lange, bis alle Lampen kurz aufleuchten und lässt sie dann los. Nach kurzer Zeit sollte die Status-LED charakteristisch blinken (siehe Grafik), du erhälst an einem der LAN-Ports wieder eine IP-Adresse per DHCP und kannst die Konfigurationsseite unter [http://192.168.1.1](http://192.168.1.1) erreichen.

![Config Mode](https://gluon.readthedocs.org/en/latest/_images/node_configmode.gif)

### Wo kann ich weitere technische Informationen finden?

Auf den Seiten des Freifunkprojekts findest du eine [Technik-FAQ](http://wiki.freifunk.net/FAQ_Technik) mit weiteren Informationen.
