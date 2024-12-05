'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_ConversationSummarySuggestion_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Name: {},
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
	OptionSet.msdyn_ConversationSummarySuggestion = {
		msdyn_Locale : {
			ar_ae: 140,
			ar_bh: 150,
			ar_eg: 160,
			ar_iq: 170,
			ar_jo: 180,
			ar_kw: 190,
			ar_lb: 200,
			ar_om: 210,
			ar_qa: 220,
			ar_sa: 230,
			ar_sy: 240,
			da_dk: 260,
			de_de: 20,
			en_gb: 10,
			en_us: 0,
			es_es: 50,
			es_mx: 60,
			fi_fi: 280,
			fr_ca: 120,
			fr_fr: 30,
			he_il: 250,
			it_it: 40,
			ja_jp: 70,
			nb_no: 290,
			nl_nl: 110,
			pt_br: 80,
			pt_pt: 130,
			sv_se: 270,
			zh_cn: 90
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