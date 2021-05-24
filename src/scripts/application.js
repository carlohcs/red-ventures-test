import Home from './pages/Home'
;(function () {
  const handleInit = () => {
    const pagesComponents = [
      {
        class: 'page--home',
        component: Home
      }
    ]

    const currentPageClassList = document.body.classList

    for (const pageComponent of pagesComponents) {
      if (currentPageClassList.contains(pageComponent.class)) {
        try {
          new pageComponent.component().init()
          console.log('[Application] Started.')
        } catch (error) {
          console.error('[Application] Error in start application.', error)
        }

        break
      }
    }
  }

  // Init application
  handleInit()
})()
