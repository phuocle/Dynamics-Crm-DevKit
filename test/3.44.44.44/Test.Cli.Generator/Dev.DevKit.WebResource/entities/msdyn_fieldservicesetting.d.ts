//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormField_Service_Mobile_Features {
		interface tab__4C33D329_1CE8_4403_91BA_B0EB43E0614F_Sections {
			_6D0AF167_2AF7_4031_BF4F_7E32B9569935: DevKit.Controls.Section;
			_8908E1A0_9A6C_424E_4D71_4BDD86D5B094: DevKit.Controls.Section;
		}
		interface tab__4C33D329_1CE8_4403_91BA_B0EB43E0614F extends DevKit.Controls.ITab {
			Section: tab__4C33D329_1CE8_4403_91BA_B0EB43E0614F_Sections;
		}
		interface Tabs {
			_4C33D329_1CE8_4403_91BA_B0EB43E0614F: tab__4C33D329_1CE8_4403_91BA_B0EB43E0614F;
		}
		interface Body {
			Tab: Tabs;
			/** For Field Service internal use only. */
			msdyn_InternalFlags: DevKit.Controls.String;
			/** For Field Service internal use only. */
			msdyn_InternalFlags1: DevKit.Controls.String;
			/** For Field Service internal use only. */
			msdyn_InternalFlags2: DevKit.Controls.String;
			/** For Field Service internal use only. */
			msdyn_InternalFlags3: DevKit.Controls.String;
			/** For Field Service internal use only. */
			msdyn_InternalFlags4: DevKit.Controls.String;
			/** For Field Service internal use only. */
			msdyn_InternalFlags5: DevKit.Controls.String;
			/** For Field Service internal use only. */
			msdyn_InternalFlags6: DevKit.Controls.String;
			WebResource_NotificationDialog_NewMobileExperienceNote: DevKit.Controls.WebResource;
			WebResource_PlainTextResource_BookingMaps: DevKit.Controls.WebResource;
			WebResource_PlainTextResource_CopilotRecapMobile: DevKit.Controls.WebResource;
			WebResource_PlainTextResource_CopilotWorkOrderUpdate: DevKit.Controls.WebResource;
			WebResource_PlainTextResource_FSMNativeForUsersInSR: DevKit.Controls.WebResource;
			WebResource_PlainTextResource_FSMNativeImmersiveHome: DevKit.Controls.WebResource;
			WebResource_PlainTextResource_FSMNativePreviewTerms: DevKit.Controls.WebResource;
			WebResource_PlainTextResource_FSMPreviewTerms: DevKit.Controls.WebResource;
			WebResource_PlainTextResource_HeaderNewMobileExperience: DevKit.Controls.WebResource;
			WebResource_PlainTextResource_NativeExperienceCopilot: DevKit.Controls.WebResource;
			WebResource_PlainTextResource_NewMobileExperience: DevKit.Controls.WebResource;
		}
		interface Navigation {
			msdyn_fieldservicesetting_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_Appointments: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_Emails: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class FormField_Service_Mobile_Features extends DevKit.IForm {
		/**
		* Field Service Mobile Features [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Field_Service_Mobile_Features */
		Body: DevKit.FormField_Service_Mobile_Features.Body;
		/** The Navigation of form Field_Service_Mobile_Features */
		Navigation: DevKit.FormField_Service_Mobile_Features.Navigation;
		/** The SidePanes of form Field_Service_Mobile_Features */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_fieldservicesetting_Information {
		interface tab__4CC8A00D_6D79_4310_A61A_6B5A0597CAF4_Sections {
			_C420A5EF_CA73_43EA_A432_4F9ECE791087: DevKit.Controls.Section;
		}
		interface tab_RemoteAssist_Sections {
			tab_13_section_1_2: DevKit.Controls.Section;
			tab_13_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_10_Sections {
			tab_10_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_11_Sections {
			tab_11_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_12_Sections {
			tab_12_section_1: DevKit.Controls.Section;
			tab_12_section_2: DevKit.Controls.Section;
			tab_12_section_3: DevKit.Controls.Section;
		}
		interface tab_tab_13_Sections {
			tab_13_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_14_Sections {
			tab_14_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_15_Sections {
			tab_15_section_1: DevKit.Controls.Section;
			tab_15_section_2: DevKit.Controls.Section;
			tab_15_section_3: DevKit.Controls.Section;
			tab_15_section_4: DevKit.Controls.Section;
		}
		interface tab_tab_4_Sections {
			tab_4_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_6_Sections {
			Crew_Management: DevKit.Controls.Section;
			Mobile: DevKit.Controls.Section;
			tab_3_section_1: DevKit.Controls.Section;
			tab_6_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_7_Sections {
			tab_7_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_8_Sections {
			tab_8_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_9_Sections {
			tab_9_section_1: DevKit.Controls.Section;
		}
		interface tab_TimeEntry_Sections {
			TimeEntry: DevKit.Controls.Section;
		}
		interface tab__4CC8A00D_6D79_4310_A61A_6B5A0597CAF4 extends DevKit.Controls.ITab {
			Section: tab__4CC8A00D_6D79_4310_A61A_6B5A0597CAF4_Sections;
		}
		interface tab_RemoteAssist extends DevKit.Controls.ITab {
			Section: tab_RemoteAssist_Sections;
		}
		interface tab_tab_10 extends DevKit.Controls.ITab {
			Section: tab_tab_10_Sections;
		}
		interface tab_tab_11 extends DevKit.Controls.ITab {
			Section: tab_tab_11_Sections;
		}
		interface tab_tab_12 extends DevKit.Controls.ITab {
			Section: tab_tab_12_Sections;
		}
		interface tab_tab_13 extends DevKit.Controls.ITab {
			Section: tab_tab_13_Sections;
		}
		interface tab_tab_14 extends DevKit.Controls.ITab {
			Section: tab_tab_14_Sections;
		}
		interface tab_tab_15 extends DevKit.Controls.ITab {
			Section: tab_tab_15_Sections;
		}
		interface tab_tab_4 extends DevKit.Controls.ITab {
			Section: tab_tab_4_Sections;
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
		interface tab_tab_9 extends DevKit.Controls.ITab {
			Section: tab_tab_9_Sections;
		}
		interface tab_TimeEntry extends DevKit.Controls.ITab {
			Section: tab_TimeEntry_Sections;
		}
		interface Tabs {
			_4CC8A00D_6D79_4310_A61A_6B5A0597CAF4: tab__4CC8A00D_6D79_4310_A61A_6B5A0597CAF4;
			RemoteAssist: tab_RemoteAssist;
			tab_10: tab_tab_10;
			tab_11: tab_tab_11;
			tab_12: tab_tab_12;
			tab_13: tab_tab_13;
			tab_14: tab_tab_14;
			tab_15: tab_tab_15;
			tab_4: tab_tab_4;
			tab_6: tab_tab_6;
			tab_7: tab_tab_7;
			tab_8: tab_tab_8;
			tab_9: tab_tab_9;
			TimeEntry: tab_TimeEntry;
		}
		interface Body {
			Tab: Tabs;
			/** For internal use only. */
			msdyn_AdvancedSettings: DevKit.Controls.String;
			msdyn_AgreementPrefix: DevKit.Controls.String;
			/** This field defines the time of day when Work Orders and Invoices are generated by the Agreement Booking Setups and Agreement Invoice Setups where the timing was not defined on the related Agreement. */
			msdyn_AgreementRecordGeneration: DevKit.Controls.DateTime;
			/** This field defines the time of day when Work Orders and Invoices are generated by the Agreement Booking Setups and Agreement Invoice Setups where the timing was not defined on the related Agreement. */
			msdyn_AgreementRecordGeneration1: DevKit.Controls.DateTime;
			msdyn_AgreementStartingNumber: DevKit.Controls.Integer;
			msdyn_AnalyticsIngestDataInXDays: DevKit.Controls.Integer;
			/** If enabled then Allocated will be automatically set when entering a Work order Product with a Line Status of Estimate. */
			msdyn_AutoAllocateEstimatedProducts: DevKit.Controls.Boolean;
			msdyn_AutoGenerateWOforAgreementBookings: DevKit.Controls.Boolean;
			/** If set then the system will automatically geo code addresses when the address has been updated and the record is saved */
			msdyn_AutoGeoCodeAddresses: DevKit.Controls.Boolean;
			/** For Internal Use. If Yes the org is opted in for use of latest autonumbering implementation. If No the org is not opted in. */
			msdyn_AutoNumberingOptIn: DevKit.Controls.Boolean;
			/** Default Pay Type to be used for Break hours */
			msdyn_BreakPayType: DevKit.Controls.Lookup;
			/** Default Pay Type to be used for business closure work hours */
			msdyn_BusinessClosurePayType: DevKit.Controls.Lookup;
			/** When disabled, all cost calculation logic on work orders, work order products, and work order services will be disabled and relevant cost fields will be hidden. */
			msdyn_CalculateCost: DevKit.Controls.Boolean;
			/** When disabled, all price calculation logic on work orders, work order products, and work order services will be disabled and relevant pricing fields will be hidden. */
			msdyn_CalculatePrice: DevKit.Controls.Boolean;
			/** On disabling, all tax related fields will be removed and no tax calculations will be performed. */
			msdyn_CalculateTax: DevKit.Controls.Boolean;
			/** Pre/Post Booking Flexibility Date Field Population. */
			msdyn_datepopulationtype: DevKit.Controls.Boolean;
			/** Default Crew Strategy */
			msdyn_DefaultCrewStrategy: DevKit.Controls.OptionSet;
			/** Shows the warehouse associated with the field service setting. */
			msdyn_DefaultWarehouse: DevKit.Controls.Lookup;
			/** Select whether the default work order completed status is either "Completed" or "Posted." */
			msdyn_DefaultWorkOrderCompletedStatus: DevKit.Controls.OptionSet;
			/** This field turns off validation on customer asset for service account */
			msdyn_disablecustomerassetvalidation: DevKit.Controls.Boolean;
			/** Specifies whether users can make booking status changes in the Remote Assist application. */
			msdyn_DisableRemoteAssistBookingStatusChanges: DevKit.Controls.Boolean;
			/** If enabled then address suggestions will be displayed when editing the address on the account, contact, user, or work order form. */
			msdyn_EnableAddressSuggestions: DevKit.Controls.Boolean;
			/** Enable Incident Type Suggestion. When enabled, the system will generate suggestions to improve Incident Types based on completed Work Orders. */
			msdyn_EnableIncidentTypeRecommendation: DevKit.Controls.Boolean;
			msdyn_EnableLegacyScheduleAssistant: DevKit.Controls.Boolean;
			/** When enabled, specific Work Order subgrid records open in a pop-up within the context of the parent (WO Service Task, WO Product, WO Service, WO Incident, Booking, and Time Entry). */
			msdyn_EnableMainFormDialogForSubgrids: DevKit.Controls.Boolean;
			/** Enable Suggested Duration for Incident Type. System will calculate Suggested Duration daily or on demand based on historical bookings */
			msdyn_EnableSuggestedDuration: DevKit.Controls.Boolean;
			/** When this option is enabled, all asynchronous Field Service background processes will be processed through Flow or asynchronous plugins instead of the historic Field Service workflows. See documentation for more details. */
			msdyn_EnhancedBackgroundProcessing: DevKit.Controls.Boolean;
			msdyn_EntityNumberLength: DevKit.Controls.Integer;
			/** On disabling, actuals will not be generated. */
			msdyn_GenerateActuals: DevKit.Controls.Boolean;
			msdyn_GenerateAgreementInvoicesXDaysInAdvance: DevKit.Controls.Integer;
			/** Specify default how many days in advance of the Agreement Booking Date the system should automatically generate a Work Order */
			msdyn_GenerateAgreementWOXDaysInAdvance: DevKit.Controls.Integer;
			msdyn_GenerateBookingDatesXMonthsInAdvance: DevKit.Controls.Integer;
			msdyn_GenerateInvoiceDatesXMonthsInAdvance: DevKit.Controls.Integer;
			/** Choose the range of date to use for suggested duration calculation */
			msdyn_HistoricalDataFilter: DevKit.Controls.OptionSet;
			msdyn_InspectionAnalyticsEnabled: DevKit.Controls.Boolean;
			msdyn_InspectionAnalyticsFrequency: DevKit.Controls.OptionSet;
			msdyn_InspectionAnalyticsRecommendedTime: DevKit.Controls.DateTime;
			/** For Field Service internal use only. */
			msdyn_InternalFlags: DevKit.Controls.String;
			/** For Field Service internal use only. */
			msdyn_InternalFlags1: DevKit.Controls.String;
			/** For Field Service internal use only. */
			msdyn_InternalFlags2: DevKit.Controls.String;
			/** For Field Service internal use only. */
			msdyn_InternalFlags3: DevKit.Controls.String;
			/** For Field Service internal use only. */
			msdyn_InternalFlags4: DevKit.Controls.String;
			/** For Field Service internal use only. */
			msdyn_InternalFlags5: DevKit.Controls.String;
			/** For Field Service internal use only. */
			msdyn_InternalFlags6: DevKit.Controls.String;
			/** For Field Service internal use only. */
			msdyn_InternalFlags7: DevKit.Controls.String;
			/** For Field Service internal use only. */
			msdyn_InternalFlags8: DevKit.Controls.String;
			/** For Field Service internal use only. */
			msdyn_InternalFlags9: DevKit.Controls.String;
			/** For Field Service internal use only. */
			msdyn_InternalFlags10: DevKit.Controls.String;
			/** For Field Service internal use only. */
			msdyn_InternalFlags11: DevKit.Controls.String;
			/** For Field Service internal use only. */
			msdyn_InternalFlags12: DevKit.Controls.String;
			/** For Field Service internal use only. */
			msdyn_InternalFlags13: DevKit.Controls.String;
			/** Shows the prefix to be added to the inventory adjustment numbers. */
			msdyn_InventoryAdjustmentPrefix: DevKit.Controls.String;
			/** Shows the number to be used as the starting number for inventory adjustments. */
			msdyn_InventoryAdjustmentStartingNumber: DevKit.Controls.Integer;
			/** Shows the prefix to be added to the inventory transfer numbers. */
			msdyn_InventoryTransferPrefix: DevKit.Controls.String;
			/** Shows the number to be used as the starting number for inventory transfers. */
			msdyn_InventoryTransferStartingNumber: DevKit.Controls.Integer;
			/** Shows when the last run of incident type suggestion happens. */
			msdyn_LastRunOfIncidentTypeRecommendation: DevKit.Controls.DateTime;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Default Pay Type to be used for overtime work hours */
			msdyn_OvertimePayType: DevKit.Controls.Lookup;
			msdyn_ProductCostOrder: DevKit.Controls.OptionSet;
			/** Enable if a Purchase Order requires approval in order for the status to be changed to Submitted */
			msdyn_PurchaseOrderApprovalRequired: DevKit.Controls.Boolean;
			/** Shows the prefix to be added to the purchase order numbers. */
			msdyn_PurchaseOrderPrefix: DevKit.Controls.String;
			/** Shows the number to be used as starting number for the automatically generated purchase order number. */
			msdyn_PurchaseOrderStartingNumber: DevKit.Controls.Integer;
			/** Return Top X suggstion result from last run. */
			msdyn_ReturnTopXRecommendations: DevKit.Controls.Integer;
			msdyn_RMAPrefix: DevKit.Controls.String;
			/** Shows the number to be used as the starting number for the automatically generation RMA number. */
			msdyn_RMAStartingNumber: DevKit.Controls.Integer;
			msdyn_RTVPrefix: DevKit.Controls.String;
			/** Shows the number to be used as the starting number for the automatically generated RTV number. */
			msdyn_RTVStartingNumber: DevKit.Controls.Integer;
			/** Specify the run frequency of incident type suggestion. */
			msdyn_RunFrequencyOfIncidentTypeRecommendation: DevKit.Controls.OptionSet;
			/** Enable/disable out of the box logic to show or hide commands on the Work Order form and list view. If yes, only the most relevant buttons will be displayed. */
			msdyn_ShowSimplifiedWorkOrderCommands: DevKit.Controls.Boolean;
			/** On enabling provides a dialog on change on customer asset/service account of workorder to make the account of customer asset same as service account of work order */
			msdyn_suggestreparentingcustomerassets: DevKit.Controls.Boolean;
			/** The Field Service solution automatically generates Actuals records. Actuals with a Transaction Type of "Cost" and a Transaction Class of "Time" can be generated when the Work Order is set to Closed-Posted from the related Booking's Booking Journals (Booking Journals on Post of Work Order) or when a Work Order related Time Entry is marked as Approved (Work Order Time Entry Approval). */
			msdyn_TimeCostActualsSource: DevKit.Controls.OptionSet;
			/** Field Service organizations that do not intend to use Time Entry or that wish to generate them via a custom or manual process should set to 'Manual.' Otherwise, setting to "Auto-Generate from Booking Timestamps" will ensure that Time Entries are automatically created when a Booking is complete for each span of time between Booking Timestamps. */
			msdyn_TimeEntryGenerationStrategy: DevKit.Controls.OptionSet;
			/** The Timestamp Frequency setting controls the generation of Booking Timestamps as Bookings progress through Booking Statuses. Timestamps can either generate every time a Booking Status is changed (Per Booking Status) or when changing the Booking Status results in a new underlying Field Service Status (Per Field Service Status). */
			msdyn_TimestampFrequency: DevKit.Controls.OptionSet;
			/** Product to be used by the system for Travel Charges on Work Orders */
			msdyn_TravelChargeItemId: DevKit.Controls.Lookup;
			/** Default Pay Type to be used for Travel hours */
			msdyn_TravelPayType: DevKit.Controls.Lookup;
			/** Specify how the system should react when trying to use products that are out of stock. */
			msdyn_UseofProductsOutofStock: DevKit.Controls.OptionSet;
			/** Specify whether the system should automatically generate an invoice for work orders. */
			msdyn_WorkOrderInvoiceCreation: DevKit.Controls.OptionSet;
			msdyn_WorkOrderPrefix: DevKit.Controls.String;
			msdyn_WorkOrderStartingNumber: DevKit.Controls.Integer;
			/** Default Pay Type to be used for regular work hours */
			msdyn_WorkPayType: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_AgreementRecordGeneration_TimeField: DevKit.Controls.WebResource;
			WebResource_NotificationDialogTemplate_1: DevKit.Controls.WebResource;
			WebResource_PlainTextCopilotSectionDescription: DevKit.Controls.WebResource;
			WebResource_PlainTextCopilotWorkOrdersOutlookDescription: DevKit.Controls.WebResource;
			WebResource_PlainTextEnhancedCharacteristicDescription: DevKit.Controls.WebResource;
			WebResource_PlainTextOutlookCopilotToggleDescription: DevKit.Controls.WebResource;
			WebResource_PlainTextPlannerSyncDescription: DevKit.Controls.WebResource;
			WebResource_PlainTextResourcePreview: DevKit.Controls.WebResource;
			WebResource_PlainTextWorkOrderCopilotToggleDescription: DevKit.Controls.WebResource;
		}
		interface Navigation {
			msdyn_fieldservicesetting_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_adx_portalcomments: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_Appointments: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_Emails: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_msfp_alerts: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_PhoneCalls: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_ServiceAppointments: DevKit.Controls.NavigationItem,
			msdyn_fieldservicesetting_Tasks: DevKit.Controls.NavigationItem
		}
		interface Grid {
			fieldserviceslaconfigurationgrid: DevKit.Controls.Grid;
			IncidentTypeSuggestionResultGrid: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_fieldservicesetting_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_fieldservicesetting_Information */
		Body: DevKit.Formmsdyn_fieldservicesetting_Information.Body;
		/** The Navigation of form msdyn_fieldservicesetting_Information */
		Navigation: DevKit.Formmsdyn_fieldservicesetting_Information.Navigation;
		/** The Grid of form msdyn_fieldservicesetting_Information */
		Grid: DevKit.Formmsdyn_fieldservicesetting_Information.Grid;
		/** The SidePanes of form msdyn_fieldservicesetting_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_fieldservicesettingApi {
		/**
		* DynamicsCrm.DevKit msdyn_fieldservicesettingApi
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
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** For internal use only. */
		msdyn_AdvancedSettings: string;
		msdyn_AgreementPrefix: string;
		/** This field defines the time of day when Work Orders and Invoices are generated by the Agreement Booking Setups and Agreement Invoice Setups where the timing was not defined on the related Agreement. */
		msdyn_AgreementRecordGeneration_UtcDateAndTime: Date;
		msdyn_AgreementStartingNumber: number;
		msdyn_AnalyticsIngestDataInXDays: number;
		msdyn_AnalyticsPostponeIngestionUntil_UtcDateAndTime: Date;
		msdyn_AnalyticsSpreadOutPostponeIngestionUntil_UtcDateAndTime: Date;
		/** If enabled then Allocated will be automatically set when entering a Work order Product with a Line Status of Estimate. */
		msdyn_AutoAllocateEstimatedProducts: boolean;
		msdyn_AutoGenerateWOforAgreementBookings: boolean;
		/** If set then the system will automatically geo code addresses when the address has been updated and the record is saved */
		msdyn_AutoGeoCodeAddresses: boolean;
		/** For Internal Use. If Yes the org is opted in for use of latest autonumbering implementation. If No the org is not opted in. */
		msdyn_AutoNumberingOptIn: boolean;
		msdyn_BookingAlertTemplate: string;
		/** Default Pay Type to be used for Break hours */
		msdyn_BreakPayType: string;
		/** Default Pay Type to be used for business closure work hours */
		msdyn_BusinessClosurePayType: string;
		/** When disabled, all cost calculation logic on work orders, work order products, and work order services will be disabled and relevant cost fields will be hidden. */
		msdyn_CalculateCost: boolean;
		/** When disabled, all price calculation logic on work orders, work order products, and work order services will be disabled and relevant pricing fields will be hidden. */
		msdyn_CalculatePrice: boolean;
		/** On disabling, all tax related fields will be removed and no tax calculations will be performed. */
		msdyn_CalculateTax: boolean;
		/** Select whether, when moving open slots to the next day, to leave the old slots and change their status to "Cancel." */
		msdyn_CancelCurrentSlotsWhenMoving: boolean;
		/** If enabled system will use custom entity for its source of Geo Locations for resources to be displayed on map view */
		msdyn_CustomGPSData: boolean;
		/** Shows the logical name of the latitude field to be used for geolocations. */
		msdyn_CustomGPSLatitudefield: string;
		/** Shows the logical name of custom entity to be used for geolocations. */
		msdyn_CustomGPSLocationentity: string;
		/** Shows the logical name of the longitude field to be used for geolocations. */
		msdyn_CustomGPSLongitudefield: string;
		/** Shows the logical name of the resource field to be used for geolocations. */
		msdyn_CustomGPSResourcefield: string;
		/** Shows the logical name of the timestamp field to be used for geolocations. */
		msdyn_CustomGPSTimestampfield: string;
		/** For Internal Use */
		msdyn_DatabaseVersion: number;
		/** Pre/Post Booking Flexibility Date Field Population. */
		msdyn_datepopulationtype: boolean;
		/** Select whether the system should deactivate the resource booking when the system status is changed to "Canceled." */
		msdyn_DeactivateBookingWhenCanceled: boolean;
		/** Select whether the system should deactivate the resource booking when the system status is changed to "Completed." */
		msdyn_DeactivateBookingWhenCompleted: boolean;
		/** Select whether the system should deactivate the work order when the system status is changed to "Closed - Canceled." */
		msdyn_DeactivateWorkOrderWhenCanceled: boolean;
		/** Select whether the system should deactivate the work order when the system status is changed to "Closed - Posted." */
		msdyn_DeactivateWorkOrderWhenPosted: boolean;
		msdyn_DefaultBookingDuration: number;
		msdyn_DefaultCanceledBookingStatus: string;
		/** Default Crew Strategy */
		msdyn_DefaultCrewStrategy: OptionSet.msdyn_fieldservicesetting.msdyn_DefaultCrewStrategy;
		msdyn_DefaultRadiusUnit: boolean;
		msdyn_DefaultRadiusValue: number;
		msdyn_DefaultScheduledBookingStatus: string;
		/** Shows the warehouse associated with the field service setting. */
		msdyn_DefaultWarehouse: string;
		/** Select whether the default work order completed status is either "Completed" or "Posted." */
		msdyn_DefaultWorkOrderCompletedStatus: OptionSet.msdyn_fieldservicesetting.msdyn_DefaultWorkOrderCompletedStatus;
		/** This field turns off validation on customer asset for service account */
		msdyn_disablecustomerassetvalidation: boolean;
		/** Specifies whether users can make booking status changes in the Remote Assist application. */
		msdyn_DisableRemoteAssistBookingStatusChanges: boolean;
		/** If enabled then address suggestions will be displayed when editing the address on the account, contact, user, or work order form. */
		msdyn_EnableAddressSuggestions: boolean;
		/** Enable Incident Type Suggestion. When enabled, the system will generate suggestions to improve Incident Types based on completed Work Orders. */
		msdyn_EnableIncidentTypeRecommendation: boolean;
		msdyn_EnableLegacyScheduleAssistant: boolean;
		/** When enabled, specific Work Order subgrid records open in a pop-up within the context of the parent (WO Service Task, WO Product, WO Service, WO Incident, Booking, and Time Entry). */
		msdyn_EnableMainFormDialogForSubgrids: boolean;
		/** Identifies whether not-to-exceed capability is enabled in Field Service application. */
		msdyn_EnableNTE: boolean;
		/** Enable Suggested Duration for Incident Type. System will calculate Suggested Duration daily or on demand based on historical bookings */
		msdyn_EnableSuggestedDuration: boolean;
		/** When this option is enabled, all asynchronous Field Service background processes will be processed through Flow or asynchronous plugins instead of the historic Field Service workflows. See documentation for more details. */
		msdyn_EnhancedBackgroundProcessing: boolean;
		msdyn_EntityNumberLength: number;
		/** Unique identifier for entity instances */
		msdyn_fieldservicesettingId: string;
		/** On disabling, actuals will not be generated. */
		msdyn_GenerateActuals: boolean;
		msdyn_GenerateAgreementInvoicesXDaysInAdvance: number;
		/** Specify default how many days in advance of the Agreement Booking Date the system should automatically generate a Work Order */
		msdyn_GenerateAgreementWOXDaysInAdvance: number;
		msdyn_GenerateBookingDatesXMonthsInAdvance: number;
		msdyn_GenerateInvoiceDatesXMonthsInAdvance: number;
		msdyn_GPSLocationExpiresAfterXMinutes: number;
		/** Choose the range of date to use for suggested duration calculation */
		msdyn_HistoricalDataFilter: OptionSet.msdyn_fieldservicesetting.msdyn_HistoricalDataFilter;
		msdyn_InspectionAnalyticsEnabled: boolean;
		msdyn_InspectionAnalyticsEnabledOn_UtcDateAndTime: Date;
		msdyn_InspectionAnalyticsFrequency: OptionSet.msdyn_fieldservicesetting.msdyn_InspectionAnalyticsFrequency;
		msdyn_InspectionAnalyticsRecommendedTime_UtcDateAndTime: Date;
		/** For Field Service internal use only. */
		msdyn_InternalFlags: string;
		/** Shows the prefix to be added to the inventory adjustment numbers. */
		msdyn_InventoryAdjustmentPrefix: string;
		/** Shows the number to be used as the starting number for inventory adjustments. */
		msdyn_InventoryAdjustmentStartingNumber: number;
		/** Shows the prefix to be added to the inventory transfer numbers. */
		msdyn_InventoryTransferPrefix: string;
		/** Shows the number to be used as the starting number for inventory transfers. */
		msdyn_InventoryTransferStartingNumber: number;
		/** Shows when the last run of incident type suggestion happens. */
		msdyn_LastRunOfIncidentTypeRecommendation_UtcDateAndTime: Date;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		msdyn_NotificationTimeout: number;
		/** Default Pay Type to be used for overtime work hours */
		msdyn_OvertimePayType: string;
		/** Shows the date when cleanup of unique numbers will occur. */
		msdyn_PostponeNumberCleanupUntil_TimezoneDateAndTime: Date;
		msdyn_ProductCostOrder: OptionSet.msdyn_fieldservicesetting.msdyn_ProductCostOrder;
		/** Enable if a Purchase Order requires approval in order for the status to be changed to Submitted */
		msdyn_PurchaseOrderApprovalRequired: boolean;
		/** Shows the prefix to be added to the purchase order numbers. */
		msdyn_PurchaseOrderPrefix: string;
		/** Shows the number to be used as starting number for the automatically generated purchase order number. */
		msdyn_PurchaseOrderStartingNumber: number;
		msdyn_ResourcesSynchronizationTimeout: number;
		/** Return Top X suggstion result from last run. */
		msdyn_ReturnTopXRecommendations: number;
		msdyn_RMAPrefix: string;
		/** Shows the number to be used as the starting number for the automatically generation RMA number. */
		msdyn_RMAStartingNumber: number;
		msdyn_RTVPrefix: string;
		/** Shows the number to be used as the starting number for the automatically generated RTV number. */
		msdyn_RTVStartingNumber: number;
		/** Specify the run frequency of incident type suggestion. */
		msdyn_RunFrequencyOfIncidentTypeRecommendation: OptionSet.msdyn_fieldservicesetting.msdyn_RunFrequencyOfIncidentTypeRecommendation;
		/** Select whether the schedule assistant should automatically filter the results based on the territory set on the work order. */
		msdyn_SAAutoFilterServiceTerritory: boolean;
		msdyn_SchedulerBusinessUnitDetailsView: string;
		msdyn_SchedulerBusinessUnitTooltipView: string;
		msdyn_SchedulerCoreDetailsView: string;
		msdyn_SchedulerCoreSlotTextTemplate: string;
		msdyn_SchedulerCoreTooltipView: string;
		msdyn_SchedulerFieldServiceDetailsView: string;
		msdyn_SchedulerFieldServiceSlotTextTemplate: string;
		msdyn_SchedulerFieldServiceTooltipView: string;
		msdyn_SchedulerResourceDetailsView: string;
		msdyn_SchedulerResourceTooltipView: string;
		msdyn_SchedulerUnscheduledView: string;
		/** Api key for map */
		msdyn_sdkapimapkey: string;
		/** Enable/disable out of the box logic to show or hide commands on the Work Order form and list view. If yes, only the most relevant buttons will be displayed. */
		msdyn_ShowSimplifiedWorkOrderCommands: boolean;
		/** On enabling provides a dialog on change on customer asset/service account of workorder to make the account of customer asset same as service account of work order */
		msdyn_suggestreparentingcustomerassets: boolean;
		/** The Field Service solution automatically generates Actuals records. Actuals with a Transaction Type of "Cost" and a Transaction Class of "Time" can be generated when the Work Order is set to Closed-Posted from the related Booking's Booking Journals (Booking Journals on Post of Work Order) or when a Work Order related Time Entry is marked as Approved (Work Order Time Entry Approval). */
		msdyn_TimeCostActualsSource: OptionSet.msdyn_fieldservicesetting.msdyn_TimeCostActualsSource;
		/** Field Service organizations that do not intend to use Time Entry or that wish to generate them via a custom or manual process should set to 'Manual.' Otherwise, setting to "Auto-Generate from Booking Timestamps" will ensure that Time Entries are automatically created when a Booking is complete for each span of time between Booking Timestamps. */
		msdyn_TimeEntryGenerationStrategy: OptionSet.msdyn_fieldservicesetting.msdyn_TimeEntryGenerationStrategy;
		/** The Timestamp Frequency setting controls the generation of Booking Timestamps as Bookings progress through Booking Statuses. Timestamps can either generate every time a Booking Status is changed (Per Booking Status) or when changing the Booking Status results in a new underlying Field Service Status (Per Field Service Status). */
		msdyn_TimestampFrequency: OptionSet.msdyn_fieldservicesetting.msdyn_TimestampFrequency;
		/** Product to be used by the system for Travel Charges on Work Orders */
		msdyn_TravelChargeItemId: string;
		/** Default Pay Type to be used for Travel hours */
		msdyn_TravelPayType: string;
		msdyn_TravelTimeRescheduling: boolean;
		/** Location for schedules where geo code info has not been defined */
		msdyn_UndefinedBookingLocation: OptionSet.msdyn_fieldservicesetting.msdyn_UndefinedBookingLocation;
		msdyn_UnscheduledWOTooltipsViewId: string;
		/** Specify how the system should react when trying to use products that are out of stock. */
		msdyn_UseofProductsOutofStock: OptionSet.msdyn_fieldservicesetting.msdyn_UseofProductsOutofStock;
		/** Specify whether the system should automatically generate an invoice for work orders. */
		msdyn_WorkOrderInvoiceCreation: OptionSet.msdyn_fieldservicesetting.msdyn_WorkOrderInvoiceCreation;
		msdyn_WorkOrderPrefix: string;
		msdyn_WorkOrderStartingNumber: number;
		/** Default Pay Type to be used for regular work hours */
		msdyn_WorkPayType: string;
		/** Date and time that the record was migrated. */
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
		/** Status of the Field Service Setting */
		statecode: OptionSet.msdyn_fieldservicesetting.statecode;
		/** Reason for the status of the Field Service Setting */
		statuscode: OptionSet.msdyn_fieldservicesetting.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** For internal use only. */
			readonly msdyn_AdvancedSettings: string;
			readonly msdyn_AgreementPrefix: string;
			/** This field defines the time of day when Work Orders and Invoices are generated by the Agreement Booking Setups and Agreement Invoice Setups where the timing was not defined on the related Agreement. */
			readonly msdyn_AgreementRecordGeneration_UtcDateAndTime: string;
			readonly msdyn_AgreementStartingNumber: string;
			readonly msdyn_AnalyticsIngestDataInXDays: string;
			readonly msdyn_AnalyticsPostponeIngestionUntil_UtcDateAndTime: string;
			readonly msdyn_AnalyticsSpreadOutPostponeIngestionUntil_UtcDateAndTime: string;
			/** If enabled then Allocated will be automatically set when entering a Work order Product with a Line Status of Estimate. */
			readonly msdyn_AutoAllocateEstimatedProducts: string;
			readonly msdyn_AutoGenerateWOforAgreementBookings: string;
			/** If set then the system will automatically geo code addresses when the address has been updated and the record is saved */
			readonly msdyn_AutoGeoCodeAddresses: string;
			/** For Internal Use. If Yes the org is opted in for use of latest autonumbering implementation. If No the org is not opted in. */
			readonly msdyn_AutoNumberingOptIn: string;
			readonly msdyn_BookingAlertTemplate: string;
			/** Default Pay Type to be used for Break hours */
			readonly msdyn_BreakPayType: string;
			/** Default Pay Type to be used for business closure work hours */
			readonly msdyn_BusinessClosurePayType: string;
			/** When disabled, all cost calculation logic on work orders, work order products, and work order services will be disabled and relevant cost fields will be hidden. */
			readonly msdyn_CalculateCost: string;
			/** When disabled, all price calculation logic on work orders, work order products, and work order services will be disabled and relevant pricing fields will be hidden. */
			readonly msdyn_CalculatePrice: string;
			/** On disabling, all tax related fields will be removed and no tax calculations will be performed. */
			readonly msdyn_CalculateTax: string;
			/** Select whether, when moving open slots to the next day, to leave the old slots and change their status to "Cancel." */
			readonly msdyn_CancelCurrentSlotsWhenMoving: string;
			/** If enabled system will use custom entity for its source of Geo Locations for resources to be displayed on map view */
			readonly msdyn_CustomGPSData: string;
			/** Shows the logical name of the latitude field to be used for geolocations. */
			readonly msdyn_CustomGPSLatitudefield: string;
			/** Shows the logical name of custom entity to be used for geolocations. */
			readonly msdyn_CustomGPSLocationentity: string;
			/** Shows the logical name of the longitude field to be used for geolocations. */
			readonly msdyn_CustomGPSLongitudefield: string;
			/** Shows the logical name of the resource field to be used for geolocations. */
			readonly msdyn_CustomGPSResourcefield: string;
			/** Shows the logical name of the timestamp field to be used for geolocations. */
			readonly msdyn_CustomGPSTimestampfield: string;
			/** For Internal Use */
			readonly msdyn_DatabaseVersion: string;
			/** Pre/Post Booking Flexibility Date Field Population. */
			readonly msdyn_datepopulationtype: string;
			/** Select whether the system should deactivate the resource booking when the system status is changed to "Canceled." */
			readonly msdyn_DeactivateBookingWhenCanceled: string;
			/** Select whether the system should deactivate the resource booking when the system status is changed to "Completed." */
			readonly msdyn_DeactivateBookingWhenCompleted: string;
			/** Select whether the system should deactivate the work order when the system status is changed to "Closed - Canceled." */
			readonly msdyn_DeactivateWorkOrderWhenCanceled: string;
			/** Select whether the system should deactivate the work order when the system status is changed to "Closed - Posted." */
			readonly msdyn_DeactivateWorkOrderWhenPosted: string;
			readonly msdyn_DefaultBookingDuration: string;
			readonly msdyn_DefaultCanceledBookingStatus: string;
			/** Default Crew Strategy */
			readonly msdyn_DefaultCrewStrategy: string;
			readonly msdyn_DefaultRadiusUnit: string;
			readonly msdyn_DefaultRadiusValue: string;
			readonly msdyn_DefaultScheduledBookingStatus: string;
			/** Shows the warehouse associated with the field service setting. */
			readonly msdyn_DefaultWarehouse: string;
			/** Select whether the default work order completed status is either "Completed" or "Posted." */
			readonly msdyn_DefaultWorkOrderCompletedStatus: string;
			/** This field turns off validation on customer asset for service account */
			readonly msdyn_disablecustomerassetvalidation: string;
			/** Specifies whether users can make booking status changes in the Remote Assist application. */
			readonly msdyn_DisableRemoteAssistBookingStatusChanges: string;
			/** If enabled then address suggestions will be displayed when editing the address on the account, contact, user, or work order form. */
			readonly msdyn_EnableAddressSuggestions: string;
			/** Enable Incident Type Suggestion. When enabled, the system will generate suggestions to improve Incident Types based on completed Work Orders. */
			readonly msdyn_EnableIncidentTypeRecommendation: string;
			readonly msdyn_EnableLegacyScheduleAssistant: string;
			/** When enabled, specific Work Order subgrid records open in a pop-up within the context of the parent (WO Service Task, WO Product, WO Service, WO Incident, Booking, and Time Entry). */
			readonly msdyn_EnableMainFormDialogForSubgrids: string;
			/** Identifies whether not-to-exceed capability is enabled in Field Service application. */
			readonly msdyn_EnableNTE: string;
			/** Enable Suggested Duration for Incident Type. System will calculate Suggested Duration daily or on demand based on historical bookings */
			readonly msdyn_EnableSuggestedDuration: string;
			/** When this option is enabled, all asynchronous Field Service background processes will be processed through Flow or asynchronous plugins instead of the historic Field Service workflows. See documentation for more details. */
			readonly msdyn_EnhancedBackgroundProcessing: string;
			readonly msdyn_EntityNumberLength: string;
			/** Unique identifier for entity instances */
			readonly msdyn_fieldservicesettingId: string;
			/** On disabling, actuals will not be generated. */
			readonly msdyn_GenerateActuals: string;
			readonly msdyn_GenerateAgreementInvoicesXDaysInAdvance: string;
			/** Specify default how many days in advance of the Agreement Booking Date the system should automatically generate a Work Order */
			readonly msdyn_GenerateAgreementWOXDaysInAdvance: string;
			readonly msdyn_GenerateBookingDatesXMonthsInAdvance: string;
			readonly msdyn_GenerateInvoiceDatesXMonthsInAdvance: string;
			readonly msdyn_GPSLocationExpiresAfterXMinutes: string;
			/** Choose the range of date to use for suggested duration calculation */
			readonly msdyn_HistoricalDataFilter: string;
			readonly msdyn_InspectionAnalyticsEnabled: string;
			readonly msdyn_InspectionAnalyticsEnabledOn_UtcDateAndTime: string;
			readonly msdyn_InspectionAnalyticsFrequency: string;
			readonly msdyn_InspectionAnalyticsRecommendedTime_UtcDateAndTime: string;
			/** For Field Service internal use only. */
			readonly msdyn_InternalFlags: string;
			/** Shows the prefix to be added to the inventory adjustment numbers. */
			readonly msdyn_InventoryAdjustmentPrefix: string;
			/** Shows the number to be used as the starting number for inventory adjustments. */
			readonly msdyn_InventoryAdjustmentStartingNumber: string;
			/** Shows the prefix to be added to the inventory transfer numbers. */
			readonly msdyn_InventoryTransferPrefix: string;
			/** Shows the number to be used as the starting number for inventory transfers. */
			readonly msdyn_InventoryTransferStartingNumber: string;
			/** Shows when the last run of incident type suggestion happens. */
			readonly msdyn_LastRunOfIncidentTypeRecommendation_UtcDateAndTime: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_NotificationTimeout: string;
			/** Default Pay Type to be used for overtime work hours */
			readonly msdyn_OvertimePayType: string;
			/** Shows the date when cleanup of unique numbers will occur. */
			readonly msdyn_PostponeNumberCleanupUntil_TimezoneDateAndTime: string;
			readonly msdyn_ProductCostOrder: string;
			/** Enable if a Purchase Order requires approval in order for the status to be changed to Submitted */
			readonly msdyn_PurchaseOrderApprovalRequired: string;
			/** Shows the prefix to be added to the purchase order numbers. */
			readonly msdyn_PurchaseOrderPrefix: string;
			/** Shows the number to be used as starting number for the automatically generated purchase order number. */
			readonly msdyn_PurchaseOrderStartingNumber: string;
			readonly msdyn_ResourcesSynchronizationTimeout: string;
			/** Return Top X suggstion result from last run. */
			readonly msdyn_ReturnTopXRecommendations: string;
			readonly msdyn_RMAPrefix: string;
			/** Shows the number to be used as the starting number for the automatically generation RMA number. */
			readonly msdyn_RMAStartingNumber: string;
			readonly msdyn_RTVPrefix: string;
			/** Shows the number to be used as the starting number for the automatically generated RTV number. */
			readonly msdyn_RTVStartingNumber: string;
			/** Specify the run frequency of incident type suggestion. */
			readonly msdyn_RunFrequencyOfIncidentTypeRecommendation: string;
			/** Select whether the schedule assistant should automatically filter the results based on the territory set on the work order. */
			readonly msdyn_SAAutoFilterServiceTerritory: string;
			readonly msdyn_SchedulerBusinessUnitDetailsView: string;
			readonly msdyn_SchedulerBusinessUnitTooltipView: string;
			readonly msdyn_SchedulerCoreDetailsView: string;
			readonly msdyn_SchedulerCoreSlotTextTemplate: string;
			readonly msdyn_SchedulerCoreTooltipView: string;
			readonly msdyn_SchedulerFieldServiceDetailsView: string;
			readonly msdyn_SchedulerFieldServiceSlotTextTemplate: string;
			readonly msdyn_SchedulerFieldServiceTooltipView: string;
			readonly msdyn_SchedulerResourceDetailsView: string;
			readonly msdyn_SchedulerResourceTooltipView: string;
			readonly msdyn_SchedulerUnscheduledView: string;
			/** Api key for map */
			readonly msdyn_sdkapimapkey: string;
			/** Enable/disable out of the box logic to show or hide commands on the Work Order form and list view. If yes, only the most relevant buttons will be displayed. */
			readonly msdyn_ShowSimplifiedWorkOrderCommands: string;
			/** On enabling provides a dialog on change on customer asset/service account of workorder to make the account of customer asset same as service account of work order */
			readonly msdyn_suggestreparentingcustomerassets: string;
			/** The Field Service solution automatically generates Actuals records. Actuals with a Transaction Type of "Cost" and a Transaction Class of "Time" can be generated when the Work Order is set to Closed-Posted from the related Booking's Booking Journals (Booking Journals on Post of Work Order) or when a Work Order related Time Entry is marked as Approved (Work Order Time Entry Approval). */
			readonly msdyn_TimeCostActualsSource: string;
			/** Field Service organizations that do not intend to use Time Entry or that wish to generate them via a custom or manual process should set to 'Manual.' Otherwise, setting to "Auto-Generate from Booking Timestamps" will ensure that Time Entries are automatically created when a Booking is complete for each span of time between Booking Timestamps. */
			readonly msdyn_TimeEntryGenerationStrategy: string;
			/** The Timestamp Frequency setting controls the generation of Booking Timestamps as Bookings progress through Booking Statuses. Timestamps can either generate every time a Booking Status is changed (Per Booking Status) or when changing the Booking Status results in a new underlying Field Service Status (Per Field Service Status). */
			readonly msdyn_TimestampFrequency: string;
			/** Product to be used by the system for Travel Charges on Work Orders */
			readonly msdyn_TravelChargeItemId: string;
			/** Default Pay Type to be used for Travel hours */
			readonly msdyn_TravelPayType: string;
			readonly msdyn_TravelTimeRescheduling: string;
			/** Location for schedules where geo code info has not been defined */
			readonly msdyn_UndefinedBookingLocation: string;
			readonly msdyn_UnscheduledWOTooltipsViewId: string;
			/** Specify how the system should react when trying to use products that are out of stock. */
			readonly msdyn_UseofProductsOutofStock: string;
			/** Specify whether the system should automatically generate an invoice for work orders. */
			readonly msdyn_WorkOrderInvoiceCreation: string;
			readonly msdyn_WorkOrderPrefix: string;
			readonly msdyn_WorkOrderStartingNumber: string;
			/** Default Pay Type to be used for regular work hours */
			readonly msdyn_WorkPayType: string;
			/** Date and time that the record was migrated. */
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
			/** Status of the Field Service Setting */
			readonly statecode: string;
			/** Reason for the status of the Field Service Setting */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_fieldservicesetting {
		enum msdyn_DefaultCrewStrategy {
			/** 192350000 */
			Cascade_and_Accept_Cascade_Completely_Not_Recommended,
			/** 192350001 */
			Crew_Leader_Management,
			/** 192350002 */
			Crew_Member_Self_Management
		}
		enum msdyn_DefaultWorkOrderCompletedStatus {
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
		enum msdyn_HistoricalDataFilter {
			/** 100000003 */
			All,
			/** 100000002 */
			Last_12_Months,
			/** 100000000 */
			Last_3_Months,
			/** 100000001 */
			Last_6_Months
		}
		enum msdyn_InspectionAnalyticsFrequency {
			/** 100000002 */
			Custom,
			/** 100000000 */
			Daily,
			/** 100000001 */
			Immediately
		}
		enum msdyn_ProductCostOrder {
			/** 690970001 */
			CurrentStandard,
			/** 690970000 */
			StandardCurrent
		}
		enum msdyn_RunFrequencyOfIncidentTypeRecommendation {
			/** 192350000 */
			Once_a_Week
		}
		enum msdyn_TimeCostActualsSource {
			/** 192354000 */
			Booking_Journals_on_Post_of_Work_Order,
			/** 192354001 */
			Work_Order_Time_Entry_Approval
		}
		enum msdyn_TimeEntryGenerationStrategy {
			/** 192355201 */
			Auto_Generate_from_Booking_Timestamps,
			/** 192355200 */
			Manual
		}
		enum msdyn_TimestampFrequency {
			/** 192350000 */
			Per_Booking_Status_Change,
			/** 192350001 */
			Per_Field_Service_Status_Change
		}
		enum msdyn_UndefinedBookingLocation {
			/** 690970001 */
			Ignore_Location,
			/** 690970000 */
			Previous_Known_Location
		}
		enum msdyn_UseofProductsOutofStock {
			/** 690970000 */
			Confirm,
			/** 690970001 */
			Restrict
		}
		enum msdyn_WorkOrderInvoiceCreation {
			/** 690970000 */
			Never,
			/** 690970001 */
			On_Work_Order_Posted
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