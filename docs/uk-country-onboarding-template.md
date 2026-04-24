# UK COUNTRY ONBOARDING — TEMPLATE COMPLET

Acest document este formularul de lucru pentru lansarea completă a `UK` în ActeRO, pe baza [actero-guide-spec-template-v2.md](/Users/mmalaias-mac/actero/docs/actero-guide-spec-template-v2.md:1).

Scop:
- suport complet `UK` în wizard
- mapare completă `regiune -> consulat / autoritate`
- `consulate data source` complet
- `consulateRules / helper input`
- cele `17 ghiduri`
- `SEO page matrix`
- compatibilitate cu `diagnostic`, `ghid free`, `ghid paid`, `checklist`, `tracker`

---

## 1. COUNTRY PROFILE

- `COUNTRY_CODE`: `uk`
- `COUNTRY_NAME_RO`: `Marea Britanie`
- `COUNTRY_NAME_LOCAL`: `United Kingdom`
- `DISPLAY_NAME_IN_UX`: `UK`
- `DIASPORA_AUDIENCE_LABEL`: `Românii din UK`
- `SUPPORTED_NOW`: `todo`
- `NOTES_DESPRE_SCOPE`: `todo`

---

## 2. REGION -> CONSULATE MAP

### REGIONS
- `todo`

### MAP
- `todo`

### EXCEPTIONS
- `todo`

### SOURCE
- `todo`

### Notes
- Lista trebuie să acopere toate regiunile pe care le va alege userul în wizard.
- Pentru fiecare regiune trebuie să existe o singură autoritate derivată implicit.
- Dacă anumite proceduri au altă autoritate decât regula generală, notează explicit excepția.

---

## 3. CONSULATE DATA SOURCE

Completează un bloc pentru fiecare consulat / autoritate relevantă.

### CONSULAT: `consulat-x`
- `id`: `todo`
- `country`: `uk`
- `name`: `todo`
- `city`: `todo`
- `regions`: `todo`
- `specialTerritories`: `todo`
- `address`: `todo`
- `phone`: `todo`
- `email`: `todo`
- `website`: `todo`

#### BOOKING
- `platform`: `todo`
- `bookingRequired`: `todo`
- `walkInAllowed`: `todo`
- `urgentFlow`: `todo`
- `bookingNotes`: `todo`

#### PASSPORT
- `photoRule`: `todo`
- `paymentRule`: `todo`
- `pickupRule`: `todo`
- `postalPickup`: `todo`
- `lostStolenTranslationRule`: `todo`
- `passportNotes`: `todo`

#### TRAVEL_DOC
- `bookingRule`: `todo`
- `issuanceRule`: `todo`
- `photoRule`: `todo`
- `translationRule`: `todo`
- `travelDocNotes`: `todo`

#### NOTARIAL
- `paymentRule`: `todo`
- `rnneprRule`: `todo`
- `saleProcuraRule`: `todo`
- `notarialNotes`: `todo`

#### BIRTH
- `parentDocumentsRule`: `todo`
- `byMail`: `todo`
- `processingTimeRule`: `todo`
- `pickupRule`: `todo`
- `birthNotes`: `todo`

#### DATA QUALITY
- `specialWarnings`: `todo`
- `notes`: `todo`
- `sourceNotes`: `todo`
- `confidence`: `todo`

### Reguli
- aici intră doar date brute și reguli operaționale
- nu scrie text de ghid sau text SEO
- dacă ceva nu este confirmat, marchează explicit

---

## 4. COUNTRY CONSULATE RULES / HELPER INPUT

### COUNTRY DEFAULTS
- `bookingRule`: `todo`
- `urgentBookingRule`: `todo`
- `walkInAvailability`: `todo`
- `travelDocIssuanceRule`: `todo`
- `travelDocPhotoRule`: `todo`
- `travelDocTranslationRule`: `todo`
- `passportPhotoRule`: `todo`
- `passportLostOrStolenRule`: `todo`
- `passportPaymentRule`: `todo`
- `passportPickupRule`: `todo`
- `postalPickupRule`: `todo`
- `notarialPaymentRule`: `todo`
- `saleProcuraSpecialRule`: `todo`
- `birthTranscriptionProcessingRule`: `todo`
- `birthTranscriptionPickupRule`: `todo`
- `birthParentDocumentsRule`: `todo`
- `specialWarnings`: `todo`
- `diagnosticBadgeSummary`: `todo`
- `seoSummary`: `todo`
- `checklistOverrides`: `todo`

### CONSULATE OVERRIDES
#### `consulat-x`
- `todo`

#### `consulat-y`
- `todo`

### Reguli
- outputul final către user trebuie să fie `single-authority`
- nu vrem texte comparative între mai multe consulate în același ghid

---

## 5. GUIDE MATRIX

Ținem cele `17 ghiduri` ca structură standard.

### GUIDE MATRIX

1. `#1` `todo`
2. `#2` `todo`
3. `#3` `todo`
4. `#4` `todo`
5. `#5` `todo`
6. `#6` `todo`
7. `#7` `todo`
8. `#8` `todo`
9. `#9` `todo`
10. `#10` `todo`
11. `#11` `todo`
12. `#12` `todo`
13. `#13` `todo`
14. `#14` `todo`
15. `#15` `todo`
16. `#16` `todo`
17. `#17` `todo`

Pentru fiecare ghid trebuie definite ulterior:
- `guideId`
- document type
- audiență
- situația exactă
- autoritatea implicită
- dacă există întrebări noi în wizard

---

## 6. PRODUCT RULES

### WIZARD
- `country visible in wizard`: `todo`
- `region step label`: `todo`
- `region type used in UX`: `todo`
- `new questions needed only for UK`: `todo`

### AUTHORITY DERIVATION
- `default derivation rule`: `todo`
- `fallback if no authority can be derived`: `todo`
- `procedure-specific derivation exceptions`: `todo`

### AVAILABILITY
- `all 17 guides active now?`: `todo`
- `waitlist behavior for unsupported combinations`: `todo`

### COUNTRY COPY
- `country name shown in wizard`: `UK`
- `country label in ghiduri`: `todo`
- `country label in diagnostic`: `todo`

### UX RULES
- `authority card required`: `yes`
- `special warnings behavior`: `todo`
- `shared country notes`: `todo`

### DISTRIBUTION
- `main acquisition channel`: `SEO`
- `homepage behavior`: `țara se activează minimal în secțiunea ȚĂRI DISPONIBILE`
- `homepage heavy repositioning`: `no`

---

## 7. SEO PAGE MATRIX

### COUNTRY HUB
- `slug`: `/acte-romanesti-uk`
- `status`: `todo`
- `notes`: `todo`

### CORE PAGES
#### PAGE
- `slug`: `/pasaport-romania-uk`
- `intent`: `todo`
- `required links`: `todo`

#### PAGE
- `slug`: `/buletin-romania-uk`
- `intent`: `todo`
- `required links`: `todo`

#### PAGE
- `slug`: `/titlu-calatorie-uk`
- `intent`: `todo`
- `required links`: `todo`

#### PAGE
- `slug`: `/titlu-calatorie-urgenta-uk`
- `intent`: `todo`
- `required links`: `todo`

#### PAGE
- `slug`: `/procura-notariala-uk`
- `intent`: `todo`
- `required links`: `todo`

#### PAGE
- `slug`: `/procura-vanzare-proprietate-uk`
- `intent`: `todo`
- `required links`: `todo`

#### PAGE
- `slug`: `/programare-consulat-roman-uk`
- `intent`: `todo`
- `required links`: `todo`

#### PAGE
- `slug`: `/transcriere-certificat-nastere-uk`
- `intent`: `todo`
- `required links`: `todo`

### CONSULATE PAGES
#### PAGE
- `slug`: `todo`
- `consulateId`: `todo`
- `intent`: `todo`

### Reguli
- hubul principal pe țară este intrarea SEO principală
- paginile money trebuie să fie legate din hub din prima versiune
- orice pagină nouă UK trebuie să aibă linkuri interne prestabilite, nu să fie lăsată izolată

---

## 8. TOP 10 URL-URI PENTRU INDEXARE INIȚIALĂ

1. `https://www.actero.ro/acte-romanesti-uk`
2. `https://www.actero.ro/pasaport-romania-uk`
3. `https://www.actero.ro/buletin-romania-uk`
4. `https://www.actero.ro/titlu-calatorie-uk`
5. `https://www.actero.ro/titlu-calatorie-urgenta-uk`
6. `https://www.actero.ro/procura-notariala-uk`
7. `https://www.actero.ro/transcriere-certificat-nastere-uk`
8. `https://www.actero.ro/programare-consulat-roman-uk`
9. `todo`
10. `todo`

---

## 9. ÎNTREBĂRI DESCHISE PENTRU UK

- `Ce regiuni exacte alegem în wizard pentru UK?`
- `Care sunt toate autoritățile / consulatele relevante?`
- `Există proceduri unde competența diferă față de regula generală?`
- `Există cazuri speciale pe poștă / curier / documente locale?`
- `Ce pagini SEO comparative locale merită din prima versiune?`
