//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Information about whether the SDK message is automatically transacted. */
		AutoTransact: DevKit.WebApi.BooleanValue;
		/** Identifies where a method will be exposed. 0 - Server, 1 - Client, 2 - both. */
		Availability: DevKit.WebApi.IntegerValue;
		/** If this is a categorized method, this is the name, otherwise None. */
		CategoryName: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the SDK message. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SDK message was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the sdkmessage. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Customization level of the SDK message. */
		CustomizationLevel: DevKit.WebApi.IntegerValueReadonly;
		/** Indicates whether the SDK message should have its requests expanded per primary entity defined in its filters. */
		Expand: DevKit.WebApi.BooleanValue;
		/** Version in which the component is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Information about whether the SDK message is active. */
		IsActive: DevKit.WebApi.BooleanValue;
		/** Information that specifies whether this component is managed. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Indicates whether the SDK message is private. */
		IsPrivate: DevKit.WebApi.BooleanValue;
		/** Identifies whether an SDK message will be ReadOnly or Read Write. false - ReadWrite, true - ReadOnly . */
		IsReadOnly: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		IsValidForExecuteAsync: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who last modified the SDK message. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SDK message was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the sdkmessage. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of the SDK message. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization with which the SDK message is associated. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Unique identifier of the SDK message entity. */
		SdkMessageId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the SDK message. */
		SdkMessageIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Indicates whether the SDK message is a template. */
		Template: DevKit.WebApi.BooleanValue;
		/** For internal use only. */
		ThrottleSettings: DevKit.WebApi.StringValueReadonly;
		/** Number that identifies a specific revision of the SDK message.  */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Whether or not the SDK message can be called from a workflow. */
		WorkflowSdkStepEnabled: DevKit.WebApi.BooleanValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SdkMessage {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true}