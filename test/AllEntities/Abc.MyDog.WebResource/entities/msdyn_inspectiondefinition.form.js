'use strict';
/** @namespace MyDog */
var MyDog;
(function (MyDog) {
	'use strict';
	MyDog.Formmsdyn_inspectiondefinition_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_description: {},
			msdyn_EffectiveDate: {},
			msdyn_IsRequiredToAnswer: {},
			msdyn_JsonContent: {},
			msdyn_JsonContent_1: {},
			msdyn_JsonContent_2: {},
			msdyn_name: {},
			msdyn_ParentInspectionId: {},
			msdyn_ParentInspectionId_1: {},
			msdyn_state: {},
			msdyn_Version: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Tab_Designer_bbd067a1_0128_4609_88dd_ecea1e595f69: {
				Section: {
					Section_General_0511acf3_e77d_465d_bee3_9da1d675c3f2: {},
					Section_Designer_7ad92bc6_0a56_490d_9d9b_84d4bd317f91: {}
				}
			},
			Tab_Preview_13ca3214_ee1f_4f51_a47d_f5806c9bf4d3: {
				Section: {
					Section_Preview_3d73cd56_88fb_432b_a5cf_cae62225e0df: {}
				}
			},
			Tab_Logic_a3eaa3be_f518_4f77_a566_de5f887905a2: {
				Section: {
					Section_Logic_15afbe51_4f2a_4d20_baaa_9a6bf8baf5de: {}
				}
			},
			Tab_Versions_485e645a_5783_4439_91bb_63077e2eadff: {
				Section: {
					Section_Versions_f2391a5c_ab20_41ac_87a3_d748babb957f: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyn_state: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var quickForm = {
			quick_view_inspectiondefinition_versions: {}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			nav_msdyn_msdyn_inspectiondefinition_msdyn_inspectionresponse_InspectionDefinition: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		return form;
	};
})(MyDog || (MyDog = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_inspectiondefinition = {
		msdyn_state : {
			Draft: 0,
			Published: 1
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