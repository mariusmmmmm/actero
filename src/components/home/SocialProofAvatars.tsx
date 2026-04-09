'use client'

import Image from 'next/image'

const avatarPaths = [
  '/avatars/avatar-1.jpeg',
  '/avatars/avatar-2.jpeg',
  '/avatars/avatar-3.jpeg',
  '/avatars/avatar-4.jpeg',
  '/avatars/avatar-5.jpeg',
  '/avatars/avatar-6.jpeg',
]

const visibleAvatars = avatarPaths.slice(0, 4)

export default function SocialProofAvatars() {
  return (
    <div className="flex -space-x-2">
      {visibleAvatars.map((src, index) => (
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
