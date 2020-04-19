//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	class WorkflowWaitSubscriptionApi {
		/**
		* DynamicsCrm.DevKit WorkflowWaitSubscriptionApi
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
		/** Unique identifier of the asynchronous operation with which the subscription is associated. */
		AsyncOperationId: DevKit.WebApi.LookupValue;
		/** Unstructured data associated with the subscription. */
		Data: DevKit.WebApi.StringValue;
		/** Id of entity to which workflow instance subscribes. */
		EntityId: DevKit.WebApi.GuidValue;
		/** Name of entity to which workflow instance subscribes. */
		_EntityName: DevKit.WebApi.StringValue;
		/** Indicates whether the entity to which workflow instance subscribes is deleted after the subscription is created. */
		IsDeleted: DevKit.WebApi.BooleanValueReadonly;
		/** Indicates whether the entity to which workflow instance subscribes is modified after the subscription is created. */
		IsModified: DevKit.WebApi.BooleanValueReadonly;
		/** Date and time when the entity was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the business unit that owns the parent workflow instance. */
		OwningBusinessUnit: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the user who owns the parent workflow instance. */
		OwningUser: DevKit.WebApi.GuidValueReadonly;
		/** Attributes on which the subscription is waiting to change. */
		WaitOnAttributeList: DevKit.WebApi.StringValue;
		/** Unique identifier of the subscription. */
		WorkflowWaitSubscriptionId: DevKit.WebApi.GuidValue;
	}
}
declare namespace OptionSet {
	namespace WorkflowWaitSubscription {
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}