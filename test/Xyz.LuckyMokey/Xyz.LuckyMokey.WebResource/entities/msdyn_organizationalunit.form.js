'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_organizationalunit_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_currency: {},
			msdyn_description: {},
			msdyn_Latitude: {},
			msdyn_Longitude: {},
			msdyn_name: {},
			notescontrol: {},
			PriceList: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_3D875146_3739_4B34_9BB2_ABC10665669D: {
				Section: {
					_7588A081_A7EE_4340_87A0_08057DA1D0FE: {}
				}
			},
			_B2AA5EFF_A9B6_48C0_B71E_6E464591EBA4: {
				Section: {
					_D952AB6B_D6B2_462B_B63E_2555C38B9A95: {}
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
			nav_msdyn_organizationalunit_requirementorganizationunit_OrganizationalUnit: {}
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
	OptionSet.msdyn_organizationalunit = {
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