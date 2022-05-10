'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormSuggestion = function(executionContext, defaultWebResourceName) {
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
			CadenceWidgetControl: {},
			msdyn_qualifiedrecord: {},
			msdyn_salesplay: {},
			msdyn_solutionarea: {},
			notescontrol: {},
			SuggestionWidgetControl: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			SUMMARY_TAB: {
				Section: {
					SOCIAL_PANE: {},
					Summary_CadenceWidget: {},
					Summary_RecommendedContacts: {},
					Summary_Suggestion: {},
					Summary_SuggestionWidget: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyn_potentialrevenue: {},
			msdyn_relatedrecord: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_salessuggestion = {
		msdyn_qualifiedrecordIdType : {
		},
		msdyn_relatedrecordIdType : {
		},
		msdyn_salesmotion : {
			Default: 1
		},
		msdyn_salesplay : {
			Default: 1
		},
		msdyn_solutionarea : {
			Default: 1
		},
		OwnerIdType : {
		},
		statecode : {
			Closed: 1,
			Declined: 2,
			Open: 0,
			Qualified: 3
		},
		statuscode : {
			Created_Opportunity: 4,
			Open: 1,
			Others_2: 2,
			Others_3: 3
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