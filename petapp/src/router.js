import pethome from './components/pethome.vue'     
import shopping from './components/shopping.vue'
import shopparticulars from './components/shopparticulars.vue'     
import commodityDetails from './components/commodityDetails.vue'     
import service from './components/service.vue'     
import mycenter from './components/mycenter.vue'     
     

export default [
    {path:"/",component:pethome},
    // {path:'*',component:pethome},
    {path:"/shopping",component:shopping},
    {path:"/shopparticulars",component:shopparticulars},
    {path:"/commodityDetails",component:commodityDetails},
    {path:"/service",component:service},
    {path:"/mycenter",component:mycenter},
    
];
