const localJSON = {
    getItem: (itemKey)=>{
        try{
            return JSON.parse( localStorage.getItem(itemKey));
        }catch(err){
            console.error(err);
            return null
        }
    },
    setItem: (itemKey,item)=> localStorage.setItem(itemKey,JSON.stringify(item))
}

export default localJSON;