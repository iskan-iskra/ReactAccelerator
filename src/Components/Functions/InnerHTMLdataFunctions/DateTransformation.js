
const DateTransformation = (receivedDate)=>{
    let SerialDate = {
        year: receivedDate.slice(0,4),
        day: receivedDate.slice(8,10),
        month: receivedDate.slice(5,7)
    }    
    if(SerialDate.day[0]==='0'){
        SerialDate.day = SerialDate.day[1]
    }
    const months=[
        'Января',
        'Февраля',
        'Марта',
        'Апреля',
        'Мая',
        'Июня',
        'Июля',
        'Августа',
        'Сентября',
        'Октября',
        'Ноября',
        'Декабря',
    ];
    SerialDate = SerialDate.day + ' ' + months[SerialDate.month-1] + ' ' + SerialDate.year
    return SerialDate
}
export default DateTransformation