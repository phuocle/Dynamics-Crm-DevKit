//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_conversationsummaryinteraction_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_conversationsummaryinteraction_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_conversationsummaryinteraction_Information */
		Body: DevKit.Formmsdyn_conversationsummaryinteraction_Information.Body;
		/** The Navigation of form msdyn_conversationsummaryinteraction_Information */
		Navigation: DevKit.Formmsdyn_conversationsummaryinteraction_Information.Navigation;
		/** The SidePanes of form msdyn_conversationsummaryinteraction_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_conversationsummaryinteractionApi {
		/**
		* DynamicsCrm.DevKit msdyn_conversationsummaryinteractionApi
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
		/** Defines the conversation that the interaction occurred on */
		msdyn_conversationid: string;
		/** Unique identifier for entity instances */
		msdyn_conversationsummaryinteractionId: string;
		/** Provides the feedback verbatim provided by agent, when they identified the summary as unhelpful */
		msdyn_feedbackverbatim: string;
		/** Indicates the helpful signal provided by agent */
		msdyn_helpful: boolean;
		/** Provides additional interaction context */
		msdyn_interactioncontext: string;
		/** Provides the issue feedback verbatim provided by agent, when they identified the summary as unhelpful */
		msdyn_issuefeedbackverbatim: string;
		/** Indicates the issue summary being inaccurate signal provided by agent, when they identified the summary as unhelpful */
		msdyn_issueinaccurate: boolean;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Provides the resolution feedback verbatim provided by agent, when they identified the summary as unhelpful */
		msdyn_resolutionfeedbackverbatim: string;
		/** Indicates the resolution summary being inaccurate signal provided by agent, when they identified the summary as unhelpful */
		msdyn_resolutioninaccurate: boolean;
		/** Provides the summary that the agent interacted on */
		msdyn_summary: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Conversation Summary Interaction */
		statecode: OptionSet.msdyn_conversationsummaryinteraction.statecode;
		/** Reason for the status of the Conversation Summary Interaction */
		statuscode: OptionSet.msdyn_conversationsummaryinteraction.statuscode;
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
			/** Defines the conversation that the interaction occurred on */
			readonly msdyn_conversationid: string;
			/** Unique identifier for entity instances */
			readonly msdyn_conversationsummaryinteractionId: string;
			/** Provides the feedback verbatim provided by agent, when they identified the summary as unhelpful */
			readonly msdyn_feedbackverbatim: string;
			/** Indicates the helpful signal provided by agent */
			readonly msdyn_helpful: string;
			/** Provides additional interaction context */
			readonly msdyn_interactioncontext: string;
			/** Provides the issue feedback verbatim provided by agent, when they identified the summary as unhelpful */
			readonly msdyn_issuefeedbackverbatim: string;
			/** Indicates the issue summary being inaccurate signal provided by agent, when they identified the summary as unhelpful */
			readonly msdyn_issueinaccurate: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Provides the resolution feedback verbatim provided by agent, when they identified the summary as unhelpful */
			readonly msdyn_resolutionfeedbackverbatim: string;
			/** Indicates the resolution summary being inaccurate signal provided by agent, when they identified the summary as unhelpful */
			readonly msdyn_resolutioninaccurate: string;
			/** Provides the summary that the agent interacted on */
			readonly msdyn_summary: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Conversation Summary Interaction */
			readonly statecode: string;
			/** Reason for the status of the Conversation Summary Interaction */
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
	namespace msdyn_conversationsummaryinteraction {
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