﻿//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormGoalRollupQuery_Information {
		interface tab_rule_Sections {
			criteria: DevKit.Controls.Section;
			Rule_Conditions: DevKit.Controls.Section;
			section_1: DevKit.Controls.Section;
		}
		interface tab_rule extends DevKit.Controls.ITab {
			Section: tab_rule_Sections;
		}
		interface Tabs {
			rule: tab_rule;
		}
		interface Body {
			Tab: Tabs;
			/** Type a descriptive name for the goal rollup query. */
			Name: DevKit.Controls.String;
			/** Type a descriptive name for the goal rollup query. */
			Name1: DevKit.Controls.String;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			queryeditor_uc: DevKit.Controls.ActionCards;
			/** Enter the record type of the rollup query. */
			QueryEntityType: DevKit.Controls.String;
			queryentitytype_uc: DevKit.Controls.ActionCards;
			ruleconditioncontrol: DevKit.Controls.IFrame;
		}
		interface Navigation {
			goal_rollupquery_actualdecimal: DevKit.Controls.NavigationItem,
			goal_rollupquery_actualmoney: DevKit.Controls.NavigationItem,
			goal_rollupquery_customdecimal: DevKit.Controls.NavigationItem,
			goal_rollupquery_customint: DevKit.Controls.NavigationItem,
			goal_rollupquery_custommoney: DevKit.Controls.NavigationItem,
			goal_rollupquery_inprogressdecimal: DevKit.Controls.NavigationItem,
			goal_rollupquery_inprogressint: DevKit.Controls.NavigationItem,
			goal_rollupquery_inprogressmoney: DevKit.Controls.NavigationItem,
			goalrollupquery_actualint: DevKit.Controls.NavigationItem,
			msdyn_goalrollupquery_msdyn_forecastdefinition_rollupquery: DevKit.Controls.NavigationItem
		}
	}
	class FormGoalRollupQuery_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form GoalRollupQuery_Information */
		Body: DevKit.FormGoalRollupQuery_Information.Body;
		/** The Navigation of form GoalRollupQuery_Information */
		Navigation: DevKit.FormGoalRollupQuery_Information.Navigation;
		/** The SidePanes of form GoalRollupQuery_Information */
		SidePanes: DevKit.SidePanes;
	}
	class GoalRollupQueryApi {
		/**
		* DynamicsCrm.DevKit GoalRollupQueryApi
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
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** String that specifies the condition criteria in FetchXML. */
		FetchXml: string;
		/** Unique identifier of the rollup query. */
		GoalRollupQueryId: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Type a descriptive name for the goal rollup query. */
		Name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the record. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the record. */
		readonly OwningTeam: string;
		/** Shows whether the goal rollup query is active or inactive. */
		StateCode: OptionSet.GoalRollupQuery.StateCode;
		/** Select the goal rollup query's status. */
		StatusCode: OptionSet.GoalRollupQuery.StatusCode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the goal rollup query. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** String that specifies the condition criteria in FetchXML. */
			readonly FetchXml: string;
			/** Unique identifier of the rollup query. */
			readonly GoalRollupQueryId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Type a descriptive name for the goal rollup query. */
			readonly Name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the record. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the record. */
			readonly OwningTeam: string;
			/** Shows whether the goal rollup query is active or inactive. */
			readonly StateCode: string;
			/** Select the goal rollup query's status. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the goal rollup query. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace GoalRollupQuery {
		enum QueryEntityType {
		}
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
			/** 1 */
			Closed,
			/** 0 */
			Open
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}