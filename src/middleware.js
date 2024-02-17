import {NextResponse} from "next/server";
import { VerifyToken } from "./utility/TokenHelper"; 
export async function middleware(req,res){
    try {
        const token=req.cookies.get('token');
        const payload=await VerifyToken(token['value'])
        const requestHeader=new Headers(req.headers);
        requestHeader.set('email',payload['email'])
        requestHeader.set('id',payload['id'])
        return NextResponse.next({request:{headers:requestHeader}})

    }catch (e) {
        const requestHeader=new Headers(req.headers);
        requestHeader.set('email','0') // 0/null
        requestHeader.set('id','0') // 0/null
        return NextResponse.next({request:{headers:requestHeader}})
    }

}