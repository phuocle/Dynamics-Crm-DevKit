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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Next activity or Sequence step due time */
		msdyn_duetime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Activity End time */
		msdyn_endtime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Set Name of Entity. */
		msdyn_entitysetname: DevKit.WebApi.StringValue;
		/** Entity Type code for this entity. */
		msdyn_entitytypecode: DevKit.WebApi.IntegerValue;
		/** Display Name of Entity Type. */
		msdyn_entitytypedisplayname: DevKit.WebApi.StringValue;
		/** Logical Name of Entity Type. */
		msdyn_entitytypelogicalname: DevKit.WebApi.StringValue;
		/** Next action error state for this record. */
		msdyn_nextactionerrorstate: DevKit.WebApi.IntegerValue;
		/** GUID for next action id. */
		msdyn_nextactionid: DevKit.WebApi.GuidValue;
		/** Next action name from Sequence/Activity. */
		msdyn_nextactionname: DevKit.WebApi.StringValue;
		/** Source name for action from Sequence or Activity. */
		msdyn_nextactionsource: DevKit.WebApi.StringValue;
		/** Display Name for Next Action Sub Type. */
		msdyn_nextactionsubtype: DevKit.WebApi.StringValue;
		/** Activity Name or Sequence step like Email, Phone Call, Task etc. */
		msdyn_nextactiontype: DevKit.WebApi.StringValue;
		/** Display Name for Next Action Type. */
		msdyn_nextactiontypedisplayname: DevKit.WebApi.StringValue;
		/** Next action wait state for this record. */
		msdyn_nextactionwaitstate: DevKit.WebApi.IntegerValue;
		/** Sequence Operation Parameter. */
		msdyn_operationparameter: DevKit.WebApi.StringValue;
		/** Unique ID for entity record. */
		msdyn_primaryentityid: DevKit.WebApi.GuidValue;
		/** Name of the entity for the related workqueue record. */
		msdyn_primaryname: DevKit.WebApi.StringValue;
		/** Priority grade for primary entity. */
		msdyn_prioritygrade: DevKit.WebApi.StringValue;
		/** Priority score for primary entity. */
		msdyn_priorityscore: DevKit.WebApi.DecimalValue;
		/** GUID of sequence id. */
		msdyn_sequenceid: DevKit.WebApi.GuidValue;
		/** Name of the Sequence */
		msdyn_sequencename: DevKit.WebApi.StringValue;
		/** GUID of sequence step id. */
		msdyn_sequencestepid: DevKit.WebApi.GuidValue;
		/** Unique identifier for entity instances. */
		msdyn_workqueuerecordId: DevKit.WebApi.GuidValue;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}