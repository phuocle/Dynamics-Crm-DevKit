﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_analysiscomponent_Information {
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
			tab_2_section_2: DevKit.Controls.Section;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			msdyn_AnalysisComponentType: DevKit.Controls.OptionSet;
			/** The parent Analysis Job that analyzed this particular Analysis Component. */
			msdyn_AnalysisJobId: DevKit.Controls.Lookup;
			msdyn_ComponentId: DevKit.Controls.String;
			msdyn_ComponentName: DevKit.Controls.String;
			msdyn_ComponentType: DevKit.Controls.OptionSet;
			msdyn_ErrorCount: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_RetryCount: DevKit.Controls.Integer;
			msdyn_RuleFailCount: DevKit.Controls.Integer;
			msdyn_RulePassCount: DevKit.Controls.Integer;
			msdyn_RulePassRate: DevKit.Controls.Integer;
			/** The Solution Health Rule Set for which this is analysis component is for. */
			msdyn_SolutionHealthRuleSetId: DevKit.Controls.Lookup;
			msdyn_WarningCount: DevKit.Controls.Integer;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
			/** Reason for the status of the Analysis Component */
			statuscode: DevKit.Controls.OptionSet;
		}
	}
	class Formmsdyn_analysiscomponent_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_analysiscomponent_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_analysiscomponent_Information */
		Body: DevKit.Formmsdyn_analysiscomponent_Information.Body;
	}
	class msdyn_analysiscomponentApi {
		/**
		* DynamicsCrm.DevKit msdyn_analysiscomponentApi
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
		/** Unique identifier for entity instances */
		msdyn_analysiscomponentId: DevKit.WebApi.GuidValue;
		msdyn_AnalysisComponentType: DevKit.WebApi.OptionSetValue;
		/** The parent Analysis Job that analyzed this particular Analysis Component. */
		msdyn_AnalysisJobId: DevKit.WebApi.LookupValue;
		msdyn_ComponentId: DevKit.WebApi.StringValue;
		msdyn_ComponentName: DevKit.WebApi.StringValue;
		msdyn_ComponentType: DevKit.WebApi.OptionSetValue;
		msdyn_ComponentVersion: DevKit.WebApi.StringValue;
		msdyn_ErrorCount: DevKit.WebApi.IntegerValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		msdyn_RetryCount: DevKit.WebApi.IntegerValue;
		msdyn_RuleFailCount: DevKit.WebApi.IntegerValue;
		msdyn_RulePassCount: DevKit.WebApi.IntegerValue;
		msdyn_RulePassRate: DevKit.WebApi.IntegerValue;
		msdyn_sevcriticalcount: DevKit.WebApi.IntegerValue;
		msdyn_sevhighcount: DevKit.WebApi.IntegerValue;
		msdyn_sevlowcount: DevKit.WebApi.IntegerValue;
		msdyn_sevmediumcount: DevKit.WebApi.IntegerValue;
		/** The Solution Health Rule Set for which this is analysis component is for. */
		msdyn_SolutionHealthRuleSetId: DevKit.WebApi.LookupValue;
		msdyn_SuggestionCount: DevKit.WebApi.IntegerValue;
		msdyn_WarningCount: DevKit.WebApi.IntegerValue;
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
		/** Status of the Analysis Component */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Analysis Component */
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
	namespace msdyn_analysiscomponent {
		enum msdyn_AnalysisComponentType {
			/** 192350001 */
			Component_Health,
			/** 192350002 */
			Object_Health,
			/** 192350000 */
			Organization_Health
		}
		enum msdyn_ComponentType {
			/** 192350005 */
			Configuration,
			/** 192350001 */
			Entity,
			/** 192350003 */
			Form,
			/** 192350004 */
			Plugin,
			/** 192350000 */
			Solution,
			/** 192350002 */
			View
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 2 */
			Canceled,
			/** 192350001 */
			Complete,
			/** 192350003 */
			Completed_With_Exceptions,
			/** 192350002 */
			Exception,
			/** 1 */
			Pending,
			/** 192350000 */
			Running
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