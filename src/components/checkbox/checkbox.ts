import { Component, Vue, Prop } from 'vue-property-decorator';
import * as jquery from 'jquery';
import BaseVue from '../base_vue';
import template from './checkbox.vue';

declare const $: JQueryStatic;
@Component({
    mixins: [template]
})
export default class Checkbox extends BaseVue {
    @Prop() private value!: any;

    @Prop() private val!: any;

    @Prop() private checked!: boolean;

    private elProp!: {
        activeIndex: number;
    }

    data() {
        const self = this;
        return {
            elProp: {
                checked: this.parseBool(this.checked || false)
            }
        };
    }

    mounted() {
    }

    check(event: any) {
        // const self = this;
        // console.log(event);
        // // this.value.push(1);
        // this.value.splice(0, this.value.length);
        // this.value = [];
        // $('input[type=checkbox][name=example]:checked').each((item: any) => {
        //     self.value.push($(this).val());
        // });
        this.$emit('input', event.target.checked);
    }

    delete() {
        $(this.$refs.el).remove();
    }
}
