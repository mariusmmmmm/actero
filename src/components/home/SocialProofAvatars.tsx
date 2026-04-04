'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const avatarPaths = [
  '/avatars/avatar-1.jpeg',
  '/avatars/avatar-2.jpeg',
  '/avatars/avatar-3.jpeg',
  '/avatars/avatar-4.jpeg',
  '/avatars/avatar-5.jpeg',
  '/avatars/avatar-6.jpeg',
]

function pickRandomAvatars(count: number) {
  const shuffled = [...avatarPaths].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export default function SocialProofAvatars() {
  const [avatars, setAvatars] = useState(avatarPaths.slice(0, 4))

  useEffect(() => {
    setAvatars(pickRandomAvatars(4))
  }, [])

  return (
    <div className="flex -space-x-2">
      {avatars.map((src, index) => (
        <div
          key={`${src}-${index}`}
          className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-gray-800 bg-gray-600"
        >
          <Image
            src={src}
            alt="Utilizator ActeRO"
            fill
            sizes="32px"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}
