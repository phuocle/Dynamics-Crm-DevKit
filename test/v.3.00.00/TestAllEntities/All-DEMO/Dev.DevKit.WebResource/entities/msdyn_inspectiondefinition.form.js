'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_inspectiondefinition_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_JsonContent_3: {},
			msdyn_name: {},
			msdyn_ParentInspectionId: {},
			msdyn_ParentInspectionId_1: {},
			msdyn_state: {},
			msdyn_Version: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			TabDesignerbbd067a10128460988ddecea1e595f69: {
				Section: {
					SectionDesigner7ad92bc60a56490d9d9b84d4bd317f91: {},
					SectionGeneral0511acf3e77d465dbee39da1d675c3f2: {}
				}
			},
			TabLogica3eaa3bef5184f77a566de5f887905a2: {
				Section: {
					SectionLogic15afbe514f2a4d20baaa9a6bf8baf5de: {}
				}
			},
			TabPreview13ca3214ee1f4f51a47df5806c9bf4d3: {
				Section: {
					SectionPreview3d73cd5688fb432ba5cfcae62225e0df: {}
				}
			},
			TabTranslation: {
				Section: {
					SectionTranslation: {}
				}
			},
			TabVersions485e645a5783443991bb63077e2eadff: {
				Section: {
					SectionVersionsf2391a5cab2041ac87a3d748babb957f: {}
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
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var quickForm = {
			quick_view_inspectiondefinition_versions: {

			}
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
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
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