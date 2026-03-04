F1 Fantasy Dashboard - 2026 Pre-Season Hub
Ez egy modern, React-alapú webes alkalmazás, amely a Forma-1 rajongók számára nyújt interaktív felületet a 2026-os szezon felkészülési szakaszában. Az applikáció ötvözi a jövőbeli (2026-os) rajtrácsot a történelmi versenyadatokkal, hogy prediktív betekintést nyújtson a Fantasy pontszerzésbe.

Főbb funkciók
1. Dinamikus Verseny-visszaszámláló
Az alkalmazás automatikusan lekéri a következő nagydíj adatait (helyszín, időpont, pálya neve) a Jolpi (Ergast) API segítségével, és egy élő visszaszámlálót jelenít meg a kezdésig.

2. Történelmi Pályaelemzés (CircuitHistory)
A felhasználók megtekinthetik, hogyan teljesítettek a jelenlegi (2026-os) mezőny pilótái az adott pályán az elmúlt három évben (2023, 2024, 2025).

Track Master: Kiemeli azt a pilótát, aki a legtöbb Fantasy pontot gyűjtötte az adott helyszínen.

Részletes lebontás: Megmutatja a kvalifikációs pontokat, a versenyen elért alap pontokat, a pozícióváltásokból (gain/loss) adódó bónuszokat és a büntetéseket.

3. 2026-os Rajtrács és Csapatok

4. Fantasy Pontszámítási Rendszer
Egy komplex algoritmus (fantasyScoring.ts) számítja ki a virtuális pontokat a valós versenyeredmények alapján:

Kvalifikáció: Az első 10 helyezett kap pontot.

Verseny: Pozíció alapú pontok + bónuszok a leggyorsabb körért és a javított helyezésekért.

Büntetések: Pontlevonás DNF (kiesés) vagy kizárás (DSQ) esetén.

5. Interaktív Felület
Pilóta Profilok: Egyedi modális ablakok minden versenyzőhöz, statisztikákkal és csapat-specifikus színekkel.

Konstruktőri Állás: A csapatok teljesítményének összesítése a pilótáik eredményei alapján.

Technológiai Stack
Keretrendszer: React (TypeScripttel).

Stílus: Tailwind CSS a modern, sötét tónusú "F1-es" megjelenésért.

Adatforrás: Jolpi F1 API (az Ergast API modern utódja).


Megjegyzés: Ez az alkalmazás egy rajongói projekt, és nem áll hivatalos kapcsolatban a Formula 1-gyel.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

F1 Fantasy Dashboard - 2026 Pre-Season Hub
This project is a modern, React-based web application designed for Formula 1 fans to prepare for the 2026 season. It combines future grid projections with historical race data (2023–2025) to provide predictive insights into Fantasy scoring.

 Key Features
1. Dynamic Race Countdown
The application automatically fetches data for the upcoming Grand Prix, including the venue, date, and circuit name, using the Jolpi (Ergast) API. It displays a live countdown until the session begins.

2. Historical Track Analysis (CircuitHistory)
Users can analyze how the projected 2026 grid performed at specific circuits over the last three years (2023–2025).

Track Master: Highlights the driver who earned the most Fantasy points at the selected venue.

Detailed Breakdown: Shows a granular view of qualifying points, race base points, position delta (gains/losses), and penalties.

3. 2026 Grid and Teams

4. Fantasy Scoring System
A complex algorithm calculates virtual performance points based on real-world results:

Qualifying: Points awarded to the top 10 finishers.

Race: Position-based points plus bonuses for the Fastest Lap and positions gained.

Penalties: Point deductions for DNFs (Did Not Finish) or DSQs (Disqualified).

5. Interactive Interface
Driver Profiles: Custom modal windows for each driver featuring stats and team-specific color branding.

Constructor Standings: Aggregated team performance based on their drivers' combined points.

Technology Stack
Framework: React with TypeScript.

Styling: Tailwind CSS for a sleek, dark-themed "F1-style" UI.

Data Source: Jolpi F1 API, the modern successor to the Ergast API.


Note: This application is a fan-made project and is not officially affiliated with Formula 1.
