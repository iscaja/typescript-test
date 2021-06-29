import AuthStore from "./auth";
import {AuthenticationService} from "./auth/interfaces";

export type DomainStore = {
    auth: AuthStore,
}

export function createDomainStore (authService: AuthenticationService): DomainStore {
    return {
        auth: new AuthStore(authService)
    }
}