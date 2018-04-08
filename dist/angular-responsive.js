/*!
* angular-responsive JavaScript Library v1.8.3
*
* @license MIT
*
* built with ♥ by Niko Kovačič <niko.kovacic2@gmail.com>
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else if(typeof exports === 'object')
		exports["angular-responsive"] = factory(require("angular"));
	else
		root["angular-responsive"] = factory(root["angular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var ResponsiveBreakpointName;
	(function (ResponsiveBreakpointName) {
	    ResponsiveBreakpointName[ResponsiveBreakpointName["custom"] = 'custom'] = "custom";
	    ResponsiveBreakpointName[ResponsiveBreakpointName["mobile"] = 'mobile'] = "mobile";
	    ResponsiveBreakpointName[ResponsiveBreakpointName["tablet"] = 'tablet'] = "tablet";
	    ResponsiveBreakpointName[ResponsiveBreakpointName["desktop"] = 'desktop'] = "desktop";
	    ResponsiveBreakpointName[ResponsiveBreakpointName["large"] = 'large'] = "large";
	    ResponsiveBreakpointName[ResponsiveBreakpointName["extraLarge"] = 'extraLarge'] = "extraLarge";
	    ResponsiveBreakpointName[ResponsiveBreakpointName["infinite"] = 'infinite'] = "infinite";
	    ResponsiveBreakpointName[ResponsiveBreakpointName["zero"] = 'zero'] = "zero";
	})(ResponsiveBreakpointName = exports.ResponsiveBreakpointName || (exports.ResponsiveBreakpointName = {}));
	exports.ResponsiveEvents = {
	    resize: 'responsive:resize'
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular_es6_1 = __webpack_require__(8);
	var responsive_if_directive_1 = __webpack_require__(5);
	var responsive_config_1 = __webpack_require__(6);
	var responsive_service_1 = __webpack_require__(7);
	var angular_responsive_model_1 = __webpack_require__(1);
	exports.ResponsiveBreakpointName = angular_responsive_model_1.ResponsiveBreakpointName;
	exports.ResponsiveEvents = angular_responsive_model_1.ResponsiveEvents;
	var moduleName = angular_es6_1.AngularES6.module('nk.responsive').directive('responsiveIf', responsive_if_directive_1.ResponsiveIfDirective).provider('ResponsiveConfig', responsive_config_1.ResponsiveConfig).service('ResponsiveService', responsive_service_1.ResponsiveService).name;
	exports.moduleName = moduleName;
	exports["default"] = moduleName;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular = __webpack_require__(2);
	var angular_responsive_model_1 = __webpack_require__(1);
	var directiveName = 'responsiveIf';
	var ResponsiveIfController = /** @class */(function () {
	    ResponsiveIfController.$inject = ["$element", "$attrs", "$scope", "$animate", "$injector", "$transclude", "$q", "ResponsiveConfig", "ResponsiveService"];
	    function ResponsiveIfController($element, $attrs, $scope, $animate, $injector, $transclude, $q, ResponsiveConfig, ResponsiveService) {
	        'ngInject';
	        this.$element = $element;
	        this.$attrs = $attrs;
	        this.$scope = $scope;
	        this.$animate = $animate;
	        this.$injector = $injector;
	        this.$transclude = $transclude;
	        this.$q = $q;
	        this.ResponsiveConfig = ResponsiveConfig;
	        this.ResponsiveService = ResponsiveService;
	        if (angular.version.major === 1 && angular.version.minor < 5) {
	            this.$onInit();
	        }
	    }
	    ResponsiveIfController.prototype.$onInit = function () {
	        this.prepareWatchers();
	    };
	    /*
	    private getAngularAnimate(): ng.animate.IAnimateService {
	        if (this.$injector.has('$animate')) {
	            return this.$injector.get('$animate');
	        }
	          return null;;
	    }*/
	    ResponsiveIfController.prototype.checkBreakpointsVisibility = function () {
	        var _this = this;
	        var breakpoints = this.getBreakpoints();
	        var showElement = false;
	        if (breakpoints.length) {
	            angular.forEach(breakpoints, function (breakpoint) {
	                if (!showElement && _this.ResponsiveService.isCurrentBreakpoint(breakpoint)) {
	                    showElement = true;
	                }
	            });
	        }
	        this.toggleElementVisibilty(showElement);
	    };
	    ResponsiveIfController.prototype.getBreakpoints = function () {
	        var breakpoints = this.$attrs[directiveName] ? this.$scope.$eval(this.$attrs[directiveName]) : [];
	        if (!breakpoints && this.$attrs[directiveName]) {
	            breakpoints = this.$attrs[directiveName].split(',');
	        }
	        if (breakpoints && breakpoints.length) {
	            if (!angular.isArray(breakpoints)) {
	                breakpoints = [breakpoints];
	            }
	        } else {
	            for (var breakpointName in this.ResponsiveConfig) {
	                var breakpointDirectiveName = ("" + directiveName + breakpointName).toLowerCase();
	                for (var attributeName in this.$attrs.$attr) {
	                    if (breakpointDirectiveName === attributeName.toLowerCase() && breakpoints.indexOf(breakpointName) == -1) {
	                        breakpoints.push(breakpointName);
	                    }
	                }
	            }
	        }
	        return breakpoints;
	    };
	    ResponsiveIfController.prototype.getBlockNodes = function (nodes) {
	        var node = nodes[0],
	            endNode = nodes[nodes.length - 1],
	            blockNodes = [node];
	        do {
	            node = node.nextSibling;
	            if (!node) {
	                break;
	            }
	            blockNodes.push(node);
	        } while (node !== endNode);
	        return angular.element(blockNodes);
	    };
	    ResponsiveIfController.prototype.toggleElementVisibilty = function (showElement) {
	        var _this = this;
	        if (showElement) {
	            if (!this.childScope) {
	                this.$transclude(function (clone, newScope) {
	                    _this.childScope = newScope;
	                    clone[clone.length++] = document.createComment(" end responsiveIf");
	                    // Note: We only need the first/last node of the cloned nodes.
	                    // However, we need to keep the reference to the jqlite wrapper as it might be changed later
	                    // by a directive with templateUrl when its template arrives.
	                    _this.block = clone;
	                    _this.$animate.enter(clone, _this.$element.parent(), _this.$element);
	                });
	            }
	        } else {
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
	                this.$animate.leave(this.previousElements).then(function () {
	                    _this.previousElements = null;
	                });
	                this.block = null;
	            }
	            //element.removeClass("hidden");
	        }
	    };
	    ResponsiveIfController.prototype.prepareWatchers = function () {
	        var _this = this;
	        this.$attrs.$observe(directiveName, function (breakpoints) {
	            _this.checkBreakpointsVisibility();
	        });
	        this.$scope.$on(angular_responsive_model_1.ResponsiveEvents.resize, function (e, currentBreakpoint) {
	            _this.checkBreakpointsVisibility();
	        });
	    };
	    return ResponsiveIfController;
	})();
	exports.ResponsiveIfController = ResponsiveIfController;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var responsive_if_controller_1 = __webpack_require__(4);
	var ResponsiveIfDirective = /** @class */(function () {
	    function ResponsiveIfDirective() {
	        this.multiElement = true;
	        this.transclude = 'element';
	        this.terminal = true;
	        this.restrict = 'A';
	        this.controller = responsive_if_controller_1.ResponsiveIfController;
	    }
	    return ResponsiveIfDirective;
	})();
	exports.ResponsiveIfDirective = ResponsiveIfDirective;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular = __webpack_require__(2);
	var angular_responsive_model_1 = __webpack_require__(1);
	var ResponsiveConfig = /** @class */(function () {
	    function ResponsiveConfig() {
	        'ngInject';
	        var breakPoints = [{
	            name: angular_responsive_model_1.ResponsiveBreakpointName.mobile,
	            value: 450
	        }, {
	            name: angular_responsive_model_1.ResponsiveBreakpointName.tablet,
	            value: 768
	        }, {
	            name: angular_responsive_model_1.ResponsiveBreakpointName.desktop,
	            value: 992
	        }, {
	            name: angular_responsive_model_1.ResponsiveBreakpointName.large,
	            value: 1200
	        }, {
	            name: angular_responsive_model_1.ResponsiveBreakpointName.extraLarge,
	            value: 1440
	        }];
	        this.setBreakpoints(breakPoints);
	    }
	    ResponsiveConfig.prototype.setBreakpointsForBootstrap = function (version) {
	        if (version != 3 && version != 4) {
	            throw new Error('Bootstrap version can only be 3 or 4!');
	        }
	        var breakpoints;
	        if (version == 3) {
	            breakpoints = [{
	                name: angular_responsive_model_1.ResponsiveBreakpointName.mobile,
	                value: 0
	            }, {
	                name: angular_responsive_model_1.ResponsiveBreakpointName.tablet,
	                value: 768
	            }, {
	                name: angular_responsive_model_1.ResponsiveBreakpointName.desktop,
	                value: 992
	            }, {
	                name: angular_responsive_model_1.ResponsiveBreakpointName.large,
	                value: 1200
	            }];
	        } else if (version == 4) {
	            breakpoints = [{
	                name: angular_responsive_model_1.ResponsiveBreakpointName.mobile,
	                value: 0
	            }, {
	                name: angular_responsive_model_1.ResponsiveBreakpointName.tablet,
	                value: 576
	            }, {
	                name: angular_responsive_model_1.ResponsiveBreakpointName.desktop,
	                value: 768
	            }, {
	                name: angular_responsive_model_1.ResponsiveBreakpointName.large,
	                value: 992
	            }, {
	                name: angular_responsive_model_1.ResponsiveBreakpointName.extraLarge,
	                value: 1200
	            }];
	        }
	    };
	    ResponsiveConfig.prototype.setBreakpoints = function (breakpoints) {
	        var _this = this;
	        if (!this.breakpointsObject) {
	            this.breakpointsObject = {};
	        }
	        if (breakpoints && breakpoints.length) {
	            angular.forEach(breakpoints, function (breakpoint) {
	                _this.breakpointsObject[breakpoint.name] = breakpoint.value;
	            });
	        }
	    };
	    ResponsiveConfig.prototype.$get = function () {
	        return this.breakpointsObject;
	    };
	    return ResponsiveConfig;
	})();
	exports.ResponsiveConfig = ResponsiveConfig;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular = __webpack_require__(2);
	var angular_responsive_model_1 = __webpack_require__(1);
	var ResponsiveService = /** @class */(function () {
	    ResponsiveService.$inject = ["$rootScope", "$window", "ResponsiveConfig"];
	    function ResponsiveService($rootScope, $window, ResponsiveConfig) {
	        'ngInject';
	        this.$rootScope = $rootScope;
	        this.$window = $window;
	        this.ResponsiveConfig = ResponsiveConfig;
	        this.prepareBreakpoints();
	        this.checkAllBreakpoints();
	        this.prepareWatchers();
	    }
	    ResponsiveService.prototype.getCurrentBreakpoint = function () {
	        var currentBreakpoint;
	        angular.forEach(this.breakpoints, function (breakpointCheck) {
	            if (!breakpointCheck.isGreater) {
	                currentBreakpoint = breakpointCheck.breakpoint;
	            }
	        });
	        if (!currentBreakpoint) {
	            return this.breakpoints[0].breakpoint;
	        } else {
	            return currentBreakpoint;
	        }
	    };
	    ResponsiveService.prototype.isCurrentBreakpoint = function (breakpointName) {
	        var currentBreakpoint = this.getCurrentBreakpoint();
	        return currentBreakpoint && currentBreakpoint.name == breakpointName;
	    };
	    ResponsiveService.prototype.isDesktopWidth = function () {
	        return this.isCurrentBreakpoint(angular_responsive_model_1.ResponsiveBreakpointName.desktop);
	    };
	    ResponsiveService.prototype.isExtraLargeWidth = function () {
	        return this.isCurrentBreakpoint(angular_responsive_model_1.ResponsiveBreakpointName.extraLarge);
	    };
	    ResponsiveService.prototype.isMobileWidth = function () {
	        return this.isCurrentBreakpoint(angular_responsive_model_1.ResponsiveBreakpointName.mobile);
	    };
	    ResponsiveService.prototype.isLargeDesktopWidth = function () {
	        return this.isCurrentBreakpoint(angular_responsive_model_1.ResponsiveBreakpointName.large);
	    };
	    ResponsiveService.prototype.isTabletWidth = function () {
	        return this.isCurrentBreakpoint(angular_responsive_model_1.ResponsiveBreakpointName.tablet);
	    };
	    ResponsiveService.prototype.isWidthBetween = function (smallerBreakpointName, largerBreakpointName) {
	        return this.isWidthLarger(smallerBreakpointName) && this.isWidthSmaller(largerBreakpointName);
	    };
	    ResponsiveService.prototype.isWidthLarger = function (breakpointName) {
	        for (var i = 0; i < this.breakpoints.length; i++) {
	            if (this.breakpoints[i].breakpoint.name == breakpointName) {
	                return this.breakpoints[i].isGreater;
	            }
	        }
	        return false;
	    };
	    ResponsiveService.prototype.isWidthSmaller = function (breakpointName) {
	        return !this.isWidthLarger(breakpointName);
	    };
	    ResponsiveService.prototype.checkAllBreakpoints = function () {
	        var windowSize = this.getWindowSize();
	        angular.forEach(this.breakpoints, function (breakpointCheck) {
	            breakpointCheck.isGreater = breakpointCheck.breakpoint.value > windowSize;
	        });
	    };
	    ResponsiveService.prototype.getWindowSize = function () {
	        return this.$window.innerWidth;
	    };
	    ResponsiveService.prototype.prepareBreakpoints = function () {
	        this.breakpoints = [];
	        for (var breakpointName in this.ResponsiveConfig) {
	            this.breakpoints.push({
	                breakpoint: {
	                    name: breakpointName,
	                    value: this.ResponsiveConfig[breakpointName]
	                },
	                isGreater: false
	            });
	        }
	        this.breakpoints = this.breakpoints.sort(function (a, b) {
	            return a.breakpoint.value > b.breakpoint.value ? 1 : -1;
	        });
	    };
	    ResponsiveService.prototype.prepareWatchers = function () {
	        var _this = this;
	        angular.element(this.$window).bind('resize', function (e) {
	            _this.checkAllBreakpoints();
	            _this.$rootScope.$broadcast(angular_responsive_model_1.ResponsiveEvents.resize, _this.getCurrentBreakpoint());
	        });
	    };
	    return ResponsiveService;
	})();
	exports.ResponsiveService = ResponsiveService;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	Object.defineProperty(exports, "__esModule", { value: true });
	var angular = __webpack_require__(2);
	var AngularES6 = /** @class */(function () {
	    function AngularES6(moduleName, dependancies) {
	        dependancies = dependancies || [];
	        this.name = moduleName;
	        this.angularModule = angular.module(moduleName, dependancies);
	    }
	    AngularES6.module = function (moduleName, dependancies) {
	        dependancies = dependancies || [];
	        return new AngularES6(moduleName, dependancies);
	    };
	    AngularES6.prototype.constant = function (name, value) {
	        this.angularModule.constant(name, value);
	        return this;
	    };
	    AngularES6.prototype.config = function (configFn) {
	        this.angularModule.config(configFn);
	        return this;
	    };
	    AngularES6.prototype.controller = function (name, constructorFn) {
	        this.angularModule.controller(name, constructorFn);
	        return this;
	    };
	    AngularES6.prototype.directive = function (name, constructorFn) {
	        var normalizedConstructorFn = this.normalizeConstructor(constructorFn);
	        if (!normalizedConstructorFn.prototype.compile) {
	            // create an empty compile function if none was defined.
	            normalizedConstructorFn.prototype.compile = function () {};
	        }
	        var originalCompileFn = this.cloneFunction(normalizedConstructorFn.prototype.compile);
	        // Decorate the compile method to automatically return the link method (if it exists)
	        // and bind it to the context of the constructor (so `this` works correctly).
	        // This gets around the problem of a non-lexical "this" which occurs when the directive class itself
	        // returns `this.link` from within the compile function.
	        this.override(normalizedConstructorFn.prototype, 'compile', function () {
	            return function () {
	                originalCompileFn.apply(this, arguments);
	                if (normalizedConstructorFn.prototype.link) {
	                    return normalizedConstructorFn.prototype.link.bind(this);
	                }
	            };
	        });
	        var factoryArray = this.createFactoryArray(constructorFn);
	        this.angularModule.directive(name, factoryArray);
	        return this;
	    };
	    AngularES6.prototype.factory = function (name, constructorFn) {
	        constructorFn = this.normalizeConstructor(constructorFn);
	        var factoryArray = this.createFactoryArray(constructorFn);
	        this.angularModule.factory(name, factoryArray);
	        return this;
	    };
	    AngularES6.prototype.filter = function (name, constructorFn) {
	        //filterConstructorFn = this.normalizeConstructor(filterConstructorFn);
	        var filterArray = this.createFilterArray(constructorFn);
	        this.angularModule.filter(name, filterArray);
	        return this;
	    };
	    AngularES6.prototype.service = function (name, constructorFn) {
	        this.angularModule.service(name, constructorFn);
	        return this;
	    };
	    AngularES6.prototype.provider = function (name, constructorFn) {
	        this.angularModule.provider(name, constructorFn);
	        return this;
	    };
	    AngularES6.prototype.run = function (initializationFunction) {
	        this.angularModule.run(initializationFunction);
	        return this;
	    };
	    AngularES6.prototype.normalizeConstructor = function (inputConstructorFn) {
	        var constructorFn;
	        if (angular.isArray(inputConstructorFn.constructor)) {
	            var injected = inputConstructorFn.slice(0, inputConstructorFn.length - 1);
	            constructorFn = inputConstructorFn[inputConstructorFn.length - 1];
	            constructorFn.$inject = injected;
	        } else {
	            constructorFn = inputConstructorFn;
	        }
	        return constructorFn;
	    };
	    /**
	     * Convert a constructor function into a factory function which returns a new instance of that
	     * constructor, with the correct dependencies automatically injected as arguments.
	     *
	     * In order to inject the dependencies, they must be attached to the constructor function with the
	     * `$inject` property annotation.
	     *
	     * @param constructorFn
	     * @returns {Array.<T>}
	     * @private
	     */
	    AngularES6.prototype.createFactoryArray = function (constructorFn) {
	        // get the array of dependencies that are needed by this component (as contained in the `$inject` array)
	        var args = constructorFn.$inject || [],
	            factoryArray = args.slice(); // create a copy of the array
	        // The factoryArray uses Angular's array notation whereby each element of the array is the name of a
	        // dependency, and the final item is the factory function itself.
	        factoryArray.push(function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            //return new constructorFn(...args);
	            var instance = new (constructorFn.bind.apply(constructorFn, [void 0].concat(args)))();
	            /*
	            for (var key in instance) {
	                instance[key] = instance[key];
	            }*/
	            return instance;
	        });
	        return factoryArray;
	    };
	    AngularES6.prototype.createFilterArray = function (constructorFn) {
	        // get the array of dependencies that are needed by this component (as contained in the `$inject` array)
	        var args = constructorFn.$inject || [],
	            filterArray = args.slice(); // create a copy of the array
	        // The factoryArray uses Angular's array notation whereby each element of the array is the name of a
	        // dependency, and the final item is the factory function itself.
	        filterArray.push(function () {
	            var args = [];
	            for (var _i = 0; _i < arguments.length; _i++) {
	                args[_i] = arguments[_i];
	            }
	            //return new constructorFn(...args);
	            var instance = new (constructorFn.bind.apply(constructorFn, [void 0].concat(args)))();
	            return instance.filter;
	        });
	        return filterArray;
	    };
	    /**
	     * Clone a function
	     * @param original
	     * @returns {Function}
	     */
	    AngularES6.prototype.cloneFunction = function (original) {
	        return function () {
	            return original.apply(this, arguments);
	        };
	    };
	    /**
	     * Override an object's method with a new one specified by `callback`.
	     * @param object
	     * @param methodName
	     * @param callback
	     */
	    AngularES6.prototype.override = function (object, methodName, callback) {
	        object[methodName] = callback(object[methodName]);
	    };
	    return AngularES6;
	})();
	exports.AngularES6 = AngularES6;

/***/ }
/******/ ])
});
;