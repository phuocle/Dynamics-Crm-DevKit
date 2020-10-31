//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyMokey {
	namespace Formmsdyn_upgraderun_Information {
		interface tab__4A6546DD_DFC2_4A18_88D6_04661583D80E_Sections {
		}
		interface tab__4A6546DD_DFC2_4A18_88D6_04661583D80E extends DevKit.Form.Controls.IControlTab {
			Section: tab__4A6546DD_DFC2_4A18_88D6_04661583D80E_Sections;
		}
		interface Tabs {
			_4A6546DD_DFC2_4A18_88D6_04661583D80E: tab__4A6546DD_DFC2_4A18_88D6_04661583D80E;
		}
		interface Body {
			Tab: Tabs;
			UpgradeVersions: DevKit.Form.Controls.ControlGrid;
			/** Date and time when the record was created. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Errors during upgrade or installation, if any */
			msdyn_Error: DevKit.Form.Controls.ControlString;
			/** Date/time when an upgrade run finished */
			msdyn_FinishedDate: DevKit.Form.Controls.ControlDateTime;
			/** Name of the Package Deployer package */
			msdyn_Package: DevKit.Form.Controls.ControlString;
			/** Name of the Solution that is upgraded */
			msdyn_Solution: DevKit.Form.Controls.ControlString;
			/** Version that was installed before upgrade run */
			msdyn_StartingVersion: DevKit.Form.Controls.ControlString;
			/** Status/outcome of an upgrade run */
			msdyn_Status: DevKit.Form.Controls.ControlOptionSet;
			/** Version that will be achieved by the upgrade run */
			msdyn_TargetVersion: DevKit.Form.Controls.ControlString;
		}
	}
	class Formmsdyn_upgraderun_Information extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_upgraderun_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form msdyn_upgraderun_Information */
		Body: LuckyMokey.Formmsdyn_upgraderun_Information.Body;
	}
	class msdyn_upgraderunApi {
		/**
		* DynamicsCrm.DevKit msdyn_upgraderunApi
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
		/** Errors during upgrade or installation, if any */
		msdyn_Error: DevKit.WebApi.StringValue;
		/** Date/time when an upgrade run finished */
		msdyn_FinishedDate_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		/** Name of the Package Deployer package */
		msdyn_Package: DevKit.WebApi.StringValue;
		/** Name of the Solution that is upgraded */
		msdyn_Solution: DevKit.WebApi.StringValue;
		/** Version that was installed before upgrade run */
		msdyn_StartingVersion: DevKit.WebApi.StringValue;
		/** Status/outcome of an upgrade run */
		msdyn_Status: DevKit.WebApi.OptionSetValue;
		/** Summary of an upgrade operation performed by Package Deployer */
		msdyn_Summary: DevKit.WebApi.StringValue;
		/** Version that will be achieved by the upgrade run */
		msdyn_TargetVersion: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_upgraderunId: DevKit.WebApi.GuidValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the UpgradeRun */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the UpgradeRun */
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
	namespace msdyn_upgraderun {
		enum msdyn_Status {
			/** 100000000 */
			Started,
			/** 100000001 */
			Success,
			/** 100000002 */
			Failure
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}