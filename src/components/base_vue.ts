import { Component, Vue, Prop } from 'vue-property-decorator';
@Component({

})
export default class BaseVue extends Vue {
    public parseBool(val: any): boolean {
        return Boolean(JSON.parse(val));
    }

    public console!: Console;

    constructor() {
        super();
        this.console = console;
    }
}
