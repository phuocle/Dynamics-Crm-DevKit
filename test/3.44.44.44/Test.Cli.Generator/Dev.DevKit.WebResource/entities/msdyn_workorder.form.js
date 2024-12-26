'use strict';
/** @namespace DevKit */
var DevKit;
(function (DevKit) {
	'use strict';
	DevKit.FormFSM_Workorder = function(executionContext, defaultWebResourceName) {
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
			bookingsSubGrid: {},
			msdyn_Address1: {},
			msdyn_BillingAccount: {},
			msdyn_CustomerAsset: {},
			msdyn_EstimateSubtotalAmount: {},
			msdyn_FunctionalLocation: {},
			msdyn_IoTAlert: {},
			msdyn_Latitude: {},
			msdyn_Longitude: {},
			msdyn_mapcontrol: {},
			msdyn_name: {},
			msdyn_PriceList: {},
			msdyn_PrimaryIncidentDescription: {},
			msdyn_PrimaryIncidentEstimatedDuration: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_PrimaryResolution: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SubtotalAmount: {},
			msdyn_SystemStatus: {},
			msdyn_Taxable: {},
			msdyn_TaxCode: {},
			msdyn_TotalAmount: {},
			msdyn_TotalSalesTax: {},
			msdyn_workhourtemplate: {},
			msdyn_WorkOrderSummary: {},
			msdyn_WorkOrderType: {},
			subgridProdcuts: {},
			subgridServices: {},
			subgridTasks: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249: {
				Section: {
					_B14F3E67_E51B_4B3E_BB7F_A9CF0CF8DC17: {},
					_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_7: {},
					bookingsSection: {},
					f1tab_mainsettings_section_5: {},
					tab_3_section_1: {},
					tab_8_section_1: {}
				}
			},
			tab_8: {
				Section: {
					tab_8_section_2: {}
				}
			},
			tabProducts: {
				Section: {
					sectionProducts: {}
				}
			},
			tabServices: {
				Section: {
					sectionServices: {}
				}
			},
			tabTasks: {
				Section: {
					sectionTasks: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {
			msdyn_BillingAccount: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _CFS_IoT_Alert_Process_Flow = {
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _CFS_IoT_Alert_Process_Flow, "header_process_");
		process.CFS_IoT_Alert_Process_Flow = _CFS_IoT_Alert_Process_Flow;
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
		var grid = {
			bookingsSubGrid: {},
			subgridProdcuts: {},
			subgridServices: {},
			subgridTasks: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: {},
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: {},
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: {},
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: {},
			msdyn_msdyn_workorder_invoicedetail: {},
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: {},
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: {},
			msdyn_workorder_adx_inviteredemptions: {},
			msdyn_workorder_adx_portalcomments: {},
			msdyn_workorder_Appointments: {},
			msdyn_workorder_Emails: {},
			msdyn_workorder_msdyn_bookingalerts: {},
			msdyn_workorder_msdyn_copilottranscripts: {},
			msdyn_workorder_msdyn_ocliveworkitems: {},
			msdyn_workorder_msdyn_ocoutboundmessages: {},
			msdyn_workorder_msdyn_ocsessions: {},
			msdyn_workorder_msdyn_ocvoicemails: {},
			msdyn_workorder_msdyn_workordernte_workorder: {},
			msdyn_workorder_msfp_alerts: {},
			msdyn_workorder_msfp_surveyinvites: {},
			msdyn_workorder_msfp_surveyresponses: {},
			msdyn_workorder_PhoneCalls: {},
			msdyn_workorder_QueueItems: {},
			msdyn_workorder_ServiceAppointments: {},
			msdyn_workorder_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormWork_Order = function(executionContext, defaultWebResourceName) {
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
			cc_1679607469845: {},
			cc_1680711963371: {},
			cc_1680711988813: {},
			cc_1680711993115: {},
			cc_1680719535566: {},
			msdyn_Address1: {},
			msdyn_Address2: {},
			msdyn_Address3: {},
			msdyn_Agreement: {},
			msdyn_BillingAccount: {},
			msdyn_City: {},
			msdyn_CostNTEPercent: {},
			msdyn_CostNTEPercent1: {},
			msdyn_Country: {},
			msdyn_CustomerAsset: {},
			msdyn_DateWindowEnd: {},
			msdyn_DateWindowStart: {},
			msdyn_FunctionalLocation: {},
			msdyn_Instructions: {},
			msdyn_Latitude: {},
			msdyn_Longitude: {},
			msdyn_mapcontrol: {},
			msdyn_name: {},
			msdyn_nottoexceedcostamount: {},
			msdyn_nottoexceedpriceamount: {},
			msdyn_phoneNumber: {},
			msdyn_PostalCode: {},
			msdyn_PriceList: {},
			msdyn_PriceNTEPercent: {},
			msdyn_PrimaryIncidentDescription: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_PrimaryResolution: {},
			msdyn_Priority: {},
			msdyn_ReportedByContact: {},
			msdyn_ServiceAccount: {},
			msdyn_StateOrProvince: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus1: {},
			msdyn_SystemStatus2: {},
			msdyn_Taxable: {},
			msdyn_TaxCode: {},
			msdyn_TimeFromPromised: {},
			msdyn_TimeToPromised: {},
			msdyn_TimeWindowEnd: {},
			msdyn_TimeWindowStart: {},
			msdyn_Trade: {},
			msdyn_WorkOrderSummary: {},
			msdyn_WorkOrderType: {},
			notescontrol: {},
			tasksAtAGlanceCard: {},
			tasksGrid: {},
			TeachingBubbleFormControl: {},
			TransactionCurrencyId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249: {
				Section: {
					_B8E326EE_5C21_4A18_BA55_E3B56966C249_FINANCIAL_SECTION: {},
					_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_7: {},
					_CBC73EB8_4930_458E_A87B_7DC0E48A99E6: {},
					asset_section: {},
					bookingcard_section: {},
					contact_section: {},
					copilot_recap_section: {}
				}
			},
			KnowledgeArticlesTab: {
				Section: {
					_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_8: {},
					KnowledgeArticlesTab_section_3: {},
					KnowledgeArticlesTab_section_4: {}
				}
			},
			lineitems_tab: {
				Section: {
					lineitems_tab_section_3: {},
					tab_11_section_1: {}
				}
			},
			tab_12: {
				Section: {
					tab_12_section_1: {}
				}
			},
			tasks_tab: {
				Section: {
					tasksAtAGlanceSection: {},
					tasksGridSection: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedOn: {},
			msdyn_CostNTEPercent: {},
			msdyn_PriceNTEPercent: {},
			msdyn_ServiceAccount: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {
			msdyn_BillingAccount: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _CFS_IoT_Alert_Process_Flow = {
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _CFS_IoT_Alert_Process_Flow, "header_process_");
		process.CFS_IoT_Alert_Process_Flow = _CFS_IoT_Alert_Process_Flow;
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
		var grid = {
			cc_1679607469845: {},
			tasksAtAGlanceCard: {},
			tasksGrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: {},
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: {},
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: {},
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: {},
			msdyn_msdyn_workorder_invoicedetail: {},
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: {},
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: {},
			msdyn_workorder_adx_inviteredemptions: {},
			msdyn_workorder_adx_portalcomments: {},
			msdyn_workorder_Appointments: {},
			msdyn_workorder_Emails: {},
			msdyn_workorder_msdyn_bookingalerts: {},
			msdyn_workorder_msdyn_copilottranscripts: {},
			msdyn_workorder_msdyn_ocliveworkitems: {},
			msdyn_workorder_msdyn_ocoutboundmessages: {},
			msdyn_workorder_msdyn_ocsessions: {},
			msdyn_workorder_msdyn_ocvoicemails: {},
			msdyn_workorder_msdyn_workordernte_workorder: {},
			msdyn_workorder_msfp_alerts: {},
			msdyn_workorder_msfp_surveyinvites: {},
			msdyn_workorder_msfp_surveyresponses: {},
			msdyn_workorder_PhoneCalls: {},
			msdyn_workorder_QueueItems: {},
			msdyn_workorder_ServiceAppointments: {},
			msdyn_workorder_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormWork_Order_Customer = function(executionContext, defaultWebResourceName) {
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
			msdyn_Address1: {},
			msdyn_Address2: {},
			msdyn_Address3: {},
			msdyn_BillingAccount: {},
			msdyn_City: {},
			msdyn_Country: {},
			msdyn_FunctionalLocation: {},
			msdyn_InternalFlags: {},
			msdyn_Latitude: {},
			msdyn_Longitude: {},
			msdyn_mapcontrol: {},
			msdyn_name: {},
			msdyn_phoneNumber: {},
			msdyn_PostalCode: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_ServiceAccount: {},
			msdyn_StateOrProvince: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_customer: {
				Section: {
					fstab_customer_section_address: {},
					fstab_customer_section_map: {}
				}
			},
			fstab_fieldservice: {
				Section: {
					fstab_fieldservice_section_general: {},
					fstab_fieldservice_section_others: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {
			msdyn_BillingAccount: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _CFS_IoT_Alert_Process_Flow = {
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _CFS_IoT_Alert_Process_Flow, "header_process_");
		process.CFS_IoT_Alert_Process_Flow = _CFS_IoT_Alert_Process_Flow;
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
		var navigation = {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: {},
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: {},
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: {},
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: {},
			msdyn_msdyn_workorder_invoicedetail: {},
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: {},
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: {},
			msdyn_workorder_adx_inviteredemptions: {},
			msdyn_workorder_adx_portalcomments: {},
			msdyn_workorder_Appointments: {},
			msdyn_workorder_Emails: {},
			msdyn_workorder_msdyn_bookingalerts: {},
			msdyn_workorder_msdyn_copilottranscripts: {},
			msdyn_workorder_msdyn_ocliveworkitems: {},
			msdyn_workorder_msdyn_ocoutboundmessages: {},
			msdyn_workorder_msdyn_ocsessions: {},
			msdyn_workorder_msdyn_ocvoicemails: {},
			msdyn_workorder_msdyn_workordernte_workorder: {},
			msdyn_workorder_msfp_alerts: {},
			msdyn_workorder_msfp_surveyinvites: {},
			msdyn_workorder_msfp_surveyresponses: {},
			msdyn_workorder_PhoneCalls: {},
			msdyn_workorder_QueueItems: {},
			msdyn_workorder_ServiceAppointments: {},
			msdyn_workorder_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormWork_Order_Mobile = function(executionContext, defaultWebResourceName) {
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
			KnowledgeArticlesSubGrid: {},
			msdyn_Address1: {},
			msdyn_Address11: {},
			msdyn_Address2: {},
			msdyn_Address3: {},
			msdyn_BillingAccount: {},
			msdyn_City: {},
			msdyn_CostNTEPercent: {},
			msdyn_Country: {},
			msdyn_CustomerAsset: {},
			msdyn_EstimateSubtotalAmount: {},
			msdyn_FunctionalLocation: {},
			msdyn_Instructions: {},
			msdyn_InternalFlags: {},
			msdyn_IoTAlert: {},
			msdyn_Latitude: {},
			msdyn_Latitude1: {},
			msdyn_Longitude: {},
			msdyn_Longitude1: {},
			msdyn_mapcontrol: {},
			msdyn_name: {},
			msdyn_ParentWorkOrder: {},
			msdyn_phoneNumber: {},
			msdyn_PostalCode: {},
			msdyn_PriceList: {},
			msdyn_PriceNTEPercent: {},
			msdyn_PrimaryIncidentDescription: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_PrimaryResolution: {},
			msdyn_Priority: {},
			msdyn_productsservicescost: {},
			msdyn_productsservicesestimatedcost: {},
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
			msdyn_totalestimatedaftertaxprice: {},
			msdyn_TotalSalesTax: {},
			msdyn_Trade: {},
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
					_B8E326EE_5C21_4A18_BA55_E3B56966C249_COLUMN_2_SECTION_1: {},
					_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_9: {},
					fstab_other_section_misc: {},
					fstab_other_section_total: {},
					fstab_sub_grids_section: {},
					fstab_summary_section_address: {},
					fstab_summary_section_general: {},
					fstab_summary_section_nte: {},
					fstab_summary_section_primary_incident: {},
					fstab_summary_section_sales_tax: {},
					total_cost_section: {}
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
		var _Case_to_Work_Order_Business_Process = {
			msdyn_BillingAccount: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _CFS_IoT_Alert_Process_Flow = {
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _CFS_IoT_Alert_Process_Flow, "header_process_");
		process.CFS_IoT_Alert_Process_Flow = _CFS_IoT_Alert_Process_Flow;
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
		var grid = {
			bookings: {},
			Incidents_List: {},
			KnowledgeArticlesSubGrid: {},
			workorderproductsgrid: {},
			workorderservicesgrid: {},
			workorderservicetasksgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: {},
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: {},
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: {},
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: {},
			msdyn_msdyn_workorder_invoicedetail: {},
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: {},
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: {},
			msdyn_workorder_adx_inviteredemptions: {},
			msdyn_workorder_adx_portalcomments: {},
			msdyn_workorder_Appointments: {},
			msdyn_workorder_Emails: {},
			msdyn_workorder_msdyn_bookingalerts: {},
			msdyn_workorder_msdyn_copilottranscripts: {},
			msdyn_workorder_msdyn_ocliveworkitems: {},
			msdyn_workorder_msdyn_ocoutboundmessages: {},
			msdyn_workorder_msdyn_ocsessions: {},
			msdyn_workorder_msdyn_ocvoicemails: {},
			msdyn_workorder_msdyn_workordernte_workorder: {},
			msdyn_workorder_msfp_alerts: {},
			msdyn_workorder_msfp_surveyinvites: {},
			msdyn_workorder_msfp_surveyresponses: {},
			msdyn_workorder_PhoneCalls: {},
			msdyn_workorder_QueueItems: {},
			msdyn_workorder_ServiceAppointments: {},
			msdyn_workorder_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormWork_Order_Notes = function(executionContext, defaultWebResourceName) {
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
			msdyn_InternalFlags: {},
			msdyn_name: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_ServiceAccount: {},
			msdyn_WorkOrderSummary: {},
			OwnerId: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_fieldservice: {
				Section: {
					fstab_fieldservice_section_general: {},
					fstab_fieldservice_section_others: {}
				}
			},
			fstab_notes: {
				Section: {
					fstab_notes_section_details: {},
					fstab_notes_section_summary: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {
			msdyn_BillingAccount: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _CFS_IoT_Alert_Process_Flow = {
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _CFS_IoT_Alert_Process_Flow, "header_process_");
		process.CFS_IoT_Alert_Process_Flow = _CFS_IoT_Alert_Process_Flow;
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
		var navigation = {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: {},
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: {},
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: {},
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: {},
			msdyn_msdyn_workorder_invoicedetail: {},
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: {},
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: {},
			msdyn_workorder_adx_inviteredemptions: {},
			msdyn_workorder_adx_portalcomments: {},
			msdyn_workorder_Appointments: {},
			msdyn_workorder_Emails: {},
			msdyn_workorder_msdyn_bookingalerts: {},
			msdyn_workorder_msdyn_copilottranscripts: {},
			msdyn_workorder_msdyn_ocliveworkitems: {},
			msdyn_workorder_msdyn_ocoutboundmessages: {},
			msdyn_workorder_msdyn_ocsessions: {},
			msdyn_workorder_msdyn_ocvoicemails: {},
			msdyn_workorder_msdyn_workordernte_workorder: {},
			msdyn_workorder_msfp_alerts: {},
			msdyn_workorder_msfp_surveyinvites: {},
			msdyn_workorder_msfp_surveyresponses: {},
			msdyn_workorder_PhoneCalls: {},
			msdyn_workorder_QueueItems: {},
			msdyn_workorder_ServiceAppointments: {},
			msdyn_workorder_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormWork_Order_Service = function(executionContext, defaultWebResourceName) {
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
			FsWorkOrderIncidentsGrid: {},
			FsWorkOrderProductsGrid: {},
			FsWorkOrderResolutionsGrid: {},
			FsWorkOrderServicesGrid: {},
			FsWorkOrderServiceTasksGrid: {},
			msdyn_CostNTEPercent: {},
			msdyn_CustomerAsset: {},
			msdyn_EstimateSubtotalAmount: {},
			msdyn_Instructions: {},
			msdyn_InternalFlags: {},
			msdyn_name: {},
			msdyn_PriceNTEPercent: {},
			msdyn_PrimaryIncidentDescription: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_PrimaryResolution: {},
			msdyn_Priority: {},
			msdyn_productsservicescost: {},
			msdyn_productsservicesestimatedcost: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SubtotalAmount: {},
			msdyn_SystemStatus: {},
			msdyn_TotalAmount: {},
			msdyn_totalestimatedaftertaxprice: {},
			msdyn_TotalSalesTax: {},
			msdyn_WorkOrderType: {},
			OwnerId: {},
			workorder_KASubgrid: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			fstab_fieldservice: {
				Section: {
					fstab_fieldservice_section_general: {},
					fstab_fieldservice_section_others: {}
				}
			},
			fstab_service: {
				Section: {
					fstab_service_section_subgrids: {},
					fstab_service_section_summary: {},
					tab_8_section_1: {},
					total_cost_section: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {
			msdyn_BillingAccount: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _CFS_IoT_Alert_Process_Flow = {
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _CFS_IoT_Alert_Process_Flow, "header_process_");
		process.CFS_IoT_Alert_Process_Flow = _CFS_IoT_Alert_Process_Flow;
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
		var grid = {
			FsWorkOrderIncidentsGrid: {},
			FsWorkOrderProductsGrid: {},
			FsWorkOrderResolutionsGrid: {},
			FsWorkOrderServicesGrid: {},
			FsWorkOrderServiceTasksGrid: {},
			workorder_KASubgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: {},
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: {},
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: {},
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: {},
			msdyn_msdyn_workorder_invoicedetail: {},
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: {},
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: {},
			msdyn_workorder_adx_inviteredemptions: {},
			msdyn_workorder_adx_portalcomments: {},
			msdyn_workorder_Appointments: {},
			msdyn_workorder_Emails: {},
			msdyn_workorder_msdyn_bookingalerts: {},
			msdyn_workorder_msdyn_copilottranscripts: {},
			msdyn_workorder_msdyn_ocliveworkitems: {},
			msdyn_workorder_msdyn_ocoutboundmessages: {},
			msdyn_workorder_msdyn_ocsessions: {},
			msdyn_workorder_msdyn_ocvoicemails: {},
			msdyn_workorder_msdyn_workordernte_workorder: {},
			msdyn_workorder_msfp_alerts: {},
			msdyn_workorder_msfp_surveyinvites: {},
			msdyn_workorder_msfp_surveyresponses: {},
			msdyn_workorder_PhoneCalls: {},
			msdyn_workorder_QueueItems: {},
			msdyn_workorder_ServiceAppointments: {},
			msdyn_workorder_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormWork_Order_Legacy = function(executionContext, defaultWebResourceName) {
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
			KnowledgeArticleSubGrid: {},
			ModifiedBy: {},
			ModifiedOn: {},
			msdyn_Address1: {},
			msdyn_Address11: {},
			msdyn_Address2: {},
			msdyn_Address3: {},
			msdyn_AddressName: {},
			msdyn_Agreement: {},
			msdyn_BillingAccount: {},
			msdyn_City: {},
			msdyn_ClosedBy: {},
			msdyn_completedon: {},
			msdyn_CostNTEPercent: {},
			msdyn_Country: {},
			msdyn_CustomerAsset: {},
			msdyn_DateWindowEnd: {},
			msdyn_DateWindowStart: {},
			msdyn_EstimateSubtotalAmount: {},
			msdyn_firstarrivedon: {},
			msdyn_FunctionalLocation: {},
			msdyn_Instructions: {},
			msdyn_IoTAlert: {},
			msdyn_IoTAlert1: {},
			msdyn_Latitude: {},
			msdyn_Latitude1: {},
			msdyn_Longitude: {},
			msdyn_Longitude1: {},
			msdyn_mapcontrol: {},
			msdyn_name: {},
			msdyn_nottoexceedcostamount: {},
			msdyn_nottoexceedpriceamount: {},
			msdyn_OpportunityId: {},
			msdyn_ParentWorkOrder: {},
			msdyn_phoneNumber: {},
			msdyn_PostalCode: {},
			msdyn_PriceList: {},
			msdyn_PriceNTEPercent: {},
			msdyn_PrimaryIncidentDescription: {},
			msdyn_PrimaryIncidentEstimatedDuration: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_PrimaryResolution: {},
			msdyn_Priority: {},
			msdyn_productsservicescost: {},
			msdyn_productsservicesestimatedcost: {},
			msdyn_ReportedByContact: {},
			msdyn_ServiceAccount: {},
			msdyn_ServiceAccount1: {},
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
			msdyn_totalestimatedaftertaxprice: {},
			msdyn_totalestimatedduration: {},
			msdyn_TotalSalesTax: {},
			msdyn_Trade: {},
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
					_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_2: {},
					_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_3: {},
					_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_7: {},
					f1tab_mainsettings_section_5: {},
					tab_3_section_1: {},
					tab_8_section_1: {},
					total_cost_section: {}
				}
			},
			DeviceInsightsTab: {
				Section: {
					DeviceInsightsSection: {}
				}
			},
			f1tab_additionalsettings: {
				Section: {
					f1tab_settings_section_address: {}
				}
			},
			f1tab_mainsettings: {
				Section: {
					f1tab_mainsettings_section_2: {},
					f1tab_mainsettings_section_3: {},
					tab_7_section_1: {}
				}
			},
			f1tab_record_log: {
				Section: {
					tab_6_section_1: {}
				}
			},
			KnowledgeArticlesTab: {
				Section: {
					_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_8: {}
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
			msdyn_CostNTEPercent: {},
			msdyn_PriceNTEPercent: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {
			msdyn_BillingAccount: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _CFS_IoT_Alert_Process_Flow = {
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _CFS_IoT_Alert_Process_Flow, "header_process_");
		process.CFS_IoT_Alert_Process_Flow = _CFS_IoT_Alert_Process_Flow;
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
			service_account_details: {
				Address1_Telephone1: {},
				EMailAddress1: {},
				PrimaryContactId: {}
			}
		};
		devKit.LoadQuickForms(formContext, quickForm);
		form.QuickForm = quickForm;
		var grid = {
			bookings: {},
			Incidents_List: {},
			KnowledgeArticleSubGrid: {},
			workorderproductsgrid: {},
			workorderservicesgrid: {},
			workorderservicetasksgrid: {},
		};
		devKit.LoadGrids(formContext, grid);
		form.Grid = grid;
		var navigation = {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: {},
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: {},
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: {},
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: {},
			msdyn_msdyn_workorder_invoicedetail: {},
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: {},
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: {},
			msdyn_workorder_adx_inviteredemptions: {},
			msdyn_workorder_adx_portalcomments: {},
			msdyn_workorder_Appointments: {},
			msdyn_workorder_Emails: {},
			msdyn_workorder_msdyn_bookingalerts: {},
			msdyn_workorder_msdyn_copilottranscripts: {},
			msdyn_workorder_msdyn_ocliveworkitems: {},
			msdyn_workorder_msdyn_ocoutboundmessages: {},
			msdyn_workorder_msdyn_ocsessions: {},
			msdyn_workorder_msdyn_ocvoicemails: {},
			msdyn_workorder_msdyn_workordernte_workorder: {},
			msdyn_workorder_msfp_alerts: {},
			msdyn_workorder_msfp_surveyinvites: {},
			msdyn_workorder_msfp_surveyresponses: {},
			msdyn_workorder_PhoneCalls: {},
			msdyn_workorder_QueueItems: {},
			msdyn_workorder_ServiceAppointments: {},
			msdyn_workorder_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormWork_Order_M365 = function(executionContext, defaultWebResourceName) {
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
			msdyn_Address1: {},
			msdyn_Address2: {},
			msdyn_Address3: {},
			msdyn_City: {},
			msdyn_Country: {},
			msdyn_CustomerAsset: {},
			msdyn_DateWindowEnd: {},
			msdyn_DateWindowStart: {},
			msdyn_FunctionalLocation: {},
			msdyn_Latitude: {},
			msdyn_Longitude: {},
			msdyn_name: {},
			msdyn_phoneNumber: {},
			msdyn_PostalCode: {},
			msdyn_PrimaryIncidentDescription: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_Priority: {},
			msdyn_ReportedByContact: {},
			msdyn_ServiceAccount: {},
			msdyn_StateOrProvince: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_TimeFromPromised: {},
			msdyn_TimeToPromised: {},
			msdyn_TimeWindowEnd: {},
			msdyn_TimeWindowStart: {},
			msdyn_WorkOrderSummary: {},
			msdyn_WorkOrderType: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249: {
				Section: {
					_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_10: {},
					_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_11: {},
					_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_7: {},
					_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_9: {},
					_CBC73EB8_4930_458E_A87B_7DC0E48A99E6: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {
			msdyn_BillingAccount: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _CFS_IoT_Alert_Process_Flow = {
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _CFS_IoT_Alert_Process_Flow, "header_process_");
		process.CFS_IoT_Alert_Process_Flow = _CFS_IoT_Alert_Process_Flow;
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
		var navigation = {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: {},
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: {},
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: {},
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: {},
			msdyn_msdyn_workorder_invoicedetail: {},
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: {},
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: {},
			msdyn_workorder_adx_inviteredemptions: {},
			msdyn_workorder_adx_portalcomments: {},
			msdyn_workorder_Appointments: {},
			msdyn_workorder_Emails: {},
			msdyn_workorder_msdyn_bookingalerts: {},
			msdyn_workorder_msdyn_copilottranscripts: {},
			msdyn_workorder_msdyn_ocliveworkitems: {},
			msdyn_workorder_msdyn_ocoutboundmessages: {},
			msdyn_workorder_msdyn_ocsessions: {},
			msdyn_workorder_msdyn_ocvoicemails: {},
			msdyn_workorder_msdyn_workordernte_workorder: {},
			msdyn_workorder_msfp_alerts: {},
			msdyn_workorder_msfp_surveyinvites: {},
			msdyn_workorder_msfp_surveyresponses: {},
			msdyn_workorder_PhoneCalls: {},
			msdyn_workorder_QueueItems: {},
			msdyn_workorder_ServiceAppointments: {},
			msdyn_workorder_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormWork_Order_Create = function(executionContext, defaultWebResourceName) {
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
			msdyn_PriceList: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_ServiceAccount: {},
			msdyn_SystemStatus: {},
			msdyn_Taxable: {},
			msdyn_TaxCode: {},
			msdyn_WorkOrderSummary: {},
			msdyn_WorkOrderType: {},
			OwnerId: {},
			product: {},
			service: {},
			servicetask: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			maintab: {
				Section: {
					_B14F3E67_E51B_4B3E_BB7F_A9CF0CF8DC17: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {
			msdyn_BillingAccount: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _CFS_IoT_Alert_Process_Flow = {
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _CFS_IoT_Alert_Process_Flow, "header_process_");
		process.CFS_IoT_Alert_Process_Flow = _CFS_IoT_Alert_Process_Flow;
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
		var navigation = {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: {},
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: {},
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: {},
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: {},
			msdyn_msdyn_workorder_invoicedetail: {},
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: {},
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: {},
			msdyn_workorder_adx_inviteredemptions: {},
			msdyn_workorder_adx_portalcomments: {},
			msdyn_workorder_Appointments: {},
			msdyn_workorder_Emails: {},
			msdyn_workorder_msdyn_bookingalerts: {},
			msdyn_workorder_msdyn_copilottranscripts: {},
			msdyn_workorder_msdyn_ocliveworkitems: {},
			msdyn_workorder_msdyn_ocoutboundmessages: {},
			msdyn_workorder_msdyn_ocsessions: {},
			msdyn_workorder_msdyn_ocvoicemails: {},
			msdyn_workorder_msdyn_workordernte_workorder: {},
			msdyn_workorder_msfp_alerts: {},
			msdyn_workorder_msfp_surveyinvites: {},
			msdyn_workorder_msfp_surveyresponses: {},
			msdyn_workorder_PhoneCalls: {},
			msdyn_workorder_QueueItems: {},
			msdyn_workorder_ServiceAppointments: {},
			msdyn_workorder_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormWork_Order_Light = function(executionContext, defaultWebResourceName) {
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
			cc_1680719535566: {},
			msdyn_Address1: {},
			msdyn_Address2: {},
			msdyn_Address3: {},
			msdyn_Agreement: {},
			msdyn_BillingAccount: {},
			msdyn_City: {},
			msdyn_CostNTEPercent: {},
			msdyn_Country: {},
			msdyn_CustomerAsset: {},
			msdyn_DateWindowEnd: {},
			msdyn_DateWindowStart: {},
			msdyn_FunctionalLocation: {},
			msdyn_Instructions: {},
			msdyn_Latitude: {},
			msdyn_Longitude: {},
			msdyn_mapcontrol: {},
			msdyn_name: {},
			msdyn_nottoexceedcostamount: {},
			msdyn_nottoexceedpriceamount: {},
			msdyn_PostalCode: {},
			msdyn_PriceList: {},
			msdyn_PriceNTEPercent: {},
			msdyn_PrimaryIncidentDescription: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_PrimaryResolution: {},
			msdyn_Priority: {},
			msdyn_ReportedByContact: {},
			msdyn_ServiceAccount: {},
			msdyn_StateOrProvince: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus1: {},
			msdyn_Taxable: {},
			msdyn_TaxCode: {},
			msdyn_TimeFromPromised: {},
			msdyn_TimeToPromised: {},
			msdyn_TimeWindowEnd: {},
			msdyn_TimeWindowStart: {},
			msdyn_Trade: {},
			msdyn_WorkOrderSummary: {},
			msdyn_WorkOrderType: {},
			notescontrol: {}
		};
		devKit.LoadFields(formContext, body);
		var tab = {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249: {
				Section: {
					_B8E326EE_5C21_4A18_BA55_E3B56966C249_FINANCIAL_SECTION: {},
					_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_7: {},
					_D5928953_2A00_4C1B_9306_3B875CCAB7D5: {},
					asset_section: {},
					contact_section: {}
				}
			},
			booking_tab: {
				Section: {
					bookingcard_section: {}
				}
			},
			tab_12: {
				Section: {
					tab_12_section_1: {}
				}
			}
		};
		devKit.LoadTabs(formContext, tab);
		body.Tab = tab;
		form.Body = body;
		var header = {
			CreatedOn: {},
			msdyn_ServiceAccount: {}
		};
		devKit.LoadFields(formContext, header, "header_");
		form.Header = header;
		var process = devKit.LoadProcess(formContext);
		var _Case_to_Work_Order_Business_Process = {
			msdyn_BillingAccount: {},
			msdyn_PrimaryIncidentType: {},
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _Case_to_Work_Order_Business_Process, "header_process_");
		process.Case_to_Work_Order_Business_Process = _Case_to_Work_Order_Business_Process;
		var _CFS_IoT_Alert_Process_Flow = {
			msdyn_Priority: {},
			msdyn_ServiceAccount: {},
			msdyn_SubStatus: {},
			msdyn_SystemStatus: {},
			msdyn_SystemStatus_1: {},
			msdyn_WorkOrderType: {}
		}
		devKit.LoadFields(formContext, _CFS_IoT_Alert_Process_Flow, "header_process_");
		process.CFS_IoT_Alert_Process_Flow = _CFS_IoT_Alert_Process_Flow;
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
		var navigation = {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: {},
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: {},
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: {},
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: {},
			msdyn_msdyn_workorder_invoicedetail: {},
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: {},
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: {},
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: {},
			msdyn_workorder_adx_inviteredemptions: {},
			msdyn_workorder_adx_portalcomments: {},
			msdyn_workorder_Appointments: {},
			msdyn_workorder_Emails: {},
			msdyn_workorder_msdyn_bookingalerts: {},
			msdyn_workorder_msdyn_copilottranscripts: {},
			msdyn_workorder_msdyn_ocliveworkitems: {},
			msdyn_workorder_msdyn_ocoutboundmessages: {},
			msdyn_workorder_msdyn_ocsessions: {},
			msdyn_workorder_msdyn_ocvoicemails: {},
			msdyn_workorder_msdyn_workordernte_workorder: {},
			msdyn_workorder_msfp_alerts: {},
			msdyn_workorder_msfp_surveyinvites: {},
			msdyn_workorder_msfp_surveyresponses: {},
			msdyn_workorder_PhoneCalls: {},
			msdyn_workorder_QueueItems: {},
			msdyn_workorder_ServiceAppointments: {},
			msdyn_workorder_Tasks: {}
		};
		devKit.LoadNavigations(formContext, navigation);
		form.Navigation = navigation;
		form.Utility = devKit.LoadUtility(defaultWebResourceName);
		form.ExecutionContext = devKit.LoadExecutionContext(executionContext);
		devKit.LoadOthers(formContext, form, defaultWebResourceName);
		return form;
	};
	DevKit.FormQuick_Create_Work_Order = function(executionContext, defaultWebResourceName) {
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
			msdyn_FunctionalLocation: {},
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
			msdyn_Taxable: {},
			msdyn_TaxCode: {},
			msdyn_Trade: {},
			msdyn_WorkOrderSummary: {},
			msdyn_WorkOrderType: {}
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
	OptionSet.msdyn_workorder = {
		msdyn_SystemStatus : {
			Canceled: 690970005,
			Completed: 690970003,
			In_Progress: 690970002,
			Posted: 690970004,
			Scheduled: 690970001,
			Unscheduled: 690970000
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