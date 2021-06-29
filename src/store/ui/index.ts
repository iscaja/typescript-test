import {makeAutoObservable} from "mobx";

export class UIStore {
    color?: string
    isLoading?: boolean
    constructor() {
        makeAutoObservable(this)
    }
}

export function createUIStore () {
    return new UIStore()
}
