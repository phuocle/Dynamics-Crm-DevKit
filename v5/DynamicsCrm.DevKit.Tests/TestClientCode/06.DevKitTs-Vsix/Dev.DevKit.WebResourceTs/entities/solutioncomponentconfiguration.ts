import { solutioncomponentconfiguration } from './solutioncomponentconfiguration.form';

//const formsolutioncomponentconfiguration_Information = (function () {
//	"use strict";
//
//	let form: solutioncomponentconfiguration.solutioncomponentconfiguration_Information;
//
//	async function onLoad(executionContext: any): Promise<void> {
//		form = new solutioncomponentconfiguration.solutioncomponentconfiguration_Information(executionContext);
//		registerEvents();
//		form.UiAddLoaded(UiAddLoaded);
//	}
//
//	function registerEvents(): void {
//		if (form.ExecutionContext.IsInitialLoad()) {
//		}
//	}
//
//	// ========================================================================
//	// BEGIN ON LOAD
//	// ========================================================================
//
//	async function UiAddLoaded(executionContext: any): Promise<void> {
//	}
//
//	// END ON LOAD
//	// ========================================================================
//
//	// ========================================================================
//	// BEGIN ON CHANGE
//	// ========================================================================
//
//	// END ON CHANGE
//	// ========================================================================
//
//	// ========================================================================
//	// BEGIN PRE SEARCH
//	// ========================================================================
//
//	// END PRE SEARCH
//	// ========================================================================
//
//	// ========================================================================
//	// BEGIN OTHERS
//	// ========================================================================
//
//	// END OTHERS
//	// ========================================================================
//
//	return {
//		OnLoad: onLoad
//	};
//})();

const formAllInOne = (function () {
	"use strict";

	let form: solutioncomponentconfiguration.AllInOne;

	async function onLoad(executionContext: any): Promise<void> {
		form = new solutioncomponentconfiguration.AllInOne(executionContext);
		registerEvents();
		form.UiAddLoaded(UiAddLoaded);
	}

	function registerEvents(): void {
		if (form.ExecutionContext.IsInitialLoad()) {
		}
	}

	// ========================================================================
	// BEGIN ON LOAD
	// ========================================================================

	async function UiAddLoaded(executionContext: any): Promise<void> {
	}

	// END ON LOAD
	// ========================================================================

	// ========================================================================
	// BEGIN ON CHANGE
	// ========================================================================

	// END ON CHANGE
	// ========================================================================

	// ========================================================================
	// BEGIN PRE SEARCH
	// ========================================================================

	// END PRE SEARCH
	// ========================================================================

	// ========================================================================
	// BEGIN OTHERS
	// ========================================================================

	// END OTHERS
	// ========================================================================

	return {
		OnLoad: onLoad
	};
})();

export { /* formsolutioncomponentconfiguration_Information, */ formAllInOne };