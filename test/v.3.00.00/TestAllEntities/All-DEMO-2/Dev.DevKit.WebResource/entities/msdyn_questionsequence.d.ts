//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_questionsequence_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Is a mandatory survey question to be answered */
			msdyn_QuestionRequired: DevKit.Controls.Boolean;
			/** Name of the survey question */
			msdyn_SurveyQuestion: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Sequence number for questions to display in the specified order */
			SequenceNumber: DevKit.Controls.Integer;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_questionsequence_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_questionsequence_Information */
		Body: DevKit.Formmsdyn_questionsequence_Information.Body;
		/** The Process of form msdyn_questionsequence_Information */
		Process: DevKit.Formmsdyn_questionsequence_Information.Process;
		/** The SidePanes of form msdyn_questionsequence_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormQuick_Create_Chat_Question {
		interface tab_tab_1_Sections {
			tab_1_column_1_section_1: DevKit.Controls.Section;
			tab_1_column_2_section_1: DevKit.Controls.Section;
			tab_1_column_3_section_1: DevKit.Controls.Section;
		}
		interface tab_tab_1 extends DevKit.Controls.ITab {
			Section: tab_tab_1_Sections;
		}
		interface Tabs {
			tab_1: tab_tab_1;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier for Chat widget associated with Survey question sequence. */
			msdyn_ChatEngagementToChatSequenceId: DevKit.Controls.Lookup;
			/** Type of survey question */
			msdyn_chatquestionnairetype: DevKit.Controls.OptionSet;
			/** Is a mandatory survey question to be answered */
			msdyn_QuestionRequired: DevKit.Controls.Boolean;
			/** Name of the survey question */
			msdyn_SurveyQuestion: DevKit.Controls.Lookup;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Sequence number for questions to display in the specified order */
			SequenceNumber: DevKit.Controls.Integer;
		}
	}
	class FormQuick_Create_Chat_Question extends DevKit.IForm {
		/**
		* Quick Create : Chat Question [Quick Create]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Quick_Create_Chat_Question */
		Body: DevKit.FormQuick_Create_Chat_Question.Body;
	}
	class msdyn_questionsequenceApi {
		/**
		* DynamicsCrm.DevKit msdyn_questionsequenceApi
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
		/** Unique identifier for Chat widget associated with Survey question sequence. */
		msdyn_ChatEngagementToChatSequenceId: DevKit.WebApi.LookupValue;
		/** Type of survey question */
		msdyn_chatquestionnairetype: DevKit.WebApi.OptionSetValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Is a mandatory survey question to be answered */
		msdyn_QuestionRequired: DevKit.WebApi.BooleanValue;
		/** Unique identifier for entity instances */
		msdyn_questionsequenceId: DevKit.WebApi.GuidValue;
		/** Name of the survey question */
		msdyn_SurveyQuestion: DevKit.WebApi.LookupValue;
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
		/** Sequence number for questions to display in the specified order */
		SequenceNumber: DevKit.WebApi.IntegerValue;
		/** Status of the Survey question sequence */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Survey question sequence */
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
	namespace msdyn_questionsequence {
		enum msdyn_chatquestionnairetype {
			/** 192350002 */
			Offline_authenticated,
			/** 192350003 */
			Offline_unauthenticated,
			/** 192350004 */
			Post_chat_authenticated,
			/** 192350005 */
			Post_chat_unauthenticated,
			/** 192350000 */
			Pre_chat_authenticated,
			/** 192350001 */
			Pre_chat_unauthenticated
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}