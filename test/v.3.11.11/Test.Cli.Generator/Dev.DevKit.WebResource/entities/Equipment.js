//@ts-check
///<reference path="Equipment.d.ts" />
"use strict";
var formFacilityEquipment_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormFacilityEquipment_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormFacilityEquipment_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formEquipment_Information = (function () {
	"use strict";
	/** @type DevKit.FormEquipment_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormEquipment_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();