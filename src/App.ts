import { Component, Vue } from 'vue-property-decorator';
import template from '@/App.vue';
import { mapActions, mapGetters } from 'vuex';
@Component({
    mixins: [template],
    data() {
        return {};
    },
    mounted() {
        console.log('XXXxx');
    },
    methods: {},
    computed: {},
    destroyed() {
        console.log('destroyed home');
    },
})
export default class App extends Vue { }
