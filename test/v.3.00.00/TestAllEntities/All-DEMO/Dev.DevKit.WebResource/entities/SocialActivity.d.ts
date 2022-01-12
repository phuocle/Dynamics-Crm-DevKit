//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSocial_Activity {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
			Community: DevKit.Controls.OptionSet;
			/** Shows the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
			SentimentValue: DevKit.Controls.Double;
			/** Shows whether the social activity is completed, failed, or processing. This field is read-only. */
			StatusCode: DevKit.Controls.OptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Date and time when the activity was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Shows information about the social post content. This field is read-only. */
			Description: DevKit.Controls.String;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** For internal use only. */
			PostedOn: DevKit.Controls.DateTime;
			/** Shows the author of the post on the corresponding social channel. */
			PostFromProfileId: DevKit.Controls.Lookup;
			/** Shows if the social post originated as a private or public message. */
			PostMessageType: DevKit.Controls.OptionSet;
			/** Shows the recipients of the social post. */
			PostToProfileId: DevKit.Controls.String;
			/** Shows the URL of the post. */
			PostURL: DevKit.Controls.String;
			/** Shows the record that the social activity relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
		}
	}
	class FormSocial_Activity extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Social_Activity Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Social_Activity */
		Body: DevKit.FormSocial_Activity.Body;
		/** The Header section of form Social_Activity */
		Header: DevKit.FormSocial_Activity.Header;
		/** The SidePanes of form Social_Activity */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormSocial_Activity_for_Interactive_experience {
		interface Header extends DevKit.Controls.IHeader {
			/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
			Community: DevKit.Controls.OptionSet;
			/** Shows the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
			SentimentValue: DevKit.Controls.Double;
			/** Shows whether the social activity completed. This field is read-only. */
			StateCode: DevKit.Controls.OptionSet;
		}
		interface tab_tab_2_Sections {
			Description: DevKit.Controls.Section;
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			/** Shows information about the social post content. This field is read-only. */
			Description: DevKit.Controls.String;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Unique identifier of the user or team who owns the activity. */
			OwnerId: DevKit.Controls.Lookup;
			/** For internal use only. */
			PostedOn: DevKit.Controls.DateTime;
			/** For internal use only. */
			PostedOn_1: DevKit.Controls.DateTime;
			/** Shows the author of the post on the corresponding social channel. */
			PostFromProfileId: DevKit.Controls.Lookup;
			/** Shows if the social post originated as a private or public message. */
			PostMessageType: DevKit.Controls.OptionSet;
			/** Shows the recipients of the social post. */
			PostToProfileId: DevKit.Controls.String;
			/** Shows the URL of the post. */
			PostURL: DevKit.Controls.String;
			/** Shows the record that the social activity relates to. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Shows the record that the social activity relates to. */
			RegardingObjectId_1: DevKit.Controls.Lookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
		}
	}
	class FormSocial_Activity_for_Interactive_experience extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form Social_Activity_for_Interactive_experience Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Social_Activity_for_Interactive_experience */
		Body: DevKit.FormSocial_Activity_for_Interactive_experience.Body;
		/** The Header section of form Social_Activity_for_Interactive_experience */
		Header: DevKit.FormSocial_Activity_for_Interactive_experience.Header;
		/** The SidePanes of form Social_Activity_for_Interactive_experience */
		SidePanes: DevKit.SidePanes;
	}
	class SocialActivityApi {
		/**
		* DynamicsCrm.DevKit SocialActivityApi
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
		/** For internal use only. */
		ActivityAdditionalParams: DevKit.WebApi.StringValue;
		/** Unique identifier of the activity. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Actual duration of the activity in minutes. */
		ActualDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Actual end time of the activity. */
		ActualEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Actual start time of the activity. */
		ActualStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the user who created the activity. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the activity was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the activitypointer. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows information about the social post content. This field is read-only. */
		Description: DevKit.WebApi.StringValue;
		/** Select the direction of the post as incoming or outbound. */
		DirectionCode: DevKit.WebApi.BooleanValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier for the responses to a post. For internal use only. */
		InResponseTo: DevKit.WebApi.StringValue;
		/** Information regarding whether the activity was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValueReadonly;
		/** Information regarding whether the activity was created from a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** For internal use only. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** For internal use only. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier of the business unit that owns the activity. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team that owns the activity. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who owns the Activity. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Shows the contact or account that authored the post. */
		postauthor_account: DevKit.WebApi.LookupValue;
		/** Shows the contact or account that authored the post. */
		postauthor_contact: DevKit.WebApi.LookupValue;
		/** Shows the parent account of the author of the post. */
		postauthoraccount_account: DevKit.WebApi.LookupValue;
		/** Shows the parent account of the author of the post. */
		postauthoraccount_contact: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		PostedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the author of the post on the corresponding social channel. */
		PostFromProfileId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the post. For internal use only. */
		PostId: DevKit.WebApi.StringValue;
		/** Shows if the social post originated as a private or public message. */
		PostMessageType: DevKit.WebApi.OptionSetValue;
		/** Shows the recipients of the social post. */
		PostToProfileId: DevKit.WebApi.StringValue;
		/** Shows the URL of the post. */
		PostURL: DevKit.WebApi.StringValue;
		/** Shows the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the Process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_account_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_asyncoperation: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_bookableresourcebooking_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_bookableresourcebookingheader_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_bulkoperation_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_campaign_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_campaignactivity_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_contact_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_contract_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_entitlement_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_entitlementtemplate_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_incident_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_invoice_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_knowledgearticle_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_knowledgebaserecord_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_lead_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreement_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementbookingdate_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementbookingincident_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementbookingproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementbookingservice_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementbookingservicetask_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementbookingsetup_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementinvoicedate_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementinvoiceproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementinvoicesetup_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_bookingalertstatus_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_bookingrule_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_bookingtimestamp_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_customerasset_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_fieldservicesetting_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_incidenttypecharacteristic_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_incidenttypeproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_incidenttypeservice_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_inventoryadjustment_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_inventoryjournal_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_inventorytransfer_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_payment_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_paymentdetail_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_paymentmethod_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_paymentterm_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_playbookinstance_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_postalbum_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_postalcode_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_processnotes_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_productinventory_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_projectteam_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_purchaseorder_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_purchaseorderbill_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_purchaseorderproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_purchaseorderreceipt_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_purchaseordersubstatus_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_quotebookingincident_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_quotebookingproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_quotebookingservice_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_quotebookingservicetask_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_resourceterritory_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rma_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rmaproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rmareceipt_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rmareceiptproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rmasubstatus_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rtv_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rtvproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rtvsubstatus_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_shipvia_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_systemuserschedulersetting_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_timegroup_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_timegroupdetail_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_timeoffrequest_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_warehouse_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workorder_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workordercharacteristic_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workorderincident_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workorderproduct_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workorderresourcerestriction_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workorderservice_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workorderservicetask_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_opportunity_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_quote_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_salesorder_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_site_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_action_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_hostedapplication_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_nonhostedapplication_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_option_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_savedsession_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_workflow_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_workflowstep_socialactivity: DevKit.WebApi.LookupValue;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_workflow_workflowstep_mapping_socialactivity: DevKit.WebApi.LookupValue;
		/** Scheduled duration of the activity, specified in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Scheduled end time of the activity. */
		ScheduledEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Scheduled start time of the activity. */
		ScheduledStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
		SentimentValue: DevKit.WebApi.DoubleValue;
		/** Unique identifier for the associated service. */
		ServiceId: DevKit.WebApi.LookupValue;
		/** Choose the service level agreement (SLA) that you want to apply to the Social Activity record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this Social Activity. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		SocialAdditionalParams: DevKit.WebApi.StringValue;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the Stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the social activity completed. This field is read-only. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Shows whether the social activity is completed, failed, or processing. This field is read-only. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Subject associated with the activity. */
		Subject: DevKit.WebApi.StringValue;
		/** Unique identifier of the social conversation. For internal use only. */
		ThreadId: DevKit.WebApi.StringValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the social activity. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<any>;
	}
}
declare namespace OptionSet {
	namespace SocialActivity {
		enum ActivityTypeCode {
			/** 4201 */
			Appointment,
			/** 10357 */
			Booking_Alert,
			/** 4402 */
			Campaign_Activity,
			/** 4401 */
			Campaign_Response,
			/** 4206 */
			Case_Resolution,
			/** 10644 */
			Conversation,
			/** 10261 */
			Customer_Voice_alert,
			/** 10271 */
			Customer_Voice_survey_invite,
			/** 10273 */
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
			/** 10752 */
			Outbound_message,
			/** 4210 */
			Phone_Call,
			/** 10387 */
			Project_Service_Approval,
			/** 4406 */
			Quick_Campaign,
			/** 4211 */
			Quote_Close,
			/** 4251 */
			Recurring_Appointment,
			/** 4214 */
			Service_Activity,
			/** 10659 */
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
		enum PostMessageType {
			/** 1 */
			Private_Message,
			/** 0 */
			Public_Message
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
			/** 1 */
			Completed,
			/** 2 */
			Failed,
			/** 4 */
			Open,
			/** 3 */
			Processing
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