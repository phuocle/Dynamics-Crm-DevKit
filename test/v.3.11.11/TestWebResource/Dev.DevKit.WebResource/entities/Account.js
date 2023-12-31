//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount = (function () {
	"use strict";
	/** @type DevKit.FormAccount */
	var form = null;
	async function onLoad(executionContext) {
		//form = new DevKit.FormAccount(executionContext);
		//if (form.FormType === OptionSet.FormType.Create) {
		//	form.Body.Tab.RESOUCES_TAB.Visible = false;
		//	form.Body.Tab.DETAILS_TAB.Visible = false;
		//}
		//else if (form.FormType === OptionSet.FormType.Update) {
		//	form.Body.AccountNumber.Disabled = true;
		//}
		//form.Body.ParentAccountId.AddOnChange(ParentAccountIdAddOnChange);
		var formContext = executionContext.getFormContext();
		var formItem = formContext.ui.formSelector.getCurrentItem();
		var json = await Xrm.Utility.getEntityMainFormDescriptor(formContext.data.entity.getEntityName(), formItem.getId());
		debugger;

	}
	async function ParentAccountIdAddOnChange(executionContext) {
		//do the code add on change ...
	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();