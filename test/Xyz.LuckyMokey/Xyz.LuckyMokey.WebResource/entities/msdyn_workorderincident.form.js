'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.Formmsdyn_workorderincident_Information = function(executionContext, defaultWebResourceName) {
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
			msdyn_Description_1: {},
			msdyn_EstimatedDuration: {},
			msdyn_IncidentResolved: {},
			msdyn_IncidentType: {},
			msdyn_IsPrimary: {},
			msdyn_ItemsPopulated: {},
			msdyn_name: {},
			msdyn_TasksPercentCompleted: {},
			msdyn_WorkOrder: {},
			notescontrol: {},
			OwnerId: {},
			workorderproductsgrid: {},
			workorderservicesgrid: {},
			workorderservicetasksgrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_7: {
				Section: {
					tab_7_section_1: {}
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
			},
			f1tab_resolution: {
				Section: {
					tab_3_section_1: {}
				}
			},
			tab_8: {
				Section: {
					tab_8_section_1: {}
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
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			nav_msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident: {},
			nav_msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident: {},
			nav_msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident: {},
			nav_msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident: {},
			navProcessSessions: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormWork_Order_Incident_Mobile = function(executionContext, defaultWebResourceName) {
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
			msdyn_IncidentType: {},
			msdyn_InternalFlags: {},
			msdyn_IsPrimary: {},
			msdyn_name: {},
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
					_28146354_51ED_48D8_A48D_42EBC5D11F28: {},
					_0366D152_E56D_4D51_B9ED_9BF3C729CE77_SECTION_3: {}
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
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			nav_msdyn_msdyn_workorderincident_msdyn_workorderproduct_WorkOrderIncident: {},
			nav_msdyn_msdyn_workorderincident_msdyn_workorderservice_WorkOrderIncident: {},
			nav_msdyn_msdyn_workorderincident_msdyn_workorderservicetask_WorkOrderIncident: {},
			nav_msdyn_msdyn_workorderincident_msdyn_workordercharacteristic_WorkOrderIncident: {},
			navAsyncOperations: {},
			navProcessSessions: {}
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