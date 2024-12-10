import Image from 'next/image'

export default function Portrait(){
    return (
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/portrait.jpg"
            width={500}
            height={500}
            style={{ objectFit: 'cover' }}
            alt="Picture of Nicolai"
          />
        </div>
      )
}