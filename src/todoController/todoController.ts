import { PrismaClient } from '@prisma/client'; 
import { Request, Response } from 'express';
import verifyRegister from './../utils/verifyRegister';
const prisma = new PrismaClient();

class todoController
{
  
  async create(request:Request,response:Response) {
    const {name} = request.body;
    const todo = await  prisma.todo.create({
      data:{
        name,
      }});
    return response.status(201).json(todo);
  }

  async all(request:Request,response:Response){
    const todos = await prisma.todo.findMany();
    return response.status(200).json(todos);
  }

  async alter(request:Request,response:Response){
    const {name,id, status} = request.body;
  
    const todoVerify = await verifyRegister({id,response});

    if(todoVerify) return;

    console.log(verifyRegister({id,response}));
  
    const todo = await prisma.todo.update({
      where: {
        id,
      },
      data: {
        name,
        status,
      }
    });
  
    return response.status(201).json(todo);
  }

  async delete(request:Request,response:Response)
  {
    const { id } = request.params;
    const intId = parseInt(id);
  
    const todoVerify = await verifyRegister({id:intId,response});
    if(todoVerify) return;

    await prisma.todo.delete({where:{ id:intId}});
  
    return response.status(200).send('todo deleted');
  }
}

export default new todoController();