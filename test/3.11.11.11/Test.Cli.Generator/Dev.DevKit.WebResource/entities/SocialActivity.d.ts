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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormSocial_Activity extends DevKit.IForm {
		/**
		* Social Activity [Main Form]
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
		/** The Process of form Social_Activity */
		Process: DevKit.FormSocial_Activity.Process;
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
			PostedOn1: DevKit.Controls.DateTime;
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
			RegardingObjectId1: DevKit.Controls.Lookup;
			/** Subject associated with the activity. */
			Subject: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormSocial_Activity_for_Interactive_experience extends DevKit.IForm {
		/**
		* Social Activity for Interactive experience [Main Form]
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
		/** The Process of form Social_Activity_for_Interactive_experience */
		Process: DevKit.FormSocial_Activity_for_Interactive_experience.Process;
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
		/** Unique identifier of the activity. */
		ActivityId: string;
		/** Actual duration of the activity in minutes. */
		ActualDurationMinutes: number;
		/** Actual end time of the activity. */
		ActualEnd_UtcDateAndTime: Date;
		/** Actual start time of the activity. */
		ActualStart_UtcDateAndTime: Date;
		/** Shows how contact about the social activity originated, such as from Twitter or Facebook. This field is read-only. */
		Community: OptionSet.SocialActivity.Community;
		/** Unique identifier of the user who created the activity. */
		readonly CreatedBy: string;
		/** Date and time when the activity was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the activitypointer. */
		readonly CreatedOnBehalfBy: string;
		/** Shows information about the social post content. This field is read-only. */
		Description: string;
		/** Select the direction of the post as incoming or outbound. */
		DirectionCode: boolean;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier for the responses to a post. For internal use only. */
		InResponseTo: string;
		/** Information regarding whether the activity was billed as part of resolving a case. */
		IsBilled: boolean;
		/** Information regarding whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean;
		/** Information regarding whether the activity was created from a workflow rule. */
		IsWorkflowCreated: boolean;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** For internal use only. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** For internal use only. */
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
		/** Unique identifier of the user who owns the Activity. */
		readonly OwningUser: string;
		/** Shows the contact or account that authored the post. */
		postauthor_account: string;
		/** Shows the contact or account that authored the post. */
		postauthor_contact: string;
		/** Shows the parent account of the author of the post. */
		postauthoraccount_account: string;
		/** Shows the parent account of the author of the post. */
		postauthoraccount_contact: string;
		/** For internal use only. */
		PostedOn_UtcDateAndTime: Date;
		/** Shows the author of the post on the corresponding social channel. */
		PostFromProfileId: string;
		/** Unique identifier of the post. For internal use only. */
		PostId: string;
		/** Shows if the social post originated as a private or public message. */
		PostMessageType: OptionSet.SocialActivity.PostMessageType;
		/** Shows the recipients of the social post. */
		PostToProfileId: string;
		/** Shows the URL of the post. */
		PostURL: string;
		/** Shows the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.SocialActivity.PriorityCode;
		/** Unique identifier of the Process. */
		ProcessId: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_account_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_asyncoperation: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_bookableresourcebooking_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_bookableresourcebookingheader_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_bulkoperation_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_campaign_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_campaignactivity_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_contact_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_contract_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_entitlement_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_entitlementtemplate_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_incident_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_invoice_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_knowledgearticle_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_knowledgebaserecord_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_lead_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreement_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementbookingdate_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementbookingincident_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementbookingproduct_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementbookingservice_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementbookingservicetask_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementbookingsetup_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementinvoicedate_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementinvoiceproduct_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_agreementinvoicesetup_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_bookingalertstatus_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_bookingrule_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_bookingtimestamp_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_customerasset_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_fieldservicesetting_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_incidenttypecharacteristic_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_incidenttypeproduct_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_incidenttypeservice_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_inventoryadjustment_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_inventoryjournal_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_inventorytransfer_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_payment_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_paymentdetail_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_paymentmethod_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_paymentterm_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_playbookinstance_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_postalbum_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_postalcode_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_processnotes_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_productinventory_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_projectteam_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_purchaseorder_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_purchaseorderbill_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_purchaseorderproduct_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_purchaseorderreceipt_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_purchaseordersubstatus_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_quotebookingincident_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_quotebookingproduct_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_quotebookingservice_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_quotebookingservicetask_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_resourceterritory_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rma_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rmaproduct_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rmareceipt_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rmareceiptproduct_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rmasubstatus_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rtv_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rtvproduct_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_rtvsubstatus_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_salessuggestion_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_shipvia_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_systemuserschedulersetting_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_timegroup_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_timegroupdetail_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_timeoffrequest_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_warehouse_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workorder_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workordercharacteristic_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workorderincident_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workorderproduct_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workorderresourcerestriction_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workorderservice_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_msdyn_workorderservicetask_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_opportunity_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_quote_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_salesorder_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_site_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_action_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_hostedapplication_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_nonhostedapplication_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_option_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_savedsession_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_workflow_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_workflowstep_socialactivity: string;
		/** Shows the record that the social activity relates to. */
		regardingobjectid_uii_workflow_workflowstep_mapping_socialactivity: string;
		/** Scheduled duration of the activity, specified in minutes. */
		ScheduledDurationMinutes: number;
		/** Scheduled end time of the activity. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Scheduled start time of the activity. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
		SentimentValue: number;
		/** Unique identifier for the associated service. */
		ServiceId: string;
		/** Choose the service level agreement (SLA) that you want to apply to the Social Activity record. */
		SLAId: string;
		/** Last SLA that was applied to this Social Activity. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** For internal use only. */
		SocialAdditionalParams: string;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date;
		/** Unique identifier of the Stage. */
		StageId: string;
		/** Shows whether the social activity completed. This field is read-only. */
		StateCode: OptionSet.SocialActivity.StateCode;
		/** Shows whether the social activity is completed, failed, or processing. This field is read-only. */
		StatusCode: OptionSet.SocialActivity.StatusCode;
		/** Subject associated with the activity. */
		Subject: string;
		/** Unique identifier of the social conversation. For internal use only. */
		ThreadId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** For internal use only. */
		TraversedPath: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the social activity. */
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
		readonly FormattedValue: {
			/** For internal use only. */
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
			/** Shows information about the social post content. This field is read-only. */
			readonly Description: string;
			/** Select the direction of the post as incoming or outbound. */
			readonly DirectionCode: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier for the responses to a post. For internal use only. */
			readonly InResponseTo: string;
			/** Information regarding whether the activity was billed as part of resolving a case. */
			readonly IsBilled: string;
			/** Information regarding whether the activity is a regular activity type or event type. */
			readonly IsRegularActivity: string;
			/** Information regarding whether the activity was created from a workflow rule. */
			readonly IsWorkflowCreated: string;
			/** Contains the date and time stamp of the last on hold time. */
			readonly LastOnHoldTime_UtcDateAndTime: string;
			/** For internal use only. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** For internal use only. */
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
			/** Unique identifier of the user who owns the Activity. */
			readonly OwningUser: string;
			/** Shows the contact or account that authored the post. */
			readonly postauthor_account: string;
			/** Shows the contact or account that authored the post. */
			readonly postauthor_contact: string;
			/** Shows the parent account of the author of the post. */
			readonly postauthoraccount_account: string;
			/** Shows the parent account of the author of the post. */
			readonly postauthoraccount_contact: string;
			/** For internal use only. */
			readonly PostedOn_UtcDateAndTime: string;
			/** Shows the author of the post on the corresponding social channel. */
			readonly PostFromProfileId: string;
			/** Unique identifier of the post. For internal use only. */
			readonly PostId: string;
			/** Shows if the social post originated as a private or public message. */
			readonly PostMessageType: string;
			/** Shows the recipients of the social post. */
			readonly PostToProfileId: string;
			/** Shows the URL of the post. */
			readonly PostURL: string;
			/** Shows the priority so that preferred customers or critical issues are handled quickly. */
			readonly PriorityCode: string;
			/** Unique identifier of the Process. */
			readonly ProcessId: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_account_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_asyncoperation: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_bookableresourcebooking_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_bookableresourcebookingheader_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_bulkoperation_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_campaign_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_campaignactivity_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_contact_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_contract_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_entitlement_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_entitlementtemplate_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_incident_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_invoice_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_knowledgearticle_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_knowledgebaserecord_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_lead_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_agreement_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_agreementbookingdate_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_agreementbookingincident_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_agreementbookingproduct_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_agreementbookingservice_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_agreementbookingservicetask_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_agreementbookingsetup_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_agreementinvoicedate_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_agreementinvoiceproduct_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_agreementinvoicesetup_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_bookingalertstatus_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_bookingrule_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_bookingtimestamp_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_customerasset_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_fieldservicesetting_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_incidenttypecharacteristic_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_incidenttypeproduct_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_incidenttypeservice_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_inventoryadjustment_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_inventoryadjustmentproduct_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_inventoryjournal_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_inventorytransfer_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_payment_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_paymentdetail_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_paymentmethod_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_paymentterm_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_playbookinstance_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_postalbum_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_postalcode_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_processnotes_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_productinventory_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_projectteam_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_purchaseorder_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_purchaseorderbill_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_purchaseorderproduct_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_purchaseorderreceipt_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_purchaseorderreceiptproduct_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_purchaseordersubstatus_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_quotebookingincident_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_quotebookingproduct_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_quotebookingservice_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_quotebookingservicetask_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_resourceterritory_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_rma_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_rmaproduct_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_rmareceipt_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_rmareceiptproduct_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_rmasubstatus_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_rtv_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_rtvproduct_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_rtvsubstatus_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_salessuggestion_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_shipvia_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_systemuserschedulersetting_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_timegroup_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_timegroupdetail_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_timeoffrequest_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_warehouse_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_workorder_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_workordercharacteristic_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_workorderincident_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_workorderproduct_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_workorderresourcerestriction_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_workorderservice_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_msdyn_workorderservicetask_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_opportunity_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_quote_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_salesorder_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_site_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_uii_action_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_uii_hostedapplication_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_uii_nonhostedapplication_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_uii_option_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_uii_savedsession_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_uii_workflow_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_uii_workflowstep_socialactivity: string;
			/** Shows the record that the social activity relates to. */
			readonly regardingobjectid_uii_workflow_workflowstep_mapping_socialactivity: string;
			/** Scheduled duration of the activity, specified in minutes. */
			readonly ScheduledDurationMinutes: string;
			/** Scheduled end time of the activity. */
			readonly ScheduledEnd_UtcDateAndTime: string;
			/** Scheduled start time of the activity. */
			readonly ScheduledStart_UtcDateAndTime: string;
			/** Value derived after assessing words commonly associated with a negative, neutral, or positive sentiment that occurs in a social post. Sentiment information can also be reported as numeric values. */
			readonly SentimentValue: string;
			/** Unique identifier for the associated service. */
			readonly ServiceId: string;
			/** Choose the service level agreement (SLA) that you want to apply to the Social Activity record. */
			readonly SLAId: string;
			/** Last SLA that was applied to this Social Activity. This field is for internal use only. */
			readonly SLAInvokedId: string;
			/** For internal use only. */
			readonly SocialAdditionalParams: string;
			/** Shows the date and time by which the activities are sorted. */
			readonly SortDate_UtcDateAndTime: string;
			/** Unique identifier of the Stage. */
			readonly StageId: string;
			/** Shows whether the social activity completed. This field is read-only. */
			readonly StateCode: string;
			/** Shows whether the social activity is completed, failed, or processing. This field is read-only. */
			readonly StatusCode: string;
			/** Subject associated with the activity. */
			readonly Subject: string;
			/** Unique identifier of the social conversation. For internal use only. */
			readonly ThreadId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly TraversedPath: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the social activity. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SocialActivity {
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
		enum OwnerIdType {
		}
		enum PostAuthorAccountType {
		}
		enum PostAuthorType {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}