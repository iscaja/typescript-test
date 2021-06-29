import {AuthenticatedUser} from "../store/domain/auth/interfaces";

export class AuthService {

    async login(username:string, password:string):Promise<AuthenticatedUser> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({name: username})
            }, 1000)
        })
    }
}