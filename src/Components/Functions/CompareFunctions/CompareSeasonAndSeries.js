

const compareSeasonAndSeries = (a,b) => {
    a = a.season.toString() + (a.series/10).toString()
    b = b.season.toString() + (b.series/10).toString()
    return a - b
}
export default compareSeasonAndSeries;


