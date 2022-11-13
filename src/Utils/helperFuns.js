const setLocalData = (key,data)=>{
    localStorage.setItem(key,JSON.stringify(data))

}

const getLocalData = (key)=>{
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    return data;
}

export {setLocalData,getLocalData}