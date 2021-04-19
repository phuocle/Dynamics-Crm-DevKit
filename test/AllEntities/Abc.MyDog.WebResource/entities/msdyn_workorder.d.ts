//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormWork_Order {
		interface tab__B8E326EE_5C21_4A18_BA55_E3B56966C249_Sections {
			_B14F3E67_E51B_4B3E_BB7F_A9CF0CF8DC17: DevKit.Controls.Section;
			f1tab_mainsettings_section_5: DevKit.Controls.Section;
			tab_3_section_1: DevKit.Controls.Section;
			tab_8_section_1: DevKit.Controls.Section;
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_2: DevKit.Controls.Section;
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_SECTION_3: DevKit.Controls.Section;
		}
		interface tab_f1tab_mainsettings_Sections {
			tab_7_section_1: DevKit.Controls.Section;
			f1tab_mainsettings_section_2: DevKit.Controls.Section;
			f1tab_mainsettings_section_3: DevKit.Controls.Section;
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
		interface tab_f1tab_additionalsettings_Sections {
			f1tab_settings_section_address: DevKit.Controls.Section;
		}
		interface tab_tab_8_Sections {
			tab_8_section_2: DevKit.Controls.Section;
		}
		interface tab_DeviceInsightsTab_Sections {
			DeviceInsightsSection: DevKit.Controls.Section;
		}
		interface tab_f1tab_record_log_Sections {
			tab_6_section_1: DevKit.Controls.Section;
		}
		interface tab__B8E326EE_5C21_4A18_BA55_E3B56966C249 extends DevKit.Controls.ITab {
			Section: tab__B8E326EE_5C21_4A18_BA55_E3B56966C249_Sections;
		}
		interface tab_f1tab_mainsettings extends DevKit.Controls.ITab {
			Section: tab_f1tab_mainsettings_Sections;
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
		interface tab_f1tab_additionalsettings extends DevKit.Controls.ITab {
			Section: tab_f1tab_additionalsettings_Sections;
		}
		interface tab_tab_8 extends DevKit.Controls.ITab {
			Section: tab_tab_8_Sections;
		}
		interface tab_DeviceInsightsTab extends DevKit.Controls.ITab {
			Section: tab_DeviceInsightsTab_Sections;
		}
		interface tab_f1tab_record_log extends DevKit.Controls.ITab {
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
			notescontrol: DevKit.Controls.Note;
			WebResource_msdyn_timewindowstart: DevKit.Controls.WebResource;
			WebResource_msdyn_timewindowend: DevKit.Controls.WebResource;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the user who modified the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyn_Address1: DevKit.Controls.String;
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
			/** When Bookings are used on a Work Order, this field is auto-populated based on the latest End Time from the related Bookings. Otherwise, this field is populated based on the change of System Status */
			msdyn_completedon: DevKit.Controls.DateTime;
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
			msdyn_IoTAlert_1: DevKit.Controls.Lookup;
			msdyn_Latitude: DevKit.Controls.Double;
			msdyn_Latitude_1: DevKit.Controls.Double;
			msdyn_Longitude: DevKit.Controls.Double;
			msdyn_Longitude_1: DevKit.Controls.Double;
			msdyn_mapcontrol: DevKit.Controls.String;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Opportunity associated with Work Order. */
			msdyn_OpportunityId: DevKit.Controls.Lookup;
			/** Unique identifier for Work Order associated with Work Order. */
			msdyn_ParentWorkOrder: DevKit.Controls.Lookup;
			msdyn_PostalCode: DevKit.Controls.String;
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
			/** Calculated from the estimated duration of Work Order Incidents and Work Order Service Tasks not related to a Work Order Incident on the Work Order. Intended to be read-only. */
			msdyn_totalestimatedduration: DevKit.Controls.Integer;
			/** Enter the summary of total sales tax charged for this work order. */
			msdyn_TotalSalesTax: DevKit.Controls.Money;
			/** The working hours for a requirement. */
			msdyn_workhourtemplate: DevKit.Controls.Lookup;
			msdyn_WorkLocation: DevKit.Controls.OptionSet;
			/** Type a summary description of the job. */
			msdyn_WorkOrderSummary: DevKit.Controls.String;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Work Order subsstatus */
			msdyn_SubStatus: DevKit.Controls.Lookup;
			/** Tracks the current system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_purchaseorder_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_rma_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_rtv_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem,
			navDocument: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_invoicedetail: DevKit.Controls.NavigationItem
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
			Work_Order_Business_Process: ProcessWork_Order_Business_Process;
		}
		interface Grid {
			Incidents_List: DevKit.Controls.Grid;
			bookings: DevKit.Controls.Grid;
			workorderproductsgrid: DevKit.Controls.Grid;
			workorderservicesgrid: DevKit.Controls.Grid;
			workorderservicetasksgrid: DevKit.Controls.Grid;
		}
	}
	class FormWork_Order extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Work_Order
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Work_Order */
		Body: MyDog.FormWork_Order.Body;
		/** The Footer section of form Work_Order */
		Footer: MyDog.FormWork_Order.Footer;
		/** The Navigation of form Work_Order */
		Navigation: MyDog.FormWork_Order.Navigation;
		/** The QuickForm of form Work_Order */
		QuickForm: MyDog.FormWork_Order.QuickForm;
		/** The Process of form Work_Order */
		Process: MyDog.FormWork_Order.Process;
		/** The Grid of form Work_Order */
		Grid: MyDog.FormWork_Order.Grid;
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
			nav_msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem,
			navDocument: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: DevKit.Controls.NavigationItem
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
			Work_Order_Business_Process: ProcessWork_Order_Business_Process;
		}
	}
	class FormWork_Order_Customer extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Work_Order_Customer
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Work_Order_Customer */
		Body: MyDog.FormWork_Order_Customer.Body;
		/** The Navigation of form Work_Order_Customer */
		Navigation: MyDog.FormWork_Order_Customer.Navigation;
		/** The Process of form Work_Order_Customer */
		Process: MyDog.FormWork_Order_Customer.Process;
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
			fstab_summary_section_general: DevKit.Controls.Section;
			fstab_summary_section_sales_tax: DevKit.Controls.Section;
			fstab_summary_section_primary_incident: DevKit.Controls.Section;
			fstab_summary_section_address: DevKit.Controls.Section;
			fstab_other_section_misc: DevKit.Controls.Section;
			fstab_other_section_total: DevKit.Controls.Section;
			_B8E326EE_5C21_4A18_BA55_E3B56966C249_COLUMN_2_SECTION_1: DevKit.Controls.Section;
			fstab_sub_grids_section: DevKit.Controls.Section;
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
			notescontrol: DevKit.Controls.Note;
			msdyn_Address1: DevKit.Controls.String;
			msdyn_Address1_1: DevKit.Controls.String;
			msdyn_Address2: DevKit.Controls.String;
			msdyn_Address3: DevKit.Controls.String;
			/** Account to be billed. If a billing account has been set on service account it will be populated by default. Otherwise, the billing account will be the same as the service account. */
			msdyn_BillingAccount: DevKit.Controls.Lookup;
			msdyn_City: DevKit.Controls.String;
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
			msdyn_Latitude_1: DevKit.Controls.Double;
			msdyn_Longitude: DevKit.Controls.Double;
			msdyn_Longitude_1: DevKit.Controls.Double;
			msdyn_mapcontrol: DevKit.Controls.String;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_PostalCode: DevKit.Controls.String;
			/** Price List that controls pricing for products / services added to this work order. By default the system will use the Price List specified on the account */
			msdyn_PriceList: DevKit.Controls.Lookup;
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
			/** Enter the summary of total sales tax charged for this work order. */
			msdyn_TotalSalesTax: DevKit.Controls.Money;
			/** Type a summary description of the job. */
			msdyn_WorkOrderSummary: DevKit.Controls.String;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the currency associated with the entity. */
			TransactionCurrencyId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem,
			navDocument: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: DevKit.Controls.NavigationItem
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
			Work_Order_Business_Process: ProcessWork_Order_Business_Process;
		}
		interface Grid {
			workorderproductsgrid: DevKit.Controls.Grid;
			workorderservicesgrid: DevKit.Controls.Grid;
			workorderservicetasksgrid: DevKit.Controls.Grid;
			Incidents_List: DevKit.Controls.Grid;
			bookings: DevKit.Controls.Grid;
		}
	}
	class FormWork_Order_Mobile extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Work_Order_Mobile
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Work_Order_Mobile */
		Body: MyDog.FormWork_Order_Mobile.Body;
		/** The Header section of form Work_Order_Mobile */
		Header: MyDog.FormWork_Order_Mobile.Header;
		/** The Navigation of form Work_Order_Mobile */
		Navigation: MyDog.FormWork_Order_Mobile.Navigation;
		/** The Process of form Work_Order_Mobile */
		Process: MyDog.FormWork_Order_Mobile.Process;
		/** The Grid of form Work_Order_Mobile */
		Grid: MyDog.FormWork_Order_Mobile.Grid;
	}
	namespace FormWork_Order_Notes {
		interface tab_fstab_notes_Sections {
			fstab_notes_section_summary: DevKit.Controls.Section;
			fstab_notes_section_details: DevKit.Controls.Section;
		}
		interface tab_fstab_fieldservice_Sections {
			fstab_fieldservice_section_general: DevKit.Controls.Section;
			fstab_fieldservice_section_others: DevKit.Controls.Section;
		}
		interface tab_fstab_notes extends DevKit.Controls.ITab {
			Section: tab_fstab_notes_Sections;
		}
		interface tab_fstab_fieldservice extends DevKit.Controls.ITab {
			Section: tab_fstab_fieldservice_Sections;
		}
		interface Tabs {
			fstab_notes: tab_fstab_notes;
			fstab_fieldservice: tab_fstab_fieldservice;
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
			nav_msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem,
			navDocument: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: DevKit.Controls.NavigationItem
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
			Work_Order_Business_Process: ProcessWork_Order_Business_Process;
		}
	}
	class FormWork_Order_Notes extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Work_Order_Notes
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Work_Order_Notes */
		Body: MyDog.FormWork_Order_Notes.Body;
		/** The Navigation of form Work_Order_Notes */
		Navigation: MyDog.FormWork_Order_Notes.Navigation;
		/** The Process of form Work_Order_Notes */
		Process: MyDog.FormWork_Order_Notes.Process;
	}
	namespace FormWork_Order_Service {
		interface tab_fstab_service_Sections {
			fstab_service_section_subgrids: DevKit.Controls.Section;
			fstab_service_section_summary: DevKit.Controls.Section;
		}
		interface tab_fstab_fieldservice_Sections {
			fstab_fieldservice_section_general: DevKit.Controls.Section;
			fstab_fieldservice_section_others: DevKit.Controls.Section;
		}
		interface tab_fstab_service extends DevKit.Controls.ITab {
			Section: tab_fstab_service_Sections;
		}
		interface tab_fstab_fieldservice extends DevKit.Controls.ITab {
			Section: tab_fstab_fieldservice_Sections;
		}
		interface Tabs {
			fstab_service: tab_fstab_service;
			fstab_fieldservice: tab_fstab_fieldservice;
		}
		interface Body {
			Tab: Tabs;
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
			/** Incident description */
			msdyn_PrimaryIncidentDescription: DevKit.Controls.String;
			/** Primary incident type reported */
			msdyn_PrimaryIncidentType: DevKit.Controls.Lookup;
			/** Priority of the Work Order. To be taken into consideration while scheduling resources */
			msdyn_Priority: DevKit.Controls.Lookup;
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
			/** Enter the summary of total sales tax charged for this work order. */
			msdyn_TotalSalesTax: DevKit.Controls.Money;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_workorder_msdyn_workorderincident_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderproduct_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderservice_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorderservicetask_WorkOrder: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_bookableresourcebooking_WorkOrder: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem,
			navDocument: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_workorder_msdyn_workorder_ParentWorkOrder: DevKit.Controls.NavigationItem
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
			Work_Order_Business_Process: ProcessWork_Order_Business_Process;
		}
		interface Grid {
			FsWorkOrderServiceTasksGrid: DevKit.Controls.Grid;
			FsWorkOrderProductsGrid: DevKit.Controls.Grid;
			FsWorkOrderServicesGrid: DevKit.Controls.Grid;
			FsWorkOrderIncidentsGrid: DevKit.Controls.Grid;
		}
	}
	class FormWork_Order_Service extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Work_Order_Service
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Work_Order_Service */
		Body: MyDog.FormWork_Order_Service.Body;
		/** The Navigation of form Work_Order_Service */
		Navigation: MyDog.FormWork_Order_Service.Navigation;
		/** The Process of form Work_Order_Service */
		Process: MyDog.FormWork_Order_Service.Process;
		/** The Grid of form Work_Order_Service */
		Grid: MyDog.FormWork_Order_Service.Grid;
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
			/** Type a summary description of the job. */
			msdyn_WorkOrderSummary: DevKit.Controls.String;
			/** Work Order Type */
			msdyn_WorkOrderType: DevKit.Controls.Lookup;
		}
	}
	class FormQuick_Create_Work_Order extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Quick_Create_Work_Order
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.WebApi;
		/** The Body section of form Quick_Create_Work_Order */
		Body: MyDog.FormQuick_Create_Work_Order.Body;
	}
}
declare namespace OptionSet {
	namespace msdyn_workorder {
		enum msdyn_SystemStatus {
			/** 690970005 */
			Closed_Canceled,
			/** 690970004 */
			Closed_Posted,
			/** 690970003 */
			Open_Completed,
			/** 690970002 */
			Open_In_Progress,
			/** 690970001 */
			Open_Scheduled,
			/** 690970000 */
			Open_Unscheduled
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
//{'JsForm':['Quick Create Work Order','Work Order','Work Order - Customer','Work Order - Mobile','Work Order - Notes','Work Order - Service'],'JsWebApi':false,'IsDebugForm':true,'IsDebugWebApi':false,'Version':'2.12.31','JsFormVersion':'v2'}