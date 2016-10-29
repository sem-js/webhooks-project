import {extendObservable} from "mobx";

class Hook {
    constructor(id, name) {
        extendObservable(this, {id, name});
    }
}

class HookList {
    constructor() {
        extendObservable(this, {
            hooks: []
        });
    }

    populate(hooks) {
        hooks.forEach(hook => this.hooks.push(new Hook(hook.id, hook.name)));
    }
}

export {
    Hook, HookList
};
