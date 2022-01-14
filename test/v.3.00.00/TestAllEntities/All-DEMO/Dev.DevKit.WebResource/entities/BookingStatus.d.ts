//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBookingStatus_Information {
		interface tab_FieldService_Sections {
			FieldService_section_1: DevKit.Controls.Section;
			FieldService_section_2: DevKit.Controls.Section;
		}
		interface tab_ProjectService_Sections {
			ProjectService_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_FieldService extends DevKit.Controls.ITab {
			Section: tab_FieldService_Sections;
		}
		interface tab_ProjectService extends DevKit.Controls.ITab {
			Section: tab_ProjectService_Sections;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			FieldService: tab_FieldService;
			ProjectService: tab_ProjectService;
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Type a detailed description for the booking status. */
			Description: DevKit.Controls.String;
			/** Commit Type */
			msdyn_committype: DevKit.Controls.OptionSet;
			msdyn_FieldServiceStatus: DevKit.Controls.OptionSet;
			/** The URL for a web resource image. */
			msdyn_ImageUrl: DevKit.Controls.String;
			msdyn_StatusColor: DevKit.Controls.String;
			/** Type the name of the booking status. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Select whether the booking status should be proposed, committed or canceled. */
			Status: DevKit.Controls.OptionSet;
			WebResource_StatusColor: DevKit.Controls.WebResource;
		}
		interface Navigation {
			nav_msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus: DevKit.Controls.NavigationItem,
			nav_msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormBookingStatus_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form BookingStatus_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form BookingStatus_Information */
		Body: DevKit.FormBookingStatus_Information.Body;
		/** The Navigation of form BookingStatus_Information */
		Navigation: DevKit.FormBookingStatus_Information.Navigation;
		/** The Process of form BookingStatus_Information */
		Process: DevKit.FormBookingStatus_Information.Process;
		/** The SidePanes of form BookingStatus_Information */
		SidePanes: DevKit.SidePanes;
	}
	class BookingStatusApi {
		/**
		* DynamicsCrm.DevKit BookingStatusApi
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
		/** Unique identifier of the booking status. */
		BookingStatusId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a detailed description for the booking status. */
		Description: DevKit.WebApi.StringValue;
		/** Exchange rate for the currency associated with the bookingstatus with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Commit Type */
		msdyn_committype: DevKit.WebApi.OptionSetValue;
		msdyn_FieldServiceStatus: DevKit.WebApi.OptionSetValue;
		/** The URL for a web resource image. */
		msdyn_ImageUrl: DevKit.WebApi.StringValue;
		/** For internal use only. */
		msdyn_InternalFlags: DevKit.WebApi.StringValue;
		msdyn_ServiceAppointmentStatus: DevKit.WebApi.OptionSetValue;
		msdyn_StatusColor: DevKit.WebApi.StringValue;
		/** Type the name of the booking status. */
		Name: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
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
		/** Status of the Booking Status */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select whether the booking status should be proposed, committed or canceled. */
		Status: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Booking Status */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Exchange rate for the currency associated with the BookingStatus with respect to the base currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace BookingStatus {
		enum msdyn_committype {
			/** 192350004 */
			Canceled,
			/** 192350001 */
			Hard_Book,
			/** 192350000 */
			None,
			/** 192350003 */
			Proposed,
			/** 192350002 */
			Soft_Book
		}
		enum msdyn_FieldServiceStatus {
			/** 690970005 */
			Canceled,
			/** 690970004 */
			Completed,
			/** 690970003 */
			In_Progress,
			/** 690970002 */
			On_Break,
			/** 690970000 */
			Scheduled,
			/** 690970001 */
			Traveling
		}
		enum msdyn_ServiceAppointmentStatus {
			/** 7 */
			Arrived,
			/** 9 */
			Canceled,
			/** 8 */
			Completed,
			/** 6 */
			In_Progress,
			/** 10 */
			No_Show,
			/** 3 */
			Pending,
			/** 4 */
			Reserved
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum Status {
			/** 3 */
			Canceled,
			/** 2 */
			Committed,
			/** 1 */
			Proposed
		}
		enum StatusCode {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}