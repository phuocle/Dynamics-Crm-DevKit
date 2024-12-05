//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_copilottranscript_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Priority of the activity. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Scheduled end time of the activity. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Status of the activity. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface Tabs {
		}
		interface Body {
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
		}
		interface Navigation {
			msdyn_copilottranscript_Feedback: DevKit.Controls.NavigationItem,
			msdyn_copilottranscript_QueueItems: DevKit.Controls.NavigationItem,
			msdyn_msdyn_copilottranscript_msdyn_copilottranscriptdata_copilottranscriptid: DevKit.Controls.NavigationItem
		}
	}
	class Formmsdyn_copilottranscript_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_copilottranscript_Information */
		Body: DevKit.Formmsdyn_copilottranscript_Information.Body;
		/** The Header section of form msdyn_copilottranscript_Information */
		Header: DevKit.Formmsdyn_copilottranscript_Information.Header;
		/** The Navigation of form msdyn_copilottranscript_Information */
		Navigation: DevKit.Formmsdyn_copilottranscript_Information.Navigation;
		/** The SidePanes of form msdyn_copilottranscript_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_copilottranscriptApi {
		/**
		* DynamicsCrm.DevKit msdyn_copilottranscriptApi
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
		Community: OptionSet.msdyn_copilottranscript.Community;
		/** Unique identifier of the user who created the activity. */
		readonly CreatedBy: string;
		/** Date and time when the activity was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the activitypointer. */
		readonly CreatedOnBehalfBy: string;
		/** Date and time when the delivery of the activity was last attempted. */
		readonly DeliveryLastAttemptedOn_UtcDateAndTime: Date;
		/** Priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: OptionSet.msdyn_copilottranscript.DeliveryPriorityCode;
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
		readonly InstanceTypeCode: OptionSet.msdyn_copilottranscript.InstanceTypeCode;
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
		/** Stores additional context about the transcript */
		msdyn_additionalcontext: string;
		/** Id of the record to which this transcript is associated */
		msdyn_transcriptforid: string;
		/** LogicalName of the record to which this interaction is associated */
		msdyn_transcriptforlogicalname: string;
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
		PriorityCode: OptionSet.msdyn_copilottranscript.PriorityCode;
		/** Unique identifier of the Process. */
		ProcessId: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_account_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_adx_invitation_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bookableresourcebooking_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bookableresourcebookingheader_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_bulkoperation_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_campaign_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_campaignactivity_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_contact_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_contract_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_entitlement_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_entitlementtemplate_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_incident_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_new_interactionforemail_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_invoice_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgearticle_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_knowledgebaserecord_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_lead_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_contentsettings_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_customerjourney_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_leadscoremodel_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinaccount_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinactivity_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinfieldmapping_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinform_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinformanswer_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinformquestion_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinformsubmission_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_linkedinuserprofile_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_marketingemailtestsend_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_migration_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyncrm_uicconfig_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreement_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingdate_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingincident_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingproduct_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingservice_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingservicetask_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementbookingsetup_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementinvoicedate_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementinvoiceproduct_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_agreementinvoicesetup_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_bookingalertstatus_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_bookingrule_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_bookingtimestamp_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_customerasset_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_fieldservicesetting_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_incidenttypecharacteristic_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_incidenttypeproduct_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_incidenttypeservice_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventoryadjustment_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventoryjournal_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_inventorytransfer_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_payment_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_paymentdetail_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_paymentmethod_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_paymentterm_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_playbookinstance_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_postalbum_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_postalcode_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_productinventory_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorder_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderbill_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderproduct_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderreceipt_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_purchaseordersubstatus_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingincident_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingproduct_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingservice_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_quotebookingservicetask_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_resourceterritory_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rma_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmaproduct_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmareceipt_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmareceiptproduct_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rmasubstatus_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rtv_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rtvproduct_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_rtvsubstatus_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_salessuggestion_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_shipvia_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_swarm_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_systemuserschedulersetting_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_timegroup_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_timegroupdetail_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_timeoffrequest_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_warehouse_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorder_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workordercharacteristic_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderincident_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderproduct_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderresourcerestriction_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderservice_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msdyn_workorderservicetask_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_checkin_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_event_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_eventpurchase_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_eventpurchaseattendee_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_eventpurchasepass_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_eventregistration_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_hotel_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_hotelroomallocation_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_hotelroomreservation_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_layout_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_room_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_session_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_sessionregistration_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_sessiontrack_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_speaker_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_speakerengagement_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_sponsorablearticle_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_sponsorship_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_venue_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_webinarconfiguration_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_msevtmgt_webinarprovider_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_mspp_adplacement_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_mspp_pollplacement_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_mspp_publishingstatetransitionrule_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_mspp_redirect_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_mspp_shortcut_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_mspp_website_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_opportunity_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_quote_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_salesorder_msdyn_copilottranscript: string;
		/** Unique identifier of the object with which the activity is associated. */
		regardingobjectid_site_msdyn_copilottranscript: string;
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
		StateCode: OptionSet.msdyn_copilottranscript.StateCode;
		/** Reason for the status of the activity. */
		StatusCode: OptionSet.msdyn_copilottranscript.StatusCode;
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
			/** Stores additional context about the transcript */
			readonly msdyn_additionalcontext: string;
			/** Id of the record to which this transcript is associated */
			readonly msdyn_transcriptforid: string;
			/** LogicalName of the record to which this interaction is associated */
			readonly msdyn_transcriptforlogicalname: string;
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
			readonly regardingobjectid_account_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_adx_invitation_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_bookableresourcebooking_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_bookableresourcebookingheader_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_bulkoperation_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_campaign_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_campaignactivity_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_contact_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_contract_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_entitlement_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_entitlementtemplate_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_incident_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_new_interactionforemail_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_invoice_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_knowledgearticle_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_knowledgebaserecord_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_lead_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_contentsettings_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_customerjourney_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_leadscoremodel_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinaccount_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinactivity_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinfieldmapping_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinform_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinformanswer_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinformquestion_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinformsubmission_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_linkedinuserprofile_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_marketingemailtestsend_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_migration_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyncrm_uicconfig_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreement_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingdate_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingincident_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingproduct_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingservice_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingservicetask_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementbookingsetup_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementinvoicedate_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementinvoiceproduct_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_agreementinvoicesetup_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_bookingalertstatus_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_bookingrule_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_bookingtimestamp_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_customerasset_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_fieldservicesetting_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_incidenttypecharacteristic_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_incidenttypeproduct_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_incidenttypeservice_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_inventoryadjustment_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_inventoryadjustmentproduct_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_inventoryjournal_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_inventorytransfer_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_payment_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_paymentdetail_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_paymentmethod_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_paymentterm_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_playbookinstance_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_postalbum_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_postalcode_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_productinventory_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorder_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorderbill_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorderproduct_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorderreceipt_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseorderreceiptproduct_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_purchaseordersubstatus_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_quotebookingincident_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_quotebookingproduct_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_quotebookingservice_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_quotebookingservicetask_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_resourceterritory_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rma_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rmaproduct_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rmareceipt_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rmareceiptproduct_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rmasubstatus_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rtv_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rtvproduct_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_rtvsubstatus_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_salessuggestion_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_shipvia_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_swarm_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_systemuserschedulersetting_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_timegroup_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_timegroupdetail_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_timeoffrequest_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_warehouse_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorder_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workordercharacteristic_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderincident_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderproduct_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderresourcerestriction_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderservice_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msdyn_workorderservicetask_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_checkin_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_event_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_eventpurchase_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_eventpurchaseattendee_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_eventpurchasepass_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_eventregistration_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_hotel_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_hotelroomallocation_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_hotelroomreservation_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_layout_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_room_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_session_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_sessionregistration_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_sessiontrack_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_speaker_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_speakerengagement_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_sponsorablearticle_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_sponsorship_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_venue_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_webinarconfiguration_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_msevtmgt_webinarprovider_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_mspp_adplacement_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_mspp_pollplacement_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_mspp_redirect_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_mspp_shortcut_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_mspp_website_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_opportunity_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_quote_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_salesorder_msdyn_copilottranscript: string;
			/** Unique identifier of the object with which the activity is associated. */
			readonly regardingobjectid_site_msdyn_copilottranscript: string;
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
			/** Status of the activity. */
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
	namespace msdyn_copilottranscript {
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