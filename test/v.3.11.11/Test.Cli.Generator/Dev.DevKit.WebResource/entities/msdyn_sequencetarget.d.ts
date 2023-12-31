//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_sequencetarget_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Date and time when the record was connected to the sequence. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_parentsequence: DevKit.Controls.Lookup;
		}
		interface Navigation {
			navAsyncOperations: DevKit.Controls.NavigationItem,
			navAudit: DevKit.Controls.NavigationItem,
			navConnections: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_sequencetarget_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_sequencetarget_Information */
		Body: DevKit.Formmsdyn_sequencetarget_Information.Body;
		/** The Header section of form msdyn_sequencetarget_Information */
		Header: DevKit.Formmsdyn_sequencetarget_Information.Header;
		/** The Navigation of form msdyn_sequencetarget_Information */
		Navigation: DevKit.Formmsdyn_sequencetarget_Information.Navigation;
		/** The Process of form msdyn_sequencetarget_Information */
		Process: DevKit.Formmsdyn_sequencetarget_Information.Process;
		/** The SidePanes of form msdyn_sequencetarget_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_sequencetargetApi {
		/**
		* DynamicsCrm.DevKit msdyn_sequencetargetApi
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
		/** Date and time when the record was connected to the sequence. */
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
		msdyn_appliedsequenceinstance: string;
		/** The current step count for the connected sequence. */
		msdyn_currentstepcount: number;
		/** The current step name of the Sequence Target Step entity. */
		msdyn_currentstepname: string;
		/** Shows the sub type of sequence target step */
		msdyn_currentstepsubtype: OptionSet.msdyn_sequencetarget.msdyn_currentstepsubtype;
		msdyn_currentsteptype: OptionSet.msdyn_sequencetarget.msdyn_currentsteptype;
		/** Reason for deactivation of sequence target */
		msdyn_deactivatereason: OptionSet.msdyn_sequencetarget.msdyn_deactivatereason;
		/** MS Flow Run Identifier */
		msdyn_msflowrunid: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_parentsequence: string;
		/** Version of the sequence */
		msdyn_ParentSequenceVersion: number;
		/** The information about record to which this sequence instance is related */
		msdyn_regarding: string;
		/** Unique identifier for Segment associated with Sequence Target. */
		msdyn_segment: string;
		/** Unique identifier for entity instances */
		msdyn_sequencetargetId: string;
		/** It stores unique key for each record. */
		msdyn_sequencetargetuniquekey: string;
		/** Target Record */
		msdyn_target: string;
		/** The total step count for the connected sequence. */
		msdyn_totalstepcount: number;
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
		/** Status of the Sequence Target */
		statecode: OptionSet.msdyn_sequencetarget.statecode;
		/** Reason for the status of the Sequence Target */
		statuscode: OptionSet.msdyn_sequencetarget.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was connected to the sequence. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			readonly msdyn_appliedsequenceinstance: string;
			/** The current step count for the connected sequence. */
			readonly msdyn_currentstepcount: string;
			/** The current step name of the Sequence Target Step entity. */
			readonly msdyn_currentstepname: string;
			/** Shows the sub type of sequence target step */
			readonly msdyn_currentstepsubtype: string;
			readonly msdyn_currentsteptype: string;
			/** Reason for deactivation of sequence target */
			readonly msdyn_deactivatereason: string;
			/** MS Flow Run Identifier */
			readonly msdyn_msflowrunid: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_parentsequence: string;
			/** Version of the sequence */
			readonly msdyn_ParentSequenceVersion: string;
			/** The information about record to which this sequence instance is related */
			readonly msdyn_regarding: string;
			/** Unique identifier for Segment associated with Sequence Target. */
			readonly msdyn_segment: string;
			/** Unique identifier for entity instances */
			readonly msdyn_sequencetargetId: string;
			/** It stores unique key for each record. */
			readonly msdyn_sequencetargetuniquekey: string;
			/** Target Record */
			readonly msdyn_target: string;
			/** The total step count for the connected sequence. */
			readonly msdyn_totalstepcount: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the Sequence Target */
			readonly statecode: string;
			/** Reason for the status of the Sequence Target */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_sequencetarget {
		enum msdyn_currentstepsubtype {
			/** 0 */
			Default,
			/** 3 */
			LinkedInConnect,
			/** 2 */
			LinkedInGetIntroduced,
			/** 4 */
			LinkedInMail,
			/** 1 */
			LinkedInResearch
		}
		enum msdyn_currentsteptype {
			/** 4 */
			Auto_action,
			/** 3 */
			Automated_Email,
			/** 4202 */
			Email,
			/** 5 */
			LinkedIn_action,
			/** 4210 */
			Phone_call,
			/** 1 */
			Simple_Condition,
			/** 4212 */
			Task,
			/** 0 */
			Wait
		}
		enum msdyn_deactivatereason {
			/** 3 */
			Exit_Criterion_Met,
			/** 1 */
			Parent_Sequence_Deactivated,
			/** 2 */
			Regarding_Entity_Deactivated,
			/** 0 */
			User_Disconnected
		}
		enum msdyn_targetIdType {
		}
		enum OwnerIdType {
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 3 */
			Completed,
			/** 2 */
			Connected,
			/** 1 */
			Connecting,
			/** 5 */
			Disconnected,
			/** 4 */
			Error
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