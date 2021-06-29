import {makeAutoObservable} from "mobx";
import {User} from "./entities";
import {AuthenticationService} from "./interfaces";

class AuthStore {

    authenticatedUser?:User

    constructor(private authService: AuthenticationService) {
        makeAutoObservable(this)
    }

    async login(username: string, password: string) {
        try {
            this.authenticatedUser = await this.authService.login(username, password)
        } catch (e) {
            console.log(e)
        }
    }
}

export default AuthStore
