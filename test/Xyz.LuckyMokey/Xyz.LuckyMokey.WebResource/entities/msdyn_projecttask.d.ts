//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_projecttask_Information {
		interface Header {
			/** Select the project name. */
			msdyn_project: DevKit.Form.Controls.ControlLookup;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
			/** Status of the Project Task */
			statecode: DevKit.Form.Controls.ControlOptionSet;
		}
		interface tab__7A08287E_9B25_4EE0_A2DD_288055BD63A7_Sections {
			_4FDEB155_C726_4210_A41F_97CE03BD0A9D: DevKit.Form.Controls.ControlSection;
			notes_section: DevKit.Form.Controls.ControlSection;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Form.Controls.ControlSection;
			tab_2_section_2: DevKit.Form.Controls.ControlSection;
		}
		interface tab__7A08287E_9B25_4EE0_A2DD_288055BD63A7 extends DevKit.Form.Controls.IControlTab {
			Section: tab__7A08287E_9B25_4EE0_A2DD_288055BD63A7_Sections;
		}
		interface tab_tab_2 extends DevKit.Form.Controls.IControlTab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			_7A08287E_9B25_4EE0_A2DD_288055BD63A7: tab__7A08287E_9B25_4EE0_A2DD_288055BD63A7;
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			notescontrol: DevKit.Form.Controls.ControlNote;
			/** Enter a description of the project task. */
			msdyn_description: DevKit.Form.Controls.ControlString;
			/** Shows the duration in days for the task. */
			msdyn_duration: DevKit.Form.Controls.ControlDouble;
			/** Shows the effort hours required for the task. */
			msdyn_Effort: DevKit.Form.Controls.ControlDouble;
			/** Select the summary or parent task in the hierarchy that contains a child task. */
			msdyn_parenttask: DevKit.Form.Controls.ControlLookup;
			/** Select the project name. */
			msdyn_project: DevKit.Form.Controls.ControlLookup;
			/** Shows the scheduled duration of the project task, specified in minutes. */
			msdyn_scheduleddurationminutes: DevKit.Form.Controls.ControlInteger;
			/** Enter the scheduled end time of the project. */
			msdyn_scheduledend: DevKit.Form.Controls.ControlDate;
			/** Enter the scheduled start time of the project task. */
			msdyn_scheduledstart: DevKit.Form.Controls.ControlDate;
			/** Type the name of the custom entity. */
			msdyn_subject: DevKit.Form.Controls.ControlString;
			/** Select the transaction category for the task. */
			msdyn_transactioncategory: DevKit.Form.Controls.ControlLookup;
			/** Shows the ID of the task in the work breakdown structure (WBS). */
			msdyn_WBSID: DevKit.Form.Controls.ControlString;
			/** Owner Id */
			OwnerId: DevKit.Form.Controls.ControlLookup;
		}
	}
	class Formmsdyn_projecttask_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_projecttask_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_projecttask_Information */
		Body: LuckyMokey.Formmsdyn_projecttask_Information.Body;
		/** The Header section of form msdyn_projecttask_Information */
		Header: LuckyMokey.Formmsdyn_projecttask_Information.Header;
	}
	class msdyn_projecttaskApi {
		/**
		* DynamicsCrm.DevKit msdyn_projecttaskApi
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
		/** Unique identifier of the user who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the project task was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the exchange rate for the currency associated with the entity with respect to the base currency. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of user who last modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter the value of the actual cost consumed based on work reported to be completed on the task.  */
		msdyn_Actualcost: DevKit.WebApi.MoneyValue;
		/** Value of the Actual Cost in base currency. */
		msdyn_actualcost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the actual duration of the project task in days */
		msdyn_actualdurationminutes: DevKit.WebApi.IntegerValue;
		/** Shows the hours submitted against the task. */
		msdyn_ActualEffort: DevKit.WebApi.DoubleValue;
		/** Enter the actual end time of the project task. */
		msdyn_actualend_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Actual Sales Amount */
		msdyn_ActualSales: DevKit.WebApi.MoneyValue;
		/** Shows the value of the actual sales in the base currency. */
		msdyn_actualsales_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Enter the actual start time of the project task. */
		msdyn_actualstart_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows whether the aggregation is happening upstream or downstream. */
		msdyn_AggregationDirection: DevKit.WebApi.OptionSetValue;
		/** Type the project team members that are assigned to task. */
		msdyn_AssignedResources: DevKit.WebApi.StringValue;
		/** Select the project team member that has been assigned to a task. */
		msdyn_AssignedTeamMembers: DevKit.WebApi.LookupValue;
		/** Shows whether auto scheduling was used for this task. */
		msdyn_autoscheduling: DevKit.WebApi.BooleanValue;
		/** Enter the forecast of the total cost to complete the task. */
		msdyn_CostAtCompleteEstimate: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Cost estimate at complete (EAC) in base currency. */
		msdyn_costatcompleteestimate_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Enter the consumption of the total cost in percentage. */
		msdyn_CostConsumptionPercentage: DevKit.WebApi.DecimalValueReadonly;
		/** The cost estimate contour for the task */
		msdyn_CostEstimateContour: DevKit.WebApi.StringValue;
		/** Enter a description of the project task. */
		msdyn_description: DevKit.WebApi.StringValue;
		/** Shows the duration in days for the task. */
		msdyn_duration: DevKit.WebApi.DoubleValue;
		/** Shows the effort hours required for the task. */
		msdyn_Effort: DevKit.WebApi.DoubleValue;
		/** The effort distribution */
		msdyn_EffortContour: DevKit.WebApi.StringValue;
		/** Shows the forecast of total effort to complete the task. */
		msdyn_EffortEstimateAtComplete: DevKit.WebApi.DoubleValue;
		/** Shows whether the task is a line task */
		msdyn_IsLineTask: DevKit.WebApi.BooleanValue;
		/** Show whether this task is a milestone. */
		msdyn_IsMilestone: DevKit.WebApi.BooleanValue;
		/** The id of the project task in MS Project Client. */
		msdyn_MSProjectClientId: DevKit.WebApi.StringValue;
		/** Shows the number of resources that are estimated for the task. This is not the number of resources assigned to the task. */
		msdyn_numberofresources: DevKit.WebApi.IntegerValue;
		/** Select the summary or parent task in the hierarchy that contains a child task. */
		msdyn_parenttask: DevKit.WebApi.LookupValue;
		/** Enter the value of the cost the service provider will incur based on the estimated work and cost rates in the pricelist. */
		msdyn_plannedCost: DevKit.WebApi.MoneyValue;
		/** Enter the value of cost estimated in base currency. */
		msdyn_plannedcost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Planned Sales Amount */
		msdyn_PlannedSales: DevKit.WebApi.MoneyValue;
		/** Shows the value of the planned sales in the base currency. */
		msdyn_plannedsales_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Processing data for the plugin pipeline */
		msdyn_PluginProcessingData: DevKit.WebApi.IntegerValue;
		/** Enter the percentage indicating work completed. */
		msdyn_Progress: DevKit.WebApi.DecimalValue;
		/** Select the project name. */
		msdyn_project: DevKit.WebApi.LookupValue;
		/** Shows the entity instances. */
		msdyn_projecttaskId: DevKit.WebApi.GuidValue;
		/** Enter the cost left over that can be consumed for future work. */
		msdyn_RemainingCost: DevKit.WebApi.MoneyValue;
		/** Shows the value of the remaining cost in the  base currency. */
		msdyn_remainingcost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the hours remaining to complete the task. */
		msdyn_RemainingHours: DevKit.WebApi.DoubleValue;
		/** Remaining Sales Amount */
		msdyn_RemainingSales: DevKit.WebApi.MoneyValue;
		/** Shows the value of the remaining sales in the base currency. */
		msdyn_remainingsales_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the hours assigned by generic resource. */
		msdyn_RequestedHours: DevKit.WebApi.DoubleValue;
		/** Select the resource role for the task. */
		msdyn_resourcecategory: DevKit.WebApi.LookupValue;
		/** Select the organizational unit of the resource who should perform the work. */
		msdyn_ResourceOrganizationalUnitId: DevKit.WebApi.LookupValue;
		/** Shows the utilization units for a resource that is assigned to a project task */
		msdyn_ResourceUtilization: DevKit.WebApi.DecimalValue;
		/** Shows the sales consumption percentage for this task. */
		msdyn_SalesConsumptionPercentage: DevKit.WebApi.DecimalValueReadonly;
		/** Shows the sales estimate at the completion of this task. */
		msdyn_SalesEstimateAtComplete: DevKit.WebApi.MoneyValueReadonly;
		/** Value of the Sales Estimate At Complete (EAC) in base currency. */
		msdyn_salesestimateatcomplete_Base: DevKit.WebApi.MoneyValueReadonly;
		/** The sales estimate contour */
		msdyn_SalesEstimateContour: DevKit.WebApi.StringValue;
		/** Shows the sales variance for this task. */
		msdyn_SalesVariance: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the value of the sales variance in the base currency. */
		msdyn_salesvariance_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the scheduled duration of the project task, specified in minutes. */
		msdyn_scheduleddurationminutes: DevKit.WebApi.IntegerValue;
		/** Enter the scheduled end time of the project. */
		msdyn_scheduledend_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the scheduled hours for the task. */
		msdyn_ScheduledHours: DevKit.WebApi.DoubleValue;
		/** Enter the scheduled start time of the project task. */
		msdyn_scheduledstart_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the variance between the estimated work and the forecasted work based on the estimate at completion (EAC). */
		msdyn_ScheduleVariance: DevKit.WebApi.DoubleValue;
		/** Internal flag to avoid the update process on the estimate lines of the project task */
		msdyn_skipupdateestimateline: DevKit.WebApi.BooleanValue;
		/** Type the name of the custom entity. */
		msdyn_subject: DevKit.WebApi.StringValue;
		/** Select the transaction category for the task. */
		msdyn_transactioncategory: DevKit.WebApi.LookupValue;
		/** Enter the variance between the estimated cost and the forecasted cost based on the estimate at completion (EAC). */
		msdyn_VarianceOfCost: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the value of the cost variance in the base currency. */
		msdyn_varianceofcost_Base: DevKit.WebApi.MoneyValueReadonly;
		/** Shows the ID of the task in the work breakdown structure (WBS). */
		msdyn_WBSID: DevKit.WebApi.StringValue;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Unique identifier for the business unit that owns the record */
		OwningBusinessUnit: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the team that owns the record. */
		OwningTeam: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier for the user that owns the record. */
		OwningUser: DevKit.WebApi.LookupValueReadonly;
		/** Contains the id of the process associated with the entity. */
		processid: DevKit.WebApi.GuidValue;
		/** Unique identifier of the Stage. */
		StageId: DevKit.WebApi.GuidValue;
		/** Status of the Project Task */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Project Task */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Shows the currency associated with the entity. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** A comma separated list of string values representing the unique identifiers of stages in a Business Process Flow Instance in the order that they occur. */
		traversedpath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace msdyn_projecttask {
		enum msdyn_AggregationDirection {
			/** 0 */
			Upstream,
			/** 1 */
			Downstream,
			/** 2 */
			Both
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}