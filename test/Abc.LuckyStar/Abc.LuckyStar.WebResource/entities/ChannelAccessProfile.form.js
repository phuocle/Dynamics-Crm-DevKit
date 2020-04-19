'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.FormChannelAccessProfile_Information = function(executionContext, defaultWebResourceName) {
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
			EntityPermissions: {
				Section: {
					tab_2_section_1: {}
				}
			},
			ChannelAccess: {
				Section: {
					tab_3_section_1: {},
					tab_3_section_2: {}
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
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {

		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.ChannelAccessProfile = {
		ComponentState : {
			Published: 0,
			Unpublished: 1,
			Deleted: 2,
			Deleted_Unpublished: 3
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