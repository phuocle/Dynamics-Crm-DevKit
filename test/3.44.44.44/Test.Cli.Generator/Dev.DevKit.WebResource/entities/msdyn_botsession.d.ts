//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_botsessionApi {
		/**
		* DynamicsCrm.DevKit msdyn_botsessionApi
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
		/** botId of Chatbot entity for lookup */
		msdyn_botid: string;
		/** Unique identifier for entity instances */
		msdyn_botsessionId: string;
		/** Customer satisfaction (CSAT) scores for sessions in which customers respond to an end-of-session request to take the survey. (1-5) */
		msdyn_csatscore: number;
		/** UTC Date and time when session ended */
		msdyn_endedon_TimezoneDateAndTime: Date;
		/** Boolean which mentions if the PVA session is Engaged  */
		msdyn_isengaged: boolean;
		msdyn_Name: string;
		/** Bot Session Outcome:  None, Resolved or Escalated or Abandoned from option, sessionoutcome */
		msdyn_outcome: OptionSet.msdyn_botsession.msdyn_outcome;
		/** Bot Session Outcome Reason:  NoError, UserError, SystemError, UserExit, AgentTransferWithoutError, AgentTransferRequestedByUser, Resolved, AgentTransferConfiguredByAuthor, or AgentTransferFromQuestionMaxAttempts from option, sessionoutcomereason */
		msdyn_outcomereason: OptionSet.msdyn_botsession.msdyn_outcomereason;
		/** Omnichannel Session Id */
		msdyn_sessionid: string;
		/** A unique identifier for the session per source system. */
		msdyn_sourcesessionid: string;
		/** UTC Date and time when session started */
		msdyn_startedon_TimezoneDateAndTime: Date;
		/** A unique identifier of the topic that triggered the session */
		msdyn_topicid: string;
		/** The display name of the name of the topic that triggered the session */
		msdyn_topicname: string;
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
		/** Status of the botsession */
		statecode: OptionSet.msdyn_botsession.statecode;
		/** Reason for the status of the botsession */
		statuscode: OptionSet.msdyn_botsession.statuscode;
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
			/** botId of Chatbot entity for lookup */
			readonly msdyn_botid: string;
			/** Unique identifier for entity instances */
			readonly msdyn_botsessionId: string;
			/** Customer satisfaction (CSAT) scores for sessions in which customers respond to an end-of-session request to take the survey. (1-5) */
			readonly msdyn_csatscore: string;
			/** UTC Date and time when session ended */
			readonly msdyn_endedon_TimezoneDateAndTime: string;
			/** Boolean which mentions if the PVA session is Engaged  */
			readonly msdyn_isengaged: string;
			readonly msdyn_Name: string;
			/** Bot Session Outcome:  None, Resolved or Escalated or Abandoned from option, sessionoutcome */
			readonly msdyn_outcome: string;
			/** Bot Session Outcome Reason:  NoError, UserError, SystemError, UserExit, AgentTransferWithoutError, AgentTransferRequestedByUser, Resolved, AgentTransferConfiguredByAuthor, or AgentTransferFromQuestionMaxAttempts from option, sessionoutcomereason */
			readonly msdyn_outcomereason: string;
			/** Omnichannel Session Id */
			readonly msdyn_sessionid: string;
			/** A unique identifier for the session per source system. */
			readonly msdyn_sourcesessionid: string;
			/** UTC Date and time when session started */
			readonly msdyn_startedon_TimezoneDateAndTime: string;
			/** A unique identifier of the topic that triggered the session */
			readonly msdyn_topicid: string;
			/** The display name of the name of the topic that triggered the session */
			readonly msdyn_topicname: string;
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
			/** Status of the botsession */
			readonly statecode: string;
			/** Reason for the status of the botsession */
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
	namespace msdyn_botsession {
		enum msdyn_outcome {
			/** 419550003 */
			abandoned,
			/** 419550002 */
			escalated,
			/** 419550000 */
			none,
			/** 419550001 */
			resolved
		}
		enum msdyn_outcomereason {
			/** 419560007 */
			agentTransferConfiguredByAuthor,
			/** 419560008 */
			agentTransferFromQuestionMaxAttempts,
			/** 419560005 */
			agentTransferRequestedByUser,
			/** 419560004 */
			agentTransferWithoutError,
			/** 419560000 */
			noError,
			/** 419560006 */
			resolved,
			/** 419560002 */
			systemError,
			/** 419560001 */
			userError,
			/** 419560003 */
			userExit
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