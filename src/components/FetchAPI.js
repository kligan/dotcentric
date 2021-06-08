
async function FetchAPI (url){
    let response = await fetch(url);
    // response = await response.json();
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Something went wrong');
    }
    return response;
}

export default FetchAPI;