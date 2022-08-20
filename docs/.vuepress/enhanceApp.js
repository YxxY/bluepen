// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { 
  Button, 
  Card,  
  Timeline,
  TimelineItem
} from 'element-ui';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Button);
  Vue.use(Card);
  Vue.use(Timeline);
  Vue.use(TimelineItem);
}

// import { Button } from 'element-ui';

// export default ({
//   Vue, // the version of Vue being used in the VuePress app
//   options, // the options for the root Vue instance
//   router, // the router instance for the app
//   siteData // site metadata
// }) => {
//   Vue.use(Button);
// }