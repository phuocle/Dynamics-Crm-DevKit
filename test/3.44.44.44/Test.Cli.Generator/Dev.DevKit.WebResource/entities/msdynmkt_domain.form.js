'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormCXP_Authenticated_Business_Unit_Aware_Domain_Form = function(executionContext, defaultWebResourceName) {
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
			CreatedBy: {},
			CreatedOn: {},
			CreatedOnBehalfBy: {},
			ModifiedBy: {},
			ModifiedOn: {},
			ModifiedOnBehalfBy: {},
			msdynmkt_alignedname: {},
			msdynmkt_businessunitowned: {},
			msdynmkt_domainalignmentrecordhost: {},
			msdynmkt_domainalignmentrecordtype: {},
			msdynmkt_domainalignmentrecordvalue: {},
			msdynmkt_domainalignmentvalidationstatus: {},
			msdynmkt_emaildnsrecord1status: {},
			msdynmkt_emaildnsrecord2status: {},
			msdynmkt_emailhost1: {},
			msdynmkt_emailhost2: {},
			msdynmkt_emailkey1: {},
			msdynmkt_emailkey2: {},
			msdynmkt_emailtyperecord1: {},
			msdynmkt_emailtyperecord2: {},
			msdynmkt_generatedomainalignmentkeys: {},
			msdynmkt_generateemailkeys: {},
			msdynmkt_generateformkeys: {},
			msdynmkt_name: {},
			msdynmkt_ownershiprecordkey: {},
			msdynmkt_ownershiprecordtype: {},
			msdynmkt_ownershipvalidationstatus: {},
			msdynmkt_stepwizardprogress: {},
			msdynmkt_validationdate: {},
			OwnerId: {},
			OwningBusinessUnit: {},
			statecode: {},
			statuscode: {}
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
	OptionSet.msdynmkt_domain = {
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