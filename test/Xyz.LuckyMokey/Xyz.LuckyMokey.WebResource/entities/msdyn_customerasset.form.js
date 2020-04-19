'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormCustomer_Asset = function(executionContext, defaultWebResourceName) {
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
			AlertsGrid: {},
			Asset_SubAsset: {},
			Asset_WorkOrder: {},
			CommandsGrid: {},
			ConnectedDevices: {},
			msdyn_Account: {},
			msdyn_CustomerAssetCategory: {},
			msdyn_DeviceId: {},
			msdyn_DeviceId_1: {},
			msdyn_DeviceId_2: {},
			msdyn_Latitude: {},
			msdyn_Longitude: {},
			msdyn_MasterAsset: {},
			msdyn_name: {},
			msdyn_ParentAsset: {},
			msdyn_Product: {},
			msdyn_RegistrationStatus: {},
			msdyn_WorkOrderProduct: {},
			notescontrol: {},
			OwnerId: {},
			WebResource_PowerBIConnectedDevices: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_B3F36061_1F16_4BBB_BD74_44FAC42C9094: {
				Section: {
					_216040C1_499B_4120_8175_2EFB7536E940: {},
					ConnectedDeviceAttributes: {},
					fstab_summary_location: {},
					_B3F36061_1F16_4BBB_BD74_44FAC42C9094_SECTION_7: {},
					_576663BB_EA91_486D_8F88_DA4CD98DF0EB: {},
					Connected_Device_Readings: {},
					Device_Summary_Visualization: {},
					_B3F36061_1F16_4BBB_BD74_44FAC42C9094_SECTION_3: {},
					Asset_WorkOrder: {}
				}
			},
			CommandsTab: {
				Section: {
					CommandsSection: {}
				}
			},
			DeviceInsightsTab: {
				Section: {
					DeviceInsightsSection: {}
				}
			},
			AlertsTab: {
				Section: {
					AlertsSection: {}
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
			nav_msdyn_msdyn_customerasset_msdyn_customerasset_ParentAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_workorderincident_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_customerasset_MasterAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_workorderproduct_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_workorderservice_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_workorderservicetask_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingproduct_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingservice_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingservicetask_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_rmaproduct_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingincident_CustomerAsset: {},
			navProcessSessions: {},
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingincident_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingproduct_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingservice_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingservicetask_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_workorder_CustomerAsset: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormCustomer_Asset_Mobile = function(executionContext, defaultWebResourceName) {
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
			Asset_SubAsset: {},
			msdyn_Account: {},
			msdyn_CustomerAssetCategory: {},
			msdyn_Latitude: {},
			msdyn_Longitude: {},
			msdyn_MasterAsset: {},
			msdyn_name: {},
			msdyn_ParentAsset: {},
			msdyn_Product: {},
			notescontrol: {},
			OwnerId: {},
			WORKORDERS: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_summary: {
				Section: {
					fstab_summary_section_general: {},
					fstab_summary_location: {},
					fstab_summary_column_2_section_1: {},
					fstab_summary_column_3_section_1: {}
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
			nav_msdyn_msdyn_customerasset_msdyn_customerasset_ParentAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_customerasset_MasterAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_workorder_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_workorderincident_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingproduct_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_workorderproduct_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingservice_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_workorderservice_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingservicetask_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_workorderservicetask_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_rmaproduct_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_agreementbookingincident_CustomerAsset: {},
			navProcessSessions: {},
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingincident_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingproduct_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingservice_CustomerAsset: {},
			nav_msdyn_msdyn_customerasset_msdyn_quotebookingservicetask_CustomerAsset: {}
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
	OptionSet.msdyn_customerasset = {
		msdyn_RegistrationStatus : {
			Unknown: 192350000,
			Unregistered: 192350001,
			In_Progress: 192350002,
			Registered: 192350003,
			Error: 192350004
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