    import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/readme',
                    component: resolve => require(['../components/page/Readme.vue'], resolve)
                },
                {
                    path: '/skill',
                    component: resolve => require(['../components/page/Skill.vue'], resolve)
                },
                {
                    path: '/inputrequirement',
                    component: resolve => require(['../components/page/InputRequirement.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/requirement',
                    component: resolve => require(['../components/page/Requirement.vue'], resolve)     // vue-datasource组件
                },
                {
                    path: '/create',
                    component: resolve => require(['../components/page/CreateRequirement.vue'], resolve)
                },
                {
                    path: '/step1',
                    component: resolve => require(['../components/estimation/StepOne.vue'], resolve)
                },
                //{
                //    path: '/step2',
                //    component: resolve => require(['../components/estimation/StepTwo.vue'], resolve)
                //},
                //{
                //    path: '/step3',
                //    component: resolve => require(['../components/estimation/StepThree.vue'], resolve)
                //},
                //{
                //    path: '/step4',
                //    component: resolve => require(['../components/estimation/StepFour.vue'], resolve)
                //},
                //{
                //    path: '/step5',
                //    component: resolve => require(['../components/estimation/StepFive.vue'], resolve)
                //},
                //{
                //    path: '/step6',
                //    component: resolve => require(['../components/estimation/StepSix.vue'], resolve)
                //},
                {
                    path: '/estimations',
                    component: resolve => require(['../components/estimation/EstimationRecords.vue'], resolve)
                },
                {
                    path: '/report',
                    component: resolve => require(['../components/estimation/EstimationReport.vue'], resolve)
                },
                {
                    path: '/records',
                    component: resolve => require(['../components/page/Requirement.vue'], resolve)
                },
                {
                    path: '/skillupload',
                    component: resolve => require(['../components/page/SkillUpload.vue'], resolve)       // Vue-Core-Image-Upload组件
                },
                {
                    path: '/requirement/:id',
                    name:'singlerequirement',
                    component: resolve => require(['../components/page/SingleRequirement.vue'], resolve)
                },
                {
                    path: '/project',
                    component: resolve => require(['../components/page/Project.vue'], resolve)       // Vue-Core-Image-Upload组件
                }

            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path:'/register',
            component:resolve =>require(['../components/page/Register.vue'],resolve)
        },
        {
          path:'/market',
          component:resolve =>require(['../components/market/Market.vue'],resolve)
        },
        {
          path:'/market/:id',
          name:'publicSingleRequirement',
          component: resolve => require(['../components/market/SingleRequirement.vue'], resolve)
        }

    ]
})
