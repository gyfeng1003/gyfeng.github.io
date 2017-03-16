/*
* @Author: zhonghua
* @Date:   2017-03-12 15:10:37
* @Last Modified by:   zhonghua
* @Last Modified time: 2017-03-16 14:29:01
*/

'use strict';
/*require('style-loader!css-loader!./css/common.css');*/
import css from './css/common.css';
import Layer from './components/layer/layer.js';
const App = function () {
	// body...
	console.log(layer);
	var dom = document.getElementById("app");
	var layer = new Layer();
	dom.innerHTML = layer.tpl({
		name: 'johh',
		arr: ['apple','bannar','strawberry']
	});
}

new App();