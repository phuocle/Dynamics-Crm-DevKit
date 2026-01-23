//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_solutionhistory_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** End Time */
			msdyn_endtime: DevKit.Controls.DateTime;
			/** Result */
			msdyn_result: DevKit.Controls.Boolean;
			/** Start Time */
			msdyn_starttime: DevKit.Controls.DateTime;
			/** Total Time (seconds) */
			msdyn_totaltime: DevKit.Controls.Integer;
		}
		interface Tabs {
		}
		interface Body {
			/** Error Code */
			msdyn_errorcode: DevKit.Controls.String;
			/** Exception Message */
			msdyn_exceptionmessage: DevKit.Controls.String;
			/** Managed */
			msdyn_ismanaged: DevKit.Controls.Boolean;
			/** Overwrite Customizations */
			msdyn_isoverwritecustomizations: DevKit.Controls.Boolean;
			/** Patch */
			msdyn_ispatch: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Operation */
			msdyn_operation: DevKit.Controls.OptionSet;
			/** Publisher Name */
			msdyn_publishername: DevKit.Controls.String;
			/** Solution Version */
			msdyn_solutionversion: DevKit.Controls.String;
			/** Suboperation */
			msdyn_suboperation: DevKit.Controls.OptionSet;
		}
	}
	export class Formmsdyn_solutionhistory_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form msdyn_solutionhistory_Information */
		Body: DevKit.Formmsdyn_solutionhistory_Information.Body;
		/** The Header section of form msdyn_solutionhistory_Information */
		Header: DevKit.Formmsdyn_solutionhistory_Information.Header;
	}
	export class msdyn_solutionhistoryApi {
		/**
		* DynamicsCrm.DevKit msdyn_solutionhistoryApi
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
		msdyn_activityid: string | null;
		msdyn_correlationid: string | null;
		msdyn_endtime_UtcDateAndTime: Date | null;
		msdyn_errorcode: string | null;
		msdyn_exceptionmessage: string | null;
		msdyn_exceptionstack: string | null;
		msdyn_ismanaged: boolean | null;
		msdyn_isoverwritecustomizations: boolean | null;
		msdyn_ispatch: boolean | null;
		/** Maximum number of retries. */
		msdyn_maxretries: number | null;
		/** The name of the custom entity. */
		msdyn_name: string | null;
		msdyn_operation: OptionSet.msdyn_solutionhistory.msdyn_operation | null;
		msdyn_packagename: string | null;
		msdyn_packageversion: string | null;
		msdyn_publisherid: string | null;
		msdyn_publishername: string | null;
		msdyn_result: boolean | null;
		/** Retry count */
		msdyn_retrycount: number | null;
		/** Comments associated with solution installation */
		msdyn_solutionhistorydescription: string | null;
		/** Unique identifier for entity instances */
		msdyn_solutionhistoryId: string | null;
		msdyn_solutionid: string | null;
		msdyn_solutionversion: string | null;
		msdyn_starttime_UtcDateAndTime: Date | null;
		msdyn_status: OptionSet.msdyn_solutionhistory.msdyn_status | null;
		msdyn_suboperation: OptionSet.msdyn_solutionhistory.msdyn_suboperation | null;
		msdyn_totaltime: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			readonly msdyn_activityid: string;
			readonly msdyn_correlationid: string;
			readonly msdyn_endtime_UtcDateAndTime: string;
			readonly msdyn_errorcode: string;
			readonly msdyn_exceptionmessage: string;
			readonly msdyn_exceptionstack: string;
			readonly msdyn_ismanaged: string;
			readonly msdyn_isoverwritecustomizations: string;
			readonly msdyn_ispatch: string;
			/** Maximum number of retries. */
			readonly msdyn_maxretries: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_operation: string;
			readonly msdyn_packagename: string;
			readonly msdyn_packageversion: string;
			readonly msdyn_publisherid: string;
			readonly msdyn_publishername: string;
			readonly msdyn_result: string;
			/** Retry count */
			readonly msdyn_retrycount: string;
			/** Comments associated with solution installation */
			readonly msdyn_solutionhistorydescription: string;
			/** Unique identifier for entity instances */
			readonly msdyn_solutionhistoryId: string;
			readonly msdyn_solutionid: string;
			readonly msdyn_solutionversion: string;
			readonly msdyn_starttime_UtcDateAndTime: string;
			readonly msdyn_status: string;
			readonly msdyn_suboperation: string;
			readonly msdyn_totaltime: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_solutionhistory {
		enum msdyn_operation {
			/** Export = 2*/
			Export = 2,
			/** ExportLite = 10*/
			ExportLite = 10,
			/** Import = 0*/
			Import = 0,
			/** ImportTranslation = 6*/
			ImportTranslation = 6,
			/** LanguageProvision = 5*/
			LanguageProvision = 5,
			/** None = 9*/
			None = 9,
			/** Publish = 3*/
			Publish = 3,
			/** PublishAll = 4*/
			PublishAll = 4,
			/** RibbonMetadataGeneration = 7*/
			RibbonMetadataGeneration = 7,
			/** Uninstall = 1*/
			Uninstall = 1,
			/** UpdatingMissingPackages = 11*/
			UpdatingMissingPackages = 11,
			/** WorkflowSetState = 8*/
			WorkflowSetState = 8
		}
		enum msdyn_status {
			/** Completed = 1*/
			Completed = 1,
			/** Queued = 2*/
			Queued = 2,
			/** Started = 0*/
			Started = 0
		}
		enum msdyn_suboperation {
			/** Delete = 4*/
			Delete = 4,
			/** FailedInstallingMissingPackages = 8*/
			FailedInstallingMissingPackages = 8,
			/** InlineUpgrade = 5*/
			InlineUpgrade = 5,
			/** InstalledMissingPackages = 7*/
			InstalledMissingPackages = 7,
			/** New = 1*/
			New = 1,
			/** None = 0*/
			None = 0,
			/** Update = 3*/
			Update = 3,
			/** Upgrade = 2*/
			Upgrade = 2,
			/** WaitingForMissingPackages = 6*/
			WaitingForMissingPackages = 6
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