﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormFSM_Workorder {
		interface tab__B8E326EE_5C21_4A18_BA55_E3B56966C249_Sections {
			_B14F3E67_E51B_4B3E_BB7F_A9CF0CF8DC17: DevKit.Controls.Section;
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_7: DevKit.Controls.Section;
			bookingsSection: DevKit.Controls.Section;
			f1tab_mainsettings_section_5: DevKit.Controls.Section;
			tab_3_section_1: DevKit.Controls.Section;
			tab_8_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_8_Sections {
			tab_8_section_2: DevKit.Controls.Section;
		}
		interface tab_tabProducts_Sections {
			sectionProducts: DevKit.Controls.Section;
		}
		interface tab_tabServices_Sections {
			sectionServices: DevKit.Controls.Section;
		}
		interface tab_tabTasks_Sections {
			sectionTasks: DevKit.Controls.Section;
		}
		interface tab__B8E326EE_5C21_4A18_BA55_E3B56966C249 extends DevKit.Controls.ITab {
			Section: tab__B8E326EE_5C21_4A18_BA55_E3B56966C249_Sections;
		}
		interface tab_tab_8 extends DevKit.Controls.ITab {
			Section: tab_tab_8_Sections;
		}
		interface tab_tabProducts extends DevKit.Controls.ITab {
			Section: tab_tabProducts_Sections;
		}
		interface tab_tabServices extends DevKit.Controls.ITab {
			Section: tab_tabServices_Sections;
		}
		interface tab_tabTasks extends DevKit.Controls.ITab {
			Section: tab_tabTasks_Sections;
		}
		interface Tabs {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249: tab__B8E326EE_5C21_4A18_BA55_E3B56966C249;
			tab_8: tab_tab_8;
			tabProducts: tab_tabProducts;
			tabServices: tab_tabServices;
			tabTasks: tab_tabTasks;
		}
		interface Body {
			Tab: Tabs;
			msdyn_Address1: DevKit.Controls.String;
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Enter the summary of total estimated billing amount for this work order */
			msdyn_EstimateSubtotalAmount: DevKit.Controls.Money;
			/** Workorder's functional location */
			msdyn_FunctionalLocation: DevKit.Controls.Lookup;
			/** The iot alert which initiated this work order. */
			msdyn_IoTAlert: DevKit.Controls.Lookup;
			msdyn_Latitude: DevKit.Controls.Double;
			msdyn_Longitude: DevKit.Controls.Double;
			msdyn_mapcontrol: DevKit.Controls.String;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Price List that controls pricing for products / services added to this work order. By default the system will use the Price List specified on the account */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Incident description */
			msdyn_PrimaryIncidentDescription: DevKit.Controls.String;
			/** Shows the time estimated to resolve this incident. */
			msdyn_PrimaryIncidentEstimatedDuration: DevKit.Controls.Integer;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			msdyn_PrimaryResolution: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Enter the summary of subtotal billing amount excluding tax for this work order. */
			msdyn_SubtotalAmount: DevKit.Controls.Money;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Shows whether sales tax is to be charged for this work order. */
			msdyn_Taxable: DevKit.Controls.Boolean;
			/** Tax Code to be used to calculate tax when Work Order is taxable. By default the system will use the tax code specified on the service account */
			msdyn_TaxCode: DevKit.Controls.Lookup;
			/** Enter the summary of total billing amount for this work order. */
			msdyn_TotalAmount: DevKit.Controls.Money;
			/** Enter the summary of total sales tax charged for this work order. */
			msdyn_TotalSalesTax: DevKit.Controls.Money;
			/** The working hours for a requirement. */
			msdyn_workhourtemplate: DevKit.Controls.Lookup;
			/** Type a summary description of the job. */
			msdyn_WorkOrderSummary: DevKit.Controls.String;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface Navigation {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_invoicedetail: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Appointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Emails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_workordernte_workorder: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_workorder_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_workorder_QueueItems: DevKit.Controls.NavigationItem,
			msdyn_workorder_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Tasks: DevKit.Controls.NavigationItem
		}
		interface ProcessCase_to_Work_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessCFS_IoT_Alert_Process_Flow {
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessWork_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			CFS_IoT_Alert_Process_Flow: ProcessCFS_IoT_Alert_Process_Flow;
			Work_Order_Business_Process: ProcessWork_Order_Business_Process;
		}
		interface Grid {
			bookingsSubGrid: DevKit.Controls.Grid;
			subgridProdcuts: DevKit.Controls.Grid;
			subgridServices: DevKit.Controls.Grid;
			subgridTasks: DevKit.Controls.Grid;
		}
	}
	class FormFSM_Workorder extends DevKit.IForm {
		/**
		* FSM Workorder [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form FSM_Workorder */
		Body: DevKit.FormFSM_Workorder.Body;
		/** The Navigation of form FSM_Workorder */
		Navigation: DevKit.FormFSM_Workorder.Navigation;
		/** The Process of form FSM_Workorder */
		Process: DevKit.FormFSM_Workorder.Process;
		/** The Grid of form FSM_Workorder */
		Grid: DevKit.FormFSM_Workorder.Grid;
		/** The SidePanes of form FSM_Workorder */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormWork_Order {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Indicates the percentage proximity or overage of the work order cost based on applied Cost not-to-exceed (rounded up to the nearest whole number). */
			msdyn_CostNTEPercent: DevKit.Controls.Integer;
			/** Indicates the percentage proximity or overage of the work order price based on applied Price not-to-exceed (rounded up to the nearest whole number). */
			msdyn_PriceNTEPercent: DevKit.Controls.Integer;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
		}
		interface tab__B8E326EE_5C21_4A18_BA55_E3B56966C249_Sections {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_FINANCIAL_SECTION: DevKit.Controls.Section;
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_7: DevKit.Controls.Section;
			_CBC73EB8_4930_458E_A87B_7DC0E48A99E6: DevKit.Controls.Section;
			asset_section: DevKit.Controls.Section;
			bookingcard_section: DevKit.Controls.Section;
			contact_section: DevKit.Controls.Section;
			copilot_recap_section: DevKit.Controls.Section;
		}
		interface tab_KnowledgeArticlesTab_Sections {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_8: DevKit.Controls.Section;
			KnowledgeArticlesTab_section_3: DevKit.Controls.Section;
			KnowledgeArticlesTab_section_4: DevKit.Controls.Section;
		}
		interface tab_lineitems_tab_Sections {
			lineitems_tab_section_3: DevKit.Controls.Section;
			tab_11_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_12_Sections {
			tab_12_section_1: DevKit.Controls.Section;
		}
		interface tab_tasks_tab_Sections {
			tasksAtAGlanceSection: DevKit.Controls.Section;
			tasksGridSection: DevKit.Controls.Section;
		}
		interface tab__B8E326EE_5C21_4A18_BA55_E3B56966C249 extends DevKit.Controls.ITab {
			Section: tab__B8E326EE_5C21_4A18_BA55_E3B56966C249_Sections;
		}
		interface tab_KnowledgeArticlesTab extends DevKit.Controls.ITab {
			Section: tab_KnowledgeArticlesTab_Sections;
		}
		interface tab_lineitems_tab extends DevKit.Controls.ITab {
			Section: tab_lineitems_tab_Sections;
		}
		interface tab_tab_12 extends DevKit.Controls.ITab {
			Section: tab_tab_12_Sections;
		}
		interface tab_tasks_tab extends DevKit.Controls.ITab {
			Section: tab_tasks_tab_Sections;
		}
		interface Tabs {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249: tab__B8E326EE_5C21_4A18_BA55_E3B56966C249;
			KnowledgeArticlesTab: tab_KnowledgeArticlesTab;
			lineitems_tab: tab_lineitems_tab;
			tab_12: tab_tab_12;
			tasks_tab: tab_tasks_tab;
		}
		interface Body {
			Tab: Tabs;
			cc_1680711963371: DevKit.Controls.ActionCards;
			cc_1680711988813: DevKit.Controls.ActionCards;
			cc_1680711993115: DevKit.Controls.ActionCards;
			cc_1680719535566: DevKit.Controls.ActionCards;
			msdyn_Address1: DevKit.Controls.String;
			msdyn_Address2: DevKit.Controls.String;
			msdyn_Address3: DevKit.Controls.String;
			/** Shows the agreement linked to this work order. */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			msdyn_City: DevKit.Controls.String;
			/** Indicates the percentage proximity or overage of the work order cost based on applied Cost not-to-exceed (rounded up to the nearest whole number). */
			msdyn_CostNTEPercent: DevKit.Controls.Integer;
			/** Indicates the percentage proximity or overage of the work order cost based on applied Cost not-to-exceed (rounded up to the nearest whole number). */
			msdyn_CostNTEPercent1: DevKit.Controls.Integer;
			msdyn_Country: DevKit.Controls.String;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			msdyn_DateWindowEnd: DevKit.Controls.Date;
			msdyn_DateWindowStart: DevKit.Controls.Date;
			/** Workorder's functional location */
			msdyn_FunctionalLocation: DevKit.Controls.Lookup;
			/** Shows instructions for booked resources. By default, this information is taken from the work order instructions field on the service account. */
			msdyn_Instructions: DevKit.Controls.String;
			msdyn_Latitude: DevKit.Controls.Double;
			msdyn_Longitude: DevKit.Controls.Double;
			msdyn_mapcontrol: DevKit.Controls.String;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The value of not-to-exceed cost for the work order in base currency. */
			msdyn_nottoexceedcostamount: DevKit.Controls.Money;
			/** The value of not-to-exceed price for the work order in base currency. */
			msdyn_nottoexceedpriceamount: DevKit.Controls.Money;
			msdyn_phoneNumber: DevKit.Controls.String;
			msdyn_PostalCode: DevKit.Controls.String;
			/** Price List that controls pricing for products / services added to this work order. By default the system will use the Price List specified on the account */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Indicates the percentage proximity or overage of the work order price based on applied Price not-to-exceed (rounded up to the nearest whole number). */
			msdyn_PriceNTEPercent: DevKit.Controls.Integer;
			/** Incident description */
			msdyn_PrimaryIncidentDescription: DevKit.Controls.String;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			msdyn_PrimaryResolution: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** The contact that reported this Work Order */
			msdyn_ReportedByContact: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			msdyn_StateOrProvince: DevKit.Controls.String;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus1: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus2: DevKit.Controls.OptionSet;
			/** Shows whether sales tax is to be charged for this work order. */
			msdyn_Taxable: DevKit.Controls.Boolean;
			/** Tax Code to be used to calculate tax when Work Order is taxable. By default the system will use the tax code specified on the service account */
			msdyn_TaxCode: DevKit.Controls.Lookup;
			/** Enter the starting range of the time promised to the account that incidents will be resolved. */
			msdyn_TimeFromPromised: DevKit.Controls.DateTime;
			/** Enter the ending range of the time promised to the account that incidents will be resolved. */
			msdyn_TimeToPromised: DevKit.Controls.DateTime;
			msdyn_TimeWindowEnd: DevKit.Controls.DateTime;
			msdyn_TimeWindowStart: DevKit.Controls.DateTime;
			/** Select the Trade that associated with the Work Order. */
			msdyn_Trade: DevKit.Controls.Lookup;
			/** Type a summary description of the job. */
			msdyn_WorkOrderSummary: DevKit.Controls.String;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_invoicedetail: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Appointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Emails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_workordernte_workorder: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_workorder_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_workorder_QueueItems: DevKit.Controls.NavigationItem,
			msdyn_workorder_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Tasks: DevKit.Controls.NavigationItem
		}
		interface ProcessCase_to_Work_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessCFS_IoT_Alert_Process_Flow {
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessWork_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			CFS_IoT_Alert_Process_Flow: ProcessCFS_IoT_Alert_Process_Flow;
			Work_Order_Business_Process: ProcessWork_Order_Business_Process;
		}
		interface Grid {
			cc_1679607469845: DevKit.Controls.Grid;
			tasksAtAGlanceCard: DevKit.Controls.Grid;
			tasksGrid: DevKit.Controls.Grid;
		}
	}
	class FormWork_Order extends DevKit.IForm {
		/**
		* Work Order [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Work_Order */
		Body: DevKit.FormWork_Order.Body;
		/** The Header section of form Work_Order */
		Header: DevKit.FormWork_Order.Header;
		/** The Navigation of form Work_Order */
		Navigation: DevKit.FormWork_Order.Navigation;
		/** The Process of form Work_Order */
		Process: DevKit.FormWork_Order.Process;
		/** The Grid of form Work_Order */
		Grid: DevKit.FormWork_Order.Grid;
		/** The SidePanes of form Work_Order */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormWork_Order_Customer {
		interface tab_fstab_customer_Sections {
			fstab_customer_section_address: DevKit.Controls.Section;
			fstab_customer_section_map: DevKit.Controls.Section;
		}
		interface tab_fstab_fieldservice_Sections {
			fstab_fieldservice_section_general: DevKit.Controls.Section;
			fstab_fieldservice_section_others: DevKit.Controls.Section;
		}
		interface tab_fstab_customer extends DevKit.Controls.ITab {
			Section: tab_fstab_customer_Sections;
		}
		interface tab_fstab_fieldservice extends DevKit.Controls.ITab {
			Section: tab_fstab_fieldservice_Sections;
		}
		interface Tabs {
			fstab_customer: tab_fstab_customer;
			fstab_fieldservice: tab_fstab_fieldservice;
		}
		interface Body {
			Tab: Tabs;
			msdyn_Address1: DevKit.Controls.String;
			msdyn_Address2: DevKit.Controls.String;
			msdyn_Address3: DevKit.Controls.String;
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			msdyn_City: DevKit.Controls.String;
			msdyn_Country: DevKit.Controls.String;
			/** Workorder's functional location */
			msdyn_FunctionalLocation: DevKit.Controls.Lookup;
			/** For internal use only. */
			msdyn_InternalFlags: DevKit.Controls.String;
			msdyn_Latitude: DevKit.Controls.Double;
			msdyn_Longitude: DevKit.Controls.Double;
			msdyn_mapcontrol: DevKit.Controls.String;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_phoneNumber: DevKit.Controls.String;
			msdyn_PostalCode: DevKit.Controls.String;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			msdyn_StateOrProvince: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_invoicedetail: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Appointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Emails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_workordernte_workorder: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_workorder_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_workorder_QueueItems: DevKit.Controls.NavigationItem,
			msdyn_workorder_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Tasks: DevKit.Controls.NavigationItem
		}
		interface ProcessCase_to_Work_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessCFS_IoT_Alert_Process_Flow {
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessWork_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			CFS_IoT_Alert_Process_Flow: ProcessCFS_IoT_Alert_Process_Flow;
			Work_Order_Business_Process: ProcessWork_Order_Business_Process;
		}
	}
	class FormWork_Order_Customer extends DevKit.IForm {
		/**
		* Work Order - Customer [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Work_Order_Customer */
		Body: DevKit.FormWork_Order_Customer.Body;
		/** The Navigation of form Work_Order_Customer */
		Navigation: DevKit.FormWork_Order_Customer.Navigation;
		/** The Process of form Work_Order_Customer */
		Process: DevKit.FormWork_Order_Customer.Process;
		/** The SidePanes of form Work_Order_Customer */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormWork_Order_Mobile {
		interface Header extends DevKit.Controls.IHeader {
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
		}
		interface tab__B8E326EE_5C21_4A18_BA55_E3B56966C249_Sections {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_COLUMN_2_SECTION_1: DevKit.Controls.Section;
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_9: DevKit.Controls.Section;
			fstab_other_section_misc: DevKit.Controls.Section;
			fstab_other_section_total: DevKit.Controls.Section;
			fstab_sub_grids_section: DevKit.Controls.Section;
			fstab_summary_section_address: DevKit.Controls.Section;
			fstab_summary_section_general: DevKit.Controls.Section;
			fstab_summary_section_nte: DevKit.Controls.Section;
			fstab_summary_section_primary_incident: DevKit.Controls.Section;
			fstab_summary_section_sales_tax: DevKit.Controls.Section;
			total_cost_section: DevKit.Controls.Section;
		}
		interface tab_tab_8_Sections {
			tab_8_section_2: DevKit.Controls.Section;
		}
		interface tab__B8E326EE_5C21_4A18_BA55_E3B56966C249 extends DevKit.Controls.ITab {
			Section: tab__B8E326EE_5C21_4A18_BA55_E3B56966C249_Sections;
		}
		interface tab_tab_8 extends DevKit.Controls.ITab {
			Section: tab_tab_8_Sections;
		}
		interface Tabs {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249: tab__B8E326EE_5C21_4A18_BA55_E3B56966C249;
			tab_8: tab_tab_8;
		}
		interface Body {
			Tab: Tabs;
			msdyn_Address1: DevKit.Controls.String;
			msdyn_Address11: DevKit.Controls.String;
			msdyn_Address2: DevKit.Controls.String;
			msdyn_Address3: DevKit.Controls.String;
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			msdyn_City: DevKit.Controls.String;
			/** Indicates the percentage proximity or overage of the work order cost based on applied Cost not-to-exceed (rounded up to the nearest whole number). */
			msdyn_CostNTEPercent: DevKit.Controls.Integer;
			msdyn_Country: DevKit.Controls.String;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Enter the summary of total estimated billing amount for this work order */
			msdyn_EstimateSubtotalAmount: DevKit.Controls.Money;
			/** Workorder's functional location */
			msdyn_FunctionalLocation: DevKit.Controls.Lookup;
			/** Shows instructions for booked resources. By default, this information is taken from the work order instructions field on the service account. */
			msdyn_Instructions: DevKit.Controls.String;
			/** For internal use only. */
			msdyn_InternalFlags: DevKit.Controls.String;
			/** The iot alert which initiated this work order. */
			msdyn_IoTAlert: DevKit.Controls.Lookup;
			msdyn_Latitude: DevKit.Controls.Double;
			msdyn_Latitude1: DevKit.Controls.Double;
			msdyn_Longitude: DevKit.Controls.Double;
			msdyn_Longitude1: DevKit.Controls.Double;
			msdyn_mapcontrol: DevKit.Controls.String;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Work Order associated with Work Order. */
			msdyn_ParentWorkOrder: DevKit.Controls.Lookup;
			msdyn_phoneNumber: DevKit.Controls.String;
			msdyn_PostalCode: DevKit.Controls.String;
			/** Price List that controls pricing for products / services added to this work order. By default the system will use the Price List specified on the account */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Indicates the percentage proximity or overage of the work order price based on applied Price not-to-exceed (rounded up to the nearest whole number). */
			msdyn_PriceNTEPercent: DevKit.Controls.Integer;
			/** Incident description */
			msdyn_PrimaryIncidentDescription: DevKit.Controls.String;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			msdyn_PrimaryResolution: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** The total actual cost of the products and services */
			msdyn_productsservicescost: DevKit.Controls.Money;
			/** The total estimated cost of the products and services */
			msdyn_productsservicesestimatedcost: DevKit.Controls.Money;
			/** The contact that reported this Work Order */
			msdyn_ReportedByContact: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** The service territory this work order relates to. By default this will be set to the Service Territory defined on the service account */
			msdyn_ServiceTerritory: DevKit.Controls.Lookup;
			msdyn_StateOrProvince: DevKit.Controls.String;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Enter the summary of subtotal billing amount excluding tax for this work order. */
			msdyn_SubtotalAmount: DevKit.Controls.Money;
			/** A support contact can be specified so that the individual working on the work order has someone to contact for assistance. */
			msdyn_SupportContact: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Shows whether sales tax is to be charged for this work order. */
			msdyn_Taxable: DevKit.Controls.Boolean;
			/** Tax Code to be used to calculate tax when Work Order is taxable. By default the system will use the tax code specified on the service account */
			msdyn_TaxCode: DevKit.Controls.Lookup;
			/** Enter the starting range of the time promised to the account that incidents will be resolved. */
			msdyn_TimeFromPromised: DevKit.Controls.DateTime;
			/** Enter the ending range of the time promised to the account that incidents will be resolved. */
			msdyn_TimeToPromised: DevKit.Controls.DateTime;
			/** Enter the summary of total billing amount for this work order. */
			msdyn_TotalAmount: DevKit.Controls.Money;
			/** The estimated price after adding tax to the subtotal */
			msdyn_totalestimatedaftertaxprice: DevKit.Controls.Money;
			/** Enter the summary of total sales tax charged for this work order. */
			msdyn_TotalSalesTax: DevKit.Controls.Money;
			/** Select the Trade that associated with the Work Order. */
			msdyn_Trade: DevKit.Controls.Lookup;
			/** Type a summary description of the job. */
			msdyn_WorkOrderSummary: DevKit.Controls.String;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_invoicedetail: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Appointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Emails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_workordernte_workorder: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_workorder_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_workorder_QueueItems: DevKit.Controls.NavigationItem,
			msdyn_workorder_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Tasks: DevKit.Controls.NavigationItem
		}
		interface ProcessCase_to_Work_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessCFS_IoT_Alert_Process_Flow {
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessWork_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			CFS_IoT_Alert_Process_Flow: ProcessCFS_IoT_Alert_Process_Flow;
			Work_Order_Business_Process: ProcessWork_Order_Business_Process;
		}
		interface Grid {
			bookings: DevKit.Controls.Grid;
			Incidents_List: DevKit.Controls.Grid;
			KnowledgeArticlesSubGrid: DevKit.Controls.Grid;
			workorderproductsgrid: DevKit.Controls.Grid;
			workorderservicesgrid: DevKit.Controls.Grid;
			workorderservicetasksgrid: DevKit.Controls.Grid;
		}
	}
	class FormWork_Order_Mobile extends DevKit.IForm {
		/**
		* Work Order - Mobile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Work_Order_Mobile */
		Body: DevKit.FormWork_Order_Mobile.Body;
		/** The Header section of form Work_Order_Mobile */
		Header: DevKit.FormWork_Order_Mobile.Header;
		/** The Navigation of form Work_Order_Mobile */
		Navigation: DevKit.FormWork_Order_Mobile.Navigation;
		/** The Process of form Work_Order_Mobile */
		Process: DevKit.FormWork_Order_Mobile.Process;
		/** The Grid of form Work_Order_Mobile */
		Grid: DevKit.FormWork_Order_Mobile.Grid;
		/** The SidePanes of form Work_Order_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormWork_Order_Notes {
		interface tab_fstab_fieldservice_Sections {
			fstab_fieldservice_section_general: DevKit.Controls.Section;
			fstab_fieldservice_section_others: DevKit.Controls.Section;
		}
		interface tab_fstab_notes_Sections {
			fstab_notes_section_details: DevKit.Controls.Section;
			fstab_notes_section_summary: DevKit.Controls.Section;
		}
		interface tab_fstab_fieldservice extends DevKit.Controls.ITab {
			Section: tab_fstab_fieldservice_Sections;
		}
		interface tab_fstab_notes extends DevKit.Controls.ITab {
			Section: tab_fstab_notes_Sections;
		}
		interface Tabs {
			fstab_fieldservice: tab_fstab_fieldservice;
			fstab_notes: tab_fstab_notes;
		}
		interface Body {
			Tab: Tabs;
			/** For internal use only. */
			msdyn_InternalFlags: DevKit.Controls.String;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Type a summary description of the job. */
			msdyn_WorkOrderSummary: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_invoicedetail: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Appointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Emails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_workordernte_workorder: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_workorder_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_workorder_QueueItems: DevKit.Controls.NavigationItem,
			msdyn_workorder_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Tasks: DevKit.Controls.NavigationItem
		}
		interface ProcessCase_to_Work_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessCFS_IoT_Alert_Process_Flow {
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessWork_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			CFS_IoT_Alert_Process_Flow: ProcessCFS_IoT_Alert_Process_Flow;
			Work_Order_Business_Process: ProcessWork_Order_Business_Process;
		}
	}
	class FormWork_Order_Notes extends DevKit.IForm {
		/**
		* Work Order - Notes [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Work_Order_Notes */
		Body: DevKit.FormWork_Order_Notes.Body;
		/** The Navigation of form Work_Order_Notes */
		Navigation: DevKit.FormWork_Order_Notes.Navigation;
		/** The Process of form Work_Order_Notes */
		Process: DevKit.FormWork_Order_Notes.Process;
		/** The SidePanes of form Work_Order_Notes */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormWork_Order_Service {
		interface tab_fstab_fieldservice_Sections {
			fstab_fieldservice_section_general: DevKit.Controls.Section;
			fstab_fieldservice_section_others: DevKit.Controls.Section;
		}
		interface tab_fstab_service_Sections {
			fstab_service_section_subgrids: DevKit.Controls.Section;
			fstab_service_section_summary: DevKit.Controls.Section;
			tab_8_section_1: DevKit.Controls.Section;
			total_cost_section: DevKit.Controls.Section;
		}
		interface tab_fstab_fieldservice extends DevKit.Controls.ITab {
			Section: tab_fstab_fieldservice_Sections;
		}
		interface tab_fstab_service extends DevKit.Controls.ITab {
			Section: tab_fstab_service_Sections;
		}
		interface Tabs {
			fstab_fieldservice: tab_fstab_fieldservice;
			fstab_service: tab_fstab_service;
		}
		interface Body {
			Tab: Tabs;
			/** Indicates the percentage proximity or overage of the work order cost based on applied Cost not-to-exceed (rounded up to the nearest whole number). */
			msdyn_CostNTEPercent: DevKit.Controls.Integer;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Enter the summary of total estimated billing amount for this work order */
			msdyn_EstimateSubtotalAmount: DevKit.Controls.Money;
			/** Shows instructions for booked resources. By default, this information is taken from the work order instructions field on the service account. */
			msdyn_Instructions: DevKit.Controls.String;
			/** For internal use only. */
			msdyn_InternalFlags: DevKit.Controls.String;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Indicates the percentage proximity or overage of the work order price based on applied Price not-to-exceed (rounded up to the nearest whole number). */
			msdyn_PriceNTEPercent: DevKit.Controls.Integer;
			/** Incident description */
			msdyn_PrimaryIncidentDescription: DevKit.Controls.String;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			msdyn_PrimaryResolution: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** The total actual cost of the products and services */
			msdyn_productsservicescost: DevKit.Controls.Money;
			/** The total estimated cost of the products and services */
			msdyn_productsservicesestimatedcost: DevKit.Controls.Money;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Enter the summary of subtotal billing amount excluding tax for this work order. */
			msdyn_SubtotalAmount: DevKit.Controls.Money;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Enter the summary of total billing amount for this work order. */
			msdyn_TotalAmount: DevKit.Controls.Money;
			/** The estimated price after adding tax to the subtotal */
			msdyn_totalestimatedaftertaxprice: DevKit.Controls.Money;
			/** Enter the summary of total sales tax charged for this work order. */
			msdyn_TotalSalesTax: DevKit.Controls.Money;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_invoicedetail: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Appointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Emails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_workordernte_workorder: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_workorder_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_workorder_QueueItems: DevKit.Controls.NavigationItem,
			msdyn_workorder_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Tasks: DevKit.Controls.NavigationItem
		}
		interface ProcessCase_to_Work_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessCFS_IoT_Alert_Process_Flow {
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessWork_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			CFS_IoT_Alert_Process_Flow: ProcessCFS_IoT_Alert_Process_Flow;
			Work_Order_Business_Process: ProcessWork_Order_Business_Process;
		}
		interface Grid {
			FsWorkOrderIncidentsGrid: DevKit.Controls.Grid;
			FsWorkOrderProductsGrid: DevKit.Controls.Grid;
			FsWorkOrderResolutionsGrid: DevKit.Controls.Grid;
			FsWorkOrderServicesGrid: DevKit.Controls.Grid;
			FsWorkOrderServiceTasksGrid: DevKit.Controls.Grid;
			workorder_KASubgrid: DevKit.Controls.Grid;
		}
	}
	class FormWork_Order_Service extends DevKit.IForm {
		/**
		* Work Order - Service [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Work_Order_Service */
		Body: DevKit.FormWork_Order_Service.Body;
		/** The Navigation of form Work_Order_Service */
		Navigation: DevKit.FormWork_Order_Service.Navigation;
		/** The Process of form Work_Order_Service */
		Process: DevKit.FormWork_Order_Service.Process;
		/** The Grid of form Work_Order_Service */
		Grid: DevKit.FormWork_Order_Service.Grid;
		/** The SidePanes of form Work_Order_Service */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormWork_Order_Legacy {
		interface Header extends DevKit.Controls.IHeader {
			/** Indicates the percentage proximity or overage of the work order cost based on applied Cost not-to-exceed (rounded up to the nearest whole number). */
			msdyn_CostNTEPercent: DevKit.Controls.Integer;
			/** Indicates the percentage proximity or overage of the work order price based on applied Price not-to-exceed (rounded up to the nearest whole number). */
			msdyn_PriceNTEPercent: DevKit.Controls.Integer;
		}
		interface tab__B8E326EE_5C21_4A18_BA55_E3B56966C249_Sections {
			_B14F3E67_E51B_4B3E_BB7F_A9CF0CF8DC17: DevKit.Controls.Section;
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_2: DevKit.Controls.Section;
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_3: DevKit.Controls.Section;
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_7: DevKit.Controls.Section;
			f1tab_mainsettings_section_5: DevKit.Controls.Section;
			tab_3_section_1: DevKit.Controls.Section;
			tab_8_section_1: DevKit.Controls.Section;
			total_cost_section: DevKit.Controls.Section;
		}
		interface tab_DeviceInsightsTab_Sections {
			DeviceInsightsSection: DevKit.Controls.Section;
		}
		interface tab_f1tab_additionalsettings_Sections {
			f1tab_settings_section_address: DevKit.Controls.Section;
		}
		interface tab_f1tab_mainsettings_Sections {
			f1tab_mainsettings_section_2: DevKit.Controls.Section;
			f1tab_mainsettings_section_3: DevKit.Controls.Section;
			tab_7_section_1: DevKit.Controls.Section;
		}
		interface tab_f1tab_record_log_Sections {
			tab_6_section_1: DevKit.Controls.Section;
		}
		interface tab_KnowledgeArticlesTab_Sections {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_8: DevKit.Controls.Section;
		}
		interface tab_tab_5_Sections {
			tab_5_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_6_Sections {
			tab_6_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_7_Sections {
			tab_7_section_1_2: DevKit.Controls.Section;
		}
		interface tab_tab_8_Sections {
			tab_8_section_2: DevKit.Controls.Section;
		}
		interface tab__B8E326EE_5C21_4A18_BA55_E3B56966C249 extends DevKit.Controls.ITab {
			Section: tab__B8E326EE_5C21_4A18_BA55_E3B56966C249_Sections;
		}
		interface tab_DeviceInsightsTab extends DevKit.Controls.ITab {
			Section: tab_DeviceInsightsTab_Sections;
		}
		interface tab_f1tab_additionalsettings extends DevKit.Controls.ITab {
			Section: tab_f1tab_additionalsettings_Sections;
		}
		interface tab_f1tab_mainsettings extends DevKit.Controls.ITab {
			Section: tab_f1tab_mainsettings_Sections;
		}
		interface tab_f1tab_record_log extends DevKit.Controls.ITab {
			Section: tab_f1tab_record_log_Sections;
		}
		interface tab_KnowledgeArticlesTab extends DevKit.Controls.ITab {
			Section: tab_KnowledgeArticlesTab_Sections;
		}
		interface tab_tab_5 extends DevKit.Controls.ITab {
			Section: tab_tab_5_Sections;
		}
		interface tab_tab_6 extends DevKit.Controls.ITab {
			Section: tab_tab_6_Sections;
		}
		interface tab_tab_7 extends DevKit.Controls.ITab {
			Section: tab_tab_7_Sections;
		}
		interface tab_tab_8 extends DevKit.Controls.ITab {
			Section: tab_tab_8_Sections;
		}
		interface Tabs {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249: tab__B8E326EE_5C21_4A18_BA55_E3B56966C249;
			DeviceInsightsTab: tab_DeviceInsightsTab;
			f1tab_additionalsettings: tab_f1tab_additionalsettings;
			f1tab_mainsettings: tab_f1tab_mainsettings;
			f1tab_record_log: tab_f1tab_record_log;
			KnowledgeArticlesTab: tab_KnowledgeArticlesTab;
			tab_5: tab_tab_5;
			tab_6: tab_tab_6;
			tab_7: tab_tab_7;
			tab_8: tab_tab_8;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyn_Address1: DevKit.Controls.String;
			msdyn_Address11: DevKit.Controls.String;
			msdyn_Address2: DevKit.Controls.String;
			msdyn_Address3: DevKit.Controls.String;
			msdyn_AddressName: DevKit.Controls.String;
			/** Shows the agreement linked to this work order. */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			msdyn_City: DevKit.Controls.String;
			/** The user that last closed this work order */
			msdyn_ClosedBy: DevKit.Controls.Lookup;
			/** When Bookings are used on a Work Order, this field is auto-populated based on the latest End Time from the related Bookings. Otherwise, this field is populated based on the change of System Status. */
			msdyn_completedon: DevKit.Controls.DateTime;
			/** Indicates the percentage proximity or overage of the work order cost based on applied Cost not-to-exceed (rounded up to the nearest whole number). */
			msdyn_CostNTEPercent: DevKit.Controls.Integer;
			msdyn_Country: DevKit.Controls.String;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			msdyn_DateWindowEnd: DevKit.Controls.Date;
			msdyn_DateWindowStart: DevKit.Controls.Date;
			/** Enter the summary of total estimated billing amount for this work order */
			msdyn_EstimateSubtotalAmount: DevKit.Controls.Money;
			/** When Bookings are used on a Work Order, this field is auto-populated based on the earliest Actual Arrival Time from the related Bookings. */
			msdyn_firstarrivedon: DevKit.Controls.DateTime;
			/** Workorder's functional location */
			msdyn_FunctionalLocation: DevKit.Controls.Lookup;
			/** Shows instructions for booked resources. By default, this information is taken from the work order instructions field on the service account. */
			msdyn_Instructions: DevKit.Controls.String;
			/** The iot alert which initiated this work order. */
			msdyn_IoTAlert: DevKit.Controls.Lookup;
			/** The iot alert which initiated this work order. */
			msdyn_IoTAlert1: DevKit.Controls.Lookup;
			msdyn_Latitude: DevKit.Controls.Double;
			msdyn_Latitude1: DevKit.Controls.Double;
			msdyn_Longitude: DevKit.Controls.Double;
			msdyn_Longitude1: DevKit.Controls.Double;
			msdyn_mapcontrol: DevKit.Controls.String;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The value of not-to-exceed cost for the work order in base currency. */
			msdyn_nottoexceedcostamount: DevKit.Controls.Money;
			/** The value of not-to-exceed price for the work order in base currency. */
			msdyn_nottoexceedpriceamount: DevKit.Controls.Money;
			/** Unique identifier for Opportunity associated with Work Order. */
			msdyn_OpportunityId: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Work Order. */
			msdyn_ParentWorkOrder: DevKit.Controls.Lookup;
			msdyn_phoneNumber: DevKit.Controls.String;
			msdyn_PostalCode: DevKit.Controls.String;
			/** Price List that controls pricing for products / services added to this work order. By default the system will use the Price List specified on the account */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Indicates the percentage proximity or overage of the work order price based on applied Price not-to-exceed (rounded up to the nearest whole number). */
			msdyn_PriceNTEPercent: DevKit.Controls.Integer;
			/** Incident description */
			msdyn_PrimaryIncidentDescription: DevKit.Controls.String;
			/** Shows the time estimated to resolve this incident. */
			msdyn_PrimaryIncidentEstimatedDuration: DevKit.Controls.Integer;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			msdyn_PrimaryResolution: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** The total actual cost of the products and services */
			msdyn_productsservicescost: DevKit.Controls.Money;
			/** The total estimated cost of the products and services */
			msdyn_productsservicesestimatedcost: DevKit.Controls.Money;
			/** The contact that reported this Work Order */
			msdyn_ReportedByContact: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Case of which this work order originates from */
			msdyn_ServiceRequest: DevKit.Controls.Lookup;
			/** The service territory this work order relates to. By default this will be set to the Service Territory defined on the service account */
			msdyn_ServiceTerritory: DevKit.Controls.Lookup;
			msdyn_StateOrProvince: DevKit.Controls.String;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Enter the summary of subtotal billing amount excluding tax for this work order. */
			msdyn_SubtotalAmount: DevKit.Controls.Money;
			/** A support contact can be specified so that the individual working on the work order has someone to contact for assistance. */
			msdyn_SupportContact: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Shows whether sales tax is to be charged for this work order. */
			msdyn_Taxable: DevKit.Controls.Boolean;
			/** Tax Code to be used to calculate tax when Work Order is taxable. By default the system will use the tax code specified on the service account */
			msdyn_TaxCode: DevKit.Controls.Lookup;
			/** Enter the time this work order was last closed. */
			msdyn_TimeClosed: DevKit.Controls.DateTime;
			/** Enter the starting range of the time promised to the account that incidents will be resolved. */
			msdyn_TimeFromPromised: DevKit.Controls.DateTime;
			msdyn_TimeGroup: DevKit.Controls.Lookup;
			/** Enter the ending range of the time promised to the account that incidents will be resolved. */
			msdyn_TimeToPromised: DevKit.Controls.DateTime;
			msdyn_TimeWindowEnd: DevKit.Controls.DateTime;
			msdyn_TimeWindowStart: DevKit.Controls.DateTime;
			/** Enter the summary of total billing amount for this work order. */
			msdyn_TotalAmount: DevKit.Controls.Money;
			/** The estimated price after adding tax to the subtotal */
			msdyn_totalestimatedaftertaxprice: DevKit.Controls.Money;
			/** Calculated from the estimated duration of Work Order Incidents and Work Order Service Tasks not related to a Work Order Incident on the Work Order. Intended to be read-only. */
			msdyn_totalestimatedduration: DevKit.Controls.Integer;
			/** Enter the summary of total sales tax charged for this work order. */
			msdyn_TotalSalesTax: DevKit.Controls.Money;
			/** Select the Trade that associated with the Work Order. */
			msdyn_Trade: DevKit.Controls.Lookup;
			/** The working hours for a requirement. */
			msdyn_workhourtemplate: DevKit.Controls.Lookup;
			msdyn_WorkLocation: DevKit.Controls.OptionSet;
			/** Type a summary description of the job. */
			msdyn_WorkOrderSummary: DevKit.Controls.String;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
			WebResource_msdyn_timewindowend: DevKit.Controls.WebResource;
			WebResource_msdyn_timewindowstart: DevKit.Controls.WebResource;
		}
		interface Navigation {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_invoicedetail: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Appointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Emails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_workordernte_workorder: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_workorder_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_workorder_QueueItems: DevKit.Controls.NavigationItem,
			msdyn_workorder_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Tasks: DevKit.Controls.NavigationItem
		}
		interface quickForm_service_account_details_Body {
			Address1_Telephone1: DevKit.Controls.QuickView;
			EMailAddress1: DevKit.Controls.QuickView;
			PrimaryContactId: DevKit.Controls.QuickView;
		}
		interface quickForm_service_account_details extends DevKit.Controls.IQuickView {
			Body: quickForm_service_account_details_Body;
		}
		interface QuickForm {
			service_account_details: quickForm_service_account_details;
		}
		interface ProcessCase_to_Work_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessCFS_IoT_Alert_Process_Flow {
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessWork_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			CFS_IoT_Alert_Process_Flow: ProcessCFS_IoT_Alert_Process_Flow;
			Work_Order_Business_Process: ProcessWork_Order_Business_Process;
		}
		interface Grid {
			bookings: DevKit.Controls.Grid;
			Incidents_List: DevKit.Controls.Grid;
			KnowledgeArticleSubGrid: DevKit.Controls.Grid;
			workorderproductsgrid: DevKit.Controls.Grid;
			workorderservicesgrid: DevKit.Controls.Grid;
			workorderservicetasksgrid: DevKit.Controls.Grid;
		}
	}
	class FormWork_Order_Legacy extends DevKit.IForm {
		/**
		* Work Order (Legacy) [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Work_Order_Legacy */
		Body: DevKit.FormWork_Order_Legacy.Body;
		/** The Header section of form Work_Order_Legacy */
		Header: DevKit.FormWork_Order_Legacy.Header;
		/** The Navigation of form Work_Order_Legacy */
		Navigation: DevKit.FormWork_Order_Legacy.Navigation;
		/** The QuickForm of form Work_Order_Legacy */
		QuickForm: DevKit.FormWork_Order_Legacy.QuickForm;
		/** The Process of form Work_Order_Legacy */
		Process: DevKit.FormWork_Order_Legacy.Process;
		/** The Grid of form Work_Order_Legacy */
		Grid: DevKit.FormWork_Order_Legacy.Grid;
		/** The SidePanes of form Work_Order_Legacy */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormWork_Order_M365 {
		interface tab__B8E326EE_5C21_4A18_BA55_E3B56966C249_Sections {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_10: DevKit.Controls.Section;
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_11: DevKit.Controls.Section;
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_7: DevKit.Controls.Section;
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_9: DevKit.Controls.Section;
			_CBC73EB8_4930_458E_A87B_7DC0E48A99E6: DevKit.Controls.Section;
		}
		interface tab__B8E326EE_5C21_4A18_BA55_E3B56966C249 extends DevKit.Controls.ITab {
			Section: tab__B8E326EE_5C21_4A18_BA55_E3B56966C249_Sections;
		}
		interface Tabs {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249: tab__B8E326EE_5C21_4A18_BA55_E3B56966C249;
		}
		interface Body {
			Tab: Tabs;
			msdyn_Address1: DevKit.Controls.String;
			msdyn_Address2: DevKit.Controls.String;
			msdyn_Address3: DevKit.Controls.String;
			msdyn_City: DevKit.Controls.String;
			msdyn_Country: DevKit.Controls.String;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			msdyn_DateWindowEnd: DevKit.Controls.Date;
			msdyn_DateWindowStart: DevKit.Controls.Date;
			/** Workorder's functional location */
			msdyn_FunctionalLocation: DevKit.Controls.Lookup;
			msdyn_Latitude: DevKit.Controls.Double;
			msdyn_Longitude: DevKit.Controls.Double;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_phoneNumber: DevKit.Controls.String;
			msdyn_PostalCode: DevKit.Controls.String;
			/** Incident description */
			msdyn_PrimaryIncidentDescription: DevKit.Controls.String;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** The contact that reported this Work Order */
			msdyn_ReportedByContact: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			msdyn_StateOrProvince: DevKit.Controls.String;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Enter the starting range of the time promised to the account that incidents will be resolved. */
			msdyn_TimeFromPromised: DevKit.Controls.DateTime;
			/** Enter the ending range of the time promised to the account that incidents will be resolved. */
			msdyn_TimeToPromised: DevKit.Controls.DateTime;
			msdyn_TimeWindowEnd: DevKit.Controls.DateTime;
			msdyn_TimeWindowStart: DevKit.Controls.DateTime;
			/** Type a summary description of the job. */
			msdyn_WorkOrderSummary: DevKit.Controls.String;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface Navigation {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_invoicedetail: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Appointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Emails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_workordernte_workorder: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_workorder_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_workorder_QueueItems: DevKit.Controls.NavigationItem,
			msdyn_workorder_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Tasks: DevKit.Controls.NavigationItem
		}
		interface ProcessCase_to_Work_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessCFS_IoT_Alert_Process_Flow {
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessWork_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			CFS_IoT_Alert_Process_Flow: ProcessCFS_IoT_Alert_Process_Flow;
			Work_Order_Business_Process: ProcessWork_Order_Business_Process;
		}
	}
	class FormWork_Order_M365 extends DevKit.IForm {
		/**
		* Work Order (M365) [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Work_Order_M365 */
		Body: DevKit.FormWork_Order_M365.Body;
		/** The Navigation of form Work_Order_M365 */
		Navigation: DevKit.FormWork_Order_M365.Navigation;
		/** The Process of form Work_Order_M365 */
		Process: DevKit.FormWork_Order_M365.Process;
		/** The SidePanes of form Work_Order_M365 */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormWork_Order_Create {
		interface tab_maintab_Sections {
			_B14F3E67_E51B_4B3E_BB7F_A9CF0CF8DC17: DevKit.Controls.Section;
		}
		interface tab_maintab extends DevKit.Controls.ITab {
			Section: tab_maintab_Sections;
		}
		interface Tabs {
			maintab: tab_maintab;
		}
		interface Body {
			Tab: Tabs;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Price List that controls pricing for products / services added to this work order. By default the system will use the Price List specified on the account */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Shows whether sales tax is to be charged for this work order. */
			msdyn_Taxable: DevKit.Controls.Boolean;
			/** Tax Code to be used to calculate tax when Work Order is taxable. By default the system will use the tax code specified on the service account */
			msdyn_TaxCode: DevKit.Controls.Lookup;
			/** Type a summary description of the job. */
			msdyn_WorkOrderSummary: DevKit.Controls.String;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			product: DevKit.Controls.ActionCards;
			service: DevKit.Controls.ActionCards;
			servicetask: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_invoicedetail: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Appointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Emails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_workordernte_workorder: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_workorder_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_workorder_QueueItems: DevKit.Controls.NavigationItem,
			msdyn_workorder_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Tasks: DevKit.Controls.NavigationItem
		}
		interface ProcessCase_to_Work_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessCFS_IoT_Alert_Process_Flow {
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessWork_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			CFS_IoT_Alert_Process_Flow: ProcessCFS_IoT_Alert_Process_Flow;
			Work_Order_Business_Process: ProcessWork_Order_Business_Process;
		}
	}
	class FormWork_Order_Create extends DevKit.IForm {
		/**
		* Work Order Create [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Work_Order_Create */
		Body: DevKit.FormWork_Order_Create.Body;
		/** The Navigation of form Work_Order_Create */
		Navigation: DevKit.FormWork_Order_Create.Navigation;
		/** The Process of form Work_Order_Create */
		Process: DevKit.FormWork_Order_Create.Process;
		/** The SidePanes of form Work_Order_Create */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormWork_Order_Light {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
		}
		interface tab__B8E326EE_5C21_4A18_BA55_E3B56966C249_Sections {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_FINANCIAL_SECTION: DevKit.Controls.Section;
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_7: DevKit.Controls.Section;
			_D5928953_2A00_4C1B_9306_3B875CCAB7D5: DevKit.Controls.Section;
			asset_section: DevKit.Controls.Section;
			contact_section: DevKit.Controls.Section;
		}
		interface tab_booking_tab_Sections {
			bookingcard_section: DevKit.Controls.Section;
		}
		interface tab_tab_12_Sections {
			tab_12_section_1: DevKit.Controls.Section;
		}
		interface tab__B8E326EE_5C21_4A18_BA55_E3B56966C249 extends DevKit.Controls.ITab {
			Section: tab__B8E326EE_5C21_4A18_BA55_E3B56966C249_Sections;
		}
		interface tab_booking_tab extends DevKit.Controls.ITab {
			Section: tab_booking_tab_Sections;
		}
		interface tab_tab_12 extends DevKit.Controls.ITab {
			Section: tab_tab_12_Sections;
		}
		interface Tabs {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249: tab__B8E326EE_5C21_4A18_BA55_E3B56966C249;
			booking_tab: tab_booking_tab;
			tab_12: tab_tab_12;
		}
		interface Body {
			Tab: Tabs;
			cc_1680719535566: DevKit.Controls.ActionCards;
			msdyn_Address1: DevKit.Controls.String;
			msdyn_Address2: DevKit.Controls.String;
			msdyn_Address3: DevKit.Controls.String;
			/** Shows the agreement linked to this work order. */
			msdyn_Agreement: DevKit.Controls.Lookup;
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			msdyn_City: DevKit.Controls.String;
			/** Indicates the percentage proximity or overage of the work order cost based on applied Cost not-to-exceed (rounded up to the nearest whole number). */
			msdyn_CostNTEPercent: DevKit.Controls.Integer;
			msdyn_Country: DevKit.Controls.String;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			msdyn_DateWindowEnd: DevKit.Controls.Date;
			msdyn_DateWindowStart: DevKit.Controls.Date;
			/** Workorder's functional location */
			msdyn_FunctionalLocation: DevKit.Controls.Lookup;
			/** Shows instructions for booked resources. By default, this information is taken from the work order instructions field on the service account. */
			msdyn_Instructions: DevKit.Controls.String;
			msdyn_Latitude: DevKit.Controls.Double;
			msdyn_Longitude: DevKit.Controls.Double;
			msdyn_mapcontrol: DevKit.Controls.String;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** The value of not-to-exceed cost for the work order in base currency. */
			msdyn_nottoexceedcostamount: DevKit.Controls.Money;
			/** The value of not-to-exceed price for the work order in base currency. */
			msdyn_nottoexceedpriceamount: DevKit.Controls.Money;
			msdyn_PostalCode: DevKit.Controls.String;
			/** Price List that controls pricing for products / services added to this work order. By default the system will use the Price List specified on the account */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Indicates the percentage proximity or overage of the work order price based on applied Price not-to-exceed (rounded up to the nearest whole number). */
			msdyn_PriceNTEPercent: DevKit.Controls.Integer;
			/** Incident description */
			msdyn_PrimaryIncidentDescription: DevKit.Controls.String;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			msdyn_PrimaryResolution: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** The contact that reported this Work Order */
			msdyn_ReportedByContact: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			msdyn_StateOrProvince: DevKit.Controls.String;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus1: DevKit.Controls.OptionSet;
			/** Shows whether sales tax is to be charged for this work order. */
			msdyn_Taxable: DevKit.Controls.Boolean;
			/** Tax Code to be used to calculate tax when Work Order is taxable. By default the system will use the tax code specified on the service account */
			msdyn_TaxCode: DevKit.Controls.Lookup;
			/** Enter the starting range of the time promised to the account that incidents will be resolved. */
			msdyn_TimeFromPromised: DevKit.Controls.DateTime;
			/** Enter the ending range of the time promised to the account that incidents will be resolved. */
			msdyn_TimeToPromised: DevKit.Controls.DateTime;
			msdyn_TimeWindowEnd: DevKit.Controls.DateTime;
			msdyn_TimeWindowStart: DevKit.Controls.DateTime;
			/** Select the Trade that associated with the Work Order. */
			msdyn_Trade: DevKit.Controls.Lookup;
			/** Type a summary description of the job. */
			msdyn_WorkOrderSummary: DevKit.Controls.String;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
		}
		interface Navigation {
			bpf_msdyn_workorder_msdyn_bpf_477c16f59170487b8b4dc895c5dcd09b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_989e9b1857e24af18787d5143b67523b: DevKit.Controls.NavigationItem,
			bpf_msdyn_workorder_msdyn_bpf_d3d97bac8c294105840e99e37a9d1c39: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_invoicedetail: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_actual_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_iotalert_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_payment_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementcharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_requirementresourcepreference_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_resourcerequirement_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rma_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_timeentry_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresolution_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_workorder_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Appointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Emails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_workorder_msdyn_workordernte_workorder: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_workorder_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_workorder_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_workorder_QueueItems: DevKit.Controls.NavigationItem,
			msdyn_workorder_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_workorder_Tasks: DevKit.Controls.NavigationItem
		}
		interface ProcessCase_to_Work_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessCFS_IoT_Alert_Process_Flow {
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface ProcessWork_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Controls.OptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
			Case_to_Work_Order_Business_Process: ProcessCase_to_Work_Order_Business_Process;
			CFS_IoT_Alert_Process_Flow: ProcessCFS_IoT_Alert_Process_Flow;
			Work_Order_Business_Process: ProcessWork_Order_Business_Process;
		}
	}
	class FormWork_Order_Light extends DevKit.IForm {
		/**
		* Work Order Light [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Work_Order_Light */
		Body: DevKit.FormWork_Order_Light.Body;
		/** The Header section of form Work_Order_Light */
		Header: DevKit.FormWork_Order_Light.Header;
		/** The Navigation of form Work_Order_Light */
		Navigation: DevKit.FormWork_Order_Light.Navigation;
		/** The Process of form Work_Order_Light */
		Process: DevKit.FormWork_Order_Light.Process;
		/** The SidePanes of form Work_Order_Light */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormQuick_Create_Work_Order {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Controls.Lookup;
			/** Workorder's functional location */
			msdyn_FunctionalLocation: DevKit.Controls.Lookup;
			/** The iot alert which initiated this work order. */
			msdyn_IoTAlert: DevKit.Controls.Lookup;
			/** Unique identifier for Opportunity associated with Work Order. */
			msdyn_OpportunityId: DevKit.Controls.Lookup;
			/** Price List that controls pricing for products / services added to this work order. By default the system will use the Price List specified on the account */
			msdyn_PriceList: DevKit.Controls.Lookup;
			/** Incident description */
			msdyn_PrimaryIncidentDescription: DevKit.Controls.String;
			/** Shows the time estimated to resolve this incident. */
			msdyn_PrimaryIncidentEstimatedDuration: DevKit.Controls.Integer;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
			/** The contact that reported this Work Order */
			msdyn_ReportedByContact: DevKit.Controls.Lookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Controls.Lookup;
			/** Case of which this work order originates from */
			msdyn_ServiceRequest: DevKit.Controls.Lookup;
			/** The service territory this work order relates to. By default this will be set to the Service Territory defined on the service account */
			msdyn_ServiceTerritory: DevKit.Controls.Lookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Shows whether sales tax is to be charged for this work order. */
			msdyn_Taxable: DevKit.Controls.Boolean;
			/** Tax Code to be used to calculate tax when Work Order is taxable. By default the system will use the tax code specified on the service account */
			msdyn_TaxCode: DevKit.Controls.Lookup;
			/** Select the Trade that associated with the Work Order. */
			msdyn_Trade: DevKit.Controls.Lookup;
			/** Type a summary description of the job. */
			msdyn_WorkOrderSummary: DevKit.Controls.String;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
	}
	class FormQuick_Create_Work_Order extends DevKit.IForm {
		/**
		* Quick Create Work Order [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Quick_Create_Work_Order */
		Body: DevKit.FormQuick_Create_Work_Order.Body;
	}
	class msdyn_workorderApi {
		/**
		* DynamicsCrm.DevKit msdyn_workorderApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the exchange rate for the currency associated with the entity with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_Address1: string;
		msdyn_Address2: string;
		msdyn_Address3: string;
		msdyn_AddressName: string;
		/** Shows the agreement linked to this work order. */
		msdyn_Agreement: string;
		/** Internal field used to generate the next name upon entity creation. It is optionally copied to the msdyn_name field. */
		msdyn_AutoNumbering: string;
		/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
		msdyn_BillingAccount: string;
		/** This column is used internally, and also used to display the bookable resource bookings associated with a work order in the FieldService.WorkOrderList PCF component. */
		msdyn_BookingSummary: string;
		msdyn_ChildIndex: number;
		msdyn_City: string;
		/** The user that last closed this work order */
		msdyn_ClosedBy: string;
		/** When Bookings are used on a Work Order, this field is auto-populated based on the latest End Time from the related Bookings. Otherwise, this field is populated based on the change of System Status. */
		msdyn_completedon_UtcDateAndTime: Date;
		/** Indicates the percentage proximity or overage of the work order cost based on applied Cost not-to-exceed (rounded up to the nearest whole number). */
		msdyn_CostNTEPercent: number;
		msdyn_Country: string;
		/** Customer Asset related to this incident reported */
		msdyn_CustomerAsset: string;
		msdyn_DateWindowEnd_UtcDateOnly: Date;
		msdyn_DateWindowStart_UtcDateOnly: Date;
		/** Combined address field suitable for display */
		readonly msdyn_DisplayAddress: string;
		/** Enter the summary of total estimated billing amount for this work order */
		msdyn_EstimateSubtotalAmount: number;
		/** Shows the value of the estimate subtotal amount in the base currency. */
		readonly msdyn_estimatesubtotalamount_Base: number;
		/** When Bookings are used on a Work Order, this field is auto-populated based on the earliest Actual Arrival Time from the related Bookings. */
		msdyn_firstarrivedon_UtcDateAndTime: Date;
		/** Indicate the details of the follow up work */
		msdyn_FollowUpNote: string;
		/** Allows indication if follow up work is required for a work order. */
		msdyn_FollowUpRequired: boolean;
		/** Workorder's functional location */
		msdyn_FunctionalLocation: string;
		/** Shows instructions for booked resources. By default, this information is taken from the work order instructions field on the service account. */
		msdyn_Instructions: string;
		/** For internal use only. */
		msdyn_InternalFlags: string;
		/** The iot alert which initiated this work order. */
		msdyn_IoTAlert: string;
		msdyn_IsFollowUp: boolean;
		msdyn_IsMobile: boolean;
		msdyn_Latitude: number;
		msdyn_Longitude: number;
		readonly msdyn_mapcontrol: string;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** The value of not-to-exceed cost for the work order in base currency. */
		msdyn_nottoexceedcostamount: number;
		/** Value of the Cost not-to-exceed in base currency. */
		readonly msdyn_nottoexceedcostamount_Base: number;
		/** The value of not-to-exceed price for the work order in base currency. */
		msdyn_nottoexceedpriceamount: number;
		/** Value of the Price not-to-exceed in base currency. */
		readonly msdyn_nottoexceedpriceamount_Base: number;
		/** Unique identifier for Opportunity associated with Work Order. */
		msdyn_OpportunityId: string;
		/** Unique identifier for Work Order associated with Work Order. */
		msdyn_ParentWorkOrder: string;
		msdyn_phoneNumber: string;
		msdyn_PostalCode: string;
		/** The customer Preferred Resource to work on this job. Should be taken into consideration while scheduling resources */
		msdyn_PreferredResource: string;
		/** Price List that controls pricing for products / services added to this work order. By default the system will use the Price List specified on the account */
		msdyn_PriceList: string;
		/** Indicates the percentage proximity or overage of the work order price based on applied Price not-to-exceed (rounded up to the nearest whole number). */
		msdyn_PriceNTEPercent: number;
		/** Incident description */
		msdyn_PrimaryIncidentDescription: string;
		/** Shows the time estimated to resolve this incident. */
		msdyn_PrimaryIncidentEstimatedDuration: number;
		/** Primary incident type reported */
		msdyn_PrimaryIncidentType: string;
		msdyn_PrimaryResolution: string;
		/** Priority of the Work Order. To be taken into consideration while scheduling resources */
		msdyn_Priority: string;
		/** The total actual cost of the products and services */
		msdyn_productsservicescost: number;
		/** Value of the Total Cost in base currency. */
		msdyn_productsservicescost_Base: number;
		/** The total estimated cost of the products and services */
		msdyn_productsservicesestimatedcost: number;
		/** Value of the Total Estimated Cost in base currency. */
		msdyn_productsservicesestimatedcost_Base: number;
		/** The contact that reported this Work Order */
		msdyn_ReportedByContact: string;
		/** Account to be serviced */
		msdyn_ServiceAccount: string;
		/** Case of which this work order originates from */
		msdyn_ServiceRequest: string;
		/** The service territory this work order relates to. By default this will be set to the Service Territory defined on the service account */
		msdyn_ServiceTerritory: string;
		msdyn_StateOrProvince: string;
		/** Work Order subsstatus */
		msdyn_SubStatus: string;
		/** Enter the summary of subtotal billing amount excluding tax for this work order. */
		msdyn_SubtotalAmount: number;
		/** Shows the value of the subtotal amount in the base currency. */
		readonly msdyn_subtotalamount_Base: number;
		/** A support contact can be specified so that the individual working on the work order has someone to contact for assistance. */
		msdyn_SupportContact: string;
		/** Tracks the current system status. */
		msdyn_SystemStatus: OptionSet.msdyn_workorder.msdyn_SystemStatus;
		/** Shows whether sales tax is to be charged for this work order. */
		msdyn_Taxable: boolean;
		/** Tax Code to be used to calculate tax when Work Order is taxable. By default the system will use the tax code specified on the service account */
		msdyn_TaxCode: string;
		/** Enter the time this work order was last closed. */
		msdyn_TimeClosed_UtcDateAndTime: Date;
		/** Enter the starting range of the time promised to the account that incidents will be resolved. */
		msdyn_TimeFromPromised_UtcDateAndTime: Date;
		msdyn_TimeGroup: string;
		msdyn_TimeGroupDetailSelected: string;
		/** Enter the ending range of the time promised to the account that incidents will be resolved. */
		msdyn_TimeToPromised_UtcDateAndTime: Date;
		msdyn_TimeWindowEnd_UtcDateAndTime: Date;
		msdyn_TimeWindowStart_UtcDateAndTime: Date;
		/** Enter the summary of total billing amount for this work order. */
		msdyn_TotalAmount: number;
		/** Shows the value of the total amount in the base currency. */
		readonly msdyn_totalamount_Base: number;
		/** The estimated price after adding tax to the subtotal */
		msdyn_totalestimatedaftertaxprice: number;
		/** Value of the Total Estimated After Tax Price in base currency. */
		msdyn_totalestimatedaftertaxprice_Base: number;
		/** Calculated from the estimated duration of Work Order Incidents and Work Order Service Tasks not related to a Work Order Incident on the Work Order. Intended to be read-only. */
		msdyn_totalestimatedduration: number;
		/** Enter the summary of total sales tax charged for this work order. */
		msdyn_TotalSalesTax: number;
		/** Shows the value of the total sales tax in the base currency. */
		readonly msdyn_totalsalestax_Base: number;
		/** Select the Trade that associated with the Work Order. */
		msdyn_Trade: string;
		/** The working hours for a requirement. */
		msdyn_workhourtemplate: string;
		msdyn_WorkLocation: OptionSet.msdyn_workorder.msdyn_WorkLocation;
		/** For internal use only. */
		msdyn_workorderarrivaltimekpiid: string;
		/** Shows the entity instances. */
		msdyn_workorderId: string;
		/** For internal use only. */
		msdyn_workorderresolutionkpiid: string;
		/** Type a summary description of the job. */
		msdyn_WorkOrderSummary: string;
		/** Work Order Type */
		msdyn_WorkOrderType: string;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Shows the ID of the process associated with the entity. */
		processid: string;
		/** Shows the ID of the stage where the entity is located. */
		stageid: string;
		/** Status of the Work Order */
		statecode: OptionSet.msdyn_workorder.statecode;
		/** Reason for the status of the Work Order */
		statuscode: OptionSet.msdyn_workorder.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: string;
		/** Shows a comma-separated list of string values representing the unique identifiers of stages in a business process flow instance in the order that they occur. */
		traversedpath: string;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the exchange rate for the currency associated with the entity with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Shows the sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_Address1: string;
			readonly msdyn_Address2: string;
			readonly msdyn_Address3: string;
			readonly msdyn_AddressName: string;
			/** Shows the agreement linked to this work order. */
			readonly msdyn_Agreement: string;
			/** Internal field used to generate the next name upon entity creation. It is optionally copied to the msdyn_name field. */
			readonly msdyn_AutoNumbering: string;
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			readonly msdyn_BillingAccount: string;
			/** This column is used internally, and also used to display the bookable resource bookings associated with a work order in the FieldService.WorkOrderList PCF component. */
			readonly msdyn_BookingSummary: string;
			readonly msdyn_ChildIndex: string;
			readonly msdyn_City: string;
			/** The user that last closed this work order */
			readonly msdyn_ClosedBy: string;
			/** When Bookings are used on a Work Order, this field is auto-populated based on the latest End Time from the related Bookings. Otherwise, this field is populated based on the change of System Status. */
			readonly msdyn_completedon_UtcDateAndTime: string;
			/** Indicates the percentage proximity or overage of the work order cost based on applied Cost not-to-exceed (rounded up to the nearest whole number). */
			readonly msdyn_CostNTEPercent: string;
			readonly msdyn_Country: string;
			/** Customer Asset related to this incident reported */
			readonly msdyn_CustomerAsset: string;
			readonly msdyn_DateWindowEnd_UtcDateOnly: string;
			readonly msdyn_DateWindowStart_UtcDateOnly: string;
			/** Combined address field suitable for display */
			readonly msdyn_DisplayAddress: string;
			/** Enter the summary of total estimated billing amount for this work order */
			readonly msdyn_EstimateSubtotalAmount: string;
			/** Shows the value of the estimate subtotal amount in the base currency. */
			readonly msdyn_estimatesubtotalamount_Base: string;
			/** When Bookings are used on a Work Order, this field is auto-populated based on the earliest Actual Arrival Time from the related Bookings. */
			readonly msdyn_firstarrivedon_UtcDateAndTime: string;
			/** Indicate the details of the follow up work */
			readonly msdyn_FollowUpNote: string;
			/** Allows indication if follow up work is required for a work order. */
			readonly msdyn_FollowUpRequired: string;
			/** Workorder's functional location */
			readonly msdyn_FunctionalLocation: string;
			/** Shows instructions for booked resources. By default, this information is taken from the work order instructions field on the service account. */
			readonly msdyn_Instructions: string;
			/** For internal use only. */
			readonly msdyn_InternalFlags: string;
			/** The iot alert which initiated this work order. */
			readonly msdyn_IoTAlert: string;
			readonly msdyn_IsFollowUp: string;
			readonly msdyn_IsMobile: string;
			readonly msdyn_Latitude: string;
			readonly msdyn_Longitude: string;
			readonly msdyn_mapcontrol: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			/** The value of not-to-exceed cost for the work order in base currency. */
			readonly msdyn_nottoexceedcostamount: string;
			/** Value of the Cost not-to-exceed in base currency. */
			readonly msdyn_nottoexceedcostamount_Base: string;
			/** The value of not-to-exceed price for the work order in base currency. */
			readonly msdyn_nottoexceedpriceamount: string;
			/** Value of the Price not-to-exceed in base currency. */
			readonly msdyn_nottoexceedpriceamount_Base: string;
			/** Unique identifier for Opportunity associated with Work Order. */
			readonly msdyn_OpportunityId: string;
			/** Unique identifier for Work Order associated with Work Order. */
			readonly msdyn_ParentWorkOrder: string;
			readonly msdyn_phoneNumber: string;
			readonly msdyn_PostalCode: string;
			/** The customer Preferred Resource to work on this job. Should be taken into consideration while scheduling resources */
			readonly msdyn_PreferredResource: string;
			/** Price List that controls pricing for products / services added to this work order. By default the system will use the Price List specified on the account */
			readonly msdyn_PriceList: string;
			/** Indicates the percentage proximity or overage of the work order price based on applied Price not-to-exceed (rounded up to the nearest whole number). */
			readonly msdyn_PriceNTEPercent: string;
			/** Incident description */
			readonly msdyn_PrimaryIncidentDescription: string;
			/** Shows the time estimated to resolve this incident. */
			readonly msdyn_PrimaryIncidentEstimatedDuration: string;
			/** Primary incident type reported */
			readonly msdyn_PrimaryIncidentType: string;
			readonly msdyn_PrimaryResolution: string;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			readonly msdyn_Priority: string;
			/** The total actual cost of the products and services */
			readonly msdyn_productsservicescost: string;
			/** Value of the Total Cost in base currency. */
			readonly msdyn_productsservicescost_Base: string;
			/** The total estimated cost of the products and services */
			readonly msdyn_productsservicesestimatedcost: string;
			/** Value of the Total Estimated Cost in base currency. */
			readonly msdyn_productsservicesestimatedcost_Base: string;
			/** The contact that reported this Work Order */
			readonly msdyn_ReportedByContact: string;
			/** Account to be serviced */
			readonly msdyn_ServiceAccount: string;
			/** Case of which this work order originates from */
			readonly msdyn_ServiceRequest: string;
			/** The service territory this work order relates to. By default this will be set to the Service Territory defined on the service account */
			readonly msdyn_ServiceTerritory: string;
			readonly msdyn_StateOrProvince: string;
			/** Work Order subsstatus */
			readonly msdyn_SubStatus: string;
			/** Enter the summary of subtotal billing amount excluding tax for this work order. */
			readonly msdyn_SubtotalAmount: string;
			/** Shows the value of the subtotal amount in the base currency. */
			readonly msdyn_subtotalamount_Base: string;
			/** A support contact can be specified so that the individual working on the work order has someone to contact for assistance. */
			readonly msdyn_SupportContact: string;
			/** Tracks the current system status. */
			readonly msdyn_SystemStatus: string;
			/** Shows whether sales tax is to be charged for this work order. */
			readonly msdyn_Taxable: string;
			/** Tax Code to be used to calculate tax when Work Order is taxable. By default the system will use the tax code specified on the service account */
			readonly msdyn_TaxCode: string;
			/** Enter the time this work order was last closed. */
			readonly msdyn_TimeClosed_UtcDateAndTime: string;
			/** Enter the starting range of the time promised to the account that incidents will be resolved. */
			readonly msdyn_TimeFromPromised_UtcDateAndTime: string;
			readonly msdyn_TimeGroup: string;
			readonly msdyn_TimeGroupDetailSelected: string;
			/** Enter the ending range of the time promised to the account that incidents will be resolved. */
			readonly msdyn_TimeToPromised_UtcDateAndTime: string;
			readonly msdyn_TimeWindowEnd_UtcDateAndTime: string;
			readonly msdyn_TimeWindowStart_UtcDateAndTime: string;
			/** Enter the summary of total billing amount for this work order. */
			readonly msdyn_TotalAmount: string;
			/** Shows the value of the total amount in the base currency. */
			readonly msdyn_totalamount_Base: string;
			/** The estimated price after adding tax to the subtotal */
			readonly msdyn_totalestimatedaftertaxprice: string;
			/** Value of the Total Estimated After Tax Price in base currency. */
			readonly msdyn_totalestimatedaftertaxprice_Base: string;
			/** Calculated from the estimated duration of Work Order Incidents and Work Order Service Tasks not related to a Work Order Incident on the Work Order. Intended to be read-only. */
			readonly msdyn_totalestimatedduration: string;
			/** Enter the summary of total sales tax charged for this work order. */
			readonly msdyn_TotalSalesTax: string;
			/** Shows the value of the total sales tax in the base currency. */
			readonly msdyn_totalsalestax_Base: string;
			/** Select the Trade that associated with the Work Order. */
			readonly msdyn_Trade: string;
			/** The working hours for a requirement. */
			readonly msdyn_workhourtemplate: string;
			readonly msdyn_WorkLocation: string;
			/** For internal use only. */
			readonly msdyn_workorderarrivaltimekpiid: string;
			/** Shows the entity instances. */
			readonly msdyn_workorderId: string;
			/** For internal use only. */
			readonly msdyn_workorderresolutionkpiid: string;
			/** Type a summary description of the job. */
			readonly msdyn_WorkOrderSummary: string;
			/** Work Order Type */
			readonly msdyn_WorkOrderType: string;
			/** Shows the date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Shows the ID of the process associated with the entity. */
			readonly processid: string;
			/** Shows the ID of the stage where the entity is located. */
			readonly stageid: string;
			/** Status of the Work Order */
			readonly statecode: string;
			/** Reason for the status of the Work Order */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the entity. */
			readonly TransactionCurrencyId: string;
			/** Shows a comma-separated list of string values representing the unique identifiers of stages in a business process flow instance in the order that they occur. */
			readonly traversedpath: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_workorder {
		enum msdyn_SystemStatus {
			/** 690970005 */
			Canceled,
			/** 690970003 */
			Completed,
			/** 690970002 */
			In_Progress,
			/** 690970004 */
			Posted,
			/** 690970001 */
			Scheduled,
			/** 690970000 */
			Unscheduled
		}
		enum msdyn_WorkLocation {
			/** 690970001 */
			Facility,
			/** 690970002 */
			Location_Agnostic,
			/** 690970000 */
			Onsite
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}