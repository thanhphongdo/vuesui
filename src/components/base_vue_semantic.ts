import { Component, Vue, Prop } from 'vue-property-decorator';
import BaseVue from './base_vue';
@Component({

})
export default class BaseVueSemantic extends BaseVue {
    public parseBool(val: any): boolean {
        return Boolean(JSON.parse(val));
    }

    public console!: Console;

    constructor() {
        super();
        this.console = console;
    }

    setPreventEmit(preventEmit: boolean) {
        (this as any).elProp.preventEmit = preventEmit;
    }

    delete() {
        $(this.$refs.el).remove();
    }
}
