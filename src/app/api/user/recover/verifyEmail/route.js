import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import { SendEmail } from "@/utility/EmailHelper";

export async function GET(req,res){
    try {
        const {searchParams}=new URL(req.url);
        const email= searchParams.get('email');

        const prisma=new PrismaClient();

        const count=await prisma.users.count({where:{email:email}});

        if(count===1){
            const code=Math.floor(100000+Math.random()*900000); //100000 theke 900000 ar modhe akta otp code generate hobe but not 900000 and 100000
            const EmailText=`Your OTP Code is=${code}`;
            const EmailSubject="7news Verification Code";

            await SendEmail(email,EmailText,EmailSubject);

            const result= await prisma.users.update({
                where:{email:email},
                data:{otp:code.toString()}
            })
            return  NextResponse.json({status:"success",data:result})
        }

        else{
            return  NextResponse.json({status:"fail",data:"No user found"})
        }
    }catch (e) {
        return  NextResponse.json({status:"fail",data:e})
    }
}