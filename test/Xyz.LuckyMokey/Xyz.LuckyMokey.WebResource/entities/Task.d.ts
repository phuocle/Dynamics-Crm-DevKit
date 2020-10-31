//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace FormTask {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Shows whether the task is open, completed, or canceled. Completed and canceled tasks are read-only and can't be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_TASK_TAB_Sections {
			TASK: DevKit.Form.Controls.ControlSection;
			Description: DevKit.Form.Controls.ControlSection;
			task_details: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab_TASK_TAB extends DevKit.Form.Controls.IControlTab {
			Section: tab_TASK_TAB_Sections;
		}
		interface Tabs {
			TASK_TAB: tab_TASK_TAB;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the task. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Type additional information to describe the task. */
			Description: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the object with which the task is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Type a short description about the objective or primary topic of the task. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormTask extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Task
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Task */
		Body: LuckyMokey.FormTask.Body;
		/** The Header section of form Task */
		Header: LuckyMokey.FormTask.Header;
	}
	namespace FormTask_for_Interactive_experience {
		interface Header {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Shows whether the task is open, completed, or canceled. Completed and canceled tasks are read-only and can't be edited. */
			StateCode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab_tab_4_Sections {
			tab_4_section_4: DevKit.Form.Controls.ControlSection;
			tab_4_section_2: DevKit.Form.Controls.ControlSection;
			tab_3_section_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_4 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_4_Sections;
		}
		interface Tabs {
			tab_4: tab_tab_4;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the task. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Type additional information to describe the task. */
			Description: DevKit.Form.Controls.ControlString;
			/** Unique identifier of the object with which the task is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Unique identifier of the object with which the task is associated. */
			RegardingObjectId_1: DevKit.Form.Controls.ControlLookup;
			/** Type a short description about the objective or primary topic of the task. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormTask_for_Interactive_experience extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Task_for_Interactive_experience
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Task_for_Interactive_experience */
		Body: LuckyMokey.FormTask_for_Interactive_experience.Body;
		/** The Header section of form Task_for_Interactive_experience */
		Header: LuckyMokey.FormTask_for_Interactive_experience.Header;
	}
	namespace FormTask_quick_create_form {
		interface tab_createtask_Sections {
			task: DevKit.Form.Controls.ControlSection;
			task_2: DevKit.Form.Controls.ControlSection;
			task_3: DevKit.Form.Controls.ControlSection;
		}
		interface tab_createtask extends DevKit.Form.Controls.IControlTab {
			Section: tab_createtask_Sections;
		}
		interface Tabs {
			createtask: tab_createtask;
		}
		interface Body {
			Tab: Tabs;
			/** Type the number of minutes spent on the task. The duration is used in reporting. */
			ActualDurationMinutes: DevKit.Form.Controls.ControlInteger;
			/** Type additional information to describe the task. */
			Description: DevKit.Form.Controls.ControlString;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Select the priority so that preferred customers or critical issues are handled quickly. */
			PriorityCode: DevKit.Form.Controls.ControlOptionSet;
			/** Unique identifier of the object with which the task is associated. */
			RegardingObjectId: DevKit.Form.Controls.ControlLookup;
			/** Enter the expected due date and time. */
			ScheduledEnd: DevKit.Form.Controls.ControlDateTime;
			/** Type a short description about the objective or primary topic of the task. */
			Subject: DevKit.Form.Controls.ControlString;
		}
	}
	class FormTask_quick_create_form extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Task_quick_create_form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Task_quick_create_form */
		Body: LuckyMokey.FormTask_quick_create_form.Body;
	}
	class TaskApi {
		/**
		* DynamicsCrm.DevKit TaskApi
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
		/** Unique identifier of the task. */
		ActivityId: DevKit.WebApi.GuidValue;
		/** Type the number of minutes spent on the task. The duration is used in reporting. */
		ActualDurationMinutes: DevKit.WebApi.IntegerValue;
		/** Enter the actual end date and time of the task. By default, it displays when the activity was completed or canceled. */
		ActualEnd_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the actual start date and time for the task. By default, it displays when the task was created. */
		ActualStart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Type a category to identify the task type, such as lead gathering or customer follow up, to tie the task to a business group or function. */
		Category: DevKit.WebApi.StringValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Assigned Task Unique Id */
		CrmTaskAssignedUniqueId: DevKit.WebApi.GuidValue;
		/** Type additional information to describe the task. */
		Description: DevKit.WebApi.StringValue;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Unique identifier of the data import or data migration that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Information which specifies whether the task was billed as part of resolving a case. */
		IsBilled: DevKit.WebApi.BooleanValue;
		/** Information regarding whether the activity is a regular activity type or event type. */
		IsRegularActivity: DevKit.WebApi.BooleanValueReadonly;
		/** Information which specifies if the task was created from a workflow rule. */
		IsWorkflowCreated: DevKit.WebApi.BooleanValue;
		/** Contains the date and time stamp of the last on hold time. */
		LastOnHoldTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows how long, in minutes, that the record was on hold. */
		OnHoldTime: DevKit.WebApi.IntegerValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Shows the record owner's business unit. */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the team that owns the task. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user that owns the task. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Type the percentage complete value for the task to track tasks to completion. */
		PercentComplete: DevKit.WebApi.IntegerValue;
		/** Select the priority so that preferred customers or critical issues are handled quickly. */
		PriorityCode: DevKit.WebApi.OptionSetValue;
		/** Shows the ID of the process. */
		ProcessId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_account_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_adobe_migratedrecord_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_adobe_templatedocument_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_bookableresourcebooking_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_bookableresourcebookingheader_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_bulkoperation_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_campaign_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_campaignactivity_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_contact_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_contract_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_entitlement_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_entitlementtemplate_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_incident_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_invoice_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_knowledgearticle_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_knowledgebaserecord_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_lead_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_agreement_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_agreementbookingdate_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_agreementbookingincident_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_agreementbookingproduct_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_agreementbookingservice_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_agreementbookingservicetask_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_agreementbookingsetup_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_agreementinvoicedate_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_agreementinvoiceproduct_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_agreementinvoicesetup_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_bookingalertstatus_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_bookingrule_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_bookingtimestamp_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_customerasset_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_fieldservicesetting_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_incidenttypecharacteristic_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_incidenttypeproduct_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_incidenttypeservice_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_inventoryadjustment_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_inventoryadjustmentproduct_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_inventoryjournal_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_inventorytransfer_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_payment_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_paymentdetail_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_paymentmethod_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_paymentterm_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_playbookinstance_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_postalbum_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_postalcode_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_processnotes_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_productinventory_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_projectteam_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_purchaseorder_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_purchaseorderbill_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_purchaseorderproduct_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_purchaseorderreceipt_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_purchaseorderreceiptproduct_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_purchaseordersubstatus_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_quotebookingincident_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_quotebookingproduct_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_quotebookingservice_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_quotebookingservicetask_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_resourceterritory_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_rma_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_rmaproduct_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_rmareceipt_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_rmareceiptproduct_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_rmasubstatus_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_rtv_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_rtvproduct_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_rtvsubstatus_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_shipvia_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_systemuserschedulersetting_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_timegroup_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_timegroupdetail_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_timeoffrequest_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_warehouse_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_workorder_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_workordercharacteristic_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_workorderincident_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_workorderproduct_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_workorderresourcerestriction_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_workorderservice_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_msdyn_workorderservicetask_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_opportunity_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_quote_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_salesorder_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_site_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_uii_action_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_uii_hostedapplication_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_uii_nonhostedapplication_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_uii_option_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_uii_savedsession_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_uii_workflow_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_uii_workflowstep_task: DevKit.WebApi.LookupValue;
		/** Unique identifier of the object with which the task is associated. */
		regardingobjectid_uii_workflow_workflowstep_mapping_task: DevKit.WebApi.LookupValue;
		/** Scheduled duration of the task, specified in minutes. */
		ScheduledDurationMinutes: DevKit.WebApi.IntegerValueReadonly;
		/** Enter the expected due date and time. */
		ScheduledEnd_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Enter the expected due date and time. */
		ScheduledStart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Choose the service that is associated with this activity. */
		ServiceId: DevKit.WebApi.LookupValue;
		/** Choose the service level agreement (SLA) that you want to apply to the Task record. */
		SLAId: DevKit.WebApi.LookupValue;
		/** Last SLA that was applied to this Task. This field is for internal use only. */
		SLAInvokedId: DevKit.WebApi.LookupValueReadonly;
		SLAName: DevKit.WebApi.StringValueReadonly;
		/** Shows the date and time by which the activities are sorted. */
		SortDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows the ID of the stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Shows whether the task is open, completed, or canceled. Completed and canceled tasks are read-only and can't be edited. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Select the task's status. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** Type a subcategory to identify the task type and relate the activity to a specific product, sales region, business group, or other function. */
		Subcategory: DevKit.WebApi.StringValue;
		/** Type a short description about the objective or primary topic of the task. */
		Subject: DevKit.WebApi.StringValue;
		/** For internal use only. */
		SubscriptionId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version number of the task. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace Task {
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
			/** 2 */
			Not_Started,
			/** 3 */
			In_Progress,
			/** 4 */
			Waiting_on_someone_else,
			/** 5 */
			Completed,
			/** 6 */
			Canceled,
			/** 7 */
			Deferred
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
//{'JsForm':['Task','Task for Interactive experience','Task quick create form.'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}