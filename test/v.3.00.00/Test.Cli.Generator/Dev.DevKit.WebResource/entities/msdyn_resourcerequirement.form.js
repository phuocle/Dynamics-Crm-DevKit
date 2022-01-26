'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_resourcerequirement_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_name: {},
			notescontrol: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {

		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.Formmsdyn_resourcerequirement_Information2 = function(executionContext, defaultWebResourceName) {
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
			IFRAME_AvailabilityView: {},
			msdyn_allocationmethod: {},
			msdyn_CalendarId: {},
			msdyn_city: {},
			msdyn_costprice: {},
			msdyn_country: {},
			msdyn_duration: {},
			msdyn_effort: {},
			msdyn_fromdate: {},
			msdyn_FulfilledDuration: {},
			msdyn_IsPrimary: {},
			msdyn_Latitude: {},
			msdyn_Longitude: {},
			msdyn_name: {},
			msdyn_percentage: {},
			msdyn_PoolType: {},
			msdyn_Priority: {},
			msdyn_projectid: {},
			msdyn_ProposedDuration: {},
			msdyn_RemainingDuration: {},
			msdyn_requeststatus: {},
			msdyn_requirementgroupid: {},
			msdyn_resourcetype: {},
			msdyn_stateorprovince: {},
			msdyn_Status: {},
			msdyn_Territory: {},
			msdyn_TimeFromPromised: {},
			msdyn_TimeGroup: {},
			msdyn_TimeToPromised: {},
			msdyn_TimeWindowEnd: {},
			msdyn_TimeWindowStart: {},
			msdyn_todate: {},
			msdyn_workhourtemplate: {},
			msdyn_WorkLocation: {},
			msdyn_WorkOrder: {},
			notescontrol: {},
			OwnerId: {},
			RequirementCharacteristics: {},
			RequirementOrganizationUnit: {},
			RequirementResourceCategory: {},
			RequirementResourcePreferences: {},
			TransactionCurrencyId: {},
			WebResource_msdyn_timewindowend: {},
			WebResource_msdyn_timewindowstart: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			Requirement_General: {
				Section: {
					_971E72A7_0E77_4C1E_80B9_E4EB74143E46_SECTION_3: {},
					_971E72A7_0E77_4C1E_80B9_E4EB74143E46_SECTION_4: {},
					_DB0712F3_6333_4878_92C9_004903985F09: {},
					Requirement_Notes: {}
				}
			},
			tab_2: {
				Section: {
					tab_2_section_1: {}
				}
			},
			tab_FieldService: {
				Section: {
					tab_FieldService_section1: {}
				}
			},
			tab_project: {
				Section: {
					tab_3_section_1: {},
					tab_3_section_2: {},
					tab_3_section_3: {}
				}
			},
			tab_ResourceBookings: {
				Section: {
					tab_4_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var grid = {
			RequirementCharacteristics: {},
			RequirementOrganizationUnit: {},
			RequirementResourceCategory: {},
			RequirementResourcePreferences: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_resourcerequirement_requirementdependency_dependentrequirement: {},
			nav_msdyn_resourcerequirement_requirementdependency_resourcerequirement: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormInfomation = function(executionContext, defaultWebResourceName) {
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
			msdyn_allocationmethod: {},
			msdyn_duration: {},
			msdyn_fromdate: {},
			msdyn_Latitude: {},
			msdyn_Longitude: {},
			msdyn_name: {},
			msdyn_percentage: {},
			msdyn_PoolType: {},
			msdyn_quantity: {},
			msdyn_requirementgroupid: {},
			msdyn_resourcetype: {},
			msdyn_Status: {},
			msdyn_todate: {},
			msdyn_type: {},
			msdyn_workhourtemplate: {},
			msdyn_WorkLocation: {}
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
	OptionSet.msdyn_resourcerequirement = {
		msdyn_allocationmethod : {
			Distribute_evenly: 192350003,
			Front_load: 192350005,
			Full_capacity: 192350001,
			None: 192350000,
			Percentage_capacity: 192350004
		},
		msdyn_PoolType : {
			Account: 192350000,
			Contact: 192350001,
			Equipment: 192350003,
			Facility: 192350004,
			User: 192350002
		},
		msdyn_resourcetype : {
			Account: 5,
			Contact: 2,
			Crew: 6,
			Equipment: 4,
			Facility: 7,
			Generic: 1,
			Pool: 8,
			User: 3
		},
		msdyn_type : {
			Extend: 192350001,
			New: 192350000
		},
		msdyn_WorkLocation : {
			Facility: 690970001,
			Location_Agnostic: 690970002,
			Onsite: 690970000
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