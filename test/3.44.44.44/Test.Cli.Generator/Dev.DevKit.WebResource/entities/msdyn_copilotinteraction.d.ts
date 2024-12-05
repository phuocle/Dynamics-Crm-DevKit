//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_copilotinteraction_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_copilotinteraction_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_copilotinteraction_Information */
		Body: DevKit.Formmsdyn_copilotinteraction_Information.Body;
		/** The Navigation of form msdyn_copilotinteraction_Information */
		Navigation: DevKit.Formmsdyn_copilotinteraction_Information.Navigation;
		/** The SidePanes of form msdyn_copilotinteraction_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_copilotinteractionApi {
		/**
		* DynamicsCrm.DevKit msdyn_copilotinteractionApi
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
		/** Utc Timestamp from client */
		msdyn_clienttimestamp_UtcDateAndTime: Date;
		/** Unique identifier for entity instances */
		msdyn_copilotinteractionId: string;
		/** Stores additional context about the interaction */
		msdyn_interactioncontext: string;
		/** Links to the interaction data record */
		msdyn_interactiondataid: string;
		/** Id of the record to which this interaction is associated */
		msdyn_interactionforid: string;
		/** LogicalName of the record to which this interaction is associated */
		msdyn_interactionforlogicalname: string;
		/** Identifies the type of interaction */
		msdyn_interactiontype: OptionSet.msdyn_copilotinteraction.msdyn_interactiontype;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Unique identifier that ties the request across layers */
		msdyn_scenariorequestid: string;
		/** Identifies the type of scenario */
		msdyn_scenariotype: OptionSet.msdyn_copilotinteraction.msdyn_scenariotype;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Copilot Interaction */
		statecode: OptionSet.msdyn_copilotinteraction.statecode;
		/** Reason for the status of the Copilot Interaction */
		statuscode: OptionSet.msdyn_copilotinteraction.statuscode;
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
			/** Utc Timestamp from client */
			readonly msdyn_clienttimestamp_UtcDateAndTime: string;
			/** Unique identifier for entity instances */
			readonly msdyn_copilotinteractionId: string;
			/** Stores additional context about the interaction */
			readonly msdyn_interactioncontext: string;
			/** Links to the interaction data record */
			readonly msdyn_interactiondataid: string;
			/** Id of the record to which this interaction is associated */
			readonly msdyn_interactionforid: string;
			/** LogicalName of the record to which this interaction is associated */
			readonly msdyn_interactionforlogicalname: string;
			/** Identifies the type of interaction */
			readonly msdyn_interactiontype: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Unique identifier that ties the request across layers */
			readonly msdyn_scenariorequestid: string;
			/** Identifies the type of scenario */
			readonly msdyn_scenariotype: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Copilot Interaction */
			readonly statecode: string;
			/** Reason for the status of the Copilot Interaction */
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
	namespace msdyn_copilotinteraction {
		enum msdyn_interactiontype {
			/** 100230312 */
			AcceptSuggestion,
			/** 100230310 */
			ArticleProposed,
			/** 100230309 */
			Available,
			/** 100230304 */
			Copy,
			/** 100230307 */
			EditAndSend,
			/** 100230314 */
			ExpandTile,
			/** 100230305 */
			Generated,
			/** 100230308 */
			ManualCopy,
			/** 100230311 */
			MarkAsReviewed,
			/** 100230315 */
			RequestSolution,
			/** 100230306 */
			SendToCustomer,
			/** 100230303 */
			ThumbsClear,
			/** 100230302 */
			ThumbsDown,
			/** 100230301 */
			ThumbsUp,
			/** 100230313 */
			ViewHistory
		}
		enum msdyn_scenariotype {
			/** 100230201 */
			Ask_a_question,
			/** 100230205 */
			Case_summary,
			/** 100230216 */
			Chat_Assist,
			/** 100230210 */
			Collaborate_with_SMEs,
			/** 100230204 */
			Copilot,
			/** 100230209 */
			Custom_entity_summary,
			/** 100230211 */
			Inline_Copilot_for_email,
			/** 100230213 */
			Intent_Assist,
			/** 100230208 */
			Knowledge_draft_assist,
			/** 100230214 */
			knowledge_harvest,
			/** 100230202 */
			Live_conversation_response,
			/** 100230206 */
			Live_conversation_summary,
			/** 100230215 */
			Resolution_notes,
			/** 100230207 */
			Timeline_highlights,
			/** 100230212 */
			Timeline_next_best_actions,
			/** 100230203 */
			Write_an_email
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