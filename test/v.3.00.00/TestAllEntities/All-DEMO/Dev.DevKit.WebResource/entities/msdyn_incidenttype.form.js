'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_incidenttype_Information = function(executionContext, defaultWebResourceName) {
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
			Characteristics: {},
			Incident_Type_Resolutions: {},
			incidentproductssubgrid: {},
			incidentservicessubgrid: {},
			KnowledgeArticle_IncidentType: {},
			msdyn_CopyIncidentItemstoAgreement: {},
			msdyn_DefaultWorkOrderType: {},
			msdyn_Description: {},
			msdyn_EstimatedDuration: {},
			msdyn_LastCalculatedTime: {},
			msdyn_name: {},
			msdyn_SuggestedDuration: {},
			notescontrol: {},
			OwnerId: {},
			servicetasksgrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_C6408E85_49E7_4216_BF96_986A20C64ECB: {
				Section: {
					_2405DB6B_E18C_49E5_A76B_505837745C84: {},
					_AA02FBB3_348E_4F8C_BC8E_1FE3F9BD7D90: {},
					_C6408E85_49E7_4216_BF96_986A20C64ECB_SECTION_2: {}
				}
			},
			f1tab_details: {
				Section: {
					KnowledgeArticleSection: {},
					tab_3_section_1: {}
				}
			},
			Incident_Type_Resolutions: {
				Section: {
					tab_8_section_1: {}
				}
			},
			tab_4: {
				Section: {
					tab_4_section_1: {}
				}
			},
			tab_5: {
				Section: {
					tab_5_section_1: {}
				}
			},
			tab_6: {
				Section: {
					tab_6_section_1: {}
				}
			},
			tab_7: {
				Section: {
					tab_7_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			statecode: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var process = devKit.LoadProcess(formContext);
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			Characteristics: {},
			Incident_Type_Resolutions: {},
			incidentproductssubgrid: {},
			incidentservicessubgrid: {},
			KnowledgeArticle_IncidentType: {},
			servicetasksgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			nav_msdyn_incidenttype_requirementgroup_incident: {},
			nav_msdyn_msdyn_incidenttype_incident_IncidentType: {},
			nav_msdyn_msdyn_incidenttype_msdyn_agreementbookingincident_IncidentType: {},
			nav_msdyn_msdyn_incidenttype_msdyn_incidenttypecharacteristic_IncidentType: {},
			nav_msdyn_msdyn_incidenttype_msdyn_incidenttypeproduct_IncidentType: {},
			nav_msdyn_msdyn_incidenttype_msdyn_incidenttyperesolution_IncidentType: {},
			nav_msdyn_msdyn_incidenttype_msdyn_incidenttypeservice_IncidentType: {},
			nav_msdyn_msdyn_incidenttype_msdyn_incidenttypeservicetask_IncidentType: {},
			nav_msdyn_msdyn_incidenttype_msdyn_workorder_PrimaryIncidentType: {},
			nav_msdyn_msdyn_incidenttype_msdyn_workorderincident_IncidentType: {},
			navProcessSessions: {}
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
	OptionSet.msdyn_incidenttype = {
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