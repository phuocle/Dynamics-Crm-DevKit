//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_workorderdetailsgenerationqueue_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_ExceptionMessage: DevKit.Controls.String;
			msdyn_ExceptionTrace: DevKit.Controls.String;
			/** Enter the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_Processed: DevKit.Controls.Boolean;
			msdyn_WorkOrderDetails: DevKit.Controls.String;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Work Order Details Generation Queue */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_workorderdetailsgenerationqueue_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_workorderdetailsgenerationqueue_Information */
		Body: DevKit.Formmsdyn_workorderdetailsgenerationqueue_Information.Body;
		/** The Footer section of form msdyn_workorderdetailsgenerationqueue_Information */
		Footer: DevKit.Formmsdyn_workorderdetailsgenerationqueue_Information.Footer;
		/** The Navigation of form msdyn_workorderdetailsgenerationqueue_Information */
		Navigation: DevKit.Formmsdyn_workorderdetailsgenerationqueue_Information.Navigation;
		/** The Process of form msdyn_workorderdetailsgenerationqueue_Information */
		Process: DevKit.Formmsdyn_workorderdetailsgenerationqueue_Information.Process;
		/** The SidePanes of form msdyn_workorderdetailsgenerationqueue_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_workorderdetailsgenerationqueueApi {
		/**
		* DynamicsCrm.DevKit msdyn_workorderdetailsgenerationqueueApi
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
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for Agreement Booking Date associated with Work Order Details Generation Queue. */
		msdyn_AgreementBookingDate: string;
		msdyn_Booking: string;
		msdyn_ExceptionMessage: string;
		msdyn_ExceptionTrace: string;
		/** Enter the name of the custom entity. */
		msdyn_name: string;
		msdyn_Processed: boolean;
		msdyn_SchDateOwnerId: string;
		msdyn_WorkOrderDetails: string;
		/** Shows the entity instances. */
		msdyn_workorderdetailsgenerationqueueId: string;
		msdyn_WorkorderId: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Work Order Details Generation Queue */
		statecode: OptionSet.msdyn_workorderdetailsgenerationqueue.statecode;
		/** Reason for the status of the Work Order Details Generation Queue */
		statuscode: OptionSet.msdyn_workorderdetailsgenerationqueue.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
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
			/** Shows the sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for Agreement Booking Date associated with Work Order Details Generation Queue. */
			readonly msdyn_AgreementBookingDate: string;
			readonly msdyn_Booking: string;
			readonly msdyn_ExceptionMessage: string;
			readonly msdyn_ExceptionTrace: string;
			/** Enter the name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_Processed: string;
			readonly msdyn_SchDateOwnerId: string;
			readonly msdyn_WorkOrderDetails: string;
			/** Shows the entity instances. */
			readonly msdyn_workorderdetailsgenerationqueueId: string;
			readonly msdyn_WorkorderId: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Shows the date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Work Order Details Generation Queue */
			readonly statecode: string;
			/** Reason for the status of the Work Order Details Generation Queue */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_workorderdetailsgenerationqueue {
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