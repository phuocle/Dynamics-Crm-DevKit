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
		interface Navigation {

		}
	}
	class Formbackgroundoperation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form backgroundoperation_Information */
		Body: DevKit.Formbackgroundoperation_Information.Body;
		/** The Navigation of form backgroundoperation_Information */
		Navigation: DevKit.Formbackgroundoperation_Information.Navigation;
		/** The SidePanes of form backgroundoperation_Information */
		SidePanes: DevKit.SidePanes;
	}
	class backgroundoperationApi {
		/**
		* DynamicsCrm.DevKit backgroundoperationApi
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
		/** Unique identifier for entity instances */
		backgroundoperationId: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** The is display name of background operation. */
		DisplayName: string;
		/** The date time when background operation finished execution. */
		EndTime_UtcDateAndTime: Date;
		/** The error code of error for background operation in case of failure. */
		ErrorCode: number;
		/** The error message of error for background operation in case of failure. */
		ErrorMessage: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** The input parameters that were supplied to start background operation. */
		InputParameters: string;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** The name of the background operation. */
		Name: string;
		/** The response of background operation. */
		OutputParameters: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Logical partition id. A logical partition consists of a set of records with same partition id. */
		PartitionId: string;
		/** The priority of background operation execution. */
		Priority: number;
		/** The number of times background operation was retried. */
		RetryCount: number;
		/** The identity of user which was used to execute background operation. */
		RunAs: string;
		/** The date time when background operation started execution. */
		StartTime_UtcDateAndTime: Date;
		/** The status of background operation. */
		StateCode: OptionSet.backgroundoperation.StateCode;
		/** The status reason for background operation. */
		StatusCode: OptionSet.backgroundoperation.StatusCode;
		/** Time to live in seconds. */
		TTLInSeconds: number;
		/** Version Number */
		readonly VersionNumber: number;
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
			/** 3 */
			Completed,
			/** 2 */
			Locked,
			/** 0 */
			Ready
		}
		enum StatusCode {
			/** 32 */
			Canceled,
			/** 22 */
			Canceling,
			/** 31 */
			Failed,
			/** 20 */
			In_Progress,
			/** 30 */
			Succeeded,
			/** 0 */
			Waiting_For_Resources
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.33.33.33'}