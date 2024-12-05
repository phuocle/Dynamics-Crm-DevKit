'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormCharacteristic_Information = function(executionContext, defaultWebResourceName) {
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
			CharacteristicType: {},
			Description: {},
			Name: {},
			notescontrol: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			characteristic_bookableresourcecharacteristic_Characteristic: {},
			msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic: {},
			msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic: {},
			msdyn_characteristic_msdyn_requirementcharacteristic_characteristic: {},
			msdyn_characteristic_msdyn_swarmskill_Skillid: {},
			msdyn_characteristic_msdyn_workordercharacteristic_Characteristic: {},
			msdyn_characteristic_skillattachmenttarget: {},
			msdyn_ocsitdskill_skillid_Characteristic: {},
			msdyn_rulesetdependencymapping_characteristic_msdyn_referencedpolymorphicentityid: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormSkill_Main_Form = function(executionContext, defaultWebResourceName) {
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
			CharacteristicType: {},
			Description: {},
			Name: {},
			SkilledUsers: {},
			WebResource_help: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			SkilledUsers: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			characteristic_bookableresourcecharacteristic_Characteristic: {},
			msdyn_characteristic_msdyn_incidenttypecharacteristic_Characteristic: {},
			msdyn_characteristic_msdyn_ocliveworkitemcharacteristic_characteristic: {},
			msdyn_characteristic_msdyn_requirementcharacteristic_characteristic: {},
			msdyn_characteristic_msdyn_swarmskill_Skillid: {},
			msdyn_characteristic_msdyn_workordercharacteristic_Characteristic: {},
			msdyn_characteristic_skillattachmenttarget: {},
			msdyn_ocsitdskill_skillid_Characteristic: {},
			msdyn_rulesetdependencymapping_characteristic_msdyn_referencedpolymorphicentityid: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormCharacteristic_Quick_Create = function(executionContext, defaultWebResourceName) {
		var formContext = null;
		if (executionContext !== undefined)
		{
			if (executionContext.getFormContext === undefined) {
				formContext = executionContext;
			}
			else {
				formContext = executionContext.getFormContext();
			}
		}
		var form = devKit.LoadForm(formContext);
		var body = {
			CharacteristicType: {},
			Description: {},
			Name: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
})(DevKit || (DevKit = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.Characteristic = {
		CharacteristicType : {
			Certification: 2,
			Skill: 1
		},
		StateCode : {
			Active: 0,
			Inactive: 1
		},
		StatusCode : {
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