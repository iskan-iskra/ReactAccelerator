const StatusAndGenderRender = (generalInfo)=>{
    let genderInfo = "Ожиадние...";
    let statusInfo = "Ожиадние...";
    switch (generalInfo)
        {
            case "0-0": 
                genderInfo= "Мужской";
                statusInfo= "Живой";
                break;
            case "0-1": 
                genderInfo= "Мужской";
                statusInfo= "Мертвый";
                break;
            case "0-2": 
                genderInfo= "Мужской";
                statusInfo= "Неизвестно";
                break;
            case "1-0": 
                genderInfo= "Женский";
                statusInfo= "Живая";
                break;
            case "1-1": 
                genderInfo= "Женский";
                statusInfo= "Мертвая";
                break;
            case "1-2": 
                genderInfo= "Мужской";
                statusInfo= "Неизвестно";
                break;
            case "2-0": 
                genderInfo= "Бесполый";
                statusInfo= "Живое";
                break;
            case "2-1": 
                genderInfo= "Бесполый";
                statusInfo= "Мертвое";
                break;
            case "2-2": 
                genderInfo= "Бесполый";
                statusInfo= "Неизвестно";
                break;
            default: 
                genderInfo= "неопределенный"
                statusInfo= "неопределенный";
                break;
        }
    return {
        gender: genderInfo,
        status: statusInfo
    }
}

export default StatusAndGenderRender