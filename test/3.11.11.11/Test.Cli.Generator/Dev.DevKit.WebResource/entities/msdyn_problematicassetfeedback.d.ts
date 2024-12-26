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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_problematicassetfeedback_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_problematicassetfeedback_Information */
		Body: DevKit.Formmsdyn_problematicassetfeedback_Information.Body;
		/** The Process of form msdyn_problematicassetfeedback_Information */
		Process: DevKit.Formmsdyn_problematicassetfeedback_Information.Process;
		/** The SidePanes of form msdyn_problematicassetfeedback_Information */
		SidePanes: DevKit.SidePanes;
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Text value of comments for other feedback */
		msdyn_AdditionalFeedback: string;
		/** Unique identifier for customer asset */
		msdyn_AssetId: string;
		/** The name of the problematic asset feedback. */
		msdyn_name: string;
		/** Optionset value of future days from current */
		msdyn_NumberOfDays: OptionSet.msdyn_problematicassetfeedback.msdyn_NumberOfDays;
		/** Flag value indicating if user like or dislike the asset suggestion for other reasons */
		msdyn_OtherFeedback: OptionSet.msdyn_problematicassetfeedback.msdyn_OtherFeedback;
		/** Flag value indicating user like/dislike the asset to be predicted as problematic asset */
		msdyn_ProblematicAssetFeedback1: OptionSet.msdyn_problematicassetfeedback.msdyn_ProblematicAssetFeedback1;
		/** Unique identifier for entity instances */
		msdyn_problematicassetfeedbackId: string;
		/** Unique identifier for problematic asset */
		msdyn_ProblematicAssetId: string;
		/** Optionset value of suggestion for customer asset */
		msdyn_Suggestion: OptionSet.msdyn_problematicassetfeedback.msdyn_Suggestion;
		/** Flag value indicating if user like/dislike the suggestion for problematic asset */
		msdyn_SuggestionFeedback: OptionSet.msdyn_problematicassetfeedback.msdyn_SuggestionFeedback;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Problematic Asset Feedback */
		statecode: OptionSet.msdyn_problematicassetfeedback.statecode;
		/** Reason for the status of the Problematic Asset Feedback */
		statuscode: OptionSet.msdyn_problematicassetfeedback.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Text value of comments for other feedback */
			readonly msdyn_AdditionalFeedback: string;
			/** Unique identifier for customer asset */
			readonly msdyn_AssetId: string;
			/** The name of the problematic asset feedback. */
			readonly msdyn_name: string;
			/** Optionset value of future days from current */
			readonly msdyn_NumberOfDays: string;
			/** Flag value indicating if user like or dislike the asset suggestion for other reasons */
			readonly msdyn_OtherFeedback: string;
			/** Flag value indicating user like/dislike the asset to be predicted as problematic asset */
			readonly msdyn_ProblematicAssetFeedback1: string;
			/** Unique identifier for entity instances */
			readonly msdyn_problematicassetfeedbackId: string;
			/** Unique identifier for problematic asset */
			readonly msdyn_ProblematicAssetId: string;
			/** Optionset value of suggestion for customer asset */
			readonly msdyn_Suggestion: string;
			/** Flag value indicating if user like/dislike the suggestion for problematic asset */
			readonly msdyn_SuggestionFeedback: string;
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
			/** Status of the Problematic Asset Feedback */
			readonly statecode: string;
			/** Reason for the status of the Problematic Asset Feedback */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
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
		enum msdyn_ProblematicAssetFeedback1 {
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
		enum OwnerIdType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}