'use strict';
/** @namespace LuckyStar */
var LuckyStar;
(function (LuckyStar) {
	'use strict';
	LuckyStar.FormFeedback = function(executionContext, defaultWebResourceName) {
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
			ClosedBy: {},
			ClosedOn: {},
			Comments: {},
			CreatedBy: {},
			CreatedByContact: {},
			CreatedOn: {},
			MaxRating: {},
			MinRating: {},
			Rating: {},
			RegardingObjectId: {},
			Source: {},
			Title: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					feedback_Details: {},
					feedback_Contacts: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			NormalizedRating: {},
			OwnerId: {},
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
	LuckyStar.FormFeedback_MainIC = function(executionContext, defaultWebResourceName) {
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
			ClosedBy: {},
			ClosedOn: {},
			Comments: {},
			CreatedBy: {},
			CreatedByContact: {},
			MaxRating: {},
			MinRating: {},
			NormalizedRating: {},
			Rating: {},
			RegardingObjectId: {},
			Source: {},
			Title: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					General_Info: {},
					Content: {},
					Content: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedOn: {},
			OwnerId: {},
			StateCode: {},
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
	LuckyStar.FormFeedback_Quick_Create = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			Comments: {},
			CreatedByContact: {},
			MaxRating: {},
			MinRating: {},
			OwnerId: {},
			Rating: {},
			RegardingObjectId: {},
			Source: {},
			StatusCode: {},
			Title: {}
		}
		devKit.LoadFields(formContext, body);
		var tab = {
			general: {
				Section: {
					feedback_Details: {},
					feedback_Contacts: {}
				}
			}
		}
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	}
})(LuckyStar || (LuckyStar = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Feedback = {
		Source : {
			Internal: 0,
			Portal: 1
		},
		StateCode : {
			Open: 0,
			Closed: 1
		},
		StatusCode : {
			Proposed: 1,
			Accepted: 2,
			Closed: 3,
			Rejected: 4
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