'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormRatingValue_Information = function(executionContext, defaultWebResourceName) {
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
			Name: {},
			notescontrol: {},
			RatingModel: {},
			Value: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_ratingvalue_msdyn_incidenttypecharacteristic_RatingValue: {},
			msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue: {},
			msdyn_ratingvalue_msdyn_requirementcharacteristic_ratingvalue: {},
			msdyn_ratingvalue_msdyn_workordercharacteristic_RatingValue: {},
			msdyn_ratingvalue_skillattachmenttarget: {},
			msdyn_rulesetdependencymapping_ratingvalue_msdyn_referencedpolymorphicentityid: {},
			ratingvalue_bookableresourcecharacteristic_RatingValue: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormRatingValue_Omnichannel_Information = function(executionContext, defaultWebResourceName) {
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
			Name: {},
			OwnerId: {},
			RatingModel: {},
			Value: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_23CA68C0_BDE9_4D73_884B_419A7610B5C6: {
				Section: {
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_ratingvalue_msdyn_incidenttypecharacteristic_RatingValue: {},
			msdyn_ratingvalue_msdyn_ocliveworkitemcharacteristic_ratingvalue: {},
			msdyn_ratingvalue_msdyn_requirementcharacteristic_ratingvalue: {},
			msdyn_ratingvalue_msdyn_workordercharacteristic_RatingValue: {},
			msdyn_ratingvalue_skillattachmenttarget: {},
			msdyn_rulesetdependencymapping_ratingvalue_msdyn_referencedpolymorphicentityid: {},
			ratingvalue_bookableresourcecharacteristic_RatingValue: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormRatingValue_Omnichannel_Information2 = function(executionContext, defaultWebResourceName) {
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
			Name: {},
			RatingModel: {},
			Value: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.RatingValue = {
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