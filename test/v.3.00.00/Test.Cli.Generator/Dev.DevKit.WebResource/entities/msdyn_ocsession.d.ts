﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormOmnichannel_session_form {
		interface Header extends DevKit.Controls.IHeader {
			/** Status of the activity. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab__E74AC0DC_7C2F_4E02_9235_A56E038611BA_Sections {
		}
		interface tab__E74AC0DC_7C2F_4E02_9235_A56E038611BA extends DevKit.Controls.ITab {
			Section: tab__E74AC0DC_7C2F_4E02_9235_A56E038611BA_Sections;
		}
		interface Tabs {
			_E74AC0DC_7C2F_4E02_9235_A56E038611BA: tab__E74AC0DC_7C2F_4E02_9235_A56E038611BA;
		}
		interface Body {
			Tab: Tabs;
			/** Date and time when session was accepted by agent */
			msdyn_agentacceptedon: DevKit.Controls.DateTime;
			/** Date and time when session was assigned to agent */
			msdyn_agentassignedon: DevKit.Controls.DateTime;
			/** The channel type of the session */
			msdyn_channel: DevKit.Controls.OptionSet;
			/** Unique Identifier  of Conversation associated to the session */
			msdyn_liveworkitemid: DevKit.Controls.Lookup;
			/** Date and time when session was closed */
			msdyn_sessionclosedon: DevKit.Controls.DateTime;
			/** Date and time when session was created */
			msdyn_sessioncreatedon: DevKit.Controls.DateTime;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
		}
		interface Navigation {
			nav_msdyn_msdyn_ocsession_msdyn_ocliveworkitem_lastsessionid: DevKit.Controls.NavigationItem,
			nav_msdyn_ocsession_sessionevent_nested: DevKit.Controls.NavigationItem,
			nav_msdyn_ocsession_sessionparticipant_nested: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			session_participants: DevKit.Controls.Grid;
		}
	}
	class FormOmnichannel_session_form extends DevKit.IForm {
		/**
		* Omnichannel session form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Omnichannel_session_form */
		Body: DevKit.FormOmnichannel_session_form.Body;
		/** The Header section of form Omnichannel_session_form */
		Header: DevKit.FormOmnichannel_session_form.Header;
		/** The Navigation of form Omnichannel_session_form */
		Navigation: DevKit.FormOmnichannel_session_form.Navigation;
		/** The Process of form Omnichannel_session_form */
		Process: DevKit.FormOmnichannel_session_form.Process;
		/** The Grid of form Omnichannel_session_form */
		Grid: DevKit.FormOmnichannel_session_form.Grid;
		/** The SidePanes of form Omnichannel_session_form */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ocsessionApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocsessionApi
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
		Community: OptionSet.msdyn_ocsession.Community;
		/** Unique identifier of the user who created the activity. */
		readonly CreatedBy: string;
		/** Date and time when the activity was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the activitypointer. */
		readonly CreatedOnBehalfBy: string;
		/** Date and time when the delivery of the activity was last attempted. */
		readonly DeliveryLastAttemptedOn_UtcDateAndTime: Date;
		/** Priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: OptionSet.msdyn_ocsession.DeliveryPriorityCode;
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
		readonly InstanceTypeCode: OptionSet.msdyn_ocsession.InstanceTypeCode;
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
		/** Date and time when session was accepted by agent */
		msdyn_agentacceptedon_UtcDateAndTime: Date;
		/** Date and time when session was assigned to agent */
		msdyn_agentassignedon_UtcDateAndTime: Date;
		/** Indicates when a bot was engaged */
		msdyn_botengagementmode: OptionSet.msdyn_ocsession.msdyn_botengagementmode;
		/** Unique identifier for Queue associated with Session. */
		msdyn_cdsqueueid: string;
		/** The channel type of the session */
		msdyn_channel: OptionSet.msdyn_ocsession.msdyn_channel;
		/** Reason for session closure */
		msdyn_closurereason: OptionSet.msdyn_ocsession.msdyn_closurereason;
		/** Unique Identifier  of Conversation associated to the session */
		msdyn_liveworkitemid: string;
		/** Reference to primary session. */
		msdyn_primarysession: string;
		/** Date and time when queue was assigned to session */
		msdyn_queueassignedon_UtcDateOnly: Date;
		/** Queue associated to the session */
		msdyn_queueid: string;
		/** Date and time when session was closed */
		msdyn_sessionclosedon_UtcDateAndTime: Date;
		/** Date and time when session was created */
		msdyn_sessioncreatedon_UtcDateAndTime: Date;
		/** Unique Identifier of Session */
		msdyn_sessionid: string;
		/** Date and time when session was last modified */
		msdyn_sessionmodifiedon_UtcDateOnly: Date;
		/** (Deprecated) */
		msdyn_state: OptionSet.msdyn_ocsession.msdyn_state;
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
		PriorityCode: OptionSet.msdyn_ocsession.PriorityCode;
		/** Unique identifier of the Process. */
		ProcessId: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_account_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bookableresourcebooking_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bookableresourcebookingheader_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bulkoperation_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_campaign_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_campaignactivity_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_contact_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_contract_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_entitlement_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_entitlementtemplate_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_incident_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_new_interactionforemail_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_invoice_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgearticle_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgebaserecord_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_lead_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreement_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingdate_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingincident_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingproduct_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingservice_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingservicetask_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingsetup_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementinvoicedate_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementinvoiceproduct_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementinvoicesetup_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_bookingalertstatus_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_bookingrule_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_bookingtimestamp_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_customerasset_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_fieldservicesetting_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_incidenttypecharacteristic_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_incidenttypeproduct_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_incidenttypeservice_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventoryadjustment_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventoryjournal_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventorytransfer_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_payment_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_paymentdetail_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_paymentmethod_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_paymentterm_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_playbookinstance_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_postalbum_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_postalcode_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_processnotes_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_productinventory_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_projectteam_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorder_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderbill_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderproduct_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderreceipt_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseordersubstatus_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingincident_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingproduct_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingservice_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingservicetask_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_resourceterritory_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rma_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmaproduct_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmareceipt_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmareceiptproduct_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmasubstatus_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rtv_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rtvproduct_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rtvsubstatus_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_salessuggestion_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_shipvia_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_systemuserschedulersetting_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_timegroup_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_timegroupdetail_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_timeoffrequest_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_warehouse_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorder_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workordercharacteristic_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderincident_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderproduct_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderresourcerestriction_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderservice_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderservicetask_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_opportunity_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_quote_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_salesorder_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_site_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_action_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_hostedapplication_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_nonhostedapplication_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_option_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_savedsession_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_workflow_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_workflowstep_msdyn_ocsession: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_workflow_workflowstep_mapping_msdyn_ocsession: string;
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
		/** Status of the activity. */
		StateCode: OptionSet.msdyn_ocsession.StateCode;
		/** Reason for the status of the activity. */
		StatusCode: OptionSet.msdyn_ocsession.StatusCode;
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
	namespace msdyn_ocsession {
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
		enum msdyn_botengagementmode {
			/** 192350000 */
			Default,
			/** 192350003 */
			OffBusinessHour,
			/** 192350002 */
			PostConverstation,
			/** 192350001 */
			PreConversation
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
		enum msdyn_closurereason {
			/** 192350004 */
			AgentClosed,
			/** 192350007 */
			AgentDisconnected,
			/** 192350001 */
			AgentReject,
			/** 192350008 */
			AgentReRouted,
			/** 192350002 */
			AgentTimeout,
			/** 192350006 */
			AgentTransfered,
			/** 192350010 */
			AgentTransferToQueue,
			/** 192350005 */
			ConversationClosed,
			/** 192350003 */
			ConversationTimeout,
			/** 192350000 */
			Default,
			/** 192350011 */
			SupervisorAssignToQueue,
			/** 192350012 */
			SupervisorTransferToAgent,
			/** 192350009 */
			VirtualAgentClosed
		}
		enum msdyn_state {
			/** 192350001 */
			Active,
			/** 192350002 */
			Closed,
			/** 192350000 */
			Default,
			/** 192350003 */
			New
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
			/** 2 */
			Canceled,
			/** 1 */
			Completed,
			/** 0 */
			Open,
			/** 3 */
			Scheduled
		}
		enum StatusCode {
			/** 3 */
			Canceled,
			/** 2 */
			Completed,
			/** 1 */
			Open,
			/** 4 */
			Scheduled
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