'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

type Testimonial = {
  quote: string
  name: string
  city: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      '„Am stat luni întregi cu stresul că nu mai pot rezolva nimic. Cu ActeRO am înțeles exact ce acte îmi trebuie și, pentru prima dată, am simțit că am control.”',
    name: 'Sorin B.',
    city: 'München · verificat',
    avatar: '/avatars/avatar-1.jpeg',
  },
  {
    quote:
      '„Cel mai greu era că nu știam dacă plec degeaba la consulat. Ghidul mi-a dat liniște și m-a ajutat să merg pregătită din prima.”',
    name: 'Andreea M.',
    city: 'Berlin · verificat',
    avatar: '/avatars/avatar-2.jpeg',
  },
  {
    quote:
      '„Aveam impresia că trebuie să întreb zece oameni ca să aflu procedura corectă. Aici am găsit pașii clari, într-un singur loc, și am scăpat de panică.”',
    name: 'Radu C.',
    city: 'Stuttgart · verificat',
    avatar: '/avatars/avatar-3.jpeg',
  },
  {
    quote:
      '„Pentru noi, partea valoroasă a fost că nu ne-am mai simțit singuri. Știam ce urmează, ce să pregătim și unde să mergem.”',
    name: 'Mihaela D.',
    city: 'Bonn · verificat',
    avatar: '/avatars/avatar-4.jpeg',
  },
]

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  const testimonial = testimonials[index]

  return (
    <div className="px-5 py-8">
      <div className="bg-gray-50 rounded-2xl p-5">
        <p className="text-sm text-gray-700 italic leading-relaxed mb-4 min-h-[96px]">
          {testimonial.quote}
        </p>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200 bg-gray-200">
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                sizes="32px"
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-700">{testimonial.name}</div>
              <div className="text-xs text-gray-400">{testimonial.city}</div>
            </div>
          </div>
          <div className="flex gap-1.5">
            {testimonials.map((_, dotIndex) => (
              <button
                key={dotIndex}
                onClick={() => setIndex(dotIndex)}
                className={`h-2 rounded-full transition-all ${
                  dotIndex === index ? 'bg-gray-900 w-5' : 'bg-gray-300 w-2'
                }`}
                aria-label={`Testimonial ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
