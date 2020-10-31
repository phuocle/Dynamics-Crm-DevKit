//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormBookingStatus_Information {
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_FieldService_Sections {
			FieldService_section_1: DevKit.Form.Controls.ControlSection;
			FieldService_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_ProjectService_Sections {
			ProjectService_section_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_2_Sections;
		}
		interface tab_FieldService extends DevKit.Form.Controls.IControlTab {
			Section: tab_FieldService_Sections;
		}
		interface tab_ProjectService extends DevKit.Form.Controls.IControlTab {
			Section: tab_ProjectService_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
			FieldService: tab_FieldService;
			ProjectService: tab_ProjectService;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			WebResource_StatusColor: DevKit.Form.Controls.ControlWebResource;
			/** Type a detailed description for the booking status. */
			Description: DevKit.Form.Controls.ControlString;
			/** Commit Type */
			msdyn_committype: DevKit.Form.Controls.ControlOptionSet;
			msdyn_FieldServiceStatus: DevKit.Form.Controls.ControlOptionSet;
			/** The URL for a web resource image. */
			msdyn_ImageUrl: DevKit.Form.Controls.ControlString;
			msdyn_StatusColor: DevKit.Form.Controls.ControlString;
			/** Type the name of the booking status. */
			Name: DevKit.Form.Controls.ControlString;
			/** Select whether the booking status should be proposed, committed or canceled. */
			Status: DevKit.Form.Controls.ControlOptionSet;
		}
		interface Navigation {
			nav_msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus: DevKit.Form.Controls.ControlNavigationItem,
			nav_msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus: DevKit.Form.Controls.ControlNavigationItem
		}
	}
	class FormBookingStatus_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form BookingStatus_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form BookingStatus_Information */
		Body: LuckyMokey.FormBookingStatus_Information.Body;
		/** The Navigation of form BookingStatus_Information */
		Navigation: LuckyMokey.FormBookingStatus_Information.Navigation;
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
			/** 192350000 */
			None,
			/** 192350001 */
			Hard_Book,
			/** 192350002 */
			Soft_Book,
			/** 192350003 */
			Proposed
		}
		enum msdyn_FieldServiceStatus {
			/** 690970000 */
			Scheduled,
			/** 690970001 */
			Traveling,
			/** 690970003 */
			In_Progress,
			/** 690970002 */
			On_Break,
			/** 690970004 */
			Completed,
			/** 690970005 */
			Canceled
		}
		enum msdyn_ServiceAppointmentStatus {
			/** 3 */
			Pending,
			/** 4 */
			Reserved,
			/** 6 */
			In_Progress,
			/** 7 */
			Arrived,
			/** 8 */
			Completed,
			/** 9 */
			Canceled,
			/** 10 */
			No_Show
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum Status {
			/** 1 */
			Proposed,
			/** 2 */
			Committed,
			/** 3 */
			Canceled
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}