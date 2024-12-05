'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyncrm_linkedinconfiguration_Information = function(executionContext, defaultWebResourceName) {
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
			msdyncr2_synchronizecampaigns: {},
			msdyncrm_authenticationresource: {},
			msdyncrm_authenticationtokenendpoint: {},
			msdyncrm_authenticationtype: {},
			msdyncrm_clientId: {},
			msdyncrm_configcacheexpirationdate: {},
			msdyncrm_configcacheexpirationperiodinms: {},
			msdyncrm_discoveryendpointurl: {},
			msdyncrm_OnMatchingFail: {},
			msdyncrm_organization_config: {},
			msdyncrm_redirectUrl: {},
			msdyncrm_s2sinboundconfigurl: {},
			msdyncrm_servicepublicid: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

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
	OptionSet.msdyncrm_linkedinconfiguration = {
		msdyncrm_authenticationtype : {
			Basic_Authentication: 192350001,
			Bearer_Authentication: 192350000
		},
		msdyncrm_OnMatchingFail : {
			Create_new_lead: 192350001,
			Ignore: 192350000
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