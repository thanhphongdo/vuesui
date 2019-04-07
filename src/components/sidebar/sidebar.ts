import { Component, Vue, Prop } from 'vue-property-decorator';
import * as jquery from 'jquery';
import BaseVueSemantic from '../base_vue_semantic';
import template from './sidebar.vue';

declare const $: any;
@Component({
    mixins: [template]
})
export default class Sidebar extends BaseVueSemantic {
    @Prop() private context!: string;

    @Prop() private exclusive!: boolean;

    @Prop() private closable!: boolean;

    @Prop() private dimPage!: boolean;

    @Prop() private scrollLock!: boolean;

    @Prop() private returnScroll!: boolean;

    @Prop() private delaySetup!: boolean;

    @Prop() private preventEmit!: boolean;

    private elProp!: {
        context: string;
        exclusive: boolean;
        closable: boolean;
        dimPage: boolean;
        scrollLock: boolean;
        returnScroll: boolean;
        delaySetup: boolean;
        preventEmit: boolean;
    }

    private selected: any = [];

    private key: any = 1;

    data() {
        const self = this;
        return {
            elProp: {
                context: this.context || 'body',
                exclusive: this.parseBool(this.exclusive || false),
                closable: this.parseBool(this.closable || true),
                dimPage: this.parseBool(this.dimPage || true),
                scrollLock: this.parseBool(this.scrollLock || false),
                returnScroll: this.parseBool(this.returnScroll || false),
                delaySetup: this.parseBool(this.delaySetup || false),
                preventEmit: this.parseBool(this.preventEmit || false),
                onVisible: () => {
                    if (self.elProp.preventEmit) return;
                    self.$emit('onVisible');
                },
                onShow: () => {
                    if (self.elProp.preventEmit) return;
                    self.$emit('onShow');
                },
                onChange: () => {
                    if (self.elProp.preventEmit) return;
                    self.$emit('onChange');
                },
                onHide: () => {
                    if (self.elProp.preventEmit) return;
                    self.$emit('onHide');
                },
                onHidden: () => {
                    if (self.elProp.preventEmit) return;
                    self.$emit('onHidden');
                }
            }
        };
    }

    mounted() {
        console.log('mounted');
    }

    show() {
        $(this.$refs.el).sidebar('show');
    }

    hide() {
        $(this.$refs.el).sidebar('hide');
    }

    toggle() {
        $(this.$refs.el).sidebar(this.elProp).sidebar('setting', 'transition', 'overlay').sidebar('toggle');
    }

    isVisible() {
        $(this.$refs.el).sidebar('is visible');
    }

    isHidden() {
        $(this.$refs.el).sidebar('is hidden');
    }

    pushPage() {
        $(this.$refs.el).sidebar('push page');
    }

    getDirection() {
        $(this.$refs.el).sidebar('get direction');
    }

    pullPage() {
        $(this.$refs.el).sidebar('pull page');
    }

    addBodyCSS() {
        $(this.$refs.el).sidebar('add body CSS');
    }

    removeBodyCSS() {
        $(this.$refs.el).sidebar('remove body CSS');
    }

    getTransitionEvent() {
        $(this.$refs.el).sidebar('get transition event');
    }
}
