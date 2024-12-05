'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormContent_Block_Properties = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			CreatedBy: {},
			CreatedOn: {},
			entityimage: {},
			ModifiedBy: {},
			ModifiedOn: {},
			msdyncrm_available_in: {},
			msdyncrm_protected: {},
			msdyncrm_tags: {},
			msdyncrm_thumbnailimage: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			details_tab: {
				Section: {
					history_section: {},
					settings_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormDesigner_V2 = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			CreatedBy: {},
			CreatedOn: {},
			entityimage: {},
			ModifiedBy: {},
			ModifiedOn: {},
			msdyncrm_available_in: {},
			msdyncrm_designerhtml: {},
			msdyncrm_finalizedhtml: {},
			msdyncrm_name: {},
			msdyncrm_previewhtml: {},
			msdyncrm_protected: {},
			msdyncrm_tags: {},
			msdyncrm_thumbnailimage: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general_tab: {
				Section: {
					general_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyncrm_name: {},
			OwnerId: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormSave_as_block_properties = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined) {
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			entityimage: {},
			islive_param: {},
			isreadytosend_param: {},
			msdyncrm_name: {},
			msdyncrm_protected: {},
			msdyncrm_tags: {},
			msdyncrm_thumbnailimage: {},
			statuscode: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general_tab: {
				Section: {
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyncrm_contentblock = {
		msdyncrm_available_in : {
			Email: 192350000,
			Forms: 192350001,
			Pages: 192350002
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
			Draft: 192350000,
			Expired: 192350004,
			Live: 192350001,
			Live_editable: 192350003,
			Stopped: 192350002
		},
		RollupState : {
			NotCalculated: 0,
			Calculated: 1,
			OverflowError: 2,
			OtherError: 3,
			RetryLimitExceeded: 4,
			HierarchicalRecursionLimitReached: 5,
			LoopDetected: 6
		}
	};
})(OptionSet || (OptionSet = {}));