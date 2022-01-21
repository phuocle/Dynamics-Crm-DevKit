//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_occustommessagingchannel_Information {
		interface tab__45F9845C_5BC0_4347_9E80_6BAB551CAF30_Sections {
			_45F9845C_5BC0_4347_9E80_6BAB551CAF30_SECTION_2: DevKit.Controls.Section;
			_5A2D173B_E554_4181_B34B_787B6B78850C: DevKit.Controls.Section;
		}
		interface tab_AutomatedMessages_tab_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_GeneralSetting_tab_Sections {
			GeneralSetting_tab_FileAttachment_section: DevKit.Controls.Section;
			GeneralSetting_tab_GeneralInformation_section: DevKit.Controls.Section;
		}
		interface tab_Survey_Sections {
			Survey_section_1: DevKit.Controls.Section;
		}
		interface tab__45F9845C_5BC0_4347_9E80_6BAB551CAF30 extends DevKit.Controls.ITab {
			Section: tab__45F9845C_5BC0_4347_9E80_6BAB551CAF30_Sections;
		}
		interface tab_AutomatedMessages_tab extends DevKit.Controls.ITab {
			Section: tab_AutomatedMessages_tab_Sections;
		}
		interface tab_GeneralSetting_tab extends DevKit.Controls.ITab {
			Section: tab_GeneralSetting_tab_Sections;
		}
		interface tab_Survey extends DevKit.Controls.ITab {
			Section: tab_Survey_Sections;
		}
		interface Tabs {
			_45F9845C_5BC0_4347_9E80_6BAB551CAF30: tab__45F9845C_5BC0_4347_9E80_6BAB551CAF30;
			AutomatedMessages_tab: tab_AutomatedMessages_tab;
			GeneralSetting_tab: tab_GeneralSetting_tab;
			Survey: tab_Survey;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier for Custom channel associated with custom messaging account. */
			msdyn_custombotchannelregistration: DevKit.Controls.Lookup;
			/** Enable file attachments for agents */
			msdyn_enablefileattachmentsforagents: DevKit.Controls.Boolean;
			/** Enable file attachments for customers */
			msdyn_enablefileattachmentsforcustomers: DevKit.Controls.Boolean;
			msdyn_FormsProButton: DevKit.Controls.WebResource;
			/** Unique identifier for Channel associated with the Work Stream. */
			msdyn_liveworkstreamid: DevKit.Controls.Lookup;
			/** The custom messaging channel name. */
			msdyn_name: DevKit.Controls.String;
			/** Channel ID */
			msdyn_occustomchannelid: DevKit.Controls.OptionSet;
			/** The language setting for the custom messaging channel */
			msdyn_ocwidgetlanguage: DevKit.Controls.Lookup;
			/** Lookup to Dynamics 365 Customer Voice survey field */
			msdyn_PostConversationSurvey: DevKit.Controls.Lookup;
			/** To enable or disable post conversation survey */
			msdyn_PostConversationSurveyEnable: DevKit.Controls.Boolean;
			/** Prefix text for survey link message that will be sent to the user. */
			msdyn_PostConversationSurveyMessageText: DevKit.Controls.String;
			/** Mode of the survey to be sent */
			msdyn_PostConversationSurveyMode: DevKit.Controls.OptionSet;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			instance_CustomSystemMessage: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_occustommessagingchannel_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_occustommessagingchannel_Information */
		Body: DevKit.Formmsdyn_occustommessagingchannel_Information.Body;
		/** The Process of form msdyn_occustommessagingchannel_Information */
		Process: DevKit.Formmsdyn_occustommessagingchannel_Information.Process;
		/** The Grid of form msdyn_occustommessagingchannel_Information */
		Grid: DevKit.Formmsdyn_occustommessagingchannel_Information.Grid;
		/** The SidePanes of form msdyn_occustommessagingchannel_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_occustommessagingchannelApi {
		/**
		* DynamicsCrm.DevKit msdyn_occustommessagingchannelApi
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
		/** Unique identifier for Custom channel associated with custom messaging account. */
		msdyn_custombotchannelregistration: DevKit.WebApi.LookupValue;
		/** Enable file attachments for agents */
		msdyn_enablefileattachmentsforagents: DevKit.WebApi.BooleanValue;
		/** Enable file attachments for customers */
		msdyn_enablefileattachmentsforcustomers: DevKit.WebApi.BooleanValue;
		/** Unique identifier for Channel associated with the Work Stream. */
		msdyn_liveworkstreamid: DevKit.WebApi.LookupValue;
		/** The custom messaging channel name. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Channel ID */
		msdyn_occustomchannelid: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for entity instances */
		msdyn_occustommessagingchannelId: DevKit.WebApi.GuidValue;
		/** The language setting for the custom messaging channel */
		msdyn_ocwidgetlanguage: DevKit.WebApi.LookupValue;
		/** Lookup to Dynamics 365 Customer Voice survey field */
		msdyn_PostConversationSurvey: DevKit.WebApi.LookupValue;
		/** To enable or disable post conversation survey */
		msdyn_PostConversationSurveyEnable: DevKit.WebApi.BooleanValue;
		/** Prefix text for survey link message that will be sent to the user. */
		msdyn_PostConversationSurveyMessageText: DevKit.WebApi.StringValue;
		/** Mode of the survey to be sent */
		msdyn_PostConversationSurveyMode: DevKit.WebApi.OptionSetValue;
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
		/** Status of the Custom Messaging Channel */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Custom Messaging Channel */
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
	namespace msdyn_occustommessagingchannel {
		enum msdyn_occustomchannelid {
			/** 192350000 */
			Direct_Line,
			/** 192350001 */
			Kik,
			/** 192350002 */
			Telegram
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}