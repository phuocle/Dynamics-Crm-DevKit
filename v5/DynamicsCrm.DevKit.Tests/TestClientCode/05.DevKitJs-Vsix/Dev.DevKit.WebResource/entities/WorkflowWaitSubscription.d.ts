//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class WorkflowWaitSubscriptionApi {
		/**
		* DynamicsCrm.DevKit WorkflowWaitSubscriptionApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Unique identifier of the asynchronous operation with which the subscription is associated. */
		AsyncOperationId: string | null;
		/** Unstructured data associated with the subscription. */
		Data: string | null;
		/** Id of entity to which workflow instance subscribes. */
		EntityId: string | null;
		/** Name of entity to which workflow instance subscribes. */
		EntityName2: string | null;
		/** Indicates whether the entity to which workflow instance subscribes is deleted after the subscription is created. */
		readonly IsDeleted: boolean | null;
		/** Indicates whether the entity to which workflow instance subscribes is modified after the subscription is created. */
		readonly IsModified: boolean | null;
		/** Date and time when the entity was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the parent workflow instance. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the user who owns the parent workflow instance. */
		readonly OwningUser: string | null;
		/** Attributes on which the subscription is waiting to change. */
		WaitOnAttributeList: string | null;
		/** Unique identifier of the subscription. */
		WorkflowWaitSubscriptionId: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}