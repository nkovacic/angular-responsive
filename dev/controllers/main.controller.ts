import { ResponsiveBreakpointName, ResponsiveEvents } from '../../src/angular-responsive.module'
import { IResponsiveService } from '../../src/angular-responsive';

export class MainController {
	public currentBreakpoint: string;

	constructor(private $scope: ng.IScope, private ResponsiveService: IResponsiveService) {
		'ngInject';

		this.setCurrentBreakpoint();
		this.prepareWatchers();
	}

	private prepareWatchers() {
		this.$scope.$on(ResponsiveEvents.resize, (e) => {
			this.setCurrentBreakpoint();
		});
	}
	private setCurrentBreakpoint() {
		let currentBreakpoint = this.ResponsiveService.getCurrentBreakpoint();

		if (currentBreakpoint) {
			this.currentBreakpoint = currentBreakpoint.name.toString();
		}
	}
}