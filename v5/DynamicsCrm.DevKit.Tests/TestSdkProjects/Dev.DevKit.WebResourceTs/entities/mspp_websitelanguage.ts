import { mspp_websitelanguage } from './mspp_websitelanguage.form';

//const formmspp_websitelanguage_Information = (function () {
//	"use strict";
//
//	let form: mspp_websitelanguage.mspp_websitelanguage_Information;
//
//	async function onLoad(executionContext: any): Promise<void> {
//		form = new mspp_websitelanguage.mspp_websitelanguage_Information(executionContext);
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

	let form: mspp_websitelanguage.AllInOne;

	async function onLoad(executionContext: any): Promise<void> {
		form = new mspp_websitelanguage.AllInOne(executionContext);
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

export { /* formmspp_websitelanguage_Information, */ formAllInOne };