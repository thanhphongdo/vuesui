import { Component, Vue } from 'vue-property-decorator';
import template from './dashboard.vue';

@Component({
    mixins: [template],
    components: {
    },
    data() {
        return {
        };
    },
    destroyed() {
    }
})
export default class Dashboard extends Vue { }
