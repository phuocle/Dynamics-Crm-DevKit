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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_teamschatassociation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_teamschatassociation_Information */
		Body: DevKit.Formmsdyn_teamschatassociation_Information.Body;
		/** The Process of form msdyn_teamschatassociation_Information */
		Process: DevKit.Formmsdyn_teamschatassociation_Information.Process;
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
		/** For internal use only. Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** For internal use only. Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** For internal use only. Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** For internal use only. Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** For internal use only. Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** For internal use only. Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** For internal use only. State of the msdyn_teamschatassociation */
		msdyn_entityrecordstate: OptionSet.msdyn_teamschatassociation.msdyn_entityrecordstate;
		/** For internal use only. Regarding Object Id */
		msdyn_regardingobjectid: string;
		/** For internal use only. Regarding Object Type Name */
		msdyn_regardingobjectname: string;
		/** For internal use only. Unique identifier for entity instances */
		msdyn_teamschatassociationId: string;
		/** For internal use only. The name of the custom entity. */
		msdyn_teamschatassociationname: string;
		/** For internal use only. Teams Chat Id */
		msdyn_teamschatid: string;
		/** For internal use only. Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. Status of the msdyn_teamschatassociation */
		statecode: OptionSet.msdyn_teamschatassociation.statecode;
		/** For internal use only. Reason for the status of the msdyn_teamschatassociation */
		statuscode: OptionSet.msdyn_teamschatassociation.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** For internal use only. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** For internal use only. Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** For internal use only. Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** For internal use only. Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** For internal use only. Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** For internal use only. Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** For internal use only. State of the msdyn_teamschatassociation */
			readonly msdyn_entityrecordstate: string;
			/** For internal use only. Regarding Object Id */
			readonly msdyn_regardingobjectid: string;
			/** For internal use only. Regarding Object Type Name */
			readonly msdyn_regardingobjectname: string;
			/** For internal use only. Unique identifier for entity instances */
			readonly msdyn_teamschatassociationId: string;
			/** For internal use only. The name of the custom entity. */
			readonly msdyn_teamschatassociationname: string;
			/** For internal use only. Teams Chat Id */
			readonly msdyn_teamschatid: string;
			/** For internal use only. Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. Status of the msdyn_teamschatassociation */
			readonly statecode: string;
			/** For internal use only. Reason for the status of the msdyn_teamschatassociation */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** For internal use only. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}