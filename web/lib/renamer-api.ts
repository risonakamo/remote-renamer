const _baseuri:string=window.location.origin;

/** search rename items */
export async function searchRenameItems(query:string,simplify:boolean):Promise<RenameItem[]>
{
    return await (await fetch(`${_baseuri}/search-rename-items`,{
        method:"POST",
        body:JSON.stringify({
            query,
            simplify
        }),
        headers:{
            "Content-Type":"application/json"
        }
    })).json();
}