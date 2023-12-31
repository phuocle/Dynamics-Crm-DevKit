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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormSLA_KPI_Instance extends DevKit.IForm {
		/**
		* SLA KPI Instance [Main Form]
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
		/** The Process of form SLA_KPI_Instance */
		Process: DevKit.FormSLA_KPI_Instance.Process;
		/** The SidePanes of form SLA_KPI_Instance */
		SidePanes: DevKit.SidePanes;
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
		ApplicableFromValue_UtcDateAndTime: Date;
		/** Computed Failure Date and time */
		ComputedFailureTime_UtcDateAndTime: Date;
		/** Computed Warning Date and time */
		ComputedWarningTime_UtcDateAndTime: Date;
		/** For internal use only. */
		readonly CreatedBy: string;
		/** For internal use only. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** For internal use only. */
		readonly CreatedOnBehalfBy: string;
		/** For internal use only. */
		Description: string;
		ElapsedTime: number;
		/** For internal use only. */
		readonly ExchangeRate: number;
		/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI) will expire. */
		FailureTime_UtcDateAndTime: Date;
		LastResumeTime_UtcDateAndTime: Date;
		/** For internal use only. */
		readonly ModifiedBy: string;
		/** For internal use only. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** For internal use only. */
		readonly ModifiedOnBehalfBy: string;
		msdyn_ActionExecutionStatus: OptionSet.SLAKPIInstance.msdyn_ActionExecutionStatus;
		msdyn_calendarid: string;
		msdyn_prevslakpiinstanceid: string;
		/** Unique identifier for SLA KPI Instance associated with SLA Item. */
		msdyn_slaitemid: string;
		/** Type a descriptive name for the service level agreement (SLA) key performance indicator (KPI) instance. */
		Name: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Owning Business Unit. */
		OwningBusinessUnit: string;
		PausedOn_UtcDateAndTime: Date;
		/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
		Regarding: string;
		RegardingEntityID: string;
		/** Unique identifier of the SLA KPI Instance. */
		SLAKPIInstanceId: string;
		/** Reason for the status of the service level agreement (SLA) key performance indicator (KPI) instance. For example, the SLA KPI could be Noncompliant or Succeeded. */
		Status: OptionSet.SLAKPIInstance.Status;
		/** Shows the date and time when the service level agreement (SLA) key performance indicator (KPI) success criteria was met. */
		SucceededOn_UtcDateAndTime: Date;
		SuccessCheckedAt_TimezoneDateAndTime: Date;
		TerminalStateReached: boolean;
		TerminalStateTime_UtcDateAndTime: Date;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string;
		/** For internal use only. */
		readonly VersionNumber: number;
		/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI)will go to a warning state. */
		WarningTime_UtcDateAndTime: Date;
		/** Shows information about whether the case has reached its warning time. */
		WarningTimeReached: OptionSet.SLAKPIInstance.WarningTimeReached;
		readonly FormattedValue: {
			readonly ApplicableFromValue_UtcDateAndTime: string;
			/** Computed Failure Date and time */
			readonly ComputedFailureTime_UtcDateAndTime: string;
			/** Computed Warning Date and time */
			readonly ComputedWarningTime_UtcDateAndTime: string;
			/** For internal use only. */
			readonly CreatedBy: string;
			/** For internal use only. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** For internal use only. */
			readonly CreatedOnBehalfBy: string;
			/** For internal use only. */
			readonly Description: string;
			readonly ElapsedTime: string;
			/** For internal use only. */
			readonly ExchangeRate: string;
			/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI) will expire. */
			readonly FailureTime_UtcDateAndTime: string;
			readonly LastResumeTime_UtcDateAndTime: string;
			/** For internal use only. */
			readonly ModifiedBy: string;
			/** For internal use only. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** For internal use only. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_ActionExecutionStatus: string;
			readonly msdyn_calendarid: string;
			readonly msdyn_prevslakpiinstanceid: string;
			/** Unique identifier for SLA KPI Instance associated with SLA Item. */
			readonly msdyn_slaitemid: string;
			/** Type a descriptive name for the service level agreement (SLA) key performance indicator (KPI) instance. */
			readonly Name: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Owning Business Unit. */
			readonly OwningBusinessUnit: string;
			readonly PausedOn_UtcDateAndTime: string;
			/** Unique identifier of the record that this service level agreement (SLA) key performance indicator (KPI) instance is associated with. */
			readonly Regarding: string;
			readonly RegardingEntityID: string;
			/** Unique identifier of the SLA KPI Instance. */
			readonly SLAKPIInstanceId: string;
			/** Reason for the status of the service level agreement (SLA) key performance indicator (KPI) instance. For example, the SLA KPI could be Noncompliant or Succeeded. */
			readonly Status: string;
			/** Shows the date and time when the service level agreement (SLA) key performance indicator (KPI) success criteria was met. */
			readonly SucceededOn_UtcDateAndTime: string;
			readonly SuccessCheckedAt_TimezoneDateAndTime: string;
			readonly TerminalStateReached: string;
			readonly TerminalStateTime_UtcDateAndTime: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** For internal use only. */
			readonly VersionNumber: string;
			/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI)will go to a warning state. */
			readonly WarningTime_UtcDateAndTime: string;
			/** Shows information about whether the case has reached its warning time. */
			readonly WarningTimeReached: string;
		}
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
		enum OwnerIdType {
		}
		enum RegardingObjectTypeCode {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}