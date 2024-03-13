
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const verifyRgx =(word:string , rgx:any)=>{

    const valid = rgx.test(word)

    return valid
}