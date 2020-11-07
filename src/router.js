import Vue from "vue";
import Router from "vue-router";
import InProgress from "./views/InProgress.vue";
import NotFound from "./views/NotFound.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/DevelopersPoint.org",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/DevelopersPoint.org/about",
      component: () => import("./views/About.vue")
    },
    {
      path: "/DevelopersPoint.org/events",
      component: () => import("./views/Events.vue")
    },
    {
      path: "/DevelopersPoint.org/projects",
      component: InProgress
      // component: () => import("./views/Projects.vue")
    },
    {
      path: "/DevelopersPoint.org/team",
      component: () => import("./views/Team.vue")
    },
    {
      path: "*",
      component: NotFound
    }
  ],
  scrollBehavior: function(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 60 }
      };
    } else {
      return { x: 0, y: 0 };
    }
  }
});


export default router;
