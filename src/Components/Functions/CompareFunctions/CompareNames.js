const compareNames = (a,b) => {
    a = a.name.toLowerCase().replace(/\s+/g, '')
    b = b.name.toLowerCase().replace(/\s+/g, '')
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
}
export default compareNames