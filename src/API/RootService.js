import axios from "axios";
import UserStore from "../Store/UserStore";
import mainURL from "./MainUrl";

const JWTToken = UserStore.MyToken


const Login = {headers: {Authorization: "Bearer " + JWTToken}}

export default class RootService {
    constructor(name){
        this.ServiceName = name
    }
    async getAll(limit=10, page=1){
        const response = await axios.get(mainURL+`/${this.ServiceName}/GetAll`, {
            Login,
            params: {
                PageNumber: page,
                PageSize: limit
            }
        })
        console.log('server response');
        return response
    }
    async getOneById(id){
        const response = await axios.get(mainURL+`/${this.ServiceName}/GetById`, {
            Login,
            params: {
                Id: id
            }
        })
        console.log('server response');
        return response
    }
}