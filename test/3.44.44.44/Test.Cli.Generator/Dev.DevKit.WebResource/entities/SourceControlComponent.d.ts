//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SourceControlComponentApi {
		/**
		* DynamicsCrm.DevKit SourceControlComponentApi
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
		/** Describes an action after syncing from git. */
		Action: OptionSet.SourceControlComponent.Action;
		/** Component Display Name */
		ComponentDisplayName: string;
		/** Component id of the component */
		ComponentId: string;
		/** The path to the component */
		ComponentPath: string;
		/** Component type of the solution aware components */
		ComponentType: number;
		/** Component type Name of the solution aware components */
		ComponentTypeName: string;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Is component committed to the Git */
		IsCommitted: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		Name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Logical partition id. A logical partition consists of a set of records with same partition id. */
		PartitionId: string;
		/** Solution Component State */
		SolutionComponentState: OptionSet.SourceControlComponent.SolutionComponentState;
		/** Unique identifier for entity instances */
		SourceControlComponentId: string;
		/** Unique identifier of Source Control Component Payload */
		SourceControlComponentPayloadId: string;
		/** Time to live in seconds. */
		TTLInSeconds: number;
		/** Describes a user action to resolve a conflict. */
		UserAction: OptionSet.SourceControlComponent.UserAction;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Describes an action after syncing from git. */
			readonly Action: string;
			/** Component Display Name */
			readonly ComponentDisplayName: string;
			/** Component id of the component */
			readonly ComponentId: string;
			/** The path to the component */
			readonly ComponentPath: string;
			/** Component type of the solution aware components */
			readonly ComponentType: string;
			/** Component type Name of the solution aware components */
			readonly ComponentTypeName: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Is component committed to the Git */
			readonly IsCommitted: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Logical partition id. A logical partition consists of a set of records with same partition id. */
			readonly PartitionId: string;
			/** Solution Component State */
			readonly SolutionComponentState: string;
			/** Unique identifier for entity instances */
			readonly SourceControlComponentId: string;
			/** Unique identifier of Source Control Component Payload */
			readonly SourceControlComponentPayloadId: string;
			/** Time to live in seconds. */
			readonly TTLInSeconds: string;
			/** Describes a user action to resolve a conflict. */
			readonly UserAction: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SourceControlComponent {
		enum Action {
			/** 3 */
			Conflict,
			/** 0 */
			None,
			/** 2 */
			Pull,
			/** 1 */
			Push
		}
		enum SolutionComponentState {
			/** 0 */
			Create,
			/** 2 */
			Delete,
			/** 1 */
			Update
		}
		enum UserAction {
			/** 0 */
			None,
			/** 2 */
			Pull,
			/** 1 */
			Push
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