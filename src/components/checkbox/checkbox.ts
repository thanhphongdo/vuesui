import { Component, Vue, Prop } from 'vue-property-decorator';
import * as jquery from 'jquery';
import BaseVueSemantic from '../base_vue_semantic';
import template from './checkbox.vue';

declare const $: JQueryStatic;
@Component({
    mixins: [template]
})
export default class Checkbox extends BaseVueSemantic {
    @Prop() private value!: any;

    @Prop() private name!: string;

    @Prop() private label!: string;

    @Prop() private val!: any;

    @Prop() private radio!: boolean;

    @Prop() private checked!: boolean;

    @Prop() private preventEmit!: boolean;

    @Prop() private uncheckable!: boolean;

    @Prop() private fireOnInit!: boolean;

    private elProp!: {
        activeIndex: number;
        name: string;
        label: string;
        val: string;
        radio: boolean;
        checked: boolean;
        preventEmit: boolean;
        uncheckable: boolean;
        fireOnInit: boolean;
    }

    private checkbox: any;

    data() {
        const self = this;
        return {
            elProp: {
                name: this.name,
                label: this.label,
                val: this.val,
                radio: this.parseBool(this.radio || false),
                checked: this.parseBool(this.checked || false),
                preventEmit: this.parseBool(this.preventEmit || false),
                uncheckable: this.parseBool(this.uncheckable || (!this.radio)),
                fireOnInit: this.parseBool(this.fireOnInit || false)
            }
        };
    }

    mounted() {
        const self = this;
        this.checkbox = $(this.$refs.el);
        this.checkbox.checkbox({
            uncheckable: self.elProp.uncheckable,
            fireOnInit: self.elProp.fireOnInit,
            onChange: () => {
                if (!self.elProp.radio) {
                    self.$emit('input', (self.$refs.checkbox as any).checked);
                } else {
                    self.$emit('input', self.elProp.val);
                }
                if (self.elProp.preventEmit) return;
                self.$emit('onChange', (self.$refs.checkbox as any).checked);
            },
            onChecked: () => {
                self.elProp.checked = true;
                if (self.elProp.preventEmit) return;
                self.$emit('onChecked', self);
            },
            onIndeterminate: () => {
                if (self.elProp.preventEmit) return;
                self.$emit('onIndeterminate', self);
            },
            onDeterminate: () => {
                if (self.elProp.preventEmit) return;
                self.$emit('onDeterminate', self);
            },
            onUnchecked: () => {
                self.elProp.checked = false;
                if (self.elProp.preventEmit) return;
                self.$emit('onUnchecked', self);
            },
            beforeChecked: () => {
                if (self.elProp.preventEmit) return;
                self.$emit('beforeChecked', self);
            },
            beforeIndeterminate: () => {
                if (self.elProp.preventEmit) return;
                self.$emit('beforeIndeterminate', self);
            },
            beforeDeterminate: () => {
                if (self.elProp.preventEmit) return;
                self.$emit('beforeDeterminate', self);
            },
            beforeUnchecked: () => {
                if (self.elProp.preventEmit) return;
                self.$emit('beforeUnchecked', self);
            },
            onEnable: () => {
                if (self.elProp.preventEmit) return;
                self.$emit('onEnable', self);
            },
            onDisable: () => {
                if (self.elProp.preventEmit) return;
                self.$emit('onDisable', self.elProp.val);
            }
        });
        if (self.elProp.checked) {
            self.check(self.elProp.preventEmit);
        }
    }

    check(preventEmit?: boolean) {
        if (typeof preventEmit === 'undefined') {
            preventEmit = this.elProp.preventEmit;
        }
        if (preventEmit) {
            this.checkbox.checkbox('set checked');
        } else {
            this.checkbox.checkbox('check');
        }
    }

    uncheck(preventEmit?: boolean) {
        if (typeof preventEmit === 'undefined') {
            preventEmit = this.elProp.preventEmit;
        }
        if (preventEmit) {
            this.checkbox.checkbox('set unchecked');
        } else {
            this.checkbox.checkbox('uncheck');
        }
    }

    disable(preventEmit?: boolean) {
        if (typeof preventEmit === 'undefined') {
            preventEmit = this.elProp.preventEmit;
        }
        if (preventEmit) {
            this.checkbox.checkbox('set disabled');
        } else {
            this.checkbox.checkbox('disable');
        }
    }

    enable(preventEmit?: boolean) {
        if (typeof preventEmit === 'undefined') {
            preventEmit = this.elProp.preventEmit;
        }
        if (preventEmit) {
            this.checkbox.checkbox('set enabled');
        } else {
            this.checkbox.checkbox('enable');
        }
    }

    toggle() {
        this.checkbox.checkbox('toggle');
    }

    isRadio(): boolean {
        return this.checkbox.checkbox('is radio');
    }

    isChecked(): boolean {
        return this.checkbox.checkbox('is checked');
    }

    isUnchecked(): boolean {
        return this.checkbox.checkbox('is unchecked');
    }

    canChange(): boolean {
        return this.checkbox.checkbox('can change');
    }

    shouldAllowCheck(): boolean {
        return this.checkbox.checkbox('should allow check');
    }

    shouldAllowUncheck(): boolean {
        return this.checkbox.checkbox('should allow uncheck');
    }

    shouldAllowDeterminate(): boolean {
        return this.checkbox.checkbox('should allow determinate');
    }

    shouldAllowIndeterminate(): boolean {
        return this.checkbox.checkbox('should allow indeterminate');
    }

    canUncheck(): boolean {
        return this.checkbox.checkbox('can uncheck');
    }
}
