export function selectcTab(tabId) {
    console.log(tabId)
    return{
        type: 'TAB_SELECTED',
        payload:tabId
    }
}

export function showTabs(...tabId){
const tabsToShow = {} 
tabIds.forEach(a => tabsToShow[e] = true)
return{
    type: 'TAB_SHOWED',
    payload: tabsToShow
}
}
