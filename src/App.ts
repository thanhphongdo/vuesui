import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';
import BaseVue from './components/base_vue';
import template from '@/App.vue';
import Accordion from '@/components/accordion/accordion.ts';
import Checkbox from '@/components/checkbox/checkbox.ts';
import Dropdown from '@/components/dropdown/dropdown.ts';
import Selectbox from '@/components/selectbox/selectbox.ts';
import { SelectboxValueItem } from './components/selectbox/selectbox_interface';
@Component({
    mixins: [template],
    components: {
        Accordion,
        Checkbox,
        Dropdown,
        Selectbox
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
            ],
            select: [],
            selectValues: [
                {
                    name: 'Alabama',
                    value: 'AL'
                },
                {
                    name: 'Alaska',
                    value: 'AK'
                },
                {
                    name: 'Arizona',
                    value: 'AZ'
                }
            ]
        };
    },
    mounted() {
        console.log(process.env.NODE_ENV);
        (window as any).app = this;
        (window as any).acordion = this.$refs.acordion;
    },
    methods: {},
    computed: {},
    destroyed() {
        console.log('destroyed home');
    }
})
export default class App extends BaseVue {
    onOpen(data: any) {}
}
