import { Component, Vue, Prop } from 'vue-property-decorator';
import BaseVue from '../base_vue';
import template from './accordion.vue';

declare const $: any;
@Component({
    mixins: [template]
})
export default class Accordion extends BaseVue {
    @Prop() private activeIndex!: number;

    @Prop() private exclusive!: boolean;

    @Prop() private on!: string;

    @Prop() private animateChildren!: boolean;

    @Prop() private closeNested!: boolean;

    @Prop() private collapsible!: boolean;

    @Prop() private duration!: number;

    @Prop() private easing!: string;// include script jquery.easing.js to define new easing type

    @Prop() private preventEmit!: boolean;// include script jquery.easing.js to define new easing type

    private elProp!: {
        activeIndex: number;
        exclusive: boolean;
        on: string;
        animateChildren: boolean;
        closeNested: boolean;
        collapsible: boolean;
        duration: number;
        easing: string;
        preventEmit: boolean;
    }

    data() {
        const self = this;
        return {
            elProp: {
                activeIndex: this.activeIndex,
                exclusive: this.parseBool(this.exclusive || true),
                on: this.on || 'click',
                animateChildren: this.parseBool(this.animateChildren || true),
                closeNested: this.parseBool(this.closeNested || true),
                collapsible: this.parseBool(this.collapsible || true),
                duration: parseInt(`${this.duration}`, 10) || 500,
                easing: this.easing || 'easeOutQuad',
                preventEmit: this.parseBool(this.preventEmit || false)
            }
        };
    }

    mounted() {
        const self = this;
        $(this.$refs.el).accordion({
            activeIndex: this.elProp.activeIndex,
            exclusive: this.elProp.exclusive,
            on: this.elProp.on,
            animateChildren: this.elProp.animateChildren,
            closeNested: this.elProp.closeNested,
            collapsible: this.elProp.collapsible,
            duration: this.elProp.duration,
            easing: this.elProp.easing,
            preventEmit: this.elProp.preventEmit,
            onOpening() {
                if (self.elProp.preventEmit) return;
                self.$emit('onOpening');
            },
            onOpen() {
                if (self.elProp.preventEmit) return;
                self.$emit('onOpen', self.getActiveIndex());
            },
            onClosing() {
                if (self.elProp.preventEmit) return;
                self.$emit('onClosing');
            },
            onClose() {
                if (self.elProp.preventEmit) return;
                self.$emit('onClose', self.getActiveIndex());
            },
            onChanging() {
                if (self.elProp.preventEmit) return;
                self.$emit('onChanging');
            },
            onChange() {
                if (self.elProp.preventEmit) return;
                self.$emit('onChange', self.getActiveIndex());
            }
        });
        if (this.elProp.activeIndex) {
            this.open(this.elProp.activeIndex);
        }
    }

    getActiveIndex(): Array<number> {
        const activeIndex = [];
        const countItem: number = $(this.$refs.el).find('.title').length;
        for (let i = 0; i < countItem; i++) {
            if ($(this.$refs.el).find('.title').eq(i).hasClass('active')) {
                activeIndex.push(i);
            }
        }
        return activeIndex;
    }

    open(index: any) {
        $(this.$refs.el).accordion('open', parseInt(index, 10));
    }

    openAll() {
        if (!this.exclusive) return;
        const countItem: number = $(this.$refs.el).find('.title').length;
        for (let i = 0; i < countItem; i++) {
            this.open(i);
        }
    }

    close(index: any) {
        $(this.$refs.el).accordion('close', parseInt(index, 10));
    }

    closeAll() {
        const countItem: number = $(this.$refs.el).find('.title').length;
        for (let i = 0; i < countItem; i++) {
            this.close(i);
        }
    }

    destroy() {
        $(this.$refs.el).accordion('destroy');
    }

    toggle(index: any) {
        $(this.$refs.el).accordion('toggle', parseInt(index, 10));
    }

    refresh(index: any) {
        $(this.$refs.el).accordion('refresh');
    }

    delete() {
        $(this.$refs.el).remove();
    }
}
