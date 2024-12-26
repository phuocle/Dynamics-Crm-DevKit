'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormChannelAccessProfile_Information = function(executionContext, defaultWebResourceName) {
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
			Deleted: 2,
			Deleted_Unpublished: 3,
			Published: 0,
			Unpublished: 1
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
			Active: 1,
			Inactive: 2
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