//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ConversationParticipantInsights_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			msdyn_msdyn_conversationactionitem_Conversation: DevKit.Controls.NavigationItem,
			msdyn_msdyn_conversationparticipantsentiment_Co: DevKit.Controls.NavigationItem,
			msdyn_msdyn_conversationquestion_ConversationPa: DevKit.Controls.NavigationItem,
			msdyn_msdyn_conversationsegmentsentiment_Conver: DevKit.Controls.NavigationItem,
			msdyn_msdyn_conversationsignal_ConversationPart: DevKit.Controls.NavigationItem,
			msdyn_msdyn_conversationsummarysuggestion_Conve: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_ConversationParticipantInsights_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ConversationParticipantInsights_Information */
		Body: DevKit.Formmsdyn_ConversationParticipantInsights_Information.Body;
		/** The Navigation of form msdyn_ConversationParticipantInsights_Information */
		Navigation: DevKit.Formmsdyn_ConversationParticipantInsights_Information.Navigation;
		/** The SidePanes of form msdyn_ConversationParticipantInsights_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ConversationParticipantInsightsApi {
		/**
		* DynamicsCrm.DevKit msdyn_ConversationParticipantInsightsApi
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
		msdyn_AadId: string;
		msdyn_AvgPauseBeforeSpeakingInMS: number;
		msdyn_ChannelIndex: number;
		msdyn_ConversationAggregatedInsights: string;
		/** Unique identifier for conversation participant insights */
		msdyn_ConversationParticipantInsightsId: string;
		msdyn_DisplayName: string;
		msdyn_Email: string;
		msdyn_LongestMonologueInMS: number;
		msdyn_Name: string;
		msdyn_ParticipantId: string;
		msdyn_ParticipantRole: OptionSet.msdyn_ConversationParticipantInsights.msdyn_ParticipantRole;
		msdyn_ParticipationMethod: OptionSet.msdyn_ConversationParticipantInsights.msdyn_ParticipationMethod;
		msdyn_PhoneNumber: string;
		msdyn_SwitchCount: number;
		msdyn_TalkingSpeedWordsPerMin: number;
		msdyn_TalkToListenRatio: number;
		msdyn_TenantId: string;
		msdyn_user_account: string;
		msdyn_user_contact: string;
		msdyn_user_systemuser: string;
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
		/** Status of the ConversationParticipantInsights */
		statecode: OptionSet.msdyn_ConversationParticipantInsights.statecode;
		/** Reason for the status of the ConversationParticipantInsights */
		statuscode: OptionSet.msdyn_ConversationParticipantInsights.statuscode;
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
			readonly msdyn_AadId: string;
			readonly msdyn_AvgPauseBeforeSpeakingInMS: string;
			readonly msdyn_ChannelIndex: string;
			readonly msdyn_ConversationAggregatedInsights: string;
			/** Unique identifier for conversation participant insights */
			readonly msdyn_ConversationParticipantInsightsId: string;
			readonly msdyn_DisplayName: string;
			readonly msdyn_Email: string;
			readonly msdyn_LongestMonologueInMS: string;
			readonly msdyn_Name: string;
			readonly msdyn_ParticipantId: string;
			readonly msdyn_ParticipantRole: string;
			readonly msdyn_ParticipationMethod: string;
			readonly msdyn_PhoneNumber: string;
			readonly msdyn_SwitchCount: string;
			readonly msdyn_TalkingSpeedWordsPerMin: string;
			readonly msdyn_TalkToListenRatio: string;
			readonly msdyn_TenantId: string;
			readonly msdyn_user_account: string;
			readonly msdyn_user_contact: string;
			readonly msdyn_user_systemuser: string;
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
			/** Status of the ConversationParticipantInsights */
			readonly statecode: string;
			/** Reason for the status of the ConversationParticipantInsights */
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
	namespace msdyn_ConversationParticipantInsights {
		enum msdyn_ParticipantRole {
			/** 0 */
			Agent,
			/** 1 */
			Customer
		}
		enum msdyn_ParticipationMethod {
			/** 192350001 */
			Callee,
			/** 192350000 */
			Caller
		}
		enum msdyn_UserIdType {
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