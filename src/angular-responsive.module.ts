import { AngularES6 } from './utilities/angular-es6';

import { ResponsiveIfDirective } from './components/responsive-if/responsive-if.directive';
import { ResponsiveConfig } from './providers/responsive.config';
import { ResponsiveService } from './services/responsive.service';

import { ResponsiveBreakpointName, ResponsiveEvents } from './angular-responsive.model';

let moduleName = AngularES6
	.module('nk.responsive')
	.directive('responsiveIf', ResponsiveIfDirective)	
	.provider('ResponsiveConfig', ResponsiveConfig)
	.service('ResponsiveService', ResponsiveService)
	.name;

export { moduleName, ResponsiveBreakpointName, ResponsiveEvents };
export default moduleName;	