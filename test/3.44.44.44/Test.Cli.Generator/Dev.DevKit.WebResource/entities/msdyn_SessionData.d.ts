//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_SessionData_Information {
		interface Tabs {
		}
		interface Body {
			/** Required name field */
			msdyn_Name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_SessionData_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_SessionData_Information */
		Body: DevKit.Formmsdyn_SessionData_Information.Body;
		/** The Navigation of form msdyn_SessionData_Information */
		Navigation: DevKit.Formmsdyn_SessionData_Information.Navigation;
		/** The SidePanes of form msdyn_SessionData_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_SessionDataApi {
		/**
		* DynamicsCrm.DevKit msdyn_SessionDataApi
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
		/** Conversation Identifier */
		msdyn_ConversationId: string;
		/** Custom Attribute 1 */
		msdyn_CustomAttribute1: string;
		/** Custom Attribute 2 */
		msdyn_CustomAttribute2: string;
		/** Custom Attribute 3 */
		msdyn_CustomAttribute3: string;
		/** Custom Attribute 4 */
		msdyn_CustomAttribute4: string;
		/** Custom Attribute 5 */
		msdyn_CustomAttribute5: string;
		/** External System Correlation Id */
		msdyn_ExternalCorrelationId: string;
		/** Required name field */
		msdyn_Name: string;
		/** Unique identifier of the provider session */
		msdyn_ProviderSessionId: string;
		/** Identifier of the queue to which this session belongs to */
		msdyn_QueueId: string;
		/** Name of the queue to which this session belongs to */
		msdyn_QueueName: string;
		/** Additional data related to the session */
		msdyn_SessionAdditionalData: string;
		/** Timestamp at which the agent was assigned to the session */
		msdyn_SessionAgentAssignedTimestamp_UtcDateAndTime: Date;
		/** Channel for the session */
		msdyn_SessionChannel: string;
		/** Timestamp at which the session was created */
		msdyn_SessionCreatedTimestamp_UtcDateAndTime: Date;
		/** Reason for the session creation */
		msdyn_SessionCreationReason: string;
		/** Unique identifier for entity instances */
		msdyn_SessionDataId: string;
		/** Timestamp at which the queue was assigned to the session */
		msdyn_SessionQueueAssignedTimestamp_UtcDateAndTime: Date;
		/** Identifier of the client session */
		msdyn_UCISessionId: string;
		/** Name of the client session */
		msdyn_UCISessionName: string;
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
		/** Status of the SessionData */
		statecode: OptionSet.msdyn_SessionData.statecode;
		/** Reason for the status of the SessionData */
		statuscode: OptionSet.msdyn_SessionData.statuscode;
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
			/** Conversation Identifier */
			readonly msdyn_ConversationId: string;
			/** Custom Attribute 1 */
			readonly msdyn_CustomAttribute1: string;
			/** Custom Attribute 2 */
			readonly msdyn_CustomAttribute2: string;
			/** Custom Attribute 3 */
			readonly msdyn_CustomAttribute3: string;
			/** Custom Attribute 4 */
			readonly msdyn_CustomAttribute4: string;
			/** Custom Attribute 5 */
			readonly msdyn_CustomAttribute5: string;
			/** External System Correlation Id */
			readonly msdyn_ExternalCorrelationId: string;
			/** Required name field */
			readonly msdyn_Name: string;
			/** Unique identifier of the provider session */
			readonly msdyn_ProviderSessionId: string;
			/** Identifier of the queue to which this session belongs to */
			readonly msdyn_QueueId: string;
			/** Name of the queue to which this session belongs to */
			readonly msdyn_QueueName: string;
			/** Additional data related to the session */
			readonly msdyn_SessionAdditionalData: string;
			/** Timestamp at which the agent was assigned to the session */
			readonly msdyn_SessionAgentAssignedTimestamp_UtcDateAndTime: string;
			/** Channel for the session */
			readonly msdyn_SessionChannel: string;
			/** Timestamp at which the session was created */
			readonly msdyn_SessionCreatedTimestamp_UtcDateAndTime: string;
			/** Reason for the session creation */
			readonly msdyn_SessionCreationReason: string;
			/** Unique identifier for entity instances */
			readonly msdyn_SessionDataId: string;
			/** Timestamp at which the queue was assigned to the session */
			readonly msdyn_SessionQueueAssignedTimestamp_UtcDateAndTime: string;
			/** Identifier of the client session */
			readonly msdyn_UCISessionId: string;
			/** Name of the client session */
			readonly msdyn_UCISessionName: string;
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
			/** Status of the SessionData */
			readonly statecode: string;
			/** Reason for the status of the SessionData */
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
	namespace msdyn_SessionData {
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