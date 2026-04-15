# Spec reguli consulate pentru ghiduri

Scop: ghidurile nu mai afișează informații despre mai multe consulate în același timp. Ghidul primește `consulateId`, iar apoi afișează doar regula pentru consulatul ales.

## 1. Model minim de date pe țară

Pentru fiecare țară nouă avem nevoie de două straturi:

1. `content/consulates/<country>.ts`
Conține identitatea consulatului și regulile operaționale de bază.

2. `guides/consulateRules.ts` sau echivalent per țară
Conține transformările editoriale folosite în ghiduri, liste de acte, progres și diagnostic.

## 2. Câmpuri obligatorii pe consulat

Aceste câmpuri trebuie să existe pentru fiecare consulat:

- `id`
- `name`
- `address`
- `phone`
- `email`
- `website`
- `googleMapsUrl`
- `wazeUrl`
- `scheduleDeponere`
- `scheduleRidicare`
- `schedulePassportPickup`
- `scheduleTravelDoc`
- `paymentMethod`
- `paymentPassport`
- `paymentNotarial`
- `paymentNote`
- `paymentPassportNote`
- `paymentNotarialNote`
- `postalPickup`
- `postalPickupUrl`
- `starecivilaProgramRidicare`
- `starecivilaPosta`
- `starecivilaTermen`

## 3. Reguli speciale pe proceduri

Pe lângă câmpurile generale, fiecare țară trebuie să poată răspunde explicit la aceste întrebări:

### Pașaport

- fotografia se face la ghișeu sau trebuie adusă
- pentru document furat: se cere traducere sau nu
- dacă se cere traducere: autorizată sau legalizată
- cum se plătește taxa
- cum se ridică pașaportul
- există ridicare prin poștă sau nu
- există reguli speciale pentru minori la ridicare

### Titlu de călătorie

- intervalul exact fără programare
- regula fotografiei
- regula pentru document furat
- dacă se eliberează în aceeași zi
- dacă există excepții de zi, de tipul „vinerea nu ridici în aceeași zi”

### Procuri

- cum se plătește taxa RNNEPR de 3 euro
- dacă plata se face la ghișeu sau în avans
- dacă există pre-scanare obligatorie pentru anumite procuri
- dacă există excepții pe tip de procură

### Transcriere naștere

- când se cer certificatele de naștere ale părinților
- dacă există excepție pentru nume compuse / apare și numele tatălui în acte
- dacă formularul se tipărește doar la consulat
- dacă există opțiune de trimitere prin poștă
- programul de ridicare
- termenul orientativ
- dacă există bonus de tip „poți continua cu pașaportul în aceeași zi”

## 4. Bucket-urile reutilizabile

Pentru o țară nouă, helper-ele trebuie să acopere cel puțin:

- `passport.photo_capture`
- `passport.lost_or_stolen.translation_rule`
- `passport.payment_rule`
- `passport.pickup_rule`
- `passport.postal_pickup_rule`
- `travel_doc.photo_rule`
- `travel_doc.stolen_doc_translation_rule`
- `travel_doc.same_day_release_rule`
- `travel_doc.friday_exception_rule`
- `notarial.rnnepr_payment_rule`
- `notarial.sale_prescan_required`
- `inheritance.death_certificate_rule`
- `birth_transcription.parent_birth_cert_rule`
- `birth_transcription.special_name_rule`
- `birth_transcription.printed_form_rule`
- `birth_transcription.processing_rule`
- `birth_transcription.pickup_rule`
- `birth_transcription.postal_rule`
- `birth_transcription.same_day_next_step_rule`

## 5. Germania: implementare actuală

În Germania, aceste reguli sunt centralizate în:

- `/Users/mmalaias-mac/actero/src/lib/content/consulates/de.ts`
- `/Users/mmalaias-mac/actero/src/lib/guides/consulateRules.ts`

Ghidurile folosesc apoi aceste reguli în:

- ghidul gratuit
- ghidul complet
- lista de acte
- progres
- diagnostic

## 6. Cum deschidem Italia

Pentru Italia, copiem aceeași structură:

1. `src/lib/content/consulates/it.ts`
2. extindem tipurile cu noile consulate italiene
3. facem `src/lib/guides/consulateRules.it.ts` sau extindem helper-ul actual pe țară
4. completăm bucket-urile din secțiunea 4
5. abia apoi scriem ghidurile

## 7. Checklist de spec pentru Italia

Când vii cu specurile pentru Italia, ideal este să le aduci în formatul ăsta, pentru fiecare consulat:

- nume consulat
- oraș / arondare
- adresă
- program depunere
- program ridicare
- program titlu de călătorie
- metoda de plată pentru pașaport
- metoda de plată pentru procuri
- ridicare prin poștă: da/nu
- fotografie pașaport: la ghișeu / adusă
- fotografie titlu de călătorie: la ghișeu / adusă
- document furat: traducere cerută / nu
- tip traducere: autorizată / legalizată
- transcriere: ce acte suplimentare cer pentru părinți
- transcriere: poștă da/nu
- transcriere: termen orientativ
- orice excepție locală importantă

Dacă specul vine în formatul de mai sus, îl putem transforma rapid în aceeași arhitectură folosită acum pe Germania.

## 8. Italia: bucket-uri confirmate în implementarea actuală

În produs, Italia este deja modelată după aceeași arhitectură și folosește aceste reguli confirmate:

- `passport.photo_capture`
  fotografia pentru pașaport se face biometric la ghișeu în toată Italia
- `passport.lost_or_stolen.translation_rule`
  pentru pașaport furat se cere, de regulă, traducere autorizată în română a dovezii de la poliție
- `passport.pickup_rule`
  Roma separă ridicarea pentru CRDS față de pașaportul cu domiciliu în România
- `passport.postal_pickup_rule`
  disponibilitatea prin poștă diferă pe consulat și se citește din cardul local
- `passport.minor_processing_time_rule`
  Bari și Trieste merg conservator pe termen de 2–3 luni pentru minori CRDS
- `travel_doc.photo_rule`
  regula fotografiei diferă pentru minori și este personalizată pe consulat
- `travel_doc.stolen_doc_translation_rule`
  în Italia, pentru titlul de călătorie după furt nu cerem traducere
- `travel_doc.same_day_release_rule`
  Milano și Roma pot merge pe urgență foarte rapid; Torino rămâne tratat conservator cu programare
- `travel_doc.booking_requirement_rule`
  Bologna nu cere obligatoriu programare pe toate fluxurile uzuale, Catania nu promite walk-in
- `notarial.rnnepr_payment_rule`
  taxa RNNEPR merge, de regulă, prin virament bancar în avans; Trieste poate cere și verificarea registrului
- `birth_transcription.parent_birth_cert_rule`
  cerințele pentru actele părinților sunt prezentate conservator și se personalizează per consulat
- `birth_transcription.special_name_rule`
  excepțiile de nume compus / apare și numele tatălui în acte rămân bucket separat
- `birth_transcription.postal_delivery_rule`
  disponibilitatea prin poștă diferă pe consulat
- `birth_transcription.same_day_next_step_rule`
  Milano are semnal explicit pentru continuarea cu pașaportul după transcriere

## 9. Spec minim pentru următoarea țară

Când deschidem o țară nouă, avem nevoie de două artefacte clare:

1. `content/consulates/<country>.ts`
   un fișier normalizat cu consulatele și câmpurile comune de mai sus
2. un spec editorial pe țară
   exact ca obiectele exportate din `src/lib/guides/consulateRules.ts`

Formatul recomandat pentru specul editorial este:

- `countryCode`
- `consulates`
- `commonFields`
- `procedureRuleBuckets`
- `countryNotes`
- `highlightedLocalExceptions`

În implementarea actuală, aceste obiecte există deja pentru:

- `guideConsulateSpecDe`
- `guideConsulateSpecIt`

Astfel, pentru următoarea țară putem copia același format și completa doar regulile locale, fără să schimbăm arhitectura ghidurilor.
