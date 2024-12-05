//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsevtmgt_speakerengagement_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab_GeneralTab_Sections {
		}
		interface tab_GeneralTab extends DevKit.Controls.ITab {
			Section: tab_GeneralTab_Sections;
		}
		interface Tabs {
			GeneralTab: tab_GeneralTab;
		}
		interface Body {
			Tab: Tabs;
			msevtmgt_description: DevKit.Controls.String;
			msevtmgt_endtime: DevKit.Controls.DateTime;
			/** Unique identifier for the event associated with the speaker engagement */
			msevtmgt_event: DevKit.Controls.Lookup;
			/** The name of the custom entity */
			msevtmgt_name: DevKit.Controls.String;
			msevtmgt_Session: DevKit.Controls.Lookup;
			msevtmgt_Speaker: DevKit.Controls.Lookup;
			msevtmgt_Speakercost: DevKit.Controls.Money;
			msevtmgt_starttime: DevKit.Controls.DateTime;
			notescontrol: DevKit.Controls.Note;
		}
		interface Navigation {
			msevtmgt_speakerengagement_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			msevtmgt_speakerengagement_adx_portalcomments: DevKit.Controls.NavigationItem,
			msevtmgt_speakerengagement_Appointments: DevKit.Controls.NavigationItem,
			msevtmgt_speakerengagement_Emails: DevKit.Controls.NavigationItem,
			msevtmgt_speakerengagement_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			msevtmgt_speakerengagement_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			msevtmgt_speakerengagement_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			msevtmgt_speakerengagement_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			msevtmgt_speakerengagement_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			msevtmgt_speakerengagement_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			msevtmgt_speakerengagement_msfp_alerts: DevKit.Controls.NavigationItem,
			msevtmgt_speakerengagement_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			msevtmgt_speakerengagement_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			msevtmgt_speakerengagement_PhoneCalls: DevKit.Controls.NavigationItem,
			msevtmgt_speakerengagement_ServiceAppointments: DevKit.Controls.NavigationItem,
			msevtmgt_speakerengagement_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class Formmsevtmgt_speakerengagement_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_speakerengagement_Information */
		Body: DevKit.Formmsevtmgt_speakerengagement_Information.Body;
		/** The Header section of form msevtmgt_speakerengagement_Information */
		Header: DevKit.Formmsevtmgt_speakerengagement_Information.Header;
		/** The Navigation of form msevtmgt_speakerengagement_Information */
		Navigation: DevKit.Formmsevtmgt_speakerengagement_Information.Navigation;
		/** The SidePanes of form msevtmgt_speakerengagement_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsevtmgt_speakerengagement_Quick_Create_Form {
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
			/** Unique identifier for the event associated with the speaker engagement */
			msevtmgt_event: DevKit.Controls.Lookup;
			/** The name of the custom entity */
			msevtmgt_name: DevKit.Controls.String;
			msevtmgt_Session: DevKit.Controls.Lookup;
			msevtmgt_Speaker: DevKit.Controls.Lookup;
			msevtmgt_Speakercost: DevKit.Controls.Money;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsevtmgt_speakerengagement_Quick_Create_Form extends DevKit.IForm {
		/**
		* Quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_speakerengagement_Quick_Create_Form */
		Body: DevKit.Formmsevtmgt_speakerengagement_Quick_Create_Form.Body;
	}
	class msevtmgt_speakerengagementApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_speakerengagementApi
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
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		readonly EntityImageId: string;
		/** Exchange rate between the base currency and the currency associated with the entity */
		readonly ExchangeRate: number;
		/** The sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record */
		readonly ModifiedBy: string;
		/** The date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		msevtmgt_description: string;
		msevtmgt_endtime_TimezoneDateAndTime: Date;
		/** Unique identifier for the event associated with the speaker engagement */
		msevtmgt_event: string;
		/** The name of the custom entity */
		msevtmgt_name: string;
		msevtmgt_Session: string;
		msevtmgt_Speaker: string;
		msevtmgt_Speakercost: number;
		/** Value of the speaker cost (in the base currency) */
		readonly msevtmgt_speakercost_Base: number;
		/** Unique identifier for entity instances */
		msevtmgt_speakerengagementId: string;
		msevtmgt_starttime_TimezoneDateAndTime: Date;
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
		/** Status of the speaker engagement */
		statecode: OptionSet.msevtmgt_speakerengagement.statecode;
		/** Reason for the status of the speaker engagement */
		statuscode: OptionSet.msevtmgt_speakerengagement.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity */
		TransactionCurrencyId: string;
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
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			readonly EntityImageId: string;
			/** Exchange rate between the base currency and the currency associated with the entity */
			readonly ExchangeRate: string;
			/** The sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record */
			readonly ModifiedBy: string;
			/** The date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			readonly msevtmgt_description: string;
			readonly msevtmgt_endtime_TimezoneDateAndTime: string;
			/** Unique identifier for the event associated with the speaker engagement */
			readonly msevtmgt_event: string;
			/** The name of the custom entity */
			readonly msevtmgt_name: string;
			readonly msevtmgt_Session: string;
			readonly msevtmgt_Speaker: string;
			readonly msevtmgt_Speakercost: string;
			/** Value of the speaker cost (in the base currency) */
			readonly msevtmgt_speakercost_Base: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_speakerengagementId: string;
			readonly msevtmgt_starttime_TimezoneDateAndTime: string;
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
			/** Status of the speaker engagement */
			readonly statecode: string;
			/** Reason for the status of the speaker engagement */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the entity */
			readonly TransactionCurrencyId: string;
			/** The time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msevtmgt_speakerengagement {
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