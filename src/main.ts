import Vue from 'vue';
import App from '@/App.ts';
import router from './router';
import store from './store';
/**
 * Import Semantic UI
 */

// import 'semantic-ui/themes/default/assets/fonts/icons.woff';

// /* reset */
// import 'semantic-ui/components/reset.min.css';

// /* site */
// import 'semantic-ui/components/site.min.css';

// /* grid */
// import 'semantic-ui/components/grid.min.css';

// /* container */
// import 'semantic-ui/components/container.min.css';

// /* ad */
// import 'semantic-ui/components/ad.min.css';

// /* breadcrumb */
// import 'semantic-ui/components/breadcrumb.min.css';

// /* button */
// import 'semantic-ui/components/button.min.css';

// /* card */
// import 'semantic-ui/components/card.min.css';

// /* comment */
// import 'semantic-ui/components/comment.min.css';

// /* divider */
// import 'semantic-ui/components/divider.min.css';

// /* feed */
// import 'semantic-ui/components/feed.min.css';

// /* flag */
// import 'semantic-ui/components/flag.min.css';

// /* header */
// import 'semantic-ui/components/header.min.css';

// /* icon */
// import 'semantic-ui/components/icon.min.css';

// /* image */
// import 'semantic-ui/components/image.min.css';

// /* input */
// import 'semantic-ui/components/input.min.css';

// /* item */
// import 'semantic-ui/components/item.min.css';

// /* label */
// import 'semantic-ui/components/label.min.css';

// /* list */
// import 'semantic-ui/components/list.min.css';

// /* loader */
// import 'semantic-ui/components/loader.min.css';

// /* menu */
// import 'semantic-ui/components/menu.min.css';

// /* message */
// import 'semantic-ui/components/message.min.css';

// /* placeholder */
// import 'semantic-ui/components/placeholder.min.css';

// /* rail */
// import 'semantic-ui/components/rail.min.css';

// /* reveal */
// import 'semantic-ui/components/reveal.min.css';

// /* segment */
// import 'semantic-ui/components/segment.min.css';

// /* step */
// import 'semantic-ui/components/step.min.css';

// /* table */
// import 'semantic-ui/components/table.min.css';

// /* accordion */
// import 'semantic-ui/components/accordion.min.css';

// /* checkbox */
// import 'semantic-ui/components/checkbox.min.css';

// /* dimmer */
// import 'semantic-ui/components/dimmer.min.css';

// /* dropdown */
// import 'semantic-ui/components/dropdown.min.css';

// /* embed */
// import 'semantic-ui/components/embed.min.css';

// /* form */
// import 'semantic-ui/components/form.min.css';

// /* modal */
// import 'semantic-ui/components/modal.min.css';

// /* nag */
// import 'semantic-ui/components/nag.min.css';

// /* popup */
// import 'semantic-ui/components/popup.min.css';

// /* progress */
// import 'semantic-ui/components/progress.min.css';

// /* rating */
// import 'semantic-ui/components/rating.min.css';

// /* search */
// import 'semantic-ui/components/search.min.css';

// /* shape */
// import 'semantic-ui/components/shape.min.css';

// /* sidebar */
// import 'semantic-ui/components/sidebar.min.css';

// /* sticky */
// import 'semantic-ui/components/sticky.min.css';

// /* transition */
// import 'semantic-ui/components/transition.min.css';

// /* video */
// import 'semantic-ui/components/video.min.css';

import 'semantic-ui/semantic.min.css';
/**
 * End Import Semantic UI
 */
import './assets/css/custom.scss';
import './assets/css/helper.scss';
import './assets/css/color.scss';
import './assets/css/main.scss';

const jquery = require('jquery/dist/jquery.min.js');

(window as any).$ = jquery;
(window as any).jQuery = jquery;

// require('semantic-ui/components/site.js');
// require('semantic-ui/components/accordion.min.js');
// require('semantic-ui/components/api.min.js');
// require('semantic-ui/components/checkbox.min.js');
// // require('semantic-ui/components/colorize.min.js');
// require('semantic-ui/components/dimmer.min.js');
// require('semantic-ui/components/dropdown.min.js');
// require('semantic-ui/components/embed.min.js');
// require('semantic-ui/components/form.min.js');
// require('semantic-ui/components/modal.min.js');
// require('semantic-ui/components/nag.min.js');
// require('semantic-ui/components/popup.min.js');
// require('semantic-ui/components/progress.min.js');
// require('semantic-ui/components/rating.min.js');
// require('semantic-ui/components/search.min.js');
// require('semantic-ui/components/shape.min.js');
// require('semantic-ui/components/sidebar.min.js');
// // require('semantic-ui/components/state.min.js');
// require('semantic-ui/components/sticky.min.js');
// require('semantic-ui/components/transition.min.js');
// require('semantic-ui/components/video.min.js');
// require('semantic-ui/components/visibility.min.js');
// require('semantic-ui/components/visit.min.js');

require('semantic-ui/semantic.min.js');

// import { validateDirective } from './directives/index'

Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
// Vue.use({
//   install(Vue, options) {
//   },
// });

// Vue.directive('validate', validateDirective)
