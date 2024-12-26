//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_attributedataprofileApi {
		/**
		* DynamicsCrm.DevKit msdyn_attributedataprofileApi
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
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		msdyn_attributedataprofile_attributename: string;
		msdyn_attributedataprofile_checkifexactstats: boolean;
		msdyn_attributedataprofile_count: number;
		msdyn_attributedataprofile_errorcount: number;
		msdyn_attributedataprofile_histogramserialized: string;
		msdyn_attributedataprofile_max: number;
		msdyn_attributedataprofile_min: number;
		msdyn_attributedataprofile_missingcount: number;
		msdyn_attributedataprofile_momentskurtosis: number;
		msdyn_attributedataprofile_momentsmean: number;
		msdyn_attributedataprofile_momentsskewness: number;
		msdyn_attributedataprofile_momentsstddeviation: number;
		msdyn_attributedataprofile_momentsvariance: number;
		msdyn_attributedataprofile_pk: string;
		msdyn_attributedataprofile_profilingdate_UtcDateAndTime: Date;
		msdyn_attributedataprofile_qualifiedentityname: string;
		msdyn_attributedataprofile_quantilesp0d1: number;
		msdyn_attributedataprofile_quantilesp1: number;
		msdyn_attributedataprofile_quantilesp25: number;
		msdyn_attributedataprofile_quantilesp5: number;
		msdyn_attributedataprofile_quantilesp50: number;
		msdyn_attributedataprofile_quantilesp75: number;
		msdyn_attributedataprofile_quantilesp95: number;
		msdyn_attributedataprofile_quantilesp99: number;
		msdyn_attributedataprofile_quantilesp99d9: number;
		msdyn_attributedataprofile_topkserialized: string;
		msdyn_attributedataprofile_uniquevaluecount: number;
		/** Unique identifier for entity instances */
		msdyn_attributedataprofileId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the AttributeDataProfile */
		statecode: OptionSet.msdyn_attributedataprofile.statecode;
		/** Reason for the status of the AttributeDataProfile */
		statuscode: OptionSet.msdyn_attributedataprofile.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		readonly FormattedValue: {
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			readonly msdyn_attributedataprofile_attributename: string;
			readonly msdyn_attributedataprofile_checkifexactstats: string;
			readonly msdyn_attributedataprofile_count: string;
			readonly msdyn_attributedataprofile_errorcount: string;
			readonly msdyn_attributedataprofile_histogramserialized: string;
			readonly msdyn_attributedataprofile_max: string;
			readonly msdyn_attributedataprofile_min: string;
			readonly msdyn_attributedataprofile_missingcount: string;
			readonly msdyn_attributedataprofile_momentskurtosis: string;
			readonly msdyn_attributedataprofile_momentsmean: string;
			readonly msdyn_attributedataprofile_momentsskewness: string;
			readonly msdyn_attributedataprofile_momentsstddeviation: string;
			readonly msdyn_attributedataprofile_momentsvariance: string;
			readonly msdyn_attributedataprofile_pk: string;
			readonly msdyn_attributedataprofile_profilingdate_UtcDateAndTime: string;
			readonly msdyn_attributedataprofile_qualifiedentityname: string;
			readonly msdyn_attributedataprofile_quantilesp0d1: string;
			readonly msdyn_attributedataprofile_quantilesp1: string;
			readonly msdyn_attributedataprofile_quantilesp25: string;
			readonly msdyn_attributedataprofile_quantilesp5: string;
			readonly msdyn_attributedataprofile_quantilesp50: string;
			readonly msdyn_attributedataprofile_quantilesp75: string;
			readonly msdyn_attributedataprofile_quantilesp95: string;
			readonly msdyn_attributedataprofile_quantilesp99: string;
			readonly msdyn_attributedataprofile_quantilesp99d9: string;
			readonly msdyn_attributedataprofile_topkserialized: string;
			readonly msdyn_attributedataprofile_uniquevaluecount: string;
			/** Unique identifier for entity instances */
			readonly msdyn_attributedataprofileId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the AttributeDataProfile */
			readonly statecode: string;
			/** Reason for the status of the AttributeDataProfile */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_attributedataprofile {
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