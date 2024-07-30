'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormThong_tin = function(executionContext, defaultWebResourceName) {
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
			AllowedCustomProcessingStepType: {},
			BindingType: {},
			BoundEntityLogicalName: {},
			Description: {},
			DisplayName: {},
			ExecutePrivilegeName: {},
			IsFunction: {},
			IsPrivate: {},
			Name: {},
			OwnerId: {},
			PluginTypeId: {},
			UniqueName: {},
			WorkflowSdkStepEnabled: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			AIPluginOperation_CustomAPI_CustomAPI: {},
			catalogassignment_customapi: {},
			customapi_customapirequestparameter: {},
			customapi_customapiresponseproperty: {},
			customapi_serviceplanmapping: {},
			fabricaiskill_customapiid: {},
			msdyn_customapi_msdyn_pmbusinessruleautomationconfig_CustomApiId: {},
			msdyn_knowledgeassetconfiguration_customapiid: {}
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
	OptionSet.CustomAPI = {
		AllowedCustomProcessingStepType : {
			Chi_khong_dong_bo: 1,
			Dong_bo_va_khong_dong_bo: 2,
			Khong_co: 0
		},
		BindingType : {
			Bo_suu_tap_thuc_the: 2,
			Thuc_the: 1,
			Toan_cau: 0
		},
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
		},
		statecode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		statuscode : {
			Hien_hoat: 1,
			Khong_hoat_dong: 2
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