//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocgooglebusinessmessagesagentaccount_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_ocgooglebusinessmessagesagentaccount_msdyn_ocbotchannelregistration_ocgbmagentaccount: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_ocgooglebusinessmessagesagentaccount_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocgooglebusinessmessagesagentaccount_Information */
		Body: DevKit.Formmsdyn_ocgooglebusinessmessagesagentaccount_Information.Body;
		/** The Navigation of form msdyn_ocgooglebusinessmessagesagentaccount_Information */
		Navigation: DevKit.Formmsdyn_ocgooglebusinessmessagesagentaccount_Information.Navigation;
		/** The SidePanes of form msdyn_ocgooglebusinessmessagesagentaccount_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ocgooglebusinessmessagesagentaccountApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocgooglebusinessmessagesagentaccountApi
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
		/** Agent account client token of the Google's Business Messages agent account. */
		msdyn_agentaccountclienttoken: string;
		/** Agent ID of the Google's Business Messages agent account. */
		msdyn_agentid: string;
		/** Brand ID of the Google's Business Messages agent account. */
		msdyn_brandid: string;
		/** Enable agent override of the Google's Business Messages agent account. */
		msdyn_enableagentoverride: boolean;
		/** Enable file attachments for agent of the Google's Business Messages agent account. */
		msdyn_enablefileattachmentsforagents: boolean;
		/** Enable file attachments for customer of the Google's Business Messages agent account. */
		msdyn_enablefileattachmentsforcustomers: boolean;
		/** Google's Business Messages callback URL of the Google's Business Messages agent account. */
		msdyn_googlebusinessmessagescallbackurl: string;
		/** Live work stream ID of the Google's Business Messages agent account. */
		msdyn_liveworkstreamid: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Google's Business Messages partner account ID of the agent account */
		msdyn_ocgbmpartneraccount: string;
		/** Unique identifier for entity instances */
		msdyn_ocgooglebusinessmessagesagentaccountId: string;
		/** Widget language of the Google's Business Messages agent account. */
		msdyn_ocwidgetlanguage: string;
		/** Post conversation survey of the Google's Business Messages agent account. */
		msdyn_PostConversationSurvey: string;
		/** Enable or disable bot survey */
		msdyn_PostConversationSurveyBotSurvey: boolean;
		/** Prefix text for survey link message that will be sent to the user. */
		msdyn_PostConversationSurveyBotSurveyMessageText: string;
		/** Mode of the survey to be sent */
		msdyn_PostConversationSurveyBotSurveyMode: OptionSet.msdyn_ocgooglebusinessmessagesagentaccount.msdyn_PostConversationSurveyBotSurveyMode;
		/** Post conversation survey enable of the Google's Business Messages agent account. */
		msdyn_PostConversationSurveyEnable: boolean;
		/** Post conversation survey message text of the Google's Business Messages agent account. */
		msdyn_PostConversationSurveyMessageText: string;
		/** Post conversation survey mode of the Google's Business Messages agent account. */
		msdyn_PostConversationSurveyMode: OptionSet.msdyn_ocgooglebusinessmessagesagentaccount.msdyn_PostConversationSurveyMode;
		/** Lookup to Dynamics 365 Customer Voice survey field */
		msdyn_PostConversationSurveySeparateBotSurvey: string;
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
		/** Status of the Google's Business Messages agent account */
		statecode: OptionSet.msdyn_ocgooglebusinessmessagesagentaccount.statecode;
		/** Reason for the status of the Google's Business Messages agent account */
		statuscode: OptionSet.msdyn_ocgooglebusinessmessagesagentaccount.statuscode;
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
			/** Agent account client token of the Google's Business Messages agent account. */
			readonly msdyn_agentaccountclienttoken: string;
			/** Agent ID of the Google's Business Messages agent account. */
			readonly msdyn_agentid: string;
			/** Brand ID of the Google's Business Messages agent account. */
			readonly msdyn_brandid: string;
			/** Enable agent override of the Google's Business Messages agent account. */
			readonly msdyn_enableagentoverride: string;
			/** Enable file attachments for agent of the Google's Business Messages agent account. */
			readonly msdyn_enablefileattachmentsforagents: string;
			/** Enable file attachments for customer of the Google's Business Messages agent account. */
			readonly msdyn_enablefileattachmentsforcustomers: string;
			/** Google's Business Messages callback URL of the Google's Business Messages agent account. */
			readonly msdyn_googlebusinessmessagescallbackurl: string;
			/** Live work stream ID of the Google's Business Messages agent account. */
			readonly msdyn_liveworkstreamid: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Google's Business Messages partner account ID of the agent account */
			readonly msdyn_ocgbmpartneraccount: string;
			/** Unique identifier for entity instances */
			readonly msdyn_ocgooglebusinessmessagesagentaccountId: string;
			/** Widget language of the Google's Business Messages agent account. */
			readonly msdyn_ocwidgetlanguage: string;
			/** Post conversation survey of the Google's Business Messages agent account. */
			readonly msdyn_PostConversationSurvey: string;
			/** Enable or disable bot survey */
			readonly msdyn_PostConversationSurveyBotSurvey: string;
			/** Prefix text for survey link message that will be sent to the user. */
			readonly msdyn_PostConversationSurveyBotSurveyMessageText: string;
			/** Mode of the survey to be sent */
			readonly msdyn_PostConversationSurveyBotSurveyMode: string;
			/** Post conversation survey enable of the Google's Business Messages agent account. */
			readonly msdyn_PostConversationSurveyEnable: string;
			/** Post conversation survey message text of the Google's Business Messages agent account. */
			readonly msdyn_PostConversationSurveyMessageText: string;
			/** Post conversation survey mode of the Google's Business Messages agent account. */
			readonly msdyn_PostConversationSurveyMode: string;
			/** Lookup to Dynamics 365 Customer Voice survey field */
			readonly msdyn_PostConversationSurveySeparateBotSurvey: string;
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
			/** Status of the Google's Business Messages agent account */
			readonly statecode: string;
			/** Reason for the status of the Google's Business Messages agent account */
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
	namespace msdyn_ocgooglebusinessmessagesagentaccount {
		enum msdyn_PostConversationSurveyBotSurveyMode {
			/** 192350000 */
			Insert_survey_in_conversation,
			/** 192350001 */
			Send_survey_link_to_conversation
		}
		enum msdyn_PostConversationSurveyMode {
			/** 192350000 */
			Insert_survey_in_conversation,
			/** 192350001 */
			Send_survey_link_to_conversation
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