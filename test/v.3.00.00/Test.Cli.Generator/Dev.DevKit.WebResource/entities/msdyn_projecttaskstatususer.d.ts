//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_projecttaskstatususer_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was modified. */
			ModifiedOn: DevKit.Controls.DateTime;
			msdyn_BookableResource: DevKit.Controls.Lookup;
			/** Shows the description of the task. */
			msdyn_description: DevKit.Controls.String;
			/** Shows the expected completion date of the task entered by the assigned resource. */
			msdyn_expectedcompletiondate: DevKit.Controls.Date;
			/** Shows the expected hours to complete the task entered by the assigned resource. */
			msdyn_expectedhourstocomplete: DevKit.Controls.Double;
			/** Type the name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Shows the reported percentage complete for the project task. */
			msdyn_percentcomplete: DevKit.Controls.Integer;
			/** Unique identifier for Project Task associated with Project Task Status User. */
			msdyn_projecttaskId: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_projecttaskstatususer_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_projecttaskstatususer_Information */
		Body: DevKit.Formmsdyn_projecttaskstatususer_Information.Body;
		/** The Process of form msdyn_projecttaskstatususer_Information */
		Process: DevKit.Formmsdyn_projecttaskstatususer_Information.Process;
		/** The SidePanes of form msdyn_projecttaskstatususer_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_projecttaskstatususerApi {
		/**
		* DynamicsCrm.DevKit msdyn_projecttaskstatususerApi
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
		msdyn_BookableResource: string;
		/** Shows the description of the task. */
		msdyn_description: string;
		/** Shows the expected completion date of the task entered by the assigned resource. */
		msdyn_expectedcompletiondate_UtcDateOnly: Date;
		/** Shows the expected hours to complete the task entered by the assigned resource. */
		msdyn_expectedhourstocomplete: number;
		/** Shows if the task is completed. */
		msdyn_iscompleted: boolean;
		/** Type the name of the custom entity. */
		msdyn_name: string;
		/** Shows the reported percentage complete for the project task. */
		msdyn_percentcomplete: number;
		/** Unique identifier for Project Task associated with Project Task Status User. */
		msdyn_projecttaskId: string;
		/** Indicates the status of the project task reported by the user resource. */
		msdyn_projecttaskstatusindicator: OptionSet.msdyn_projecttaskstatususer.msdyn_projecttaskstatusindicator;
		/** Unique identifier for entity instances */
		msdyn_projecttaskstatususerId: string;
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
		/** Status of the Project Task Status User */
		statecode: OptionSet.msdyn_projecttaskstatususer.statecode;
		/** Reason for the status of the Project Task Status User */
		statuscode: OptionSet.msdyn_projecttaskstatususer.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
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
			readonly msdyn_BookableResource: string;
			/** Shows the description of the task. */
			readonly msdyn_description: string;
			/** Shows the expected completion date of the task entered by the assigned resource. */
			readonly msdyn_expectedcompletiondate_UtcDateOnly: string;
			/** Shows the expected hours to complete the task entered by the assigned resource. */
			readonly msdyn_expectedhourstocomplete: string;
			/** Shows if the task is completed. */
			readonly msdyn_iscompleted: string;
			/** Type the name of the custom entity. */
			readonly msdyn_name: string;
			/** Shows the reported percentage complete for the project task. */
			readonly msdyn_percentcomplete: string;
			/** Unique identifier for Project Task associated with Project Task Status User. */
			readonly msdyn_projecttaskId: string;
			/** Indicates the status of the project task reported by the user resource. */
			readonly msdyn_projecttaskstatusindicator: string;
			/** Unique identifier for entity instances */
			readonly msdyn_projecttaskstatususerId: string;
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
			/** Status of the Project Task Status User */
			readonly statecode: string;
			/** Reason for the status of the Project Task Status User */
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
	namespace msdyn_projecttaskstatususer {
		enum msdyn_projecttaskstatusindicator {
			/** 192350000 */
			Green,
			/** 192350003 */
			None,
			/** 192350002 */
			Red,
			/** 192350001 */
			Yellow
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