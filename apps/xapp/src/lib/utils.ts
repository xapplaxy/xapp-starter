export function copyToClipboard(text: any|undefined):boolean {
    if(text){
        navigator.clipboard.writeText(text);
        return true;
    }
    return false;
}

export function getMiniAppData (appId:string):any|undefined {
    const allMiniappsData = document.getElementById("all-miniapps-data")?.innerText;
    const miniappsData = allMiniappsData?JSON.parse(allMiniappsData):undefined;
    return miniappsData ? miniappsData[appId] : undefined;
}
