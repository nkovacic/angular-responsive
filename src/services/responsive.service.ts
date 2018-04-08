import * as angular from 'angular';

import { ResponsiveBreakpointName, ResponsiveEvents } from '../angular-responsive.model';
import { IResponsiveConfig, IResponsiveBreakpoint, IResponsiveService } from '../angular-responsive';

interface IResponsiveBreakpointCheck {
    breakpoint: IResponsiveBreakpoint;
    isGreater: boolean;
}

export class ResponsiveService implements IResponsiveService {
    private breakpoints: Array<IResponsiveBreakpointCheck>;

    constructor(private $rootScope: ng.IRootScopeService, private $window: ng.IWindowService, private ResponsiveConfig: IResponsiveConfig) {
        'ngInject';

        this.prepareBreakpoints();
        this.checkAllBreakpoints();

        this.prepareWatchers();
    }

    public getCurrentBreakpoint() {
        let currentBreakpoint: IResponsiveBreakpoint;

        angular.forEach(this.breakpoints, (breakpointCheck) => {
            if (!breakpointCheck.isGreater) {
                currentBreakpoint = breakpointCheck.breakpoint;
            }
        });

        if (!currentBreakpoint) {
            return  this.breakpoints[0].breakpoint;
        }
        else {
            return currentBreakpoint;
        }
    }
    public isCurrentBreakpoint(breakpointName: ResponsiveBreakpointName | string) {
        let currentBreakpoint = this.getCurrentBreakpoint();

        return currentBreakpoint && currentBreakpoint.name == breakpointName;
    }
    public isDesktopWidth() {
        return this.isCurrentBreakpoint(ResponsiveBreakpointName.desktop);
    }
    public isExtraLargeWidth() {
        return this.isCurrentBreakpoint(ResponsiveBreakpointName.extraLarge);
    }
    public isMobileWidth() {
        return this.isCurrentBreakpoint(ResponsiveBreakpointName.mobile);
    }
    public isLargeDesktopWidth() {
        return this.isCurrentBreakpoint(ResponsiveBreakpointName.large);
    }
    public isTabletWidth() {
        return this.isCurrentBreakpoint(ResponsiveBreakpointName.tablet);
    }
    public isWidthBetween(smallerBreakpointName: ResponsiveBreakpointName | string, largerBreakpointName: ResponsiveBreakpointName | string) {
        return  this.isWidthLarger(smallerBreakpointName) && this.isWidthSmaller(largerBreakpointName);
    }
    public isWidthLarger(breakpointName: ResponsiveBreakpointName | string) {
        for (var i = 0; i < this.breakpoints.length; i++) {
            if (this.breakpoints[i].breakpoint.name == breakpointName) {
                return this.breakpoints[i].isGreater;
            }
        }

        return false;
    }
    public isWidthSmaller(breakpointName: ResponsiveBreakpointName | string) {
        return !this.isWidthLarger(breakpointName);
    }

    private checkAllBreakpoints() {
        let windowSize = this.getWindowSize();

        angular.forEach(this.breakpoints, (breakpointCheck) => {
            breakpointCheck.isGreater = breakpointCheck.breakpoint.value > windowSize
        });
    }
    private getWindowSize() {
        return this.$window.innerWidth;
    }
    private prepareBreakpoints() {
        this.breakpoints = [];

        for (var breakpointName in this.ResponsiveConfig) {
            this.breakpoints.push({
                breakpoint: {
                    name: <any>breakpointName,
                    value: this.ResponsiveConfig[breakpointName]
                },
                isGreater: false
            });
        }

        this.breakpoints = this.breakpoints.sort((a, b) => {
            return a.breakpoint.value > b.breakpoint.value ? 1 : -1;
        });
    }
    private prepareWatchers() {
        angular.element(this.$window).bind('resize', (e) => {
            this.checkAllBreakpoints();

            this.$rootScope.$broadcast(ResponsiveEvents.resize, this.getCurrentBreakpoint());
        });
    }
}