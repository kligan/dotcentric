
async function FetchAPI (url){
    let response = await fetch(url);
    response = await response.json();
    return response;
}

export default FetchAPI;