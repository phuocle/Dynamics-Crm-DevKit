//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormEntity_link_chat_configuration {
		interface Tabs {
		}
		interface Body {
			/** The name of link team configuration. */
			msdyn_Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormEntity_link_chat_configuration extends DevKit.IForm {
		/**
		* Entity link chat configuration [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Entity_link_chat_configuration */
		Body: DevKit.FormEntity_link_chat_configuration.Body;
		/** The Process of form Entity_link_chat_configuration */
		Process: DevKit.FormEntity_link_chat_configuration.Process;
		/** The SidePanes of form Entity_link_chat_configuration */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_entitylinkchatconfigurationApi {
		/**
		* DynamicsCrm.DevKit msdyn_entitylinkchatconfigurationApi
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
		readonly ComponentState: OptionSet.msdyn_entitylinkchatconfiguration.ComponentState;
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
		/** The view id of the selected context view. */
		msdyn_ContextViewId: string;
		/** Value of Enable AI introduction message */
		msdyn_EnableAiIntroductionMessage: boolean;
		/** Value of Enable AI suggestion */
		msdyn_EnableAiSuggestion: boolean;
		/** Enable auto name chats */
		msdyn_EnableAutoNameChats: boolean;
		/** Enable kickoff message */
		msdyn_EnableKickoffMessage: boolean;
		/** Enable logic-based suggestion */
		msdyn_EnableLogicBasedSuggestion: boolean;
		/** Unique identifier for entity instances */
		msdyn_entitylinkchatconfigurationId: string;
		/** The entity setup for link team configuration. */
		msdyn_EntityType: string;
		/** The name of link team configuration. */
		msdyn_Name: string;
		/** Value of recent chat linker can unlink */
		msdyn_RecentChatLinkerCanUnlink: boolean;
		/** Value of record owner can unlink */
		msdyn_RecordOwnerCanUnlink: boolean;
		/** Unique Name for the entity. */
		msdyn_UniqueName: string;
		/** Value of User can join chat */
		msdyn_UserCanJoinChat: boolean;
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
		/** Status of the Entitylink chat configuration */
		statecode: OptionSet.msdyn_entitylinkchatconfiguration.statecode;
		/** Reason for the status of the Entitylink chat configuration */
		statuscode: OptionSet.msdyn_entitylinkchatconfiguration.statuscode;
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
			/** The view id of the selected context view. */
			readonly msdyn_ContextViewId: string;
			/** Value of Enable AI introduction message */
			readonly msdyn_EnableAiIntroductionMessage: string;
			/** Value of Enable AI suggestion */
			readonly msdyn_EnableAiSuggestion: string;
			/** Enable auto name chats */
			readonly msdyn_EnableAutoNameChats: string;
			/** Enable kickoff message */
			readonly msdyn_EnableKickoffMessage: string;
			/** Enable logic-based suggestion */
			readonly msdyn_EnableLogicBasedSuggestion: string;
			/** Unique identifier for entity instances */
			readonly msdyn_entitylinkchatconfigurationId: string;
			/** The entity setup for link team configuration. */
			readonly msdyn_EntityType: string;
			/** The name of link team configuration. */
			readonly msdyn_Name: string;
			/** Value of recent chat linker can unlink */
			readonly msdyn_RecentChatLinkerCanUnlink: string;
			/** Value of record owner can unlink */
			readonly msdyn_RecordOwnerCanUnlink: string;
			/** Unique Name for the entity. */
			readonly msdyn_UniqueName: string;
			/** Value of User can join chat */
			readonly msdyn_UserCanJoinChat: string;
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
			/** Status of the Entitylink chat configuration */
			readonly statecode: string;
			/** Reason for the status of the Entitylink chat configuration */
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
	namespace msdyn_entitylinkchatconfiguration {
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