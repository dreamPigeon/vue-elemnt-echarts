const homePage = () => import('@/views/homePage/homePage')
const Creatived = () => import('@/views/Creatived/Creatived')
export default [
    {
      name:'homePage',
      path: '/homePage',
      component: homePage,
    },
    {
        name:'Creatived',
        path: '/Creatived',
        component: Creatived,
    },
]