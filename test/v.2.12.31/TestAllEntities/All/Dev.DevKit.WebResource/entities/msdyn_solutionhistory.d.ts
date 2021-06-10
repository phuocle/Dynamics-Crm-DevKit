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
	}
	class Formmsdyn_solutionhistory_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_solutionhistory_Information
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		msdyn_activityid: DevKit.WebApi.StringValue;
		msdyn_correlationid: DevKit.WebApi.StringValue;
		msdyn_endtime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_errorcode: DevKit.WebApi.StringValue;
		msdyn_exceptionmessage: DevKit.WebApi.StringValue;
		msdyn_exceptionstack: DevKit.WebApi.StringValue;
		msdyn_ismanaged: DevKit.WebApi.BooleanValue;
		msdyn_isoverwritecustomizations: DevKit.WebApi.BooleanValue;
		msdyn_ispatch: DevKit.WebApi.BooleanValue;
		/** Maximum number of retries. */
		msdyn_maxretries: DevKit.WebApi.IntegerValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		msdyn_operation: DevKit.WebApi.OptionSetValue;
		msdyn_packagename: DevKit.WebApi.StringValue;
		msdyn_packageversion: DevKit.WebApi.StringValue;
		msdyn_publisherid: DevKit.WebApi.StringValue;
		msdyn_publishername: DevKit.WebApi.StringValue;
		msdyn_result: DevKit.WebApi.BooleanValue;
		/** Retry count */
		msdyn_retrycount: DevKit.WebApi.IntegerValue;
		/** Unique identifier for entity instances */
		msdyn_solutionhistoryId: DevKit.WebApi.GuidValue;
		msdyn_solutionid: DevKit.WebApi.StringValue;
		msdyn_solutionversion: DevKit.WebApi.StringValue;
		msdyn_starttime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_status: DevKit.WebApi.OptionSetValue;
		msdyn_suboperation: DevKit.WebApi.OptionSetValue;
		msdyn_totaltime: DevKit.WebApi.IntegerValue;
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}