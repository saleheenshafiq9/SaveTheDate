export default function getToken(item){
    
    const token=JSON.parse(localStorage.getItem(item))
    return token

}