//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormProcessSession_Information {
		interface tab__474B8A52_CB22_4194_A5A6_F21FD40B7417_Sections {
			/** Details */
			Details: DevKit.Controls.Section;
		}
		interface tab_Comments_Sections {
			/** Comments */
			Comments: DevKit.Controls.Section;
		}
		interface tab_Details_Sections {
			/** Details */
			Details_2: DevKit.Controls.Section;
		}
		interface tab_Linked_Sessions_Sections {
			/** Linked Sessions */
			Linked_Sessions: DevKit.Controls.Section;
		}
		interface tab_Summary_Sections {
			/** Summary */
			Summary: DevKit.Controls.Section;
		}
		/** General */
		interface tab__474B8A52_CB22_4194_A5A6_F21FD40B7417 extends DevKit.Controls.ITab {
			Section: tab__474B8A52_CB22_4194_A5A6_F21FD40B7417_Sections;
		}
		/** Comments */
		interface tab_Comments extends DevKit.Controls.ITab {
			Section: tab_Comments_Sections;
		}
		/** Details */
		interface tab_Details extends DevKit.Controls.ITab {
			Section: tab_Details_Sections;
		}
		/** Linked Sessions */
		interface tab_Linked_Sessions extends DevKit.Controls.ITab {
			Section: tab_Linked_Sessions_Sections;
		}
		/** Summary */
		interface tab_Summary extends DevKit.Controls.ITab {
			Section: tab_Summary_Sections;
		}
		interface Tabs {
			/** General */
			_474B8A52_CB22_4194_A5A6_F21FD40B7417: tab__474B8A52_CB22_4194_A5A6_F21FD40B7417;
			/** Comments */
			Comments: tab_Comments;
			/** Details */
			Details: tab_Details;
			/** Linked Sessions */
			Linked_Sessions: tab_Linked_Sessions;
			/** Summary */
			Summary: tab_Summary;
		}
		interface Body {
			Tab: Tabs;
			/** Unique identifier of the user who canceled the dialog session. */
			CanceledBy: DevKit.Controls.Lookup;
			/** Date and time when the dialog session was canceled. */
			CanceledOn: DevKit.Controls.DateTime;
			/** User comments. */
			Comments: DevKit.Controls.String;
			/** Unique identifier of the user who completed the dialog session. */
			CompletedBy: DevKit.Controls.Lookup;
			/** Date and time when the dialog session was completed. */
			CompletedOn: DevKit.Controls.DateTime;
			/** Date and time when the dialog session was created. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Name of the dialog session. */
			Name: DevKit.Controls.String;
			/** Unique identifier of the succeeding linked dialog session. */
			NextLinkedSessionId: DevKit.Controls.Lookup;
			/** Unique identifier of the originating dialog session. */
			OriginatingSessionId: DevKit.Controls.Lookup;
			/** Unique identifier of the user or team who owns the dialog session. */
			OwnerId: DevKit.Controls.Lookup;
			/** Unique identifier of the preceding linked dialog session. */
			PreviousLinkedSessionId: DevKit.Controls.Lookup;
			/** Select the process activation record that is related to the dialog session. */
			ProcessId: DevKit.Controls.Lookup;
			/** Unique identifier of the object with which the dialog session is associated. */
			RegardingObjectId: DevKit.Controls.Lookup;
			/** Unique identifier of the user who started the dialog session. */
			StartedBy: DevKit.Controls.Lookup;
			/** Date and time when the dialog session was started. */
			StartedOn: DevKit.Controls.DateTime;
			/** Reason for the status of the dialog session. */
			StatusCode: DevKit.Controls.OptionSet;
		}
	}
	export class FormProcessSession_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form ProcessSession_Information */
		Body: DevKit.FormProcessSession_Information.Body;
	}
	export class ProcessSessionApi {
		/**
		* DynamicsCrm.DevKit ProcessSessionApi
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
		/** Name of the activity that is being executed. */
		ActivityName: string | null;
		/** Unique identifier of the user who canceled the dialog session. */
		readonly CanceledBy: string | null;
		/** Date and time when the dialog session was canceled. */
		CanceledOn_UtcDateAndTime: Date | null;
		/** User comments. */
		Comments: string | null;
		/** Unique identifier of the user who completed the dialog session. */
		readonly CompletedBy: string | null;
		/** Date and time when the dialog session was completed. */
		CompletedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the user who started the dialog session. */
		readonly CreatedBy: string | null;
		/** Date and time when the dialog session was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the dialog session. */
		readonly CreatedOnBehalfBy: string | null;
		/** Error code related to the dialog session. */
		ErrorCode: number | null;
		/** Unique identifier of the user who ran the dialog process. */
		ExecutedBy: string | null;
		/** Date and time when the dialog process was run. */
		readonly ExecutedOn_UtcDateAndTime: Date | null;
		/** Input arguments for the child dialog process. */
		InputArguments: string | null;
		/** Unique identifier of the user who last modified the dialog session. */
		readonly ModifiedBy: string | null;
		/** Date and time when the dialog session was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the dialog session. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Name of the dialog session. */
		Name: string | null;
		/** Unique identifier of the succeeding linked dialog session. */
		NextLinkedSessionId: string | null;
		/** Unique identifier of the originating dialog session. */
		OriginatingSessionId: string | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the dialog session. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the dialog session. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the dialog session. */
		readonly OwningUser: string | null;
		/** Unique identifier of the preceding linked dialog session. */
		PreviousLinkedSessionId: string | null;
		/** Select the process activation record that is related to the dialog session. */
		ProcessId: string | null;
		/** Unique identifier of the dialog session. */
		ProcessSessionId: string | null;
		/** Name of the dialog stage. */
		ProcessStageName: string | null;
		/** State of the dialog process. */
		ProcessState: string | null;
		/** For internal use only. */
		readonly ProtectionKey: string | null;
		/** Unique identifier of the user who started the dialog session. */
		readonly StartedBy: string | null;
		/** Date and time when the dialog session was started. */
		StartedOn_UtcDateAndTime: Date | null;
		/** Status of the dialog session. */
		StateCode: OptionSet.ProcessSession.StateCode | null;
		/** Reason for the status of the dialog session. */
		StatusCode: OptionSet.ProcessSession.StatusCode | null;
		/** Name of the dialog step. */
		StepName: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Name of the activity that is being executed. */
			readonly ActivityName: string;
			/** Unique identifier of the user who canceled the dialog session. */
			readonly CanceledBy: string;
			/** Date and time when the dialog session was canceled. */
			readonly CanceledOn_UtcDateAndTime: string;
			/** User comments. */
			readonly Comments: string;
			/** Unique identifier of the user who completed the dialog session. */
			readonly CompletedBy: string;
			/** Date and time when the dialog session was completed. */
			readonly CompletedOn_UtcDateAndTime: string;
			/** Unique identifier of the user who started the dialog session. */
			readonly CreatedBy: string;
			/** Date and time when the dialog session was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the dialog session. */
			readonly CreatedOnBehalfBy: string;
			/** Error code related to the dialog session. */
			readonly ErrorCode: string;
			/** Unique identifier of the user who ran the dialog process. */
			readonly ExecutedBy: string;
			/** Date and time when the dialog process was run. */
			readonly ExecutedOn_UtcDateAndTime: string;
			/** Input arguments for the child dialog process. */
			readonly InputArguments: string;
			/** Unique identifier of the user who last modified the dialog session. */
			readonly ModifiedBy: string;
			/** Date and time when the dialog session was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the dialog session. */
			readonly ModifiedOnBehalfBy: string;
			/** Name of the dialog session. */
			readonly Name: string;
			/** Unique identifier of the succeeding linked dialog session. */
			readonly NextLinkedSessionId: string;
			/** Unique identifier of the originating dialog session. */
			readonly OriginatingSessionId: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the dialog session. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the dialog session. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the dialog session. */
			readonly OwningUser: string;
			/** Unique identifier of the preceding linked dialog session. */
			readonly PreviousLinkedSessionId: string;
			/** Select the process activation record that is related to the dialog session. */
			readonly ProcessId: string;
			/** Unique identifier of the dialog session. */
			readonly ProcessSessionId: string;
			/** Name of the dialog stage. */
			readonly ProcessStageName: string;
			/** State of the dialog process. */
			readonly ProcessState: string;
			/** For internal use only. */
			readonly ProtectionKey: string;
			/** Unique identifier of the user who started the dialog session. */
			readonly StartedBy: string;
			/** Date and time when the dialog session was started. */
			readonly StartedOn_UtcDateAndTime: string;
			/** Status of the dialog session. */
			readonly StateCode: string;
			/** Reason for the status of the dialog session. */
			readonly StatusCode: string;
			/** Name of the dialog step. */
			readonly StepName: string;
		}
	}
}
declare namespace OptionSet {
	namespace ProcessSession {
		enum RegardingObjectTypeCode {
		}
		enum StateCode {
			/** Complete = 1*/
			Complete = 1,
			/** Incomplete = 0*/
			Incomplete = 0
		}
		enum StatusCode {
			/** Canceled = 5*/
			Canceled = 5,
			/** Completed = 4*/
			Completed = 4,
			/** Failed = 6*/
			Failed = 6,
			/** In_Progress = 2*/
			In_Progress = 2,
			/** Not_Started = 1*/
			Not_Started = 1,
			/** Paused = 3*/
			Paused = 3
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