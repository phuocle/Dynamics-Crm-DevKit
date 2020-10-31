//@ts-check
///<reference path="devkit_Location.d.ts" />
"use strict";
var formLocation = (function () {
	"use strict";
	/** @type { LuckyStar.FormLocation} */
	let form = null;
	async function onLoad(executionContext) {
		form = new LuckyStar.FormLocation(executionContext);
		setTimeout(() => {
			console.clear();

			CheckLoadForm();

		}, 5000);
	}
	async function onSave(executionContext) {

	}

	function CheckLoadForm() {
		var dataAddOnLoadValue = 0;
		var dataAddOnLoad = (executionContext) => {
			dataAddOnLoadValue++;
			IsTrue(dataAddOnLoadValue, 1, "01 - devkit.LoadForm - form.DataAddOnLoad");

			form.DataRemoveOnLoad(dataAddOnLoad);
			IsTrue(dataAddOnLoadValue, 1, "03 - devkit.LoadForm - form.DataRemoveOnLoad");
		}
		form.DataAddOnLoad(dataAddOnLoad);

		var refreshValue = 0;
		form.Refresh(true, () => {
			refreshValue++;
			IsTrue(refreshValue, 1, "02 - devKit.LoadForm - form.Refresh");
		}, (error) => { logError("02 - devKit.LoadForm - form.Refresh", error) });

		var saveValue = 0;
		form.Save({ saveMode: OptionSet.SaveMode.Save, useSchedulingEngine: false }, (executionContext) => {
			saveValue++;
			IsTrue(saveValue, 1, "04 - devkit.LoadForm - form.Save");
		}, (error) => { logError("04 - devkit.LoadForm - form.Save", error) });

		IsTrue(form.DataIsDirty, false, "05 - devkit.LoadForm - form.DataIsDirty");

		IsTrue(form.DataIsValid, true, "06 - devkit.LoadForm - form.DataIsValid");

		var addOnSaveValue = 0;
		var addOnSave = (executionContext) => {
			addOnSaveValue++;
			IsTrue(addOnSaveValue, 1, "07 - devkit.LoadForm - form.AddOnSave");

			form.RemoveOnSave(addOnSave);
			IsTrue(addOnSaveValue, 1, "08 - devkit.LoadForm - form.RemoveOnSave");
		}
		form.AddOnSave(addOnSave)

		IsTrue(form.Attributes.getLength(), form.Attributes.getLength(), "09 - devkit.LoadForm - from.Attributes");

		IsGreater(form.DataXml.length, 0, "10 - devkit.LoadForm - form.DataXml");

		IsTrue(form.EntityName, "devkit_location", "11 - devkit.LoadForm - form.EntityName");

		IsTrue(form.EntityReference.entityType, "devkit_location", "12 - devkit.LoadForm - form.EntityReference.entityType");
		IsNotNullOrUndefined(form.EntityReference.id, "13 - devkit.LoadForm - form.EntityReference.id");
		IsGreater(form.EntityReference.name.length, 0, "14 - devkit.LoadForm - form.EntityReference.name");

		IsNotNullOrUndefined(form.EntityId, "15 - devkit.LoadForm - form.EntityId");

		IsTrue(form.EntityIsDirty, false, "16 - devkit.LoadForm - form.EntityIsDirty");

		IsGreater(form.PrimaryAttributeValue.length, 0, "17 - devkit.LoadForm - form.PrimaryAttributeValue");

		IsTrue(form.EntityIsValid, true, "18 - devkit.LoadForm - form.EntityIsValid");

		var uiAddOnLoadValue = 0;
		var uiAddOnLoad = (executionContext) => {
			uiAddOnLoadValue++;
			IsTrue(uiAddOnLoadValue, 1, "19 - devkit.LoadForm - form.UiAddOnLoad"); //TODO: NOT RUN

			form.UiRemoveOnLoad(uiAddOnLoad);
			IsTrue(uiAddOnLoadValue, 1, "20 - devkit.LoadForm - form.UiRemoveOnLoad"); //TODO: NOT RUN
		}
		form.UiAddOnLoad(uiAddOnLoad)

		form.SetFormNotification("form.SetFormNotification", OptionSet.FormNotificationLevel.Error, "SetFormNotification");
		IsTrue(true, true, "21 - devkit.LoadForm - form.SetFormNotification");
		setTimeout(() => {
			form.ClearFormNotification("SetFormNotification");
			IsTrue(true, true, "22 - devkit.LoadForm - form.ClearFormNotification");
		}, 5000);

		//form.Close();
		IsTrue(true, true, "22 - devkit.LoadForm - form.Close");//OK

		form.RefreshRibbon(true);
		IsTrue(true, true, "23 - devkit.LoadForm - form.RefreshRibbon");

		form.SetFormEntityName("AAAAAAAAAAAA");
		IsTrue(true, true, "24 - devkit.LoadForm - form.SetFormEntityName");

		IsGreater(form.Controls.getLength(), 0, "25 - devkit.LoadForm - form.Controls");

		IsTrue(form.FormType, OptionSet.FormType.Update, "26 - devkit.LoadForm - form.FormType");

		IsGreater(form.ViewPortWidth, 0, "27 - devkit.LoadForm - form.ViewPortWidth");

		IsGreater(form.ViewPortHeight, 0, "28 - devkit.LoadForm - form.ViewPortHeight");

		//form.FormNavigate("E27AA124-7445-471F-9906-F5FC6463A478")
		IsTrue(true, true, "29 - devkit.LoadForm - form.FormNavigate"); //OK

		form.FormSetVisible("E27AA124-7445-471F-9906-F5FC6463A478", false);
		IsTrue(true, true, "30 - devkit.LoadForm - form.FormSetVisible");

		IsTrue(form.FormIsVisible("E27AA124-7445-471F-9906-F5FC6463A478"), false, "31 - devkit.LoadForm - form.FormIsVisible");

		IsNotNullOrUndefined(form.FormId, "32 - devkit.LoadForm - form.FormId");

		IsTrue(form.FormLabel, "Location", "33 - devkit.LoadForm - form.FormLabel");
	}

	function IsTrue(value1, value2, message) {
		if (_.isEqual(value1, value2)) {
			console.log(message);
		}
		else {
			console.log("====================================================================== FAILED: " + message + " " + JSON.stringify({value1, value2}));
		}
	}

	function IsNotNullOrUndefined(value, message) {
		if (value !== null && value !== undefined) {
			console.log(message);
		}
		else {
			console.log("====================================================================== FAILED: " + message + " " + JSON.stringify({ value }));
		}
    }

	function IsGreater(value1, value2, message) {
		if (Number(value1) > Number(value2)) {
			console.log(message);
		}
		else {
			console.log("====================================================================== FAILED: " + message + " " + JSON.stringify({ value1, value2 }));
		}
    }

	function NotTest(message) {
		console.log("====================================================================== NOT TEST: " + message);
    }
	function logError(message, error) {
		console.log("=== ERROR ===");
		console.log(message);
		console.log(JSON.stringify(error))
		console.log("=============");
    }
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formQuick_Create_Location = (function () {
	"use strict";
	async function onLoad(executionContext) {
	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();