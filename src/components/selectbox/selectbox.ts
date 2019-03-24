import { Component, Vue, Prop } from 'vue-property-decorator';
import * as jquery from 'jquery';
import BaseVueSemantic from '../base_vue_semantic';
import template from './selectbox.vue';
import { SelectboxValueItem } from './selectbox_interface';

declare const $: any;
@Component({
    mixins: [template]
})
export default class Selectbox extends BaseVueSemantic {
    @Prop() private name!: string;

    @Prop() private multiple!: boolean;

    @Prop() private search!: boolean;

    @Prop() private on!: string;

    @Prop() private clearable!: boolean;

    @Prop() private fullTextSearch!: string;

    @Prop() private direction!: boolean;

    @Prop() private keepOnScreen!: boolean;

    @Prop() private preserveHTML!: boolean;

    @Prop() private sortSelect!: boolean;

    @Prop() private showOnFocus!: boolean;

    @Prop() private keys!: any;

    @Prop() private delay!: any;

    @Prop() private placeholder!: string;

    @Prop() private action!: string;

    @Prop() private allowTab!: boolean;

    @Prop() private duration!: number;

    @Prop() private transition!: string;// auto (slide down / slide up)

    @Prop() private apiSettings!: any;

    @Prop() private fields!: any;

    @Prop() private filterRemoteData!: boolean;

    @Prop() private saveRemoteData!: boolean;

    @Prop() private values!: Array<SelectboxValueItem>;

    @Prop() private preventEmit!: boolean;

    private elProp!: {
        name: string;
        multiple: boolean;
        search: boolean;
        on: string;
        clearable: boolean;
        fullTextSearch: string;
        direction: boolean;
        keepOnScreen: boolean;
        preserveHTML: boolean;
        sortSelect: boolean;
        showOnFocus: boolean;
        keys: any;
        delay: any;
        placeholder: string;
        action: string;
        allowTab: boolean;
        duration: number;
        transition: string;
        apiSettings: any;
        values: Array<SelectboxValueItem>;
        preventEmit: boolean;
        hasSlotDefault: boolean;
        hasSlotIcon: boolean;
        hasSlotDefaultText: boolean;
    }

    private selected: any = [];

    private key: any = 1;

    data() {
        const self = this;
        return {
            elProp: {
                name: this.name || '',
                multiple: this.parseBool(this.multiple || false),
                search: this.parseBool(this.search || false),
                on: this.on || 'click',
                clearable: this.parseBool(this.clearable || false),
                fullTextSearch: this.fullTextSearch || false,
                direction: this.direction || 'auto',
                keepOnScreen: this.parseBool(this.keepOnScreen || true),
                preserveHTML: this.parseBool(this.preserveHTML || true),
                sortSelect: this.parseBool(this.sortSelect || false),
                showOnFocus: this.parseBool(this.showOnFocus || true),
                keys: this.keys,
                delay: this.delay,
                placeholder: this.placeholder || '',
                action: this.action || 'activate',
                allowTab: this.parseBool(this.allowTab || true),
                duration: this.duration || 200,
                transition: this.transition || 'auto',
                apiSettings: this.apiSettings,
                fields: this.fields,
                filterRemoteData: this.parseBool(this.filterRemoteData || false),
                saveRemoteData: this.parseBool(this.saveRemoteData || true),
                values: this.values || null,
                preventEmit: this.parseBool(this.preventEmit || false),
                hasSlotDefault: this.$slots && this.$slots.default && this.$slots.default.length,
                hasSlotIcon: this.$slots && this.$slots.icon && this.$slots.icon.length,
                hasSlotDefaultText: this.$slots && this.$slots.defaultText && this.$slots.defaultText.length
            }
        };
    }

    initSelectbox() {
        const self = this;
        $(self.$refs.el).children().dropdown({
            on: self.elProp.on,
            clearable: self.elProp.clearable,
            direction: self.elProp.direction,
            keepOnScreen: self.elProp.keepOnScreen,
            preserveHTML: self.elProp.preserveHTML,
            sortSelect: self.elProp.sortSelect,
            showOnFocus: self.elProp.showOnFocus,
            keys: self.elProp.keys,
            delay: self.elProp.delay,
            context: window,
            placeholder: self.elProp.placeholder,
            action: self.elProp.action,
            apiSettings: this.apiSettings,
            fields: this.fields,
            filterRemoteData: this.filterRemoteData,
            saveRemoteData: this.saveRemoteData,
            onChange: (value: any, text: any, $choice: any) => {
                if (value) {
                    self.selected = value;
                }
                self.$emit('input', value);
                if (self.elProp.preventEmit) return;
                self.$emit('onChange', {
                    value,
                    text,
                    $choice
                });
            },
            onShow: () => {
                if (self.elProp.preventEmit) return;
                self.$emit('onShow');
            },
            onHide: () => {
                if (self.elProp.preventEmit) return;
                self.$emit('onHide');
            },
            onAdd: (addedValue: any, addedText: any, $addedChoice: any) => {
                if (self.elProp.preventEmit) return;
                self.$emit('onAdd', { addedValue, addedText, $addedChoice });
            },
            onRemove: (removedValue: any, removedText: any, $removedChoice: any) => {
                if (self.elProp.preventEmit) return;
                self.$emit('onRemove', { removedValue, removedText, $removedChoice });
            },
            onLabelCreate: (value: any, text: any) => {
                if (self.elProp.preventEmit) return;
                self.$emit('onLabelCreate', { value, text });
            },
            onLabelSelect: ($selectedLabels: any) => {
                if (self.elProp.preventEmit) return;
                self.$emit('onLabelSelect', { $selectedLabels });
            },
            onNoResults: (searchValue: any) => {
                if (self.elProp.preventEmit) return;
                self.$emit('onNoResults', { searchValue });
            }
        });
        if (!self.elProp.hasSlotDefault && self.elProp.values && self.elProp.values.length) {
            const selected = self.elProp.values.filter(item => item.selected).map(item => item.value);
            self.setSelected(selected);
        }
        if (self.elProp.hasSlotDefault) {
            const selected: any = [];
            $(self.$el).find('option').each((index: number, item: any) => {
                if (item.defaultSelected) {
                    selected.push(item.value);
                }
            });
            self.setSelected(selected);
        }
    }

    mounted() {
        console.log('mounted');
        const self = this;
        self.initSelectbox();
    }

    setSelected(value: string | number | Array<any>) {
        // Run only set data-value for dropdown items or value prop for option tag
        $(this.$refs.el).children().dropdown('set selected', value);
    }

    removeSelected(value: string | number | Array<any>) {
        // Run only set data-value for dropdown items or value prop for option tag
        $(this.$refs.el).children().dropdown('remove selected', value);
    }

    setExactly(value: string | number | Array<any>) {
        // Run only set data-value for dropdown items or value prop for option tag
        $(this.$refs.el).children().dropdown('set exactly', value);
    }

    getItem(value: string | number | Array<any>) {
        // Run only set data-value for dropdown items
        // Support multiple dropdown only
        $(this.$refs.el).children().dropdown('get item', value);
    }

    getValue() {
        return $(this.$refs.el).children().dropdown('get value');
    }

    changeValues(values?: Array<SelectboxValueItem>) {
        // $(this.$refs.el).children().dropdown('change values', values);
        const self = this;
        self.clear();
        if (values) {
            self.elProp.values = values;
        }
        this.key++;
        setTimeout(() => {
            self.initSelectbox();
        }, 10);
        // $(self.$refs.el).children().dropdown('refresh');
        // if (!self.elProp.hasSlotDefault && self.elProp.values && self.elProp.values.length) {
        //     const selected = self.elProp.values.filter(item => item.selected).map(item => item.value);
        //     self.setSelected(selected);
        // }
        // if (self.elProp.hasSlotDefault) {
        //     const selected: any = [];
        //     $(self.$el).find('option').each((index: number, item: any) => {
        //         if (item.defaultSelected) {
        //             selected.push(item.value);
        //         }
        //     });
        //     self.setSelected(selected);
        // }
        // this.mounted();
    }

    show() {
        $(this.$refs.el).children().dropdown('show');
    }

    hide() {
        $(this.$refs.el).children().dropdown('hide');
    }

    toggle() {
        $(this.$refs.el).children().dropdown('toggle');
    }

    clear() {
        $(this.$refs.el).children().dropdown('clear');
        this.selected = [];
    }

    isHidden() {
        return $(this.$refs.el).children().dropdown('is hidden');
    }
}
