//@ts-check
///<reference path="Characteristic.d.ts" />
"use strict";
var formCharacteristic_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormCharacteristic_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCharacteristic_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formCharacteristic_Information = (function () {
	"use strict";
	/** @type DevKit.FormCharacteristic_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormCharacteristic_Information(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formSkill_Main_Form = (function () {
	"use strict";
	/** @type DevKit.FormSkill_Main_Form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormSkill_Main_Form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();