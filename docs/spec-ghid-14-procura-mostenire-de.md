# Ghid #14 — `procura-mostenire-de`
**Procură pentru moștenire / succesiune · Germania**

Spec consolidat din implementarea actuală din codul ActeRO.

## DIAGNOSTIC_SUMMARY

```json
{
  "guideId": "procura-mostenire-de",
  "title": "Procură pentru moștenire în România",
  "subtitle": "Ești în Germania și vrei să împuternicești pe cineva să te reprezinte în succesiune, fără să mergi personal în România.",
  "warnings": [
    "Conținutul procurii trebuie să se potrivească exact cu dosarul de succesiune și cu cerințele notarului din România. Dacă ai deja notar ales, cere-i înainte lista exactă de date.",
    "Lista documentelor-suport pentru succesiune poate varia în funcție de notar și de dosar. Dacă ți se cer certificatul de deces sau acte care dovedesc calitatea de moștenitor, pregătește-le înainte de programare."
  ],
  "estimatedWeeks": "1–2 săptămâni",
  "estimatedAppointments": 1,
  "guideTitle": "Ghid procură moștenire · Germania",
  "previewSteps": [
    { "id": 1, "label": "Documentele necesare", "locked": false },
    { "id": 2, "label": "Pregătește documentele", "locked": false },
    { "id": 3, "label": "Obține programarea", "locked": true },
    { "id": 4, "label": "Pregătire pentru ziua programării", "locked": true },
    { "id": 5, "label": "Ziua consulatului", "locked": true },
    { "id": 6, "label": "Trimite procura în România", "locked": true }
  ]
}
```

## GHID_FREE

```json
{
  "guideId": "procura-mostenire-de",
  "title": "Procură moștenire · Germania",
  "meta": {
    "free": "2 pași gratuiți",
    "total": "6 pași total"
  },
  "totalSteps": 6,
  "steps": [
    {
      "id": 1,
      "title": "Documentele necesare",
      "blocks": [
        {
          "type": "info",
          "text": "Actul tău de identitate românesc valabil — pașaport sau carte de identitate — original. ✅"
        },
        {
          "type": "info",
          "text": "Datele complete ale persoanei pe care o împuternicești în România (mandatarul): nume, prenume, CNP, serie și număr act de identitate, adresă. ✅"
        },
        {
          "type": "info",
          "text": "Datele notarului din România care instrumentează succesiunea. Ideal: nume, localitate, date de contact și ce trebuie să conțină procura."
        },
        {
          "type": "warning",
          "text": "Certificatul de deces al persoanei decedate. Nu există confirmare oficială că este cerut de consulat în toate cazurile, dar notarul din România îl va folosi aproape sigur în dosarul de succesiune."
        },
        {
          "type": "warning",
          "text": "Dacă ți se cer acte care dovedesc calitatea de moștenitor sau relația de rudenie, pregătește-le din timp. Lista poate varia în funcție de notar și de dosar."
        },
        {
          "type": "tip",
          "text": "Dacă ai deja modelul sau cerințele notarului din România, pornește de la ele. La procura de succesiune contează mai mult formularea exactă decât o listă generică."
        }
      ]
    },
    {
      "id": 2,
      "title": "Pregătește documentele",
      "blocks": [
        {
          "type": "info",
          "text": "Scanează actul de identitate valabil și păstrează originalul pregătit pentru consulat. ✅"
        },
        {
          "type": "action",
          "text": "Cere notarului din România să-ți spună exact ce trebuie să conțină procura pentru succesiune: cine te reprezintă, la ce birou notarial și pentru ce formalități exacte."
        },
        {
          "type": "info",
          "text": "Pregătește datele complete ale mandatarului din România: nume, CNP, serie și număr CI, adresă. ✅ Fără ele, textul procurii poate ieși greșit."
        },
        {
          "type": "warning",
          "text": "Ține la îndemână certificatul de deces și actele care dovedesc relația de rudenie. Nu există confirmare oficială că sunt cerute la consulat în toate cazurile, dar notarul din România le poate cere pentru redactare sau verificare."
        },
        {
          "type": "tip",
          "text": "Dacă nu ai încă notar ales, caută unul înainte de programare. Pentru succesiune contează să ai un birou notarial care știe deja dosarul sau îl poate deschide în România."
        }
      ]
    }
  ],
  "lockedSteps": [
    { "id": 3, "title": "Obține programarea" },
    { "id": 4, "title": "Pregătire pentru ziua programării" },
    { "id": 5, "title": "Semnează procura la consulat" },
    { "id": 6, "title": "Trimite procura în România" }
  ],
  "paywallTeaser": [
    "Cum obții programarea pe econsulat.ro pentru acte notariale",
    "Cum te pregătești pentru consulat fără să uiți un detaliu important",
    "Ce se întâmplă la ghișeu când semnezi procura de moștenire",
    "Cum trimiți procura autentificată în România, fără să pierzi timp",
    "Ce faci dacă nu ai încă notar ales în dosarul de succesiune"
  ]
}
```

## GHID_PAID

```json
{
  "guideId": "procura-mostenire-de",
  "title": "Procură moștenire · Germania",
  "steps": [
    {
      "id": 3,
      "title": "Obține programarea",
      "shortLabel": "Programare",
      "hasAuthorityCard": false,
      "blocks": [
        {
          "type": "action",
          "text": "Intră pe econsulat.ro → „Cerere nouă” → „Acte notariale” → serviciul pentru procuri. ✅"
        },
        {
          "type": "warning",
          "text": "Completează cererea cu datele tale și descrierea clară a scopului: reprezentare într-un dosar de moștenire / succesiune în România. Verifică să folosești formularea cerută de notar, nu una generică."
        },
        {
          "type": "info",
          "text": "Serviciul consular pentru procuri este gratuit. Dacă procura trebuie înscrisă în registrele naționale notariale din România, se adaugă tariful de publicitate notarială de 3 euro."
        },
        {
          "type": "tip",
          "text": "Procurile se autentifică de regulă pe loc, în aceeași zi, dacă te prezinți cu toate datele și documentele necesare."
        }
      ],
      "actionItem": {
        "label": "Deschide econsulat.ro",
        "href": "https://www.econsulat.ro/"
      }
    },
    {
      "id": 4,
      "title": "Pregătește-te pentru consulat",
      "shortLabel": "Consulat",
      "hasAuthorityCard": true,
      "blocks": [
        {
          "type": "info",
          "text": "Ai la tine actul de identitate valabil în original. Fără el, procura nu poate fi autentificată."
        },
        {
          "type": "info",
          "text": "Ai notate clar datele mandatarului și ale notarului din România. Cel mai sigur este să le ai și într-un email sau PDF trimis de notar."
        },
        {
          "type": "tip",
          "text": "Dacă notarul ți-a trimis modelul sau formularea dorită pentru procură, ia-l cu tine. Acest lucru reduce mult riscul ca procura să nu fie acceptată ulterior în dosarul de succesiune."
        },
        {
          "type": "warning",
          "text": "Dacă ți s-a cerut explicit certificatul de deces sau actele de rudenie, pune-le și pe ele în geantă."
        }
      ]
    },
    {
      "id": 5,
      "title": "Semnează procura la consulat",
      "shortLabel": "Semnare",
      "hasAuthorityCard": false,
      "blocks": [
        {
          "type": "action",
          "text": "Te prezinți personal la programare cu documentele și datele pregătite."
        },
        {
          "type": "info",
          "text": "Funcționarul consular redactează sau autentifică procura pe baza instrucțiunilor și a datelor furnizate. Verifică atent numele, CNP-urile, calitatea de moștenitor și scopul procurii înainte să semnezi."
        },
        {
          "type": "info",
          "text": "Serviciul se prestează, de regulă, pe loc în aceeași zi. Durata poate crește în zile aglomerate sau dacă lipsesc date importante."
        },
        {
          "type": "tip",
          "text": "Poți cere duplicate ale aceleiași procuri dacă ai nevoie de mai multe exemplare pentru notar sau pentru dosar."
        },
        {
          "type": "note",
          "text": "Fă imediat o fotografie procurii și salvează și o scanare PDF înainte să trimiți originalul în România."
        }
      ]
    },
    {
      "id": 6,
      "title": "Trimite procura în România",
      "shortLabel": "Trimitere",
      "hasAuthorityCard": false,
      "blocks": [
        {
          "type": "action",
          "text": "Trimite procura autentificată în original către notarul din România sau către persoana împuternicită, exact cum ți-a indicat notarul."
        },
        {
          "type": "warning",
          "text": "Folosește curier cu tracking și confirmare de livrare — nu trimite documentul prin poștă simplă."
        },
        {
          "type": "tip",
          "text": "Anunță notarul că documentul este pe drum și trimite-i și fotografia/scanarea, ca să confirme că textul este cel corect înainte de livrarea originalului."
        },
        {
          "type": "note",
          "text": "Păstrează numărul AWB și o copie digitală a procurii până se închide dosarul de succesiune."
        }
      ]
    }
  ]
}
```

## CHECKLIST

```json
{
  "guideId": "procura-mostenire-de",
  "sections": [
    {
      "id": "obligatorii",
      "title": "Documente obligatorii",
      "items": [
        {
          "id": "pm14_id",
          "name": "Act de identitate valabil",
          "detail": "Original · pașaport sau carte de identitate românească"
        },
        {
          "id": "pm14_mandatar",
          "name": "Datele complete ale mandatarului",
          "detail": "Nume, CNP, serie și număr CI, adresă"
        },
        {
          "id": "pm14_notar",
          "name": "Datele notarului din România",
          "detail": "Nume + localitate + date de contact + cerințele pentru procura de succesiune"
        }
      ]
    },
    {
      "id": "succesiune",
      "title": "Documente utile pentru dosarul de succesiune",
      "items": [
        {
          "id": "pm14_deces",
          "name": "Certificat de deces",
          "detail": "Util pentru notar; poate fi cerut în funcție de dosar"
        },
        {
          "id": "pm14_rudenie",
          "name": "Acte de rudenie / calitate de moștenitor",
          "detail": "Dacă notarul ți le cere explicit înainte de programare"
        }
      ]
    }
  ]
}
```

## TRACKER

```json
{
  "guideId": "procura-mostenire-de",
  "steps": [
    {
      "id": "documente",
      "title": "Documentele necesare",
      "shortLabel": "Documente",
      "todoNote": "Strânge actul de identitate, datele mandatarului și cerințele notarului"
    },
    {
      "id": "pregatire",
      "title": "Pregătește documentele",
      "shortLabel": "Pregătire",
      "todoNote": "Scanează actele și clarifică textul procurii cu notarul din România"
    },
    {
      "id": "programare",
      "title": "Obține programarea",
      "shortLabel": "Programare",
      "todoNote": "Cererea pentru procuri se face din econsulat.ro"
    },
    {
      "id": "consulat",
      "title": "Mergi la consulat",
      "shortLabel": "Consulat",
      "todoNote": "Te prezinți personal cu documentele în original"
    },
    {
      "id": "semnare",
      "title": "Semnează procura",
      "shortLabel": "Semnare",
      "todoNote": "Verifici cu atenție textul înainte să semnezi"
    },
    {
      "id": "trimitere",
      "title": "Trimite procura în România",
      "shortLabel": "Trimitere",
      "todoNote": "Trimite originalul către notar sau mandatar cu tracking"
    }
  ]
}
```

## META

```json
{
  "metaTitle": "procura pentru moștenire din Germania",
  "emailTitle": "Procură · Moștenire · Germania"
}
```

## OPEN ITEMS / NOTE EDITORIALE

Aceste observații sunt încă formulate prudent în spec, exact cum există și în implementare:

- Nu există confirmare oficială că certificatul de deces este cerut de consulat în toate cazurile.
- Nu există confirmare oficială că actele de rudenie / calitate de moștenitor sunt cerute de consulat în toate cazurile.
- Aceste documente rămân însă foarte probabile în fluxul notarului din România și sunt recomandate ca pregătire.

## SURSE FOLOSITE ÎN IMPLEMENTAREA ACTUALĂ

- `econsulat.ro` — serviciul pentru procuri și fluxul de programare
- `econsulat.ro/Procura/TaxeConsulareDescriere/401000001`
- `econsulat.ro/Procura/ModSolutionare/401000001`
- conținutul implementat în:
  - `src/app/diagnostic/page.tsx`
  - `src/lib/guides/freeContent.ts`
  - `src/app/ghid/[sessionId]/page.tsx`
  - `src/lib/guides/checklists.ts`
  - `src/lib/guides/steps.ts`
