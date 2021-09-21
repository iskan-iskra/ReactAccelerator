const compareFullNames = (a,b) => {
    a = a.fullName.toLowerCase().replace(/\s+/g, '')
    b = b.fullName.toLowerCase().replace(/\s+/g, '')
    if(a < b) { return -1; }
    if(a > b) { return 1; }
    return 0;
}
export default compareFullNames