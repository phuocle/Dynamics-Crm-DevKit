//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsevtmgt_AttendeePass_Information {
		interface tab__695E07FD_FEDF_4E04_BA92_366F59C2C2A2_Sections {
			_695E07FD_FEDF_4E04_BA92_366F59C2C2A2_COLUMN_2_SECTION_1: DevKit.Controls.Section;
		}
		interface tab__695E07FD_FEDF_4E04_BA92_366F59C2C2A2 extends DevKit.Controls.ITab {
			Section: tab__695E07FD_FEDF_4E04_BA92_366F59C2C2A2_Sections;
		}
		interface Tabs {
			_695E07FD_FEDF_4E04_BA92_366F59C2C2A2: tab__695E07FD_FEDF_4E04_BA92_366F59C2C2A2;
		}
		interface Body {
			Tab: Tabs;
			/** The date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			msevtmgt_contact: DevKit.Controls.Lookup;
			/** Unique identifier for the event associated with the attendee pass */
			msevtmgt_EventId: DevKit.Controls.Lookup;
			/** Unique identifier for the event registration associated with the attendee pass */
			msevtmgt_EventRegistrationId: DevKit.Controls.Lookup;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			/** Unique identifier for the pass associated with the attendee pass */
			msevtmgt_pass: DevKit.Controls.Lookup;
			msevtmgt_PassPrice: DevKit.Controls.Money;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
			/** Status of the attendee pass */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the attendee pass */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			msevtmgt_attendeepass_msevtmgt_checkin: DevKit.Controls.NavigationItem,
			msevtmgt_msevtmgt_attendeepass_msevtmgt_eventpurch: DevKit.Controls.NavigationItem
		}
		interface quickForm_event_eventRegistration_Body {
			msevtmgt_EventId: DevKit.Controls.QuickView;
		}
		interface quickForm_event_eventRegistration extends DevKit.Controls.IQuickView {
			Body: quickForm_event_eventRegistration_Body;
		}
		interface QuickForm {
			event_eventRegistration: quickForm_event_eventRegistration;
		}
	}
	class Formmsevtmgt_AttendeePass_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_AttendeePass_Information */
		Body: DevKit.Formmsevtmgt_AttendeePass_Information.Body;
		/** The Navigation of form msevtmgt_AttendeePass_Information */
		Navigation: DevKit.Formmsevtmgt_AttendeePass_Information.Navigation;
		/** The QuickForm of form msevtmgt_AttendeePass_Information */
		QuickForm: DevKit.Formmsevtmgt_AttendeePass_Information.QuickForm;
		/** The SidePanes of form msevtmgt_AttendeePass_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsevtmgt_AttendeePass_Quick_Create_Form {
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
			/** Unique identifier for the event registration associated with the attendee pass */
			msevtmgt_EventRegistrationId: DevKit.Controls.Lookup;
			/** The name of the custom entity */
			msevtmgt_Name: DevKit.Controls.String;
			/** Unique identifier for the pass associated with the attendee pass */
			msevtmgt_pass: DevKit.Controls.Lookup;
			msevtmgt_PassPrice: DevKit.Controls.Money;
			/** Owner ID */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsevtmgt_AttendeePass_Quick_Create_Form extends DevKit.IForm {
		/**
		* Quick create form [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_AttendeePass_Quick_Create_Form */
		Body: DevKit.Formmsevtmgt_AttendeePass_Quick_Create_Form.Body;
	}
	class msevtmgt_AttendeePassApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_AttendeePassApi
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
		/** Unique identifier for entity instances */
		msevtmgt_AttendeePassId: string;
		msevtmgt_contact: string;
		/** Unique identifier for the event associated with the attendee pass */
		msevtmgt_EventId: string;
		/** Unique identifier for the event registration associated with the attendee pass */
		msevtmgt_EventRegistrationId: string;
		/** The name of the custom entity */
		msevtmgt_Name: string;
		/** Unique identifier for the pass associated with the attendee pass */
		msevtmgt_pass: string;
		msevtmgt_PassPrice: number;
		/** Value of the pass price (in the base currency) */
		readonly msevtmgt_passprice_Base: number;
		/** Unique identifier of the currency associated with the entity */
		msevtmgt_TransactionCurrencyId: string;
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
		/** Status of the attendee pass */
		statecode: OptionSet.msevtmgt_AttendeePass.statecode;
		/** Reason for the status of the attendee pass */
		statuscode: OptionSet.msevtmgt_AttendeePass.statuscode;
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
			/** Unique identifier for entity instances */
			readonly msevtmgt_AttendeePassId: string;
			readonly msevtmgt_contact: string;
			/** Unique identifier for the event associated with the attendee pass */
			readonly msevtmgt_EventId: string;
			/** Unique identifier for the event registration associated with the attendee pass */
			readonly msevtmgt_EventRegistrationId: string;
			/** The name of the custom entity */
			readonly msevtmgt_Name: string;
			/** Unique identifier for the pass associated with the attendee pass */
			readonly msevtmgt_pass: string;
			readonly msevtmgt_PassPrice: string;
			/** Value of the pass price (in the base currency) */
			readonly msevtmgt_passprice_Base: string;
			/** Unique identifier of the currency associated with the entity */
			readonly msevtmgt_TransactionCurrencyId: string;
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
			/** Status of the attendee pass */
			readonly statecode: string;
			/** Reason for the status of the attendee pass */
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
	namespace msevtmgt_AttendeePass {
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