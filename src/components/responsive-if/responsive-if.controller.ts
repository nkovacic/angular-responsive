import * as angular from 'angular';

import { ResponsiveEvents } from '../../angular-responsive.model'
import { IResponsiveBreakpoint, IResponsiveConfig, IResponsiveService } from '../../angular-responsive';

const directiveName = 'responsiveIf';

export class ResponsiveIfController {
	private block: ng.IAugmentedJQuery;
    private childScope: ng.IScope;
    private previousElements: ng.IAugmentedJQuery; 

	constructor(private $element: ng.IAugmentedJQuery, private $attrs: ng.IAttributes, private $scope: ng.IScope,
		private $animate: angular.animate.IAnimateService, private $injector: ng.auto.IInjectorService, private $transclude: ng.ITranscludeFunction, 
		private $q: ng.IQService, private ResponsiveConfig: IResponsiveConfig, private ResponsiveService: IResponsiveService) {
		'ngInject';

		if (angular.version.major === 1 && angular.version.minor < 5) {
			this.$onInit();
		}
	}

	public $onInit () {
		this.prepareWatchers();
	}
	/*
	private getAngularAnimate(): ng.animate.IAnimateService {
		if (this.$injector.has('$animate')) {
			return this.$injector.get('$animate');
		}

		return null;;
	}*/
	private checkBreakpointsVisibility() {
		const breakpoints = this.getBreakpoints();
		let	showElement = false;

		if (breakpoints.length) {
			angular.forEach(breakpoints, (breakpoint) => {
				if (!showElement && this.ResponsiveService.isCurrentBreakpoint(breakpoint)) {
					showElement = true;
				}
			});
		}

		this.toggleElementVisibilty(showElement);
	}
	private getBreakpoints()  {
		let breakpoints = this.$attrs[directiveName] ? <Array<string>>this.$scope.$eval(this.$attrs[directiveName]) : <Array<string>>[];

		if (!breakpoints && this.$attrs[directiveName]) {
			breakpoints = this.$attrs[directiveName].split(',');
		}

		if (breakpoints && breakpoints.length) {
			if (!angular.isArray(breakpoints)) {
	            breakpoints = <any>[breakpoints];
	        }
    	}
    	else {
    		for (let breakpointName in this.ResponsiveConfig) {
    			let breakpointDirectiveName = `${directiveName}${breakpointName}`.toLowerCase();

    			for (let attributeName in this.$attrs.$attr) {
    				if (breakpointDirectiveName === attributeName.toLowerCase() && breakpoints.indexOf(breakpointName) == -1) {
    					breakpoints.push(breakpointName);
    				}
    			}
    		}
    	}

        return breakpoints;
	}
	private getBlockNodes(nodes: angular.IAugmentedJQuery) {
        let node = nodes[0],
            endNode = nodes[nodes.length - 1],
            blockNodes = [node];

        do {
            node = <HTMLElement>node.nextSibling;

            if (!node) {
                break;
            }

            blockNodes.push(node);
        } while (node !== endNode);

        return angular.element(blockNodes);
    }
    private toggleElementVisibilty(showElement?: boolean) {
        if (showElement) {
            if (!this.childScope) {
                this.$transclude((clone: angular.IAugmentedJQuery, newScope) => {
                    this.childScope = newScope;
                    clone[clone.length++] = <HTMLElement><any>document.createComment(" end responsiveIf");
                    // Note: We only need the first/last node of the cloned nodes.
                    // However, we need to keep the reference to the jqlite wrapper as it might be changed later
                    // by a directive with templateUrl when its template arrives.
                    this.block = clone;

                    this.$animate.enter(clone, this.$element.parent(), this.$element);               
                });
            }
        }
        else {
            if (this.previousElements) {
                this.previousElements.remove();
                this.previousElements = null;
            }

            if (this.childScope) {
                this.childScope.$destroy();
                this.childScope = null;
            }

            if (this.block) {
                this.previousElements = this.getBlockNodes(this.block);

                this.$animate.leave(this.previousElements).then(() => {
                    this.previousElements = null;
                });

                this.block = null;
            }
            //element.removeClass("hidden");
        }
    }
	private prepareWatchers() {
		this.$attrs.$observe(directiveName, (breakpoints: string[]) => {
			this.checkBreakpointsVisibility();
		});

		this.$scope.$on(ResponsiveEvents.resize, (e, currentBreakpoint: IResponsiveBreakpoint) => {
			this.checkBreakpointsVisibility();
		});
	}
}