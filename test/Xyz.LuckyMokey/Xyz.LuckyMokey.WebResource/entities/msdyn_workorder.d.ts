//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormWork_Order {
		interface tab__B8E326EE_5C21_4A18_BA55_E3B56966C249_Sections {
			_B14F3E67_E51B_4B3E_BB7F_A9CF0CF8DC17: DevKit.Form.Controls.ControlSection;
			f1tab_mainsettings_section_5: DevKit.Form.Controls.ControlSection;
			tab_3_section_1: DevKit.Form.Controls.ControlSection;
			tab_8_section_1: DevKit.Form.Controls.ControlSection;
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_2: DevKit.Form.Controls.ControlSection;
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_mainsettings_Sections {
			tab_7_section_1: DevKit.Form.Controls.ControlSection;
			f1tab_mainsettings_section_2: DevKit.Form.Controls.ControlSection;
			f1tab_mainsettings_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_5_Sections {
			tab_5_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_6_Sections {
			tab_6_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_7_Sections {
			tab_7_section_1_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_additionalsettings_Sections {
			f1tab_settings_section_address: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_8_Sections {
			tab_8_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_DeviceInsightsTab_Sections {
			DeviceInsightsSection: DevKit.Form.Controls.ControlSection;
		}
		interface tab_f1tab_record_log_Sections {
			tab_6_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab__B8E326EE_5C21_4A18_BA55_E3B56966C249 extends DevKit.Form.Controls.IControlTab {
			Section: tab__B8E326EE_5C21_4A18_BA55_E3B56966C249_Sections;
		}
		interface tab_f1tab_mainsettings extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_mainsettings_Sections;
		}
		interface tab_tab_5 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_5_Sections;
		}
		interface tab_tab_6 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_6_Sections;
		}
		interface tab_tab_7 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_7_Sections;
		}
		interface tab_f1tab_additionalsettings extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_additionalsettings_Sections;
		}
		interface tab_tab_8 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_8_Sections;
		}
		interface tab_DeviceInsightsTab extends DevKit.Form.Controls.IControlTab {
			Section: tab_DeviceInsightsTab_Sections;
		}
		interface tab_f1tab_record_log extends DevKit.Form.Controls.IControlTab {
			Section: tab_f1tab_record_log_Sections;
		}
		interface Tabs {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249: tab__B8E326EE_5C21_4A18_BA55_E3B56966C249;
			f1tab_mainsettings: tab_f1tab_mainsettings;
			tab_5: tab_tab_5;
			tab_6: tab_tab_6;
			tab_7: tab_tab_7;
			f1tab_additionalsettings: tab_f1tab_additionalsettings;
			tab_8: tab_tab_8;
			DeviceInsightsTab: tab_DeviceInsightsTab;
			f1tab_record_log: tab_f1tab_record_log;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			Incidents_List: DevKit.Form.Controls.ControlGrid;
			bookings: DevKit.Form.Controls.ControlGrid;
			WebResource_msdyn_timewindowstart: DevKit.Form.Controls.ControlWebResource;
			WebResource_msdyn_timewindowend: DevKit.Form.Controls.ControlWebResource;
			workorderproductsgrid: DevKit.Form.Controls.ControlGrid;
			workorderservicesgrid: DevKit.Form.Controls.ControlGrid;
			workorderservicetasksgrid: DevKit.Form.Controls.ControlGrid;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Form.Controls.ControlLookup;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Form.Controls.ControlDateTime;
			msdyn_Address1: DevKit.Form.Controls.ControlString;
			msdyn_Address2: DevKit.Form.Controls.ControlString;
			msdyn_Address3: DevKit.Form.Controls.ControlString;
			msdyn_AddressName: DevKit.Form.Controls.ControlString;
			/** Shows the agreement linked to this work order. */
			msdyn_Agreement: DevKit.Form.Controls.ControlLookup;
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Form.Controls.ControlLookup;
			msdyn_City: DevKit.Form.Controls.ControlString;
			/** The user that last closed this work order */
			msdyn_ClosedBy: DevKit.Form.Controls.ControlLookup;
			msdyn_Country: DevKit.Form.Controls.ControlString;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Form.Controls.ControlLookup;
			msdyn_DateWindowEnd: DevKit.Form.Controls.ControlDate;
			msdyn_DateWindowStart: DevKit.Form.Controls.ControlDate;
			/** Enter the summary of total estimated billing amount for this work order */
			msdyn_EstimateSubtotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows instructions for booked resources. By default, this information is taken from the work order instructions field on the service account. */
			msdyn_Instructions: DevKit.Form.Controls.ControlString;
			/** The iot alert which initiated this work order. */
			msdyn_IoTAlert: DevKit.Form.Controls.ControlLookup;
			/** The iot alert which initiated this work order. */
			msdyn_IoTAlert_1: DevKit.Form.Controls.ControlLookup;
			msdyn_Latitude: DevKit.Form.Controls.ControlDouble;
			msdyn_Latitude_1: DevKit.Form.Controls.ControlDouble;
			msdyn_Longitude: DevKit.Form.Controls.ControlDouble;
			msdyn_Longitude_1: DevKit.Form.Controls.ControlDouble;
			msdyn_mapcontrol: DevKit.Form.Controls.ControlString;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			/** Unique identifier for Opportunity associated with Work Order. */
			msdyn_OpportunityId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Work Order associated with Work Order. */
			msdyn_ParentWorkOrder: DevKit.Form.Controls.ControlLookup;
			msdyn_PostalCode: DevKit.Form.Controls.ControlString;
			/** Price List that controls pricing for products / services added to this work order. By default the system will use the Price List specified on the account */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Incident description */
			msdyn_PrimaryIncidentDescription: DevKit.Form.Controls.ControlString;
			/** Shows the time estimated to resolve this incident. */
			msdyn_PrimaryIncidentEstimatedDuration: DevKit.Form.Controls.ControlInteger;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Form.Controls.ControlLookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Form.Controls.ControlLookup;
			/** The contact that reported this Work Order */
			msdyn_ReportedByContact: DevKit.Form.Controls.ControlLookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Form.Controls.ControlLookup;
			service_account_details: DevKit.Form.Controls.ControlQuickView;
			/** Case of which this work order originates from */
			msdyn_ServiceRequest: DevKit.Form.Controls.ControlLookup;
			/** The service territory this work order relates to. By default this will be set to the Service Territory defined on the service account */
			msdyn_ServiceTerritory: DevKit.Form.Controls.ControlLookup;
			msdyn_StateOrProvince: DevKit.Form.Controls.ControlString;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Form.Controls.ControlLookup;
			/** Enter the summary of subtotal billing amount excluding tax for this work order. */
			msdyn_SubtotalAmount: DevKit.Form.Controls.ControlMoney;
			/** A support contact can be specified so that the individual working on the work order has someone to contact for assistance. */
			msdyn_SupportContact: DevKit.Form.Controls.ControlLookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Shows whether sales tax is to be charged for this work order. */
			msdyn_Taxable: DevKit.Form.Controls.ControlBoolean;
			/** Tax Code to be used to calculate tax when Work Order is taxable. By default the system will use the tax code specified on the service account */
			msdyn_TaxCode: DevKit.Form.Controls.ControlLookup;
			/** Enter the time this work order was last closed. */
			msdyn_TimeClosed: DevKit.Form.Controls.ControlDateTime;
			/** Enter the starting range of the time promised to the account that incidents will be resolved. */
			msdyn_TimeFromPromised: DevKit.Form.Controls.ControlDateTime;
			msdyn_TimeGroup: DevKit.Form.Controls.ControlLookup;
			/** Enter the ending range of the time promised to the account that incidents will be resolved. */
			msdyn_TimeToPromised: DevKit.Form.Controls.ControlDateTime;
			msdyn_TimeWindowEnd: DevKit.Form.Controls.ControlDateTime;
			msdyn_TimeWindowStart: DevKit.Form.Controls.ControlDateTime;
			/** Enter the summary of total billing amount for this work order. */
			msdyn_TotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Enter the summary of total sales tax charged for this work order. */
			msdyn_TotalSalesTax: DevKit.Form.Controls.ControlMoney;
			/** The working hours for a requirement. */
			msdyn_workhourtemplate: DevKit.Form.Controls.ControlLookup;
			msdyn_WorkLocation: DevKit.Form.Controls.ControlOptionSet;
			/** Type a summary description of the job. */
			msdyn_WorkOrderSummary: DevKit.Form.Controls.ControlString;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Footer {
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Form.Controls.ControlLookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_rma_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			navConnections: DevKit.Form.Controls.ControlNavigationItem,
			navDocument: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_payment_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_invoicedetail: DevKit.Form.Controls.ControlNavigationItem
		}
		interface ProcessWork_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Form.Controls.ControlLookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Form.Controls.ControlLookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Form.Controls.ControlLookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Form.Controls.ControlLookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Form.Controls.ControlLookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Form.Controls.ControlOptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Form.Controls.ControlLookup;
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
			Work_Order_Business_Process: ProcessWork_Order_Business_Process;
		}
	}
	class FormWork_Order extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Work_Order
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Work_Order */
		Body: LuckyMokey.FormWork_Order.Body;
		/** The Footer section of form Work_Order */
		Footer: LuckyMokey.FormWork_Order.Footer;
		/** The Navigation of form Work_Order */
		Navigation: LuckyMokey.FormWork_Order.Navigation;
		/** The Process of form Work_Order */
		Process: LuckyMokey.FormWork_Order.Process;
	}
	namespace FormWork_Order_Mobile {
		interface Header {
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Form.Controls.ControlLookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Form.Controls.ControlLookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab__B8E326EE_5C21_4A18_BA55_E3B56966C249_Sections {
			fstab_summary_section_general: DevKit.Form.Controls.ControlSection;
			fstab_summary_section_sales_tax: DevKit.Form.Controls.ControlSection;
			fstab_summary_section_primary_incident: DevKit.Form.Controls.ControlSection;
			fstab_summary_section_address: DevKit.Form.Controls.ControlSection;
			fstab_other_section_misc: DevKit.Form.Controls.ControlSection;
			fstab_other_section_total: DevKit.Form.Controls.ControlSection;
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_COLUMN_2_SECTION_1: DevKit.Form.Controls.ControlSection;
			fstab_sub_grids_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_8_Sections {
			tab_8_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__B8E326EE_5C21_4A18_BA55_E3B56966C249 extends DevKit.Form.Controls.IControlTab {
			Section: tab__B8E326EE_5C21_4A18_BA55_E3B56966C249_Sections;
		}
		interface tab_tab_8 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_8_Sections;
		}
		interface Tabs {
			_B8E326EE_5C21_4A18_BA55_E3B56966C249: tab__B8E326EE_5C21_4A18_BA55_E3B56966C249;
			tab_8: tab_tab_8;
		}
		interface Body {
			Tab: Tabs;
			workorderproductsgrid: DevKit.Form.Controls.ControlGrid;
			workorderservicesgrid: DevKit.Form.Controls.ControlGrid;
			workorderservicetasksgrid: DevKit.Form.Controls.ControlGrid;
			Incidents_List: DevKit.Form.Controls.ControlGrid;
			bookings: DevKit.Form.Controls.ControlGrid;
			notescontrol: DevKit.Form.Controls.ControlNote;
			msdyn_Address1: DevKit.Form.Controls.ControlString;
			msdyn_Address2: DevKit.Form.Controls.ControlString;
			msdyn_Address3: DevKit.Form.Controls.ControlString;
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Form.Controls.ControlLookup;
			msdyn_City: DevKit.Form.Controls.ControlString;
			msdyn_Country: DevKit.Form.Controls.ControlString;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Form.Controls.ControlLookup;
			/** Enter the summary of total estimated billing amount for this work order */
			msdyn_EstimateSubtotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Shows instructions for booked resources. By default, this information is taken from the work order instructions field on the service account. */
			msdyn_Instructions: DevKit.Form.Controls.ControlString;
			/** For internal use only. */
			msdyn_InternalFlags: DevKit.Form.Controls.ControlString;
			msdyn_Latitude: DevKit.Form.Controls.ControlDouble;
			msdyn_Latitude_1: DevKit.Form.Controls.ControlDouble;
			msdyn_Longitude: DevKit.Form.Controls.ControlDouble;
			msdyn_Longitude_1: DevKit.Form.Controls.ControlDouble;
			msdyn_mapcontrol: DevKit.Form.Controls.ControlString;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Form.Controls.ControlString;
			msdyn_PostalCode: DevKit.Form.Controls.ControlString;
			/** Price List that controls pricing for products / services added to this work order. By default the system will use the Price List specified on the account */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Incident description */
			msdyn_PrimaryIncidentDescription: DevKit.Form.Controls.ControlString;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Form.Controls.ControlLookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Form.Controls.ControlLookup;
			/** The contact that reported this Work Order */
			msdyn_ReportedByContact: DevKit.Form.Controls.ControlLookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Form.Controls.ControlLookup;
			/** The service territory this work order relates to. By default this will be set to the Service Territory defined on the service account */
			msdyn_ServiceTerritory: DevKit.Form.Controls.ControlLookup;
			msdyn_StateOrProvince: DevKit.Form.Controls.ControlString;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Form.Controls.ControlLookup;
			/** Enter the summary of subtotal billing amount excluding tax for this work order. */
			msdyn_SubtotalAmount: DevKit.Form.Controls.ControlMoney;
			/** A support contact can be specified so that the individual working on the work order has someone to contact for assistance. */
			msdyn_SupportContact: DevKit.Form.Controls.ControlLookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Shows whether sales tax is to be charged for this work order. */
			msdyn_Taxable: DevKit.Form.Controls.ControlBoolean;
			/** Tax Code to be used to calculate tax when Work Order is taxable. By default the system will use the tax code specified on the service account */
			msdyn_TaxCode: DevKit.Form.Controls.ControlLookup;
			/** Enter the starting range of the time promised to the account that incidents will be resolved. */
			msdyn_TimeFromPromised: DevKit.Form.Controls.ControlDateTime;
			/** Enter the ending range of the time promised to the account that incidents will be resolved. */
			msdyn_TimeToPromised: DevKit.Form.Controls.ControlDateTime;
			/** Enter the summary of total billing amount for this work order. */
			msdyn_TotalAmount: DevKit.Form.Controls.ControlMoney;
			/** Enter the summary of total sales tax charged for this work order. */
			msdyn_TotalSalesTax: DevKit.Form.Controls.ControlMoney;
			/** Type a summary description of the job. */
			msdyn_WorkOrderSummary: DevKit.Form.Controls.ControlString;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Form.Controls.ControlLookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_rma_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workordercharacteristic_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderresourcerestriction_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_payment_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			navConnections: DevKit.Form.Controls.ControlNavigationItem,
			navDocument: DevKit.Form.Controls.ControlNavigationItem,
			navAudit: DevKit.Form.Controls.ControlNavigationItem,
			navProcessSessions: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_purchaseorderreceiptproduct_AssociateToWorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_agreementbookingdate_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_purchaseorderproduct_AssociateToWorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_inventoryjournal_AllocatedToWorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_paymentdetail_Workorder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_rtvproduct_WorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_msdyn_workorder_invoicedetail: DevKit.Form.Controls.ControlNavigationItem
		}
		interface ProcessWork_Order_Business_Process {
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Form.Controls.ControlLookup;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Form.Controls.ControlLookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Form.Controls.ControlLookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Form.Controls.ControlLookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Form.Controls.ControlLookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Tracks the current system status. */
			msdyn_SystemStatus_1: DevKit.Form.Controls.ControlOptionSet;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Form.Controls.ControlLookup;
		}
		interface Process extends DevKit.Form.Controls.IControlProcess {
			Work_Order_Business_Process: ProcessWork_Order_Business_Process;
		}
	}
	class FormWork_Order_Mobile extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Work_Order_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Work_Order_Mobile */
		Body: LuckyMokey.FormWork_Order_Mobile.Body;
		/** The Header section of form Work_Order_Mobile */
		Header: LuckyMokey.FormWork_Order_Mobile.Header;
		/** The Navigation of form Work_Order_Mobile */
		Navigation: LuckyMokey.FormWork_Order_Mobile.Navigation;
		/** The Process of form Work_Order_Mobile */
		Process: LuckyMokey.FormWork_Order_Mobile.Process;
	}
	namespace FormQuick_Create_Work_Order {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_1_column_3_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_1 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Form.Controls.ControlLookup;
			/** Customer Asset related to this incident reported */
			msdyn_CustomerAsset: DevKit.Form.Controls.ControlLookup;
			/** The iot alert which initiated this work order. */
			msdyn_IoTAlert: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier for Opportunity associated with Work Order. */
			msdyn_OpportunityId: DevKit.Form.Controls.ControlLookup;
			/** Price List that controls pricing for products / services added to this work order. By default the system will use the Price List specified on the account */
			msdyn_PriceList: DevKit.Form.Controls.ControlLookup;
			/** Incident description */
			msdyn_PrimaryIncidentDescription: DevKit.Form.Controls.ControlString;
			/** Shows the time estimated to resolve this incident. */
			msdyn_PrimaryIncidentEstimatedDuration: DevKit.Form.Controls.ControlInteger;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Form.Controls.ControlLookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Form.Controls.ControlLookup;
			/** The contact that reported this Work Order */
			msdyn_ReportedByContact: DevKit.Form.Controls.ControlLookup;
			/** Account to be serviced */
			msdyn_ServiceAccount: DevKit.Form.Controls.ControlLookup;
			/** Case of which this work order originates from */
			msdyn_ServiceRequest: DevKit.Form.Controls.ControlLookup;
			/** The service territory this work order relates to. By default this will be set to the Service Territory defined on the service account */
			msdyn_ServiceTerritory: DevKit.Form.Controls.ControlLookup;
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Form.Controls.ControlLookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Form.Controls.ControlOptionSet;
			/** Type a summary description of the job. */
			msdyn_WorkOrderSummary: DevKit.Form.Controls.ControlString;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Form.Controls.ControlLookup;
		}
	}
	class FormQuick_Create_Work_Order extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Quick_Create_Work_Order
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Quick_Create_Work_Order */
		Body: LuckyMokey.FormQuick_Create_Work_Order.Body;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the exchange rate for the currency associated with the entity with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_Address1: DevKit.WebApi.StringValue;
		msdyn_Address2: DevKit.WebApi.StringValue;
		msdyn_Address3: DevKit.WebApi.StringValue;
		msdyn_AddressName: DevKit.WebApi.StringValue;
		/** Shows the agreement linked to this work order. */
		msdyn_Agreement: DevKit.WebApi.LookupValue;
		/** Internal field used to generate the next name upon entity creation. It is optionally copied to the msdyn_name field. */
		msdyn_AutoNumbering: DevKit.WebApi.StringValue;
		/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
		msdyn_BillingAccount: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		msdyn_BookingSummary: DevKit.WebApi.StringValue;
		msdyn_ChildIndex: DevKit.WebApi.IntegerValue;
		msdyn_City: DevKit.WebApi.StringValue;
		/** The user that last closed this work order */
		msdyn_ClosedBy: DevKit.WebApi.LookupValue;
		msdyn_Country: DevKit.WebApi.StringValue;
		/** Customer Asset related to this incident reported */
		msdyn_CustomerAsset: DevKit.WebApi.LookupValue;
		msdyn_DateWindowEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		msdyn_DateWindowStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the summary of total estimated billing amount for this work order */
		msdyn_EstimateSubtotalAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the estimate subtotal amount in the base currency. */
		msdyn_estimatesubtotalamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Indicate the details of the follow up work */
		msdyn_FollowUpNote: DevKit.WebApi.StringValue;
		/** Allows indication if follow up work is required for a work order. */
		msdyn_FollowUpRequired: DevKit.WebApi.BooleanValue;
		/** Shows instructions for booked resources. By default, this information is taken from the work order instructions field on the service account. */
		msdyn_Instructions: DevKit.WebApi.StringValue;
		/** For internal use only. */
		msdyn_InternalFlags: DevKit.WebApi.StringValue;
		/** The iot alert which initiated this work order. */
		msdyn_IoTAlert: DevKit.WebApi.LookupValue;
		msdyn_IsFollowUp: DevKit.WebApi.BooleanValue;
		msdyn_IsMobile: DevKit.WebApi.BooleanValue;
		msdyn_Latitude: DevKit.WebApi.DoubleValue;
		msdyn_Longitude: DevKit.WebApi.DoubleValue;
		msdyn_mapcontrol: DevKit.WebApi.StringValueReadonly;
		/** Enter the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for Opportunity associated with Work Order. */
		msdyn_OpportunityId: DevKit.WebApi.LookupValue;
		/** Unique identifier for Work Order associated with Work Order. */
		msdyn_ParentWorkOrder: DevKit.WebApi.LookupValue;
		msdyn_PostalCode: DevKit.WebApi.StringValue;
		/** The customer Preferred Resource to work on this job. Should be taken into consideration while scheduling resources */
		msdyn_PreferredResource: DevKit.WebApi.LookupValue;
		/** Price List that controls pricing for products / services added to this work order. By default the system will use the Price List specified on the account */
		msdyn_PriceList: DevKit.WebApi.LookupValue;
		/** Incident description */
		msdyn_PrimaryIncidentDescription: DevKit.WebApi.StringValue;
		/** Shows the time estimated to resolve this incident. */
		msdyn_PrimaryIncidentEstimatedDuration: DevKit.WebApi.IntegerValue;
		/** Primary incident type reported */
		msdyn_PrimaryIncidentType: DevKit.WebApi.LookupValue;
		/** Priority of the Work Order. To be taken into consideration while scheduling resources */
		msdyn_Priority: DevKit.WebApi.LookupValue;
		/** The contact that reported this Work Order */
		msdyn_ReportedByContact: DevKit.WebApi.LookupValue;
		/** Account to be serviced */
		msdyn_ServiceAccount: DevKit.WebApi.LookupValue;
		/** Case of which this work order originates from */
		msdyn_ServiceRequest: DevKit.WebApi.LookupValue;
		/** The service territory this work order relates to. By default this will be set to the Service Territory defined on the service account */
		msdyn_ServiceTerritory: DevKit.WebApi.LookupValue;
		msdyn_StateOrProvince: DevKit.WebApi.StringValue;
		/** Work Order subsstatus */
		msdyn_SubStatus: DevKit.WebApi.LookupValue;
		/** Enter the summary of subtotal billing amount excluding tax for this work order. */
		msdyn_SubtotalAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the subtotal amount in the base currency. */
		msdyn_subtotalamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** A support contact can be specified so that the individual working on the work order has someone to contact for assistance. */
		msdyn_SupportContact: DevKit.WebApi.LookupValue;
		/** Tracks the current system status. */
		msdyn_SystemStatus: DevKit.WebApi.OptionSetValue;
		/** Shows whether sales tax is to be charged for this work order. */
		msdyn_Taxable: DevKit.WebApi.BooleanValue;
		/** Tax Code to be used to calculate tax when Work Order is taxable. By default the system will use the tax code specified on the service account */
		msdyn_TaxCode: DevKit.WebApi.LookupValue;
		/** Enter the time this work order was last closed. */
		msdyn_TimeClosed_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Enter the starting range of the time promised to the account that incidents will be resolved. */
		msdyn_TimeFromPromised_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_TimeGroup: DevKit.WebApi.LookupValue;
		msdyn_TimeGroupDetailSelected: DevKit.WebApi.LookupValue;
		/** Enter the ending range of the time promised to the account that incidents will be resolved. */
		msdyn_TimeToPromised_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_TimeWindowEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_TimeWindowStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Enter the summary of total billing amount for this work order. */
		msdyn_TotalAmount: DevKit.WebApi.MoneyValue;
		/** Shows the value of the total amount in the base currency. */
		msdyn_totalamount_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Enter the summary of total sales tax charged for this work order. */
		msdyn_TotalSalesTax: DevKit.WebApi.MoneyValue;
		/** Shows the value of the total sales tax in the base currency. */
		msdyn_totalsalestax_Base: DevKit.WebApi.MoneyValueReadonly;
		/** The working hours for a requirement. */
		msdyn_workhourtemplate: DevKit.WebApi.LookupValue;
		msdyn_WorkLocation: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		msdyn_workorderarrivaltimekpiid: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_workorderId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		msdyn_workorderresolutionkpiid: DevKit.WebApi.LookupValue;
		/** Type a summary description of the job. */
		msdyn_WorkOrderSummary: DevKit.WebApi.StringValue;
		/** Work Order Type */
		msdyn_WorkOrderType: DevKit.WebApi.LookupValue;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Shows the ID of the process associated with the entity. */
		processid: DevKit.WebApi.GuidValue;
		/** Shows the ID of the stage where the entity is located. */
		stageid: DevKit.WebApi.GuidValue;
		/** Status of the Work Order */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Work Order */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Shows a comma-separated list of string values representing the unique identifiers of stages in a business process flow instance in the order that they occur. */
		traversedpath: DevKit.WebApi.StringValue;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_workorder {
		enum msdyn_SystemStatus {
			/** 690970000 */
			Open_Unscheduled,
			/** 690970001 */
			Open_Scheduled,
			/** 690970002 */
			Open_In_Progress,
			/** 690970003 */
			Open_Completed,
			/** 690970004 */
			Closed_Posted,
			/** 690970005 */
			Closed_Canceled
		}
		enum msdyn_WorkLocation {
			/** 690970000 */
			Onsite,
			/** 690970001 */
			Facility,
			/** 690970002 */
			Location_Agnostic
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
//{'JsForm':['Quick Create Work Order','Work Order','Work Order - Mobile'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}