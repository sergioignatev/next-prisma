import Image from 'next/image'
import { PrismaServer } from './api/prisma'

export default async function Home() {
 let w=await PrismaServer()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
<h1>TEST</h1>

<div>{w.props.initialContacts.map(m=>
<div key={m.id}>
<h1 className=' text-red-400 text-[88px]'>{m.firstName}</h1>
<p>{m.lastName}</p>
<img className='w-[59px] h-[50px] rounded-full' src={m.avatar} alt="" />
</div>
  
  )}</div>
    </main>
  )
}
