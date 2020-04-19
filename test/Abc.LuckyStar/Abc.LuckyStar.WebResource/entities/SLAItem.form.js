'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.FormSLAItem_Information = function(executionContext, defaultWebResourceName) {
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
			ActionURL: {},
			AllowPauseResume: {},
			ApplicableEntity: {},
			applicablewhencontrol: {},
			BusinessHoursId: {},
			FailureAfter: {},
			FailureAfter_1: {},
			msdyn_slakpiid: {},
			Name: {},
			Name_1: {},
			relatedcasefield: {},
			successconditioncontrol: {},
			WarnAfter: {},
			WarnAfter_1: {},
			WebResource_preview: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			: {
				Section: {
					ruleidinformation: {},
					applicablewhen: {},
					successcriteria: {},
					slaitemsucessaction: {},
					slaitemfailure: {},
					slaitemfailureaction: {},
					slaitemwarning: {},
					slaitemwarningAction: {}
				}
			},
			tabUC: {
				Section: {
					ApplicableWhen: {},
					SuccessConditions: {},
					Warn_and_Fail_Duration: {},
					Actions: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			SLAId: {}
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
	OptionSet.SLAItem = {
		ComponentState : {
			Published: 0,
			Unpublished: 1,
			Deleted: 2,
			Deleted_Unpublished: 3
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