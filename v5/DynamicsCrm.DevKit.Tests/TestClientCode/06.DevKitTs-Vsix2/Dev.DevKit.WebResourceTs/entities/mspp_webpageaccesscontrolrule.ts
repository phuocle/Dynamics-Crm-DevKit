import { mspp_webpageaccesscontrolrule } from './mspp_webpageaccesscontrolrule.form';

//const formmspp_webpageaccesscontrolrule_Information = (function () {
//	"use strict";
//
//	let form: mspp_webpageaccesscontrolrule.mspp_webpageaccesscontrolrule_Information;
//
//	async function onLoad(executionContext: any): Promise<void> {
//		form = new mspp_webpageaccesscontrolrule.mspp_webpageaccesscontrolrule_Information(executionContext);
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

	let form: mspp_webpageaccesscontrolrule.AllInOne;

	async function onLoad(executionContext: any): Promise<void> {
		form = new mspp_webpageaccesscontrolrule.AllInOne(executionContext);
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

export { /* formmspp_webpageaccesscontrolrule_Information, */ formAllInOne };