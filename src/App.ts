import { Component, Vue } from 'vue-property-decorator';
import BaseVue from './components/base_vue';
import template from '@/App.vue';
import { mapActions, mapGetters } from 'vuex';
import Accordion from '@/components/accordion/accordion.ts';
import Checkbox from '@/components/checkbox/checkbox.ts';
import Dropdown from '@/components/dropdown/dropdown.ts';
@Component({
    mixins: [template],
    components: {
        Accordion,
        Checkbox,
        Dropdown
    },
    data() {
        return {
            radio: '',
            checkedNames: [],
            checks: [
                {
                    checked: true,
                    value: '1'
                },
                {
                    checked: false,
                    value: '2'
                },
                {
                    checked: false,
                    value: '3'
                }
            ]
        };
    },
    mounted() {
        console.log('XXXxx');
        console.log(process.env.NODE_ENV);
        (window as any).acordion = this.$refs.acordion;
    },
    methods: {},
    computed: {},
    destroyed() {
        console.log('destroyed home');
    }
})
export default class App extends BaseVue {
    onOpen(data: any) {
        console.log(data);
    }
}
