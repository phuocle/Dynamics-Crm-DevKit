//@ts-check
///<reference path="Account.d.ts" />
"use strict";
var formAccount = (function () {
	"use strict";
	/** @type DevKit.FormAccount */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount(executionContext);
	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formAccount_Mobile = (function () {
	"use strict";
	/** @type DevKit.FormAccount_Mobile */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount_Mobile(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formAccount_for_Interactive_experience = (function () {
	"use strict";
	/** @type DevKit.FormAccount_for_Interactive_experience */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount_for_Interactive_experience(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formAccount_for_Multisession_experience = (function () {
	"use strict";
	/** @type DevKit.FormAccount_for_Multisession_experience */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount_for_Multisession_experience(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formAccount_Quick_Create = (function () {
	"use strict";
	/** @type DevKit.FormAccount_Quick_Create */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount_Quick_Create(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formAccount_Quick_Create_Field_Service = (function () {
	"use strict";
	/** @type DevKit.FormAccount_Quick_Create_Field_Service */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount_Quick_Create_Field_Service(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formAccount_Sales_Insights = (function () {
	"use strict";
	/** @type DevKit.FormAccount_Sales_Insights */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormAccount_Sales_Insights(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();
var formTimelineWallControl_Account_Main = (function () {
	"use strict";
	/** @type DevKit.FormTimelineWallControl_Account_Main */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTimelineWallControl_Account_Main(executionContext);

	}
	async function onSave(executionContext) {
	}
	return {
		OnLoad: onLoad,
		OnSave: onSave
	};
})();