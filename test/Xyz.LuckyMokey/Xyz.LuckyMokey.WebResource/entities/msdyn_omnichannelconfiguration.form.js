'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_omnichannelconfiguration_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_IsSkillBasedRoutingEnabled: {},
			msdyn_name: {},
			RatingModelDetails: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808: {
				Section: {
				}
			},
			tab_skillbasedrouting_new: {
				Section: {
					tab_2_section_1_2: {},
					tab_skillbasedrouting_section_2_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
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
	LuckyMokey.FormMasking_settings = function(executionContext, defaultWebResourceName) {
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
			MaskingRulesInSettings: {},
			msdyn_enable_supervisor_assign: {},
			msdyn_enable_supervisor_monitor: {},
			msdyn_enable_visitorjourney: {},
			msdyn_maskforagent: {},
			msdyn_maskforcustomer: {},
			msdyn_name: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Self_service_settings: {
				Section: {
					_44EFFE7C_A18D_4D4C_B111_DB98E28BC808_SECTION_2: {}
				}
			},
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808: {
				Section: {
					_26FF56C2_88FE_41F2_BE7F_AF3C273CFCE3: {},
					_44EFFE7C_A18D_4D4C_B111_DB98E28BC808_SECTION_3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
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
	LuckyMokey.FormSelf_service_settings = function(executionContext, defaultWebResourceName) {
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
			msdyn_enable_supervisor_assign: {},
			msdyn_enable_supervisor_monitor: {},
			msdyn_enable_visitorjourney: {},
			msdyn_name: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Self_service_settings: {
				Section: {
					_44EFFE7C_A18D_4D4C_B111_DB98E28BC808_SECTION_2: {}
				}
			},
			_44EFFE7C_A18D_4D4C_B111_DB98E28BC808: {
				Section: {
					_26FF56C2_88FE_41F2_BE7F_AF3C273CFCE3: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
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
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_omnichannelconfiguration = {
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