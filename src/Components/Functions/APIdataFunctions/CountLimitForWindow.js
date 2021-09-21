const CountLimitForWindow = (HeightOfOneElement)=>{
    let HeightOfNotFreeSpace = 162
    let FreeSpaceForList = window.innerHeight - HeightOfNotFreeSpace
    let LimitOfElementsForList = Math.ceil(FreeSpaceForList/HeightOfOneElement)
    return LimitOfElementsForList
}
export default CountLimitForWindow