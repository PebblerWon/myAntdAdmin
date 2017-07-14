import React from 'react'
import PropTypes from 'prop-types'
import { Router } from 'dva/router'
import App from './routes/app'

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
}

const Routers = function ({ history, app }) {
  //console.log(app)
  const routes = [
    {
      path: '/login',
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          registerModel(app, require('./models/login'))
          cb(null, { component: require('./routes/login/') })
        }, 'login')
      },
    },
    {
      path: '/',
      component: App,
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          //registerModel(app, require('./models/Example'))
          cb(null, { component: require('./components/Example') })
        }, 'Example')
      },
      childRoutes: [
        {
          path: 'photo',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/photo'))
              cb(null, require('./routes/photo'))
            }, 'photo')
          },
        }, {
          path: 'user',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/user'))
              cb(null, require('./routes/user/'))
            }, 'user')
          },
        }, {
          path: 'users/:id',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/user/detail'))
              cb(null, require('./routes/user/Detail/'))
            }, 'user-detail')
          },
        }, {
          path: '*',
          getComponent (nextState, cb) {
            require.ensure([], require => {
              cb(null, require('./routes/error/'))
            }, 'error')
          },
        },
      ],
    },
  ]

  return <Router history={history} routes={routes} />
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers
