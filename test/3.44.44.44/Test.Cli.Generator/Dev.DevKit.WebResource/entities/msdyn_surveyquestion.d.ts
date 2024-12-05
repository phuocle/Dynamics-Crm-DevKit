//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_surveyquestion_Information {
		interface Tabs {
		}
		interface Body {
			/** Type of survey answer */
			msdyn_AnswerType: DevKit.Controls.OptionSet;
			/** Unique identifier for Work stream associated with Chat Question. */
			msdyn_LiveWorkStreamToChatQuestion: DevKit.Controls.Lookup;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Help text for the survey question */
			msdyn_PlaceholderText: DevKit.Controls.String;
			/** Question text */
			msdyn_QuestionText: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_surveyquestion_msdyn_chatquestionnaireresponseitem: DevKit.Controls.NavigationItem,
			msdyn_msdyn_surveyquestion_msdyn_questionsequence_SurveyQuestion: DevKit.Controls.NavigationItem,
			msdyn_surveyquestion_msdyn_chatansweroption: DevKit.Controls.NavigationItem,
			msdyn_surveyquestion_msdyn_localizedsurveyques: DevKit.Controls.NavigationItem
		}
		interface Grid {
			AnswerOptions: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_surveyquestion_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_surveyquestion_Information */
		Body: DevKit.Formmsdyn_surveyquestion_Information.Body;
		/** The Navigation of form msdyn_surveyquestion_Information */
		Navigation: DevKit.Formmsdyn_surveyquestion_Information.Navigation;
		/** The Grid of form msdyn_surveyquestion_Information */
		Grid: DevKit.Formmsdyn_surveyquestion_Information.Grid;
		/** The SidePanes of form msdyn_surveyquestion_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_surveyquestionApi {
		/**
		* DynamicsCrm.DevKit msdyn_surveyquestionApi
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
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_surveyquestion.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Type of survey answer */
		msdyn_AnswerType: OptionSet.msdyn_surveyquestion.msdyn_AnswerType;
		/** Unique identifier for Work stream associated with Chat Question. */
		msdyn_LiveWorkStreamToChatQuestion: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Help text for the survey question */
		msdyn_PlaceholderText: string;
		/** Question text */
		msdyn_QuestionText: string;
		/** Rating scale of the question */
		msdyn_RatingScale: number;
		/** Unique identifier for entity instances */
		msdyn_surveyquestionId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
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
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the Survey Question */
		statecode: OptionSet.msdyn_surveyquestion.statecode;
		/** Reason for the status of the Survey Question */
		statuscode: OptionSet.msdyn_surveyquestion.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Type of survey answer */
			readonly msdyn_AnswerType: string;
			/** Unique identifier for Work stream associated with Chat Question. */
			readonly msdyn_LiveWorkStreamToChatQuestion: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Help text for the survey question */
			readonly msdyn_PlaceholderText: string;
			/** Question text */
			readonly msdyn_QuestionText: string;
			/** Rating scale of the question */
			readonly msdyn_RatingScale: string;
			/** Unique identifier for entity instances */
			readonly msdyn_surveyquestionId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
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
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the Survey Question */
			readonly statecode: string;
			/** Reason for the status of the Survey Question */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
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
	namespace msdyn_surveyquestion {
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
		enum msdyn_AnswerType {
			/** 192350001 */
			Multiple_lines,
			/** 192350002 */
			Option_set,
			/** 192350003 */
			Rating,
			/** 192350000 */
			Single_line,
			/** 192350004 */
			User_Consent
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}