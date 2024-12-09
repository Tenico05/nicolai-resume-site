import Image from 'next/image'
import { Box } from 'lucide-react'

export default function Portrait(){
    return (
        <Image
                src="/portrait.jpg"
                width={500}
                height={500}
                alt="Picture of Nicolai"
        />
    )
}