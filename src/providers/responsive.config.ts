import * as angular from 'angular';

import { ResponsiveBreakpointName } from '../angular-responsive.model';
import { IResponsiveConfig, IResponsiveConfigProvider, IResponsiveBreakpoint, IResponsiveObject } from '../angular-responsive';

export class ResponsiveConfig implements IResponsiveConfigProvider, ng.IServiceProvider {
    private breakpointsObject: IResponsiveObject;

    constructor() {
        'ngInject';

        let breakPoints = <Array<IResponsiveBreakpoint>>[
            {
                name: ResponsiveBreakpointName.mobile,
                value: 450
            },
            {
                name: ResponsiveBreakpointName.tablet,
                value: 768
            },
            {
                name: ResponsiveBreakpointName.desktop,
                value: 992
            },
            {
                name: ResponsiveBreakpointName.large,
                value: 1200
            },
            {
                name: ResponsiveBreakpointName.extraLarge,
                value: 1440
            }
        ];

        this.setBreakpoints(breakPoints);
    }
    public setBreakpointsForBootstrap(version: number) {
        if (version != 3 && version != 4) {
            throw new Error('Bootstrap version can only be 3 or 4!');
            
        }

        let breakpoints: Array<IResponsiveBreakpoint>;

        if (version == 3) {
            breakpoints = [
                {
                    name: ResponsiveBreakpointName.mobile,
                    value: 0
                },
                {
                    name: ResponsiveBreakpointName.tablet,
                    value: 768
                },
                {
                    name: ResponsiveBreakpointName.desktop,
                    value: 992
                },
                {
                    name: ResponsiveBreakpointName.large,
                    value: 1200
                }
            ];
        }
        else if (version == 4) {
            breakpoints = [
                {
                    name: ResponsiveBreakpointName.mobile,
                    value: 0
                },
                {
                    name: ResponsiveBreakpointName.tablet,
                    value: 576
                },
                {
                    name: ResponsiveBreakpointName.desktop,
                    value: 768
                },
                {
                    name: ResponsiveBreakpointName.large,
                    value: 992
                },
                {
                    name: ResponsiveBreakpointName.extraLarge,
                    value: 1200
                }
            ];
        }        
        this.setBreakpoints(breakpoints);
    }
    public setBreakpoints(breakpoints: Array<IResponsiveBreakpoint>) {
        if (!this.breakpointsObject) {
            this.breakpointsObject = {};
        }

        if (breakpoints && breakpoints.length) {
            angular.forEach(breakpoints, (breakpoint) => {
                this.breakpointsObject[breakpoint.name] = breakpoint.value;
            });
        }
    }

    public $get() {
        return this.breakpointsObject;
    }
}
