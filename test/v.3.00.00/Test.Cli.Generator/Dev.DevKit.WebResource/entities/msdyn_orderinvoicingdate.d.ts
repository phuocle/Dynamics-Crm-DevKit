//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_orderinvoicingdate_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_orderinvoicingdate_msdyn_orderinvoicingsetupdate_OrderInvoicingDate: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_orderinvoicingdate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_orderinvoicingdate_Information */
		Body: DevKit.Formmsdyn_orderinvoicingdate_Information.Body;
		/** The Navigation of form msdyn_orderinvoicingdate_Information */
		Navigation: DevKit.Formmsdyn_orderinvoicingdate_Information.Navigation;
		/** The Process of form msdyn_orderinvoicingdate_Information */
		Process: DevKit.Formmsdyn_orderinvoicingdate_Information.Process;
		/** The SidePanes of form msdyn_orderinvoicingdate_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyn_orderinvoicingdate_Information2 {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_orderinvoicingdate_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_orderinvoicingdate_Information2 */
		Body: DevKit.Formmsdyn_orderinvoicingdate_Information2.Body;
		/** The Process of form msdyn_orderinvoicingdate_Information2 */
		Process: DevKit.Formmsdyn_orderinvoicingdate_Information2.Process;
		/** The SidePanes of form msdyn_orderinvoicingdate_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_orderinvoicingdateApi {
		/**
		* DynamicsCrm.DevKit msdyn_orderinvoicingdateApi
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
		/** Shows the invoice generated for this invoice date. */
		msdyn_Invoice: string;
		/** Enter the date to generate the invoice. */
		msdyn_InvoiceDate_UtcDateOnly: Date;
		/** Status of the invoice generation for this Invoice Date */
		msdyn_InvoiceStatus: OptionSet.msdyn_orderinvoicingdate.msdyn_InvoiceStatus;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Order this Invoice Date relates to */
		msdyn_Order: string;
		/** Unique identifier for entity instances */
		msdyn_orderinvoicingdateId: string;
		/** Time and date used for scheduling invoice generation. Intended for internal use. Manipulating values in this field is not supported and can lead to unexpected system behavior. */
		msdyn_PostponeGenerationUntil_TimezoneDateAndTime: Date;
		/** For internal use only */
		msdyn_ProcessStartedOn_TimezoneDateAndTime: Date;
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
		/** Status of the Order Invoicing Date */
		statecode: OptionSet.msdyn_orderinvoicingdate.statecode;
		/** Reason for the status of the Order Invoicing Date */
		statuscode: OptionSet.msdyn_orderinvoicingdate.statuscode;
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
			/** Shows the invoice generated for this invoice date. */
			readonly msdyn_Invoice: string;
			/** Enter the date to generate the invoice. */
			readonly msdyn_InvoiceDate_UtcDateOnly: string;
			/** Status of the invoice generation for this Invoice Date */
			readonly msdyn_InvoiceStatus: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Order this Invoice Date relates to */
			readonly msdyn_Order: string;
			/** Unique identifier for entity instances */
			readonly msdyn_orderinvoicingdateId: string;
			/** Time and date used for scheduling invoice generation. Intended for internal use. Manipulating values in this field is not supported and can lead to unexpected system behavior. */
			readonly msdyn_PostponeGenerationUntil_TimezoneDateAndTime: string;
			/** For internal use only */
			readonly msdyn_ProcessStartedOn_TimezoneDateAndTime: string;
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
			/** Status of the Order Invoicing Date */
			readonly statecode: string;
			/** Reason for the status of the Order Invoicing Date */
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
	namespace msdyn_orderinvoicingdate {
		enum msdyn_InvoiceStatus {
			/** 690970002 */
			Canceled,
			/** 690970001 */
			Processed,
			/** 690970000 */
			Scheduled
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