export function selectTab(tabId) {
    console.log(tabId)
    return{
        type: 'TAB_SELECTED',
        payload:tabId
    }
}

export function showTabs(...tabId){
const tabsToShow = {} 
tabId.forEach(e => tabsToShow[e] = true)
return{
    type: 'TAB_SHOWED',
    payload: tabsToShow
}
}
