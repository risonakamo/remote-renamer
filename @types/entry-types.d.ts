/** represents an item that can be renamed */
interface RenameItem
{
    name:string
    shortname:string
}

/** rename items keyed by shortname */
type RenameItemsByShortName=Record<string,RenameItem[]>