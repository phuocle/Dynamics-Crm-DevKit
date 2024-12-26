//@ts-check
///<reference path="KnowledgeBaseRecord.d.ts" />
"use strict";
var formBai_viet_trong_Co_so_kien_thuc = (function () {
	"use strict";
	/** @type DevKit.FormBai_viet_trong_Co_so_kien_thuc */
	var form = null;
	async function onLoad(executionContext) {
		form = new DevKit.FormBai_viet_trong_Co_so_kien_thuc(executionContext);
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