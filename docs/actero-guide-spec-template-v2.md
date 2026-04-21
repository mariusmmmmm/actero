# SPEC TEMPLATE — GHID ACTERO (STRUCTURA ACTUALĂ DIN PROIECT)

Acest document este template-ul de lucru pentru crearea unui ghid nou ActeRO compatibil cu structura actuală a aplicației.

Scopul lui este să reflecte fidel modelul real din proiect:
- ghiduri multi-country
- lansare completă pentru o țară nouă
- logică single-country și single-authority
- reguli comune centralizate pe consulat / autoritate
- contract clar pentru cum este predat un ghid nou ca input
- separarea dintre data source de consulate și layerul de helperi / reguli derivate
- strategie completă pentru paginile SEO ale unei țări noi
- separare clară între `DIAGNOSTIC_SUMMARY`, `GHID_FREE`, `GHID_PAID`, `OPEN_ITEMS`
- compatibilitate cu structura actuală din ghidurile existente

---

## 1. CONTEXT GENERAL

ActeRO este un produs pentru românii din diaspora care au nevoie să rezolve acte românești fără drumuri degeaba.

Ghidurile trebuie să fie:
- clare
- practice
- specifice țării și autorității relevante
- orientate pe acțiune
- fără limbaj birocratic inutil
- fără eseuri
- fără informație generică dacă nu ajută utilizatorul să acționeze

Ghidul trebuie conceput pentru UX mobil:
- conținut scanabil
- o singură idee pe block
- fraze scurte
- pași operaționali

---

## 2. TEMPLATE COMPLET PENTRU IMPLEMENTAREA UNEI ȚĂRI NOI

Acest document trebuie folosit și ca template complet pentru lansarea unei țări noi în ActeRO.

Scopul nu este un MVP parțial.
Scopul este o implementare completă, compatibilă cu modelul actual din proiect:
- country support în wizard
- mapare completă regiune -> consulat
- data source complet pentru consulate
- reguli comune pe autoritate
- cele 17 ghiduri existente în alte țări
- compatibilitate cu diagnostic, ghid free, ghid paid, tracker și checklist

### Pachetul complet necesar pentru o țară nouă

Pentru o țară nouă trebuie predate complet următoarele:

1. `COUNTRY PROFILE`
2. `REGION -> CONSULATE MAP`
3. `CONSULATE DATA SOURCE`
4. `COUNTRY CONSULATE RULES / HELPER INPUT`
5. `GUIDE MATRIX` pentru cele 17 ghiduri
6. `PRODUCT RULES`
7. `SEO PAGE MATRIX`

SEO pages fac parte din lansarea completă a țării și trebuie definite tot în acest document.

---

## 3. COUNTRY PROFILE

Pentru orice țară nouă trebuie predat un profil minim de țară.

### Câmpuri obligatorii

- `COUNTRY_CODE`
- `COUNTRY_NAME_RO`
- `COUNTRY_NAME_LOCAL`
- `DISPLAY_NAME_IN_UX`
- `DIASPORA_AUDIENCE_LABEL`
- `SUPPORTED_NOW`
- `NOTES_DESPRE_SCOPE`

### Scop

Aceste câmpuri sunt necesare pentru:
- wizard
- copy de țară
- naming în ghiduri
- meta / texte generice din produs

Exemplu:

```md
## COUNTRY PROFILE
- COUNTRY_CODE: es
- COUNTRY_NAME_RO: Spania
- COUNTRY_NAME_LOCAL: Espana
- DISPLAY_NAME_IN_UX: Spania
- DIASPORA_AUDIENCE_LABEL: Românii din Spania
- SUPPORTED_NOW: yes
- NOTES_DESPRE_SCOPE: Lansare completă pentru consulatele din Spania continentală și insule.
```

---

## 4. REGION -> CONSULATE MAP

Pentru țara nouă este obligatoriu un spec complet de mapare regiune -> consulat / autoritate competentă.

Acesta este unul dintre cele mai importante inputuri, pentru că influențează:
- wizard
- derivarea consulatului
- regulile locale
- ghidurile
- checklist-urile
- cardul de autoritate

### Ce trebuie predat obligatoriu

#### 4.1. Lista completă a regiunilor folosite în produs

Trebuie predată lista completă a subdiviziunilor administrative pe care le va alege userul în wizard.

Exemple:
- landuri
- regiuni
- provincii
- comunități autonome
- cantoane

Pentru fiecare regiune:
- denumire exactă
- denumire standardizată pentru produs
- eventuale aliasuri / forme alternative

#### 4.2. Maparea completă a fiecărei regiuni

Pentru fiecare regiune trebuie să fie clar:
- consulatul competent
- dacă există excepții
- dacă există arondare parțială
- dacă există cazuri speciale pentru anumite proceduri

#### 4.3. Excepții teritoriale

Trebuie specificat explicit dacă există:
- insule
- enclave
- teritorii autonome
- micro-state arondate
- regiuni tratate separat pentru anumite proceduri

#### 4.4. Sursa de confirmare

Pentru mapare trebuie să existe:
- sursă oficială sau verificare live
- sau marcaj clar `⚠️` dacă arondarea nu este confirmată complet

### Format recomandat

```md
## REGION -> CONSULATE MAP

### REGIONS
- Region A
- Region B
- Region C

### MAP
- Region A -> consulat-x
- Region B -> consulat-y
- Region C -> consulat-y

### EXCEPTIONS
- Insula X -> consulat-z
- Pentru titlu de călătorie urgent, regiunea Y trebuie confirmată separat

### SOURCE
- site oficial
- hartă consulară
- confirmare email
```

### Reguli

- nu lăsa regiuni neacoperite
- nu lăsa mapări ambigue fără note
- dacă o regiune este incertă, marcheaz-o explicit
- dacă o procedură are altă autoritate decât restul țării, spune asta

---

## 5. CONSULATE DATA SOURCE

Pentru țara nouă trebuie predat un `consulate data source` complet.

Acesta este sursa de adevăr brută pentru autorități.
Nu este copy de ghid.
Nu este text SEO.
Nu este text de paywall.

### Ce trebuie să conțină pentru fiecare consulat

#### 5.1. Identitate
- `id`
- `country`
- `name`
- `city`

#### 5.2. Arondare
- `regions`
- eventual `specialTerritories`

#### 5.3. Contact
- `address`
- `phone`
- `email`
- `website`

#### 5.4. Booking
- `platform`
- `bookingRequired`
- `walkInAllowed`
- `urgentFlow`
- `bookingNotes`

#### 5.5. Pașaport
- `photoRule`
- `paymentRule`
- `pickupRule`
- `postalPickup`
- `lostStolenTranslationRule`
- `passportNotes`

#### 5.6. Titlu de călătorie
- `bookingRule`
- `issuanceRule`
- `photoRule`
- `translationRule`
- `travelDocNotes`

#### 5.7. Procuri / notarial
- `paymentRule`
- `rnneprRule`
- `saleProcuraRule`
- `notarialNotes`

#### 5.8. Transcriere certificat de naștere
- `parentDocumentsRule`
- `byMail`
- `processingTimeRule`
- `pickupRule`
- `birthNotes`

#### 5.9. Excepții și calitate date
- `specialWarnings`
- `notes`
- `sourceNotes`
- `confidence`

### Reguli de completare

- fiecare consulat trebuie să aibă propriile reguli, nu texte comparative
- dacă ceva nu este clar, folosește `unknown` sau `⚠️`
- diferențiază între fapt confirmat și observație probabilă
- păstrează datele brute, nu copy final de ghid

### Format recomandat de predare

```md
## CONSULATE DATA SOURCE

### CONSULAT: consulat-x
- CITY:
- REGIONS:
- ADDRESS:
- PHONE:
- EMAIL:
- WEBSITE:

#### BOOKING
- PLATFORM:
- BOOKING_REQUIRED:
- WALK_IN_ALLOWED:
- URGENT_FLOW:
- NOTES:

#### PASSPORT
- PHOTO_RULE:
- PAYMENT_RULE:
- PICKUP_RULE:
- POSTAL_PICKUP:
- LOST_STOLEN_TRANSLATION_RULE:
- NOTES:

#### TRAVEL_DOC
- BOOKING_RULE:
- ISSUANCE_RULE:
- PHOTO_RULE:
- TRANSLATION_RULE:
- NOTES:

#### NOTARIAL
- PAYMENT_RULE:
- RNNEPR_RULE:
- SALE_PROCURA_RULE:
- NOTES:

#### BIRTH
- PARENT_DOCUMENTS_RULE:
- BY_MAIL:
- PROCESSING_TIME_RULE:
- PICKUP_RULE:
- NOTES:

#### DATA QUALITY
- SPECIAL_WARNINGS:
- SOURCE_NOTES:
- CONFIDENCE:
```

---

## 6. COUNTRY CONSULATE RULES / HELPER INPUT

Pentru țara nouă nu este suficient doar data source-ul brut.
Trebuie predat și inputul necesar pentru layerul de `consulateRules` / helperi.

Acest layer produce textele scurte și coerente folosite în:
- diagnostic
- badge-uri
- warning-uri
- ghiduri
- checklist-uri
- authority card

### Ce trebuie predat

Pentru fiecare tip de regulă relevantă trebuie să fie clar:
- valoarea generică de țară
- override-urile pe consulat
- fallback-ul dacă nu știm consulatul

### Set minim de reguli

- `bookingRule`
- `urgentBookingRule`
- `walkInAvailability`
- `travelDocIssuanceRule`
- `travelDocPhotoRule`
- `travelDocTranslationRule`
- `passportPhotoRule`
- `passportLostOrStolenRule`
- `passportPaymentRule`
- `passportPickupRule`
- `postalPickupRule`
- `notarialPaymentRule`
- `saleProcuraSpecialRule`
- `birthTranscriptionProcessingRule`
- `birthTranscriptionPickupRule`
- `birthParentDocumentsRule`
- `specialWarnings`
- `diagnosticBadgeSummary`
- `checklistOverrides`

### Format recomandat

```md
## COUNTRY CONSULATE RULES

### COUNTRY DEFAULTS
- bookingRule:
- urgentBookingRule:
- passportPaymentRule:
- travelDocPhotoRule:

### CONSULATE OVERRIDES
#### consulat-x
- bookingRule:
- walkInAvailability:
- passportPhotoRule:
- specialWarnings:

#### consulat-y
- urgentBookingRule:
- travelDocIssuanceRule:
- birthParentDocumentsRule:
```

### Reguli

- helperii trebuie să producă output single-consulate
- nu defini comparații între consulate
- dacă regula este aceeași peste tot, pune-o ca default de țară
- dacă un consulat deviază, definește override local

---

## 7. GUIDE MATRIX — CELE 17 GHIDURI

Pentru o țară nouă, păstrăm cele 17 ghiduri existente ca familie de lansare completă.

### Regula

Țara nouă trebuie să primească toate cele 17 ghiduri, adaptate la:
- autoritățile locale
- consulatele locale
- regulile locale
- namingul compatibil cu proiectul

### Ce trebuie predat

Pentru fiecare dintre cele 17 ghiduri:
- `guideId` propus
- familie de flow
- titlu
- audiență
- situație exactă
- rezultat final
- autoritatea principală
- consulat / autoritate derivată dacă este cazul
- reguli comune aplicabile
- fapte confirmate
- fapte neconfirmate
- cross-sell relevant

### Matrice minimă

```md
## GUIDE MATRIX

1. ...
2. ...
3. ...
...
17. ...
```

### Observație

Dacă într-o țară un ghid este procedural imposibil sau neaplicabil, asta trebuie spus explicit cu justificare.
Implicit, scopul rămâne să existe toate cele 17.

---

## 8. PRODUCT RULES

`Product rules` înseamnă regulile de comportament ale țării noi în produs, nu conținutul ghidului în sine.

Aici intră decizii de produs precum:
- cum apare țara în wizard
- cum o aleg userii
- ce regiuni selectează
- când putem deriva un consulat
- ce facem dacă nu-l putem deriva
- ce ghiduri sunt disponibile direct
- ce texte generice de țară apar în UI
- ce fallback-uri avem în diagnostic și ghid

### Ce trebuie predat

#### 8.1. Wizard behavior
- țara apare în selector sau nu
- ordinea ei în wizard
- ce întrebare administrativă se pune utilizatorului
- cum alegem regiunea
- dacă există întrebări suplimentare de țară

#### 8.2. Derivare autoritate
- când derivăm automat consulatul
- când rămânem pe fallback generic
- ce facem dacă regiunea nu este recunoscută

#### 8.3. Availability behavior
- toate ghidurile sunt active sau nu
- există flow-uri care merg pe waitlist sau nu
- există excepții temporare sau nu

#### 8.4. Country copy
- formularea standard pentru țară în UX
- cum spunem „românii din X”
- ce ton folosim dacă țara are proceduri diferite

#### 8.5. Shared UX expectations
- arătăm authority card în ce flow-uri
- când folosim warning badge
- ce texte trebuie să rămână generice

#### 8.6. Regula de distribuție pentru țări noi
- traficul principal al țării vine din SEO
- homepage-ul se modifică minimal
- activăm țara doar în secțiunea `ȚĂRI DISPONIBILE`
- nu repoziționăm homepage-ul în jurul noii țări decât dacă este specificat explicit

### Regula implicită pentru țări noi

Orice țară nouă trebuie tratată implicit ca țară cu trafic principal din SEO.

Asta înseamnă:
- homepage-ul nu este canalul principal de distribuție pentru țara nouă
- nu se refac secțiunile principale din homepage pentru noua țară
- nu se împinge agresiv țara nouă în blocurile principale de marketing din homepage

Modificarea standard permisă în homepage este minimă:
- activarea țării în secțiunea `ȚĂRI DISPONIBILE`

În rest:
- traficul trebuie să vină din clusterul SEO al țării
- interlinking-ul intern dintre paginile țării este canalul principal de distribuție internă
- orice promovare mai agresivă din homepage trebuie cerută explicit și documentată separat

### Format recomandat

```md
## PRODUCT RULES

### WIZARD
- COUNTRY_VISIBLE:
- REGION_STEP_LABEL:
- EXTRA_QUESTIONS:

### AUTHORITY DERIVATION
- AUTO_DERIVE_CONSULATE:
- GENERIC_FALLBACK_RULE:
- UNKNOWN_REGION_BEHAVIOR:

### AVAILABILITY
- ALL_17_GUIDES_ACTIVE:
- WAITLIST_FLOWS:
- TEMPORARY_EXCEPTIONS:

### COUNTRY COPY
- COUNTRY_LABEL_IN_UI:
- DIASPORA_LABEL:
- GENERIC_COPY_NOTES:

### UX RULES
- SHOW_AUTHORITY_CARD_FOR:
- WARNING_BADGE_RULES:
- CHECKLIST_NOTES:

### DISTRIBUTION
- PRIMARY_TRAFFIC_SOURCE: SEO
- HOMEPAGE_CHANGE_LEVEL: minimal
- ENABLE_IN_AVAILABLE_COUNTRIES: yes
- HOMEPAGE_EXTRA_PROMOTION: no
```

---

## 9. SEO PAGE MATRIX

Pentru fiecare țară nouă trebuie definit un pachet complet de pagini SEO.

Aceste pagini nu sunt generate ad-hoc.
Ele trebuie să urmeze o strategie standardizată:
- un hub principal pe țară
- hub-uri secundare pe categorii importante
- pagini satelit pe intenții clare
- linkuri interne prestabilite între ele

Scopul este:
- indexare mai bună
- cluster semantic clar pe țară
- distribuție internă a autorității
- intrări SEO către funnelul paid

### 9.1. Principiul de arhitectură

Pentru fiecare țară nouă, clusterul SEO trebuie construit cu:

1. `hub principal de țară`
2. `pagini money / problem pages`
3. `pagini comparative / situaționale`
4. `pagini locale / consulate`, dacă țara justifică
5. `interlinking standardizat`

### 9.2. Hubul principal pe țară

Fiecare țară nouă trebuie să aibă un hub principal obligatoriu:

```txt
/acte-romanesti-{slug-tara}
```

Exemple:
- `/acte-romanesti-germania`
- `/acte-romanesti-italia`
- `/acte-romanesti-spania`

### Rolul hubului principal

Hubul principal trebuie să fie:
- cea mai puternică pagină SEO internă pentru țara respectivă
- pagina care leagă toate familiile majore de acte
- pagina care primește cele mai multe linkuri interne din clusterul țării

Hubul principal trebuie să trimită minim către:
- pașaport
- buletin
- titlu de călătorie
- procuri
- programare / platformă
- transcriere / stare civilă

### 9.3. Lista standard de pagini SEO pentru o țară nouă

Pentru o implementare completă, lista standard pornește de la aceste sluguri:

#### Hub principal
- `/acte-romanesti-{slug-tara}`

#### Pașaport
- `/pasaport-romania-{slug-tara}`
- `/pasaport-expirat-{slug-tara}`
- `/pasaport-pierdut-furat-{slug-tara}`
- `/pasaport-crds-{slug-tara}`
- `/pasaport-minor-{slug-tara}`

#### Buletin
- `/buletin-romania-{slug-tara}`

#### Titlu de călătorie
- `/titlu-calatorie-{slug-tara}`
- `/titlu-calatorie-urgenta-{slug-tara}`

#### Procuri
- `/procura-notariala-{slug-tara}`
- `/procura-vanzare-proprietate-{slug-tara}`

#### Programare
- `/programare-consulat-romania-{slug-tara}`

#### Stare civilă
- `/transcriere-certificat-nastere-{slug-tara}`

#### Pagini situaționale / comparative locale
- se adaugă doar dacă există intenție SEO clară și diferență reală de conținut

### 9.4. Paginile locale pe consulat

Dacă țara are volum, diferențe operaționale semnificative sau căutări locale relevante, se adaugă pagini pe consulat.

Slug standard:

```txt
/pasaport-consulat-{slug-consulat}
```

Exemple:
- `/pasaport-consulat-roma`
- `/pasaport-consulat-milano`

### Când sunt justificate

Paginile pe consulat sunt justificate dacă:
- consulatele au reguli diferite
- există căutări locale reale
- vrem să capturăm intenții de tip `pasaport consulat X`

Nu sunt obligatorii pentru orice țară.

### 9.5. Linkurile prestabilite între pagini

Fiecare pagină SEO trebuie să plece cu o schemă minimă de interlinking, nu să fie lăsată goală.

#### Regula de bază

Fiecare pagină trebuie să aibă:
- legătură spre hubul principal de țară
- legătură spre pagina mamă a categoriei
- 2-4 linkuri conexe relevante pentru aceeași intenție

### 9.6. Strategia standard de interlinking

#### Hub principal de țară

Hubul principal trebuie să trimită către:
- toate categoriile principale
- cele mai importante pagini money
- programare
- ghidurile cu volum cel mai mare

Hubul principal trebuie să primească linkuri din:
- toate paginile majore ale țării
- paginile transversale din aceeași țară

#### Pagini de pașaport

`/pasaport-romania-{slug-tara}` trebuie să trimită către:
- `/acte-romanesti-{slug-tara}`
- `/pasaport-expirat-{slug-tara}`
- `/pasaport-pierdut-furat-{slug-tara}`
- `/pasaport-crds-{slug-tara}`
- `/pasaport-minor-{slug-tara}`
- `/titlu-calatorie-{slug-tara}`
- `/programare-consulat-romania-{slug-tara}`

`/pasaport-expirat-{slug-tara}` trebuie să trimită către:
- hubul principal
- pagina mamă de pașaport
- `titlu-calatorie`
- `programare`

`/pasaport-pierdut-furat-{slug-tara}` trebuie să trimită către:
- hubul principal
- pagina mamă de pașaport
- `titlu-calatorie`
- `titlu-calatorie-urgenta`

`/pasaport-crds-{slug-tara}` trebuie să trimită către:
- hubul principal
- pagina mamă de pașaport
- `programare`
- altă pagină de pașaport relevantă

`/pasaport-minor-{slug-tara}` trebuie să trimită către:
- hubul principal
- pagina mamă de pașaport
- `transcriere-certificat-nastere-{slug-tara}`
- `programare`

#### Buletin

`/buletin-romania-{slug-tara}` trebuie să trimită către:
- hubul principal
- `transcriere-certificat-nastere-{slug-tara}` dacă are sens procedural
- pagina mamă de pașaport
- `programare-consulat-romania-{slug-tara}` dacă procedura trece prin consulat

#### Titlu de călătorie

`/titlu-calatorie-{slug-tara}` trebuie să trimită către:
- hubul principal
- `titlu-calatorie-urgenta-{slug-tara}`
- `pasaport-expirat-{slug-tara}`
- `pasaport-pierdut-furat-{slug-tara}`

`/titlu-calatorie-urgenta-{slug-tara}` trebuie să trimită către:
- hubul principal
- `titlu-calatorie-{slug-tara}`
- `programare-consulat-romania-{slug-tara}`
- o pagină de pașaport relevantă

#### Procuri

`/procura-notariala-{slug-tara}` trebuie să trimită către:
- hubul principal
- `/procura-vanzare-proprietate-{slug-tara}`
- `programare-consulat-romania-{slug-tara}`

`/procura-vanzare-proprietate-{slug-tara}` trebuie să trimită către:
- hubul principal
- `/procura-notariala-{slug-tara}`
- `programare-consulat-romania-{slug-tara}`

#### Programare

`/programare-consulat-romania-{slug-tara}` trebuie să trimită către:
- hubul principal
- pagina mamă de pașaport
- `titlu-calatorie`
- `procura-notariala`

#### Stare civilă

`/transcriere-certificat-nastere-{slug-tara}` trebuie să trimită către:
- hubul principal
- `pasaport-minor-{slug-tara}`
- `buletin-romania-{slug-tara}`
- `programare-consulat-romania-{slug-tara}`

### 9.7. Reguli de densitate a linkurilor

Nu încărcăm artificial paginile.

Regula recomandată:
- hub principal: `4-8` linkuri interne relevante
- pagină majoră: `3-6` linkuri interne relevante
- pagină satelit: `2-4` linkuri interne relevante

### 9.8. Ce trebuie predat pentru o țară nouă

Pentru implementarea SEO a unei țări noi trebuie predat:

#### A. Hub principal
- slug final
- titlu final
- rolul lui în cluster

#### B. Lista paginilor

Pentru fiecare pagină:
- `slug final`
- `tip pagină`
- `familie`
- `intenție principală`
- `este obligatorie sau opțională`

#### C. Linkurile prestabilite

Pentru fiecare pagină:
- `linksToHub`
- `linksToParent`
- `relatedLinks`

#### D. Paginile pe consulat

Dacă există:
- lista lor completă
- când se creează
- către ce trebuie să trimită

### 9.9. Format recomandat de predare

```md
## SEO PAGE MATRIX

### COUNTRY HUB
- SLUG:
- TITLE:
- ROLE:

### CORE PAGES
#### PAGE
- SLUG:
- PAGE_TYPE:
- FAMILY:
- SEARCH_INTENT:
- REQUIRED:
- LINKS_TO_HUB:
- LINKS_TO_PARENT:
- RELATED_LINKS:

### CONSULATE PAGES
#### PAGE
- SLUG:
- CONSULATE:
- REQUIRED:
- LINKS_TO_HUB:
- LINKS_TO_PARENT:
- RELATED_LINKS:
```

### 9.10. TEMPLATE DE PREDARE PENTRU O PAGINĂ SEO

Pe lângă `SEO PAGE MATRIX`, pentru implementare rapidă am nevoie ca fiecare pagină SEO să fie predată într-un format standardizat.

Scopul este:
- să știm exact ce URL implementăm
- să știm ce intenție atacă pagina
- să știm cum se leagă în cluster
- să știm ce conținut trebuie să conțină
- să evităm ambiguitățile la titlu, slug, linkuri și CTA-uri

### Template complet de predare

```md
## SEO PAGE INPUT

### IDENTITATE
- PAGE_SLUG:
- PAGE_URL_FINAL:
- COUNTRY_CODE:
- COUNTRY_NAME:
- PAGE_TYPE:
- PAGE_FAMILY:
- REQUIRED: yes / no

### INTENȚIE SEO
- PRIMARY_SEARCH_INTENT:
- SECONDARY_INTENTS:
- PRIMARY_KEYWORD:
- SECONDARY_KEYWORDS:
- TARGET_AUDIENCE:

### POZIȚIONARE ÎN CLUSTER
- COUNTRY_HUB:
- PARENT_PAGE:
- CHILD_PAGES:
- RELATED_PAGES:
- CONSULATE_RELATED: yes / no

### METADATA
- SEO_TITLE:
- SEO_DESCRIPTION:
- H1:
- CANONICAL_URL:
- OG_TITLE:
- OG_DESCRIPTION:

### BREADCRUMB
- CRUMB_1_LABEL:
- CRUMB_1_URL:
- CRUMB_2_LABEL:
- CRUMB_2_URL:
- CRUMB_3_LABEL:
- CRUMB_3_URL:

### CONȚINUT
- PAGE_GOAL:
- PRIMARY_PROMISE:
- WHAT_THIS_PAGE_MUST_EXPLAIN:
- WHAT_THIS_PAGE_MUST_NOT_CLAIM:
- REQUIRED_SECTIONS:
- OPTIONAL_SECTIONS:
- COUNTRY_SPECIFIC_NOTES:
- CONSULATE_SPECIFIC_NOTES:

### CTA / CONVERSIE
- PRIMARY_CTA_LABEL:
- PRIMARY_CTA_URL:
- SECONDARY_CTA_LABEL:
- SECONDARY_CTA_URL:
- GUIDE_RELATION:

### INTERLINKING
- LINKS_TO_HUB:
- LINKS_TO_PARENT:
- REQUIRED_RELATED_LINKS:
- OPTIONAL_RELATED_LINKS:
- LINKS_TO_AVOID:

### FACTS / SOURCES
- FACTS_CONFIRMED_LIVE:
- FACTS_UNCONFIRMED:
- AUTHORITY_SOURCES:
- INTERNAL_GUIDE_DEPENDENCIES:

### IMPLEMENTATION NOTES
- SHOULD_USE_LLM_OPTIMIZED_PAGE: yes / no
- SHOULD_INCLUDE_AUTHORITY_CARD: yes / no
- SHOULD_INCLUDE_FAQ_SECTION: yes / no
- SPECIAL_SCHEMA_NOTES:
- CONTENT_WARNINGS:
```

### Explicația câmpurilor

#### IDENTITATE
- `PAGE_SLUG` = slugul local fără domeniu
- `PAGE_URL_FINAL` = URL-ul final complet, deja stabilit
- `PAGE_TYPE` = tipul paginii, ex: `hub`, `passport`, `travel-doc`, `programare`, `procura`, `transcriere`, `consulate-local`
- `PAGE_FAMILY` = familia funcțională / clusterul din care face parte
- `REQUIRED` = dacă pagina este obligatorie în lansarea țării

#### INTENȚIE SEO
- `PRIMARY_SEARCH_INTENT` = ce vrea utilizatorul când caută această pagină
- `SECONDARY_INTENTS` = variante apropiate, dar subordonate
- `PRIMARY_KEYWORD` = keyword-ul principal pe care construim pagina
- `SECONDARY_KEYWORDS` = sinonime, long-tail-uri și formulări secundare
- `TARGET_AUDIENCE` = tipul de utilizator care caută pagina

#### POZIȚIONARE ÎN CLUSTER
- `COUNTRY_HUB` = hubul principal al țării
- `PARENT_PAGE` = pagina mamă a categoriei
- `CHILD_PAGES` = subpagini care depind de ea
- `RELATED_PAGES` = pagini laterale din același cluster
- `CONSULATE_RELATED` = dacă pagina are legătură directă cu consulate locale

#### METADATA
- trebuie predate deja aproape finale, nu doar ca idee vagă
- `H1` poate fi apropiat de title, dar nu trebuie să fie identic forțat
- `CANONICAL_URL` trebuie să fie URL-ul final corect cu domeniul standard

#### BREADCRUMB
- breadcrumb-ul trebuie gândit de la început, nu improvizat la implementare
- dacă pagina e adâncă în cluster, include și pagina mamă relevantă

#### CONȚINUT
- `PAGE_GOAL` = rolul paginii în cluster
- `PRIMARY_PROMISE` = ce promite utilizatorului că va clarifica
- `WHAT_THIS_PAGE_MUST_EXPLAIN` = subiectele obligatorii
- `WHAT_THIS_PAGE_MUST_NOT_CLAIM` = lucrurile pe care nu avem voie să le afirmăm fără confirmare
- `REQUIRED_SECTIONS` = secțiuni obligatorii în pagină
- `OPTIONAL_SECTIONS` = secțiuni bune, dar neobligatorii
- `COUNTRY_SPECIFIC_NOTES` = nuanțe de țară
- `CONSULATE_SPECIFIC_NOTES` = doar dacă pagina are componentă locală

#### CTA / CONVERSIE
- CTA-ul trebuie să fie potrivit cu intenția paginii
- `GUIDE_RELATION` = spre ce ghid / flow plătit ar trebui să împingă pagina

#### INTERLINKING
- `LINKS_TO_HUB` = de obicei `yes`, plus URL-ul / pagina exactă
- `LINKS_TO_PARENT` = pagina mamă relevantă
- `REQUIRED_RELATED_LINKS` = 2-4 linkuri care trebuie să existe în pagină
- `OPTIONAL_RELATED_LINKS` = linkuri utile dacă există spațiu și sens
- `LINKS_TO_AVOID` = pagini care ar crea canibalizare sau ar dilua intenția

#### FACTS / SOURCES
- `FACTS_CONFIRMED_LIVE` = fapte confirmate din surse oficiale
- `FACTS_UNCONFIRMED` = tot ce încă trebuie tratat conservator
- `AUTHORITY_SOURCES` = sursele oficiale pentru pagină
- `INTERNAL_GUIDE_DEPENDENCIES` = ce ghiduri / reguli interne trebuie consultate la implementare

#### IMPLEMENTATION NOTES
- `SHOULD_USE_LLM_OPTIMIZED_PAGE` = în majoritatea cazurilor `yes`
- `SHOULD_INCLUDE_AUTHORITY_CARD` = doar dacă pagina chiar are componentă de autoritate
- `SHOULD_INCLUDE_FAQ_SECTION` = doar dacă are sens editorial
- `SPECIAL_SCHEMA_NOTES` = observații despre Article / Breadcrumb / alte nevoi
- `CONTENT_WARNINGS` = capcane editoriale sau legale de evitat

### Template scurt, ușor de completat

Dacă vrei o variantă mai compactă, poți să-mi dai fiecare pagină și în formatul ăsta:

```md
## SEO PAGE
- URL_FINAL:
- SLUG:
- PAGE_TYPE:
- COUNTRY:
- INTENTIE_PRINCIPALA:
- KEYWORD_PRINCIPAL:
- TITLU_SEO:
- META_DESCRIPTION:
- H1:
- HUB_TARA:
- PAGINA_MAMA:
- LINKURI_OBLIGATORII:
- CTA_PRINCIPAL:
- CTA_URL:
- CE_TREBUIE_SA_EXPLICE:
- CE_NU_AVEM_VOIE_SA_SPUNEM:
- FAPTE_CONFIRMATE:
- FAPTE_INCERTE:
- SURSE:
```

### Regula practică

Dacă pagina îmi este predată în acest format, implementarea devine mult mai rapidă și mai consistentă, pentru că nu mai trebuie să deduc:
- intenția
- clusterul
- slugul final
- linkurile obligatorii
- limitele editoriale

În mod ideal, fiecare pagină SEO nouă pentru o țară nouă trebuie predată în acest template.

### 9.11. Reguli editoriale pentru SEO pages

- slugurile trebuie stabilite dinainte, nu improvizate la implementare
- o pagină = o intenție principală
- nu crea două pagini care atacă aceeași intenție fără diferență clară
- fiecare pagină trebuie să intre într-un cluster clar pe țară
- fiecare pagină trebuie să știe de la început ce linkuri interne primește și către ce trimite

---

## 10. MODELUL REAL DIN PROIECT

Template-ul trebuie să fie compatibil cu structura reală din proiect:

- `DIAGNOSTIC_SUMMARY`
- `GHID_FREE`
- `GHID_PAID`
- `OPEN_ITEMS`

Compatibilitatea reală trebuie să urmeze modelul actual din aplicație:

### `GHID_FREE`

Formatul real este:

```ts
type FreeBlockType = "info" | "warning" | "tip" | "action" | "note";

type GhidFreeContent = {
  title: string;
  meta: {
    free: number;
    total: number;
  };
  totalSteps: number;
  steps: Array<{
    id: string;
    title: string;
    blocks: Array<{
      type: FreeBlockType;
      text: string;
    }>;
  }>;
  lockedSteps: string[];
  paywallTeaser: string[];
};
```

### `GHID_PAID`

Formatul real este:

```ts
type TrackerStep = {
  id: string;
  title: string;
  shortLabel?: string;
  todoNote?: string;
};
```

În implementarea curentă, ghidul paid este structurat în pași operaționali, iar anumite flow-uri pot atașa:
- `hasAuthorityCard`
- `actionItem`
- conținut personalizat de autoritate / consulat

### Tipuri reale de block-uri

Tipuri permise în output:
- `info`
- `warning`
- `tip`
- `action`
- `note`

`note` trebuie considerat tip valid, pentru că există în modelul actual.

---

## 11. CUM TREBUIE PREDAT UN GHID NOU CA INPUT

Atunci când se cere generarea unui ghid nou pe baza acestui spec, inputul trebuie predat într-un format standardizat.

Scopul este:
- să nu lipsească date operaționale critice
- să fie clar ce este fapt confirmat și ce este doar ipoteză
- să poată fi conectat ușor la modelul din proiect

### Structura minimă de predare

Orice ghid nou trebuie predat cu:

1. identitate ghid
2. context utilizator
3. context țară și autoritate
4. reguli comune aplicabile
5. fapte confirmate
6. fapte neconfirmate
7. relații SEO / cross-sell

### Template de predare recomandat

```md
## INPUT GHID NOU

### IDENTITATE
- GUIDE_ID_PROPUS:
- FAMILIA_DE_FLOW:
- TITLU_GHID:
- COUNTRY_CODE:
- COUNTRY_NAME:

### UTILIZATOR
- AUDIENȚĂ:
- SITUAȚIA EXACTĂ:
- REZULTAT FINAL DORIT:
- CONSTRÂNGERI / NUANȚE:

### AUTORITATE
- AUTORITATE PRINCIPALĂ:
- AUTORITATE LOCALĂ / CONSULAT:
- PLATFORMA DE PROGRAMARE:

### REGULI COMUNE APLICABILE
- bookingRule:
- urgentBookingRule:
- walkInAvailability:
- passportPhotoRule:
- passportPaymentRule:
- travelDocIssuanceRule:
- notarialPaymentRule:
- birthParentDocumentsRule:
- specialWarnings:

### FAPTE CONFIRMATE LIVE
- ...

### FAPTE PRELUATE DAR NECONFIRMATE
- ...

### COSTURI / TERMENE / PARTICULARITĂȚI
- ...

### CROSS-SELL RELEVANT
- ...

### PAGINI SEO / HUBURI RELEVANTE
- ...
```

### Reguli de predare

- Nu preda ghidul ca text liber haotic.
- Nu amesteca fapte confirmate cu ipoteze.
- Nu include reguli copiate din altă țară fără marcaj explicit.
- Dacă autoritatea nu este determinată, spune clar că există doar fallback generic.
- Dacă există fișier sursă de consulat, el trebuie menționat explicit ca sursă de adevăr operațional.

---

## 12. MODEL MULTI-COUNTRY

Specul trebuie să genereze ghiduri compatibile cu modelul multi-country actual.

În starea actuală a proiectului, țările suportate explicit sunt:
- `de` = Germania
- `it` = Italia

Același tip de ghid poate exista în mai multe țări, dar:
- nu se copiază mecanic între țări
- nu se transferă automat reguli dintr-o țară în alta
- fiecare ghid trebuie ancorat în țara sa, în autoritățile sale și în regulile sale operaționale

Orice ghid nou trebuie să specifice explicit:
- `COUNTRY_CODE`
- `COUNTRY_NAME`
- autoritatea principală
- autoritatea locală relevantă

---

## 13. FAMILIILE DE FLOW REALE DIN PROIECT

Ghidul nou trebuie să se încadreze într-una dintre familiile reale de flow deja existente în proiect.

Familiile reale curente sunt:
- pașaport standard / reînnoire
- pașaport expirat
- pașaport pierdut / furat
- pașaport CRDS
- pașaport minor / primul pașaport copil
- buletin standard
- buletin expirat
- buletin pierdut / furat
- primul buletin
- titlu de călătorie
- titlu de călătorie urgent
- procură notarială
- procură generală
- procură vânzare proprietate
- procură moștenire
- procură cont bancar
- procură divorț
- transcriere certificat de naștere

Dacă flow-ul nou nu se potrivește exact, trebuie asociat cu cea mai apropiată familie operațională existentă.

Specul trebuie să includă explicit:
- `GUIDE_ID_PROPUS`
- `FAMILIA_DE_FLOW`

---

## 14. CONSULATE DATA SOURCE

Specul trebuie să presupună existența unui layer separat de date brute pentru consulate / autorități.

Acest layer NU este ghidul.
Acest layer NU este copy final pentru utilizator.
Acest layer este sursa de adevăr operațională.

### Rolul `consulate data source`

Fișiere de tip:
- `it_consulates_ts.ts`
- `de_consulates_ts.ts`
- sau alte surse echivalente

trebuie să conțină:
- mapping regiune -> consulat
- date de contact
- platformă de programare
- reguli brute pe pașaport
- reguli brute pe titlu de călătorie
- reguli brute pe procuri
- reguli brute pe transcriere
- avertismente locale
- note despre sursă / nivelul de încredere

### Ce intră în data source

Pentru fiecare consulat / autoritate, data source-ul ar trebui să poată acoperi minim:
- `id`
- `country`
- `regions`
- `contact`
- `booking`
- `passport`
- `travelDoc`
- `notarial`
- `birth`
- `specialWarnings`
- `notes`
- `sourceNotes`

### Ce NU intră în data source

- texte de marketing
- copy final de ghid
- comparații între consulate
- blocuri editoriale complete
- teaser de paywall

### Regula de utilizare

Orice ghid nou trebuie să indice clar pe ce data source se bazează.

Exemplu:
- `SOURCE_AUTHORITY_DATA: src/lib/content/consulates/it.ts`

---

## 15. CONSULATERULES / HELPERI CARE DERIVĂ TEXTELE PENTRU GHID

Între data source-ul brut și ghidul final trebuie să existe un layer de reguli derivate / helperi.

Acest layer este echivalentul modelului actual de tip:
- `consulateRules.ts`
- helperi precum `getTravelBookingRule(...)`
- helperi pentru badge-uri, traduceri, plată, ridicare, warnings

### Rolul acestui layer

Acest layer:
- citește datele brute ale autorității
- aplică fallback-uri pe țară
- aplică override-uri pe consulat
- produce texte scurte, coerente și reutilizabile pentru UI și ghiduri

### Ce trebuie să facă helperii

Helperii trebuie să poată deriva:
- texte pentru diagnostic
- badge summary
- warning-uri scurte
- reguli despre programare
- reguli despre foto
- reguli despre traducere
- reguli despre plată
- reguli despre ridicare
- reguli despre transcriere
- override-uri pentru checklist

### Reguli de arhitectură

- ghidul final nu citește direct din data source brut dacă există deja helper dedicat
- textele repetitive trebuie generate din helperi, nu rescrise manual
- dacă o regulă se schimbă la un consulat, modificarea trebuie făcută o singură dată în layerul de reguli
- outputul final către user trebuie să rămână single-consulate

### Cum trebuie descris în inputul unui ghid nou

La predarea unui ghid nou trebuie să fie clar:
- ce vine din data source brut
- ce vine din `consulateRules` / helperi
- ce este copy editorial specific ghidului

Format recomandat:

```md
### SOURCE LAYERS
- CONSULATE_DATA_SOURCE:
- CONSULATE_RULE_HELPERS:
- EDITORIAL_OVERRIDES_PENTRU_GHID:
```

---

## 16. REGULĂ CRITICĂ — UN GHID = O SINGURĂ ȚARĂ + O SINGURĂ AUTORITATE DERIVATĂ

Outputul final către user trebuie să fie:
- single-country
- single-authority-aware

Asta înseamnă:
- ghidul nu compară mai multe consulate în același output
- ghidul nu include texte de tip `Bonn = ... / München = ... / Stuttgart = ...`
- ghidul nu include comparații între autorități în pașii vizibili utilizatorului

Sunt permise doar:
- regula țării curente
- regula autorității relevante pentru user
- fallback generic doar dacă autoritatea nu este încă determinată

---

## 17. REGULĂ CRITICĂ — INFORMAȚIA LOGISTICĂ STĂ ÎN CARDUL AUTORITĂȚII, NU ÎN GHID

În structura actuală din proiect, informația logistică repetitivă și comună nu trebuie hardcodată în pașii ghidului decât când este necesară pentru acțiune imediată.

Informațiile care trebuie tratate ca reguli comune / authority card:
- programare
- walk-in / fără programare
- tip de fotografie
- taxă / modalitate de plată
- ridicare
- ridicare prin poștă
- traduceri cerute
- dovezi suplimentare cerute de autoritate
- particularități locale

Ghidul trebuie:
- să folosească aceste reguli
- să facă referire la ele
- să nu dubleze inutil aceeași logistică în 4-5 locuri diferite

---

## 18. MODELUL DE REGULI COMUNE PE CONSULAT / AUTORITATE

Specul nou trebuie să presupună existența unui model centralizat de reguli comune.

Aceste reguli pot acoperi, în funcție de ghid:
- `bookingRule`
- `urgentBookingRule`
- `walkInAvailability`
- `travelDocIssuanceRule`
- `travelDocPhotoRule`
- `travelDocTranslationRule`
- `passportPhotoRule`
- `passportLostOrStolenRule`
- `passportPaymentRule`
- `passportPickupRule`
- `postalPickupRule`
- `notarialPaymentRule`
- `saleProcuraSpecialRule`
- `birthTranscriptionProcessingRule`
- `birthTranscriptionPickupRule`
- `birthParentDocumentsRule`
- `specialWarnings`
- `diagnosticBadgeSummary`
- `seoSummary`
- `checklistOverrides`

Aceste reguli trebuie considerate sursa principală de adevăr pentru nuanțele locale.

În spec, la generarea ghidului, trebuie să existe o secțiune explicită:

- `REGULI_COMUNE_APLICABILE`

Acolo se enumeră doar regulile relevante pentru ghidul curent.

---

## 19. ZONA VARIABILĂ — SE COMPLETEAZĂ LA FIECARE GHID

### IDENTITATE GHID

**GUIDE_ID_PROPUS:**  
[INTRODU AICI ID-UL PROPUS]

**FAMILIA_DE_FLOW:**  
[INTRODU AICI FAMILIA OPERAȚIONALĂ]

**TIP GHID:**  
[INTRODU AICI TIPUL GHIDULUI]

**TITLU GHID:**  
[INTRODU AICI TITLUL EXACT]

### CONTEXT ȚARĂ ȘI AUTORITATE

**COUNTRY_CODE:**  
[ex: de / it]

**ȚARĂ:**  
[INTRODU AICI ȚARA]

**AUTORITATE PRINCIPALĂ:**  
[ex: consulat, ambasadă, SPCLEP, notar, primărie]

**AUTORITATE LOCALĂ / CONSULAT APLICABIL:**  
[INTRODU AICI AUTORITATEA RELEVANTĂ DACĂ ESTE DETERMINATĂ]

**PLATFORMA DE PROGRAMARE:**  
[ex: econsulat.ro / booking direct / fără platformă / altă platformă]

### UTILIZATOR ȘI SITUAȚIE

**AUDIENȚĂ:**  
[INTRODU AICI CINE ESTE UTILIZATORUL]

**SITUAȚIA EXACTĂ:**  
[INTRODU AICI CONTEXTUL OPERAȚIONAL]

**REZULTATUL FINAL DORIT:**  
[INTRODU AICI CE VREA SĂ OBȚINĂ UTILIZATORUL]

**CONSTRÂNGERI / NUANȚE:**  
[INTRODU AICI EXCEPȚIILE IMPORTANTE]

### FAPTE ȘI SURSE

**DATE AUTORITATE VERIFICATE LIVE:**  
[PASTE DIRECT DIN FIȘIERUL DE DATE AL AUTORITĂȚII / CONSULATULUI]

**SOURCE_AUTHORITY_DATA:**  
[INTRODU AICI FIȘIERUL / SURSA DE DATE BRUTE]

**SOURCE_RULE_HELPERS:**  
[INTRODU AICI LAYERUL DE REGULI / HELPERI CARE DERIVĂ TEXTELE]

**REGULI COMUNE APLICABILE:**  
[ENUMERĂ REGULILE DIN MODELUL CENTRAL CARE SE APLICĂ ACESTUI GHID]

**FAPTE CONFIRMATE LIVE PENTRU ACEST GHID:**  
[CE ȘTII SIGUR DIN VERIFICARE DIRECTĂ]

**FAPTE PRELUATE DIN GHIDURI ANTERIOARE (NECESITĂ REVERIFICARE):**  
[CE CREZI CĂ E VALABIL DAR NU ESTE ÎNCĂ VERIFICAT SPECIFIC]

**COSTURI / TERMENE / PARTICULARITĂȚI:**  
[INTRODU AICI TAXE, TERMENE, FOTOGRAFII, PLATĂ, RIDICARE, POȘTĂ, ETC.]

### DISTRIBUȚIE ȘI RELAȚII

**CROSS-SELL RELEVANT:**  
[GHIDURI COMPLEMENTARE DIN ACEEAȘI ȚARĂ SAU ACELAȘI CLUSTER]

**PAGINI SEO / HUBURI RELEVANTE:**  
[UNDE SE LEAGĂ NATURAL ACEST GHID ÎN CLUSTER]

---

## 20. REGULA DE MARCARE A FAPTELOR

Fiecare fapt specific trebuie marcat cu:
- `✅` = confirmat din sursă live
- `⚠️` = probabil corect, necesită verificare înainte de publicare
- `❌` = cunoscut incorect / depășit / de evitat

Se aplică la:
- taxe
- termene
- documente obligatorii
- metode de plată
- programare
- ridicare
- fotografie
- traduceri
- excepții locale

Toate faptele marcate cu `⚠️` trebuie adăugate și în `OPEN_ITEMS`.

---

## 21. OUTPUT OBLIGATORIU — 4 SECȚIUNI

Outputul trebuie să fie întotdeauna în 4 secțiuni:

1. `DIAGNOSTIC_SUMMARY`
2. `GHID_FREE`
3. `GHID_PAID`
4. `OPEN_ITEMS`

---

## 22. DIAGNOSTIC_SUMMARY

Generează:
- `title`
- `subtitle`
- `warnings`
- `estimatedWeeks`
- `estimatedAppointments`
- `guideTitle`
- `previewSteps`

### Reguli

- `title` trebuie să fie clar, concret, scurt
- `subtitle` trebuie să explice situația în 1 frază
- `warnings` doar dacă există riscuri reale
- `estimatedWeeks` trebuie să fie realist și ușor de înțeles
- `estimatedAppointments` poate fi număr scurt sau formulare operațională
- `guideTitle` trebuie să sune ca un nume de ghid ActeRO
- `previewSteps` trebuie să reflecte structura completă a ghidului

În preview:
- pașii 1-2 sunt vizibili / free
- pașii 3+ sunt locked

### Reguli speciale

- dacă există autoritate derivată, rezumatul trebuie să fie compatibil cu ea
- dacă există blocaj real de adresă / programare / ridicare / traducere, apare în `warnings`
- nu introduce comparații între mai multe consulate

Ton:
- calm
- încurajator
- fără exagerări
- fără marketing agresiv

---

## 23. GHID_FREE

Generează varianta free a ghidului.

Format:
- `title`
- `meta`
  - `free`
  - `total`
- `totalSteps`
- `steps`
- `lockedSteps`
- `paywallTeaser`

### Reguli

- ghidul free include doar primii 1 sau 2 pași
- în implementarea actuală, de regulă sunt 2 pași free
- pașii free trebuie să fie utili singuri
- dar nu trebuie să rezolve integral cazul fără restul ghidului

Nu pune în free:
- fluxul complet de programare
- ziua completă la ghișeu
- checklistul final complet
- toate excepțiile operaționale

### Structura fiecărui pas free

Fiecare pas are:
- `id`
- `title`
- `blocks`

Fiecare block are:
- `text`
- `type`

Tipuri permise:
- `info`
- `warning`
- `tip`
- `action`
- `note`

### Reguli editoriale

- o singură idee pe block
- formulări scurte și scanabile
- fără paragrafe dense
- condițiile importante în block separat
- documentele speciale spuse explicit
- dacă există capcană frecventă -> `warning`
- dacă există avantaj practic -> `tip`
- dacă utilizatorul trebuie să facă ceva -> `action`
- dacă merită salvat / notat / fotografiat -> `note`

### Locked steps

- continuă natural ghidul
- trebuie să corespundă 1:1 cu logica ghidului paid
- trebuie să creeze valoare percepută clară

### Paywall teaser

- 4-6 bullets
- scurt
- scanabil
- orientat pe rezultat
- poate include:
  - programarea
  - platforma
  - ziua la autoritate
  - checklist
  - tracker
  - card autoritate
  - ce faci dacă ți se cere ceva neașteptat

---

## 24. GHID_PAID

Generează varianta completă a ghidului.

Format:
- `title`
- `steps`

Fiecare pas paid poate avea:
- `id`
- `title`
- `shortLabel`
- `hasAuthorityCard?`
- `blocks`
- `actionItem?`

`actionItem`, când există, trebuie returnat ca obiect:
- `label`
- `href`

Exemplu:

```json
"actionItem": {
  "label": "Programează-te pe platforma relevantă",
  "href": "https://..."
}
```

### Reguli pentru pașii paid

- continuă direct după ghidul free
- fiecare pas este o etapă reală
- ordinea este operațională, nu teoretică
- utilizatorul trebuie să înțeleagă:
  - ce face acum
  - ce urmează
  - ce ia cu el
  - ce poate merge prost
  - cum reacționează dacă apare o surpriză

### Tipuri de block permise

- `info`
- `warning`
- `tip`
- `action`
- `note`

### Reguli editoriale

- nu scrie generalități
- fiecare block trebuie să fie suficient de concret ca utilizatorul să poată acționa
- include detalii reale când există:
  - ce selectează pe platformă
  - ce duce în original
  - când ajunge la autoritate
  - ce face dacă i se cere ceva în plus
  - cum verifică actele înainte de depunere

### Reguli privind autoritatea / consulatul

- dacă flow-ul cere informație locală, folosește regula comună a autorității
- nu repeta tot authority card-ul în fiecare pas
- ghidul paid trebuie să fie compatibil cu `hasAuthorityCard`
- dacă există pași care depind de autoritate, formularea trebuie să rămână single-authority

---

## 25. OPEN_ITEMS

Secțiunea `OPEN_ITEMS` trebuie să conțină toate punctele care necesită verificare înainte de publicare.

Include:
- orice fapt marcat `⚠️`
- orice informație preluată din alt ghid dar nereverificată
- orice cost / termen / document / regulă locală neconfirmată
- orice inconsistență între surse

Format recomandat:
- item scurt
- clar
- verificabil
- formulat ca task de verificare

Exemplu:
- `Verifică dacă la Consulatul din Torino titlul de călătorie urgent se emite doar cu programare sau și cu prezentare directă.`

---

## 26. REGULI EDITORIALE CRITICE

- Nu transfera automat reguli din Germania în Italia sau invers.
- Nu transfera automat reguli între consulate.
- Nu include comparații multi-consulat în outputul final.
- Nu hardcoda logistică locală în mai multe locuri dacă ea vine din modelul comun.
- Nu scrie “eseu”; scrie pași.
- Nu scrie teorie dacă userul are nevoie de acțiune.
- Nu promite termene sau programări dacă nu sunt confirmate.
- Dacă o informație este doar probabilă, marcheaz-o `⚠️`.
- Dacă o informație este cunoscută ca depășită, marcheaz-o `❌` și nu o recomanda.

---

## 27. REGULI DE COMPATIBILITATE CU PROIECTUL

Specul trebuie să producă output compatibil cu:
- structura din `src/lib/guides/freeContent.ts`
- structura din `src/lib/guides/steps.ts`
- regulile comune din `src/lib/guides/consulateRules.ts`
- meta / naming / cross-sell din `src/lib/guides/meta.ts`
- sursele brute de autoritate / consulat din `src/lib/content/consulates/*`
- strategia de pagini SEO și interlinking pe țară

Orice ghid nou rezultat din acest spec trebuie să poată fi:
- mapat pe un `guideId`
- legat de o familie reală de flow
- personalizat pe țară
- personalizat pe autoritate
- afișat fără texte comparative nepermise

---

## 28. FORMAT FINAL CERUT DE MODEL

Outputul trebuie să fie returnat strict în ordinea:

1. `DIAGNOSTIC_SUMMARY`
2. `GHID_FREE`
3. `GHID_PAID`
4. `OPEN_ITEMS`

Fără explicații în plus.
Fără comentarii meta.
Fără justificări despre cum ai generat ghidul.

---

## 29. CHECKLIST FINAL ÎNAINTE DE ACCEPTARE

Înainte să consideri ghidul valid, verifică:

- este clar pentru o singură țară?
- este clar pentru o singură autoritate relevantă?
- nu conține comparații între mai multe consulate?
- folosește regulile comune, nu logistică duplicată?
- are structură compatibilă cu `GHID_FREE` și `GHID_PAID` din proiect?
- tipurile de block sunt valide?
- faptele incerte sunt marcate `⚠️`?
- `OPEN_ITEMS` conține toate verificările rămase?
- ghidul este scanabil pe mobil?
- ghidul reduce anxietatea utilizatorului și îl ajută să acționeze?
- este clar ce vine din data source brut?
- este clar ce vine din `consulateRules` / helperi?
- este clar ce este copy editorial specific ghidului?
- țara nouă are hub principal SEO clar?
- slugurile paginilor SEO sunt prestabilite?
- interlinking-ul de bază este definit dinainte?
