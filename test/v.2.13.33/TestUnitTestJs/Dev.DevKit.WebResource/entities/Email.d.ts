//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class EmailApi {
		/**
		* DynamicsCrm.DevKit EmailApi
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** The Entity that Accepted the Email */
		acceptingentityid_queue: DevKit.WebApi.LookupValue;
		/** The Entity that Accepted the Email */
		acceptingentityid_systemuser: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		ActivityAdditionalParams: DevKit.WebApi.StringValue;
		/** Unique identifier of the email activity. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Type the number of minutes spent creating and sending the email. The duration is used in reporting. */
		ActualDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Enter the actual end date and time of the email. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the email. */
		ActualEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the actual start date and time for the email. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the email. */
		ActualStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the umber of attachments of the email message. */
		AttachmentCount: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the number of times an email attachment has been viewed. */
		AttachmentOpenCount: DevKit.WebApi.IntegerValue;
		/** Hash of base of conversation index. */
		BaseConversationIndexHash: DevKit.WebApi.IntegerValue;
		/** Type a category to identify the email type, such as lead outreach, customer follow-up, or service alert, to tie the email to a business group or function. */
		Category: DevKit.WebApi.StringValue;
		/** Indicates if the body is compressed. */
		Compressed: DevKit.WebApi.BooleanValueReadonly;
		/** Identifier for all the email responses for this conversation. */
		ConversationIndex: DevKit.WebApi.StringValueReadonly;
		/** Conversation Tracking Id. */
		ConversationTrackingId: DevKit.WebApi.GuidValue;
		/** Correlated Activity Id */
		CorrelatedActivityId: DevKit.WebApi.LookupValue;
		/** Shows how an email is matched to an existing email in Microsoft Dynamics 365. For system use only. */
		CorrelationMethod: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter the expected date and time when email will be sent. */
		DelayedEmailSendTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the count of the number of attempts made to send the email. The count is used as an indicator of email routing issues. */
		DeliveryAttempts: DevKit.WebApi.IntegerValue;
		/** Select the priority of delivery of the email to the email server. */
		DeliveryPriorityCode: DevKit.WebApi.OptionSetValue;
		/** Select whether the sender should receive confirmation that the email was delivered. */
		DeliveryReceiptRequested: DevKit.WebApi.BooleanValue;
		/** Type the greeting and message text of the email. */
		Description: DevKit.WebApi.StringValue;
		/** Select the direction of the email as incoming or outbound. */
		DirectionCode: DevKit.WebApi.BooleanValue;
		/** Shows the date and time when an email reminder expires. */
		EmailReminderExpiryTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the status of the email reminder. */
		EmailReminderStatus: DevKit.WebApi.OptionSetValueReadonly;
		/** For internal use only. */
		EmailReminderText: DevKit.WebApi.StringValue;
		/** Shows the type of the email reminder. */
		EmailReminderType: DevKit.WebApi.OptionSetValue;
		/** Shows the sender of the email. */
		emailsender_account: DevKit.WebApi.LookupValueReadonly;
		/** Shows the sender of the email. */
		emailsender_contact: DevKit.WebApi.LookupValueReadonly;
		/** Shows the sender of the email. */
		emailsender_equipment: DevKit.WebApi.LookupValueReadonly;
		/** Shows the sender of the email. */
		emailsender_lead: DevKit.WebApi.LookupValueReadonly;
		/** Shows the sender of the email. */
		emailsender_queue: DevKit.WebApi.LookupValueReadonly;
		/** Shows the sender of the email. */
		emailsender_systemuser: DevKit.WebApi.LookupValueReadonly;
		/** Email Tracking Id. */
		EmailTrackingId: DevKit.WebApi.GuidValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Select whether the email allows following recipient activities sent from Microsoft Dynamics 365.This is user preference state which can be overridden by system evaluated state. */
		FollowEmailUserPreference: DevKit.WebApi.BooleanValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Type the ID of the email message that this email activity is a response to. */
		InReplyTo: DevKit.WebApi.StringValueReadonly;
		/** Information regarding whether the email activity was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** For internal use only. Shows whether this email is followed. This is evaluated state which overrides user selection of follow email. */
		IsEmailFollowed: DevKit.WebApi.BooleanValueReadonly;
		/** For internal use only. Shows whether this email Reminder is Set. */
		IsEmailReminderSet: DevKit.WebApi.BooleanValueReadonly;
		/** Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValueReadonly;
		/** For internal use only. */
		IsUnsafe: DevKit.WebApi.IntegerValueReadonly;
		/** Indication if the email was created by a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the latest date and time when email was opened. */
		LastOpenedTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the number of times a link in an email has been clicked. */
		LinksClickedCount: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the email message. Used only for email that is received. */
		MessageId: DevKit.WebApi.StringValue;
		/** MIME type of the email message data. */
		MimeType: DevKit.WebApi.StringValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Select the notification code to identify issues with the email recipients or attachments, such as blocked attachments. */
		Notifications: DevKit.WebApi.OptionSetValue;
		/** Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Shows the number of times an email has been opened. */
		OpenCount: DevKit.WebApi.IntegerValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the email activity. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team who owns the email activity. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the email activity. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Select the activity that the email is associated with. */
		ParentActivityId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		PostponeEmailProcessingUntil_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Indicates that a read receipt is requested. */
		ReadReceiptRequested: DevKit.WebApi.BooleanValue;
		/** The Mailbox that Received the Email. */
		ReceivingMailboxId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_account_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_asyncoperation: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_bookableresourcebooking_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_bookableresourcebookingheader_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_bulkoperation_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_campaign_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_campaignactivity_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_contact_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_contract_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_entitlement_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_entitlementtemplate_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_incident_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_invoice_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_knowledgearticle_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_knowledgebaserecord_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_lead_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreement_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreementbookingdate_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreementbookingincident_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreementbookingproduct_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreementbookingservice_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreementbookingservicetask_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreementbookingsetup_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreementinvoicedate_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreementinvoiceproduct_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_agreementinvoicesetup_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_bookingalertstatus_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_bookingrule_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_bookingtimestamp_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_customerasset_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_fieldservicesetting_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_incidenttypecharacteristic_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_incidenttypeproduct_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_incidenttypeservice_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_inventoryadjustment_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_inventoryjournal_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_inventorytransfer_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_payment_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_paymentdetail_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_paymentmethod_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_paymentterm_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_playbookinstance_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_postalbum_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_postalcode_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_processnotes_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_productinventory_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_projectteam_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_purchaseorder_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_purchaseorderbill_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_purchaseorderproduct_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_purchaseorderreceipt_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_purchaseordersubstatus_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_quotebookingincident_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_quotebookingproduct_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_quotebookingservice_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_quotebookingservicetask_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_resourceterritory_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_rma_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_rmaproduct_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_rmareceipt_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_rmareceiptproduct_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_rmasubstatus_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_rtv_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_rtvproduct_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_rtvsubstatus_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_shipvia_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_systemuserschedulersetting_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_timegroup_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_timegroupdetail_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_timeoffrequest_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_warehouse_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_workorder_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_workordercharacteristic_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_workorderincident_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_workorderproduct_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_workorderresourcerestriction_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_workorderservice_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_msdyn_workorderservicetask_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_opportunity_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_quote_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_salesorder_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_site_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_uii_action_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_uii_hostedapplication_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_uii_nonhostedapplication_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_uii_option_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_uii_savedsession_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_uii_workflow_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_uii_workflowstep_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the e-mail is associated. */
		regardingobjectid_uii_workflow_workflowstep_mapping_email: DevKit.WebApi.LookupValue;
		/** Reminder Action Card Id. */
		ReminderActionCardId: DevKit.WebApi.GuidValue;
		/** Shows the number of replies received for an email. */
		ReplyCount: DevKit.WebApi.IntegerValueReadonly;
		/** For internal use only */
		ReservedForInternalUse: DevKit.WebApi.StringValue;
		/** Safe body text of the e-mail. */
		SafeDescription: DevKit.WebApi.StringValueReadonly;
		/** Scheduled duration of the email activity, specified in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValueReadonly;
		/** Enter the expected due date and time for the activity to be completed to provide details about when the email will be sent. */
		ScheduledEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Enter the expected start date and time for the activity to provide details about the tentative time when the email activity must be initiated. */
		ScheduledStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Sender of the email. */
		Sender: DevKit.WebApi.StringValue;
		/** Select the mailbox associated with the sender of the email message. */
		SenderMailboxId: DevKit.WebApi.LookupValueReadonly;
		/** Shows the parent account of the sender of the email. */
		SendersAccount: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time that the email was sent. */
		SentOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier for the associated service. */
		ServiceId: DevKit.WebApi.LookupValue;
		/** Choose the service level agreement (SLA) that you want to apply to the email record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this email. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		SLAName: DevKit.WebApi.StringValueReadonly;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the email is open, completed, or canceled. Completed and canceled email is read-only and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the email's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a subcategory to identify the email type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: DevKit.WebApi.StringValue;
		/** Type a short description about the objective or primary topic of the email. */
		Subject: DevKit.WebApi.StringValue;
		/** Shows the Microsoft Office Outlook account for the user who submitted the email to Microsoft Dynamics 365. */
		SubmittedBy: DevKit.WebApi.StringValue;
		/** For internal use only. ID for template used in email. */
		TemplateId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the email addresses corresponding to the recipients. */
		ToRecipients: DevKit.WebApi.StringValue;
		/** Shows the tracking token assigned to the email to make sure responses are automatically tracked in Microsoft Dynamics 365. */
		TrackingToken: DevKit.WebApi.StringValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the email message. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<any>;
	}
}
declare namespace OptionSet {
	namespace Email {
		enum CorrelationMethod {
			/** 0 */
			None,
			/** 1 */
			Skipped,
			/** 2 */
			XHeader,
			/** 3 */
			InReplyTo,
			/** 4 */
			TrackingToken,
			/** 5 */
			ConversationIndex,
			/** 6 */
			SmartMatching,
			/** 7 */
			CustomCorrelation
		}
		enum DeliveryPriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum EmailReminderStatus {
			/** 0 */
			NotSet,
			/** 1 */
			ReminderSet,
			/** 2 */
			ReminderExpired,
			/** 3 */
			ReminderInvalid
		}
		enum EmailReminderType {
			/** 0 */
			If_I_do_not_receive_a_reply_by,
			/** 1 */
			If_the_email_is_not_opened_by,
			/** 2 */
			Remind_me_anyways_at
		}
		enum Notifications {
			/** 0 */
			None,
			/** 1 */
			The_message_was_saved_as_a_Microsoft_Dynamics_365_email_record_but_not_all_the_attachments_could_be_saved_with_it_An_attachment_cannot_be_saved_if_it_is_blocked_or_if_its_file_type_is_invalid,
			/** 2 */
			Truncated_body
		}
		enum PriorityCode {
			/** 0 */
			Low,
			/** 1 */
			Normal,
			/** 2 */
			High
		}
		enum StateCode {
			/** 0 */
			Open,
			/** 1 */
			Completed,
			/** 2 */
			Canceled
		}
		enum StatusCode {
			/** 1 */
			Draft,
			/** 2 */
			Completed,
			/** 3 */
			Sent,
			/** 4 */
			Received,
			/** 5 */
			Canceled,
			/** 6 */
			Pending_Send,
			/** 7 */
			Sending,
			/** 8 */
			Failed
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
//{'JsForm':[],'JsWebApi':true,'IsDebugForm':false,'IsDebugWebApi':true,'Version':'2.13.33','JsFormVersion':null}