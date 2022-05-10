//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class IntegrationStatusApi {
		/**
		* DynamicsCrm.DevKit IntegrationStatusApi
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
		/** Unique identifier of the user who created the integration status. */
		readonly CreatedBy: string;
		/** Date and time when the integration status was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the integrationstatus. */
		readonly CreatedOnBehalfBy: string;
		/** For internal use only. */
		IntegrationEntryId: string;
		/** Unique identifier of the user who last modified the integration status. */
		readonly ModifiedBy: string;
		/** Date and time when the integration status was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the integrationstatus. */
		readonly ModifiedOnBehalfBy: string;
		/** For internal use only. */
		readonly ObjectId: string;
		/** Unique identifier of the organization associated with the integration status. */
		readonly OrganizationId: string;
		/** Status of the integration. */
		StateCode: OptionSet.IntegrationStatus.StateCode;
		/** For internal use only. */
		StateDescription: string;
		/** Reason for the status of the integration. */
		StatusCode: OptionSet.IntegrationStatus.StatusCode;
		/** For internal use only. */
		StatusDescription: string;
		/** For internal use only. */
		readonly SystemName: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the integration status. */
			readonly CreatedBy: string;
			/** Date and time when the integration status was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the integrationstatus. */
			readonly CreatedOnBehalfBy: string;
			/** For internal use only. */
			readonly IntegrationEntryId: string;
			/** Unique identifier of the user who last modified the integration status. */
			readonly ModifiedBy: string;
			/** Date and time when the integration status was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the integrationstatus. */
			readonly ModifiedOnBehalfBy: string;
			/** For internal use only. */
			readonly ObjectId: string;
			/** Unique identifier of the organization associated with the integration status. */
			readonly OrganizationId: string;
			/** Status of the integration. */
			readonly StateCode: string;
			/** For internal use only. */
			readonly StateDescription: string;
			/** Reason for the status of the integration. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly StatusDescription: string;
			/** For internal use only. */
			readonly SystemName: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace IntegrationStatus {
		enum ObjectTypeCode {
		}
		enum StateCode {
		}
		enum StatusCode {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}