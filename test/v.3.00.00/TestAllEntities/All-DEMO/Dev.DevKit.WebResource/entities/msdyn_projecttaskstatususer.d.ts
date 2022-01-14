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
		* DynamicsCrm.DevKit form msdyn_projecttaskstatususer_Information Main Form
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
		/** Date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the record. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the user who modified the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the record was modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who modified the record. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		msdyn_BookableResource: DevKit.WebApi.LookupValue;
		/** Shows the description of the task. */
		msdyn_description: DevKit.WebApi.StringValue;
		/** Shows the expected completion date of the task entered by the assigned resource. */
		msdyn_expectedcompletiondate_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Shows the expected hours to complete the task entered by the assigned resource. */
		msdyn_expectedhourstocomplete: DevKit.WebApi.DoubleValue;
		/** Shows if the task is completed. */
		msdyn_iscompleted: DevKit.WebApi.BooleanValue;
		/** Type the name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Shows the reported percentage complete for the project task. */
		msdyn_percentcomplete: DevKit.WebApi.IntegerValue;
		/** Unique identifier for Project Task associated with Project Task Status User. */
		msdyn_projecttaskId: DevKit.WebApi.LookupValue;
		/** Indicates the status of the project task reported by the user resource. */
		msdyn_projecttaskstatusindicator: DevKit.WebApi.OptionSetValue;
		/** Unique identifier for entity instances */
		msdyn_projecttaskstatususerId: DevKit.WebApi.GuidValue;
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
		/** Status of the Project Task Status User */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Project Task Status User */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}