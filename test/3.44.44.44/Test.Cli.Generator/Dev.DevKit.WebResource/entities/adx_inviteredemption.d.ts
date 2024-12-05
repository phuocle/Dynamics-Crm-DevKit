//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formadx_inviteredemption_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Select the activity's status. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface tab__BA71FD37_5DF2_4665_AE0C_1F0F30DB19A6_Sections {
			_171A0ADC_6B27_41FB_B31F_2D6C193677F1: DevKit.Controls.Section;
		}
		interface tab__BA71FD37_5DF2_4665_AE0C_1F0F30DB19A6 extends DevKit.Controls.ITab {
			Section: tab__BA71FD37_5DF2_4665_AE0C_1F0F30DB19A6_Sections;
		}
		interface Tabs {
			_BA71FD37_5DF2_4665_AE0C_1F0F30DB19A6: tab__BA71FD37_5DF2_4665_AE0C_1F0F30DB19A6;
		}
		interface Body {
			Tab: Tabs;
			adx_ipAddress: DevKit.Controls.String;
			/** Shows the date and time when the activity was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Customer with which the activity is associated. */
			Customers: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Enter the user or team who is assigned to manage or maintain the activity. This field is updated every time the activity is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
		}
		interface Navigation {
			adx_inviteredemption_QueueItems: DevKit.Controls.NavigationItem
		}
	}
	class Formadx_inviteredemption_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form adx_inviteredemption_Information */
		Body: DevKit.Formadx_inviteredemption_Information.Body;
		/** The Header section of form adx_inviteredemption_Information */
		Header: DevKit.Formadx_inviteredemption_Information.Header;
		/** The Navigation of form adx_inviteredemption_Information */
		Navigation: DevKit.Formadx_inviteredemption_Information.Navigation;
		/** The SidePanes of form adx_inviteredemption_Information */
		SidePanes: DevKit.SidePanes;
	}
	class adx_inviteredemptionApi {
		/**
		* DynamicsCrm.DevKit adx_inviteredemptionApi
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
		/** Shows the activity. */
		ActivityId: string;
		/** Enter the actual duration of the activity in minutes. */
		ActualDurationMinutes: number;
		/** Enter the actual end time of the activity. */
		ActualEnd_UtcDateAndTime: Date;
		/** Enter the actual start time of the activity. */
		ActualStart_UtcDateAndTime: Date;
		adx_ipAddress: string;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: OptionSet.adx_inviteredemption.Community;
		/** Shows who created the activity. */
		readonly CreatedBy: string;
		/** Shows the date and time when the activity was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the activity pointer on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the date and time when the delivery of the activity was last attempted. */
		readonly DeliveryLastAttemptedOn_UtcDateAndTime: Date;
		/** Shows the priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: OptionSet.adx_inviteredemption.DeliveryPriorityCode;
		/** Description of the activity. */
		Description: string;
		/** The message id of activity which is returned from Exchange Server. */
		ExchangeItemId: string;
		/** Exchange rate for the currency associated with the activitypointer with respect to the base currency. */
		readonly ExchangeRate: number;
		/** Shows the web link of Activity of type email. */
		ExchangeWebLink: string;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Shows the type of instance of a recurring series. */
		readonly InstanceTypeCode: OptionSet.adx_inviteredemption.InstanceTypeCode;
		/** Shows whether the activity was billed as part of resolving a case. */
		IsBilled: boolean;
		/** For internal use only. */
		IsMapiPrivate: boolean;
		/** Shows whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean;
		/** Shows whether the activity was created from a workflow rule. */
		IsWorkflowCreated: boolean;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Select if the voice mail was left. */
		LeftVoiceMail: boolean;
		/** Shows who last updated the activity. */
		readonly ModifiedBy: string;
		/** Shows the date and time when activity was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the activity pointer on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number;
		/** Shows the date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Shows the business unit that owns the activity. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team that owns the activity. */
		readonly OwningTeam: string;
		/** Unique identifier of the user that owns the activity. */
		readonly OwningUser: string;
		/** For internal use only. */
		readonly PostponeActivityProcessingUntil_UtcDateAndTime: Date;
		/** Shows the priority of the activity. */
		PriorityCode: OptionSet.adx_inviteredemption.PriorityCode;
		/** Shows the process. */
		ProcessId: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_account_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_adx_invitation_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bookableresourcebooking_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bookableresourcebookingheader_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bulkoperation_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_campaign_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_campaignactivity_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_contact_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_contract_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_entitlement_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_entitlementtemplate_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_incident_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_new_interactionforemail_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_invoice_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgearticle_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgebaserecord_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_lead_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_contentsettings_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_customerjourney_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_leadscoremodel_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinaccount_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinactivity_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinfieldmapping_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinform_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinformanswer_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinformquestion_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinformsubmission_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinuserprofile_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_marketingemailtestsend_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_migration_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_uicconfig_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreement_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingdate_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingincident_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingproduct_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingservice_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingservicetask_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingsetup_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementinvoicedate_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementinvoiceproduct_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementinvoicesetup_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_bookingalertstatus_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_bookingrule_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_bookingtimestamp_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_customerasset_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_fieldservicesetting_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_incidenttypecharacteristic_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_incidenttypeproduct_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_incidenttypeservice_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventoryadjustment_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventoryjournal_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventorytransfer_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_payment_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_paymentdetail_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_paymentmethod_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_paymentterm_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_playbookinstance_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_postalbum_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_postalcode_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_productinventory_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorder_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderbill_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderproduct_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderreceipt_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseordersubstatus_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingincident_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingproduct_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingservice_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingservicetask_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_resourceterritory_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rma_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmaproduct_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmareceipt_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmareceiptproduct_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmasubstatus_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rtv_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rtvproduct_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rtvsubstatus_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_salessuggestion_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_shipvia_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_swarm_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_systemuserschedulersetting_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_timegroup_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_timegroupdetail_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_timeoffrequest_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_warehouse_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorder_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workordercharacteristic_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderincident_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderproduct_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderresourcerestriction_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderservice_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderservicetask_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_checkin_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_event_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_eventpurchase_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_eventpurchaseattendee_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_eventpurchasepass_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_eventregistration_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_hotel_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_hotelroomallocation_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_hotelroomreservation_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_layout_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_room_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_session_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_sessionregistration_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_sessiontrack_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_speaker_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_speakerengagement_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_sponsorablearticle_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_sponsorship_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_venue_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_webinarconfiguration_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_webinarprovider_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_mspp_adplacement_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_mspp_pollplacement_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_mspp_publishingstatetransitionrule_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_mspp_redirect_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_mspp_shortcut_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_mspp_website_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_opportunity_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_quote_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_salesorder_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_service_adx_inviteredemption: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_site_adx_inviteredemption: string;
		/** Enter the scheduled duration of the activity, in minutes. */
		ScheduledDurationMinutes: number;
		/** Enter the scheduled end time of the activity. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Enter the scheduled end time of the activity. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Unique identifier of the mailbox associated with the sender of the email message. */
		readonly SenderMailboxId: string;
		/** Shows the date and time when the activity was sent. */
		readonly SentOn_UtcDateAndTime: Date;
		/** Shows the ID of the recurring series of an instance. */
		readonly SeriesId: string;
		/** Unique identifier of an associated service. */
		ServiceId: string;
		/** Choose the service level agreement (SLA) that you want to apply to the case record. */
		SLAId: string;
		/** Last SLA that was applied to this case. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date;
		/** Shows the stage. */
		StageId: string;
		/** Status of the activity. */
		StateCode: OptionSet.adx_inviteredemption.StateCode;
		/** Select the activity's status. */
		StatusCode: OptionSet.adx_inviteredemption.StatusCode;
		/** Subject associated with the activity. */
		Subject: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Unique identifier of the currency associated with the activitypointer. */
		TransactionCurrencyId: string;
		/** For internal use only. */
		TraversedPath: string;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the activity. */
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
		readonly FormattedValue: {
			/** Additional information provided by the external application as JSON. For internal use only. */
			readonly ActivityAdditionalParams: string;
			/** Shows the activity. */
			readonly ActivityId: string;
			/** Enter the actual duration of the activity in minutes. */
			readonly ActualDurationMinutes: string;
			/** Enter the actual end time of the activity. */
			readonly ActualEnd_UtcDateAndTime: string;
			/** Enter the actual start time of the activity. */
			readonly ActualStart_UtcDateAndTime: string;
			readonly adx_ipAddress: string;
			/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
			readonly Community: string;
			/** Shows who created the activity. */
			readonly CreatedBy: string;
			/** Shows the date and time when the activity was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the activity pointer on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the date and time when the delivery of the activity was last attempted. */
			readonly DeliveryLastAttemptedOn_UtcDateAndTime: string;
			/** Shows the priority of delivery of the activity to the email server. */
			readonly DeliveryPriorityCode: string;
			/** Description of the activity. */
			readonly Description: string;
			/** The message id of activity which is returned from Exchange Server. */
			readonly ExchangeItemId: string;
			/** Exchange rate for the currency associated with the activitypointer with respect to the base currency. */
			readonly ExchangeRate: string;
			/** Shows the web link of Activity of type email. */
			readonly ExchangeWebLink: string;
			/** Shows the sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Shows the type of instance of a recurring series. */
			readonly InstanceTypeCode: string;
			/** Shows whether the activity was billed as part of resolving a case. */
			readonly IsBilled: string;
			/** For internal use only. */
			readonly IsMapiPrivate: string;
			/** Shows whether the activity is a regular activity type or event type. */
			readonly IsRegularActivity: string;
			/** Shows whether the activity was created from a workflow rule. */
			readonly IsWorkflowCreated: string;
			/** Contains the date and time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Select if the voice mail was left. */
			readonly LeftVoiceMail: string;
			/** Shows who last updated the activity. */
			readonly ModifiedBy: string;
			/** Shows the date and time when activity was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the activity pointer on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Shows how long, in minutes, that the record was on hold. */
			readonly OnHoldTime: string;
			/** Shows the date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Shows the business unit that owns the activity. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team that owns the activity. */
			readonly OwningTeam: string;
			/** Unique identifier of the user that owns the activity. */
			readonly OwningUser: string;
			/** For internal use only. */
			readonly PostponeActivityProcessingUntil_UtcDateAndTime: string;
			/** Shows the priority of the activity. */
			readonly PriorityCode: string;
			/** Shows the process. */
			readonly ProcessId: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_account_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_adx_invitation_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_bookableresourcebooking_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_bookableresourcebookingheader_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_bulkoperation_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_campaign_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_campaignactivity_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_contact_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_contract_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_entitlement_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_entitlementtemplate_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_incident_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_new_interactionforemail_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_invoice_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_knowledgearticle_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_knowledgebaserecord_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_lead_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_contentsettings_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_customerjourney_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_leadscoremodel_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinaccount_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinactivity_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinfieldmapping_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinform_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinformanswer_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinformquestion_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinformsubmission_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinuserprofile_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_marketingemailtestsend_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_migration_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_uicconfig_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreement_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingdate_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingincident_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingproduct_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingservice_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingservicetask_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingsetup_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementinvoicedate_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementinvoiceproduct_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementinvoicesetup_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_bookingalertstatus_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_bookingrule_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_bookingtimestamp_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_customerasset_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_fieldservicesetting_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_incidenttypecharacteristic_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_incidenttypeproduct_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_incidenttypeservice_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_inventoryadjustment_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_inventoryadjustmentproduct_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_inventoryjournal_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_inventorytransfer_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_payment_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_paymentdetail_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_paymentmethod_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_paymentterm_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_playbookinstance_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_postalbum_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_postalcode_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_productinventory_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorder_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorderbill_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorderproduct_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorderreceipt_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorderreceiptproduct_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseordersubstatus_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_quotebookingincident_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_quotebookingproduct_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_quotebookingservice_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_quotebookingservicetask_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_resourceterritory_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rma_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rmaproduct_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rmareceipt_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rmareceiptproduct_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rmasubstatus_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rtv_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rtvproduct_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rtvsubstatus_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_salessuggestion_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_shipvia_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_swarm_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_systemuserschedulersetting_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_timegroup_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_timegroupdetail_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_timeoffrequest_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_warehouse_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorder_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workordercharacteristic_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderincident_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderproduct_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderresourcerestriction_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderservice_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderservicetask_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_checkin_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_event_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_eventpurchase_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_eventpurchaseattendee_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_eventpurchasepass_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_eventregistration_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_hotel_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_hotelroomallocation_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_hotelroomreservation_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_layout_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_room_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_session_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_sessionregistration_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_sessiontrack_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_speaker_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_speakerengagement_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_sponsorablearticle_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_sponsorship_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_venue_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_webinarconfiguration_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_webinarprovider_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_mspp_adplacement_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_mspp_pollplacement_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_mspp_redirect_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_mspp_shortcut_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_mspp_website_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_opportunity_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_quote_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_salesorder_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_service_adx_inviteredemption: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_site_adx_inviteredemption: string;
			/** Enter the scheduled duration of the activity, in minutes. */
			readonly ScheduledDurationMinutes: string;
			/** Enter the scheduled end time of the activity. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Enter the scheduled end time of the activity. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Unique identifier of the mailbox associated with the sender of the email message. */
			readonly SenderMailboxId: string;
			/** Shows the date and time when the activity was sent. */
			readonly SentOn_UtcDateAndTime: string;
			/** Shows the ID of the recurring series of an instance. */
			readonly SeriesId: string;
			/** Unique identifier of an associated service. */
			readonly ServiceId: string;
			/** Choose the service level agreement (SLA) that you want to apply to the case record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this case. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Shows the date and time by which the activities are sorted. */
			readonly SortDate_UtcDateAndTime: string;
			/** Shows the stage. */
			readonly StageId: string;
			/** Status of the activity. */
			readonly StateCode: string;
			/** Select the activity's status. */
			readonly StatusCode: string;
			/** Subject associated with the activity. */
			readonly Subject: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Unique identifier of the currency associated with the activitypointer. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the activity. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace adx_inviteredemption {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}