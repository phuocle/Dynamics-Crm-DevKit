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
			EmailAccess: {},
			FacebookAccess: {},
			Name: {},
			notescontrol: {},
			OwnerId: {},
			PhoneAccess: {},
			RateKnowledgeArticles: {},
			Role_Control: {},
			SubmitFeedback: {},
			TwitterAccess: {},
			ViewArticleRating: {},
			ViewKnowledgeArticles: {},
			WebAccess: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			ChannelAccess: {
				Section: {
					tab_3_section_1: {},
					tab_3_section_2: {}
				}
			},
			EntityPermissions: {
				Section: {
					tab_2_section_1: {}
				}
			},
			KnowledgeSettings: {
				Section: {
					tab_4_section_1: {},
					tab_4_section_2: {}
				}
			},
			Note: {
				Section: {
					notes: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			StatusCode: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var navigation = {
			lk_externalpartyitem_channelaccessprofileid: {},
			profileruleitem_associated_channelaccessprofile: {}
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
	OptionSet.ChannelAccessProfile = {
		ComponentState : {
			Da_phat_hanh: 0,
			Da_xoa: 2,
			Da_xoa_Huy_phat_hanh: 3,
			Huy_phat_hanh: 1
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