//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class flowrunApi {
		/**
		* DynamicsCrm.DevKit flowrunApi
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
		/** The resource id of the caller */
		CallingProductResourceId: string | null;
		/** The run id of the caller */
		CallingProductRunId: string | null;
		/** The type of the product that triggered the run */
		CallingProductType: string | null;
		/** The client tracking id of the run */
		ClientTrackingId: string | null;
		/** Copilot Studio Conversation id */
		ConversationId: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Duration of the run in milliseconds */
		DurationInMs: number | null;
		/** The date and time at which the flow run ended. */
		EndTime_UtcDateAndTime: Date | null;
		/** Error code when flow run fails */
		ErrorCode: string | null;
		/** Error message when flow run fails */
		ErrorMessage: string | null;
		/** Unique identifier of flow run */
		flowrunId: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Primary run record indicator */
		IsPrimary: OptionSet.flowrun.IsPrimary | null;
		/** Type of the Power Automate Cloud Flow. */
		ModernFlowType: OptionSet.flowrun.ModernFlowType | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the custom entity. */
		name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Unique identifier of the parent run that triggered this run */
		parentRunId: string | null;
		/** Logical partition id. A logical partition consists of a set of records with same partition id. */
		PartitionId: string | null;
		/** Unique identifier of the runtime resource */
		resourceId: string | null;
		/** The date and time at which the flow run started */
		StartTime_UtcDateAndTime: Date | null;
		/** Status of the flow run */
		Status: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Type of trigger in the flow run */
		TriggerType: string | null;
		/** Time to live in seconds. */
		TTLInSeconds: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/** Unique identifier of the workflow with which the flow run is associated. */
		Workflow: string | null;
		/** Unique identifier of the workflow associated with this run */
		WorkflowId: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** The resource id of the caller */
			readonly CallingProductResourceId: string;
			/** The run id of the caller */
			readonly CallingProductRunId: string;
			/** The type of the product that triggered the run */
			readonly CallingProductType: string;
			/** The client tracking id of the run */
			readonly ClientTrackingId: string;
			/** Copilot Studio Conversation id */
			readonly ConversationId: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Duration of the run in milliseconds */
			readonly DurationInMs: string;
			/** The date and time at which the flow run ended. */
			readonly EndTime_UtcDateAndTime: string;
			/** Error code when flow run fails */
			readonly ErrorCode: string;
			/** Error message when flow run fails */
			readonly ErrorMessage: string;
			/** Unique identifier of flow run */
			readonly flowrunId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Primary run record indicator */
			readonly IsPrimary: string;
			/** Type of the Power Automate Cloud Flow. */
			readonly ModernFlowType: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Unique identifier of the parent run that triggered this run */
			readonly parentRunId: string;
			/** Logical partition id. A logical partition consists of a set of records with same partition id. */
			readonly PartitionId: string;
			/** Unique identifier of the runtime resource */
			readonly resourceId: string;
			/** The date and time at which the flow run started */
			readonly StartTime_UtcDateAndTime: string;
			/** Status of the flow run */
			readonly Status: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Type of trigger in the flow run */
			readonly TriggerType: string;
			/** Time to live in seconds. */
			readonly TTLInSeconds: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
			/** Unique identifier of the workflow with which the flow run is associated. */
			readonly Workflow: string;
			/** Unique identifier of the workflow associated with this run */
			readonly WorkflowId: string;
		}
	}
}
declare namespace OptionSet {
	namespace flowrun {
		enum IsPrimary {
			/** _false = 0*/
			_false = 0,
			/** _true = 1*/
			_true = 1
		}
		enum ModernFlowType {
			/** CopilotStudioFlow = 1*/
			CopilotStudioFlow = 1,
			/** M365CopilotAgentFlow = 2*/
			M365CopilotAgentFlow = 2,
			/** PowerAutomateFlow = 0*/
			PowerAutomateFlow = 0
		}
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