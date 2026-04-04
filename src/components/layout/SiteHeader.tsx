import Image from 'next/image'
import Link from 'next/link'

export default function SiteHeader() {
  return (
    <div className="border-b border-gray-100 bg-white">
      <div className="mx-auto grid max-w-md grid-cols-[1fr_auto_1fr] items-center px-4 py-3 sm:max-w-3xl sm:px-6 sm:py-[14px]">
        <div />
        <div className="flex items-center gap-3 justify-self-center sm:gap-5">

          {/* Logo */}
          <Link href="/" aria-label="ActeRO — pagina principală" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="ActeRO"
              height={46}
              width={138}
              priority
              className="h-9 w-auto sm:h-[46px]"
            />
          </Link>

          {/* Separator */}
          <div
            className="flex-shrink-0"
            style={{
              width: '1px',
              height: '18px',
              background: '#c8c8c8',
              opacity: 0.45,
            }}
          />

          {/* Slogan */}
          <div className="flex flex-col gap-1 sm:gap-[6px]">
            <div className="flex items-center gap-1.5 sm:gap-[7px]">
              <div className="h-1 rounded-[2px] bg-[#1a3590] w-10 sm:h-[5px] sm:w-16 sm:rounded-[2.5px]" />
              <div className="h-1 rounded-[2px] bg-[#f0c020] w-6 sm:h-[5px] sm:w-10 sm:rounded-[2.5px]" />
              <div className="h-1 rounded-[2px] bg-[#c8102e] w-4 sm:h-[5px] sm:w-7 sm:rounded-[2.5px]" />
            </div>
            <span
              className="hidden text-[11px] font-medium uppercase leading-tight tracking-[0.45em] text-[#444444] sm:block"
            >
              Fără drumuri degeaba
            </span>
          </div>
        </div>
        <div className="justify-self-end">
          <Link
            href="/despre"
            className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
          >
            Despre
          </Link>
        </div>
      </div>
    </div>
  )
}
