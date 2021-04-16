//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formdevkit_processwebapi1_Information {
		interface tab_StageStep3_Sections {
			StageStep3_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep9_Sections {
			StageStep9_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep17_Sections {
			StageStep17_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep23_Sections {
			StageStep23_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep36_Sections {
			StageStep36_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep3 extends DevKit.Controls.ITab {
			Section: tab_StageStep3_Sections;
		}
		interface tab_StageStep9 extends DevKit.Controls.ITab {
			Section: tab_StageStep9_Sections;
		}
		interface tab_StageStep17 extends DevKit.Controls.ITab {
			Section: tab_StageStep17_Sections;
		}
		interface tab_StageStep23 extends DevKit.Controls.ITab {
			Section: tab_StageStep23_Sections;
		}
		interface tab_StageStep36 extends DevKit.Controls.ITab {
			Section: tab_StageStep36_Sections;
		}
		interface Tabs {
			StageStep3: tab_StageStep3;
			StageStep9: tab_StageStep9;
			StageStep17: tab_StageStep17;
			StageStep23: tab_StageStep23;
			StageStep36: tab_StageStep36;
		}
		interface Body {
			Tab: Tabs;

		}
	}
	class Formdevkit_processwebapi1_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form devkit_processwebapi1_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form devkit_processwebapi1_Information */
		Body: MyDog.Formdevkit_processwebapi1_Information.Body;
	}
	class devkit_processwebapi1Api {
		/**
		* DynamicsCrm.DevKit devkit_processwebapi1Api
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
		/** Unique identifier of the active stage for the Business Process Flow instance. */
		ActiveStageId: DevKit.WebApi.LookupValue;
		/** Date and time when current active stage is started */
		ActiveStageStartedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		bpf_devkit_webapiid: DevKit.WebApi.LookupValue;
		/** Duration of Business Process Flow */
		bpf_Duration: DevKit.WebApi.IntegerValueReadonly;
		/** Description */
		bpf_name: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		BusinessProcessFlowInstanceId: DevKit.WebApi.GuidValue;
		/** Date and time when Business Process Flow instance is completed. */
		CompletedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
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
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Unique identifier of the workflow associated to the Business Process Flow instance. */
		ProcessId: DevKit.WebApi.LookupValue;
		/** Status of the Process WebApi 1 */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Process WebApi 1 */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: DevKit.WebApi.IntegerValue;
		/** Comma delimited string of process stage ids that represent visited stages of the Business Process Flow instance. */
		TraversedPath: DevKit.WebApi.StringValue;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: DevKit.WebApi.IntegerValue;
		/** Version Number */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace devkit_processwebapi1 {
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 3 */
			Aborted,
			/** 1 */
			Active,
			/** 2 */
			Finished
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