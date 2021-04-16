//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	class AppModuleApi {
		/**
		* DynamicsCrm.DevKit AppModuleApi
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
		/** Unique identifier for entity instances */
		AppModuleId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the App Module used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
		AppModuleIdUnique: DevKit.WebApi.GuidValue;
		/** App Module Version */
		AppModuleVersion: DevKit.WebApi.StringValue;
		/** App Module Xml Managed */
		AppModuleXmlManaged: DevKit.WebApi.StringValue;
		/** Client Type such as Web or UCI */
		ClientType: DevKit.WebApi.IntegerValue;
		/** For internal use only */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Contains configuration XML */
		ConfigXML: DevKit.WebApi.StringValue;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Description for entity */
		Description: DevKit.WebApi.StringValue;
		/** App Module Descriptor */
		Descriptor: DevKit.WebApi.StringValueReadonly;
		/** App Module Event Handlers */
		EventHandlers: DevKit.WebApi.StringValue;
		/** Form Factor */
		FormFactor: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Version in which the similarity rule is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Is Default */
		IsDefault: DevKit.WebApi.BooleanValue;
		/** Is Featured */
		IsFeatured: DevKit.WebApi.BooleanValue;
		/** Is Managed */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Name of App Module */
		Name: DevKit.WebApi.StringValue;
		/** App navigation type */
		NavigationType: DevKit.WebApi.OptionSetValue;
		/** The client that this app is optimized for */
		OptimizedFor: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the app. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Internal use only */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Date and time when the record was published. */
		PublishedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the publisher. */
		PublisherId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the Model-driven App */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Model-driven App */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Unique Name of App Module */
		UniqueName: DevKit.WebApi.StringValue;
		/** Contains URL */
		URL: DevKit.WebApi.StringValue;
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Unique identifier of the Web Resource */
		WebResourceId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the Web Resource as Welcome Page Id */
		WelcomePageId: DevKit.WebApi.GuidValue;
	}
}
declare namespace OptionSet {
	namespace AppModule {
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
		enum NavigationType {
			/** 0 */
			Single_session,
			/** 1 */
			Multi_session
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive,
			/** 3 */
			Deleted
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}