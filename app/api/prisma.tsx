import { PrismaClient } from '@prisma/client'
let prisma=new PrismaClient()
export async function PrismaServer() {
    const contacts =await prisma.contact.findMany()
    return {
        props: {
          initialContacts: contacts
        }
      };
    
}