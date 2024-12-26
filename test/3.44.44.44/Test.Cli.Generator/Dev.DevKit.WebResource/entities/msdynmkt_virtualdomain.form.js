'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdynmkt_virtualdomain_Information = function(executionContext, defaultWebResourceName) {
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
			msdynmkt_name: {}
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
	OptionSet.msdynmkt_virtualdomain = {
		msdynmkt_domainalignmentvalidationstatus : {
			canceled: 2,
			Confirmed: 1,
			Confirming_DNS_registration: 4,
			Internal_error: 32,
			Keys_not_found_on_DNS: 30,
			Not_requested: 3,
			Record_not_found: 31,
			Waiting_to_confirm: 0
		},
		msdynmkt_emaildnsrecord1status : {
			canceled: 2,
			Confirmed: 1,
			Confirming_DNS_registration: 4,
			Internal_error: 32,
			Keys_not_found_on_DNS: 30,
			Not_requested: 3,
			Record_not_found: 31,
			Waiting_to_confirm: 0
		},
		msdynmkt_emaildnsrecord2status : {
			canceled: 2,
			Confirmed: 1,
			Confirming_DNS_registration: 4,
			Internal_error: 32,
			Keys_not_found_on_DNS: 30,
			Not_requested: 3,
			Record_not_found: 31,
			Waiting_to_confirm: 0
		},
		msdynmkt_ownershipvalidationstatus : {
			canceled: 2,
			Confirmed: 1,
			Confirming_DNS_registration: 4,
			Internal_error: 32,
			Keys_not_found_on_DNS: 30,
			Not_requested: 3,
			Record_not_found: 31,
			Waiting_to_confirm: 0
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