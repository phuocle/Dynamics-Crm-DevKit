//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_SCIConversation_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_conversationsystemtag_TagTarget_msd: DevKit.Controls.NavigationItem,
			msdyn_msdyn_conversationtag_TagTarget_m: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_SCIConversation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_SCIConversation_Information */
		Body: DevKit.Formmsdyn_SCIConversation_Information.Body;
		/** The Navigation of form msdyn_SCIConversation_Information */
		Navigation: DevKit.Formmsdyn_SCIConversation_Information.Navigation;
		/** The SidePanes of form msdyn_SCIConversation_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSCI_Conversation_full_page_form {
		interface tab_tab_ci_call_summary_Sections {
			tab_ci_section_call_summary: DevKit.Controls.Section;
		}
		interface tab_tab_ci_call_summary extends DevKit.Controls.ITab {
			Section: tab_tab_ci_call_summary_Sections;
		}
		interface Tabs {
			tab_ci_call_summary: tab_tab_ci_call_summary;
		}
		interface Body {
			Tab: Tabs;
			cc_1691587029808: DevKit.Controls.ActionCards;
			msdyn_Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_conversationsystemtag_TagTarget_msd: DevKit.Controls.NavigationItem,
			msdyn_msdyn_conversationtag_TagTarget_m: DevKit.Controls.NavigationItem
		}
	}
	class FormSCI_Conversation_full_page_form extends DevKit.IForm {
		/**
		* SCI Conversation full page form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SCI_Conversation_full_page_form */
		Body: DevKit.FormSCI_Conversation_full_page_form.Body;
		/** The Navigation of form SCI_Conversation_full_page_form */
		Navigation: DevKit.FormSCI_Conversation_full_page_form.Navigation;
		/** The SidePanes of form SCI_Conversation_full_page_form */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_SCIConversationApi {
		/**
		* DynamicsCrm.DevKit msdyn_SCIConversationApi
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
		msdyn_ChatId: string;
		msdyn_ClientFileName: string;
		msdyn_CommunicationType: OptionSet.msdyn_SCIConversation.msdyn_CommunicationType;
		msdyn_ConsentModeId: OptionSet.msdyn_SCIConversation.msdyn_ConsentModeId;
		msdyn_ConversationAggregatedInsights: string;
		msdyn_ConversationId: string;
		msdyn_ConversationScope: OptionSet.msdyn_SCIConversation.msdyn_ConversationScope;
		msdyn_ConversationStartTime_UtcDateAndTime: Date;
		msdyn_Direction: OptionSet.msdyn_SCIConversation.msdyn_Direction;
		msdyn_Name: string;
		msdyn_OCRecording: string;
		msdyn_relatedactivity_appointment: string;
		msdyn_relatedactivity_phonecall: string;
		/** Unique identifier for entity instances */
		msdyn_SCIConversationId: string;
		msdyn_Transcript: string;
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
		/** Status of the SCI Conversation */
		statecode: OptionSet.msdyn_SCIConversation.statecode;
		/** Reason for the status of the SCI Conversation */
		statuscode: OptionSet.msdyn_SCIConversation.statuscode;
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
			readonly msdyn_ChatId: string;
			readonly msdyn_ClientFileName: string;
			readonly msdyn_CommunicationType: string;
			readonly msdyn_ConsentModeId: string;
			readonly msdyn_ConversationAggregatedInsights: string;
			readonly msdyn_ConversationId: string;
			readonly msdyn_ConversationScope: string;
			readonly msdyn_ConversationStartTime_UtcDateAndTime: string;
			readonly msdyn_Direction: string;
			readonly msdyn_Name: string;
			readonly msdyn_OCRecording: string;
			readonly msdyn_relatedactivity_appointment: string;
			readonly msdyn_relatedactivity_phonecall: string;
			/** Unique identifier for entity instances */
			readonly msdyn_SCIConversationId: string;
			readonly msdyn_Transcript: string;
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
			/** Status of the SCI Conversation */
			readonly statecode: string;
			/** Reason for the status of the SCI Conversation */
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
	namespace msdyn_SCIConversation {
		enum msdyn_CommunicationType {
			/** 1 */
			Meeting,
			/** 0 */
			Phonecall
		}
		enum msdyn_ConsentModeId {
			/** 2 */
			AgentsOnly,
			/** 1 */
			All,
			/** 3 */
			CurrentUserOnly
		}
		enum msdyn_ConversationScope {
			/** 1 */
			External,
			/** 0 */
			Internal
		}
		enum msdyn_Direction {
			/** 1 */
			Incoming,
			/** 0 */
			Outgoing
		}
		enum msdyn_RelatedActivityIdType {
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