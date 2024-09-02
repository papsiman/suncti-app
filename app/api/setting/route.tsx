import { execQuery } from '@/app/db/db';

export async function POST() {
    try{
        // execute will internally call prepare and query
        const results = await execQuery(
          "SELECT * FROM `setting`"
        );
        return Response.json({ status:'ok', message: '/api/setting', data: results })
      }
      catch(error){
        return Response.json({ status:'error', message: error.message, data: '' })
      }
}