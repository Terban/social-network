export const updateObject = (items, id, objPropName, newObjProps) => {
    return items.map(item => {
        if (item[id] === objPropName) return {...item, ...newObjProps}
        return item
    })
}