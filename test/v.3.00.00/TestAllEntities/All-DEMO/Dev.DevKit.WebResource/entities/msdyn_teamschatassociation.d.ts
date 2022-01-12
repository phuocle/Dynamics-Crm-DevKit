//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_teamschatassociation_Information {
		interface Tabs {
		}
		interface Body {
			/** For internal use only. The name of the custom entity. */
			msdyn_teamschatassociationname: DevKit.Controls.String;
		}
	}
	class Formmsdyn_teamschatassociation_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_teamschatassociation_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_teamschatassociation_Information */
		Body: DevKit.Formmsdyn_teamschatassociation_Information.Body;
		/** The SidePanes of form msdyn_teamschatassociation_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_teamschatassociationApi {
		/**
		* DynamicsCrm.DevKit msdyn_teamschatassociationApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** For internal use only. Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** For internal use only. Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** For internal use only. Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** For internal use only. Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. State of the msdyn_teamschatassociation */
		msdyn_entityrecordstate: DevKit.WebApi.OptionSetValue;
		/** For internal use only. Regarding Object Id */
		msdyn_regardingobjectid: DevKit.WebApi.StringValue;
		/** For internal use only. Regarding Object Type Name */
		msdyn_regardingobjectname: DevKit.WebApi.StringValue;
		/** For internal use only. Unique identifier for entity instances */
		msdyn_teamschatassociationId: DevKit.WebApi.GuidValue;
		/** For internal use only. The name of the custom entity. */
		msdyn_teamschatassociationname: DevKit.WebApi.StringValue;
		/** For internal use only. Teams Chat Id */
		msdyn_teamschatid: DevKit.WebApi.StringValue;
		/** For internal use only. Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. Status of the msdyn_teamschatassociation */
		statecode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. Reason for the status of the msdyn_teamschatassociation */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_teamschatassociation {
		enum msdyn_entityrecordstate {
			/** 0 */
			Associate,
			/** 1 */
			Disassociate
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}