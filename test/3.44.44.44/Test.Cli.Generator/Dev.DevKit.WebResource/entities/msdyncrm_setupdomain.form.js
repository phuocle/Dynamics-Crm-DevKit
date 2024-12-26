'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormCXP_Authenticated_Domain_Form = function(executionContext, defaultWebResourceName) {
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
			msdyncrm_alignedname: {},
			msdyncrm_domainalignmentrequired: {},
			msdyncrm_domainalignmentvalidationstatus: {},
			msdyncrm_domalignrechost: {},
			msdyncrm_domalignrectype: {},
			msdyncrm_domalignrecvalue: {},
			msdyncrm_emailhost1: {},
			msdyncrm_emailhost2: {},
			msdyncrm_emailkey1: {},
			msdyncrm_emailkey2: {},
			msdyncrm_emailkeysvalidationstatus: {},
			msdyncrm_emailtyperecord1: {},
			msdyncrm_emailtyperecord2: {},
			msdyncrm_generatedomainalignmentkeys: {},
			msdyncrm_generateemailkeys: {},
			msdyncrm_generateformkeys: {},
			msdyncrm_instructions: {},
			msdyncrm_ipinstructions: {},
			msdyncrm_ipslist: {},
			msdyncrm_name: {},
			msdyncrm_obmprefillenabled: {},
			msdyncrm_ownershipvalidationstatus: {},
			msdyncrm_rtmprefillenabled: {},
			msdyncrm_txthostinstructions: {},
			msdyncrm_txtkey: {},
			msdyncrm_txttyperecord: {},
			msdyncrm_validationdate: {},
			msdynmkt_emaildnsrecord1status: {},
			msdynmkt_emaildnsrecord2status: {},
			msdynmkt_StepWizardProgress: {},
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
			msdyncrm_msdyncrm_setupdomain_msdyncrm_defaultmarketingsetting_DefaultSetupDomain: {}
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
	OptionSet.msdyncrm_setupdomain = {
		msdyncrm_domainalignmentvalidationstatus : {
			canceled: 2,
			Confirmed: 1,
			Confirming_DNS_registration: 4,
			Internal_error: 32,
			Keys_not_found_on_DNS: 30,
			Not_requested: 3,
			Record_not_found: 31,
			Waiting_to_confirm: 0
		},
		msdyncrm_emailkeysvalidationstatus : {
			canceled: 2,
			Confirmed: 1,
			Confirming_DNS_registration: 4,
			Internal_error: 32,
			Keys_not_found_on_DNS: 30,
			Not_requested: 3,
			Record_not_found: 31,
			Waiting_to_confirm: 0
		},
		msdyncrm_ownershipvalidationstatus : {
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