export function getItemsAction(items) {
    return {
        type: 'BASKET/GET_ITEMS',
        payload: items
    }
}

export function addItemAction(item) {
    return {
        type: 'BASKET/ADD_ITEM',
        payload: item
    }
}