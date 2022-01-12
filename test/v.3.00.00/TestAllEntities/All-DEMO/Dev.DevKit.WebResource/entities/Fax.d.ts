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
			/** Unique identifier of the object with which the fax activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the fax. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, queue, or user recipients for the fax. */
			to: DevKit.Controls.Lookup;
		}
	}
	class FormFax extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Fax Main Form
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the fax activity. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Type the number of minutes spent creating and sending the fax. The duration is used in reporting. */
		ActualDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Enter the actual end date and time of the fax. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the fax. */
		ActualEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the actual start date and time for the fax. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the fax. */
		ActualStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type the billing code for the fax to make sure the fax is charged to the correct sender or customer account. */
		BillingCode: DevKit.WebApi.StringValue;
		/** Type a category to identify the fax type, such as sales offer or press release, to tie the fax to a business group or function. */
		Category: DevKit.WebApi.StringValue;
		/** Type the name of the cover page to use when sending the fax. */
		CoverPageName: DevKit.WebApi.StringValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the fax, such as the primary message or the products and services featured. */
		Description: DevKit.WebApi.StringValue;
		/** Select the direction of the fax as incoming or outbound. */
		DirectionCode: DevKit.WebApi.BooleanValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Type the recipient's fax number. */
		FaxNumber: DevKit.WebApi.StringValue;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Information regarding whether the fax activity was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValueReadonly;
		/** Indication of whether the fax activity was created by a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type the number of pages included in the fax. */
		NumberOfPages: DevKit.WebApi.IntegerValue;
		/** Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the fax activity. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team that owns the fax activity. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user that owns the fax activity. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_account_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_bookableresourcebooking_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_bookableresourcebookingheader_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_bulkoperation_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_campaign_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_campaignactivity_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_contact_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_contract_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_entitlement_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_entitlementtemplate_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_incident_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_invoice_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_knowledgearticle_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_knowledgebaserecord_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_lead_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_agreement_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_agreementbookingdate_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_agreementbookingincident_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_agreementbookingproduct_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_agreementbookingservice_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_agreementbookingservicetask_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_agreementbookingsetup_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_agreementinvoicedate_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_agreementinvoiceproduct_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_agreementinvoicesetup_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_bookingalertstatus_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_bookingrule_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_bookingtimestamp_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_customerasset_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_fieldservicesetting_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_incidenttypecharacteristic_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_incidenttypeproduct_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_incidenttypeservice_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_inventoryadjustment_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_inventoryjournal_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_inventorytransfer_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_payment_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_paymentdetail_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_paymentmethod_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_paymentterm_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_playbookinstance_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_postalbum_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_postalcode_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_processnotes_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_productinventory_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_projectteam_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_purchaseorder_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_purchaseorderbill_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_purchaseorderproduct_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_purchaseorderreceipt_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_purchaseordersubstatus_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_quotebookingincident_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_quotebookingproduct_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_quotebookingservice_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_quotebookingservicetask_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_resourceterritory_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_rma_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_rmaproduct_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_rmareceipt_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_rmareceiptproduct_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_rmasubstatus_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_rtv_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_rtvproduct_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_rtvsubstatus_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_shipvia_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_systemuserschedulersetting_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_timegroup_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_timegroupdetail_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_timeoffrequest_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_warehouse_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_workorder_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_workordercharacteristic_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_workorderincident_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_workorderproduct_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_workorderresourcerestriction_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_workorderservice_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_msdyn_workorderservicetask_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_opportunity_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_quote_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_salesorder_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_site_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_uii_action_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_uii_hostedapplication_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_uii_nonhostedapplication_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_uii_option_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_uii_savedsession_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_uii_workflow_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_uii_workflowstep_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the fax activity is associated. */
		regardingobjectid_uii_workflow_workflowstep_mapping_fax: DevKit.WebApi.LookupValue;
		/** Shows the expected duration of the fax activity, in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValueReadonly;
		/** Enter the expected due date and time. */
		ScheduledEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Enter the expected due date and time. */
		ScheduledStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier for an associated service. */
		ServiceId: DevKit.WebApi.LookupValue;
		/** Choose the service level agreement (SLA) that you want to apply to the fax record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this fax. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the fax activity is open, completed, or canceled. Completed and canceled fax activities are read-only and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the fax's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a subcategory to identify the fax type to relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: DevKit.WebApi.StringValue;
		/** Type a short description about the objective or primary topic of the fax. */
		Subject: DevKit.WebApi.StringValue;
		/** For internal use only. */
		SubscriptionId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Type the Transmitting Subscriber ID (TSID) associated with a send action. This is typically a combination of the recipient's fax or phone number and company name. */
		Tsid: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the fax. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<any>;
	}
}
declare namespace OptionSet {
	namespace Fax {
		enum ActivityTypeCode {
			/** 4201 */
			Appointment,
			/** 10386 */
			Booking_Alert,
			/** 4402 */
			Campaign_Activity,
			/** 4401 */
			Campaign_Response,
			/** 4206 */
			Case_Resolution,
			/** 10673 */
			Conversation,
			/** 10283 */
			Customer_Voice_alert,
			/** 10293 */
			Customer_Voice_survey_invite,
			/** 10295 */
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
			/** 10781 */
			Outbound_message,
			/** 4210 */
			Phone_Call,
			/** 10416 */
			Project_Service_Approval,
			/** 4406 */
			Quick_Campaign,
			/** 4211 */
			Quote_Close,
			/** 4251 */
			Recurring_Appointment,
			/** 4214 */
			Service_Activity,
			/** 10688 */
			Session,
			/** 4212 */
			Task
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}