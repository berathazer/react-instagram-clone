import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import Cookies from "js-cookie"

export function middleware(request) {
    const {cookies} = request
    const verify = Cookies.get("isLogin");
    const url = request.url
    console.log(url,verify,cookies);

    
   /*  if(!verify && url.includes("/accounts")){
        return NextResponse.redirect("http://localhost:3000/");
    }
 */
    
}
