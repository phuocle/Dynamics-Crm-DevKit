//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class SdkMessageApi {
		/**
		* DynamicsCrm.DevKit SdkMessageApi
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
		/** Information about whether the SDK message is automatically transacted. */
		AutoTransact: boolean;
		/** Identifies where a method will be exposed. 0 - Server, 1 - Client, 2 - both. */
		Availability: number;
		/** If this is a categorized method, this is the name, otherwise None. */
		CategoryName: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SdkMessage.ComponentState;
		/** Unique identifier of the user who created the SDK message. */
		readonly CreatedBy: string;
		/** Date and time when the SDK message was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the sdkmessage. */
		readonly CreatedOnBehalfBy: string;
		/** Customization level of the SDK message. */
		readonly CustomizationLevel: number;
		/** Name of the privilege that allows execution of the SDK message */
		ExecutePrivilegeName: string;
		/** Indicates whether the SDK message should have its requests expanded per primary entity defined in its filters. */
		Expand: boolean;
		/** Version in which the component is introduced. */
		IntroducedVersion: string;
		/** Information about whether the SDK message is active. */
		IsActive: boolean;
		/** Information that specifies whether this component is managed. */
		readonly IsManaged: boolean;
		/** Indicates whether the SDK message is private. */
		IsPrivate: boolean;
		/** Identifies whether an SDK message will be ReadOnly or Read Write. false - ReadWrite, true - ReadOnly . */
		IsReadOnly: boolean;
		/** For internal use only. */
		readonly IsValidForExecuteAsync: boolean;
		/** Unique identifier of the user who last modified the SDK message. */
		readonly ModifiedBy: string;
		/** Date and time when the SDK message was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the sdkmessage. */
		readonly ModifiedOnBehalfBy: string;
		/** Name of the SDK message. */
		Name: string;
		/** Unique identifier of the organization with which the SDK message is associated. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Unique identifier of the SDK message entity. */
		SdkMessageId: string;
		/** Unique identifier of the SDK message. */
		readonly SdkMessageIdUnique: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Indicates whether the SDK message is a template. */
		Template: boolean;
		/** For internal use only. */
		readonly ThrottleSettings: string;
		/** Number that identifies a specific revision of the SDK message.  */
		readonly VersionNumber: number;
		/** Whether or not the SDK message can be called from a workflow. */
		readonly WorkflowSdkStepEnabled: boolean;
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
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