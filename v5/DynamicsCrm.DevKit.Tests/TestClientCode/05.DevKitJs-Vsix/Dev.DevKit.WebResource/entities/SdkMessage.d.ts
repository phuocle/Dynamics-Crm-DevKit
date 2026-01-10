//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class SdkMessageApi {
		/**
		* DynamicsCrm.DevKit SdkMessageApi
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
		/** Information about whether the SDK message is automatically transacted. */
		AutoTransact: boolean | null;
		/** Identifies where a method will be exposed. 0 - Server, 1 - Client, 2 - both. */
		Availability: number | null;
		/** If this is a categorized method, this is the name, otherwise None. */
		CategoryName: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SdkMessage.ComponentState | null;
		/** Unique identifier of the user who created the SDK message. */
		readonly CreatedBy: string | null;
		/** Date and time when the SDK message was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the sdkmessage. */
		readonly CreatedOnBehalfBy: string | null;
		/** Customization level of the SDK message. */
		readonly CustomizationLevel: number | null;
		/** Name of the privilege that allows execution of the SDK message */
		ExecutePrivilegeName: string | null;
		/** Indicates whether the SDK message should have its requests expanded per primary entity defined in its filters. */
		Expand: boolean | null;
		/** Version in which the component is introduced. */
		IntroducedVersion: string | null;
		/** Information about whether the SDK message is active. */
		IsActive: boolean | null;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean | null;
		/** Indicates whether the SDK message is private. */
		IsPrivate: boolean | null;
		/** Identifies whether an SDK message will be ReadOnly or Read Write. false - ReadWrite, true - ReadOnly . */
		IsReadOnly: boolean | null;
		/** For internal use only. */
		readonly IsValidForExecuteAsync: boolean | null;
		/** Unique identifier of the user who last modified the SDK message. */
		readonly ModifiedBy: string | null;
		/** Date and time when the SDK message was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who last modified the sdkmessage. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the SDK message. */
		Name: string | null;
		/** Unique identifier of the organization with which the SDK message is associated. */
		readonly OrganizationId: string | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Unique identifier of the SDK message entity. */
		SdkMessageId: string | null;
		/** Unique identifier of the SDK message. */
		readonly SdkMessageIdUnique: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Indicates whether the SDK message is a template. */
		Template: boolean | null;
		/** For internal use only. */
		readonly ThrottleSettings: string | null;
		/** Number that identifies a specific revision of the SDK message.  */
		readonly VersionNumber: number | null;
		/** Whether or not the SDK message can be called from a workflow. */
		readonly WorkflowSdkStepEnabled: boolean | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Information about whether the SDK message is automatically transacted. */
			readonly AutoTransact: string;
			/** Identifies where a method will be exposed. 0 - Server, 1 - Client, 2 - both. */
			readonly Availability: string;
			/** If this is a categorized method, this is the name, otherwise None. */
			readonly CategoryName: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the SDK message. */
			readonly CreatedBy: string;
			/** Date and time when the SDK message was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the sdkmessage. */
			readonly CreatedOnBehalfBy: string;
			/** Customization level of the SDK message. */
			readonly CustomizationLevel: string;
			/** Name of the privilege that allows execution of the SDK message */
			readonly ExecutePrivilegeName: string;
			/** Indicates whether the SDK message should have its requests expanded per primary entity defined in its filters. */
			readonly Expand: string;
			/** Version in which the component is introduced. */
			readonly IntroducedVersion: string;
			/** Information about whether the SDK message is active. */
			readonly IsActive: string;
			/** Information that specifies whether this component is managed. */
			readonly IsManaged: string;
			/** Indicates whether the SDK message is private. */
			readonly IsPrivate: string;
			/** Identifies whether an SDK message will be ReadOnly or Read Write. false - ReadWrite, true - ReadOnly . */
			readonly IsReadOnly: string;
			/** For internal use only. */
			readonly IsValidForExecuteAsync: string;
			/** Unique identifier of the user who last modified the SDK message. */
			readonly ModifiedBy: string;
			/** Date and time when the SDK message was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the sdkmessage. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the SDK message. */
			readonly Name: string;
			/** Unique identifier of the organization with which the SDK message is associated. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Unique identifier of the SDK message entity. */
			readonly SdkMessageId: string;
			/** Unique identifier of the SDK message. */
			readonly SdkMessageIdUnique: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Indicates whether the SDK message is a template. */
			readonly Template: string;
			/** For internal use only. */
			readonly ThrottleSettings: string;
			/** Number that identifies a specific revision of the SDK message.  */
			readonly VersionNumber: string;
			/** Whether or not the SDK message can be called from a workflow. */
			readonly WorkflowSdkStepEnabled: string;
		}
	}
}
declare namespace OptionSet {
	namespace SdkMessage {
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
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