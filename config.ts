type ConfigType = {
    EMAIL_USER: string,
    EMAIL_PASS: string
}


export const config: ConfigType = {
    EMAIL_USER: process.env.NEXT_PUBLIC_EMAIL_USER || '',
    EMAIL_PASS: process.env.NEXT_PUBLIC_EMAIL_PASS || ''
}
