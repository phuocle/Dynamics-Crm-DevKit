'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_assignmentrule_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Description: {},
			msdyn_DistributeTo: {},
			msdyn_DistributionType: {},
			msdyn_entityfilter: {},
			msdyn_evaluationorder: {},
			msdyn_matchtype: {},
			msdyn_name: {},
			msdyn_objecttypecode: {},
			msdyn_segmentid: {},
			msdyn_sellerfilter: {},
			msdyn_SpecificSellersOrTeams: {},
			msdyn_triggertype: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
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
	OptionSet.msdyn_assignmentrule = {
		msdyn_DistributeTo : {
			Sellers: 0,
			Team: 1
		},
		msdyn_DistributionType : {
			Load_Balancing: 1,
			RoundRobin: 0
		},
		msdyn_matchtype : {
			Any_Sellers: 2,
			Filter_using_Attributes: 0,
			Specific_List: 1
		},
		msdyn_objecttypecode : {
			Lead: 4,
			Opportunity: 3
		},
		msdyn_triggertype : {
			Entity_Create: 0,
			FieldUpdate: 1
		},
		OwnerIdType : {
		},
		statecode : {
			Active: 0,
			Inactive: 1
		},
		statuscode : {
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