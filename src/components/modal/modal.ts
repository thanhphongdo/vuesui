import { Component, Vue, Prop } from 'vue-property-decorator';
import * as jquery from 'jquery';
import BaseVueSemantic from '../base_vue_semantic';
import template from './modal.vue';

declare const $: any;
@Component({
    mixins: [template]
})
export default class Modal extends BaseVueSemantic {
    @Prop() private detachable!: boolean;

    @Prop() private useFlex!: string;

    @Prop() private autofocus!: boolean;

    @Prop() private observeChanges!: boolean;

    @Prop() private allowMultiple!: boolean;

    @Prop() private keyboardShortcuts!: boolean;

    @Prop() private offset!: number;

    @Prop() private context!: string;

    @Prop() private closable!: boolean;

    @Prop() private dimmerSettings!: any;

    @Prop() private transition!: string;

    @Prop() private duration!: number;

    @Prop() private queue!: boolean;

    @Prop() private preventEmit!: boolean;

    private elProp!: {
        detachable: boolean;
        useFlex: string;
        autofocus: boolean;
        observeChanges: boolean;
        allowMultiple: boolean;
        keyboardShortcuts: boolean;
        offset: number;
        context: string;
        closable: boolean;
        dimmerSettings: any;
        transition: string;
        duration: number;
        queue: boolean;
        preventEmit: boolean;
    }

    private selected: any = [];

    private key: any = 1;

    data() {
        const self = this;
        return {
            elProp: {
                detachable: this.parseBool(this.detachable || true),
                useFlex: this.useFlex || 'auto',
                autofocus: this.parseBool(this.autofocus || true),
                observeChanges: this.parseBool(this.observeChanges || false),
                allowMultiple: this.parseBool(this.allowMultiple || false),
                keyboardShortcuts: this.parseBool(this.keyboardShortcuts || true),
                offset: this.offset || 0,
                context: this.context || 'body',
                closable: this.parseBool(this.closable || true),
                dimmerSettings: this.dimmerSettings,
                transition: this.transition || 'scale',
                duration: this.duration || 400,
                queue: this.parseBool(this.queue || false),
                preventEmit: this.parseBool(this.preventEmit || false)
            }
        };
    }

    mounted() {
        console.log('mounted');
    }

    show() {
        $(this.$refs.el).modal(this.elProp).modal('show');
    }

    hide() {
        $(this.$refs.el).modal(this.elProp).modal('show');
    }

    toggle() {
        $(this.$refs.el).modal(this.elProp).modal('toggle');
    }

    refresh() {
        $(this.$refs.el).modal(this.elProp).modal('refresh');
    }

    showDimmer() {
        $(this.$refs.el).modal(this.elProp).modal('show dimmer');
    }

    hideDimmer() {
        $(this.$refs.el).modal(this.elProp).modal('hide dimmer');
    }

    hideOthers() {
        $(this.$refs.el).modal(this.elProp).modal('hide others');
    }

    hideAll() {
        $(this.$refs.el).modal(this.elProp).modal('hide all');
    }

    cacheSizes() {
        $(this.$refs.el).modal(this.elProp).modal('cache sizes');
    }

    canFit() {
        $(this.$refs.el).modal(this.elProp).modal('can fit');
    }

    isActive() {
        $(this.$refs.el).modal(this.elProp).modal('is active');
    }

    setActive() {
        $(this.$refs.el).modal(this.elProp).modal('set active');
    }
}
