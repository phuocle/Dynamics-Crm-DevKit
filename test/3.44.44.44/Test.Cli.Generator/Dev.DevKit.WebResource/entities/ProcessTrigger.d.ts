//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class ProcessTriggerApi {
		/**
		* DynamicsCrm.DevKit ProcessTriggerApi
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
		readonly ComponentState: OptionSet.ProcessTrigger.ComponentState;
		/** Name of the control. */
		ControlName: string;
		/** Type of the control to which this trigger is bound */
		ControlType: OptionSet.ProcessTrigger.ControlType;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Indicates the event. */
		Event: string;
		/** Unique identifier of the form associated with the trigger. */
		FormId: string;
		/** Indicates whether this component can be customized. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Displays StageID to which the PBL rule belongs to */
		MethodId: string;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		readonly OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		readonly OwnerId_team: string;
		/** Select the business unit that owns the record. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Pipeline Stage to Execute Workflow Event Plugin. */
		PipelineStage: OptionSet.ProcessTrigger.PipelineStage;
		/** Shows the ID of the process. */
		ProcessId: string;
		/** Unique identifier of the process trigger record. */
		ProcessTriggerId: string;
		/** For internal use only. */
		readonly ProcessTriggerIdUnique: string;
		/** Scope level for PBL rules. */
		Scope: OptionSet.ProcessTrigger.Scope;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentState: string;
			/** Name of the control. */
			readonly ControlName: string;
			/** Type of the control to which this trigger is bound */
			readonly ControlType: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Indicates the event. */
			readonly Event: string;
			/** Unique identifier of the form associated with the trigger. */
			readonly FormId: string;
			/** Indicates whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Displays StageID to which the PBL rule belongs to */
			readonly MethodId: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Select the business unit that owns the record. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Pipeline Stage to Execute Workflow Event Plugin. */
			readonly PipelineStage: string;
			/** Shows the ID of the process. */
			readonly ProcessId: string;
			/** Unique identifier of the process trigger record. */
			readonly ProcessTriggerId: string;
			/** For internal use only. */
			readonly ProcessTriggerIdUnique: string;
			/** Scope level for PBL rules. */
			readonly Scope: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ProcessTrigger {
		enum ComponentState {
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum ControlType {
			/** 1 */
			Attribute,
			/** 2 */
			Form_Tab
		}
		enum PipelineStage {
			/** 40 */
			After_Main_Operation,
			/** 20 */
			Before_Main_Operation,
			/** 0 */
			Default_Value
		}
		enum PrimaryEntityTypeCode {
		}
		enum Scope {
			/** 2 */
			Entity,
			/** 1 */
			Form
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