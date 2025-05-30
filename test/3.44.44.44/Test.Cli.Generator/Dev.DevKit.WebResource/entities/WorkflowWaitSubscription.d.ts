﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
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
		/** Unique identifier of the asynchronous operation with which the subscription is associated. */
		AsyncOperationId: string;
		/** Unstructured data associated with the subscription. */
		Data: string;
		/** Id of entity to which workflow instance subscribes. */
		EntityId: string;
		/** Name of entity to which workflow instance subscribes. */
		EntityName2: string;
		/** Indicates whether the entity to which workflow instance subscribes is deleted after the subscription is created. */
		readonly IsDeleted: boolean;
		/** Indicates whether the entity to which workflow instance subscribes is modified after the subscription is created. */
		readonly IsModified: boolean;
		/** Date and time when the entity was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Unique identifier of the business unit that owns the parent workflow instance. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the user who owns the parent workflow instance. */
		readonly OwningUser: string;
		/** Attributes on which the subscription is waiting to change. */
		WaitOnAttributeList: string;
		/** Unique identifier of the subscription. */
		WorkflowWaitSubscriptionId: string;
		readonly FormattedValue: {
			/** Unique identifier of the asynchronous operation with which the subscription is associated. */
			readonly AsyncOperationId: string;
			/** Unstructured data associated with the subscription. */
			readonly Data: string;
			/** Id of entity to which workflow instance subscribes. */
			readonly EntityId: string;
			/** Name of entity to which workflow instance subscribes. */
			readonly EntityName2: string;
			/** Indicates whether the entity to which workflow instance subscribes is deleted after the subscription is created. */
			readonly IsDeleted: string;
			/** Indicates whether the entity to which workflow instance subscribes is modified after the subscription is created. */
			readonly IsModified: string;
			/** Date and time when the entity was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the parent workflow instance. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the user who owns the parent workflow instance. */
			readonly OwningUser: string;
			/** Attributes on which the subscription is waiting to change. */
			readonly WaitOnAttributeList: string;
			/** Unique identifier of the subscription. */
			readonly WorkflowWaitSubscriptionId: string;
		}
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}