import { Component, Vue, Prop } from 'vue-property-decorator';
import * as jquery from 'jquery';
import BaseVueSemantic from '../base_vue_semantic';
import template from './dropdown.vue';

declare const $: any;
@Component({
    mixins: [template]
})
export default class Dropdown extends BaseVueSemantic {
    @Prop() private preventEmit!: boolean;

    private elProp!: {
        preventEmit: boolean;
    }

    private checkbox: any;

    data() {
        const self = this;
        return {
            elProp: {
                preventEmit: this.parseBool(this.preventEmit || false)
            }
        };
    }

    mounted() {
        const self = this;
        $(this.$refs.el).dropdown();
    }
}
