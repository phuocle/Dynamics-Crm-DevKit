import { FormAccount, FormAccount_DevKitV4, FormAccount_for_Interactive_experience, FormAccount_Quick_Create, FormAccount_Information } from './Account.form';

const formAccount = (function () {
	"use strict";

	let form: FormAccount.Form;

	async function onLoad(executionContext: any): Promise<void> {
		form = new FormAccount.Form(executionContext);
		registerEvents();
		form.UiAddLoaded(UiAddLoaded);
		TestTyping();
	}
	function TestTyping() {
		form.AddOnPostSave(AddOnPostSave);
		form.AddOnSave(AddOnSave);
		form.Attributes.forEach((item, index) => { });
		form.ClearFormNotification("ABC");
		form.Close();
		form.Controls.forEach((item, index) => { });
		form.DataAddOnLoad(DataAddOnLoad);
		var a1 = form.DataIsDirty;
		var a2 = form.DataIsValid;
		form.DataRemoveOnLoad(DataAddOnLoad);
		var a3 = form.DataXml;
		var a4 = form.EntityId;
		var a5 = form.EntityIsDirty;
		var a6 = form.EntityIsValid
		var a7 = form.EntityName;
		var a8 = form.EntityReference;
		var a81 = form.EntityReference


		function AddOnPostSave() {
		}
		function AddOnSave() {
		}
		function DataAddOnLoad() {

		}
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

const formAccount_DevKitV4 = (function () {
	"use strict";

	let form: FormAccount_DevKitV4.Form;

	async function onLoad(executionContext: any): Promise<void> {
		form = new FormAccount_DevKitV4.Form(executionContext);
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

const formAccount_for_Interactive_experience = (function () {
	"use strict";

	let form: FormAccount_for_Interactive_experience.Form;

	async function onLoad(executionContext: any): Promise<void> {
		form = new FormAccount_for_Interactive_experience.Form(executionContext);
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

const formAccount_Quick_Create = (function () {
	"use strict";

	let form: FormAccount_Quick_Create.Form;

	async function onLoad(executionContext: any): Promise<void> {
		form = new FormAccount_Quick_Create.Form(executionContext);
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

const formAccount_Information = (function () {
	"use strict";

	let form: FormAccount_Information.Form;

	async function onLoad(executionContext: any): Promise<void> {
		form = new FormAccount_Information.Form(executionContext);
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

export { formAccount, formAccount_DevKitV4, formAccount_for_Interactive_experience, formAccount_Quick_Create, formAccount_Information };