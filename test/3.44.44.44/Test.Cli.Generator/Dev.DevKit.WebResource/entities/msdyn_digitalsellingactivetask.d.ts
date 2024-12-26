//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_digitalsellingactivetask_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_digitalsellingactivetask_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_digitalsellingactivetask_Information */
		Body: DevKit.Formmsdyn_digitalsellingactivetask_Information.Body;
		/** The Navigation of form msdyn_digitalsellingactivetask_Information */
		Navigation: DevKit.Formmsdyn_digitalsellingactivetask_Information.Navigation;
		/** The SidePanes of form msdyn_digitalsellingactivetask_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_digitalsellingactivetaskApi {
		/**
		* DynamicsCrm.DevKit msdyn_digitalsellingactivetaskApi
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
		msdyn_correlationid: string;
		msdyn_currentstate: OptionSet.msdyn_digitalsellingactivetask.msdyn_currentstate;
		msdyn_customapiname: string;
		/** Unique identifier for entity instances */
		msdyn_digitalsellingactivetaskId: string;
		msdyn_entitytype: string;
		msdyn_inputparameters: string;
		msdyn_inputtime_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Record id of given entity type */
		msdyn_recordid: string;
		msdyn_retentiontimeindays: number;
		msdyn_tasktype: OptionSet.msdyn_digitalsellingactivetask.msdyn_tasktype;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the DigitalSellingActiveTask */
		statecode: OptionSet.msdyn_digitalsellingactivetask.statecode;
		/** Reason for the status of the DigitalSellingActiveTask */
		statuscode: OptionSet.msdyn_digitalsellingactivetask.statuscode;
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
			readonly msdyn_correlationid: string;
			readonly msdyn_currentstate: string;
			readonly msdyn_customapiname: string;
			/** Unique identifier for entity instances */
			readonly msdyn_digitalsellingactivetaskId: string;
			readonly msdyn_entitytype: string;
			readonly msdyn_inputparameters: string;
			readonly msdyn_inputtime_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Record id of given entity type */
			readonly msdyn_recordid: string;
			readonly msdyn_retentiontimeindays: string;
			readonly msdyn_tasktype: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the DigitalSellingActiveTask */
			readonly statecode: string;
			/** Reason for the status of the DigitalSellingActiveTask */
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
	namespace msdyn_digitalsellingactivetask {
		enum msdyn_currentstate {
			/** 2 */
			In_Progress,
			/** 1 */
			New
		}
		enum msdyn_tasktype {
			/** 3 */
			CapacityDecrement,
			/** 2 */
			CapacityIncrement,
			/** 6 */
			ForceRoute,
			/** 0 */
			None,
			/** 4 */
			ReAssignment,
			/** 5 */
			ReSegmentation,
			/** 1 */
			Segmentation
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}