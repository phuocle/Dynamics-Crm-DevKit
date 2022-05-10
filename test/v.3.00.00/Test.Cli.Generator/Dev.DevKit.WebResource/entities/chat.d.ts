//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class chatApi {
		/**
		* DynamicsCrm.DevKit chatApi
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
		Community: OptionSet.chat.Community;
		/** Unique identifier of the user who created the activity. */
		readonly CreatedBy: string;
		/** Date and time when the activity was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the activitypointer. */
		readonly CreatedOnBehalfBy: string;
		/** Date and time when the delivery of the activity was last attempted. */
		readonly DeliveryLastAttemptedOn_UtcDateAndTime: Date;
		/** Priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: OptionSet.chat.DeliveryPriorityCode;
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
		readonly InstanceTypeCode: OptionSet.chat.InstanceTypeCode;
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
		/** For internal use only. Unique identifier of the user who linked the record. */
		readonly LinkedBy: string;
		/** For internal use only. Date and time when the record was linked. */
		readonly LinkedOn_UtcDateAndTime: Date;
		/** Unique identifier of user who last modified the activity. */
		readonly ModifiedBy: string;
		/** Date and time when activity was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the activitypointer. */
		readonly ModifiedOnBehalfBy: string;
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
		PriorityCode: OptionSet.chat.PriorityCode;
		/** Unique identifier of the Process. */
		ProcessId: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_account_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bookableresourcebooking_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bookableresourcebookingheader_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bulkoperation_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_campaign_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_campaignactivity_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_contact_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_contract_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_entitlement_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_entitlementtemplate_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_incident_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_new_interactionforemail_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_invoice_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgearticle_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgebaserecord_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_lead_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreement_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingdate_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingincident_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingproduct_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingservice_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingservicetask_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingsetup_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementinvoicedate_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementinvoiceproduct_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementinvoicesetup_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_bookingalertstatus_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_bookingrule_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_bookingtimestamp_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_customerasset_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_fieldservicesetting_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_incidenttypecharacteristic_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_incidenttypeproduct_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_incidenttypeservice_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventoryadjustment_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventoryjournal_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventorytransfer_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_payment_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_paymentdetail_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_paymentmethod_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_paymentterm_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_playbookinstance_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_postalbum_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_postalcode_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_processnotes_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_productinventory_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_projectteam_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorder_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderbill_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderproduct_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderreceipt_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseordersubstatus_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingincident_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingproduct_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingservice_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingservicetask_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_resourceterritory_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rma_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmaproduct_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmareceipt_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmareceiptproduct_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmasubstatus_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rtv_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rtvproduct_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rtvsubstatus_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_salessuggestion_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_shipvia_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_systemuserschedulersetting_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_timegroup_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_timegroupdetail_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_timeoffrequest_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_warehouse_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorder_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workordercharacteristic_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderincident_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderproduct_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderresourcerestriction_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderservice_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderservicetask_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_opportunity_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_quote_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_salesorder_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_service_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_site_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_action_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_hostedapplication_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_nonhostedapplication_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_option_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_savedsession_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_workflow_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_workflowstep_chat: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_uii_workflow_workflowstep_mapping_chat: string;
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
		/** Choose the service level agreement (SLA) that you want to apply to the case record. */
		SLAId: string;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date;
		/** Unique identifier of the Stage. */
		StageId: string;
		/** Status of the activity. */
		StateCode: OptionSet.chat.StateCode;
		/** Reason for the status of the activity. */
		StatusCode: OptionSet.chat.StatusCode;
		/** For internal use only. Subject */
		Subject: string;
		/** For internal use only. Teams Chat Id */
		teamschatid: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the activitypointer. */
		TransactionCurrencyId: string;
		/** For internal use only. */
		TraversedPath: string;
		/** For internal use only. Unique identifier of the user who unlinked the record. */
		readonly UnLinkedBy: string;
		/** For internal use only. Date and time when the record was unlinked. */
		readonly UnLinkedOn_UtcDateAndTime: Date;
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
			/** For internal use only. Unique identifier of the user who linked the record. */
			readonly LinkedBy: string;
			/** For internal use only. Date and time when the record was linked. */
			readonly LinkedOn_UtcDateAndTime: string;
			/** Unique identifier of user who last modified the activity. */
			readonly ModifiedBy: string;
			/** Date and time when activity was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the activitypointer. */
			readonly ModifiedOnBehalfBy: string;
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
			readonly regardingobjectid_account_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_bookableresourcebooking_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_bookableresourcebookingheader_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_bulkoperation_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_campaign_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_campaignactivity_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_contact_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_contract_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_entitlement_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_entitlementtemplate_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_incident_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_new_interactionforemail_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_invoice_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_knowledgearticle_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_knowledgebaserecord_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_lead_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreement_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingdate_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingincident_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingproduct_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingservice_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingservicetask_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingsetup_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementinvoicedate_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementinvoiceproduct_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementinvoicesetup_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_bookingalertstatus_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_bookingrule_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_bookingtimestamp_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_customerasset_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_fieldservicesetting_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_incidenttypecharacteristic_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_incidenttypeproduct_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_incidenttypeservice_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_inventoryadjustment_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_inventoryadjustmentproduct_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_inventoryjournal_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_inventorytransfer_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_payment_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_paymentdetail_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_paymentmethod_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_paymentterm_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_playbookinstance_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_postalbum_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_postalcode_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_processnotes_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_productinventory_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_projectteam_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorder_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorderbill_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorderproduct_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorderreceipt_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorderreceiptproduct_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseordersubstatus_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_quotebookingincident_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_quotebookingproduct_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_quotebookingservice_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_quotebookingservicetask_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_resourceterritory_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rma_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rmaproduct_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rmareceipt_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rmareceiptproduct_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rmasubstatus_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rtv_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rtvproduct_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rtvsubstatus_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_salessuggestion_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_shipvia_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_systemuserschedulersetting_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_timegroup_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_timegroupdetail_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_timeoffrequest_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_warehouse_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorder_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workordercharacteristic_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderincident_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderproduct_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderresourcerestriction_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderservice_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderservicetask_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_opportunity_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_quote_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_salesorder_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_service_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_site_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_uii_action_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_uii_hostedapplication_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_uii_nonhostedapplication_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_uii_option_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_uii_savedsession_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_uii_workflow_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_uii_workflowstep_chat: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_uii_workflow_workflowstep_mapping_chat: string;
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
			/** Choose the service level agreement (SLA) that you want to apply to the case record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this case. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Shows the date and time by which the activities are sorted. */
			readonly SortDate_UtcDateAndTime: string;
			/** Unique identifier of the Stage. */
			readonly StageId: string;
			/** Status of the activity. */
			readonly StateCode: string;
			/** Reason for the status of the activity. */
			readonly StatusCode: string;
			/** For internal use only. Subject */
			readonly Subject: string;
			/** For internal use only. Teams Chat Id */
			readonly teamschatid: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the activitypointer. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** For internal use only. Unique identifier of the user who unlinked the record. */
			readonly UnLinkedBy: string;
			/** For internal use only. Date and time when the record was unlinked. */
			readonly UnLinkedOn_UtcDateAndTime: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the activity. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace chat {
		enum ActivityTypeCode {
			/** 10088 */
			Activity_record_for_the_Teams_chat,
			/** 4201 */
			Appointment,
			/** 10473 */
			Booking_Alert,
			/** 4402 */
			Campaign_Activity,
			/** 4401 */
			Campaign_Response,
			/** 4206 */
			Case_Resolution,
			/** 10743 */
			Conversation,
			/** 10330 */
			Customer_Voice_alert,
			/** 10340 */
			Customer_Voice_survey_invite,
			/** 10342 */
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
			/** 10857 */
			Outbound_message,
			/** 4210 */
			Phone_Call,
			/** 10489 */
			Project_Service_Approval,
			/** 4406 */
			Quick_Campaign,
			/** 4211 */
			Quote_Close,
			/** 4251 */
			Recurring_Appointment,
			/** 4214 */
			Service_Activity,
			/** 10760 */
			Session,
			/** 4212 */
			Task
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
		enum OwnerIdType {
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
//{'UseForm':false,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}