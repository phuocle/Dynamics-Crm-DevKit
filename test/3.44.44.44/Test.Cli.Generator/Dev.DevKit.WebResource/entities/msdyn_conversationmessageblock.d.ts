//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_conversationmessageblock_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_conversationmessageblock_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_conversationmessageblock_Information */
		Body: DevKit.Formmsdyn_conversationmessageblock_Information.Body;
		/** The Navigation of form msdyn_conversationmessageblock_Information */
		Navigation: DevKit.Formmsdyn_conversationmessageblock_Information.Navigation;
		/** The SidePanes of form msdyn_conversationmessageblock_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_conversationmessageblockApi {
		/**
		* DynamicsCrm.DevKit msdyn_conversationmessageblockApi
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
		/** Unique identifier of the user who created the record */
		readonly CreatedBy: string;
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		/** Id of Agent who first responded to customer in this message block */
		msdyn_agentid: string;
		/** Timestamp of first message sent by agent within a message block. Each message block record is a summary of consecutive messages sent by customer and agent’s response to the same */
		msdyn_agentmessagetime_UtcDateOnly: Date;
		/** Agent response session identifier. The session in which agent responded to the customer’s message within this message block */
		msdyn_agentresponsesessionid: string;
		/** Time it took for the agent to respond to the customer from the time agent accepted the session., excluding agent's out of operating hours (OOOH) */
		msdyn_agentresponsetimeadjforoh: number;
		/** Time it took for the agent to respond to the customer from the time agent accepted the session, including agent's out of operating hours (OOOH) */
		msdyn_agentresponsetimenotadjforoh: number;
		/** Unique identifier for entity instances */
		msdyn_conversationmessageblockId: string;
		/** Customer message session identifier. The session in which customer sent the message within this message block */
		msdyn_customermessagesessionid: string;
		/** Customer Message Session timestamp. Timestamp of first customer message within this message block */
		msdyn_customermessagetimestamp_UtcDateOnly: Date;
		/** Number of messages from customer to agent outside the agent's operating hours */
		msdyn_inboundmessagecountoutsideoh: number;
		/** Number of messages from customer to agent within the agent's operating hours */
		msdyn_inboundmessagecountwithinoh: number;
		/** Indicates if this message block contains the first response time for the conversation */
		msdyn_isfirstresponsetime: boolean;
		/** The name of the custom entity */
		msdyn_name: string;
		/** Conversation Id */
		msdyn_ocliveworkitemid: string;
		/** Number of messages from agent to customer outside the agent's operating hours */
		msdyn_outboundmessagecountoutsideoh: number;
		/** Number of messages from agent to customer within the agent's operating hours */
		msdyn_outboundmessagecountwithinoh: number;
		/** Time it took to respond to customer, excluding agent's out of operating hours (OOOH) */
		msdyn_responsetimeadjforoh: number;
		/** Time it took to respond to customer, including agent's out of operating hours */
		msdyn_responsetimenotadjforoh: number;
		/** Date and time that the record was migrated */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record */
		readonly OwningUser: string;
		/** Status of the Conversation Message Blocks */
		statecode: OptionSet.msdyn_conversationmessageblock.statecode;
		/** Reason for the status of the Conversation Message Blocks */
		statuscode: OptionSet.msdyn_conversationmessageblock.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record */
			readonly CreatedBy: string;
			/** Date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			/** Id of Agent who first responded to customer in this message block */
			readonly msdyn_agentid: string;
			/** Timestamp of first message sent by agent within a message block. Each message block record is a summary of consecutive messages sent by customer and agent’s response to the same */
			readonly msdyn_agentmessagetime_UtcDateOnly: string;
			/** Agent response session identifier. The session in which agent responded to the customer’s message within this message block */
			readonly msdyn_agentresponsesessionid: string;
			/** Time it took for the agent to respond to the customer from the time agent accepted the session., excluding agent's out of operating hours (OOOH) */
			readonly msdyn_agentresponsetimeadjforoh: string;
			/** Time it took for the agent to respond to the customer from the time agent accepted the session, including agent's out of operating hours (OOOH) */
			readonly msdyn_agentresponsetimenotadjforoh: string;
			/** Unique identifier for entity instances */
			readonly msdyn_conversationmessageblockId: string;
			/** Customer message session identifier. The session in which customer sent the message within this message block */
			readonly msdyn_customermessagesessionid: string;
			/** Customer Message Session timestamp. Timestamp of first customer message within this message block */
			readonly msdyn_customermessagetimestamp_UtcDateOnly: string;
			/** Number of messages from customer to agent outside the agent's operating hours */
			readonly msdyn_inboundmessagecountoutsideoh: string;
			/** Number of messages from customer to agent within the agent's operating hours */
			readonly msdyn_inboundmessagecountwithinoh: string;
			/** Indicates if this message block contains the first response time for the conversation */
			readonly msdyn_isfirstresponsetime: string;
			/** The name of the custom entity */
			readonly msdyn_name: string;
			/** Conversation Id */
			readonly msdyn_ocliveworkitemid: string;
			/** Number of messages from agent to customer outside the agent's operating hours */
			readonly msdyn_outboundmessagecountoutsideoh: string;
			/** Number of messages from agent to customer within the agent's operating hours */
			readonly msdyn_outboundmessagecountwithinoh: string;
			/** Time it took to respond to customer, excluding agent's out of operating hours (OOOH) */
			readonly msdyn_responsetimeadjforoh: string;
			/** Time it took to respond to customer, including agent's out of operating hours */
			readonly msdyn_responsetimenotadjforoh: string;
			/** Date and time that the record was migrated */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record */
			readonly OwningUser: string;
			/** Status of the Conversation Message Blocks */
			readonly statecode: string;
			/** Reason for the status of the Conversation Message Blocks */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_conversationmessageblock {
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