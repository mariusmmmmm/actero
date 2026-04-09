import type { Metadata } from 'next'
import SiteFooter from '@/components/layout/SiteFooter'
import SiteHeader from '@/components/layout/SiteHeader'

export const metadata: Metadata = {
  title: 'Termeni & Conditii',
  description:
    'Termenii și condițiile ActeRO explică modul în care poți folosi site-ul, cum funcționează accesul la conținutul digital, plățile, limitările și drepturile tale ca utilizator.',
  alternates: {
    canonical: 'https://actero.ro/termeni-si-conditii',
  },
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

export default function TermeniPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <div className="mx-auto max-w-2xl px-6 py-12 space-y-12">
        <header className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Ultima actualizare
          </p>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Termeni & Condiții
          </h1>
          <p className="text-lg leading-relaxed text-gray-600">
            Acești termeni explică modul în care poți folosi ActeRO, ce oferim,
            ce nu promitem, cum funcționează accesul la conținutul digital și ce
            reguli se aplică atunci când folosești site-ul sau cumperi acces la
            informațiile noastre.
          </p>
          <p className="text-sm text-gray-500">
            Dacă ai întrebări despre acești termeni, ne poți scrie la{' '}
            <a href="mailto:contact@actero.ro" className="underline underline-offset-2">
              contact@actero.ro
            </a>
            .
          </p>
        </header>

        <Section title="1. Cine suntem">
          <p>
            Site-ul <strong className="text-gray-900">actero.ro</strong> și
            serviciile asociate sunt operate sub brandul{' '}
            <strong className="text-gray-900">ActeRO</strong>.
          </p>
          <p>
            ActeRO oferă informații digitale, instrumente de orientare și
            conținut practic pentru românii din Germania care vor să înțeleagă
            mai clar pașii administrativi relevanți pentru situația lor.
          </p>
        </Section>

        <Section title="2. Acceptarea termenilor">
          <p>
            Prin accesarea sau folosirea site-ului, confirmi că ai citit și ai
            înțeles acești termeni și că ești de acord cu ei.
          </p>
          <p>
            Dacă nu ești de acord cu acești termeni, te rugăm să nu folosești
            site-ul sau serviciile ActeRO.
          </p>
        </Section>

        <Section title="3. Ce oferă ActeRO">
          <p>
            ActeRO este un serviciu digital informativ. Prin site poți accesa,
            în funcție de fluxul parcurs:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>informații introductive gratuite și pași de orientare;</li>
            <li>conținut digital deblocat contra cost, acolo unde este disponibil;</li>
            <li>formulare de contact, ajutor sau înscriere pe listă de așteptare;</li>
            <li>
              informații practice despre consulate, documente, pași și situații
              frecvente legate de actele românești.
            </li>
          </ul>
          <p>
            Conținutul este conceput pentru orientare practică și claritate, nu
            ca substitut pentru consultanță juridică individuală, reprezentare
            legală sau asistență oficială din partea autorităților.
          </p>
        </Section>

        <Section title="4. Ce nu promitem">
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Nu garantăm emiterea unui document, aprobarea unei cereri sau
              obținerea unei programări.
            </li>
            <li>
              Nu garantăm că instituțiile publice, consulatele sau alte entități
              își păstrează neschimbate procedurile, programul sau cerințele.
            </li>
            <li>
              Nu oferim consultanță juridică personalizată și nu acționăm în
              numele utilizatorului în fața autorităților.
            </li>
          </ul>
          <p>
            Deși încercăm să menținem informațiile cât mai actuale și utile,
            utilizatorul rămâne responsabil să verifice dacă există cerințe noi
            sau situații speciale aplicabile cazului său.
          </p>
        </Section>

        <Section title="5. Cum poate fi folosit site-ul">
          <p>
            Poți folosi ActeRO doar în scopuri legale și personale. Nu ai voie:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>să folosești site-ul pentru activități frauduloase sau abuzive;</li>
            <li>
              să copiezi, republici, revinzi sau distribui comercial conținutul
              nostru fără acordul nostru scris;
            </li>
            <li>
              să încerci să ocolești mecanismele tehnice de acces, sesiune sau
              plată;
            </li>
            <li>
              să folosești roboți, scraping sau alte metode automate pentru a
              extrage conținut în masă fără acord.
            </li>
          </ul>
        </Section>

        <Section title="6. Acces gratuit și conținut deblocat">
          <p>
            Unele părți ale site-ului sunt accesibile gratuit. Alte părți pot fi
            deblocate contra cost, printr-o plată unică sau alt mecanism afișat
            pe site la momentul respectiv.
          </p>
          <p>
            După confirmarea plății, accesul la conținutul deblocat se oferă în
            format digital, prin sesiune, link de acces, email sau alt mecanism
            tehnic afișat în produs.
          </p>
          <p>
            Accesul cumpărat este destinat utilizatorului care a efectuat plata
            și nu poate fi revândut, partajat în scop comercial sau publicat.
          </p>
        </Section>

        <Section title="7. Prețuri și plăți">
          <p>
            Prețurile sunt afișate pe site în euro și includ, dacă este cazul,
            taxele aplicabile conform informațiilor disponibile la momentul
            cumpărării.
          </p>
          <p>
            Plățile sunt procesate prin furnizori terți. Nu stocăm la noi date
            complete de card. Furnizorii de plată pot aplica propriii termeni și
            propriile politici.
          </p>
          <p>
            Ne rezervăm dreptul de a modifica prețurile, structura ofertei sau
            conținutul disponibil, însă astfel de modificări nu afectează în mod
            retroactiv o achiziție deja confirmată, cu excepția cazurilor în care
            legea permite altfel.
          </p>
        </Section>

        <Section title="8. Dreptul de retragere și rambursări">
          <p>
            Dacă achiziționezi conținut digital livrat online, este posibil ca,
            în măsura permisă de lege, dreptul de retragere de 14 zile să nu mai
            fie aplicabil după începerea furnizării conținutului, dacă ți-a fost
            prezentată această situație înainte de cumpărare și ai fost de acord
            cu livrarea imediată.
          </p>
          <p>
            Dacă apare o problemă tehnică reală care împiedică livrarea accesului
            cumpărat sau dacă ai fost taxat fără să primești accesul promis, ne
            poți scrie la{' '}
            <a href="mailto:contact@actero.ro" className="underline underline-offset-2">
              contact@actero.ro
            </a>{' '}
            și vom analiza situația într-un termen rezonabil.
          </p>
          <p>
            Orice solicitare de rambursare este analizată în funcție de natura
            produsului digital, stadiul livrării, circumstanțele tehnice și
            regulile legale aplicabile.
          </p>
        </Section>

        <Section title="9. Exactitatea informațiilor">
          <p>
            Depunem eforturi rezonabile pentru a publica informații clare și
            utile. Totuși, procedurile administrative se pot schimba, iar unele
            cerințe pot depinde de instituție, localitate, consulat sau situația
            concretă a utilizatorului.
          </p>
          <p>
            Din acest motiv, conținutul ActeRO trebuie înțeles ca instrument de
            orientare și organizare, nu ca garanție absolută privind rezultatul
            sau comportamentul unei autorități publice.
          </p>
        </Section>

        <Section title="10. Proprietate intelectuală">
          <p>
            Conținutul site-ului, inclusiv textele, structura, selecția
            informațiilor, designul, elementele vizuale, denumirea ActeRO și
            alte materiale proprii sunt protejate de legislația aplicabilă
            privind proprietatea intelectuală.
          </p>
          <p>
            Cu excepția utilizării personale permise de acești termeni, nu ai
            voie să reproduci, distribui, adaptezi sau folosești comercial
            conținutul fără acordul nostru prealabil scris.
          </p>
        </Section>

        <Section title="11. Servicii și linkuri terțe">
          <p>
            Site-ul poate include linkuri sau integrări cu servicii terțe, de
            exemplu furnizori de plată, email, analytics, hărți sau site-uri
            oficiale ale instituțiilor.
          </p>
          <p>
            Nu controlăm conținutul, politicile sau disponibilitatea acestor
            servicii terțe și nu suntem responsabili pentru modul în care ele
            funcționează. Utilizarea lor poate fi supusă termenilor și
            politicilor proprii.
          </p>
        </Section>

        <Section title="12. Disponibilitatea site-ului">
          <p>
            Încercăm să menținem site-ul disponibil și funcțional, dar nu putem
            garanta funcționare neîntreruptă, lipsa erorilor sau disponibilitate
            permanentă.
          </p>
          <p>
            Putem actualiza, modifica, suspenda sau retrage anumite funcții,
            pagini sau părți ale serviciului, în special pentru mentenanță,
            securitate, îmbunătățiri sau motive operaționale.
          </p>
        </Section>

        <Section title="13. Limitarea răspunderii">
          <p>
            În măsura permisă de lege, ActeRO nu răspunde pentru pierderi
            indirecte, pierderi de oportunitate, întârzieri administrative,
            refuzuri ale autorităților sau consecințe rezultate din faptul că o
            instituție a solicitat documente suplimentare, a schimbat procedura
            sau a interpretat diferit o situație individuală.
          </p>
          <p>
            Nimic din acești termeni nu limitează drepturi sau remedii care nu
            pot fi excluse prin legea aplicabilă consumatorilor.
          </p>
        </Section>

        <Section title="14. Confidențialitate și date personale">
          <p>
            Modul în care colectăm și folosim datele personale este explicat în{' '}
            <a
              href="/politica-de-confidentialitate"
              className="underline underline-offset-2"
            >
              Politica de confidențialitate
            </a>
            .
          </p>
        </Section>

        <Section title="15. Modificarea termenilor">
          <p>
            Putem actualiza acești termeni din când în când pentru a reflecta
            schimbări legale, tehnice, comerciale sau operaționale.
          </p>
          <p>
            Versiunea actuală va fi publicată pe această pagină, împreună cu
            data ultimei actualizări. Continuarea utilizării site-ului după
            publicarea noii versiuni poate însemna acceptarea termenilor
            actualizați.
          </p>
        </Section>

        <Section title="16. Lege aplicabilă și soluționarea disputelor">
          <p>
            Acești termeni sunt interpretați conform legii aplicabile raportului
            juridic dintre părți, fără a afecta protecția obligatorie oferită
            consumatorilor de normele care li se aplică.
          </p>
          <p>
            Dacă apare o problemă, te încurajăm să ne contactezi mai întâi
            direct, pentru a încerca o rezolvare amiabilă și rapidă.
          </p>
        </Section>

        <Section title="17. Contact">
          <p>
            Pentru întrebări despre site, plăți, acces sau acești termeni, ne
            poți scrie la{' '}
            <a href="mailto:contact@actero.ro" className="underline underline-offset-2">
              contact@actero.ro
            </a>
            .
          </p>
        </Section>
      </div>

      <SiteFooter />
    </main>
  )
}
