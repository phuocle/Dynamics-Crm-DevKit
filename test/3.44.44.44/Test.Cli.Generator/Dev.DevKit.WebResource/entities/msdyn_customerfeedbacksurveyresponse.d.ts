//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_customerfeedbacksurveyresponseApi {
		/**
		* DynamicsCrm.DevKit msdyn_customerfeedbacksurveyresponseApi
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
		/** Customer feedback survey Id */
		msdyn_customerfeedbacksurveyid: string;
		/** Customer feedback survey invite Id */
		msdyn_customerfeedbacksurveyinviteid: string;
		/** Unique identifier for entity instances */
		msdyn_customerfeedbacksurveyresponseId: string;
		/** Customer feedback survey URL */
		msdyn_customerfeedbacksurveyurl: string;
		/** Other properties */
		msdyn_otherproperties: string;
		/** Regarding object identifier */
		msdyn_regardingobjectid: string;
		/** Survey response */
		msdyn_response: string;
		/** Raw survey response */
		msdyn_response_raw: string;
		/** Customer satisfaction value */
		msdyn_satisfactionmetricvalue: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the customer feedback survey response */
		statecode: OptionSet.msdyn_customerfeedbacksurveyresponse.statecode;
		/** Reason for the status of the customer feedback survey response */
		statuscode: OptionSet.msdyn_customerfeedbacksurveyresponse.statuscode;
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
			/** Customer feedback survey Id */
			readonly msdyn_customerfeedbacksurveyid: string;
			/** Customer feedback survey invite Id */
			readonly msdyn_customerfeedbacksurveyinviteid: string;
			/** Unique identifier for entity instances */
			readonly msdyn_customerfeedbacksurveyresponseId: string;
			/** Customer feedback survey URL */
			readonly msdyn_customerfeedbacksurveyurl: string;
			/** Other properties */
			readonly msdyn_otherproperties: string;
			/** Regarding object identifier */
			readonly msdyn_regardingobjectid: string;
			/** Survey response */
			readonly msdyn_response: string;
			/** Raw survey response */
			readonly msdyn_response_raw: string;
			/** Customer satisfaction value */
			readonly msdyn_satisfactionmetricvalue: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the customer feedback survey response */
			readonly statecode: string;
			/** Reason for the status of the customer feedback survey response */
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
	namespace msdyn_customerfeedbacksurveyresponse {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}