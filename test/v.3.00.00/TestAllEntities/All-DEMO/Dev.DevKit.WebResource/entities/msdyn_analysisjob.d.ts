//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_analysisjob_Information {
		interface Header extends DevKit.Controls.IHeader {
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface tab__F1A26849_5CBD_4343_BE37_A5447D0EA5A6_Sections {
			_BFA242F2_7FBF_468A_85CA_6D52BD4193D1: DevKit.Controls.Section;
			_F1A26849_5CBD_4343_BE37_A5447D0EA5A6_SECTION_2: DevKit.Controls.Section;
			_F1A26849_5CBD_4343_BE37_A5447D0EA5A6_SECTION_3: DevKit.Controls.Section;
		}
		interface tab_summary_tab_Sections {
			_E6707165_9B00_4ABC_9DF3_D04E06FEC0F2_SECTION_4: DevKit.Controls.Section;
			tab_3_section_overview: DevKit.Controls.Section;
		}
		interface tab_tab_2_Sections {
			tab_2_section_1: DevKit.Controls.Section;
		}
		interface tab__F1A26849_5CBD_4343_BE37_A5447D0EA5A6 extends DevKit.Controls.ITab {
			Section: tab__F1A26849_5CBD_4343_BE37_A5447D0EA5A6_Sections;
		}
		interface tab_summary_tab extends DevKit.Controls.ITab {
			Section: tab_summary_tab_Sections;
		}
		interface tab_tab_2 extends DevKit.Controls.ITab {
			Section: tab_tab_2_Sections;
		}
		interface Tabs {
			_F1A26849_5CBD_4343_BE37_A5447D0EA5A6: tab__F1A26849_5CBD_4343_BE37_A5447D0EA5A6;
			summary_tab: tab_summary_tab;
			tab_2: tab_tab_2;
		}
		interface Body {
			Tab: Tabs;
			msdyn_EndTime: DevKit.Controls.DateTime;
			msdyn_ErrorCount: DevKit.Controls.Integer;
			msdyn_ErrorCount1: DevKit.Controls.Integer;
			msdyn_Exception: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_RuleFailCount: DevKit.Controls.Integer;
			msdyn_RuleFailCount1: DevKit.Controls.Integer;
			msdyn_RulePassCount: DevKit.Controls.Integer;
			msdyn_RulePassCount1: DevKit.Controls.Integer;
			msdyn_RuleRunCount: DevKit.Controls.Integer;
			msdyn_RuleRunCount1: DevKit.Controls.Integer;
			msdyn_StartTime: DevKit.Controls.DateTime;
			msdyn_SuggestionCount: DevKit.Controls.Integer;
			msdyn_SuggestionCount1: DevKit.Controls.Integer;
			msdyn_WarningCount: DevKit.Controls.Integer;
			msdyn_WarningCount1: DevKit.Controls.Integer;
			/** Status of the Analysis Job */
			statecode: DevKit.Controls.OptionSet;
			/** Reason for the status of the Analysis Job */
			statuscode: DevKit.Controls.OptionSet;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
		interface Grid {
			AssociatedAnalysisResults: DevKit.Controls.Grid;
		}
	}
	class Formmsdyn_analysisjob_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form msdyn_analysisjob_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_analysisjob_Information */
		Body: DevKit.Formmsdyn_analysisjob_Information.Body;
		/** The Header section of form msdyn_analysisjob_Information */
		Header: DevKit.Formmsdyn_analysisjob_Information.Header;
		/** The Process of form msdyn_analysisjob_Information */
		Process: DevKit.Formmsdyn_analysisjob_Information.Process;
		/** The Grid of form msdyn_analysisjob_Information */
		Grid: DevKit.Formmsdyn_analysisjob_Information.Grid;
		/** The SidePanes of form msdyn_analysisjob_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_analysisjobApi {
		/**
		* DynamicsCrm.DevKit msdyn_analysisjobApi
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
		msdyn_analysisjobId: DevKit.WebApi.GuidValue;
		msdyn_CustomDetails: DevKit.WebApi.StringValue;
		msdyn_DisplayStatus: DevKit.WebApi.StringValue;
		msdyn_EndTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_ErrorCount: DevKit.WebApi.IntegerValue;
		msdyn_Exception: DevKit.WebApi.StringValue;
		/** Health rule set Failure In App Notification Enabled. */
		msdyn_InAppNotificationEnabled: DevKit.WebApi.BooleanValue;
		/** The name of the custom entity. */
		msdyn_name: DevKit.WebApi.StringValue;
		msdyn_RuleFailCount: DevKit.WebApi.IntegerValue;
		msdyn_RulePassCount: DevKit.WebApi.IntegerValue;
		msdyn_RuleRunCount: DevKit.WebApi.IntegerValue;
		msdyn_RunCorrelationId: DevKit.WebApi.StringValue;
		msdyn_sevcriticalcount: DevKit.WebApi.IntegerValue;
		msdyn_sevhighcount: DevKit.WebApi.IntegerValue;
		msdyn_sevlowcount: DevKit.WebApi.IntegerValue;
		msdyn_sevmediumcount: DevKit.WebApi.IntegerValue;
		msdyn_StartTime_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValue;
		msdyn_SuggestionCount: DevKit.WebApi.IntegerValue;
		msdyn_TenantId: DevKit.WebApi.StringValue;
		/** Health rule set Trigger Type. */
		msdyn_TriggerType: DevKit.WebApi.StringValue;
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
		/** Status of the Analysis Job */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Reason for the status of the Analysis Job */
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
	namespace msdyn_analysisjob {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}