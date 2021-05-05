//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSLA_KPI_Instance {
		interface Header extends DevKit.Controls.IHeader {
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user or team. */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the service level agreement (SLA) key performance indicator (KPI) instance. For example, the SLA KPI could be Noncompliant or Succeeded. */
			Status: DevKit.Controls.OptionSet;
		}
		interface Tabs {
		}
		interface Body {
			/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI) will expire. */
			FailureTime: DevKit.Controls.DateTime;
			/** Type a descriptive name for the service level agreement (SLA) key performance indicator (KPI) instance. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
			Regarding: DevKit.Controls.Lookup;
			/** Shows the date and time when the service level agreement (SLA) key performance indicator (KPI) success criteria was met. */
			SucceededOn: DevKit.Controls.DateTime;
			/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI)will go to a warning state. */
			WarningTime: DevKit.Controls.DateTime;
		}
	}
	class FormSLA_KPI_Instance extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form SLA_KPI_Instance
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SLA_KPI_Instance */
		Body: DevKit.FormSLA_KPI_Instance.Body;
		/** The Header section of form SLA_KPI_Instance */
		Header: DevKit.FormSLA_KPI_Instance.Header;
	}
	class SLAKPIInstanceApi {
		/**
		* DynamicsCrm.DevKit SLAKPIInstanceApi
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
		ApplicableFromValue_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Computed Failure Date and time */
		ComputedFailureTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Computed Warning Date and time */
		ComputedWarningTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** For internal use only. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** For internal use only. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		Description: DevKit.WebApi.StringValue;
		ElapsedTime: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		ExchangeRate: DevKit.WebApi.DecimalValueReadonly;
		/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI) will expire. */
		FailureTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		LastResumeTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** For internal use only. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** For internal use only. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_ActionExecutionStatus: DevKit.WebApi.OptionSetValue;
		msdyn_calendarid: DevKit.WebApi.StringValue;
		msdyn_prevslakpiinstanceid: DevKit.WebApi.StringValue;
		/** Unique identifier for SLA KPI Instance associated with SLA Item. */
		msdyn_slaitemid: DevKit.WebApi.LookupValue;
		/** Type a descriptive name for the service level agreement (SLA) key performance indicator (KPI) instance. */
		Name: DevKit.WebApi.StringValue;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: DevKit.WebApi.LookupValue;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: DevKit.WebApi.LookupValue;
		/** Owning Business Unit. */
		OwningBusinessUnit: DevKit.WebApi.LookupValue;
		/** OwningTeam. */
		OwningTeam: DevKit.WebApi.LookupValue;
		/** Owning User. */
		OwningUser: DevKit.WebApi.LookupValue;
		PausedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_account: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_activitypointer: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_appointment: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_contact: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_email: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_fax: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_letter: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_phonecall: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_socialactivity: DevKit.WebApi.LookupValue;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		regarding_task: DevKit.WebApi.LookupValue;
		RegardingEntityID: DevKit.WebApi.StringValue;
		/** RegardingName */
		RegardingIdName: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the SLA KPI Instance. */
		SLAKPIInstanceId: DevKit.WebApi.GuidValue;
		/** Reason for the status of the service level agreement (SLA) key performance indicator (KPI) instance. For example, the SLA KPI could be Noncompliant or Succeeded. */
		Status: DevKit.WebApi.OptionSetValue;
		/** Shows the date and time when the service level agreement (SLA) key performance indicator (KPI) success criteria was met. */
		SucceededOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		SuccessCheckedAt_TimezoneDateAndTime: DevKit.WebApi.TimezoneDateAndTimeValue;
		TerminalStateReached: DevKit.WebApi.BooleanValue;
		TerminalStateTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: DevKit.WebApi.LookupValue;
		/** For internal use only. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
		/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI)will go to a warning state. */
		WarningTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Shows information about whether the case has reached its warning time. */
		WarningTimeReached: DevKit.WebApi.OptionSetValue;
	}
}
declare namespace OptionSet {
	namespace SLAKPIInstance {
		enum msdyn_ActionExecutionStatus {
			/** 0 */
			None,
			/** 2 */
			Success,
			/** 1 */
			Warning
		}
		enum Status {
			/** 5 */
			Canceled,
			/** 0 */
			In_Progress,
			/** 2 */
			Nearing_Noncompliance,
			/** 1 */
			Noncompliant,
			/** 3 */
			Paused,
			/** 4 */
			Succeeded
		}
		enum WarningTimeReached {
			/** 0 */
			No,
			/** 1 */
			Yes
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
//{'JsForm':['SLA KPI Instance'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}