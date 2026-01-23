import { KnowledgeSourceProfile } from './KnowledgeSourceProfile.form';

//const formKnowledgeSourceProfile_Information = (function () {
//	"use strict";
//
//	let form: KnowledgeSourceProfile.KnowledgeSourceProfile_Information;
//
//	async function onLoad(executionContext: any): Promise<void> {
//		form = new KnowledgeSourceProfile.KnowledgeSourceProfile_Information(executionContext);
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

	let form: KnowledgeSourceProfile.AllInOne;

	async function onLoad(executionContext: any): Promise<void> {
		form = new KnowledgeSourceProfile.AllInOne(executionContext);
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

export { /* formKnowledgeSourceProfile_Information, */ formAllInOne };