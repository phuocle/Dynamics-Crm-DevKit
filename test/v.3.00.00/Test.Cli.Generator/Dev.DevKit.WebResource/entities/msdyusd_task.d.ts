//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyusd_task_Information {
		interface Tabs {
		}
		interface Body {
			/** Unique identifier for Agent Script Task Category associated with Agent Script Task. */
			msdyusd_Category: DevKit.Controls.Lookup;
			/** Instructions to the agent on what they should do while on this task. */
			msdyusd_instructions: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyusd_name: DevKit.Controls.String;
			/** Script that the agent should read when on this task.   This field supports replacable parameters.   At runtime, the script will replace [CONTEXT] with the value from the CONTEXT variable. */
			msdyusd_scripttext: DevKit.Controls.String;
			/** Unique identifier for UII Hosted Application associated with Agent Script Task. */
			msdyusd_ShowTab: DevKit.Controls.Lookup;
			msdyusd_StartTask: DevKit.Controls.Boolean;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Footer extends DevKit.Controls.IFooter {
			/** Status of the Task */
			statecode: DevKit.Controls.OptionSet;
		}
		interface Navigation {
			nav_msdyusd_task_agentscriptaction: DevKit.Controls.NavigationItem,
			nav_msdyusd_task_answer: DevKit.Controls.NavigationItem,
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			Answers: DevKit.Controls.Grid;
		}
	}
	class Formmsdyusd_task_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyusd_task_Information */
		Body: DevKit.Formmsdyusd_task_Information.Body;
		/** The Footer section of form msdyusd_task_Information */
		Footer: DevKit.Formmsdyusd_task_Information.Footer;
		/** The Navigation of form msdyusd_task_Information */
		Navigation: DevKit.Formmsdyusd_task_Information.Navigation;
		/** The Process of form msdyusd_task_Information */
		Process: DevKit.Formmsdyusd_task_Information.Process;
		/** The Grid of form msdyusd_task_Information */
		Grid: DevKit.Formmsdyusd_task_Information.Grid;
		/** The SidePanes of form msdyusd_task_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyusd_taskApi {
		/**
		* DynamicsCrm.DevKit msdyusd_taskApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for Agent Script Task Category associated with Agent Script Task. */
		msdyusd_Category: string;
		/** Description displayed to the user in the script */
		msdyusd_Description: string;
		/** Instructions to the agent on what they should do while on this task. */
		msdyusd_instructions: string;
		/** The name of the custom entity. */
		msdyusd_name: string;
		/** Script that the agent should read when on this task.   This field supports replacable parameters.   At runtime, the script will replace [CONTEXT] with the value from the CONTEXT variable. */
		msdyusd_scripttext: string;
		/** Unique identifier for UII Hosted Application associated with Agent Script Task. */
		msdyusd_ShowTab: string;
		msdyusd_StartTask: boolean;
		/** Unique identifier for entity instances */
		msdyusd_taskId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Task */
		statecode: OptionSet.msdyusd_task.statecode;
		/** Reason for the status of the Task */
		statuscode: OptionSet.msdyusd_task.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyusd_task {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}