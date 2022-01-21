//@ts-check
///<reference path="Appointment.d.ts" />
"use strict";
var formAppointment = (function () {
	"use strict";
	/** @type DevKit.FormAppointment */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAppointment(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formAppointment_for_Interactive_experience = (function () {
	"use strict";
	/** @type DevKit.FormAppointment_for_Interactive_experience */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAppointment_for_Interactive_experience(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formAppointment_quick_create_form = (function () {
	"use strict";
	/** @type DevKit.FormAppointment_quick_create_form */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAppointment_quick_create_form(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formAppointment_Wizard = (function () {
	"use strict";
	/** @type DevKit.FormAppointment_Wizard */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAppointment_Wizard(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();