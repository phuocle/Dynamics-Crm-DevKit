﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_kmpersonalizationsetting_Information {
		interface tab__ADE28570_C803_4349_927A_9A1B2269450E_Sections {
		}
		interface tab_knowledge_authoring_language_settings_Sections {
			tab_3_section_1: DevKit.Controls.Section;
		}
		interface tab_knowledge_filter_settings_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab__ADE28570_C803_4349_927A_9A1B2269450E extends DevKit.Controls.ITab {
			Section: tab__ADE28570_C803_4349_927A_9A1B2269450E_Sections;
		}
		interface tab_knowledge_authoring_language_settings extends DevKit.Controls.ITab {
			Section: tab_knowledge_authoring_language_settings_Sections;
		}
		interface tab_knowledge_filter_settings extends DevKit.Controls.ITab {
			Section: tab_knowledge_filter_settings_Sections;
		}
		interface Tabs {
			_ADE28570_C803_4349_927A_9A1B2269450E: tab__ADE28570_C803_4349_927A_9A1B2269450E;
			knowledge_authoring_language_settings: tab_knowledge_authoring_language_settings;
			knowledge_filter_settings: tab_knowledge_filter_settings;
		}
		interface Body {
			Tab: Tabs;
			msdyn_filtercontroldata: DevKit.Controls.String;
			msdyn_languagecontrol: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
		}
	}
	class Formmsdyn_kmpersonalizationsetting_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_kmpersonalizationsetting_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_kmpersonalizationsetting_Information */
		Body: DevKit.Formmsdyn_kmpersonalizationsetting_Information.Body;
	}
	class msdyn_kmpersonalizationsettingApi {
		/**
		* DynamicsCrm.DevKit msdyn_kmpersonalizationsettingApi
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
		msdyn_filtercontroldata: DevKit.WebApi.StringValue;
		/** Unique identifier for entity instances */
		msdyn_kmpersonalizationsettingId: DevKit.WebApi.GuidValue;
		msdyn_languagecontrol: DevKit.WebApi.StringValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		/** Unique identifier for the organization */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** Status of the Knowledge personalization */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Knowledge personalization */
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
	namespace msdyn_kmpersonalizationsetting {
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}