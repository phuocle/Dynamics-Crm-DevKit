import { FormAccount, FormAccount_DevKitV4, FormAccount_for_Interactive_experience, FormAccount_Quick_Create, FormAccount_Information } from './Account.form';
import { OptionSet } from './OptionSet';
const formAccount = (function () {
	"use strict";

	let form: FormAccount.Form;

	async function onLoad(executionContext: any): Promise<void> {
		form = new FormAccount.Form(executionContext);
		registerEvents();
		form.UiAddLoaded(UiAddLoaded);
		await TestTyping();
	}
	async function TestTyping() {
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
		var a81 = form.EntityReference.entityType;
		var a82 = form.EntityReference.id;
		var a83 = form.EntityReference.name;
		var a9 = form.FormId;
		var a10 = form.FormIsVisible("ABC");
		var a11 = form.FormLabel;
		form.FormNavigateToFormId("ABC");
		form.FormNavigateToFormLabel("ABC");
		form.FormSetVisible("ABC", false);
		var a12 = form.FormType;
		var a13 = form.PrimaryAttributeValue;
		form.Refresh();
		form.RefreshRibbon();
		form.RemoveOnPostSave(AddOnPostSave);
		form.Save();
		form.SetFormEntityName("ABC");
		form.SetFormNotification("ABC", OptionSet.FormNotificationLevel.Info, "ABC");
		form.UiAddLoaded(UiAddLoaded);
		form.UiRemoveOnLoad(UiAddLoaded);
		var a14 = form.ViewPortHeight;
		var a15 = form.ViewPortWidth;

		form.Copilot.ExecuteEvent("ABC", "DEF")?.then((data: any) => { });
		form.Copilot.ExecuteEvent("ABC", "DEF", ok, cancel);
		var a16 = await form.Copilot.ExecuteEvent("ABC", "DEF");
		form.Copilot.ExecutePrompt("ABC")?.then(data => { });
		form.Copilot.ExecutePrompt("ACB", ok, cancel);
		var a17 = await form.Copilot.ExecutePrompt("ABC");

		form.Grid.Contacts.AddOnLoad(AddOnLoad);
		var a18 = form.Grid.Contacts.EntityName;
		var a19 = form.Grid.Contacts.FetchXml;
		var a20 = form.Grid.Contacts.GridType;
		form.Grid.Contacts.OpenRelatedGrid();
		form.Grid.Contacts.Refresh();
		form.Grid.Contacts.RefreshRibbon();
		var a21 = form.Grid.Contacts.Relationship;
		var a21_1 = form.Grid.Contacts.Relationship.attributeName;
		var a21_2 = form.Grid.Contacts.Relationship.name;
		var a21_3 = form.Grid.Contacts.Relationship.navigationPropertyName;
		var a21_4 = form.Grid.Contacts.Relationship.relationshipType;
		var a21_5 = form.Grid.Contacts.Relationship.roleType;


		function ok() { }
		function cancel() { }
		function AddOnPostSave() { }
		function AddOnSave() { }
		function DataAddOnLoad() { }
		function AddOnLoad() { }
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