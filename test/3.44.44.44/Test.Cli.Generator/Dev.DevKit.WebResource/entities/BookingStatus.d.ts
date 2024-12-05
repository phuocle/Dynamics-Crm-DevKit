//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBookingStatus_Information {
		interface tab_FieldService_Sections {
			FieldService_section_1: DevKit.Controls.Section;
			FieldService_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab_FieldService extends DevKit.Controls.ITab {
			Section: tab_FieldService_Sections;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			FieldService: tab_FieldService;
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Type a detailed description for the booking status. */
			Description: DevKit.Controls.String;
			msdyn_FieldServiceStatus: DevKit.Controls.OptionSet;
			/** The URL for a web resource image. */
			msdyn_ImageUrl: DevKit.Controls.String;
			/** Whether bookings with this status should be optimized, locked or ignored during optimization. */
			msdyn_OptimizationMethod: DevKit.Controls.OptionSet;
			msdyn_StatusColor: DevKit.Controls.String;
			/** Booking assigned this booking status will be included in determining if the work order system status should be set to "completed" */
			msdyn_statuscompletesworkorder: DevKit.Controls.Boolean;
			/** Type the name of the booking status. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Select whether the booking status should be proposed, committed or canceled. */
			Status: DevKit.Controls.OptionSet;
			WebResource_StatusColor: DevKit.Controls.WebResource;
		}
		interface Navigation {
			bookingstatus_bookableresourcebooking_BookingStatus: DevKit.Controls.NavigationItem,
			msdyn_bookingstatus_bookableresourcebookingheader_bookingstatusid: DevKit.Controls.NavigationItem,
			msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCanceledStatus: DevKit.Controls.NavigationItem,
			msdyn_bookingstatus_msdyn_bookingsetupmetadata_DefaultBookingCommittedStatus: DevKit.Controls.NavigationItem,
			msdyn_bookingstatus_msdyn_bookingtimestamp_BookingStatus: DevKit.Controls.NavigationItem,
			msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultCanceledBookingStatus: DevKit.Controls.NavigationItem,
			msdyn_bookingstatus_msdyn_fieldservicesetting_DefaultScheduledBookingStatus: DevKit.Controls.NavigationItem,
			msdyn_bookingstatus_msdyn_timeentry_BookingStatus: DevKit.Controls.NavigationItem
		}
	}
	class FormBookingStatus_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
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
		/** Unique identifier of the booking status. */
		BookingStatusId: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Type a detailed description for the booking status. */
		Description: string;
		/** Exchange rate for the currency associated with the bookingstatus with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_FieldServiceStatus: OptionSet.BookingStatus.msdyn_FieldServiceStatus;
		msdyn_IconName: string;
		/** The URL for a web resource image. */
		msdyn_ImageUrl: string;
		/** For internal use only. */
		msdyn_InternalFlags: string;
		/** Whether bookings with this status should be optimized, locked or ignored during optimization. */
		msdyn_OptimizationMethod: OptionSet.BookingStatus.msdyn_OptimizationMethod;
		msdyn_ServiceAppointmentStatus: OptionSet.BookingStatus.msdyn_ServiceAppointmentStatus;
		msdyn_StatusColor: string;
		/** Booking assigned this booking status will be included in determining if the work order system status should be set to "completed" */
		msdyn_statuscompletesworkorder: boolean;
		/** Type the name of the booking status. */
		Name: string;
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
		/** Status of the Booking Status */
		StateCode: OptionSet.BookingStatus.StateCode;
		/** Select whether the booking status should be proposed, committed or canceled. */
		Status: OptionSet.BookingStatus.Status;
		/** Reason for the status of the Booking Status */
		StatusCode: OptionSet.BookingStatus.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Exchange rate for the currency associated with the BookingStatus with respect to the base currency. */
		TransactionCurrencyId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the booking status. */
			readonly BookingStatusId: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Type a detailed description for the booking status. */
			readonly Description: string;
			/** Exchange rate for the currency associated with the bookingstatus with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_FieldServiceStatus: string;
			readonly msdyn_IconName: string;
			/** The URL for a web resource image. */
			readonly msdyn_ImageUrl: string;
			/** For internal use only. */
			readonly msdyn_InternalFlags: string;
			/** Whether bookings with this status should be optimized, locked or ignored during optimization. */
			readonly msdyn_OptimizationMethod: string;
			readonly msdyn_ServiceAppointmentStatus: string;
			readonly msdyn_StatusColor: string;
			/** Booking assigned this booking status will be included in determining if the work order system status should be set to "completed" */
			readonly msdyn_statuscompletesworkorder: string;
			/** Type the name of the booking status. */
			readonly Name: string;
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
			/** Status of the Booking Status */
			readonly StateCode: string;
			/** Select whether the booking status should be proposed, committed or canceled. */
			readonly Status: string;
			/** Reason for the status of the Booking Status */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Exchange rate for the currency associated with the BookingStatus with respect to the base currency. */
			readonly TransactionCurrencyId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace BookingStatus {
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
		enum msdyn_OptimizationMethod {
			/** 192350001 */
			Do_Not_Move,
			/** 192350002 */
			Ignore,
			/** 192350000 */
			Optimize
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}