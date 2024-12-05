//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormBookableResourceBookingHeader_Information {
		interface Tabs {
		}
		interface Body {
			/** Shows the aggregate duration of the linked bookings. */
			Duration: DevKit.Controls.Integer;
			/** Shows the end date and time of the booking summary. */
			EndTime: DevKit.Controls.DateTime;
			/** The name of the booking summary. */
			Name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Shows the start date and time of the booking summary. */
			StartTime: DevKit.Controls.DateTime;
		}
		interface Navigation {
			bookableresourcebookingheader_adx_inviteredemptions: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_adx_portalcomments: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_Appointments: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_bookableresourcebooking_Header: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_BulkOperations: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_CampaignActivities: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_CampaignResponses: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_Emails: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_IncidentResolutions: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_msdyn_bookingalerts: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_msdyn_copilottranscripts: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_msdyn_ocliveworkitems: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_msdyn_ocoutboundmessages: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_msdyn_ocsessions: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_msdyn_ocvoicemails: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_msfp_alerts: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_msfp_surveyinvites: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_msfp_surveyresponses: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_OpportunityCloses: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_OrderCloses: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_PhoneCalls: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_QuoteCloses: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_ServiceAppointments: DevKit.Controls.NavigationItem,
			bookableresourcebookingheader_Tasks: DevKit.Controls.NavigationItem
		}
	}
	class FormBookableResourceBookingHeader_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form BookableResourceBookingHeader_Information */
		Body: DevKit.FormBookableResourceBookingHeader_Information.Body;
		/** The Navigation of form BookableResourceBookingHeader_Information */
		Navigation: DevKit.FormBookableResourceBookingHeader_Information.Navigation;
		/** The SidePanes of form BookableResourceBookingHeader_Information */
		SidePanes: DevKit.SidePanes;
	}
	class BookableResourceBookingHeaderApi {
		/**
		* DynamicsCrm.DevKit BookableResourceBookingHeaderApi
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
		/** Unique identifier of the resource booking header. */
		BookableResourceBookingHeaderId: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the aggregate duration of the linked bookings. */
		Duration: number;
		/** Shows the end date and time of the booking summary. */
		EndTime_UtcDateAndTime: Date;
		/** Exchange rate for the currency associated with the bookableresourcebookingheader with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Bookable Resource */
		msdyn_bookableresourceid: string;
		/** Booking Status */
		msdyn_bookingstatusid: string;
		/** Select whether the booking is solid or liquid. Solid bookings are firm and cannot be changed whereas liquid bookings can be changed. */
		msdyn_BookingType: OptionSet.BookableResourceBookingHeader.msdyn_BookingType;
		/** Resource Requirement */
		msdyn_ResourceRequirement: string;
		/** The name of the booking summary. */
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
		/** Contains the id of the process associated with the entity. */
		ProcessId: string;
		/** Contains the id of the stage where the entity is located. */
		StageId: string;
		/** Shows the start date and time of the booking summary. */
		StartTime_UtcDateAndTime: Date;
		/** Status of the Bookable Resource Booking Header */
		StateCode: OptionSet.BookableResourceBookingHeader.StateCode;
		/** Reason for the status of the Bookable Resource Booking Header */
		StatusCode: OptionSet.BookableResourceBookingHeader.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Exchange rate for the currency associated with the BookableResourceBookingHeader with respect to the base currency. */
		TransactionCurrencyId: string;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the resource booking header. */
			readonly BookableResourceBookingHeaderId: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the aggregate duration of the linked bookings. */
			readonly Duration: string;
			/** Shows the end date and time of the booking summary. */
			readonly EndTime_UtcDateAndTime: string;
			/** Exchange rate for the currency associated with the bookableresourcebookingheader with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Bookable Resource */
			readonly msdyn_bookableresourceid: string;
			/** Booking Status */
			readonly msdyn_bookingstatusid: string;
			/** Select whether the booking is solid or liquid. Solid bookings are firm and cannot be changed whereas liquid bookings can be changed. */
			readonly msdyn_BookingType: string;
			/** Resource Requirement */
			readonly msdyn_ResourceRequirement: string;
			/** The name of the booking summary. */
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
			/** Contains the id of the process associated with the entity. */
			readonly ProcessId: string;
			/** Contains the id of the stage where the entity is located. */
			readonly StageId: string;
			/** Shows the start date and time of the booking summary. */
			readonly StartTime_UtcDateAndTime: string;
			/** Status of the Bookable Resource Booking Header */
			readonly StateCode: string;
			/** Reason for the status of the Bookable Resource Booking Header */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Exchange rate for the currency associated with the BookableResourceBookingHeader with respect to the base currency. */
			readonly TransactionCurrencyId: string;
			/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace BookableResourceBookingHeader {
		enum msdyn_BookingType {
			/** 2 */
			Liquid,
			/** 1 */
			Solid
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
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