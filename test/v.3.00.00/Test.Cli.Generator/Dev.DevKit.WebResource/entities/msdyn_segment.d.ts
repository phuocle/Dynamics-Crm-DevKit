//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_segment_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_entityfieldname: DevKit.Controls.String;
			msdyn_entityfilter: DevKit.Controls.String;
			/** The name of the segment. */
			msdyn_name: DevKit.Controls.String;
			msdyn_objecttypecode: DevKit.Controls.OptionSet;
			msdyn_triggertype: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_segment_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_segment_Information */
		Body: DevKit.Formmsdyn_segment_Information.Body;
		/** The Process of form msdyn_segment_Information */
		Process: DevKit.Formmsdyn_segment_Information.Process;
		/** The SidePanes of form msdyn_segment_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_segmentApi {
		/**
		* DynamicsCrm.DevKit msdyn_segmentApi
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
		msdyn_description: string;
		msdyn_entityfieldname: string;
		msdyn_entityfilter: string;
		/** The name of the segment. */
		msdyn_name: string;
		/** The name of entity on which Segment is created. */
		msdyn_objecttype: string;
		msdyn_objecttypecode: OptionSet.msdyn_segment.msdyn_objecttypecode;
		/** Unique identifier for entity instances */
		msdyn_segmentId: string;
		/** The sequence associated with the segment. */
		msdyn_sequence: string;
		msdyn_triggertype: OptionSet.msdyn_segment.msdyn_triggertype;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the segment */
		statecode: OptionSet.msdyn_segment.statecode;
		/** Reason for the status of the segment */
		statuscode: OptionSet.msdyn_segment.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_segment {
		enum msdyn_objecttypecode {
			/** 4 */
			Lead,
			/** 3 */
			Opportunity,
			/** 5 */
			Other_Entity
		}
		enum msdyn_triggertype {
			/** 0 */
			Entity_Create,
			/** 1 */
			FieldUpdate
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive,
			/** 2 */
			Pause
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive,
			/** 3 */
			Pause
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}