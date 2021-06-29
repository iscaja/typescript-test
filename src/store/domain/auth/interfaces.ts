export interface AuthenticatedUser {
    name: string
}

export interface AuthenticationService {
    login(username:string, password:string):Promise<AuthenticatedUser>
}