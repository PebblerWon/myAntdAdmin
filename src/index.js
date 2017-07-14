import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading'
import {hashHistory, browserHistory } from 'dva/router'
import { message } from 'antd'

// 1. Initialize
const app = dva({
	history: browserHistory,
	//history: hashHistory,
	...createLoading({
		effects:true,
	}),
	onError(error){
		message.error(error.message)
	}
});

// 2. Plugins
// app.use({});

// 3. Model

app.model(require('./models/app'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
