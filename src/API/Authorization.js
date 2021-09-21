import axios from "axios";
import mainURL from "./MainUrl";

class LoginService {
    async getToken(MyLogin, MyPassword){
        const response = await axios.post(mainURL+`/Account/Login`, {
            "userName": MyLogin,
            "password": MyPassword
        })
        console.log('server response');
        return response
    }
    async register(MyData){
        const response = await axios.post(mainURL+`/Account/Register`, {
            "userName": MyData.MyLogin,
            "password": MyData.MyPassword,
            "firstName": MyData.MyName,
            "lastName": MyData.MySername,
            "patronymic": MyData.MyPatronymic
        })
        console.log('server response');
        return response
    }
    async getUser(UserName){
        const response = await axios.get(mainURL+`/Account/GetProfile`, {
            params: {userName: UserName}
        })
        console.log('server response');
        return response
    }
    async updateUser(MyData){
        const response = await axios.put(mainURL+`/Account/UpdateProfile`, {
            "userId": MyData.MyId,
            "firstName": MyData.MyName,
            "lastName": MyData.MySername,
            "patronymic": MyData.MyPatronymic
        })
        console.log('server response');
        return response
    }
}
export default new LoginService()