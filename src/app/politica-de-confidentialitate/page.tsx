import type { Metadata } from 'next'
import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'

export const metadata: Metadata = {
  title: 'Politica de confidențialitate',
  description:
    'Află ce date personale colectează ActeRO, în ce scopuri le folosim, cât timp le păstrăm și ce drepturi ai conform GDPR.',
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <div className="space-y-4 text-base leading-relaxed text-gray-700">
        {children}
      </div>
    </section>
  )
}

export default function PoliticaPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <div className="mx-auto max-w-2xl px-6 py-12 space-y-12">
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Ultima actualizare
          </p>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Politica de confidențialitate
          </h1>
          <p className="text-lg leading-relaxed text-gray-600">
            La ActeRO tratăm confidențialitatea cu seriozitate. În această pagină
            explicăm ce date colectăm, de ce le colectăm, cu cine le putem partaja
            și ce drepturi ai în legătură cu datele tale personale.
          </p>
          <p className="text-sm text-gray-500">
            Dacă ai întrebări despre această politică, ne poți scrie la{' '}
            <a href="mailto:contact@actero.ro" className="underline underline-offset-2">
              contact@actero.ro
            </a>
            .
          </p>
        </header>

        <Section title="1. Cine suntem">
          <p>
            Site-ul <strong className="text-gray-900">actero.ro</strong> și serviciile
            asociate sunt operate sub brandul <strong className="text-gray-900">ActeRO</strong>.
            În sensul legislației privind protecția datelor, ActeRO acționează ca
            operator pentru datele personale pe care le colectează direct de la utilizatori
            prin formulare, sesiuni individuale și interacțiuni pe site.
          </p>
          <p>
            Date de contact pentru întrebări privind protecția datelor:
            <br />
            Email: <a href="mailto:contact@actero.ro" className="underline underline-offset-2">contact@actero.ro</a>
          </p>
        </Section>

        <Section title="2. Ce date colectăm">
          <p>În funcție de modul în care folosești site-ul, putem colecta următoarele categorii de date:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>date de contact, cum ar fi nume, prenume, email sau număr de telefon;</li>
            <li>date introduse în formularele de contact, ajutor sau waitlist;</li>
            <li>răspunsurile din wizard și informațiile despre situația ta administrativă, în măsura în care le introduci tu;</li>
            <li>identificatori tehnici ai sesiunii, inclusiv `sessionId`, token-uri de acces și starea informațiilor deblocate;</li>
            <li>date despre utilizarea site-ului, inclusiv pagini vizitate, evenimente și interacțiuni, prin instrumente de analiză precum Google Analytics;</li>
            <li>date legate de plată și acces, transmise de furnizorii noștri de servicii de plată, fără a stoca la noi date complete de card.</li>
          </ul>
        </Section>

        <Section title="3. Cum colectăm datele">
          <ul className="list-disc pl-6 space-y-2">
            <li>direct de la tine, când completezi wizardul, formularele de contact, ajutor sau waitlist;</li>
            <li>automat, prin cookie-uri și tehnologii similare, atunci când navighezi pe site;</li>
            <li>de la furnizori terți implicați în furnizarea serviciului, de exemplu platforma de plată sau serviciile de analytics.</li>
          </ul>
        </Section>

        <Section title="4. În ce scopuri folosim datele tale">
          <ul className="list-disc pl-6 space-y-2">
            <li>pentru a pregăti informațiile potrivite pentru situația ta, pe baza răspunsurilor tale;</li>
            <li>pentru a crea și administra sesiuni de utilizator și accesul la informațiile deblocate;</li>
            <li>pentru a răspunde la solicitările trimise prin formularul de ajutor sau prin pagina de contact;</li>
            <li>pentru a administra lista de așteptare pentru țări sau servicii încă indisponibile;</li>
            <li>pentru a trimite emailuri tranzacționale, de exemplu confirmări, linkuri de acces sau răspunsuri de suport;</li>
            <li>pentru a înțelege cum este folosit site-ul și pentru a-l îmbunătăți, inclusiv prin Google Analytics;</li>
            <li>pentru securitate, prevenirea abuzurilor și apărarea drepturilor noastre legitime.</li>
          </ul>
        </Section>

        <Section title="5. Temeiul legal al prelucrării">
          <p>Prelucrăm datele tale în baza unuia sau mai multor temeiuri legale prevăzute de GDPR:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-gray-900">executarea unui contract</strong> sau efectuarea demersurilor precontractuale,
              atunci când creezi o sesiune, cumperi acces la informațiile noastre sau soliciți acces la serviciile noastre;
            </li>
            <li>
              <strong className="text-gray-900">consimțământul</strong>, atunci când te înscrii în waitlist
              sau când activăm cookie-uri și analytics care necesită consimțământ;
            </li>
            <li>
              <strong className="text-gray-900">interesul legitim</strong>, pentru funcționarea, securitatea,
              îmbunătățirea site-ului și gestionarea solicitărilor de suport;
            </li>
            <li>
              <strong className="text-gray-900">obligații legale</strong>, dacă avem obligația de a păstra
              anumite informații sau de a răspunde unor solicitări legale.
            </li>
          </ul>
        </Section>

        <Section title="6. Cookie-uri și Google Analytics">
          <p>
            ActeRO folosește cookie-uri și tehnologii similare pentru funcționarea site-ului și,
            pe măsură ce implementăm Google Analytics, pentru a măsura traficul și a înțelege
            cum folosesc utilizatorii paginile noastre.
          </p>
          <p>
            În cazul Google Analytics, putem colecta informații precum paginile vizitate,
            durata sesiunii, tipul dispozitivului, browserul, sursa traficului și date
            aproximative despre locație. Conform documentației Google pentru Analytics 4,
            adresele IP ale utilizatorilor din UE nu sunt logate sau stocate ca atare,
            iar pentru traficul din UE prelucrarea inițială are loc prin infrastructură din UE.
          </p>
          <p>
            Dacă implementarea Google Analytics se face în mod care necesită consimțământ conform
            legislației aplicabile, analytics-ul va fi activat doar după exprimarea consimțământului
            tău prin mecanismul de cookie banner sau de gestionare a consimțământului.
          </p>
          <p>
            Poți bloca sau șterge cookie-urile din setările browserului. Totuși, anumite funcționalități
            ale site-ului pot să nu mai funcționeze corect dacă dezactivezi cookie-urile esențiale.
          </p>
        </Section>

        <Section title="7. Cu cine partajăm datele">
          <p>Nu vindem datele tale personale. Le putem partaja doar în măsura necesară cu furnizori de servicii care ne ajută să operăm platforma:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-gray-900">Vercel</strong> — pentru hosting și infrastructura aplicației;</li>
            <li><strong className="text-gray-900">Supabase</strong> — pentru stocarea sesiunilor, cererilor și datelor operaționale;</li>
            <li><strong className="text-gray-900">Resend</strong> — pentru trimiterea emailurilor tranzacționale;</li>
            <li><strong className="text-gray-900">Stripe</strong> și alți furnizori de plată — pentru procesarea plăților și confirmarea accesului;</li>
            <li><strong className="text-gray-900">Google</strong> — dacă folosim Google Analytics pentru măsurarea traficului și performanței site-ului.</li>
          </ul>
          <p>
            Acești furnizori folosesc sau gestionează datele în baza instrucțiunilor noastre sau în baza
            propriilor termeni și politici, în funcție de rolul lor juridic în relația cu datele.
          </p>
        </Section>

        <Section title="8. Unde pot fi gestionate datele">
          <p>
            Unii dintre furnizorii noștri pot gestiona date în afara Spațiului Economic European,
            inclusiv în Statele Unite. Atunci când apare o astfel de situație, încercăm să ne
            bazăm pe mecanisme legale adecvate, cum ar fi clauzele contractuale standard sau alte
            garanții recunoscute de legislația aplicabilă.
          </p>
        </Section>

        <Section title="9. Cât timp păstrăm datele">
          <p>Păstrăm datele doar atât cât este necesar pentru scopurile pentru care au fost colectate.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>datele din sesiuni și informațiile deblocate pot fi păstrate cât timp accesul este activ și pentru o perioadă rezonabilă după aceea;</li>
            <li>cererile trimise prin formularul de ajutor sau contact pot fi păstrate pentru a răspunde, a urmări istoricul suportului și a îmbunătăți serviciul;</li>
            <li>datele din waitlist pot fi păstrate până la lansarea serviciului relevant sau până când ceri ștergerea lor;</li>
            <li>datele colectate prin analytics sunt păstrate conform setărilor tehnice și politicilor furnizorului respectiv.</li>
          </ul>
        </Section>

        <Section title="10. Drepturile tale">
          <p>Conform GDPR, ai dreptul:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>să ceri acces la datele tale personale;</li>
            <li>să ceri rectificarea datelor inexacte;</li>
            <li>să ceri ștergerea datelor, în anumite condiții;</li>
            <li>să ceri limitarea modului în care folosim datele tale, în anumite situații;</li>
            <li>să te opui anumitor utilizări bazate pe interes legitim;</li>
            <li>să primești datele într-un format portabil, acolo unde este aplicabil;</li>
            <li>să îți retragi consimțământul, atunci când folosirea datelor se bazează pe consimțământ;</li>
            <li>să te adresezi autorității competente de supraveghere dacă consideri că drepturile tale nu au fost respectate.</li>
          </ul>
          <p>
            Pentru exercitarea acestor drepturi, ne poți scrie la{' '}
            <a href="mailto:contact@actero.ro" className="underline underline-offset-2">
              contact@actero.ro
            </a>
            .
          </p>
        </Section>

        <Section title="11. Datele minorilor">
          <p>
            Site-ul nu este destinat în mod direct minorilor sub 16 ani. Dacă aflăm că am colectat
            date personale ale unui minor fără un temei legal adecvat, vom lua măsuri rezonabile
            pentru a șterge acele date.
          </p>
        </Section>

        <Section title="12. Securitatea datelor">
          <p>
            Luăm măsuri tehnice și organizatorice rezonabile pentru a proteja datele personale
            împotriva accesului neautorizat, pierderii, distrugerii sau partajării nepermise.
            Totuși, niciun sistem online nu poate garanta securitate absolută.
          </p>
        </Section>

        <Section title="13. Modificări ale acestei politici">
          <p>
            Putem actualiza periodic această politică pentru a reflecta schimbări legislative,
            tehnice sau operaționale. Versiunea actuală va fi publicată pe această pagină,
            împreună cu data ultimei actualizări.
          </p>
        </Section>
      </div>

      <SiteFooter />
    </main>
  )
}
