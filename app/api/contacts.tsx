
import { PrismaServer } from './prisma'


export async function Contacts() {
 let w=await PrismaServer()
 
  return (
    <>
<h1>TEST</h1>

<div>{w.map(m=>
<div key={m.id}>
<h1 className=' text-red-400 text-[88px]'>{m.firstName} {m.lastName}</h1>
<p>{m.lastName}</p>
<img className='w-[59px]  rounded-full' src={m.avatar} alt="" />
</div>
  
  )}</div>
    </>
  )
}
