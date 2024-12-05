//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormFax {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the fax activity is open, completed, or canceled. Completed and canceled fax activities are read-only and can't be edited. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_SUMMARY_TAB_Sections {
			general_information: DevKit.Controls.Section;
			Letter_description: DevKit.Controls.Section;
			Letter_details: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_SUMMARY_TAB extends DevKit.Controls.ITab {
			Section: tab_SUMMARY_TAB_Sections;
		}
		interface Tabs {
			SUMMARY_TAB: tab_SUMMARY_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent creating and sending the fax. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type additional information to describe the fax, such as the primary message or the products and services featured. */
			Description: DevKit.Controls.String;
			/** Select the direction of the fax as incoming or outbound. */
			DirectionCode: DevKit.Controls.Boolean;
			/** Type the recipient's fax number. */
			FaxNumber: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user who sent the fax. */
			from: DevKit.Controls.Lookup;
			/** Choose the record that the fax relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the fax. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the fax. */
			to: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormFax extends DevKit.IForm {
		/**
		* Fax [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Fax */
		Body: DevKit.FormFax.Body;
		/** The Header section of form Fax */
		Header: DevKit.FormFax.Header;
		/** The Navigation of form Fax */
		Navigation: DevKit.FormFax.Navigation;
		/** The SidePanes of form Fax */
		SidePanes: DevKit.SidePanes;
	}
	class FaxApi {
		/**
		* DynamicsCrm.DevKit FaxApi
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
		/** Unique identifier of the fax activity. */
		ActivityId: string;
		/** Type the number of minutes spent creating and sending the fax. The duration is used in reporting. */
		ActualDurationMinutes: number;
		/** Enter the actual end date and time of the fax. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the fax. */
		ActualEnd_UtcDateOnly: Date;
		/** Enter the actual start date and time for the fax. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the fax. */
		ActualStart_UtcDateOnly: Date;
		/** Type the billing code for the fax to make sure the fax is charged to the correct sender or customer account. */
		BillingCode: string;
		/** Type a category to identify the fax type, such as sales offer or press release, to tie the fax to a business group or function. */
		Category: string;
		/** Type the name of the cover page to use when sending the fax. */
		CoverPageName: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type additional information to describe the fax, such as the primary message or the products and services featured. */
		Description: string;
		/** Select the direction of the fax as incoming or outbound. */
		DirectionCode: boolean;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Type the recipient's fax number. */
		FaxNumber: string;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Information regarding whether the fax activity was billed as part of resolving a case. */
		IsBilled: boolean;
		/** Information regarding whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean;
		/** Indication of whether the fax activity was created by a workflow rule. */
		IsWorkflowCreated: boolean;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Type the number of pages included in the fax. */
		NumberOfPages: number;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the fax activity. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team that owns the fax activity. */
		readonly OwningTeam: string;
		/** Unique identifier of the user that owns the fax activity. */
		readonly OwningUser: string;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.Fax.PriorityCode;
		/** Shows the ID of the process. */
		ProcessId: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_account_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_adx_invitation_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_bookableresourcebooking_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_bookableresourcebookingheader_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_bulkoperation_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_campaign_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_campaignactivity_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_contact_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_contract_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_entitlement_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_entitlementtemplate_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_incident_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_invoice_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_knowledgearticle_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_knowledgebaserecord_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_lead_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyncrm_contentsettings_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyncrm_customerjourney_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyncrm_leadscoremodel_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyncrm_linkedinaccount_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyncrm_linkedinactivity_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyncrm_linkedinfieldmapping_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyncrm_linkedinform_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyncrm_linkedinformanswer_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyncrm_linkedinformquestion_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyncrm_linkedinformsubmission_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyncrm_linkedinuserprofile_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyncrm_marketingemailtestsend_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyncrm_migration_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyncrm_uicconfig_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_agreement_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_agreementbookingdate_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_agreementbookingincident_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_agreementbookingproduct_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_agreementbookingservice_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_agreementbookingservicetask_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_agreementbookingsetup_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_agreementinvoicedate_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_agreementinvoiceproduct_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_agreementinvoicesetup_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_bookingalertstatus_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_bookingrule_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_bookingtimestamp_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_customerasset_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_fieldservicesetting_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_incidenttypecharacteristic_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_incidenttypeproduct_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_incidenttypeservice_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_inventoryadjustment_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_inventoryjournal_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_inventorytransfer_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_payment_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_paymentdetail_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_paymentmethod_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_paymentterm_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_playbookinstance_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_postalbum_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_postalcode_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_productinventory_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_purchaseorder_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_purchaseorderbill_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_purchaseorderproduct_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_purchaseorderreceipt_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_purchaseordersubstatus_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_quotebookingincident_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_quotebookingproduct_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_quotebookingservice_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_quotebookingservicetask_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_resourceterritory_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_rma_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_rmaproduct_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_rmareceipt_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_rmareceiptproduct_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_rmasubstatus_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_rtv_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_rtvproduct_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_rtvsubstatus_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_salessuggestion_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_shipvia_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_swarm_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_systemuserschedulersetting_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_timegroup_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_timegroupdetail_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_timeoffrequest_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_warehouse_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_workorder_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_workordercharacteristic_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_workorderincident_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_workorderproduct_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_workorderresourcerestriction_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_workorderservice_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msdyn_workorderservicetask_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_checkin_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_event_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_eventpurchase_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_eventpurchaseattendee_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_eventpurchasepass_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_eventregistration_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_hotel_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_hotelroomallocation_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_hotelroomreservation_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_layout_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_room_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_session_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_sessionregistration_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_sessiontrack_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_speaker_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_speakerengagement_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_sponsorablearticle_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_sponsorship_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_venue_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_webinarconfiguration_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_msevtmgt_webinarprovider_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_mspp_adplacement_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_mspp_pollplacement_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_mspp_publishingstatetransitionrule_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_mspp_redirect_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_mspp_shortcut_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_mspp_website_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_opportunity_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_quote_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_salesorder_fax: string;
		/** Choose the record that the fax relates to. */
		regardingobjectid_site_fax: string;
		/** Shows the expected duration of the fax activity, in minutes. */
		readonly ScheduledDurationMinutes: number;
		/** Enter the expected due date and time. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Enter the expected due date and time. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Unique identifier for an associated service. */
		ServiceId: string;
		/** Choose the service level agreement (SLA) that you want to apply to the fax record. */
		SLAId: string;
		/** Last SLA that was applied to this fax. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date;
		/** Shows the ID of the stage. */
		StageId: string;
		/** Shows whether the fax activity is open, completed, or canceled. Completed and canceled fax activities are read-only and can't be edited. */
		StateCode: OptionSet.Fax.StateCode;
		/** Select the fax's status. */
		StatusCode: OptionSet.Fax.StatusCode;
		/** Type a subcategory to identify the fax type to relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: string;
		/** Type a short description about the objective or primary topic of the fax. */
		Subject: string;
		/** For internal use only. */
		SubscriptionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** For internal use only. */
		TraversedPath: string;
		/** Type the Transmitting Subscriber ID (TSID) associated with a send action. This is typically a combination of the recipient's fax or phone number and company name. */
		Tsid: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the fax. */
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
		readonly FormattedValue: {
			/** Unique identifier of the fax activity. */
			readonly ActivityId: string;
			/** Type the number of minutes spent creating and sending the fax. The duration is used in reporting. */
			readonly ActualDurationMinutes: string;
			/** Enter the actual end date and time of the fax. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the fax. */
			readonly ActualEnd_UtcDateOnly: string;
			/** Enter the actual start date and time for the fax. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the fax. */
			readonly ActualStart_UtcDateOnly: string;
			/** Type the billing code for the fax to make sure the fax is charged to the correct sender or customer account. */
			readonly BillingCode: string;
			/** Type a category to identify the fax type, such as sales offer or press release, to tie the fax to a business group or function. */
			readonly Category: string;
			/** Type the name of the cover page to use when sending the fax. */
			readonly CoverPageName: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type additional information to describe the fax, such as the primary message or the products and services featured. */
			readonly Description: string;
			/** Select the direction of the fax as incoming or outbound. */
			readonly DirectionCode: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Type the recipient's fax number. */
			readonly FaxNumber: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Information regarding whether the fax activity was billed as part of resolving a case. */
			readonly IsBilled: string;
			/** Information regarding whether the activity is a regular activity type or event type. */
			readonly IsRegularActivity: string;
			/** Indication of whether the fax activity was created by a workflow rule. */
			readonly IsWorkflowCreated: string;
			/** Contains the date and time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Type the number of pages included in the fax. */
			readonly NumberOfPages: string;
			/** Shows how long, in minutes, that the record was on hold. */
			readonly OnHoldTime: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the fax activity. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team that owns the fax activity. */
			readonly OwningTeam: string;
			/** Unique identifier of the user that owns the fax activity. */
			readonly OwningUser: string;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			readonly PriorityCode: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_account_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_adx_invitation_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_bookableresourcebooking_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_bookableresourcebookingheader_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_bulkoperation_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_campaign_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_campaignactivity_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_contact_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_contract_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_entitlement_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_entitlementtemplate_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_incident_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_invoice_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_knowledgearticle_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_knowledgebaserecord_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_lead_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyncrm_contentsettings_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyncrm_customerjourney_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyncrm_leadscoremodel_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyncrm_linkedinaccount_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyncrm_linkedinactivity_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyncrm_linkedinfieldmapping_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyncrm_linkedinform_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformanswer_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformquestion_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyncrm_linkedinformsubmission_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyncrm_linkedinleadmatchingstrategy_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyncrm_linkedinuserprofile_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyncrm_marketingdynamiccontentmetadata_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyncrm_marketingemaildynamiccontentmetadata_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyncrm_marketingemailtestsend_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyncrm_migration_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyncrm_uicconfig_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_agreement_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_agreementbookingdate_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_agreementbookingincident_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_agreementbookingproduct_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_agreementbookingservice_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_agreementbookingservicetask_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_agreementbookingsetup_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_agreementinvoicedate_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_agreementinvoiceproduct_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_agreementinvoicesetup_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_bookingalertstatus_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_bookingrule_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_bookingtimestamp_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_customerasset_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_fieldservicesetting_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_incidenttypecharacteristic_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_incidenttypeproduct_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_incidenttypeservice_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_inventoryadjustment_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_inventoryadjustmentproduct_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_inventoryjournal_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_inventorytransfer_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_payment_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_paymentdetail_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_paymentmethod_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_paymentterm_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_playbookinstance_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_postalbum_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_postalcode_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_productinventory_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_purchaseorder_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_purchaseorderbill_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_purchaseorderproduct_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_purchaseorderreceipt_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_purchaseorderreceiptproduct_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_purchaseordersubstatus_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_quotebookingincident_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_quotebookingproduct_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_quotebookingservice_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_quotebookingservicetask_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_resourceterritory_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_rma_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_rmaproduct_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_rmareceipt_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_rmareceiptproduct_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_rmasubstatus_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_rtv_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_rtvproduct_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_rtvsubstatus_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_salessuggestion_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_shipvia_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_swarm_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_systemuserschedulersetting_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_timegroup_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_timegroupdetail_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_timeoffrequest_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_warehouse_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_workorder_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_workordercharacteristic_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_workorderincident_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_workorderproduct_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_workorderresourcerestriction_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_workorderservice_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msdyn_workorderservicetask_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_checkin_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_event_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchase_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchaseattendee_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_eventpurchasepass_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_eventregistration_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_hotel_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_hotelroomallocation_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_hotelroomreservation_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_layout_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_room_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_session_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_sessionregistration_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_sessiontrack_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_speaker_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_speakerengagement_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_sponsorablearticle_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_sponsorship_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_venue_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_webinarconfiguration_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_msevtmgt_webinarprovider_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_mspp_adplacement_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_mspp_pollplacement_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_mspp_publishingstatetransitionrule_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_mspp_redirect_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_mspp_shortcut_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_mspp_website_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_opportunity_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_quote_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_salesorder_fax: string;
			/** Choose the record that the fax relates to. */
			readonly regardingobjectid_site_fax: string;
			/** Shows the expected duration of the fax activity, in minutes. */
			readonly ScheduledDurationMinutes: string;
			/** Enter the expected due date and time. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Enter the expected due date and time. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Unique identifier for an associated service. */
			readonly ServiceId: string;
			/** Choose the service level agreement (SLA) that you want to apply to the fax record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this fax. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** Shows the date and time by which the activities are sorted. */
			readonly SortDate_UtcDateAndTime: string;
			/** Shows the ID of the stage. */
			readonly StageId: string;
			/** Shows whether the fax activity is open, completed, or canceled. Completed and canceled fax activities are read-only and can't be edited. */
			readonly StateCode: string;
			/** Select the fax's status. */
			readonly StatusCode: string;
			/** Type a subcategory to identify the fax type to relate the activity to a specific product, sales region, business group, or other function. */
			readonly Subcategory: string;
			/** Type a short description about the objective or primary topic of the fax. */
			readonly Subject: string;
			/** For internal use only. */
			readonly SubscriptionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Type the Transmitting Subscriber ID (TSID) associated with a send action. This is typically a combination of the recipient's fax or phone number and company name. */
			readonly Tsid: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the fax. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Fax {
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
			Open
		}
		enum StatusCode {
			/** 5 */
			Canceled,
			/** 2 */
			Completed,
			/** 1 */
			Open,
			/** 4 */
			Received,
			/** 3 */
			Sent
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