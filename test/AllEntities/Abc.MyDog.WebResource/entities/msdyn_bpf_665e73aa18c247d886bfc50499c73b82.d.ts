//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace Formmsdyn_bpf_665e73aa18c247d886bfc50499c73b82_Information {
		interface tab_StageStep2_Sections {
			StageStep2_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep16_Sections {
			StageStep16_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep19_Sections {
			StageStep19_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep29_Sections {
			StageStep29_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep32_Sections {
			StageStep32_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep35_Sections {
			StageStep35_section1: DevKit.Controls.Section;
		}
		interface tab_StageStep2 extends DevKit.Controls.ITab {
			Section: tab_StageStep2_Sections;
		}
		interface tab_StageStep16 extends DevKit.Controls.ITab {
			Section: tab_StageStep16_Sections;
		}
		interface tab_StageStep19 extends DevKit.Controls.ITab {
			Section: tab_StageStep19_Sections;
		}
		interface tab_StageStep29 extends DevKit.Controls.ITab {
			Section: tab_StageStep29_Sections;
		}
		interface tab_StageStep32 extends DevKit.Controls.ITab {
			Section: tab_StageStep32_Sections;
		}
		interface tab_StageStep35 extends DevKit.Controls.ITab {
			Section: tab_StageStep35_Sections;
		}
		interface Tabs {
			StageStep2: tab_StageStep2;
			StageStep16: tab_StageStep16;
			StageStep19: tab_StageStep19;
			StageStep29: tab_StageStep29;
			StageStep32: tab_StageStep32;
			StageStep35: tab_StageStep35;
		}
		interface Body {
			Tab: Tabs;

		}
	}
	class Formmsdyn_bpf_665e73aa18c247d886bfc50499c73b82_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_bpf_665e73aa18c247d886bfc50499c73b82_Information */
		Body: MyDog.Formmsdyn_bpf_665e73aa18c247d886bfc50499c73b82_Information.Body;
	}
	class msdyn_bpf_665e73aa18c247d886bfc50499c73b82Api {
		/**
		* DynamicsCrm.DevKit msdyn_bpf_665e73aa18c247d886bfc50499c73b82Api
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
		/** Duration of Business Process Flow */
		bpf_Duration: DevKit.WebApi.IntegerValueReadonly;
		bpf_msdyn_projectid: DevKit.WebApi.LookupValue;
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
		/** Status of the Project Stages */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Project Stages */
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
	namespace msdyn_bpf_665e73aa18c247d886bfc50499c73b82 {
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