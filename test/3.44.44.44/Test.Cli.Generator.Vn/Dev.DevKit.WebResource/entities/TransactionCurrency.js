//@ts-check
///<reference path="TransactionCurrency.d.ts" />
"use strict";
var formTransactionCurrency_Information = (function () {
	"use strict";
	/** @type DevKit.FormTransactionCurrency_Information */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormTransactionCurrency_Information(executionContext);
		registerEvents();
		await onLoadData();
	}
	function registerEvents() {
		if (form.ExecutionContext.IsInitialLoad()) {
		}
	}
	//BEGIN ON LOAD ========================================================
	async function onLoadData() {
	}
	//END ON LOAD ==========================================================
	//BEGIN ON CHANGE ======================================================

	//END ON CHANGE ========================================================
	//BEGIN PRE SEARCH =====================================================

	//END PRE SEARCH =======================================================
	//BEGIN OTHERS =========================================================

	//END OTHERS ===========================================================
	return {
		OnLoad: onLoad
	};
})();