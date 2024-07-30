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
			AbsoluteURL: {},
			Description: {},
			LocationType: {},
			Name: {},
			OwnerId: {},
			ParentSiteOrLocation: {},
			RegardingObjectId: {},
			RelativeUrl: {},
			urloption: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					_272EB814_0769_5EBE_3ED1_E95A0B16853E: {},
					url_option: {}
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
	OptionSet.SharePointDocumentLocation = {
		LocationType : {
			Danh_rieng_cho_Tich_hop_OneNote: 1,
			Tong_quat: 0
		},
		ParentSiteOrLocationTypeCode : {
		},
		RegardingObjectTypeCode : {
		},
		ServiceType : {
			Cac_nhom_MS: 3,
			Duoc_chia_se_voi_toi: 2,
			OneDrive: 1,
			SharePoint: 0
		},
		StateCode : {
			Hien_hoat: 0,
			Khong_hoat_dong: 1
		},
		StatusCode : {
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