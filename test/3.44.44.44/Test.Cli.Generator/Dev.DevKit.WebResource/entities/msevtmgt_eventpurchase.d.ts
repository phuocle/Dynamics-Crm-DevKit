//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsevtmgt_eventpurchase_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity */
			msevtmgt_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msevtmgt_eventpurchase_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchase_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchase_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchase_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchase_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchase_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchase_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchase_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchase_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchase_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchase_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchase_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchase_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchase_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchase_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_eventpurchase_Tasks: DevKit.Controls.NavigationItem,
			msevtmgt_msevtmgt_eventpurchase_msevtmgt_eventpurc: DevKit.Controls.NavigationItem
		}
		interface Grid {
			EventPurchaseAttendees: DevKit.Controls.Grid;
		}
	}
	class Formmsevtmgt_eventpurchase_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_eventpurchase_Information */
		Body: DevKit.Formmsevtmgt_eventpurchase_Information.Body;
		/** The Navigation of form msevtmgt_eventpurchase_Information */
		Navigation: DevKit.Formmsevtmgt_eventpurchase_Information.Navigation;
		/** The Grid of form msevtmgt_eventpurchase_Information */
		Grid: DevKit.Formmsevtmgt_eventpurchase_Information.Grid;
		/** The SidePanes of form msevtmgt_eventpurchase_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsevtmgt_eventpurchase_Quick_Create_Form {
		interface tab_GeneralTab_Sections {
			GeneralTab_column_1_section_1: DevKit.Controls.Section;
			GeneralTab_column_2_section_1: DevKit.Controls.Section;
			GeneralTab_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_GeneralTab_Sections;
		}
		interface Tabs {
			GeneralTab: tab_GeneralTab;
		}
		interface Body {
			Tab: Tabs;
			/** The event purchases are made for */
			msevtmgt_EventId: DevKit.Controls.Lookup;
			/** The name of the custom entity */
			msevtmgt_name: DevKit.Controls.String;
		}
	}
	class Formmsevtmgt_eventpurchase_Quick_Create_Form extends DevKit.IForm {
		/**
		* Quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_eventpurchase_Quick_Create_Form */
		Body: DevKit.Formmsevtmgt_eventpurchase_Quick_Create_Form.Body;
	}
	class msevtmgt_eventpurchaseApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_eventpurchaseApi
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
		/** Unique identifier of the user who created the record */
		readonly CreatedBy: string;
		/** The date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record */
		readonly CreatedOnBehalfBy: string;
		/** The sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record */
		readonly ModifiedBy: string;
		/** The date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		msevtmgt_Area: OptionSet.msevtmgt_eventpurchase.msevtmgt_Area;
		/** The size of the company */
		msevtmgt_CompanySize: OptionSet.msevtmgt_eventpurchase.msevtmgt_CompanySize;
		/** The event purchases are made for */
		msevtmgt_EventId: string;
		/** Unique identifier for entity instances */
		msevtmgt_eventpurchaseId: string;
		/** The industry of the company of attendee */
		msevtmgt_Industry: OptionSet.msevtmgt_eventpurchase.msevtmgt_Industry;
		/** The name of the custom entity */
		msevtmgt_name: string;
		/** The payment for the purchased have been processed already */
		msevtmgt_Paid: boolean;
		/** The purchase was properly converted to Event Management entities */
		msevtmgt_Processed: boolean;
		/** The contact making the purchase */
		msevtmgt_PurchasingContactId: string;
		msevtmgt_YearsInIndustry: OptionSet.msevtmgt_eventpurchase.msevtmgt_YearsInIndustry;
		/** The date and time when the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record */
		readonly OwningUser: string;
		/** Status of the event purchase */
		statecode: OptionSet.msevtmgt_eventpurchase.statecode;
		/** Reason for the status of the event purchase */
		statuscode: OptionSet.msevtmgt_eventpurchase.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** The time zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record */
			readonly CreatedBy: string;
			/** The date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record */
			readonly CreatedOnBehalfBy: string;
			/** The sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record */
			readonly ModifiedBy: string;
			/** The date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			readonly msevtmgt_Area: string;
			/** The size of the company */
			readonly msevtmgt_CompanySize: string;
			/** The event purchases are made for */
			readonly msevtmgt_EventId: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_eventpurchaseId: string;
			/** The industry of the company of attendee */
			readonly msevtmgt_Industry: string;
			/** The name of the custom entity */
			readonly msevtmgt_name: string;
			/** The payment for the purchased have been processed already */
			readonly msevtmgt_Paid: string;
			/** The purchase was properly converted to Event Management entities */
			readonly msevtmgt_Processed: string;
			/** The contact making the purchase */
			readonly msevtmgt_PurchasingContactId: string;
			readonly msevtmgt_YearsInIndustry: string;
			/** The date and time when the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record */
			readonly OwningUser: string;
			/** Status of the event purchase */
			readonly statecode: string;
			/** Reason for the status of the event purchase */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** The time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msevtmgt_eventpurchase {
		enum msevtmgt_Area {
			/** 100000000 */
			Administration,
			/** 100000001 */
			Customer_service,
			/** 100000002 */
			Executivemanagement,
			/** 100000004 */
			Finance,
			/** 100000005 */
			HR,
			/** 100000006 */
			IT,
			/** 100000007 */
			Legal,
			/** 100000003 */
			Logistics,
			/** 100000008 */
			Marketing,
			/** 100000009 */
			Sales
		}
		enum msevtmgt_CompanySize {
			/** 100000008 */
			_10001_or_more,
			/** 100000005 */
			_1001_to_2500,
			/** 100000002 */
			_101_to_250,
			/** 100000006 */
			_2501_to_5000,
			/** 100000003 */
			_251_to_500,
			/** 100000000 */
			_50_or_less,
			/** 100000007 */
			_5001_to_10000,
			/** 100000004 */
			_501_to_1000,
			/** 100000001 */
			_51_to_100
		}
		enum msevtmgt_Industry {
			/** 100000000 */
			Architecture_and_engineering,
			/** 100000001 */
			Financial_services,
			/** 100000002 */
			Manufacturing,
			/** 100000003 */
			Media_entertainment,
			/** 100000008 */
			Other,
			/** 100000004 */
			Professional_services,
			/** 100000005 */
			Public_sector,
			/** 100000006 */
			Retail,
			/** 100000007 */
			Wholesale_and_distribution
		}
		enum msevtmgt_YearsInIndustry {
			/** 100000001 */
			_1_to_5_years,
			/** 100000002 */
			_5_to_10_years,
			/** 100000003 */
			Over_10_years,
			/** 100000000 */
			Under_one_year
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