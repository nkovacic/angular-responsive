import { moduleName } from '../src/angular-responsive.module';

import { AngularES6 } from '../src/utilities/angular-es6';
import { IResponsiveConfigProvider } from '../src/angular-responsive';

import './styles/vendor';
import 'font-awesome-webpack';

import { MainController } from './controllers/main.controller';

export default AngularES6
	.module('nk.responsive.test', [moduleName])
	.controller('MainController', MainController)
	.config((ResponsiveConfigProvider: IResponsiveConfigProvider) => {
		'ngInject';
	});