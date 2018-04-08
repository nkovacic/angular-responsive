import { IDirective } from 'angular';

import { ResponsiveIfController } from './responsive-if.controller';

export class ResponsiveIfDirective implements IDirective {
	public multiElement = true;
    public transclude = <any>'element';
    public terminal = true;
	public restrict = 'A';
    public controller = ResponsiveIfController;
}