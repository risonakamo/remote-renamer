const _baseuri:string=window.location.origin;

/** search rename items */
export async function searchRenameItems(query:string,simplify:boolean):Promise<RenameItem[]>
{
    return await (await fetch(`${_baseuri}/search-rename-items`,{
        method:"POST",
        body:JSON.stringify({
            query,
            simplify
        } as SearchRenameItemsRequest),
        headers:{
            "Content-Type":"application/json"
        }
    })).json();
}

/** send rename item request */
export async function renameItem(target:string,newName:string):Promise<void>
{
    fetch(`${_baseuri}/rename-item`,{
        method:"POST",
        body:JSON.stringify({
            target,
            newName
        } as RenameRequest),
        headers:{
            "Content-Type":"application/json"
        }
    });
}