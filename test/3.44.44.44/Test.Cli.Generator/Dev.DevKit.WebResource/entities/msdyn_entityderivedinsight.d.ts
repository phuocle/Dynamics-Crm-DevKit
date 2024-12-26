//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_entityderivedinsight_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_Name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_entityderivedinsight_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_entityderivedinsight_Information */
		Body: DevKit.Formmsdyn_entityderivedinsight_Information.Body;
		/** The Navigation of form msdyn_entityderivedinsight_Information */
		Navigation: DevKit.Formmsdyn_entityderivedinsight_Information.Navigation;
		/** The SidePanes of form msdyn_entityderivedinsight_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_entityderivedinsightApi {
		/**
		* DynamicsCrm.DevKit msdyn_entityderivedinsightApi
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
		/** Data format version */
		msdyn_dataformatversion: string;
		/** Unique identifier for entity instances */
		msdyn_entityderivedinsightId: string;
		/** Entity record id */
		msdyn_entityrecordid: string;
		/** Entity type name */
		msdyn_entitytypename: string;
		/** External CRM org id */
		msdyn_externalcrmorgid: string;
		/** Insights data */
		msdyn_insightsdata: string;
		msdyn_Name: string;
		/** Processed timestamp */
		msdyn_processedtimestamp_TimezoneDateAndTime: Date;
		/** Processing retry count */
		msdyn_processingretrycount: number;
		/** Status */
		msdyn_status: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Entity derived insights */
		statecode: OptionSet.msdyn_entityderivedinsight.statecode;
		/** Reason for the status of the Entity derived insights */
		statuscode: OptionSet.msdyn_entityderivedinsight.statuscode;
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
			/** Data format version */
			readonly msdyn_dataformatversion: string;
			/** Unique identifier for entity instances */
			readonly msdyn_entityderivedinsightId: string;
			/** Entity record id */
			readonly msdyn_entityrecordid: string;
			/** Entity type name */
			readonly msdyn_entitytypename: string;
			/** External CRM org id */
			readonly msdyn_externalcrmorgid: string;
			/** Insights data */
			readonly msdyn_insightsdata: string;
			readonly msdyn_Name: string;
			/** Processed timestamp */
			readonly msdyn_processedtimestamp_TimezoneDateAndTime: string;
			/** Processing retry count */
			readonly msdyn_processingretrycount: string;
			/** Status */
			readonly msdyn_status: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Entity derived insights */
			readonly statecode: string;
			/** Reason for the status of the Entity derived insights */
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
	namespace msdyn_entityderivedinsight {
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