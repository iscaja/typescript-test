import {DomainStore} from "./domain";
import {UIStore} from "./ui";

export interface RootStore {
    domain?: DomainStore
    ui?: UIStore
}