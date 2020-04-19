'use strict';
/** @namespace LuckyMokey */
var LuckyMokey;
(function (LuckyMokey) {
	'use strict';
	LuckyMokey.FormWork_Order = function(executionContext, defaultWebResourceName) {
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
			bookings: {},
			CreatedBy: {},
			CreatedOn: {},
			Incidents_List: {},
			ModifiedBy: {},
			ModifiedOn: {},
			msdyn_Address1: {},
			msdyn_Address2: {},
			msdyn_Address3: {},
			msdyn_AddressName: {},
			msdyn_Agreement: {},
			msdyn_BillingAccount: {},
			msdyn_City: {},
			msdyn_ClosedBy: {},
			msdyn_Country: {},
			msdyn_CustomerAsset: {},
			msdyn_DateWindowEnd: {},
			msdyn_DateWindowStart: {},
			msdyn_EstimateSubtotalAmount: {},
			msdyn_Instructions: {},
			msdyn_IoTAlert: {},
			msdyn_IoTAlert_1: {},
			msdyn_Latitude: {},
			msdyn_Latitude_1: {},
			msdyn_Longitude: {},
			msdyn_Longitude_1: {},
			msdyn_mapcontrol: {},
			msdyn_name: {},
			msdyn_OpportunityId: {},
			msdyn_ParentWorkOrder: {},
			msdyn_PostalCode: {},
			msdyn_PriceList: {},
			msdyn_PrimaryIncidentDescription: {},
			msdyn_PrimaryIncidentEstimatedDuration: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_Priority: {},
			msdyn_ReportedByContact: {},
			msdyn_ServiceAccount: {},
			msdyn_ServiceAccount_1: {},
			msdyn_ServiceRequest: {},
			msdyn_ServiceTerritory: {},
			msdyn_StateOrProvince: {},
			msdyn_SubStatus: {},
			msdyn_SubtotalAmount: {},
			msdyn_SupportContact: {},
			msdyn_SystemStatus: {},
			msdyn_Taxable: {},
			msdyn_TaxCode: {},
			msdyn_TimeClosed: {},
			msdyn_TimeFromPromised: {},
			msdyn_TimeGroup: {},
			msdyn_TimeToPromised: {},
			msdyn_TimeWindowEnd: {},
			msdyn_TimeWindowStart: {},
			msdyn_TotalAmount: {},
			msdyn_TotalSalesTax: {},
			msdyn_workhourtemplate: {},
			msdyn_WorkLocation: {},
			msdyn_WorkOrderSummary: {},
			msdyn_WorkOrderType: {},
			notescontrol: {},
			OwnerId: {},
			TransactionCurrencyId: {},
			WebResource_msdyn_timewindowend: {},
			WebResource_msdyn_timewindowstart: {},
			workorderproductsgrid: {},
			workorderservicesgrid: {},
			workorderservicetasksgrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249: {
				Section: {
					_B14F3E67_E51B_4B3E_BB7F_A9CF0CF8DC17: {},
					f1tab_mainsettings_section_5: {},
					tab_3_section_1: {},
					tab_8_section_1: {},
					_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_2: {},
					_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_3: {}
				}
			},
			f1tab_mainsettings: {
				Section: {
					tab_7_section_1: {},
					f1tab_mainsettings_section_2: {},
					f1tab_mainsettings_section_3: {}
				}
			},
			tab_5: {
				Section: {
					tab_5_section_2: {}
				}
			},
			tab_6: {
				Section: {
					tab_6_section_2: {}
				}
			},
			tab_7: {
				Section: {
					tab_7_section_1_2: {}
				}
			},
			f1tab_additionalsettings: {
				Section: {
					f1tab_settings_section_address: {}
				}
			},
			tab_8: {
				Section: {
					tab_8_section_2: {}
				}
			},
			DeviceInsightsTab: {
				Section: {
					DeviceInsightsSection: {}
				}
			},
			f1tab_record_log: {
				Section: {
					tab_6_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var footer = {
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, footer, "footer_");
		form.Footer = footer;
		var process = devKit.LoadProcess(formContext);
		var _Work_Order_Business_Process = {
			msdyn_BillingAccount: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _Work_Order_Business_Process, "header_process_");
		process.Work_Order_Business_Process = _Work_Order_Business_Process;
		form.Process = process;
		var quickForm = {
			service_account_details: {}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			nav_msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_rma_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: {},
			navConnections: {},
			navDocument: {},
			navAudit: {},
			navProcessSessions: {},
			nav_msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_payment_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: {},
			nav_msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: {},
			nav_msdyn_msdyn_workorder_invoicedetail: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormWork_Order_Mobile = function(executionContext, defaultWebResourceName) {
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
			bookings: {},
			Incidents_List: {},
			msdyn_Address1: {},
			msdyn_Address2: {},
			msdyn_Address3: {},
			msdyn_BillingAccount: {},
			msdyn_City: {},
			msdyn_Country: {},
			msdyn_CustomerAsset: {},
			msdyn_EstimateSubtotalAmount: {},
			msdyn_Instructions: {},
			msdyn_InternalFlags: {},
			msdyn_Latitude: {},
			msdyn_Latitude_1: {},
			msdyn_Longitude: {},
			msdyn_Longitude_1: {},
			msdyn_mapcontrol: {},
			msdyn_name: {},
			msdyn_PostalCode: {},
			msdyn_PriceList: {},
			msdyn_PrimaryIncidentDescription: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_Priority: {},
			msdyn_ReportedByContact: {},
			msdyn_ServiceAccount: {},
			msdyn_ServiceTerritory: {},
			msdyn_StateOrProvince: {},
			msdyn_SubStatus: {},
			msdyn_SubtotalAmount: {},
			msdyn_SupportContact: {},
			msdyn_SystemStatus: {},
			msdyn_Taxable: {},
			msdyn_TaxCode: {},
			msdyn_TimeFromPromised: {},
			msdyn_TimeToPromised: {},
			msdyn_TotalAmount: {},
			msdyn_TotalSalesTax: {},
			msdyn_WorkOrderSummary: {},
			msdyn_WorkOrderType: {},
			notescontrol: {},
			OwnerId: {},
			TransactionCurrencyId: {},
			workorderproductsgrid: {},
			workorderservicesgrid: {},
			workorderservicetasksgrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249: {
				Section: {
					fstab_summary_section_general: {},
					fstab_summary_section_sales_tax: {},
					fstab_summary_section_primary_incident: {},
					fstab_summary_section_address: {},
					fstab_other_section_misc: {},
					fstab_other_section_total: {},
					_B8E326EE_5C21_4A18_BA55_E3B56966C249_COLUMN_2_SECTION_1: {},
					fstab_sub_grids_section: {}
				}
			},
			tab_8: {
				Section: {
					tab_8_section_2: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			msdyn_PrimaryIncidentType: {},
			msdyn_ServiceAccount: {},
			msdyn_SystemStatus: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Work_Order_Business_Process = {
			msdyn_BillingAccount: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _Work_Order_Business_Process, "header_process_");
		process.Work_Order_Business_Process = _Work_Order_Business_Process;
		form.Process = process;
		var quickForm = {

		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var navigation = {
			nav_msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_rma_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: {},
			nav_msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_payment_WorkOrder: {},
			navConnections: {},
			navDocument: {},
			navAudit: {},
			navProcessSessions: {},
			nav_msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: {},
			nav_msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: {},
			nav_msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: {},
			nav_msdyn_msdyn_workorder_invoicedetail: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	};
	LuckyMokey.FormQuick_Create_Work_Order = function(executionContext, defaultWebResourceName) {
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
			msdyn_BillingAccount: {},
			msdyn_CustomerAsset: {},
			msdyn_IoTAlert: {},
			msdyn_OpportunityId: {},
			msdyn_PriceList: {},
			msdyn_PrimaryIncidentDescription: {},
			msdyn_PrimaryIncidentEstimatedDuration: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_Priority: {},
			msdyn_ReportedByContact: {},
			msdyn_ServiceAccount: {},
			msdyn_ServiceRequest: {},
			msdyn_ServiceTerritory: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_WorkOrderSummary: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, body);
		var tab = {
			tab_1: {
				Section: {
					tab_1_column_1_section_1: {},
					tab_1_column_2_section_1: {},
					tab_1_column_3_section_1: {}
				}
			}
		}
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		return form;
	}
})(LuckyMokey || (LuckyMokey = {}));
/** @namespace OptionSet */
var OptionSet;
(function (OptionSet) {
	OptionSet.msdyn_workorder = {
		msdyn_SystemStatus : {
			Open_Unscheduled: 690970000,
			Open_Scheduled: 690970001,
			Open_In_Progress: 690970002,
			Open_Completed: 690970003,
			Closed_Posted: 690970004,
			Closed_Canceled: 690970005
		},
		msdyn_WorkLocation : {
			Onsite: 690970000,
			Facility: 690970001,
			Location_Agnostic: 690970002
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