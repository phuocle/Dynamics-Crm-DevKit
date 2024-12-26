//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormActive_Conversation {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier for Queue associated with Conversation. */
			msdyn_cdsqueueid: DevKit.Controls.Lookup;
			/** Date and time when conversation was started */
			msdyn_startedon: DevKit.Controls.DateTime;
		}
		interface tab_Details_Sections {
			Details_section_3: DevKit.Controls.Section;
			Details_section_4: DevKit.Controls.Section;
			Details_section_7: DevKit.Controls.Section;
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_KBSearch_Sections {
			tab_2_section_5: DevKit.Controls.Section;
		}
		interface tab_OCSearchRuntimeControl_Sections {
			tab_3_section_5: DevKit.Controls.Section;
		}
		interface tab_Details extends DevKit.Controls.ITab {
			Section: tab_Details_Sections;
		}
		interface tab_KBSearch extends DevKit.Controls.ITab {
			Section: tab_KBSearch_Sections;
		}
		interface tab_OCSearchRuntimeControl extends DevKit.Controls.ITab {
			Section: tab_OCSearchRuntimeControl_Sections;
		}
		interface Tabs {
			Details: tab_Details;
			KBSearch: tab_KBSearch;
			OCSearchRuntimeControl: tab_OCSearchRuntimeControl;
		}
		interface Body {
			Tab: Tabs;
			KBSearchcontrol: DevKit.Controls.WebResource;
			/** Field to bind conversation summary control */
			msdyn_ConversationSummaryField: DevKit.Controls.String;
			/** Customer with which the activity is associated. */
			msdyn_customer: DevKit.Controls.Lookup;
			/** Customer with which the activity is associated. */
			msdyn_customer1: DevKit.Controls.Lookup;
			/** Customer with which the activity is associated. */
			msdyn_customer2: DevKit.Controls.Lookup;
			/** Unique identifier for Case associated with Conversation. */
			msdyn_IssueId: DevKit.Controls.Lookup;
			/** Unique identifier for Case associated with Conversation. */
			msdyn_IssueId1: DevKit.Controls.Lookup;
			/** Field to bind Timelinewall control */
			msdyn_TimelineControlField: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			OCSearchRuntimeControl: DevKit.Controls.IFrame;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
		}
		interface Navigation {
			msdyn_msdyn_ocliveworkitem_msdyn_cdsentityengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_chatquestionnaireresponse: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_conversationinsight_ConversationId: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_conversationsummaryinteraction_conversationid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_conversationtopic_conversation_conversationid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_customengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_effortpredictionresult_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_facebookengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_intententity_objectid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_intententityattribute_objectid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_lineengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_livechatengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocapplemessagesforbusinessengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocgatekeeperengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocgooglebusinessmessagesengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcharacteristic_ocliveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcontextitem_ocliveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemsentiment_ocliveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocphonecallengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocrecording_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocrecording_liveworkitemid_recordingtarget: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocrequest_LiveWorkItemId: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocsession_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocvoicemail: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_salesocmessage_conversationid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_smsengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_suggestioninteraction_msdyn_suggestionfor: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_suggestionrequestpayload: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_teamschannelengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_teamsengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_transcript: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_twitterengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingdiagnostic_ocliveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingdiagnostic_targetobject: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingrun_workitem: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_visitorjourney_ocliveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_wechatengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_whatsappengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_unifiedroutingrun_msdyn_ocliveworkitem_targetobject: DevKit.Controls.NavigationItem,
			msdyn_ocliveworkitem_Feedback: DevKit.Controls.NavigationItem,
			msdyn_ocliveworkitem_msdyn_conversationmessageblock_msdyn_ocliveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_ocliveworkitem_msdyn_liveworkitemevent_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_ocliveworkitem_msdyn_ocliveworkitemcapacityprofile: DevKit.Controls.NavigationItem,
			msdyn_ocliveworkitem_QueueItems: DevKit.Controls.NavigationItem,
			msdyn_readtracker_poly_msdyn_ocliveworkitem: DevKit.Controls.NavigationItem
		}
		interface quickForm_CustomerProfile_Body {
			Address1_City: DevKit.Controls.QuickView;
			PrimaryContactId: DevKit.Controls.QuickView;
			Telephone1: DevKit.Controls.QuickView;
		}
		interface quickForm_RecentCases_Body {
		}
		interface quickForm_IssueSnapshot_Body {
			PriorityCode: DevKit.Controls.QuickView;
			StateCode: DevKit.Controls.QuickView;
			SubjectId: DevKit.Controls.QuickView;
		}
		interface quickForm_CustomerProfile extends DevKit.Controls.IQuickView {
			Body: quickForm_CustomerProfile_Body;
		}
		interface quickForm_RecentCases extends DevKit.Controls.IQuickView {
			Body: quickForm_RecentCases_Body;
		}
		interface quickForm_IssueSnapshot extends DevKit.Controls.IQuickView {
			Body: quickForm_IssueSnapshot_Body;
		}
		interface QuickForm {
			CustomerProfile: quickForm_CustomerProfile;
			RecentCases: quickForm_RecentCases;
			IssueSnapshot: quickForm_IssueSnapshot;
		}
	}
	class FormActive_Conversation extends DevKit.IForm {
		/**
		* Active Conversation [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Active_Conversation */
		Body: DevKit.FormActive_Conversation.Body;
		/** The Header section of form Active_Conversation */
		Header: DevKit.FormActive_Conversation.Header;
		/** The Navigation of form Active_Conversation */
		Navigation: DevKit.FormActive_Conversation.Navigation;
		/** The QuickForm of form Active_Conversation */
		QuickForm: DevKit.FormActive_Conversation.QuickForm;
		/** The SidePanes of form Active_Conversation */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormConversation_Form {
		interface tab_AlternativeDetails_Sections {
			General: DevKit.Controls.Section;
		}
		interface tab_AlternativeDetails extends DevKit.Controls.ITab {
			Section: tab_AlternativeDetails_Sections;
		}
		interface Tabs {
			AlternativeDetails: tab_AlternativeDetails;
		}
		interface Body {
			Tab: Tabs;
			msdyn_title: DevKit.Controls.ActionCards;
		}
		interface Navigation {
			msdyn_msdyn_ocliveworkitem_msdyn_cdsentityengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_chatquestionnaireresponse: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_conversationinsight_ConversationId: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_conversationsummaryinteraction_conversationid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_conversationtopic_conversation_conversationid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_customengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_effortpredictionresult_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_facebookengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_intententity_objectid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_intententityattribute_objectid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_lineengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_livechatengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocapplemessagesforbusinessengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocgatekeeperengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocgooglebusinessmessagesengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcharacteristic_ocliveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcontextitem_ocliveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemsentiment_ocliveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocphonecallengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocrecording_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocrecording_liveworkitemid_recordingtarget: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocrequest_LiveWorkItemId: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocsession_liveworkstreamid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_ocvoicemail: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_salesocmessage_conversationid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_smsengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_suggestioninteraction_msdyn_suggestionfor: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_suggestionrequestpayload: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_teamschannelengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_teamsengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_transcript: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_twitterengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingdiagnostic_ocliveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingdiagnostic_targetobject: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_unifiedroutingrun_workitem: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_visitorjourney_ocliveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_wechatengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_ocliveworkitem_msdyn_whatsappengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_msdyn_unifiedroutingrun_msdyn_ocliveworkitem_targetobject: DevKit.Controls.NavigationItem,
			msdyn_ocliveworkitem_Feedback: DevKit.Controls.NavigationItem,
			msdyn_ocliveworkitem_msdyn_conversationmessageblock_msdyn_ocliveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_ocliveworkitem_msdyn_liveworkitemevent_liveworkitemid: DevKit.Controls.NavigationItem,
			msdyn_ocliveworkitem_msdyn_ocliveworkitemcapacityprofile: DevKit.Controls.NavigationItem,
			msdyn_ocliveworkitem_QueueItems: DevKit.Controls.NavigationItem,
			msdyn_readtracker_poly_msdyn_ocliveworkitem: DevKit.Controls.NavigationItem
		}
	}
	class FormConversation_Form extends DevKit.IForm {
		/**
		* Conversation Form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Conversation_Form */
		Body: DevKit.FormConversation_Form.Body;
		/** The Navigation of form Conversation_Form */
		Navigation: DevKit.FormConversation_Form.Navigation;
		/** The SidePanes of form Conversation_Form */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ocliveworkitemApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocliveworkitemApi
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
		/** Additional information provided by the external application as JSON. For internal use only. */
		ActivityAdditionalParams: string;
		/** Unique identifier of the activity. */
		ActivityId: string;
		/** Actual duration of the activity in minutes. */
		ActualDurationMinutes: number;
		/** Actual end time of the activity. */
		ActualEnd_UtcDateAndTime: Date;
		/** Actual start time of the activity. */
		ActualStart_UtcDateAndTime: Date;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: OptionSet.msdyn_ocliveworkitem.Community;
		/** Unique identifier of the user who created the activity. */
		readonly CreatedBy: string;
		/** Date and time when the activity was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the activitypointer. */
		readonly CreatedOnBehalfBy: string;
		/** Date and time when the delivery of the activity was last attempted. */
		readonly DeliveryLastAttemptedOn_UtcDateAndTime: Date;
		/** Priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: OptionSet.msdyn_ocliveworkitem.DeliveryPriorityCode;
		/** Description of the activity. */
		Description: string;
		/** The message id of activity which is returned from Exchange Server. */
		ExchangeItemId: string;
		/** Exchange rate for the currency associated with the activitypointer with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Shows the web link of Activity of type email. */
		ExchangeWebLink: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Type of instance of a recurring series. */
		readonly InstanceTypeCode: OptionSet.msdyn_ocliveworkitem.InstanceTypeCode;
		/** Information regarding whether the activity was billed as part of resolving a case. */
		IsBilled: boolean;
		/** For internal use only. */
		IsMapiPrivate: boolean;
		/** Information regarding whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean;
		/** Information regarding whether the activity was created from a workflow rule. */
		IsWorkflowCreated: boolean;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Left the voice mail */
		LeftVoiceMail: boolean;
		/** Unique identifier of user who last modified the activity. */
		readonly ModifiedBy: string;
		/** Date and time when activity was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the activitypointer. */
		readonly ModifiedOnBehalfBy: string;
		/** Date and time when last agent was assigned to the conversation */
		msdyn_activeagentassignedon_UtcDateAndTime: Date;
		/** Active Agent Group Associated with the Conversation */
		msdyn_activeagentgroupid: string;
		/** Indicates the agent currently assigned to the conversation or last assigned agent for a closed conversation. It is populated as empty or null if the customer(C2) ends or is disconnected before the agent accepts conversation. */
		msdyn_activeagentid: string;
		/** Active Intent Family Associated with the Conversation */
		msdyn_activeintentfamilyid: string;
		/** Active Intent Group Associated with the Conversation */
		msdyn_activeintentgroupid: string;
		/** Active Intent Associated with the Conversation */
		msdyn_activeintentid: string;
		/** intent string (in case the intent is new or unknown) */
		msdyn_activeintentstring: string;
		msdyn_activesessionparticipantid: string;
		/** Average time it took to respond to customer, excluding agent's out of operating hours (OOOH) */
		msdyn_averageresponsetimeinmsadjforoh: number;
		/** Stores the information about fields updated by Autonomous Case Create and Update process. */
		msdyn_casefieldsupdatedbyAI: string;
		/** Unique identifier for Queue associated with Conversation. */
		msdyn_cdsqueueid: string;
		/** The channel(s) in the conversation. */
		msdyn_channel: Array<OptionSet.msdyn_ocliveworkitem.msdyn_channel>;
		/** Unique identifier to identify the channel connection id. eg: WidgetAppId for LiveChat */
		msdyn_channelconnectionid: string;
		/** Unique identifier to identify the app to which this conversation belogs to. */
		msdyn_channelinstanceid: string;
		/** Channel Provider Name. */
		msdyn_channelproviderName: string;
		/** Date and time when conversation was closed */
		msdyn_closedon_UtcDateAndTime: Date;
		msdyn_conversationactivechattimeinseconds: number;
		msdyn_conversationactivewrapuptimeinseconds: number;
		/** Indicates the current step or activity within an active conversation, such as whether the agent is talking, the customer is on hold etc. */
		msdyn_conversationactivitystate: OptionSet.msdyn_ocliveworkitem.msdyn_conversationactivitystate;
		/** Time in seconds conversation spend to be accepted */
		msdyn_conversationfirstwaittimeinseconds: number;
		msdyn_conversationhandletimeinseconds: number;
		msdyn_conversationholdtimeinseconds: number;
		/** Field to bind conversation summary control */
		msdyn_ConversationSummaryField: string;
		msdyn_conversationtalktimeinseconds: number;
		msdyn_conversationwrapuptimeinseconds: number;
		msdyn_copilotengaged: boolean;
		/** Date and time when the activity was created. */
		msdyn_createdon_UtcDateAndTime: Date;
		/** Customer with which the activity is associated. */
		msdyn_customer_msdyn_ocliveworkitem_account: string;
		/** Customer with which the activity is associated. */
		msdyn_customer_msdyn_ocliveworkitem_contact: string;
		/** The language of the customer in this conversation. */
		msdyn_customerlanguageid: string;
		/** The locale of the customer participated in this conversation. */
		msdyn_customerlocale: string;
		/** Customer Sentiment Label powered by Sentiment Service */
		msdyn_customersentimentlabel: OptionSet.msdyn_ocliveworkitem.msdyn_customersentimentlabel;
		/** Look up to daily topic entity. */
		msdyn_dailytopicid: string;
		msdyn_effortpredictionresult: string;
		/** Number of times conversation was escalated to Supervisor i.e. transferred to Supervisor */
		msdyn_escalationcount: number;
		/** External context captured. */
		msdyn_externalcontext: string;
		/** Time it took to respond to customer, excluding agent's out of operating hours (OOOH) */
		msdyn_firstresponsetimeinmsadjforoh: number;
		/** Time when conversation started waiting to be assigned */
		msdyn_firstwaitstartedon_UtcDateAndTime: Date;
		/** Signifies which infra this conversation was created by, and thereby which infra to process in. For internal use only. */
		msdyn_infracreatedby: string;
		/** Time when conversation was initiated */
		msdyn_initiatedon_UtcDateAndTime: Date;
		/** Intent  of Conversation */
		msdyn_intent: string;
		msdyn_isabandoned: boolean;
		msdyn_isagentaccepted: boolean;
		msdyn_isagentsession: boolean;
		/** Indicates if its an outbound Conversation */
		msdyn_isoutbound: boolean;
		/** Unique identifier for Case associated with Conversation. */
		msdyn_IssueId: string;
		/** Last agent session */
		msdyn_lastsessionid: string;
		/** Work stream associated to the conversation */
		msdyn_liveworkstreamid: string;
		/** LiveWorkStream notification data provided as JSON. For internal use only. */
		msdyn_liveworkstreamnotificationdata: string;
		/** Date and time when conversation was last modified */
		msdyn_modifiedon_UtcDateAndTime: Date;
		/** Unique Id of conversation */
		msdyn_ocliveworkitemid2: string;
		/** Number of times work item got transferred to another queue due to overflow */
		msdyn_overflowtransfercount: number;
		/** Unique identifier for msdyn_omnichannelqueue associated with Conversation */
		msdyn_queueid: string;
		/** Queue item associated with the conversation */
		msdyn_queueitemid: string;
		/** Unique identifier of the routed record. Records are of those entities enabled for Unified Routing and have at least one Workstream created. For internal use only. */
		msdyn_routableobjectid_msdyn_ocvoicemail_msdyn_ocliveworkitem_msdyn_ocvoicemail: string;
		/** Unique identifier of the routed record. Records are of those entities enabled for Unified Routing and have at least one Workstream created. For internal use only. */
		msdyn_msdyn_routableobjectid_msdyn_ocliveworkitem_task: string;
		msdyn_routableobjectlogicalname: string;
		/** Lookup for the Social Profile Entity Record. */
		msdyn_socialprofileid: string;
		/** Date and time when conversation was started */
		msdyn_startedon_UtcDateAndTime: Date;
		/** Reason for conversation for being in the current state */
		msdyn_statereason: string;
		/** Reason for conversation status change */
		msdyn_statuschangereason: OptionSet.msdyn_ocliveworkitem.msdyn_statuschangereason;
		/** Date and time when conversation status was last modified */
		msdyn_statusupdatedon_UtcDateAndTime: Date;
		/** Third Party Conversation */
		msdyn_thirdpartyconversation: boolean;
		/** Field to bind Timelinewall control */
		msdyn_TimelineControlField: string;
		/** Conversation Title */
		msdyn_title: string;
		/** Placeholder for Transcript Control */
		msdyn_TranscriptControl: string;
		/** Number of times the conversation was transferred */
		msdyn_transfercount: number;
		/** UR Customer Sentiment Keywords */
		msdyn_urcustomersentimentkeywords: string;
		msdyn_urcustomersentimentlabel: OptionSet.msdyn_ocliveworkitem.msdyn_urcustomersentimentlabel;
		/** UR Customer Sentiment Score */
		msdyn_urcustomersentimentscore: number;
		/** Work distribution mode of the associated work stream */
		msdyn_workstreamworkdistributionmode: OptionSet.msdyn_ocliveworkitem.msdyn_workstreamworkdistributionmode;
		/** Date and time when conversation end */
		msdyn_wrapupinitiatedon_UtcDateAndTime: Date;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the activity. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team that owns the activity. */
		readonly OwningTeam: string;
		/** Unique identifier of the user that owns the activity. */
		readonly OwningUser: string;
		/** For internal use only. */
		readonly PostponeActivityProcessingUntil_UtcDateAndTime: Date;
		/** Priority of the activity. */
		PriorityCode: OptionSet.msdyn_ocliveworkitem.PriorityCode;
		/** Unique identifier of the Process. */
		ProcessId: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_account_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_adx_invitation_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bookableresourcebooking_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bookableresourcebookingheader_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bulkoperation_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_campaign_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_campaignactivity_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_contact_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_contract_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_entitlement_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_entitlementtemplate_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_incident_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_new_interactionforemail_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_invoice_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgearticle_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgebaserecord_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_lead_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_contentsettings_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_customerjourney_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_leadscoremodel_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinaccount_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinactivity_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinfieldmapping_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinform_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinformanswer_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinformquestion_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinformsubmission_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinuserprofile_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_marketingemailtestsend_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_migration_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_uicconfig_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreement_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingdate_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingincident_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingproduct_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingservice_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingservicetask_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingsetup_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementinvoicedate_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementinvoiceproduct_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementinvoicesetup_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_bookingalertstatus_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_bookingrule_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_bookingtimestamp_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_customerasset_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_fieldservicesetting_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_incidenttypecharacteristic_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_incidenttypeproduct_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_incidenttypeservice_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventoryadjustment_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventoryjournal_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventorytransfer_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_payment_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_paymentdetail_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_paymentmethod_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_paymentterm_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_playbookinstance_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_postalbum_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_postalcode_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_productinventory_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorder_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderbill_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderproduct_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderreceipt_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseordersubstatus_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingincident_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingproduct_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingservice_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingservicetask_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_resourceterritory_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rma_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmaproduct_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmareceipt_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmareceiptproduct_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmasubstatus_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rtv_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rtvproduct_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rtvsubstatus_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_salessuggestion_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_shipvia_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_swarm_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_systemuserschedulersetting_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_timegroup_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_timegroupdetail_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_timeoffrequest_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_warehouse_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorder_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workordercharacteristic_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderincident_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderproduct_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderresourcerestriction_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderservice_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderservicetask_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_checkin_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_event_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_eventpurchase_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_eventpurchaseattendee_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_eventpurchasepass_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_eventregistration_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_hotel_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_hotelroomallocation_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_hotelroomreservation_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_layout_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_room_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_session_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_sessionregistration_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_sessiontrack_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_speaker_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_speakerengagement_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_sponsorablearticle_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_sponsorship_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_venue_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_webinarconfiguration_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_webinarprovider_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_mspp_adplacement_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_mspp_pollplacement_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_mspp_publishingstatetransitionrule_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_mspp_redirect_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_mspp_shortcut_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_mspp_website_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_opportunity_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_quote_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_salesorder_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_site_msdyn_ocliveworkitem: string;
		/** Scheduled duration of the activity, specified in minutes. */
		ScheduledDurationMinutes: number;
		/** Scheduled end time of the activity. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Scheduled start time of the activity. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Unique identifier of the mailbox associated with the sender of the email message. */
		readonly SenderMailboxId: string;
		/** Date and time when the activity was sent. */
		readonly SentOn_UtcDateAndTime: Date;
		/** Uniqueidentifier specifying the id of recurring series of an instance. */
		readonly SeriesId: string;
		/** Unique identifier of an associated service. */
		ServiceId: string;
		/** Choose the service level agreement (SLA) that you want to apply to the case record. */
		SLAId: string;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date;
		/** Unique identifier of the Stage. */
		StageId: string;
		/** State of the conversation record */
		StateCode: OptionSet.msdyn_ocliveworkitem.StateCode;
		/** Reason for the status of the activity. */
		StatusCode: OptionSet.msdyn_ocliveworkitem.StatusCode;
		/** Subject associated with the activity. */
		Subject: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the activitypointer. */
		TransactionCurrencyId: string;
		/** For internal use only. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the activity. */
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
		readonly FormattedValue: {
			/** Additional information provided by the external application as JSON. For internal use only. */
			readonly ActivityAdditionalParams: string;
			/** Unique identifier of the activity. */
			readonly ActivityId: string;
			/** Actual duration of the activity in minutes. */
			readonly ActualDurationMinutes: string;
			/** Actual end time of the activity. */
			readonly ActualEnd_UtcDateAndTime: string;
			/** Actual start time of the activity. */
			readonly ActualStart_UtcDateAndTime: string;
			/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
			readonly Community: string;
			/** Unique identifier of the user who created the activity. */
			readonly CreatedBy: string;
			/** Date and time when the activity was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the activitypointer. */
			readonly CreatedOnBehalfBy: string;
			/** Date and time when the delivery of the activity was last attempted. */
			readonly DeliveryLastAttemptedOn_UtcDateAndTime: string;
			/** Priority of delivery of the activity to the email server. */
			readonly DeliveryPriorityCode: string;
			/** Description of the activity. */
			readonly Description: string;
			/** The message id of activity which is returned from Exchange Server. */
			readonly ExchangeItemId: string;
			/** Exchange rate for the currency associated with the activitypointer with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Shows the web link of Activity of type email. */
			readonly ExchangeWebLink: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Type of instance of a recurring series. */
			readonly InstanceTypeCode: string;
			/** Information regarding whether the activity was billed as part of resolving a case. */
			readonly IsBilled: string;
			/** For internal use only. */
			readonly IsMapiPrivate: string;
			/** Information regarding whether the activity is a regular activity type or event type. */
			readonly IsRegularActivity: string;
			/** Information regarding whether the activity was created from a workflow rule. */
			readonly IsWorkflowCreated: string;
			/** Contains the date and time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Left the voice mail */
			readonly LeftVoiceMail: string;
			/** Unique identifier of user who last modified the activity. */
			readonly ModifiedBy: string;
			/** Date and time when activity was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the activitypointer. */
			readonly ModifiedOnBehalfBy: string;
			/** Date and time when last agent was assigned to the conversation */
			readonly msdyn_activeagentassignedon_UtcDateAndTime: string;
			/** Active Agent Group Associated with the Conversation */
			readonly msdyn_activeagentgroupid: string;
			/** Indicates the agent currently assigned to the conversation or last assigned agent for a closed conversation. It is populated as empty or null if the customer(C2) ends or is disconnected before the agent accepts conversation. */
			readonly msdyn_activeagentid: string;
			/** Active Intent Family Associated with the Conversation */
			readonly msdyn_activeintentfamilyid: string;
			/** Active Intent Group Associated with the Conversation */
			readonly msdyn_activeintentgroupid: string;
			/** Active Intent Associated with the Conversation */
			readonly msdyn_activeintentid: string;
			/** intent string (in case the intent is new or unknown) */
			readonly msdyn_activeintentstring: string;
			readonly msdyn_activesessionparticipantid: string;
			/** Average time it took to respond to customer, excluding agent's out of operating hours (OOOH) */
			readonly msdyn_averageresponsetimeinmsadjforoh: string;
			/** Stores the information about fields updated by Autonomous Case Create and Update process. */
			readonly msdyn_casefieldsupdatedbyAI: string;
			/** Unique identifier for Queue associated with Conversation. */
			readonly msdyn_cdsqueueid: string;
			/** The channel(s) in the conversation. */
			readonly msdyn_channel: Array<string>;
			/** Unique identifier to identify the channel connection id. eg: WidgetAppId for LiveChat */
			readonly msdyn_channelconnectionid: string;
			/** Unique identifier to identify the app to which this conversation belogs to. */
			readonly msdyn_channelinstanceid: string;
			/** Channel Provider Name. */
			readonly msdyn_channelproviderName: string;
			/** Date and time when conversation was closed */
			readonly msdyn_closedon_UtcDateAndTime: string;
			readonly msdyn_conversationactivechattimeinseconds: string;
			readonly msdyn_conversationactivewrapuptimeinseconds: string;
			/** Indicates the current step or activity within an active conversation, such as whether the agent is talking, the customer is on hold etc. */
			readonly msdyn_conversationactivitystate: string;
			/** Time in seconds conversation spend to be accepted */
			readonly msdyn_conversationfirstwaittimeinseconds: string;
			readonly msdyn_conversationhandletimeinseconds: string;
			readonly msdyn_conversationholdtimeinseconds: string;
			/** Field to bind conversation summary control */
			readonly msdyn_ConversationSummaryField: string;
			readonly msdyn_conversationtalktimeinseconds: string;
			readonly msdyn_conversationwrapuptimeinseconds: string;
			readonly msdyn_copilotengaged: string;
			/** Date and time when the activity was created. */
			readonly msdyn_createdon_UtcDateAndTime: string;
			/** Customer with which the activity is associated. */
			readonly msdyn_customer_msdyn_ocliveworkitem_account: string;
			/** Customer with which the activity is associated. */
			readonly msdyn_customer_msdyn_ocliveworkitem_contact: string;
			/** The language of the customer in this conversation. */
			readonly msdyn_customerlanguageid: string;
			/** The locale of the customer participated in this conversation. */
			readonly msdyn_customerlocale: string;
			/** Customer Sentiment Label powered by Sentiment Service */
			readonly msdyn_customersentimentlabel: string;
			/** Look up to daily topic entity. */
			readonly msdyn_dailytopicid: string;
			readonly msdyn_effortpredictionresult: string;
			/** Number of times conversation was escalated to Supervisor i.e. transferred to Supervisor */
			readonly msdyn_escalationcount: string;
			/** External context captured. */
			readonly msdyn_externalcontext: string;
			/** Time it took to respond to customer, excluding agent's out of operating hours (OOOH) */
			readonly msdyn_firstresponsetimeinmsadjforoh: string;
			/** Time when conversation started waiting to be assigned */
			readonly msdyn_firstwaitstartedon_UtcDateAndTime: string;
			/** Signifies which infra this conversation was created by, and thereby which infra to process in. For internal use only. */
			readonly msdyn_infracreatedby: string;
			/** Time when conversation was initiated */
			readonly msdyn_initiatedon_UtcDateAndTime: string;
			/** Intent  of Conversation */
			readonly msdyn_intent: string;
			readonly msdyn_isabandoned: string;
			readonly msdyn_isagentaccepted: string;
			readonly msdyn_isagentsession: string;
			/** Indicates if its an outbound Conversation */
			readonly msdyn_isoutbound: string;
			/** Unique identifier for Case associated with Conversation. */
			readonly msdyn_IssueId: string;
			/** Last agent session */
			readonly msdyn_lastsessionid: string;
			/** Work stream associated to the conversation */
			readonly msdyn_liveworkstreamid: string;
			/** LiveWorkStream notification data provided as JSON. For internal use only. */
			readonly msdyn_liveworkstreamnotificationdata: string;
			/** Date and time when conversation was last modified */
			readonly msdyn_modifiedon_UtcDateAndTime: string;
			/** Unique Id of conversation */
			readonly msdyn_ocliveworkitemid2: string;
			/** Number of times work item got transferred to another queue due to overflow */
			readonly msdyn_overflowtransfercount: string;
			/** Unique identifier for msdyn_omnichannelqueue associated with Conversation */
			readonly msdyn_queueid: string;
			/** Queue item associated with the conversation */
			readonly msdyn_queueitemid: string;
			/** Unique identifier of the routed record. Records are of those entities enabled for Unified Routing and have at least one Workstream created. For internal use only. */
			readonly msdyn_routableobjectid_msdyn_ocvoicemail_msdyn_ocliveworkitem_msdyn_ocvoicemail: string;
			/** Unique identifier of the routed record. Records are of those entities enabled for Unified Routing and have at least one Workstream created. For internal use only. */
			readonly msdyn_msdyn_routableobjectid_msdyn_ocliveworkitem_task: string;
			readonly msdyn_routableobjectlogicalname: string;
			/** Lookup for the Social Profile Entity Record. */
			readonly msdyn_socialprofileid: string;
			/** Date and time when conversation was started */
			readonly msdyn_startedon_UtcDateAndTime: string;
			/** Reason for conversation for being in the current state */
			readonly msdyn_statereason: string;
			/** Reason for conversation status change */
			readonly msdyn_statuschangereason: string;
			/** Date and time when conversation status was last modified */
			readonly msdyn_statusupdatedon_UtcDateAndTime: string;
			/** Third Party Conversation */
			readonly msdyn_thirdpartyconversation: string;
			/** Field to bind Timelinewall control */
			readonly msdyn_TimelineControlField: string;
			/** Conversation Title */
			readonly msdyn_title: string;
			/** Placeholder for Transcript Control */
			readonly msdyn_TranscriptControl: string;
			/** Number of times the conversation was transferred */
			readonly msdyn_transfercount: string;
			/** UR Customer Sentiment Keywords */
			readonly msdyn_urcustomersentimentkeywords: string;
			readonly msdyn_urcustomersentimentlabel: string;
			/** UR Customer Sentiment Score */
			readonly msdyn_urcustomersentimentscore: string;
			/** Work distribution mode of the associated work stream */
			readonly msdyn_workstreamworkdistributionmode: string;
			/** Date and time when conversation end */
			readonly msdyn_wrapupinitiatedon_UtcDateAndTime: string;
			/** Shows how long, in minutes, that the record was on hold. */
			readonly OnHoldTime: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the activity. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team that owns the activity. */
			readonly OwningTeam: string;
			/** Unique identifier of the user that owns the activity. */
			readonly OwningUser: string;
			/** For internal use only. */
			readonly PostponeActivityProcessingUntil_UtcDateAndTime: string;
			/** Priority of the activity. */
			readonly PriorityCode: string;
			/** Unique identifier of the Process. */
			readonly ProcessId: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_account_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_adx_invitation_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_bookableresourcebooking_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_bookableresourcebookingheader_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_bulkoperation_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_campaign_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_campaignactivity_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_contact_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_contract_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_entitlement_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_entitlementtemplate_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_incident_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_new_interactionforemail_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_invoice_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_knowledgearticle_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_knowledgebaserecord_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_lead_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_contentsettings_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_customerjourney_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_leadscoremodel_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinaccount_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinactivity_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinfieldmapping_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinform_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinformanswer_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinformquestion_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinformsubmission_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinuserprofile_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_marketingemailtestsend_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_migration_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_uicconfig_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreement_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingdate_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingincident_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingproduct_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingservice_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingservicetask_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingsetup_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementinvoicedate_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementinvoiceproduct_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementinvoicesetup_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_bookingalertstatus_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_bookingrule_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_bookingtimestamp_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_customerasset_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_fieldservicesetting_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_incidenttypecharacteristic_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_incidenttypeproduct_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_incidenttypeservice_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_inventoryadjustment_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_inventoryadjustmentproduct_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_inventoryjournal_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_inventorytransfer_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_payment_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_paymentdetail_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_paymentmethod_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_paymentterm_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_playbookinstance_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_postalbum_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_postalcode_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_productinventory_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorder_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorderbill_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorderproduct_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorderreceipt_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorderreceiptproduct_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseordersubstatus_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_quotebookingincident_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_quotebookingproduct_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_quotebookingservice_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_quotebookingservicetask_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_resourceterritory_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rma_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rmaproduct_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rmareceipt_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rmareceiptproduct_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rmasubstatus_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rtv_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rtvproduct_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rtvsubstatus_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_salessuggestion_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_shipvia_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_swarm_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_systemuserschedulersetting_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_timegroup_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_timegroupdetail_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_timeoffrequest_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_warehouse_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorder_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workordercharacteristic_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderincident_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderproduct_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderresourcerestriction_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderservice_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderservicetask_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_checkin_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_event_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_eventpurchase_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_eventpurchaseattendee_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_eventpurchasepass_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_eventregistration_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_hotel_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_hotelroomallocation_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_hotelroomreservation_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_layout_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_room_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_session_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_sessionregistration_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_sessiontrack_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_speaker_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_speakerengagement_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_sponsorablearticle_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_sponsorship_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_venue_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_webinarconfiguration_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_webinarprovider_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_mspp_adplacement_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_mspp_pollplacement_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_mspp_redirect_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_mspp_shortcut_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_mspp_website_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_opportunity_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_quote_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_salesorder_msdyn_ocliveworkitem: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_site_msdyn_ocliveworkitem: string;
			/** Scheduled duration of the activity, specified in minutes. */
			readonly ScheduledDurationMinutes: string;
			/** Scheduled end time of the activity. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Scheduled start time of the activity. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Unique identifier of the mailbox associated with the sender of the email message. */
			readonly SenderMailboxId: string;
			/** Date and time when the activity was sent. */
			readonly SentOn_UtcDateAndTime: string;
			/** Uniqueidentifier specifying the id of recurring series of an instance. */
			readonly SeriesId: string;
			/** Unique identifier of an associated service. */
			readonly ServiceId: string;
			/** Choose the service level agreement (SLA) that you want to apply to the case record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this case. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Shows the date and time by which the activities are sorted. */
			readonly SortDate_UtcDateAndTime: string;
			/** Unique identifier of the Stage. */
			readonly StageId: string;
			/** State of the conversation record */
			readonly StateCode: string;
			/** Reason for the status of the activity. */
			readonly StatusCode: string;
			/** Subject associated with the activity. */
			readonly Subject: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the activitypointer. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the activity. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_ocliveworkitem {
		enum ActivityTypeCode {
			/** 4201 */
			Appointment,
			/** 11000 */
			Booking_Alert,
			/** 4402 */
			Campaign_Activity,
			/** 4401 */
			Campaign_Response,
			/** 4206 */
			Case_Resolution,
			/** 10691 */
			Conversation,
			/** 10877 */
			Copilot_Transcript,
			/** 10600 */
			Customer_Voice_alert,
			/** 10610 */
			Customer_Voice_survey_invite,
			/** 10612 */
			Customer_Voice_survey_response,
			/** 4202 */
			Email,
			/** 4204 */
			Fax,
			/** 10310 */
			Invite_Redemption,
			/** 4207 */
			Letter,
			/** 4208 */
			Opportunity_Close,
			/** 4209 */
			Order_Close,
			/** 11063 */
			Outbound_message,
			/** 4210 */
			Phone_Call,
			/** 10311 */
			Portal_Comment,
			/** 4406 */
			Quick_Campaign,
			/** 4211 */
			Quote_Close,
			/** 4251 */
			Recurring_Appointment,
			/** 4214 */
			Service_Activity,
			/** 10708 */
			Session,
			/** 4212 */
			Task,
			/** 10185 */
			Teams_chat,
			/** 11070 */
			Voicemail
		}
		enum Community {
			/** 16 */
			Apple_Messages_For_Business,
			/** 5 */
			Cortana,
			/** 6 */
			Direct_Line,
			/** 8 */
			Direct_Line_Speech,
			/** 9 */
			Email,
			/** 1 */
			Facebook,
			/** 17 */
			Googles_Business_Messages,
			/** 10 */
			GroupMe,
			/** 11 */
			Kik,
			/** 3 */
			Line,
			/** 7 */
			Microsoft_Teams,
			/** 0 */
			Other,
			/** 13 */
			Skype,
			/** 14 */
			Slack,
			/** 12 */
			Telegram,
			/** 2 */
			Twitter,
			/** 4 */
			Wechat,
			/** 15 */
			WhatsApp
		}
		enum DeliveryPriorityCode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum InstanceTypeCode {
			/** 0 */
			Not_Recurring,
			/** 3 */
			Recurring_Exception,
			/** 4 */
			Recurring_Future_Exception,
			/** 2 */
			Recurring_Instance,
			/** 1 */
			Recurring_Master
		}
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
			/** 192450001 */
			Googles_Business_Messages,
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
			/** 192440000 */
			Voice_call,
			/** 192320000 */
			WeChat,
			/** 192300000 */
			WhatsApp
		}
		enum msdyn_conversationactivitystate {
			/** 0 */
			Default,
			/** 3 */
			Ended,
			/** 2 */
			Hold,
			/** 1 */
			Talk
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
		enum msdyn_routableobjectidIdType {
		}
		enum msdyn_statuschangereason {
			/** 192350005 */
			AgentMovedToWrapUp,
			/** 192350017 */
			AssignedBySupervisor,
			/** 192350010 */
			AutoClosedBySystem,
			/** 192350009 */
			AutoClosedFromWaitingState,
			/** 192350002 */
			AwaitingAgentAcceptance,
			/** 192350001 */
			AwaitingAgentAssignment,
			/** 192350004 */
			AwaitingCustomerResponse,
			/** 192350014 */
			ClosedDueToFailure,
			/** 192350011 */
			ClosedDueToOverflow,
			/** 192350016 */
			ClosedInDataverseDirectlyByAdmin,
			/** 192350008 */
			ConversationEndedByAgent,
			/** 192350013 */
			ConversationEndedByBot,
			/** 192350006 */
			CustomerDisconnectedOrLeftActiveConversation,
			/** 192350012 */
			CustomerDisconnectedOrLeftOpenConversation,
			/** 192350007 */
			CutomerMovedToWrapUp,
			/** 192350015 */
			ForceClosedBySupervisor,
			/** 192350003 */
			InConversation
		}
		enum msdyn_urcustomersentimentlabel {
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
		enum msdyn_workstreamworkdistributionmode {
			/** 192350001 */
			Pick,
			/** 192350000 */
			Push
		}
		enum PriorityCode {
			/** 2 */
			High,
			/** 0 */
			Low,
			/** 1 */
			Normal
		}
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** 1 */
			Closed,
			/** 0 */
			Open,
			/** 2 */
			Resolved,
			/** 3 */
			Scheduled,
			/** 4 */
			Wrap_up_Deprecated
		}
		enum StatusCode {
			/** 2 */
			Active,
			/** 4 */
			Closed,
			/** 1 */
			Open,
			/** 6 */
			Resolved,
			/** 7 */
			Scheduled,
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}