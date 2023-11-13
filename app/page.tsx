import Image from 'next/image'
import { PrismaServer } from './api/prisma'

export default async function Home() {
 let w=await PrismaServer()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<h1>TEST</h1>

<div>{w.props.initialContacts.map(m=><h2 key={m.id}>{m.firstName}</h2>)}</div>
    </main>
  )
}
