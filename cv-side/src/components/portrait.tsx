import Image from 'next/image'

export default function Portrait(){
    return (
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="/portrait.jpg"
            width={400}
            height={400}
            style={{ objectFit: 'cover' }}
            alt="Picture of Nicolai"
          />
        </div>
      )
}