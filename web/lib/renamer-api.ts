const _baseuri:string=window.location.origin;

/** search rename items */
export async function searchRenameItems(query:string):Promise<RenameItem[]>
{
    return await (await fetch(`${_baseuri}/search-rename-items`,{
        method:"POST",
        body:query
    })).json();
}