import { IUser } from '@/app/db';
import { execQuery } from '@/app/db/db';

export async function POST(request: Request) {

    const res: IUser = await request.json();

    if(res.Id == 0){
        //Insert
        try{
            await execQuery("INSERT INTO `user` (UserName, Email, Password) VALUES ('"+res.Username+"','"+res.Email+"','"+res.Password+"')");
        }
        catch(err){
            return Response.json({ status:'error', message: err.message, res: res })
        }
    }
    else{
        //Update
        try{
            if(res.Password){
                await execQuery("UPDATE `user` SET Username = '"+res.Username+"', Email = '"+res.Email+"', Password='"+res.Password+"' WHERE Id = "+res.Id);
            }
            else{
                const results = await execQuery("UPDATE `user` SET `Username` = '"+res.Username+"', `Email` = '"+res.Email+"' WHERE `Id` = "+res.Id);
            }
        }
        catch(err){
            return Response.json({ status:'error', message: err.message, res: res })
        }
    }

    return Response.json({ status:'ok', message: '/api/user/create', res: res })
}