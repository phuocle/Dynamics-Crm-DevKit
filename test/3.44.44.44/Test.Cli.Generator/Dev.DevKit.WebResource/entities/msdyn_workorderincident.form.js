'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.Formmsdyn_workorderincident_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_AgreementBookingIncident: {},
			msdyn_CustomerAsset: {},
			msdyn_Description: {},
			msdyn_Description1: {},
			msdyn_EstimatedDuration: {},
			msdyn_FunctionalLocation: {},
			msdyn_IncidentResolved: {},
			msdyn_IncidentType: {},
			msdyn_IsPrimary: {},
			msdyn_ItemsPopulated: {},
			msdyn_name: {},
			msdyn_PrimaryResolution: {},
			msdyn_TasksPercentCompleted: {},
			msdyn_Trade: {},
			msdyn_WorkOrder: {},
			notescontrol: {},
			OwnerId: {},
			workorderproductsgrid: {},
			workorderresolutiongrid: {},
			workorderservicesgrid: {},
			workorderservicetasksgrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			f1tab_resolution: {
				Section: {
					_0366D152_E56D_4D51_B9ED_9BF3C729CE77_SECTION_3: {},
					tab_3_section_1: {},
					workorderresolutionksection: {}
				}
			},
			tab_7: {
				Section: {
					tab_7_section_1: {}
				}
			},
			tab_8: {
				Section: {
					tab_8_section_1: {}
				}
			},
			workorderproductstab: {
				Section: {
					workorderproductssection: {}
				}
			},
			workorderservicestab: {
				Section: {
					workorderservicessection: {}
				}
			},
			workorderservicetaskstab: {
				Section: {
					workorderservicetasksection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			workorderproductsgrid: {},
			workorderresolutiongrid: {},
			workorderservicesgrid: {},
			workorderservicetasksgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_msdyn_workorderincident_msdyn_requirementcharacteristic_WorkOrderIncident: {},
			msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident: {},
			msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident: {},
			msdyn_msdyn_workorderincident_msdyn_workorderresolution_WorkOrderIncident: {},
			msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident: {},
			msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident: {},
			msdyn_workorderincident_adx_inviteredemptions: {},
			msdyn_workorderincident_adx_portalcomments: {},
			msdyn_workorderincident_Appointments: {},
			msdyn_workorderincident_Emails: {},
			msdyn_workorderincident_msdyn_bookingalerts: {},
			msdyn_workorderincident_msdyn_copilottranscripts: {},
			msdyn_workorderincident_msdyn_ocliveworkitems: {},
			msdyn_workorderincident_msdyn_ocoutboundmessages: {},
			msdyn_workorderincident_msdyn_ocsessions: {},
			msdyn_workorderincident_msdyn_ocvoicemails: {},
			msdyn_workorderincident_msfp_alerts: {},
			msdyn_workorderincident_msfp_surveyinvites: {},
			msdyn_workorderincident_msfp_surveyresponses: {},
			msdyn_workorderincident_PhoneCalls: {},
			msdyn_workorderincident_QueueItems: {},
			msdyn_workorderincident_ServiceAppointments: {},
			msdyn_workorderincident_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormWork_Order_Incident_Mobile = function(executionContext, defaultWebResourceName) {
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
			msdyn_CustomerAsset: {},
			msdyn_Description: {},
			msdyn_EstimatedDuration: {},
			msdyn_FunctionalLocation: {},
			msdyn_IncidentType: {},
			msdyn_InternalFlags: {},
			msdyn_IsPrimary: {},
			msdyn_name: {},
			msdyn_PrimaryResolution: {},
			msdyn_Trade: {},
			msdyn_WorkOrder: {},
			notescontrol: {},
			OwnerId: {},
			workorderproductsgrid: {},
			workorderservicesgrid: {},
			workorderservicetasksgrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_0366D152_E56D_4D51_B9ED_9BF3C729CE77: {
				Section: {
					_0366D152_E56D_4D51_B9ED_9BF3C729CE77_SECTION_3: {},
					_28146354_51ED_48D8_A48D_42EBC5D11F28: {}
				}
			},
			fstab_sub_grids: {
				Section: {
					fstab_sub_grids_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			workorderproductsgrid: {},
			workorderservicesgrid: {},
			workorderservicetasksgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_msdyn_workorderincident_msdyn_requirementcharacteristic_WorkOrderIncident: {},
			msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident: {},
			msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident: {},
			msdyn_msdyn_workorderincident_msdyn_workorderresolution_WorkOrderIncident: {},
			msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident: {},
			msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident: {},
			msdyn_workorderincident_adx_inviteredemptions: {},
			msdyn_workorderincident_adx_portalcomments: {},
			msdyn_workorderincident_Appointments: {},
			msdyn_workorderincident_Emails: {},
			msdyn_workorderincident_msdyn_bookingalerts: {},
			msdyn_workorderincident_msdyn_copilottranscripts: {},
			msdyn_workorderincident_msdyn_ocliveworkitems: {},
			msdyn_workorderincident_msdyn_ocoutboundmessages: {},
			msdyn_workorderincident_msdyn_ocsessions: {},
			msdyn_workorderincident_msdyn_ocvoicemails: {},
			msdyn_workorderincident_msfp_alerts: {},
			msdyn_workorderincident_msfp_surveyinvites: {},
			msdyn_workorderincident_msfp_surveyresponses: {},
			msdyn_workorderincident_PhoneCalls: {},
			msdyn_workorderincident_QueueItems: {},
			msdyn_workorderincident_ServiceAppointments: {},
			msdyn_workorderincident_Tasks: {}
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
	OptionSet.msdyn_workorderincident = {
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