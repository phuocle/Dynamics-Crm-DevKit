//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formconversationtranscript_Information {
		interface Tabs {
		}
		interface Body {
			/** Content of the conversation */
			Content: DevKit.Controls.String;
			/** The actual start time of the conversation (not the time it was written to the data store) */
			ConversationStartTime: DevKit.Controls.DateTime;
			/** Any metadata about the conversation being captured such as the schema version, state, agents, participants, etc if applicable. */
			metadata: DevKit.Controls.String;
			/** The name of the custom entity. */
			name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** This defines the type of schema used for the conversation based on format used by the application writing this conversation (PVA, Omni-Channel, OBI, etc) */
			SchemaType: DevKit.Controls.String;
			/** The version of the conversation transcript content schema that is used. */
			SchemaVersion: DevKit.Controls.String;
		}
	}
	export class Formconversationtranscript_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form conversationtranscript_Information */
		Body: DevKit.Formconversationtranscript_Information.Body;
	}
	export class conversationtranscriptApi {
		/**
		* DynamicsCrm.DevKit conversationtranscriptApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Conversation Transcripts related to customer interactions with a Bot */
		bot_conversationtranscriptId: string | null;
		/** Content of the conversation */
		Content: string | null;
		/** The actual start time of the conversation (not the time it was written to the data store) */
		ConversationStartTime_UtcDateAndTime: Date | null;
		/** Unique identifier for entity instances */
		conversationtranscriptId: string | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Any metadata about the conversation being captured such as the schema version, state, agents, participants, etc if applicable. */
		metadata: string | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
		/** The name of the custom entity. */
		name: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** This defines the type of schema used for the conversation based on format used by the application writing this conversation (PVA, Omni-Channel, OBI, etc) */
		SchemaType: string | null;
		/** The version of the conversation transcript content schema that is used. */
		SchemaVersion: string | null;
		/** Status of the conversationtranscript */
		statecode: OptionSet.conversationtranscript.statecode | null;
		/** Reason for the status of the conversationtranscript */
		statuscode: OptionSet.conversationtranscript.statuscode | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Conversation Transcripts related to customer interactions with a Bot */
			readonly bot_conversationtranscriptId: string;
			/** Content of the conversation */
			readonly Content: string;
			/** The actual start time of the conversation (not the time it was written to the data store) */
			readonly ConversationStartTime_UtcDateAndTime: string;
			/** Unique identifier for entity instances */
			readonly conversationtranscriptId: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Any metadata about the conversation being captured such as the schema version, state, agents, participants, etc if applicable. */
			readonly metadata: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** The name of the custom entity. */
			readonly name: string;
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
			/** This defines the type of schema used for the conversation based on format used by the application writing this conversation (PVA, Omni-Channel, OBI, etc) */
			readonly SchemaType: string;
			/** The version of the conversation transcript content schema that is used. */
			readonly SchemaVersion: string;
			/** Status of the conversationtranscript */
			readonly statecode: string;
			/** Reason for the status of the conversationtranscript */
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
	namespace conversationtranscript {
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}