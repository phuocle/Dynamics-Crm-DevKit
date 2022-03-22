//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormLetter {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Controls.OptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Controls.DateTime;
			/** Shows whether the letter is open, completed, or canceled. Completed and canceled letters are read-only and can't be edited. */
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
			/** Type the number of minutes spent creating and sending the letter. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Controls.Integer;
			/** Type the complete recipient address for the letter to ensure timely delivery. */
			Address: DevKit.Controls.String;
			/** Type the letter body or additional information to describe the letter, such as the primary message or the products and services described. */
			Description: DevKit.Controls.String;
			/** Select the direction of the letter as incoming or outbound. */
			DirectionCode: DevKit.Controls.Boolean;
			/** Enter the account, contact, lead, or user who sent the letter. */
			from: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the letter activity is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Type a short description about the objective or primary topic of the letter. */
			Subject: DevKit.Controls.String;
			/** Enter the account, contact, lead, or user recipients for the letter. */
			to: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormLetter extends DevKit.IForm {
		/**
		* Letter [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Letter */
		Body: DevKit.FormLetter.Body;
		/** The Header section of form Letter */
		Header: DevKit.FormLetter.Header;
		/** The Process of form Letter */
		Process: DevKit.FormLetter.Process;
		/** The SidePanes of form Letter */
		SidePanes: DevKit.SidePanes;
	}
	class LetterApi {
		/**
		* DynamicsCrm.DevKit LetterApi
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
		/** Unique identifier of the letter activity. */
		ActivityId: string;
		/** Type the number of minutes spent creating and sending the letter. The duration is used in reporting. */
		ActualDurationMinutes: number;
		/** Enter the actual end date and time of the letter. By default, it displays the date and time when the activity was completed or canceled, but can be edited to capture the actual time to create and send the letter. */
		ActualEnd_UtcDateOnly: Date;
		/** Enter the actual start date and time for the letter. By default, it displays the date and time when the activity was created, but can be edited to capture the actual time to create and send the letter. */
		ActualStart_UtcDateOnly: Date;
		/** Type the complete recipient address for the letter to ensure timely delivery. */
		Address: string;
		/** Type a category to identify the letter type, such as sales offer or past due notice, to tie the letter to a business group or function. */
		Category: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type the letter body or additional information to describe the letter, such as the primary message or the products and services described. */
		Description: string;
		/** Select the direction of the letter as incoming or outbound. */
		DirectionCode: boolean;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: number;
		/** Shows whether the letter activity was billed as part of resolving a case. */
		IsBilled: boolean;
		/** Shows whether the activity is a regular activity type or event type. */
		readonly IsRegularActivity: boolean;
		/** Shows whether the letter activity was created by a workflow rule. */
		IsWorkflowCreated: boolean;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: Date;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Shows how long, in minutes, that the record was on hold. */
		readonly OnHoldTime: number;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the letter activity. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team that owns the letter activity. */
		readonly OwningTeam: string;
		/** Unique identifier of the user that owns the letter activity. */
		readonly OwningUser: string;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: OptionSet.Letter.PriorityCode;
		/** Shows the ID of the process. */
		ProcessId: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_account_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_bookableresourcebooking_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_bookableresourcebookingheader_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_bulkoperation_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_campaign_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_campaignactivity_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_contact_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_contract_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_entitlement_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_entitlementtemplate_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_incident_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_invoice_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_knowledgearticle_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_knowledgebaserecord_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_lead_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreement_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreementbookingdate_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreementbookingincident_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreementbookingproduct_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreementbookingservice_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreementbookingservicetask_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreementbookingsetup_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreementinvoicedate_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreementinvoiceproduct_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_agreementinvoicesetup_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_bookingalertstatus_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_bookingrule_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_bookingtimestamp_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_customerasset_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_fieldservicesetting_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_incidenttypecharacteristic_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_incidenttypeproduct_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_incidenttypeservice_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_inventoryadjustment_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_inventoryjournal_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_inventorytransfer_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_payment_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_paymentdetail_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_paymentmethod_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_paymentterm_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_playbookinstance_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_postalbum_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_postalcode_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_processnotes_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_productinventory_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_projectteam_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_purchaseorder_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_purchaseorderbill_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_purchaseorderproduct_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_purchaseorderreceipt_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_purchaseordersubstatus_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_quotebookingincident_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_quotebookingproduct_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_quotebookingservice_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_quotebookingservicetask_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_resourceterritory_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_rma_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_rmaproduct_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_rmareceipt_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_rmareceiptproduct_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_rmasubstatus_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_rtv_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_rtvproduct_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_rtvsubstatus_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_salessuggestion_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_shipvia_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_systemuserschedulersetting_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_timegroup_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_timegroupdetail_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_timeoffrequest_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_warehouse_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_workorder_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_workordercharacteristic_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_workorderincident_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_workorderproduct_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_workorderresourcerestriction_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_workorderservice_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_msdyn_workorderservicetask_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_opportunity_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_quote_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_salesorder_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_site_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_uii_action_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_uii_hostedapplication_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_uii_nonhostedapplication_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_uii_option_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_uii_savedsession_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_uii_workflow_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_uii_workflowstep_letter: string;
		/** Unique identifier of the object with which the letter activity is associated. */
		regardingobjectid_uii_workflow_workflowstep_mapping_letter: string;
		/** Scheduled duration of the letter activity, specified in minutes. */
		readonly ScheduledDurationMinutes: number;
		/** Enter the expected due date and time. */
		ScheduledEnd_UtcDateAndTime: Date;
		/** Enter the expected due date and time. */
		ScheduledStart_UtcDateAndTime: Date;
		/** Unique identifier for an associated service. */
		ServiceId: string;
		/** Choose the service level agreement (SLA) that you want to apply to the Letter record. */
		SLAId: string;
		/** Last SLA that was applied to this Letter. This field is for internal use only. */
		readonly SLAInvokedId: string;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: Date;
		/** Shows the ID of the stage. */
		StageId: string;
		/** Shows whether the letter is open, completed, or canceled. Completed and canceled letters are read-only and can't be edited. */
		StateCode: OptionSet.Letter.StateCode;
		/** Select the letter's status. */
		StatusCode: OptionSet.Letter.StatusCode;
		/** Type a subcategory to identify the letter type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: string;
		/** Type a short description about the objective or primary topic of the letter. */
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
		/** Version number of the letter. */
		readonly VersionNumber: number;
		/** The array of object that can cast object to ActivityPartyApi class */
		ActivityParties: Array<unknown>;
	}
}
declare namespace OptionSet {
	namespace Letter {
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
			Draft,
			/** 1 */
			Open,
			/** 3 */
			Received,
			/** 4 */
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}