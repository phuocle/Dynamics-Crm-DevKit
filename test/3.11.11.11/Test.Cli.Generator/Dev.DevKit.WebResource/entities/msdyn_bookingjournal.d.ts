//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBooking_Journal_Mobile {
		interface tab_f1tab_journalDetails_Sections {
			f1tab_journalDetails_section_3: DevKit.Controls.Section;
			f1tab_journalDetails_section_4: DevKit.Controls.Section;
			f1tab_journalDetails_section_journal_cost: DevKit.Controls.Section;
			f1tab_journalDetails_section_journal_details: DevKit.Controls.Section;
		}
		interface tab_fstab_general_Sections {
			fstab_general_section_2: DevKit.Controls.Section;
			fstab_general_section_3: DevKit.Controls.Section;
			fstab_general_section_general: DevKit.Controls.Section;
		}
		interface tab_fstab_other_Sections {
			tab_4_section_1: DevKit.Controls.Section;
			tab_4_section_2: DevKit.Controls.Section;
			tab_4_section_3: DevKit.Controls.Section;
		}
		interface tab_fstab_sub_grids_Sections {
			fstab_sub_grids_section: DevKit.Controls.Section;
			fstab_sub_grids_section_2: DevKit.Controls.Section;
			fstab_sub_grids_section_3: DevKit.Controls.Section;
		}
		interface tab_f1tab_journalDetails extends DevKit.Controls.ITab {
			Section: tab_f1tab_journalDetails_Sections;
		}
		interface tab_fstab_general extends DevKit.Controls.ITab {
			Section: tab_fstab_general_Sections;
		}
		interface tab_fstab_other extends DevKit.Controls.ITab {
			Section: tab_fstab_other_Sections;
		}
		interface tab_fstab_sub_grids extends DevKit.Controls.ITab {
			Section: tab_fstab_sub_grids_Sections;
		}
		interface Tabs {
			f1tab_journalDetails: tab_f1tab_journalDetails;
			fstab_general: tab_fstab_general;
			fstab_other: tab_fstab_other;
			fstab_sub_grids: tab_fstab_sub_grids;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the additional cost associated with this journal, if any. (This amount is not multiplied by quantity) */
			msdyn_AdditionalCost: DevKit.Controls.Money;
			/** Shows if this journal is billable. */
			msdyn_Billable: DevKit.Controls.Boolean;
			/** This Resource Booking this journal pertains to */
			msdyn_Booking: DevKit.Controls.Lookup;
			/** Enter the total duration of this journal record. */
			msdyn_Duration: DevKit.Controls.Integer;
			/** Enter the end time of this journal record. */
			msdyn_EndTime: DevKit.Controls.DateTime;
			/** Enter the type of journal. */
			msdyn_JournalType: DevKit.Controls.OptionSet;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Resource Pay Type associated with Booking Journal. */
			msdyn_PayType: DevKit.Controls.Lookup;
			/** Enter the start time of this journal record. */
			msdyn_StartTime: DevKit.Controls.DateTime;
			/** Shows the total cost company pays to resource. */
			msdyn_TotalCost: DevKit.Controls.Money;
			/** Enter the hourly cost that company pays to the resource. */
			msdyn_UnitCost: DevKit.Controls.Money;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormBooking_Journal_Mobile extends DevKit.IForm {
		/**
		* Booking Journal - Mobile [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Booking_Journal_Mobile */
		Body: DevKit.FormBooking_Journal_Mobile.Body;
		/** The Navigation of form Booking_Journal_Mobile */
		Navigation: DevKit.FormBooking_Journal_Mobile.Navigation;
		/** The Process of form Booking_Journal_Mobile */
		Process: DevKit.FormBooking_Journal_Mobile.Process;
		/** The SidePanes of form Booking_Journal_Mobile */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_bookingjournal_Information {
		interface tab_f1tab_journalDetails_Sections {
			f1tab_journalDetails_section_2: DevKit.Controls.Section;
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_f1tab_journalDetails extends DevKit.Controls.ITab {
			Section: tab_f1tab_journalDetails_Sections;
		}
		interface Tabs {
			f1tab_journalDetails: tab_f1tab_journalDetails;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the additional cost associated with this journal, if any. (This amount is not multiplied by quantity) */
			msdyn_AdditionalCost: DevKit.Controls.Money;
			/** Shows if this journal is billable. */
			msdyn_Billable: DevKit.Controls.Boolean;
			/** This Resource Booking this journal pertains to */
			msdyn_Booking: DevKit.Controls.Lookup;
			/** Enter the total duration of this journal record. */
			msdyn_Duration: DevKit.Controls.Integer;
			/** Enter the end time of this journal record. */
			msdyn_EndTime: DevKit.Controls.DateTime;
			/** Enter the type of journal. */
			msdyn_JournalType: DevKit.Controls.OptionSet;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Unique identifier for Resource Pay Type associated with Booking Journal. */
			msdyn_PayType: DevKit.Controls.Lookup;
			/** Enter the start time of this journal record. */
			msdyn_StartTime: DevKit.Controls.DateTime;
			/** Shows the total cost company pays to resource. */
			msdyn_TotalCost: DevKit.Controls.Money;
			/** Enter the hourly cost that company pays to the resource. */
			msdyn_UnitCost: DevKit.Controls.Money;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Booking Journal */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_bookingjournal_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_bookingjournal_Information */
		Body: DevKit.Formmsdyn_bookingjournal_Information.Body;
		/** The Footer section of form msdyn_bookingjournal_Information */
		Footer: DevKit.Formmsdyn_bookingjournal_Information.Footer;
		/** The Navigation of form msdyn_bookingjournal_Information */
		Navigation: DevKit.Formmsdyn_bookingjournal_Information.Navigation;
		/** The Process of form msdyn_bookingjournal_Information */
		Process: DevKit.Formmsdyn_bookingjournal_Information.Process;
		/** The SidePanes of form msdyn_bookingjournal_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_bookingjournalApi {
		/**
		* DynamicsCrm.DevKit msdyn_bookingjournalApi
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
		/** Shows the additional cost associated with this journal, if any. (This amount is not multiplied by quantity) */
		msdyn_AdditionalCost: number;
		/** Shows the value of the additional cost in the base currency. */
		readonly msdyn_additionalcost_Base: number;
		/** Shows if this journal is billable. */
		msdyn_Billable: boolean;
		/** This Resource Booking this journal pertains to */
		msdyn_Booking: string;
		/** Shows the entity instances. */
		msdyn_bookingjournalId: string;
		/** Enter the total duration of this journal record. */
		msdyn_Duration: number;
		/** Enter the end time of this journal record. */
		msdyn_EndTime_UtcDateAndTime: Date;
		/** Enter the type of journal. */
		msdyn_JournalType: OptionSet.msdyn_bookingjournal.msdyn_JournalType;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for Resource Pay Type associated with Booking Journal. */
		msdyn_PayType: string;
		/** Enter the start time of this journal record. */
		msdyn_StartTime_UtcDateAndTime: Date;
		/** Shows the total cost company pays to resource. */
		msdyn_TotalCost: number;
		/** Shows the value of the total cost in the base currency. */
		readonly msdyn_totalcost_Base: number;
		/** Enter the hourly cost that company pays to the resource. */
		msdyn_UnitCost: number;
		/** Shows the value of the unit cost in the base currency. */
		readonly msdyn_unitcost_Base: number;
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
		/** Status of the Booking Journal */
		statecode: OptionSet.msdyn_bookingjournal.statecode;
		/** Reason for the status of the Booking Journal */
		statuscode: OptionSet.msdyn_bookingjournal.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the entity. */
		TransactionCurrencyId: string;
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
			/** Shows the additional cost associated with this journal, if any. (This amount is not multiplied by quantity) */
			readonly msdyn_AdditionalCost: string;
			/** Shows the value of the additional cost in the base currency. */
			readonly msdyn_additionalcost_Base: string;
			/** Shows if this journal is billable. */
			readonly msdyn_Billable: string;
			/** This Resource Booking this journal pertains to */
			readonly msdyn_Booking: string;
			/** Shows the entity instances. */
			readonly msdyn_bookingjournalId: string;
			/** Enter the total duration of this journal record. */
			readonly msdyn_Duration: string;
			/** Enter the end time of this journal record. */
			readonly msdyn_EndTime_UtcDateAndTime: string;
			/** Enter the type of journal. */
			readonly msdyn_JournalType: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier for Resource Pay Type associated with Booking Journal. */
			readonly msdyn_PayType: string;
			/** Enter the start time of this journal record. */
			readonly msdyn_StartTime_UtcDateAndTime: string;
			/** Shows the total cost company pays to resource. */
			readonly msdyn_TotalCost: string;
			/** Shows the value of the total cost in the base currency. */
			readonly msdyn_totalcost_Base: string;
			/** Enter the hourly cost that company pays to the resource. */
			readonly msdyn_UnitCost: string;
			/** Shows the value of the unit cost in the base currency. */
			readonly msdyn_unitcost_Base: string;
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
			/** Status of the Booking Journal */
			readonly statecode: string;
			/** Reason for the status of the Booking Journal */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the entity. */
			readonly TransactionCurrencyId: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_bookingjournal {
		enum msdyn_JournalType {
			/** 690970001 */
			Break,
			/** 690970004 */
			Business_Closure,
			/** 690970003 */
			Overtime,
			/** 690970002 */
			Travel,
			/** 690970000 */
			Working_Hours
		}
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}