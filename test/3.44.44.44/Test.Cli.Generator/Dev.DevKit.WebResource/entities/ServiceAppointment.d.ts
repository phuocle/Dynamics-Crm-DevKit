﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormServiceAppointment_Information {
		interface tab_bookableResourceBooking_Sections {
			Bookable_Resource_Bookings_Section: DevKit.Controls.Section;
		}
		interface tab_details_Sections {
			appointment_details: DevKit.Controls.Section;
		}
		interface tab_service_Sections {
			general_information: DevKit.Controls.Section;
			notes: DevKit.Controls.Section;
			scheduling_information: DevKit.Controls.Section;
		}
		interface tab_bookableResourceBooking extends DevKit.Controls.ITab {
			Section: tab_bookableResourceBooking_Sections;
		}
		interface tab_details extends DevKit.Controls.ITab {
			Section: tab_details_Sections;
		}
		interface tab_service extends DevKit.Controls.ITab {
			Section: tab_service_Sections;
		}
		interface Tabs {
			bookableResourceBooking: tab_bookableResourceBooking;
			details: tab_details;
			service: tab_service;
		}
		interface Body {
			Tab: Tabs;
			/** Type a category to identify the service activity type, such as routine maintenance or service call, to tie the service activity to a business group or function. */
			Category: DevKit.Controls.String;
			/** Enter the accounts and contacts for whom the service activity is being performed. */
			Customers: DevKit.Controls.Lookup;
			/** Select whether the service activity is an all-day event to make sure the required resources are scheduled for the full day. */
			IsAllDayEvent: DevKit.Controls.Boolean;
			/** Type the location where the service activity will take place, such as a conference room, customer office, or other venue. */
			Location: DevKit.Controls.String;
			/** OrganizationalUnit ServiceAppointment Id */
			msdyn_OrganizationalUnitId: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Choose the record that the service activity relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Enter the user, facility, or equipment required to complete the service activity. */
			Resources: DevKit.Controls.Lookup;
			/** Shows the expected duration of the service activity, in minutes. */
			ScheduledDurationMinutes: DevKit.Controls.Integer;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Enter the expected due date and time. */
			ScheduledStart: DevKit.Controls.DateTime;
			/** Choose the service scheduled to be performed during the service activity. */
			ServiceId: DevKit.Controls.Lookup;
			/** Choose the site or location where the service activity will be performed. */
			SiteId: DevKit.Controls.Lookup;
			/** Shows whether the service activity is open, completed, or canceled. Completed and canceled service activities are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
			/** Select the service activity's status. */
			StatusCode: DevKit.Controls.OptionSet;
			/** Type a subcategory to identify the service activity type and relate the activity to a specific product, service region, business group, or other function. */
			Subcategory: DevKit.Controls.String;
			/** Type a short description about the objective or primary topic of the service activity. */
			Subject: DevKit.Controls.String;
		}
		interface Navigation {
			msdyn_serviceappointment_bookableresourcebooking_serviceappointment: DevKit.Controls.NavigationItem,
			msdyn_serviceappointment_msdyn_resourcerequirement_serviceappointment: DevKit.Controls.NavigationItem,
			ServiceAppointment_QueueItem: DevKit.Controls.NavigationItem
		}
		interface Grid {
			bookableresourcebookings: DevKit.Controls.Grid;
		}
	}
	class FormServiceAppointment_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form ServiceAppointment_Information */
		Body: DevKit.FormServiceAppointment_Information.Body;
		/** The Navigation of form ServiceAppointment_Information */
		Navigation: DevKit.FormServiceAppointment_Information.Navigation;
		/** The Grid of form ServiceAppointment_Information */
		Grid: DevKit.FormServiceAppointment_Information.Grid;
		/** The SidePanes of form ServiceAppointment_Information */
		SidePanes: DevKit.SidePanes;
	}
	class ServiceAppointmentApi {
		/**
		* DynamicsCrm.DevKit ServiceAppointmentApi
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
		/** For internal use only. */
		ActivityAdditionalParams: string;
		/** Unique identifier of the service activity. */
		ActivityId: string;
		/** Shows the value selected in the Duration field on the service activity at the time the service activity is closed as completed. The duration is used to report the time spent on the activity. */
		ActualDurationMinutes: number;
		/** Enter the actual end date and time of the service activity. By default, it displays when the activity was closed or canceled. */
		ActualEnd_UtcDateAndTime: Date;
		/** Enter the actual start date and time for the service activity. By default, it displays when the activity was created. */
		ActualStart_UtcDateAndTime: Date;
		/** Type a category to identify the service activity type, such as routine maintenance or service call, to tie the service activity to a business group or function. */
		Category: string;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: OptionSet.ServiceAppointment.Community;
		/** Unique identifier of the user who created the activity. */
		readonly CreatedBy: string;
		/** Date and time when the activity was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the activitypointer. */
		readonly CreatedOnBehalfBy: string;
		/** Date and time when the delivery of the activity was last attempted. */
		readonly DeliveryLastAttemptedOn_UtcDateAndTime: Date;
		/** Priority of delivery of the activity to the email server. */
		DeliveryPriorityCode: OptionSet.ServiceAppointment.DeliveryPriorityCode;
		/** Type additional information to describe the service activity, such as key talking points or objectives. */
		Description: string;
		/** The message id of activity which is returned from Exchange Server. */
		ExchangeItemId: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Shows the web link of Activity of type email. */
		ExchangeWebLink: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Type of instance of a recurring series. */
		readonly InstanceTypeCode: OptionSet.ServiceAppointment.InstanceTypeCode;
		/** Select whether the service activity is an all-day event to make sure the required resources are scheduled for the full day. */
		IsAllDayEvent: boolean;
		/** Information which specifies whether the service activity was billed as part of resolving a case. */
		IsBilled: boolean;
		/** For internal use only. */
		IsMapiPrivate: boolean;
		/** Information regarding whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean;
		/** Information which specifies if the service activity was created from a workflow rule. */
		IsWorkflowCreated: boolean;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Left the voice mail */
		LeftVoiceMail: boolean;
		/** Type the location where the service activity will take place, such as a conference room, customer office, or other venue. */
		Location: string;
		/** Unique identifier of user who last modified the activity. */
		readonly ModifiedBy: string;
		/** Date and time when activity was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the activitypointer. */
		readonly ModifiedOnBehalfBy: string;
		/** OrganizationalUnit ServiceAppointment Id */
		msdyn_OrganizationalUnitId: string;
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
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.ServiceAppointment.PriorityCode;
		/** Unique identifier of the Process. */
		ProcessId: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_account_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_adx_invitation_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_bookableresourcebooking_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_bookableresourcebookingheader_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_bulkoperation_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_campaign_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_campaignactivity_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_contact_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_contract_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_entitlement_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_entitlementtemplate_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_incident_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_new_interactionforemail_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_invoice_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_knowledgearticle_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_knowledgebaserecord_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_lead_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyncrm_contentsettings_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyncrm_customerjourney_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyncrm_leadscoremodel_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyncrm_linkedinaccount_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyncrm_linkedinactivity_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyncrm_linkedinfieldmapping_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyncrm_linkedinform_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyncrm_linkedinformanswer_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyncrm_linkedinformquestion_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyncrm_linkedinformsubmission_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyncrm_linkedinuserprofile_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyncrm_marketingemailtestsend_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyncrm_migration_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyncrm_uicconfig_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_agreement_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_agreementbookingdate_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_agreementbookingincident_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_agreementbookingproduct_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_agreementbookingservice_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_agreementbookingservicetask_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_agreementbookingsetup_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_agreementinvoicedate_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_agreementinvoiceproduct_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_agreementinvoicesetup_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_bookingalertstatus_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_bookingrule_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_bookingtimestamp_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_customerasset_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_fieldservicesetting_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_incidenttypecharacteristic_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_incidenttypeproduct_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_incidenttypeservice_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_inventoryadjustment_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_inventoryjournal_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_inventorytransfer_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_payment_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_paymentdetail_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_paymentmethod_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_paymentterm_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_playbookinstance_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_postalbum_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_postalcode_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_productinventory_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_purchaseorder_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_purchaseorderbill_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_purchaseorderproduct_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_purchaseorderreceipt_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_purchaseordersubstatus_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_quotebookingincident_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_quotebookingproduct_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_quotebookingservice_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_quotebookingservicetask_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_resourceterritory_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_rma_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_rmaproduct_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_rmareceipt_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_rmareceiptproduct_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_rmasubstatus_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_rtv_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_rtvproduct_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_rtvsubstatus_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_salessuggestion_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_shipvia_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_swarm_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_systemuserschedulersetting_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_timegroup_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_timegroupdetail_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_timeoffrequest_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_warehouse_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_workorder_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_workordercharacteristic_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_workorderincident_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_workorderproduct_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_workorderresourcerestriction_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_workorderservice_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msdyn_workorderservicetask_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_checkin_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_event_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_eventpurchase_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_eventpurchaseattendee_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_eventpurchasepass_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_eventregistration_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_hotel_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_hotelroomallocation_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_hotelroomreservation_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_layout_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_room_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_session_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_sessionregistration_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_sessiontrack_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_speaker_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_speakerengagement_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_sponsorablearticle_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_sponsorship_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_venue_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_webinarconfiguration_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_msevtmgt_webinarprovider_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_mspp_adplacement_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_mspp_pollplacement_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_mspp_publishingstatetransitionrule_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_mspp_redirect_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_mspp_shortcut_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_mspp_website_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_opportunity_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_quote_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_salesorder_serviceappointment: string;
		/** Choose the record that the service activity relates to. */
		regardingobjectid_site_serviceappointment: string;
		/** Shows the expected duration of the service activity, in minutes. */
		ScheduledDurationMinutes: number;
		/** Enter the expected due date and time. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Enter the expected due date and time. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Unique identifier of the mailbox associated with the sender of the email message. */
		readonly SenderMailboxId: string;
		/** Date and time when the activity was sent. */
		readonly SentOn_UtcDateAndTime: Date;
		/** Uniqueidentifier specifying the id of recurring series of an instance. */
		readonly SeriesId: string;
		/** Choose the service scheduled to be performed during the service activity. */
		ServiceId: string;
		/** Choose the site or location where the service activity will be performed. */
		SiteId: string;
		/** Choose the service level agreement (SLA) that you want to apply to the service appointment record. */
		SLAId: string;
		/** Last SLA that was applied to this email. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date;
		/** Unique identifier of the Stage. */
		StageId: string;
		/** Shows whether the service activity is open, completed, or canceled. Completed and canceled service activities are read-only and can't be edited. */
		StateCode: OptionSet.ServiceAppointment.StateCode;
		/** Select the service activity's status. */
		StatusCode: OptionSet.ServiceAppointment.StatusCode;
		/** Type a subcategory to identify the service activity type and relate the activity to a specific product, service region, business group, or other function. */
		Subcategory: string;
		/** Type a short description about the objective or primary topic of the service activity. */
		Subject: string;
		/** For internal use only. */
		SubscriptionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
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
			/** For internal use only. */
			readonly ActivityAdditionalParams: string;
			/** Unique identifier of the service activity. */
			readonly ActivityId: string;
			/** Shows the value selected in the Duration field on the service activity at the time the service activity is closed as completed. The duration is used to report the time spent on the activity. */
			readonly ActualDurationMinutes: string;
			/** Enter the actual end date and time of the service activity. By default, it displays when the activity was closed or canceled. */
			readonly ActualEnd_UtcDateAndTime: string;
			/** Enter the actual start date and time for the service activity. By default, it displays when the activity was created. */
			readonly ActualStart_UtcDateAndTime: string;
			/** Type a category to identify the service activity type, such as routine maintenance or service call, to tie the service activity to a business group or function. */
			readonly Category: string;
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
			/** Type additional information to describe the service activity, such as key talking points or objectives. */
			readonly Description: string;
			/** The message id of activity which is returned from Exchange Server. */
			readonly ExchangeItemId: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Shows the web link of Activity of type email. */
			readonly ExchangeWebLink: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Type of instance of a recurring series. */
			readonly InstanceTypeCode: string;
			/** Select whether the service activity is an all-day event to make sure the required resources are scheduled for the full day. */
			readonly IsAllDayEvent: string;
			/** Information which specifies whether the service activity was billed as part of resolving a case. */
			readonly IsBilled: string;
			/** For internal use only. */
			readonly IsMapiPrivate: string;
			/** Information regarding whether the activity is a regular activity type or event type. */
			readonly IsRegularActivity: string;
			/** Information which specifies if the service activity was created from a workflow rule. */
			readonly IsWorkflowCreated: string;
			/** Contains the date and time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Left the voice mail */
			readonly LeftVoiceMail: string;
			/** Type the location where the service activity will take place, such as a conference room, customer office, or other venue. */
			readonly Location: string;
			/** Unique identifier of user who last modified the activity. */
			readonly ModifiedBy: string;
			/** Date and time when activity was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the activitypointer. */
			readonly ModifiedOnBehalfBy: string;
			/** OrganizationalUnit ServiceAppointment Id */
			readonly msdyn_OrganizationalUnitId: string;
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
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			readonly PriorityCode: string;
			/** Unique identifier of the Process. */
			readonly ProcessId: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_account_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_adx_invitation_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_bookableresourcebooking_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_bookableresourcebookingheader_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_bulkoperation_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_campaign_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_campaignactivity_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_contact_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_contract_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_entitlement_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_entitlementtemplate_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_incident_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_new_interactionforemail_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_invoice_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_knowledgearticle_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_knowledgebaserecord_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_lead_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyncrm_contentsettings_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyncrm_customerjourney_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyncrm_leadscoremodel_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyncrm_linkedinaccount_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyncrm_linkedinactivity_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyncrm_linkedinfieldmapping_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyncrm_linkedinform_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformanswer_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformquestion_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformsubmission_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyncrm_linkedinuserprofile_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyncrm_marketingemailtestsend_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyncrm_migration_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyncrm_uicconfig_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_agreement_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_agreementbookingdate_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_agreementbookingincident_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_agreementbookingproduct_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_agreementbookingservice_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_agreementbookingservicetask_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_agreementbookingsetup_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_agreementinvoicedate_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_agreementinvoiceproduct_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_agreementinvoicesetup_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_bookingalertstatus_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_bookingrule_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_bookingtimestamp_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_customerasset_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_fieldservicesetting_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_incidenttypecharacteristic_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_incidenttypeproduct_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_incidenttypeservice_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_inventoryadjustment_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_inventoryadjustmentproduct_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_inventoryjournal_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_inventorytransfer_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_payment_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_paymentdetail_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_paymentmethod_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_paymentterm_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_playbookinstance_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_postalbum_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_postalcode_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_productinventory_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_purchaseorder_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_purchaseorderbill_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_purchaseorderproduct_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_purchaseorderreceipt_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_purchaseorderreceiptproduct_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_purchaseordersubstatus_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_quotebookingincident_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_quotebookingproduct_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_quotebookingservice_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_quotebookingservicetask_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_resourceterritory_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_rma_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_rmaproduct_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_rmareceipt_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_rmareceiptproduct_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_rmasubstatus_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_rtv_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_rtvproduct_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_rtvsubstatus_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_salessuggestion_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_shipvia_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_swarm_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_systemuserschedulersetting_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_timegroup_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_timegroupdetail_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_timeoffrequest_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_warehouse_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_workorder_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_workordercharacteristic_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_workorderincident_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_workorderproduct_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_workorderresourcerestriction_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_workorderservice_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msdyn_workorderservicetask_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_checkin_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_event_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchase_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchaseattendee_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchasepass_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_eventregistration_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_hotel_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_hotelroomallocation_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_hotelroomreservation_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_layout_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_room_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_session_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_sessionregistration_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_sessiontrack_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_speaker_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_speakerengagement_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_sponsorablearticle_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_sponsorship_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_venue_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_webinarconfiguration_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_msevtmgt_webinarprovider_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_mspp_adplacement_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_mspp_pollplacement_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_mspp_redirect_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_mspp_shortcut_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_mspp_website_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_opportunity_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_quote_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_salesorder_serviceappointment: string;
			/** Choose the record that the service activity relates to. */
			readonly regardingobjectid_site_serviceappointment: string;
			/** Shows the expected duration of the service activity, in minutes. */
			readonly ScheduledDurationMinutes: string;
			/** Enter the expected due date and time. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Enter the expected due date and time. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Unique identifier of the mailbox associated with the sender of the email message. */
			readonly SenderMailboxId: string;
			/** Date and time when the activity was sent. */
			readonly SentOn_UtcDateAndTime: string;
			/** Uniqueidentifier specifying the id of recurring series of an instance. */
			readonly SeriesId: string;
			/** Choose the service scheduled to be performed during the service activity. */
			readonly ServiceId: string;
			/** Choose the site or location where the service activity will be performed. */
			readonly SiteId: string;
			/** Choose the service level agreement (SLA) that you want to apply to the service appointment record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this email. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Shows the date and time by which the activities are sorted. */
			readonly SortDate_UtcDateAndTime: string;
			/** Unique identifier of the Stage. */
			readonly StageId: string;
			/** Shows whether the service activity is open, completed, or canceled. Completed and canceled service activities are read-only and can't be edited. */
			readonly StateCode: string;
			/** Select the service activity's status. */
			readonly StatusCode: string;
			/** Type a subcategory to identify the service activity type and relate the activity to a specific product, service region, business group, or other function. */
			readonly Subcategory: string;
			/** Type a short description about the objective or primary topic of the service activity. */
			readonly Subject: string;
			/** For internal use only. */
			readonly SubscriptionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
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
	namespace ServiceAppointment {
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
			Closed,
			/** 0 */
			Open,
			/** 3 */
			Scheduled
		}
		enum StatusCode {
			/** 7 */
			Arrived,
			/** 9 */
			Canceled,
			/** 8 */
			Completed,
			/** 6 */
			In_Progress,
			/** 10 */
			No_Show,
			/** 3 */
			Pending,
			/** 1 */
			Requested,
			/** 4 */
			Reserved,
			/** 2 */
			Tentative
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