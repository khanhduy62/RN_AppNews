import {flow, types} from 'mobx-state-tree';

const INIT ={
    test:1
}

const AppStore = types
    .model({
        test:types.number
    })

export default AppStore.create(INIT)