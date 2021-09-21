import { makeAutoObservable, runInAction} from "mobx"
import LoginService from "../API/Authorization"

class UserStore{
    MyID = ''
    MyLogin = ''
    MyPassword = ''
    MyToken = null
    ServerIsAsked = false
    ErrorStatus = null
    MyName = ''
    MySername=''
    MyPatronymic = ''
    isUserLoginFree = false
    constructor(){
        makeAutoObservable(this)
    }
    checkMyToken = () =>{
        if(localStorage.getItem('MyToken')){
            runInAction(()=>{
                this.MyToken = localStorage.getItem('MyToken')
            })
        }
    }
    clearMyToken = ()=>{
        localStorage.clear()
        this.MyToken = null
    }
    clearAllInfo = ()=>{
        this.clearMyToken()
        this.setMyLogin('')
        this.setMyPassword('')
        this.setMyName('')
        this.setMySername('')
        this.setMyPatronymic('')
    }
    setErrorStatus = (Status)=>{
        this.ErrorStatus= Status
    }
    setMyLogin = (login)=>{
        this.MyLogin = login
    }
    setMyPassword = (password)=>{
        this.MyPassword = password
    }
    setMyName = (state)=>{
        this.MyName = state
    }
    setMySername = (state)=>{
        this.MySername = state
    }   
    setMyPatronymic = (state)=>{
        this.MyPatronymic = state
    }
    setUserLoginFree = (state)=>{
        this.isUserLoginFree = state
    }
    getMyToken = async ()=>{
        await LoginService.getToken(this.MyLogin, this.MyPassword)
            .then((response)=>{
                if(response.status===200){
                    runInAction(()=>{
                        this.MyToken = response.data.token
                        this.setMyPassword('')
                        localStorage.setItem('MyToken', this.MyToken)
                        localStorage.setItem('MyLogin', this.MyLogin)
                    })
                }
            })
            .catch((error)=>{
                if(error.response.status===403){
                    this.setErrorStatus('Введен не верный пароль')
                }
                else if(error.response.status===404){
                    this.setErrorStatus('Введен не верный логин или пароль')
                }
                else{
                    this.setErrorStatus('Сервис времено не доступен')
                }
            })
    }
    sendMyData = async ()=>{
        const MyData = {
            MyLogin: this.MyLogin,
            MyPassword: this.MyPassword,
            MyName: this.MyName,
            MySername: this.MySername,
            MyPatronymic: this.MyPatronymic
        }
        await LoginService.register(MyData)
            .then((response)=>{
                if(response.status===200){
                    runInAction(()=>{
                        this.getMyToken()
                    })
                }
            })
            .catch((error)=>{
                console.log(error);
                this.setErrorStatus('Ошибка при регистрации')
            })
    }
    checkUser = async ()=>{
        await LoginService.getUser(this.MyLogin)
            .then((response)=>{
                if(response.status===200){
                    this.isUserLoginFree=false
                    this.setErrorStatus('Логин уже занят')
                }
            })
            .catch((error)=>{
                if(error.response.status===404){
                    this.isUserLoginFree=true
                }
                else{this.setErrorStatus('Ошибка сервера')}
            })
    }
    getUserInfo = async ()=>{
        this.ServerIsAsked = true
        if(this.MyLogin!==localStorage.getItem('MyLogin')){
            this.MyLogin = localStorage.getItem('MyLogin')
        }
        let Login = this.MyLogin
        await LoginService.getUser(Login)
            .then((response)=>{
                if(response.status===200){
                    runInAction(()=>{
                        this.ServerIsAsked = false
                        this.MyID = response.data.data.id
                        this.MyName = response.data.data.firstName
                        this.MySername = response.data.data.lastName
                        this.MyPatronymic = response.data.data.patronymic
                    })
                }
            })
            .catch((error)=>{
                this.ServerIsAsked = false
                if(error.response.status===404){
                    this.setErrorStatus('Пользователь не найден');
                }
                else{this.setErrorStatus('Ошибка сервера')}
            })
    }
    updateUserInfo = async ()=>{
        this.ServerIsAsked = true
        const MyData = {
            MyId: this.MyID,
            MyName: this.MyName,
            MySername: this.MySername,
            MyPatronymic: this.MyPatronymic
        }
        await LoginService.updateUser(MyData)
            .then((response)=>{
                if(response.status===200){
                    runInAction(()=>{
                        this.ServerIsAsked = false
                    })
                }
            })
            .catch((error)=>{
                this.ServerIsAsked = false
                if(error.response.status===404){
                    this.setErrorStatus('Пользователь не найден');
                }
                else{this.setErrorStatus('Ошибка сервера')}
            })
    }
}
export default new UserStore()