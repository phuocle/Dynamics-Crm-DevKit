//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_smartassistconfig_Information {
		interface Tabs {
		}
		interface Body {
			/** Icon for the suggestion group container */
			msdyn_IconURL: DevKit.Controls.String;
			/** This field denotes whether config is default. */
			msdyn_isDefault: DevKit.Controls.Boolean;
			/** This number denotes the maximum number of suggestions that can be displayed in smart assist control */
			msdyn_maxsuggestioncount: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Order in which the entities are grouped in smart assist. */
			msdyn_Order: DevKit.Controls.Integer;
			/** This will be used as a title for entity suggestion panel */
			msdyn_Suggestioncontainertitle: DevKit.Controls.String;
			/** Unique name of the suggestion control configuration entity. if suggestion type is adaptive card, then it should refer to the associated adaptive configuration. */
			msdyn_SuggestionControlConfigUniquename: DevKit.Controls.String;
			/** Denotes the control type for suggestions, (e.g) Adaptive card */
			msdyn_Suggestioncontroltype: DevKit.Controls.OptionSet;
			/** Provide the class name of Suggestion provider */
			msdyn_SuggestionProvider: DevKit.Controls.String;
			/** Denotes the type of suggestions like Similar case or KB article suggestion */
			msdyn_Suggestiontype: DevKit.Controls.OptionSet;
			/** Suggestion Webresource which brings smart assist actions or api to retrieve suggestions */
			msdyn_SuggestionWebresourceURL: DevKit.Controls.String;
			/** Unique Name for the entity. */
			msdyn_UniqueName: DevKit.Controls.String;
		}
	}
	class Formmsdyn_smartassistconfig_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_smartassistconfig_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_smartassistconfig_Information */
		Body: DevKit.Formmsdyn_smartassistconfig_Information.Body;
	}
	class msdyn_smartassistconfigApi {
		/**
		* DynamicsCrm.DevKit msdyn_smartassistconfigApi
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
		/** For internal use only. */
		ComponentIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Indicates whether the solution component is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Icon for the suggestion group container */
		msdyn_IconURL: DevKit.WebApi.StringValue;
		/** This field denotes whether config is default. */
		msdyn_isDefault: DevKit.WebApi.BooleanValue;
		/** This number denotes the maximum number of suggestions that can be displayed in smart assist control */
		msdyn_maxsuggestioncount: DevKit.WebApi.IntegerValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Order in which the entities are grouped in smart assist. */
		msdyn_Order: DevKit.WebApi.IntegerValue;
		/** Unique identifier for entity instances */
		msdyn_smartassistconfigId: DevKit.WebApi.GuidValue;
		/** Suggestion source entity logical name. */
		msdyn_SourceEntityName: DevKit.WebApi.StringValue;
		/** This will be used as a title for entity suggestion panel */
		msdyn_Suggestioncontainertitle: DevKit.WebApi.StringValue;
		/** Unique name of the suggestion control configuration entity. if suggestion type is adaptive card, then it should refer to the associated adaptive configuration. */
		msdyn_SuggestionControlConfigUniquename: DevKit.WebApi.StringValue;
		/** Denotes the control type for suggestions, (e.g) Adaptive card */
		msdyn_Suggestioncontroltype: DevKit.WebApi.OptionSetValue;
		/** Provide the class name of Suggestion provider */
		msdyn_SuggestionProvider: DevKit.WebApi.StringValue;
		/** Denotes the type of suggestions like Similar case or KB article suggestion */
		msdyn_Suggestiontype: DevKit.WebApi.OptionSetValue;
		/** Suggestion Webresource which brings smart assist actions or api to retrieve suggestions */
		msdyn_SuggestionWebresourceURL: DevKit.WebApi.StringValue;
		/** Unique Name for the entity. */
		msdyn_UniqueName: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		OverwriteTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Status of the Smartassist configuration */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Smartassist configuration */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_smartassistconfig {
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
		enum msdyn_Suggestioncontroltype {
			/** 192360000 */
			Adaptive_Card
		}
		enum msdyn_Suggestiontype {
			/** 192360002 */
			Bot_Suggestion,
			/** 192360000 */
			Knowledge_Article_Suggestion,
			/** 192360001 */
			Similar_Case_Suggestion
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
			Inactive
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}