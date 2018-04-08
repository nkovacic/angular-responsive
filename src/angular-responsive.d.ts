// Type definitions for Angular Responsive v1.0.0
// Project: https://github.com/nkovacic/angular-responsive
// Definitions by: Niko Kovačič <https://github.com/nkovacic>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

import * as angular from 'angular';

export type IResponsiveBreakpoint = angularResponsive.IResponsiveBreakpoint;
export type IResponsiveConfig = angularResponsive.IResponsiveConfig;
export type IResponsiveConfigProvider = angularResponsive.IResponsiveConfigProvider;
export type IResponsiveObject = angularResponsive.IResponsiveObject;
export type IResponsiveService = angularResponsive.IResponsiveService;

declare namespace angularResponsive {
	enum ResponsiveBreakpointName {
	    custom,
	    mobile,
	    tablet,
	    desktop,
	    large,
	    extraLarge,
	    infinite,
	    zero,
	}

	interface IResponsiveConfig extends IResponsiveObject { }

	interface IResponsiveConfigProvider {
	    setBreakpoints(breakpoints: Array<IResponsiveBreakpoint>): void;
	    setBreakpointsForBootstrap(version: number): void;
	}

	interface IResponsiveBreakpoint {
	    name: ResponsiveBreakpointName | string;
	    value: number;
	}

	interface IResponsiveObject {
	    [key: string]: number;
	}

	interface IResponsiveService {
		getCurrentBreakpoint(): IResponsiveBreakpoint;
		isCurrentBreakpoint(breakpointName: ResponsiveBreakpointName | string): boolean;
		isDesktopWidth(): boolean;
		isExtraLargeWidth(): boolean;
		isMobileWidth(): boolean;
		isLargeDesktopWidth(): boolean;
		isTabletWidth(): boolean;
		isWidthBetween(smallerBreakpointName: ResponsiveBreakpointName | string, largerBreakpointName: ResponsiveBreakpointName | string): boolean;
	    isWidthLarger(breakpointName: ResponsiveBreakpointName | string): boolean;
	    isWidthSmaller(breakpointName: ResponsiveBreakpointName | string): boolean;	    
	}
}