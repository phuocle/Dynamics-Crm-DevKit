//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormConversation_Form {
		interface tab_AlternativeDetails_Sections {
			General: DevKit.Controls.Section;
		}
		interface tab_Details_Sections {
			Details: DevKit.Controls.Section;
			Details_section_4: DevKit.Controls.Section;
			Details_skills_5: DevKit.Controls.Section;
			tab_2_section_3: DevKit.Controls.Section;
			tab_2_section_4: DevKit.Controls.Section;
		}
		interface tab_AlternativeDetails extends DevKit.Controls.ITab {
			Section: tab_AlternativeDetails_Sections;
		}
		interface tab_Details extends DevKit.Controls.ITab {
			Section: tab_Details_Sections;
		}
		interface Tabs {
			AlternativeDetails: tab_AlternativeDetails;
			Details: tab_Details;
		}
		interface Body {
			Tab: Tabs;
			/** Agent currently assigned to the conversation and last agent assigned for closed conversations */
			msdyn_activeagentid: DevKit.Controls.Lookup;
			/** Unique identifier for Queue associated with Conversation. */
			msdyn_cdsqueueid: DevKit.Controls.Lookup;
			/** Date and time when conversation was closed */
			msdyn_closedon: DevKit.Controls.DateTime;
			/** Date and time when the activity was created. */
			msdyn_createdon: DevKit.Controls.DateTime;
			/** Customer with which the activity is associated. */
			msdyn_customer: DevKit.Controls.Lookup;
			/** Number of times conversation was escalated to Supervisor i.e. transferred to Supervisor */
			msdyn_escalationcount: DevKit.Controls.Integer;
			/** Work stream associated to the conversation */
			msdyn_liveworkstreamid: DevKit.Controls.Lookup;
			/** Date and time when conversation was last modified */
			msdyn_modifiedon: DevKit.Controls.DateTime;
			/** Date and time when conversation status was last modified */
			msdyn_statusupdatedon: DevKit.Controls.DateTime;
			/** Conversation Title */
			msdyn_title: DevKit.Controls.String;
			/** Conversation Title */
			msdyn_title1: DevKit.Controls.String;
			/** Conversation Title */
			msdyn_title2: DevKit.Controls.String;
			/** Placeholder for Transcript Control */
			msdyn_TranscriptControl: DevKit.Controls.String;
			/** Number of times the conversation was transferred */
			msdyn_transfercount: DevKit.Controls.Integer;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** State of the conversation record */
			StateCode: DevKit.Controls.OptionSet;
			/** Reason for the status of the activity. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyn_msdyn_ocliveworkitem_msdyn_cdsentityengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_ocliveworkitem_msdyn_chatquestionnaireresponse: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_ocliveworkitem_msdyn_livechatengagementctx_liveworkitemid: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_ocliveworkitem_msdyn_ocliveworkitemcontextitem_ocliveworkitemid: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_ocliveworkitem_msdyn_ocsession_liveworkstreamid: DevKit.Controls.NavigationItem,
			nav_msdyn_msdyn_ocliveworkitem_msdyn_transcript: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			SessionDetails: DevKit.Controls.Grid;
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
		/** The Process of form Conversation_Form */
		Process: DevKit.FormConversation_Form.Process;
		/** The Grid of form Conversation_Form */
		Grid: DevKit.FormConversation_Form.Grid;
		/** The SidePanes of form Conversation_Form */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormCustomer_summary {
		interface tab_Details_Sections {
			Details_section_3: DevKit.Controls.Section;
			Details_section_4: DevKit.Controls.Section;
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
			/** Unique identifier for Case associated with Conversation. */
			msdyn_IssueId: DevKit.Controls.Lookup;
			/** Field to bind Timelinewall control */
			msdyn_TimelineControlField: DevKit.Controls.String;
			notescontrol: DevKit.Controls.Note;
			OCSearchRuntimeControl: DevKit.Controls.IFrame;
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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormCustomer_summary extends DevKit.IForm {
		/**
		* Customer summary [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Customer_summary */
		Body: DevKit.FormCustomer_summary.Body;
		/** The QuickForm of form Customer_summary */
		QuickForm: DevKit.FormCustomer_summary.QuickForm;
		/** The Process of form Customer_summary */
		Process: DevKit.FormCustomer_summary.Process;
		/** The SidePanes of form Customer_summary */
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
		/** Agent currently assigned to the conversation and last agent assigned for closed conversations */
		msdyn_activeagentid: string;
		msdyn_activesessionparticipantid: string;
		/** Unique identifier for Queue associated with Conversation. */
		msdyn_cdsqueueid: string;
		/** The channel(s) in the conversation. */
		msdyn_channel: Array<OptionSet.msdyn_ocliveworkitem.msdyn_channel>;
		/** Channel Provider Name. */
		msdyn_channelproviderName: string;
		/** Date and time when conversation was closed */
		msdyn_closedon_UtcDateAndTime: Date;
		/** Field to bind conversation summary control */
		msdyn_ConversationSummaryField: string;
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
		/** Time when conversation was initiated */
		msdyn_initiatedon_UtcDateAndTime: Date;
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
		msdyn_ocliveworkitemid1: string;
		/** Unique identifier for msdyn_omnichannelqueue associated with Conversation */
		msdyn_queueid: string;
		/** Queue item associated with the conversation */
		msdyn_queueitemid: string;
		/** Unique identifier of the routed record. Records are of those entities enabled for Unified Routing and have at least one Workstream created. For internal use only. */
		msdyn_routableobjectid: string;
		/** Lookup for the Social Profile Entity Record. */
		msdyn_socialprofileid: string;
		/** Date and time when conversation was started */
		msdyn_startedon_UtcDateAndTime: Date;
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
		regardingobjectid_msdyn_processnotes_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_productinventory_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_projectteam_msdyn_ocliveworkitem: string;
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
		regardingobjectid_opportunity_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_quote_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_salesorder_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_site_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_action_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_hostedapplication_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_nonhostedapplication_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_option_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_savedsession_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_workflow_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_workflowstep_msdyn_ocliveworkitem: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_workflow_workflowstep_mapping_msdyn_ocliveworkitem: string;
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
	}
}
declare namespace OptionSet {
	namespace msdyn_ocliveworkitem {
		enum ActivityTypeCode {
			/** 10086 */
			Activity_record_for_the_Teams_chat,
			/** 4201 */
			Appointment,
			/** 10404 */
			Booking_Alert,
			/** 4402 */
			Campaign_Activity,
			/** 4401 */
			Campaign_Response,
			/** 4206 */
			Case_Resolution,
			/** 10707 */
			Conversation,
			/** 10313 */
			Customer_Voice_alert,
			/** 10323 */
			Customer_Voice_survey_invite,
			/** 10325 */
			Customer_Voice_survey_response,
			/** 4202 */
			Email,
			/** 4204 */
			Fax,
			/** 4207 */
			Letter,
			/** 4208 */
			Opportunity_Close,
			/** 4209 */
			Order_Close,
			/** 10817 */
			Outbound_message,
			/** 4210 */
			Phone_Call,
			/** 10434 */
			Project_Service_Approval,
			/** 4406 */
			Quick_Campaign,
			/** 4211 */
			Quote_Close,
			/** 4251 */
			Recurring_Appointment,
			/** 4214 */
			Service_Activity,
			/** 10721 */
			Session,
			/** 4212 */
			Task
		}
		enum Community {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}