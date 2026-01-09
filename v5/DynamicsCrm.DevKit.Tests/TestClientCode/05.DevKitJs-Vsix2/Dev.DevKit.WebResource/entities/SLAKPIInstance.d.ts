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
	export class FormSLA_KPI_Instance extends DevKit.IForm {
		/**
		* SLA KPI Instance [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form SLA_KPI_Instance */
		Body: DevKit.FormSLA_KPI_Instance.Body;
		/** The Header section of form SLA_KPI_Instance */
		Header: DevKit.FormSLA_KPI_Instance.Header;
	}
	export class SLAKPIInstanceApi {
		/**
		* DynamicsCrm.DevKit SLAKPIInstanceApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		ApplicableFromValue_UtcDateAndTime: Date | null;
		/** Computed Failure Date and time */
		ComputedFailureTime_UtcDateAndTime: Date | null;
		/** Computed Warning Date and time */
		ComputedWarningTime_UtcDateAndTime: Date | null;
		/** For internal use only. */
		readonly CreatedBy: string | null;
		/** For internal use only. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** For internal use only. */
		readonly CreatedOnBehalfBy: string | null;
		/** For internal use only. */
		Description: string | null;
		/** Paused duration of a KPI in business hours */
		ElapsedTime: number | null;
		/** For internal use only. */
		readonly ExchangeRate: number | null;
		/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI) will expire. */
		FailureTime_UtcDateAndTime: Date | null;
		LastResumeTime_UtcDateAndTime: Date | null;
		/** For internal use only. */
		readonly ModifiedBy: string | null;
		/** For internal use only. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** For internal use only. */
		readonly ModifiedOnBehalfBy: string | null;
		msdyn_ActionExecutionStatus: OptionSet.SLAKPIInstance.msdyn_ActionExecutionStatus | null;
		/** Time taken in business hours by a KPI instance to reach the Success or failed state */
		msdyn_activeduration: number | null;
		msdyn_calendarid: string | null;
		msdyn_prevslakpiinstanceid: string | null;
		/** Unique identifier for SLA KPI Instance associated with SLA Item. */
		msdyn_slaitemid: string | null;
		/** Type a descriptive name for the service level agreement (SLA) key performance indicator (KPI) instance. */
		Name: string | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Owning Business Unit. */
		OwningBusinessUnit: string | null;
		PausedOn_UtcDateAndTime: Date | null;
		RegardingEntityID: string | null;
		/** Unique identifier of the SLA KPI Instance. */
		SLAKPIInstanceId: string | null;
		/** Reason for the status of the service level agreement (SLA) key performance indicator (KPI) instance. For example, the SLA KPI could be Noncompliant or Succeeded. */
		Status: OptionSet.SLAKPIInstance.Status | null;
		/** Shows the date and time when the service level agreement (SLA) key performance indicator (KPI) success criteria was met. */
		SucceededOn_UtcDateAndTime: Date | null;
		SuccessCheckedAt_TimezoneDateAndTime: Date | null;
		TerminalStateReached: boolean | null;
		TerminalStateTime_UtcDateAndTime: Date | null;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		TransactionCurrencyId: string | null;
		/** For internal use only. */
		readonly VersionNumber: number | null;
		/** Enter the date and time when the service level agreement (SLA) key performance indicator (KPI)will go to a warning state. */
		WarningTime_UtcDateAndTime: Date | null;
		/** Shows information about whether the case has reached its warning time. */
		WarningTimeReached: OptionSet.SLAKPIInstance.WarningTimeReached | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Paused duration of a KPI in business hours */
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
			/** Time taken in business hours by a KPI instance to reach the Success or failed state */
			readonly msdyn_activeduration: string;
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
			/** None = 0*/
			None = 0,
			/** Success = 2*/
			Success = 2,
			/** Warning = 1*/
			Warning = 1
		}
		enum RegardingObjectTypeCode {
		}
		enum Status {
			/** Canceled = 5*/
			Canceled = 5,
			/** In_Progress = 0*/
			In_Progress = 0,
			/** Nearing_Noncompliance = 2*/
			Nearing_Noncompliance = 2,
			/** Noncompliant = 1*/
			Noncompliant = 1,
			/** Paused = 3*/
			Paused = 3,
			/** Succeeded = 4*/
			Succeeded = 4
		}
		enum WarningTimeReached {
			/** No = 0*/
			No = 0,
			/** Yes = 1*/
			Yes = 1
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}