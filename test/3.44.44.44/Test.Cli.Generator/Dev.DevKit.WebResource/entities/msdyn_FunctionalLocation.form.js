'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_FunctionalLocation_Information = function(executionContext, defaultWebResourceName) {
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
			CurrentPropertyValuesSubgrid: {},
			msdyn_Address1: {},
			msdyn_Address2: {},
			msdyn_Address3: {},
			msdyn_AddressName: {},
			msdyn_City: {},
			msdyn_CostCenter: {},
			msdyn_Country: {},
			msdyn_EmailAddress: {},
			msdyn_FunctionalLocationType: {},
			msdyn_Latitude: {},
			msdyn_LocationOpenDate: {},
			msdyn_Longitude: {},
			msdyn_Name: {},
			msdyn_Name1: {},
			msdyn_ParentFunctionalLocation: {},
			msdyn_PostalCode: {},
			msdyn_PrimaryTimeZone: {},
			msdyn_ShortName: {},
			msdyn_StateOrProvince: {},
			notescontrol: {},
			PropertyLogsSubGrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			AssetsAndLocationsTab: {
				Section: {
					AssetsAndLocationsSection: {}
				}
			},
			LocationPropertiesTab: {
				Section: {
					tab_2_section_1: {}
				}
			},
			tab_3: {
				Section: {
					AddressSection: {},
					tab_3_section_1: {},
					tab_3_section_3: {}
				}
			},
			tab_4: {
				Section: {
					tab_4_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			CurrentPropertyValuesSubgrid: {},
			PropertyLogsSubGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_customerasset_FunctionalLocation_ms: {},
			msdyn_functionallocation_msdyn_nottoexceed_location: {},
			msdyn_FunctionalLocation_ParentFunctional: {},
			msdyn_msdyn_functionallocation_incident_FunctionalLocation: {},
			msdyn_msdyn_functionallocation_msdyn_agreementbookingincident_FunctionalLocation: {},
			msdyn_msdyn_functionallocation_msdyn_locationtemplateassociation_FunctionalLocation: {},
			msdyn_msdyn_functionallocation_msdyn_propertylocationassociation_FunctionalLocation: {},
			msdyn_msdyn_functionallocation_msdyn_propertylog_FunctionalLocation: {},
			msdyn_msdyn_functionallocation_msdyn_tradecoverage_FunctionalLocation: {},
			msdyn_msdyn_functionallocation_msdyn_workorder_FunctionalLocation: {},
			msdyn_msdyn_functionallocation_msdyn_workorderincident_FunctionalLocation: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormFunctional_Location_Quick_Create = function(executionContext, defaultWebResourceName) {
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
			msdyn_Address1: {},
			msdyn_Address2: {},
			msdyn_City: {},
			msdyn_CostCenter: {},
			msdyn_EmailAddress: {},
			msdyn_FunctionalLocationType: {},
			msdyn_LocationOpenDate: {},
			msdyn_Name: {},
			msdyn_ParentFunctionalLocation: {},
			msdyn_PostalCode: {},
			msdyn_PrimaryTimeZone: {},
			msdyn_ShortName: {},
			msdyn_StateOrProvince: {}
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
	OptionSet.msdyn_FunctionalLocation = {
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