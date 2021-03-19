import _ from "lodash";

/** key array of rename items by shortname */
export function groupEntriesByShortName(entries:RenameItem[]):RenameItemsByShortName
{
    return _.groupBy(entries,(x:RenameItem):string=>{
        return x.shortname;
    });
}