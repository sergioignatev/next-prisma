import Image from 'next/image'
import { PrismaServer } from './api/prisma'
import { Contacts } from './api/contacts'

export default async function Home() {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<Contacts/>
    </main>
  )
}
