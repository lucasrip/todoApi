import { PrismaClient } from '@prisma/client';
import { Response } from 'express';

interface VerifyRegister
{
  id: number;
  response:Response
}

async function verifyRegister({id,response}:VerifyRegister)
{
  const prisma = new PrismaClient();

  if(!id)
  {
    return response.status(400).json('id is necessary');
  }
  
  const todoAlreadyExist = await prisma.todo.findUnique({where: { id}});

  if(!todoAlreadyExist)
  {
    return response.status(404).json('todo not exist');
  }

  return false;

}

export default verifyRegister;