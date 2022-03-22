//@ts-check
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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_analysiscomponent_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_analysiscomponent_Information */
		Body: DevKit.Formmsdyn_analysiscomponent_Information.Body;
		/** The Process of form msdyn_analysiscomponent_Information */
		Process: DevKit.Formmsdyn_analysiscomponent_Information.Process;
		/** The SidePanes of form msdyn_analysiscomponent_Information */
		SidePanes: DevKit.SidePanes;
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for entity instances */
		msdyn_analysiscomponentId: string;
		msdyn_AnalysisComponentType: OptionSet.msdyn_analysiscomponent.msdyn_AnalysisComponentType;
		/** The parent Analysis Job that analyzed this particular Analysis Component. */
		msdyn_AnalysisJobId: string;
		msdyn_ComponentId: string;
		msdyn_ComponentName: string;
		msdyn_ComponentType: OptionSet.msdyn_analysiscomponent.msdyn_ComponentType;
		msdyn_ComponentVersion: string;
		msdyn_ErrorCount: number;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_RetryCount: number;
		msdyn_RuleFailCount: number;
		msdyn_RulePassCount: number;
		msdyn_RulePassRate: number;
		msdyn_sevcriticalcount: number;
		msdyn_sevhighcount: number;
		msdyn_sevlowcount: number;
		msdyn_sevmediumcount: number;
		/** The Solution Health Rule Set for which this is analysis component is for. */
		msdyn_SolutionHealthRuleSetId: string;
		msdyn_SuggestionCount: number;
		msdyn_WarningCount: number;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the Analysis Component */
		statecode: OptionSet.msdyn_analysiscomponent.statecode;
		/** Reason for the status of the Analysis Component */
		statuscode: OptionSet.msdyn_analysiscomponent.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}