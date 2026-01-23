//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formbackgroundoperation_Information {
		interface Tabs {
		}
		interface Body {
			/** The status of background operation. */
			StateCode: DevKit.Controls.OptionSet;
			/** The status reason for background operation. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Unique identifier of the user who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** The is display name of background operation. */
			DisplayName: DevKit.Controls.String;
			/** The date time when background operation finished execution. */
			EndTime: DevKit.Controls.DateTime;
			/** The error code of error for background operation in case of failure. */
			ErrorCode: DevKit.Controls.Integer;
			/** The error message of error for background operation in case of failure. */
			ErrorMessage: DevKit.Controls.String;
			/** The input parameters that were supplied to start background operation. */
			InputParameters: DevKit.Controls.String;
			/** The name of the background operation. */
			Name: DevKit.Controls.String;
			/** The response of background operation. */
			OutputParameters: DevKit.Controls.String;
			/** The number of times background operation was retried. */
			RetryCount: DevKit.Controls.Integer;
			/** The date time when background operation started execution. */
			StartTime: DevKit.Controls.DateTime;
			/** Time to live in seconds. */
			TTLInSeconds: DevKit.Controls.Integer;
		}
	}
	export class Formbackgroundoperation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form backgroundoperation_Information */
		Body: DevKit.Formbackgroundoperation_Information.Body;
	}
	export class backgroundoperationApi {
		/**
		* DynamicsCrm.DevKit backgroundoperationApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier for entity instances */
		backgroundoperationId: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** The is display name of background operation. */
		DisplayName: string | null;
		/** The date time when background operation finished execution. */
		EndTime_UtcDateAndTime: Date | null;
		/** The error code of error for background operation in case of failure. */
		ErrorCode: number | null;
		/** The error message of error for background operation in case of failure. */
		ErrorMessage: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** The input parameters that were supplied to start background operation. */
		InputParameters: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the background operation. */
		Name: string | null;
		/** The response of background operation. */
		OutputParameters: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Logical partition id. A logical partition consists of a set of records with same partition id. */
		PartitionId: string | null;
		/** The priority of background operation execution. */
		Priority: number | null;
		/** The number of times background operation was retried. */
		RetryCount: number | null;
		/** The identity of user which was used to execute background operation. */
		RunAs: string | null;
		/** The date time when background operation started execution. */
		StartTime_UtcDateAndTime: Date | null;
		/** The status of background operation. */
		StateCode: OptionSet.backgroundoperation.StateCode | null;
		/** The status reason for background operation. */
		StatusCode: OptionSet.backgroundoperation.StatusCode | null;
		/** Time to live in seconds. */
		TTLInSeconds: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier for entity instances */
			readonly backgroundoperationId: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** The is display name of background operation. */
			readonly DisplayName: string;
			/** The date time when background operation finished execution. */
			readonly EndTime_UtcDateAndTime: string;
			/** The error code of error for background operation in case of failure. */
			readonly ErrorCode: string;
			/** The error message of error for background operation in case of failure. */
			readonly ErrorMessage: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** The input parameters that were supplied to start background operation. */
			readonly InputParameters: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the background operation. */
			readonly Name: string;
			/** The response of background operation. */
			readonly OutputParameters: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Logical partition id. A logical partition consists of a set of records with same partition id. */
			readonly PartitionId: string;
			/** The priority of background operation execution. */
			readonly Priority: string;
			/** The number of times background operation was retried. */
			readonly RetryCount: string;
			/** The identity of user which was used to execute background operation. */
			readonly RunAs: string;
			/** The date time when background operation started execution. */
			readonly StartTime_UtcDateAndTime: string;
			/** The status of background operation. */
			readonly StateCode: string;
			/** The status reason for background operation. */
			readonly StatusCode: string;
			/** Time to live in seconds. */
			readonly TTLInSeconds: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace backgroundoperation {
		enum StateCode {
			/** Completed = 3*/
			Completed = 3,
			/** Locked = 2*/
			Locked = 2,
			/** Ready = 0*/
			Ready = 0
		}
		enum StatusCode {
			/** Canceled = 32*/
			Canceled = 32,
			/** Canceling = 22*/
			Canceling = 22,
			/** Failed = 31*/
			Failed = 31,
			/** In_Progress = 20*/
			In_Progress = 20,
			/** Succeeded = 30*/
			Succeeded = 30,
			/** Waiting_For_Resources = 0*/
			Waiting_For_Resources = 0
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}