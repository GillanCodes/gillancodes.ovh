export function transformDate(v:Date)
{
    const date = new Date(v);
    return date.toLocaleDateString();
}
