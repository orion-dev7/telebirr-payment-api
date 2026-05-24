import dotenv from "dotenv"
dotenv.config()

const config={
    port:process.env.Port||3000,
    baseUrl:process.env.BASE_URL as string,
    fabricAppId:process.env.FABRIC_APP_ID as string,
    appSecret:process.env.APP_SECRET as string,
    merchantAppId:process.env.MERCHANT_APP_ID as string,
    merchantCode:process.env.MERCHANT_CODE as string,
    privateKey:process.env.PRIVATE_KEY as string


}

export default config