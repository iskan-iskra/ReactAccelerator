import Authorization from "../Pages/Authorization/Authorization"
import CreateNewAccount from "../Pages/Authorization/CreateNewAccount"

const publicRoutes = [
    {path: '/Authorization', component: Authorization, exact:true},
    {path: '/Registration', component: CreateNewAccount, exact:true}

]
export default publicRoutes