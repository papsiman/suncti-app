import { ISetting } from '@/app/db';
import { execQuery } from '@/app/db/db';

export async function POST(request: Request) {

    const req: ISetting = await request.json();

    //Update
    try{
        const results = await execQuery("UPDATE `setting` SET `Logo` = '"+ (req.Logo ?? "") + "', `Title` = '"+(req.Title ?? "")+"', `Des`='"+(req.Des ?? "")+"', `Tel`='"+(req.Tel ?? "")+"', `Fax`='"+(req.Fax ?? "")+"', `Email`='"+(req.Email ?? "")+"'  WHERE `Id` = "+req.Id);
        return Response.json({ status:'ok', message: '/api/setting/update', res: req })
    }
    catch(err){
        return Response.json({ status:'error', message: err.message, res: req })
    }

    
}