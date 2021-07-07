//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_problematicassetfeedback_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the problematic asset feedback. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
	}
	class Formmsdyn_problematicassetfeedback_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_problematicassetfeedback_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_problematicassetfeedback_Information */
		Body: DevKit.Formmsdyn_problematicassetfeedback_Information.Body;
	}
	class msdyn_problematicassetfeedbackApi {
		/**
		* DynamicsCrm.DevKit msdyn_problematicassetfeedbackApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Text value of comments for other feedback */
		msdyn_AdditionalFeedback: DevKit.WebApi.StringValue;
		/** Unique identifier for customer asset */
		msdyn_AssetId: DevKit.WebApi.StringValue;
		/** The name of the problematic asset feedback. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Optionset value of future days from current */
		msdyn_NumberOfDays: DevKit.WebApi.OptionSetValue;
		/** Flag value indicating if user like or dislike the asset suggestion for other reasons */
		msdyn_OtherFeedback: DevKit.WebApi.OptionSetValue;
		/** Flag value indicating user like/dislike the asset to be predicted as problematic asset */
		msdyn_ProblematicAssetFeedback: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for entity instances */
		msdyn_problematicassetfeedbackId: DevKit.WebApi.GuidValue;
		/** Unique identifier for problematic asset */
		msdyn_ProblematicAssetId: DevKit.WebApi.StringValue;
		/** Optionset value of suggestion for customer asset */
		msdyn_Suggestion: DevKit.WebApi.OptionSetValue;
		/** Flag value indicating if user like/dislike the suggestion for problematic asset */
		msdyn_SuggestionFeedback: DevKit.WebApi.OptionSetValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Status of the Problematic Asset Feedback */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Problematic Asset Feedback */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_problematicassetfeedback {
		enum msdyn_NumberOfDays {
			/** 192350000 */
			_0,
			/** 192350001 */
			_15,
			/** 192350002 */
			_30,
			/** 192350003 */
			_60,
			/** 192350004 */
			_90
		}
		enum msdyn_OtherFeedback {
			/** 700610001 */
			Dislike,
			/** 700610000 */
			Like
		}
		enum msdyn_ProblematicAssetFeedback {
			/** 700610001 */
			Dislike,
			/** 700610000 */
			Like
		}
		enum msdyn_Suggestion {
			/** 700610002 */
			None,
			/** 700610000 */
			Repair,
			/** 700610001 */
			Replace
		}
		enum msdyn_SuggestionFeedback {
			/** 700610001 */
			Dislike,
			/** 700610000 */
			Like
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