//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_workordersubstatus_Information {
		interface tab__85C2E2AD_7C04_4944_9297_1AD79F174419_Sections {
			_CCF61533_4615_4169_A113_B47BAF392D8B: DevKit.Controls.Section;
		}
		interface tab_Notes_Sections {
		}
		interface tab__85C2E2AD_7C04_4944_9297_1AD79F174419 extends DevKit.Controls.ITab {
			Section: tab__85C2E2AD_7C04_4944_9297_1AD79F174419_Sections;
		}
		interface tab_Notes extends DevKit.Controls.ITab {
			Section: tab_Notes_Sections;
		}
		interface Tabs {
			_85C2E2AD_7C04_4944_9297_1AD79F174419: tab__85C2E2AD_7C04_4944_9297_1AD79F174419;
			Notes: tab_Notes;
		}
		interface Body {
			Tab: Tabs;
			/** Specify whether this substatus should be the default substatus for this status type. */
			msdyn_DefaultSubStatus: DevKit.Controls.Boolean;
			/** Shows the work order status name. */
			msdyn_name: DevKit.Controls.String;
			/** Specify the system status. */
			msdyn_SystemStatus: DevKit.Controls.OptionSet;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {
			nav_msdyn_msdyn_workordersubstatus_msdyn_workorder_Status: DevKit.Controls.NavigationItem,
			navProcessSessions: DevKit.Controls.NavigationItem
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_workordersubstatus_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_workordersubstatus_Information */
		Body: DevKit.Formmsdyn_workordersubstatus_Information.Body;
		/** The Navigation of form msdyn_workordersubstatus_Information */
		Navigation: DevKit.Formmsdyn_workordersubstatus_Information.Navigation;
		/** The Process of form msdyn_workordersubstatus_Information */
		Process: DevKit.Formmsdyn_workordersubstatus_Information.Process;
		/** The SidePanes of form msdyn_workordersubstatus_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_workordersubstatusApi {
		/**
		* DynamicsCrm.DevKit msdyn_workordersubstatusApi
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
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Shows the sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Specify whether this substatus should be the default substatus for this status type. */
		msdyn_DefaultSubStatus: boolean;
		/** Shows the work order status name. */
		msdyn_name: string;
		/** Specify the system status. */
		msdyn_SystemStatus: OptionSet.msdyn_workordersubstatus.msdyn_SystemStatus;
		/** Shows the entity instances. */
		msdyn_workordersubstatusId: string;
		/** Shows the date and time that the record was migrated. */
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
		/** Status of the Work Order Substatus */
		statecode: OptionSet.msdyn_workordersubstatus.statecode;
		/** Reason for the status of the Work Order Substatus */
		statuscode: OptionSet.msdyn_workordersubstatus.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Shows the time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Shows the sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Specify whether this substatus should be the default substatus for this status type. */
			readonly msdyn_DefaultSubStatus: string;
			/** Shows the work order status name. */
			readonly msdyn_name: string;
			/** Specify the system status. */
			readonly msdyn_SystemStatus: string;
			/** Shows the entity instances. */
			readonly msdyn_workordersubstatusId: string;
			/** Shows the date and time that the record was migrated. */
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
			/** Status of the Work Order Substatus */
			readonly statecode: string;
			/** Reason for the status of the Work Order Substatus */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Shows the time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_workordersubstatus {
		enum msdyn_SystemStatus {
			/** 690970005 */
			Canceled,
			/** 690970003 */
			Completed,
			/** 690970002 */
			In_Progress,
			/** 690970004 */
			Posted,
			/** 690970001 */
			Scheduled,
			/** 690970000 */
			Unscheduled
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.11.11','WebApiVersion':'2'}