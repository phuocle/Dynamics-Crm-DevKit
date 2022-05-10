//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_liveconversation_Information {
		interface Tabs {
		}
		interface Body {
			/** Subject associated with the conversation record */
			msdyn_subject: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the conversation record. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_liveconversation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_liveconversation_Information */
		Body: DevKit.Formmsdyn_liveconversation_Information.Body;
		/** The Process of form msdyn_liveconversation_Information */
		Process: DevKit.Formmsdyn_liveconversation_Information.Process;
		/** The SidePanes of form msdyn_liveconversation_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormOngoing_Conversation_Main_Form {
		interface Tabs {
		}
		interface Body {
			/** Subject associated with the conversation record */
			msdyn_subject: DevKit.Controls.String;
			/** Unique identifier of the user or team who owns the conversation record. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormOngoing_Conversation_Main_Form extends DevKit.IForm {
		/**
		* Ongoing Conversation Main Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Ongoing_Conversation_Main_Form */
		Body: DevKit.FormOngoing_Conversation_Main_Form.Body;
		/** The Process of form Ongoing_Conversation_Main_Form */
		Process: DevKit.FormOngoing_Conversation_Main_Form.Process;
		/** The SidePanes of form Ongoing_Conversation_Main_Form */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_liveconversationApi {
		/**
		* DynamicsCrm.DevKit msdyn_liveconversationApi
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
		/** Unique identifier of the user who created the Ongoing Conversation. */
		readonly CreatedBy: string;
		/** Date and time when the Ongoing Conversation was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the Ongoing Conversation. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of user who last modified the Ongoing Conversation. */
		readonly ModifiedBy: string;
		/** Date and time when Ongoing Conversation was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the Ongoing Conversation. */
		readonly ModifiedOnBehalfBy: string;
		/** Date and time when last agent was assigned to the conversation */
		msdyn_activeagentassignedon_UtcDateAndTime: Date;
		/** Last agent assigned to the conversation */
		msdyn_activeagentid: string;
		/** Unique identifier for Queue associated with Conversation. */
		msdyn_cdsqueueid: string;
		/** The channel(s) in the conversation. */
		msdyn_channel: Array<OptionSet.msdyn_liveconversation.msdyn_channel>;
		/** Date and time when conversation was closed */
		msdyn_closedon_UtcDateAndTime: Date;
		/** Date and time when conversation was created */
		msdyn_createdon_UtcDateAndTime: Date;
		/** Customer associated to the conversation */
		msdyn_customer_msdyn_liveconversation_account: string;
		/** Customer associated to the conversation */
		msdyn_customer_msdyn_liveconversation_contact: string;
		/** Customer Sentiment Label powered by Sentiment Service */
		msdyn_customersentimentlabel: OptionSet.msdyn_liveconversation.msdyn_customersentimentlabel;
		/** Number of times conversation was escalated to Supervisor i.e. transferred to Supervisor */
		msdyn_escalationcount: number;
		/** Time when conversation was initiated */
		msdyn_initiatedon_UtcDateAndTime: Date;
		/** Id of this ongoing conversation record */
		msdyn_liveconversationId: string;
		/** Work stream associated to the conversation */
		msdyn_liveworkstreamid: string;
		/** Date and time when conversation was last modified */
		msdyn_modifiedon_UtcDateAndTime: Date;
		/** Last agent session */
		msdyn_oclastsessionid: string;
		/** Unique identifier for msdyn_omnichannelqueue associated with Conversation */
		msdyn_queueid: string;
		/** Date and time when conversation was started */
		msdyn_startedon_UtcDateAndTime: Date;
		/** State of the conversation record */
		msdyn_statecode: OptionSet.msdyn_liveconversation.msdyn_statecode;
		/** Reason for the status of Ongoing conversation record */
		msdyn_statuscode: OptionSet.msdyn_liveconversation.msdyn_statuscode;
		/** Date and time when conversation status was last modified */
		msdyn_statusupdatedon_UtcDateAndTime: Date;
		/** Subject associated with the conversation record */
		msdyn_subject: string;
		/** Conversation Title */
		msdyn_title: string;
		/** Number of times the conversation was transferred */
		msdyn_transfercount: number;
		/** Work distribution mode of the associated work stream */
		msdyn_workstreamworkdistributionmode: OptionSet.msdyn_liveconversation.msdyn_workstreamworkdistributionmode;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the Ongoing Conversation. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team that owns the Ongoing Conversation. */
		readonly OwningTeam: string;
		/** Unique identifier of the user that owns the Ongoing Conversation. */
		readonly OwningUser: string;
		/** Status of the Ongoing conversation record */
		statecode: OptionSet.msdyn_liveconversation.statecode;
		/** Reason for the status of Ongoing conversation record */
		statuscode: OptionSet.msdyn_liveconversation.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the Ongoing Conversation. */
			readonly CreatedBy: string;
			/** Date and time when the Ongoing Conversation was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the Ongoing Conversation. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of user who last modified the Ongoing Conversation. */
			readonly ModifiedBy: string;
			/** Date and time when Ongoing Conversation was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the Ongoing Conversation. */
			readonly ModifiedOnBehalfBy: string;
			/** Date and time when last agent was assigned to the conversation */
			readonly msdyn_activeagentassignedon_UtcDateAndTime: string;
			/** Last agent assigned to the conversation */
			readonly msdyn_activeagentid: string;
			/** Unique identifier for Queue associated with Conversation. */
			readonly msdyn_cdsqueueid: string;
			/** The channel(s) in the conversation. */
			readonly msdyn_channel: Array<string>;
			/** Date and time when conversation was closed */
			readonly msdyn_closedon_UtcDateAndTime: string;
			/** Date and time when conversation was created */
			readonly msdyn_createdon_UtcDateAndTime: string;
			/** Customer associated to the conversation */
			readonly msdyn_customer_msdyn_liveconversation_account: string;
			/** Customer associated to the conversation */
			readonly msdyn_customer_msdyn_liveconversation_contact: string;
			/** Customer Sentiment Label powered by Sentiment Service */
			readonly msdyn_customersentimentlabel: string;
			/** Number of times conversation was escalated to Supervisor i.e. transferred to Supervisor */
			readonly msdyn_escalationcount: string;
			/** Time when conversation was initiated */
			readonly msdyn_initiatedon_UtcDateAndTime: string;
			/** Id of this ongoing conversation record */
			readonly msdyn_liveconversationId: string;
			/** Work stream associated to the conversation */
			readonly msdyn_liveworkstreamid: string;
			/** Date and time when conversation was last modified */
			readonly msdyn_modifiedon_UtcDateAndTime: string;
			/** Last agent session */
			readonly msdyn_oclastsessionid: string;
			/** Unique identifier for msdyn_omnichannelqueue associated with Conversation */
			readonly msdyn_queueid: string;
			/** Date and time when conversation was started */
			readonly msdyn_startedon_UtcDateAndTime: string;
			/** State of the conversation record */
			readonly msdyn_statecode: string;
			/** Reason for the status of Ongoing conversation record */
			readonly msdyn_statuscode: string;
			/** Date and time when conversation status was last modified */
			readonly msdyn_statusupdatedon_UtcDateAndTime: string;
			/** Subject associated with the conversation record */
			readonly msdyn_subject: string;
			/** Conversation Title */
			readonly msdyn_title: string;
			/** Number of times the conversation was transferred */
			readonly msdyn_transfercount: string;
			/** Work distribution mode of the associated work stream */
			readonly msdyn_workstreamworkdistributionmode: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the Ongoing Conversation. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team that owns the Ongoing Conversation. */
			readonly OwningTeam: string;
			/** Unique identifier of the user that owns the Ongoing Conversation. */
			readonly OwningUser: string;
			/** Status of the Ongoing conversation record */
			readonly statecode: string;
			/** Reason for the status of Ongoing conversation record */
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
	namespace msdyn_liveconversation {
		enum msdyn_channel {
			/** 192450000 */
			Apple_Messages_for_Business,
			/** 192390000 */
			Co_browse,
			/** 192350002 */
			Custom,
			/** 192350000 */
			Entity_Records,
			/** 192330000 */
			Facebook,
			/** 192310000 */
			LINE,
			/** 192360000 */
			Live_chat,
			/** 19241000 */
			Microsoft_Teams,
			/** 192400000 */
			Screen_sharing,
			/** 192340000 */
			SMS,
			/** 192350001 */
			Twitter,
			/** 192380000 */
			Video,
			/** 192370000 */
			Voice,
			/** 192320000 */
			WeChat,
			/** 192300000 */
			WhatsApp
		}
		enum msdyn_customerIdType {
		}
		enum msdyn_customersentimentlabel {
			/** 0 */
			NA,
			/** 8 */
			Negative,
			/** 10 */
			Neutral,
			/** 12 */
			Positive,
			/** 9 */
			Slightly_negative,
			/** 11 */
			Slightly_positive,
			/** 7 */
			Very_negative,
			/** 13 */
			Very_positive
		}
		enum msdyn_statecode {
			/** 1 */
			Active,
			/** 3 */
			Closed,
			/** 0 */
			Open,
			/** 2 */
			Waiting,
			/** 4 */
			Wrap_up
		}
		enum msdyn_statuscode {
			/** 2 */
			Active,
			/** 4 */
			Closed,
			/** 1 */
			Open,
			/** 3 */
			Waiting,
			/** 5 */
			Wrap_up
		}
		enum msdyn_workstreamworkdistributionmode {
			/** 192350001 */
			Pick,
			/** 192350000 */
			Push
		}
		enum OwnerIdType {
		}
		enum statecode {
			/** 1 */
			Active,
			/** 3 */
			Closed,
			/** 0 */
			Open,
			/** 2 */
			Waiting,
			/** 4 */
			Wrap_up
		}
		enum statuscode {
			/** 2 */
			Active,
			/** 4 */
			Closed,
			/** 1 */
			Open,
			/** 3 */
			Waiting,
			/** 5 */
			Wrap_up
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