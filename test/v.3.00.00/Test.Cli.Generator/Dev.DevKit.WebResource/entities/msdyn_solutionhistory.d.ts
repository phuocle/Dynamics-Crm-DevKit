//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_solutionhistory_Information {
		interface Header extends DevKit.Controls.IHeader {
			msdyn_endtime: DevKit.Controls.DateTime;
			msdyn_result: DevKit.Controls.Boolean;
			msdyn_starttime: DevKit.Controls.DateTime;
			msdyn_totaltime: DevKit.Controls.Integer;
		}
		interface Tabs {
		}
		interface Body {
			msdyn_errorcode: DevKit.Controls.String;
			msdyn_exceptionmessage: DevKit.Controls.String;
			msdyn_ismanaged: DevKit.Controls.Boolean;
			msdyn_isoverwritecustomizations: DevKit.Controls.Boolean;
			msdyn_ispatch: DevKit.Controls.Boolean;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_operation: DevKit.Controls.OptionSet;
			msdyn_publishername: DevKit.Controls.String;
			msdyn_solutionversion: DevKit.Controls.String;
			msdyn_suboperation: DevKit.Controls.OptionSet;
		}
		interface Footer extends DevKit.Controls.IFooter {
			msdyn_activityid: DevKit.Controls.String;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_solutionhistory_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_solutionhistory_Information */
		Body: DevKit.Formmsdyn_solutionhistory_Information.Body;
		/** The Footer section of form msdyn_solutionhistory_Information */
		Footer: DevKit.Formmsdyn_solutionhistory_Information.Footer;
		/** The Header section of form msdyn_solutionhistory_Information */
		Header: DevKit.Formmsdyn_solutionhistory_Information.Header;
		/** The Process of form msdyn_solutionhistory_Information */
		Process: DevKit.Formmsdyn_solutionhistory_Information.Process;
		/** The SidePanes of form msdyn_solutionhistory_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_solutionhistoryApi {
		/**
		* DynamicsCrm.DevKit msdyn_solutionhistoryApi
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
		msdyn_activityid: string;
		msdyn_correlationid: string;
		msdyn_endtime_UtcDateAndTime: Date;
		msdyn_errorcode: string;
		msdyn_exceptionmessage: string;
		msdyn_exceptionstack: string;
		msdyn_ismanaged: boolean;
		msdyn_isoverwritecustomizations: boolean;
		msdyn_ispatch: boolean;
		/** Maximum number of retries. */
		msdyn_maxretries: number;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_operation: OptionSet.msdyn_solutionhistory.msdyn_operation;
		msdyn_packagename: string;
		msdyn_packageversion: string;
		msdyn_publisherid: string;
		msdyn_publishername: string;
		msdyn_result: boolean;
		/** Retry count */
		msdyn_retrycount: number;
		/** Unique identifier for entity instances */
		msdyn_solutionhistoryId: string;
		msdyn_solutionid: string;
		msdyn_solutionversion: string;
		msdyn_starttime_UtcDateAndTime: Date;
		msdyn_status: OptionSet.msdyn_solutionhistory.msdyn_status;
		msdyn_suboperation: OptionSet.msdyn_solutionhistory.msdyn_suboperation;
		msdyn_totaltime: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_solutionhistory {
		enum msdyn_operation {
			/** 2 */
			Export,
			/** 0 */
			Import,
			/** 6 */
			ImportTranslation,
			/** 5 */
			LanguageProvision,
			/** 9 */
			None,
			/** 3 */
			Publish,
			/** 4 */
			PublishAll,
			/** 7 */
			RibbonMetadataGeneration,
			/** 1 */
			Uninstall,
			/** 8 */
			WorkflowSetState
		}
		enum msdyn_status {
			/** 1 */
			Completed,
			/** 0 */
			Started
		}
		enum msdyn_suboperation {
			/** 4 */
			Delete,
			/** 1 */
			New,
			/** 0 */
			None,
			/** 3 */
			Update,
			/** 2 */
			Upgrade
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