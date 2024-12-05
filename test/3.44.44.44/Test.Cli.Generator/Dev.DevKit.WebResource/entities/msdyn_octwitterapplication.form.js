﻿'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_octwitterapplication_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_name: {},
			msdyn_twitterapplicationsaved: {},
			msdyn_twittercallbackurl: {},
			msdyn_twitterconsumerkey: {},
			msdyn_twitterconsumersecret: {},
			msdyn_twitterenvironmentname: {},
			OwnerId: {},
			TwitterHandles: {},
			WebResource_CopyTwitterCallbackUrl: {},
			WebResource_ShowHideTwitterConsumerKey: {},
			WebResource_ShowHideTwitterConsumerSecret: {},
			WebResource_TwitterAccountInstructions: {},
			WebResource_TwitterApplicationSaved: {},
			WebResource_TwitterCallbackUrlDisclaimer: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			TwitterHandles: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_msdyn_octwitterapplication_msdyn_octwitterhandle_octwitterapplicationid: {},
			msdyn_msdyn_octwitterapplication_msdyn_octwitterhandleprovisioningstatus_octwitterapplicationid: {},
			msdyn_msdyn_octwitterapplication_msdyn_octwitterhandlesecret_octwitterapplicationid: {}
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
	OptionSet.msdyn_octwitterapplication = {
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