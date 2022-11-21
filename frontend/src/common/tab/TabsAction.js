export function selectcTab(tabId) {
    console.log(tabId)
    return{
        type: 'TAB_SELECTED',
        payload:tabId
    }
}