//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_workqueuerecord_Information {
		interface Tabs {
		}
		interface Body {
			/** Name of the entity for the related workqueue record. */
			msdyn_primaryname: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_workqueuerecord_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_workqueuerecord_Information */
		Body: DevKit.Formmsdyn_workqueuerecord_Information.Body;
		/** The Process of form msdyn_workqueuerecord_Information */
		Process: DevKit.Formmsdyn_workqueuerecord_Information.Process;
		/** The SidePanes of form msdyn_workqueuerecord_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_workqueuerecordApi {
		/**
		* DynamicsCrm.DevKit msdyn_workqueuerecordApi
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
		/** Display Attributes */
		msdyn_displayattributes: string;
		/** Next activity or Sequence step due time */
		msdyn_duetime_UtcDateAndTime: Date;
		/** Activity End time */
		msdyn_endtime_UtcDateAndTime: Date;
		/** Set Name of Entity. */
		msdyn_entitysetname: string;
		/** Entity Type code for this entity. */
		msdyn_entitytypecode: number;
		/** Display Name of Entity Type. */
		msdyn_entitytypedisplayname: string;
		/** Logical Name of Entity Type. */
		msdyn_entitytypelogicalname: string;
		/** Fields added for performing client side custom filtering. */
		msdyn_filterattributes: string;
		/** Unique identifier of the activity linked to the sequence step */
		msdyn_linkedactivityid: string;
		/** Next action error state for this record. */
		msdyn_nextactionerrorstate: number;
		/** GUID for next action id. */
		msdyn_nextactionid: string;
		/** Next action name from Sequence/Activity. */
		msdyn_nextactionname: string;
		/** Source name for action from Sequence or Activity. */
		msdyn_nextactionsource: string;
		/** Display Name for Next Action Sub Type. */
		msdyn_nextactionsubtype: string;
		/** Activity Name or Sequence step like Email, Phone Call, Task etc. */
		msdyn_nextactiontype: string;
		/** Display Name for Next Action Type. */
		msdyn_nextactiontypedisplayname: string;
		/** Next action wait state for this record. */
		msdyn_nextactionwaitstate: number;
		/** Sequence Operation Parameter. */
		msdyn_operationparameter: string;
		/** Unique ID for entity record. */
		msdyn_primaryentityid: string;
		/** Name of the entity for the related workqueue record. */
		msdyn_primaryname: string;
		/** Priority grade for primary entity. */
		msdyn_prioritygrade: string;
		/** Priority score for primary entity. */
		msdyn_priorityscore: number;
		/** GUID of sequence id. */
		msdyn_sequenceid: string;
		/** Name of the Sequence */
		msdyn_sequencename: string;
		/** GUID of sequence step id. */
		msdyn_sequencestepid: string;
		/** Unique identifier for entity instances. */
		msdyn_workqueuerecordId: string;
	}
}
declare namespace OptionSet {
	namespace msdyn_workqueuerecord {
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