//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_octeamschannelconfig_Information {
		interface tab__D00F867F_54A4_4975_86DA_301A4B056901_Sections {
			Section_Step_1: DevKit.Controls.Section;
			Section_Step_2: DevKit.Controls.Section;
			Section_Step_3: DevKit.Controls.Section;
		}
		interface tab_AutomatedMessages_tab_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_GeneralSetting_tab_Sections {
			GeneralSetting_tab_fileattachment_section: DevKit.Controls.Section;
			GeneralSetting_tab_GeneralInformation_section: DevKit.Controls.Section;
		}
		interface tab_Survey_Sections {
			Survey_section_1: DevKit.Controls.Section;
		}
		interface tab__D00F867F_54A4_4975_86DA_301A4B056901 extends DevKit.Controls.ITab {
			Section: tab__D00F867F_54A4_4975_86DA_301A4B056901_Sections;
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
			_D00F867F_54A4_4975_86DA_301A4B056901: tab__D00F867F_54A4_4975_86DA_301A4B056901;
			AutomatedMessages_tab: tab_AutomatedMessages_tab;
			GeneralSetting_tab: tab_GeneralSetting_tab;
			Survey: tab_Survey;
		}
		interface Body {
			Tab: Tabs;
			/** Bot ID is of Teams Channel */
			msdyn_botid: DevKit.Controls.String;
			/** Option set to enable or disable attachments for agents */
			msdyn_enablefileattachmentsforagents: DevKit.Controls.Boolean;
			/** Option set to enable or disable attachments for customers */
			msdyn_enablefileattachmentsforcustomers: DevKit.Controls.Boolean;
			msdyn_FormsProButton: DevKit.Controls.WebResource;
			/** Work Stream */
			msdyn_liveworkstreamid: DevKit.Controls.Lookup;
			/** The language setting for the Teams account */
			msdyn_ocwidgetlanguage: DevKit.Controls.Lookup;
			/** Lookup to Dynamics 365 Customer Voice survey field */
			msdyn_PostConversationSurvey: DevKit.Controls.Lookup;
			/** To enable or disable post conversation survey */
			msdyn_PostConversationSurveyEnable: DevKit.Controls.Boolean;
			/** Prefix text for survey link message that will be sent to the user. */
			msdyn_PostConversationSurveyMessageText: DevKit.Controls.String;
			/** Mode of the survey to be sent */
			msdyn_PostConversationSurveyMode: DevKit.Controls.OptionSet;
			/** Teams App Name or Teams Channel */
			msdyn_teamsappname: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			WebResource_postconversationsurveydisclaimer: DevKit.Controls.WebResource;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			instance_CustomSystemMessage: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_octeamschannelconfig_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_octeamschannelconfig_Information */
		Body: DevKit.Formmsdyn_octeamschannelconfig_Information.Body;
		/** The Process of form msdyn_octeamschannelconfig_Information */
		Process: DevKit.Formmsdyn_octeamschannelconfig_Information.Process;
		/** The Grid of form msdyn_octeamschannelconfig_Information */
		Grid: DevKit.Formmsdyn_octeamschannelconfig_Information.Grid;
		/** The SidePanes of form msdyn_octeamschannelconfig_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_octeamschannelconfigApi {
		/**
		* DynamicsCrm.DevKit msdyn_octeamschannelconfigApi
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
		/** Bot ID is of Teams Channel */
		msdyn_botid: string;
		/** Option set to enable or disable attachments for agents */
		msdyn_enablefileattachmentsforagents: boolean;
		/** Option set to enable or disable attachments for customers */
		msdyn_enablefileattachmentsforcustomers: boolean;
		/** Work Stream */
		msdyn_liveworkstreamid: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier for entity instances */
		msdyn_octeamschannelconfigId: string;
		/** The language setting for the Teams account */
		msdyn_ocwidgetlanguage: string;
		/** Lookup to Dynamics 365 Customer Voice survey field */
		msdyn_PostConversationSurvey: string;
		/** To enable or disable post conversation survey */
		msdyn_PostConversationSurveyEnable: boolean;
		/** Prefix text for survey link message that will be sent to the user. */
		msdyn_PostConversationSurveyMessageText: string;
		/** Mode of the survey to be sent */
		msdyn_PostConversationSurveyMode: OptionSet.msdyn_octeamschannelconfig.msdyn_PostConversationSurveyMode;
		/** Teams App Name or Teams Channel */
		msdyn_teamsappname: string;
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
		/** Status of the Teams Channel */
		statecode: OptionSet.msdyn_octeamschannelconfig.statecode;
		/** Reason for the status of the Teams Channel */
		statuscode: OptionSet.msdyn_octeamschannelconfig.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_octeamschannelconfig {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}