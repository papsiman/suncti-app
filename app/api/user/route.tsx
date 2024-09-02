import { IUser } from '@/app/db';
import { execQuery } from '@/app/db/db';

export async function POST(request: Request) {

    const res: IUser = await request.json();

    if(res.Username){

      try{
        // execute will internally call prepare and query
        const results = await execQuery(
          "SELECT * FROM `user` WHERE `Username` = `"+res.Username+"` AND `Password` = `"+res.Password+"`"
        );
        return Response.json({ status:'ok', message: '/api/user', data: results })
      }
      catch(error){
        return Response.json({ status:'error', message: '/api/user', data: res })
      }

    }
    else{
      try{
        // execute will internally call prepare and query
        const results = await execQuery(
          "SELECT * FROM `user` ORDER BY Username"
        );
        return Response.json({ status:'ok', message: '/api/user', data: results })
      }
      catch(error){
        return Response.json({ status:'error', message: '/api/user', data: res })
      }
    }
    
}