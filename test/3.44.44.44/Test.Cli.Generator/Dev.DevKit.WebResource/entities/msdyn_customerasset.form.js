'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormCustomer_Asset = function(executionContext, defaultWebResourceName) {
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
			KnowledgeArticlesSubGrid: {},
			msdyn_Account: {},
			msdyn_CustomerAssetCategory: {},
			msdyn_DeviceId: {},
			msdyn_DeviceId1: {},
			msdyn_DeviceId2: {},
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
					_576663BB_EA91_486D_8F88_DA4CD98DF0EB: {},
					_B3F36061_1F16_4BBB_BD74_44FAC42C9094_SECTION_3: {},
					_B3F36061_1F16_4BBB_BD74_44FAC42C9094_SECTION_7: {},
					Asset_WorkOrder: {},
					Connected_Device_Readings: {},
					ConnectedDeviceAttributes: {},
					Device_Summary_Visualization: {},
					fstab_summary_location: {},
					knowledgesection: {}
				}
			},
			AlertsTab: {
				Section: {
					AlertsSection: {}
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
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			AlertsGrid: {},
			Asset_SubAsset: {},
			Asset_WorkOrder: {},
			CommandsGrid: {},
			ConnectedDevices: {},
			KnowledgeArticlesSubGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_customerasset_adx_inviteredemptions: {},
			msdyn_customerasset_adx_portalcomments: {},
			msdyn_customerasset_Appointments: {},
			msdyn_customerasset_Emails: {},
			msdyn_customerasset_msdyn_bookingalerts: {},
			msdyn_customerasset_msdyn_copilottranscripts: {},
			msdyn_customerasset_msdyn_ocliveworkitems: {},
			msdyn_customerasset_msdyn_ocoutboundmessages: {},
			msdyn_customerasset_msdyn_ocsessions: {},
			msdyn_customerasset_msdyn_ocvoicemails: {},
			msdyn_customerasset_msfp_alerts: {},
			msdyn_customerasset_msfp_surveyinvites: {},
			msdyn_customerasset_msfp_surveyresponses: {},
			msdyn_customerasset_OpportunityCloses: {},
			msdyn_customerasset_OrderCloses: {},
			msdyn_customerasset_PhoneCalls: {},
			msdyn_customerasset_QuoteCloses: {},
			msdyn_customerasset_ServiceAppointments: {},
			msdyn_customerasset_Tasks: {},
			msdyn_msdyn_customerasset_msdyn_agreementbookingincident_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_agreementbookingproduct_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_agreementbookingservice_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_agreementbookingservicetask_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_assettemplateassociation_customerasset: {},
			msdyn_msdyn_customerasset_msdyn_customerasset_MasterAsset: {},
			msdyn_msdyn_customerasset_msdyn_customerasset_ParentAsset: {},
			msdyn_msdyn_customerasset_msdyn_customerassetattachment_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_entitlementapplication_customerasset: {},
			msdyn_msdyn_customerasset_msdyn_inspectioninstance_customerassetid: {},
			msdyn_msdyn_customerasset_msdyn_iotalert_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_iotdevicecommand_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_problematicasset_asset: {},
			msdyn_msdyn_customerasset_msdyn_propertyassetassociation_customerasset: {},
			msdyn_msdyn_customerasset_msdyn_propertylog_customerasset: {},
			msdyn_msdyn_customerasset_msdyn_quotebookingincident_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_quotebookingproduct_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_quotebookingservice_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_quotebookingservicetask_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_rmaproduct_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_workorder_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_workorderincident_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_workorderproduct_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_workorderresolution_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_workorderservice_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_workorderservicetask_CustomerAsset: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormCustomer_Asset_Mobile = function(executionContext, defaultWebResourceName) {
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
			CommandsGrid: {},
			ConnectedDevices: {},
			CurrentPropertyValuesSubgrid: {},
			KnowledgeArticlesSubGrid: {},
			msdyn_Account: {},
			msdyn_CustomerAssetCategory: {},
			msdyn_DeviceId: {},
			msdyn_DeviceId1: {},
			msdyn_DeviceId2: {},
			msdyn_FunctionalLocation: {},
			msdyn_Latitude: {},
			msdyn_Longitude: {},
			msdyn_MasterAsset: {},
			msdyn_name: {},
			msdyn_name1: {},
			msdyn_ParentAsset: {},
			msdyn_Product: {},
			msdyn_RegistrationStatus: {},
			notescontrol: {},
			OwnerId: {},
			PropertyLogsSubGrid: {},
			WORKORDERS: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
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
			fstab_AssetHierarchy: {
				Section: {
					AssetHierarchySection: {}
				}
			},
			fstab_sub_grids: {
				Section: {
					fstab_sub_grids_section: {}
				}
			},
			fstab_summary: {
				Section: {
					_576663BB_EA91_486D_8F88_DA4CD98DF0EB: {},
					ConnectedDeviceAttributes: {},
					Device_Summary_Visualization: {},
					fstab_summary_column_2_section_1: {},
					fstab_summary_column_3_section_1: {},
					fstab_summary_location: {},
					fstab_summary_section_general: {},
					KnowledgeSection: {}
				}
			},
			PropertyLogsTab: {
				Section: {
					tab_3_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var grid = {
			Asset_SubAsset: {},
			CommandsGrid: {},
			ConnectedDevices: {},
			CurrentPropertyValuesSubgrid: {},
			KnowledgeArticlesSubGrid: {},
			PropertyLogsSubGrid: {},
			WORKORDERS: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			msdyn_customerasset_adx_inviteredemptions: {},
			msdyn_customerasset_adx_portalcomments: {},
			msdyn_customerasset_Appointments: {},
			msdyn_customerasset_Emails: {},
			msdyn_customerasset_msdyn_bookingalerts: {},
			msdyn_customerasset_msdyn_copilottranscripts: {},
			msdyn_customerasset_msdyn_ocliveworkitems: {},
			msdyn_customerasset_msdyn_ocoutboundmessages: {},
			msdyn_customerasset_msdyn_ocsessions: {},
			msdyn_customerasset_msdyn_ocvoicemails: {},
			msdyn_customerasset_msfp_alerts: {},
			msdyn_customerasset_msfp_surveyinvites: {},
			msdyn_customerasset_msfp_surveyresponses: {},
			msdyn_customerasset_OpportunityCloses: {},
			msdyn_customerasset_OrderCloses: {},
			msdyn_customerasset_PhoneCalls: {},
			msdyn_customerasset_QuoteCloses: {},
			msdyn_customerasset_ServiceAppointments: {},
			msdyn_customerasset_Tasks: {},
			msdyn_msdyn_customerasset_msdyn_agreementbookingincident_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_agreementbookingproduct_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_agreementbookingservice_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_agreementbookingservicetask_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_assettemplateassociation_customerasset: {},
			msdyn_msdyn_customerasset_msdyn_customerasset_MasterAsset: {},
			msdyn_msdyn_customerasset_msdyn_customerasset_ParentAsset: {},
			msdyn_msdyn_customerasset_msdyn_customerassetattachment_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_entitlementapplication_customerasset: {},
			msdyn_msdyn_customerasset_msdyn_inspectioninstance_customerassetid: {},
			msdyn_msdyn_customerasset_msdyn_iotalert_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_iotdevicecommand_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_problematicasset_asset: {},
			msdyn_msdyn_customerasset_msdyn_propertyassetassociation_customerasset: {},
			msdyn_msdyn_customerasset_msdyn_propertylog_customerasset: {},
			msdyn_msdyn_customerasset_msdyn_quotebookingincident_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_quotebookingproduct_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_quotebookingservice_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_quotebookingservicetask_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_rmaproduct_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_workorder_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_workorderincident_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_workorderproduct_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_workorderresolution_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_workorderservice_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_workorderservicetask_CustomerAsset: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormCustomer_Asset_Simple = function(executionContext, defaultWebResourceName) {
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
			msdyn_Account: {},
			msdyn_CustomerAssetCategory: {},
			msdyn_MasterAsset: {},
			msdyn_name: {},
			msdyn_ParentAsset: {},
			msdyn_Product: {},
			msdyn_WorkOrderProduct: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_86605121_2D82_446C_A9FE_976CCAFA2C86: {
				Section: {
					_A0B727A1_F333_461A_A7C2_CF9622A5D43D: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var navigation = {
			msdyn_customerasset_adx_inviteredemptions: {},
			msdyn_customerasset_adx_portalcomments: {},
			msdyn_customerasset_Appointments: {},
			msdyn_customerasset_Emails: {},
			msdyn_customerasset_msdyn_bookingalerts: {},
			msdyn_customerasset_msdyn_copilottranscripts: {},
			msdyn_customerasset_msdyn_ocliveworkitems: {},
			msdyn_customerasset_msdyn_ocoutboundmessages: {},
			msdyn_customerasset_msdyn_ocsessions: {},
			msdyn_customerasset_msdyn_ocvoicemails: {},
			msdyn_customerasset_msfp_alerts: {},
			msdyn_customerasset_msfp_surveyinvites: {},
			msdyn_customerasset_msfp_surveyresponses: {},
			msdyn_customerasset_OpportunityCloses: {},
			msdyn_customerasset_OrderCloses: {},
			msdyn_customerasset_PhoneCalls: {},
			msdyn_customerasset_QuoteCloses: {},
			msdyn_customerasset_ServiceAppointments: {},
			msdyn_customerasset_Tasks: {},
			msdyn_msdyn_customerasset_msdyn_agreementbookingincident_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_agreementbookingproduct_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_agreementbookingservice_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_agreementbookingservicetask_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_assettemplateassociation_customerasset: {},
			msdyn_msdyn_customerasset_msdyn_customerasset_MasterAsset: {},
			msdyn_msdyn_customerasset_msdyn_customerasset_ParentAsset: {},
			msdyn_msdyn_customerasset_msdyn_customerassetattachment_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_entitlementapplication_customerasset: {},
			msdyn_msdyn_customerasset_msdyn_inspectioninstance_customerassetid: {},
			msdyn_msdyn_customerasset_msdyn_iotalert_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_iotdevicecommand_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_problematicasset_asset: {},
			msdyn_msdyn_customerasset_msdyn_propertyassetassociation_customerasset: {},
			msdyn_msdyn_customerasset_msdyn_propertylog_customerasset: {},
			msdyn_msdyn_customerasset_msdyn_quotebookingincident_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_quotebookingproduct_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_quotebookingservice_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_quotebookingservicetask_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_rmaproduct_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_workorder_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_workorderincident_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_workorderproduct_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_workorderresolution_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_workorderservice_CustomerAsset: {},
			msdyn_msdyn_customerasset_msdyn_workorderservicetask_CustomerAsset: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormCustomer_Asset_Quick_Create = function(executionContext, defaultWebResourceName) {
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
			msdyn_Account: {},
			msdyn_CustomerAssetCategory: {},
			msdyn_name: {},
			msdyn_Product: {}
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
	OptionSet.msdyn_customerasset = {
		msdyn_RegistrationStatus : {
			Error: 192350004,
			In_Progress: 192350002,
			Registered: 192350003,
			Unknown: 192350000,
			Unregistered: 192350001
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