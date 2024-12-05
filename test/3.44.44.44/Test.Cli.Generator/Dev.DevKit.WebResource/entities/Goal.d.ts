//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormGoal_Information {
		interface tab__242FCD83_2A50_478E_922A_F4641920DDE0_Sections {
			_8ECDE6CB_085B_46D1_97A9_E357C5799076: DevKit.Controls.Section;
		}
		interface tab__349A439D_6ED5_BAE8_7C7D_3721869367CA_Sections {
			_3A5C2DC2_2EE7_848C_83EB_A2B1E4D1C703: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			information: DevKit.Controls.Section;
		}
		interface tab_notes_Sections {
			notes: DevKit.Controls.Section;
		}
		interface tab__242FCD83_2A50_478E_922A_F4641920DDE0 extends DevKit.Controls.ITab {
			Section: tab__242FCD83_2A50_478E_922A_F4641920DDE0_Sections;
		}
		interface tab__349A439D_6ED5_BAE8_7C7D_3721869367CA extends DevKit.Controls.ITab {
			Section: tab__349A439D_6ED5_BAE8_7C7D_3721869367CA_Sections;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			_242FCD83_2A50_478E_922A_F4641920DDE0: tab__242FCD83_2A50_478E_922A_F4641920DDE0;
			_349A439D_6ED5_BAE8_7C7D_3721869367CA: tab__349A439D_6ED5_BAE8_7C7D_3721869367CA;
			general: tab_general;
			notes: tab_notes;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the actual value (Decimal type) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount and the amount data type is Decimal. */
			ActualDecimal: DevKit.Controls.Decimal;
			/** Shows the actual value (integer) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount or Count and the amount data type is Integer. */
			ActualInteger: DevKit.Controls.Integer;
			/** Shows the actual value (Money type) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount and the amount data type is Money. */
			ActualMoney: DevKit.Controls.Money;
			/** Select whether only the goal owner's records, or all records, should be rolled up for goal results. */
			ConsiderOnlyGoalOwnersRecords: DevKit.Controls.Boolean;
			/** Indicates a placeholder rollup field for a decimal value to track a third category of results other than actuals and in-progress results. */
			CustomRollupFieldDecimal: DevKit.Controls.Decimal;
			/** Indicates a placeholder rollup field for an integer value to track a third category of results other than actuals and in-progress results. */
			CustomRollupFieldInteger: DevKit.Controls.Integer;
			/** Indicates a placeholder rollup field for a money value to track a third category of results other than actuals and in-progress results. */
			CustomRollupFieldMoney: DevKit.Controls.Money;
			/** Select the fiscal period for the goal. */
			FiscalPeriod: DevKit.Controls.OptionSet;
			/** Select the fiscal year for the goal that's being tracked. */
			FiscalYear: DevKit.Controls.OptionSet;
			/** Enter the date when the goal ends. */
			GoalEndDate: DevKit.Controls.Date;
			/** Choose the user or team responsible for meeting the goal. */
			GoalOwnerId: DevKit.Controls.Lookup;
			/** Enter the date and time when the period for tracking the goal begins. */
			GoalStartDate: DevKit.Controls.Date;
			/** Shows the in-progress value (decimal) against the target. This value could contribute to a goal, but is not counted yet as actual. */
			InProgressDecimal: DevKit.Controls.Decimal;
			/** Shows the in-progress value (integer) against the target. This value could contribute to a goal, but is not counted yet as actual. */
			InProgressInteger: DevKit.Controls.Integer;
			/** Shows the in-progress value (money) against the target. This value could contribute to a goal, but is not counted yet as actual. */
			InProgressMoney: DevKit.Controls.Money;
			/** Select whether the goal period is a fiscal period or custom period. */
			IsFiscalPeriodGoal: DevKit.Controls.Boolean;
			/** Shows the date and time when the goal was last rolled up. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			LastRolledupDate: DevKit.Controls.DateTime;
			/** Choose the metric for the goal. This metric determines how the goal is tracked. */
			MetricId: DevKit.Controls.Lookup;
			notescontrol: DevKit.Controls.Note;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
			/** Choose a parent goal if the current goal is a child goal. This sets up a parent-child relationship for reporting and analytics. */
			ParentGoalId: DevKit.Controls.Lookup;
			participatingrecordcontrol: DevKit.Controls.ActionCards;
			/** Shows the percentage achieved against the target goal. */
			Percentage: DevKit.Controls.Decimal;
			/** Shows the percentage achieved against the target goal. */
			Percentage1: DevKit.Controls.Decimal;
			/** Shows the percentage achieved against the target goal. */
			Percentage2: DevKit.Controls.Decimal;
			/** Select whether the data should be rolled up only from the child goals. */
			RollupOnlyFromChildGoals: DevKit.Controls.Boolean;
			/** Choose the query that will be used to calculate the actual data for the goal (decimal). */
			RollUpQueryActualDecimalId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate the actual data for the goal (integer). */
			RollupQueryActualIntegerId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate the actual data for the goal (money). */
			RollUpQueryActualMoneyId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate data for the custom rollup field (decimal). */
			RollUpQueryCustomDecimalId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate data for the custom rollup field (integer). */
			RollUpQueryCustomIntegerId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate data for the custom rollup field (money). */
			RollUpQueryCustomMoneyId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate data for the in-progress rollup field (decimal). */
			RollUpQueryInprogressDecimalId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate data for the in-progress rollup field (integer). */
			RollUpQueryInprogressIntegerId: DevKit.Controls.Lookup;
			/** Choose the query that will be used to calculate data for the in-progress rollup field (money). */
			RollUpQueryInprogressMoneyId: DevKit.Controls.Lookup;
			/** Select a stretch target (decimal) of the goal to define a higher or difficult level of goal than the usual ones. */
			StretchTargetDecimal: DevKit.Controls.Decimal;
			/** Select the stretch target (integer) of the goal to define a higher or difficult level of goal than the usual ones. */
			StretchTargetInteger: DevKit.Controls.Integer;
			/** Select stretch target (money) of the goal to define a higher or difficult level of goal than the usual ones. */
			StretchTargetMoney: DevKit.Controls.Money;
			/** Select a goal target of the decimal type to use for tracking data that include partial numbers, such as pounds sold of a product sold by weight. */
			TargetDecimal: DevKit.Controls.Decimal;
			/** Select a goal target of the integer type to use for tracking anything countable in whole numbers, such as units sold. */
			TargetInteger: DevKit.Controls.Integer;
			/** Select a goal target (money) to track a monetary amount such as revenue from a product. */
			TargetMoney: DevKit.Controls.Money;
			/** Type a title or name that describes the goal. */
			Title: DevKit.Controls.String;
		}
		interface Navigation {
			goal_parent_goal: DevKit.Controls.NavigationItem,
			msdyn_goal_msdyn_forecastinstance: DevKit.Controls.NavigationItem
		}
		interface Grid {
			child_goals: DevKit.Controls.Grid;
		}
	}
	class FormGoal_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Goal_Information */
		Body: DevKit.FormGoal_Information.Body;
		/** The Navigation of form Goal_Information */
		Navigation: DevKit.FormGoal_Information.Navigation;
		/** The Grid of form Goal_Information */
		Grid: DevKit.FormGoal_Information.Grid;
		/** The SidePanes of form Goal_Information */
		SidePanes: DevKit.SidePanes;
	}
	class GoalApi {
		/**
		* DynamicsCrm.DevKit GoalApi
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
		/** Shows the actual value (Decimal type) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount and the amount data type is Decimal. */
		ActualDecimal: number;
		/** Shows the actual value (integer) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount or Count and the amount data type is Integer. */
		ActualInteger: number;
		/** Shows the actual value (Money type) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount and the amount data type is Money. */
		ActualMoney: number;
		/** Shows the actual value (money type) in base currency to track goal results against the target. */
		readonly ActualMoney_Base: number;
		/** Actual Value of the goal. */
		readonly ActualString: string;
		/** Data type of the amount. */
		AmountDataType: OptionSet.Goal.AmountDataType;
		/** Shows the expected amount for actual value (decimal type) against the target goal. */
		readonly ComputedTargetAsOfTodayDecimal: number;
		/** Shows the expected amount for actual value (integer type) against the target goal as of the current date. */
		readonly ComputedTargetAsOfTodayInteger: number;
		/** Shows the expected amount for actual value (money type) against the target goal as of the current date. */
		readonly ComputedTargetAsOfTodayMoney: number;
		/** Shows the expected amount in base currency for actual value (money type) against the target goal as of the current date. */
		readonly ComputedTargetAsOfTodayMoney_Base: number;
		/** Shows the expected value for percentage achieved against the target goal as of the current date. */
		readonly ComputedTargetAsOfTodayPercentageAchieved: number;
		/** Select whether only the goal owner's records, or all records, should be rolled up for goal results. */
		ConsiderOnlyGoalOwnersRecords: boolean;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Indicates a placeholder rollup field for a decimal value to track a third category of results other than actuals and in-progress results. */
		CustomRollupFieldDecimal: number;
		/** Indicates a placeholder rollup field for an integer value to track a third category of results other than actuals and in-progress results. */
		CustomRollupFieldInteger: number;
		/** Indicates a placeholder rollup field for a money value to track a third category of results other than actuals and in-progress results. */
		CustomRollupFieldMoney: number;
		/** Indicates a placeholder rollup field for a money value in base currency to track a third category of results other than actuals and in-progress results. */
		readonly CustomRollupFieldMoney_Base: number;
		/** Placeholder rollup field for the goal. */
		readonly CustomRollupFieldString: string;
		/** Depth of the goal in the tree. */
		readonly Depth: number;
		/** The default image for the entity. */
		EntityImage: string;
		EntityImage_Timestamp: number;
		EntityImage_URL: string;
		/** For internal use only. */
		readonly EntityImageId: string;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number;
		/** Select the fiscal period for the goal. */
		FiscalPeriod: OptionSet.Goal.FiscalPeriod;
		/** Select the fiscal year for the goal that's being tracked. */
		FiscalYear: OptionSet.Goal.FiscalYear;
		/** Enter the date when the goal ends. */
		GoalEndDate_UtcDateOnly: Date;
		/** Unique identifier of the goal. */
		GoalId: string;
		/** Choose the user or team responsible for meeting the goal. */
		goalownerid_systemuser: string;
		/** Choose the user or team responsible for meeting the goal. */
		goalownerid_team: string;
		/** Enter the date and time when the period for tracking the goal begins. */
		GoalStartDate_UtcDateOnly: Date;
		/** Unique identifier of the goal that caused an error in the rollup of the goal hierarchy. */
		GoalWithErrorId: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Shows the in-progress value (decimal) against the target. This value could contribute to a goal, but is not counted yet as actual. */
		InProgressDecimal: number;
		/** Shows the in-progress value (integer) against the target. This value could contribute to a goal, but is not counted yet as actual. */
		InProgressInteger: number;
		/** Shows the in-progress value (money) against the target. This value could contribute to a goal, but is not counted yet as actual. */
		InProgressMoney: number;
		/** Shows the in-progress value (money) in base currency to track goal results against the target. */
		readonly InProgressMoney_Base: number;
		/** In-progress value of the goal. */
		readonly InProgressString: string;
		/** Indicates whether the metric type is Count or Amount. */
		IsAmount: boolean;
		/** Select whether the goal period is a fiscal period or custom period. */
		IsFiscalPeriodGoal: boolean;
		/** Select whether the system rollup fields are updated. If set to Yes, the next system rollup will not update the values of the rollup fields with the system calculated values. */
		IsOverridden: boolean;
		/** Indicates whether the values of system rollup fields can be updated. */
		IsOverride: boolean;
		/** Shows the date and time when the goal was last rolled up. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		LastRolledupDate_UtcDateAndTime: Date;
		/** Choose the metric for the goal. This metric determines how the goal is tracked. */
		MetricId: string;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the goal. */
		readonly OwningTeam: string;
		/** Unique identifier for the user who owns the record. */
		readonly OwningUser: string;
		/** Choose a parent goal if the current goal is a child goal. This sets up a parent-child relationship for reporting and analytics. */
		ParentGoalId: string;
		/** Shows the percentage achieved against the target goal. */
		Percentage: number;
		/** Error code associated with rollup. */
		RollupErrorCode: number;
		/** Select whether the data should be rolled up only from the child goals. */
		RollupOnlyFromChildGoals: boolean;
		/** Choose the query that will be used to calculate the actual data for the goal (decimal). */
		RollUpQueryActualDecimalId: string;
		/** Choose the query that will be used to calculate the actual data for the goal (integer). */
		RollupQueryActualIntegerId: string;
		/** Choose the query that will be used to calculate the actual data for the goal (money). */
		RollUpQueryActualMoneyId: string;
		/** Choose the query that will be used to calculate data for the custom rollup field (decimal). */
		RollUpQueryCustomDecimalId: string;
		/** Choose the query that will be used to calculate data for the custom rollup field (integer). */
		RollUpQueryCustomIntegerId: string;
		/** Choose the query that will be used to calculate data for the custom rollup field (money). */
		RollUpQueryCustomMoneyId: string;
		/** Choose the query that will be used to calculate data for the in-progress rollup field (decimal). */
		RollUpQueryInprogressDecimalId: string;
		/** Choose the query that will be used to calculate data for the in-progress rollup field (integer). */
		RollUpQueryInprogressIntegerId: string;
		/** Choose the query that will be used to calculate data for the in-progress rollup field (money). */
		RollUpQueryInprogressMoneyId: string;
		/** Shows whether the goal is open, completed, or canceled. Completed and canceled goals are read-only and can't be edited. */
		StateCode: OptionSet.Goal.StateCode;
		/** Select the goal's status. */
		StatusCode: OptionSet.Goal.StatusCode;
		/** Select a stretch target (decimal) of the goal to define a higher or difficult level of goal than the usual ones. */
		StretchTargetDecimal: number;
		/** Select the stretch target (integer) of the goal to define a higher or difficult level of goal than the usual ones. */
		StretchTargetInteger: number;
		/** Select stretch target (money) of the goal to define a higher or difficult level of goal than the usual ones. */
		StretchTargetMoney: number;
		/** Shows the stretch target (money) in base currency to indicate a higher or difficult level of goal than the usual ones. */
		readonly StretchTargetMoney_Base: number;
		/** Stretch target value for all data types. */
		readonly StretchTargetString: string;
		/** Select a goal target of the decimal type to use for tracking data that include partial numbers, such as pounds sold of a product sold by weight. */
		TargetDecimal: number;
		/** Select a goal target of the integer type to use for tracking anything countable in whole numbers, such as units sold. */
		TargetInteger: number;
		/** Select a goal target (money) to track a monetary amount such as revenue from a product. */
		TargetMoney: number;
		/** Shows the goal target of the money type in base currency. */
		readonly TargetMoney_Base: number;
		/** Target value of the goal. */
		readonly TargetString: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Type a title or name that describes the goal. */
		Title: string;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		readonly TransactionCurrencyId: string;
		/** Unique identifier of the goal tree. */
		readonly TreeId: string;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version number of the goal. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Shows the actual value (Decimal type) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount and the amount data type is Decimal. */
			readonly ActualDecimal: string;
			/** Shows the actual value (integer) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount or Count and the amount data type is Integer. */
			readonly ActualInteger: string;
			/** Shows the actual value (Money type) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount and the amount data type is Money. */
			readonly ActualMoney: string;
			/** Shows the actual value (money type) in base currency to track goal results against the target. */
			readonly ActualMoney_Base: string;
			/** Actual Value of the goal. */
			readonly ActualString: string;
			/** Data type of the amount. */
			readonly AmountDataType: string;
			/** Shows the expected amount for actual value (decimal type) against the target goal. */
			readonly ComputedTargetAsOfTodayDecimal: string;
			/** Shows the expected amount for actual value (integer type) against the target goal as of the current date. */
			readonly ComputedTargetAsOfTodayInteger: string;
			/** Shows the expected amount for actual value (money type) against the target goal as of the current date. */
			readonly ComputedTargetAsOfTodayMoney: string;
			/** Shows the expected amount in base currency for actual value (money type) against the target goal as of the current date. */
			readonly ComputedTargetAsOfTodayMoney_Base: string;
			/** Shows the expected value for percentage achieved against the target goal as of the current date. */
			readonly ComputedTargetAsOfTodayPercentageAchieved: string;
			/** Select whether only the goal owner's records, or all records, should be rolled up for goal results. */
			readonly ConsiderOnlyGoalOwnersRecords: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Indicates a placeholder rollup field for a decimal value to track a third category of results other than actuals and in-progress results. */
			readonly CustomRollupFieldDecimal: string;
			/** Indicates a placeholder rollup field for an integer value to track a third category of results other than actuals and in-progress results. */
			readonly CustomRollupFieldInteger: string;
			/** Indicates a placeholder rollup field for a money value to track a third category of results other than actuals and in-progress results. */
			readonly CustomRollupFieldMoney: string;
			/** Indicates a placeholder rollup field for a money value in base currency to track a third category of results other than actuals and in-progress results. */
			readonly CustomRollupFieldMoney_Base: string;
			/** Placeholder rollup field for the goal. */
			readonly CustomRollupFieldString: string;
			/** Depth of the goal in the tree. */
			readonly Depth: string;
			/** The default image for the entity. */
			readonly EntityImage: string;
			readonly EntityImage_Timestamp: string;
			readonly EntityImage_URL: string;
			/** For internal use only. */
			readonly EntityImageId: string;
			/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
			readonly ExchangeRate: string;
			/** Select the fiscal period for the goal. */
			readonly FiscalPeriod: string;
			/** Select the fiscal year for the goal that's being tracked. */
			readonly FiscalYear: string;
			/** Enter the date when the goal ends. */
			readonly GoalEndDate_UtcDateOnly: string;
			/** Unique identifier of the goal. */
			readonly GoalId: string;
			/** Choose the user or team responsible for meeting the goal. */
			readonly goalownerid_systemuser: string;
			/** Choose the user or team responsible for meeting the goal. */
			readonly goalownerid_team: string;
			/** Enter the date and time when the period for tracking the goal begins. */
			readonly GoalStartDate_UtcDateOnly: string;
			/** Unique identifier of the goal that caused an error in the rollup of the goal hierarchy. */
			readonly GoalWithErrorId: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Shows the in-progress value (decimal) against the target. This value could contribute to a goal, but is not counted yet as actual. */
			readonly InProgressDecimal: string;
			/** Shows the in-progress value (integer) against the target. This value could contribute to a goal, but is not counted yet as actual. */
			readonly InProgressInteger: string;
			/** Shows the in-progress value (money) against the target. This value could contribute to a goal, but is not counted yet as actual. */
			readonly InProgressMoney: string;
			/** Shows the in-progress value (money) in base currency to track goal results against the target. */
			readonly InProgressMoney_Base: string;
			/** In-progress value of the goal. */
			readonly InProgressString: string;
			/** Indicates whether the metric type is Count or Amount. */
			readonly IsAmount: string;
			/** Select whether the goal period is a fiscal period or custom period. */
			readonly IsFiscalPeriodGoal: string;
			/** Select whether the system rollup fields are updated. If set to Yes, the next system rollup will not update the values of the rollup fields with the system calculated values. */
			readonly IsOverridden: string;
			/** Indicates whether the values of system rollup fields can be updated. */
			readonly IsOverride: string;
			/** Shows the date and time when the goal was last rolled up. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly LastRolledupDate_UtcDateAndTime: string;
			/** Choose the metric for the goal. This metric determines how the goal is tracked. */
			readonly MetricId: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the goal. */
			readonly OwningTeam: string;
			/** Unique identifier for the user who owns the record. */
			readonly OwningUser: string;
			/** Choose a parent goal if the current goal is a child goal. This sets up a parent-child relationship for reporting and analytics. */
			readonly ParentGoalId: string;
			/** Shows the percentage achieved against the target goal. */
			readonly Percentage: string;
			/** Error code associated with rollup. */
			readonly RollupErrorCode: string;
			/** Select whether the data should be rolled up only from the child goals. */
			readonly RollupOnlyFromChildGoals: string;
			/** Choose the query that will be used to calculate the actual data for the goal (decimal). */
			readonly RollUpQueryActualDecimalId: string;
			/** Choose the query that will be used to calculate the actual data for the goal (integer). */
			readonly RollupQueryActualIntegerId: string;
			/** Choose the query that will be used to calculate the actual data for the goal (money). */
			readonly RollUpQueryActualMoneyId: string;
			/** Choose the query that will be used to calculate data for the custom rollup field (decimal). */
			readonly RollUpQueryCustomDecimalId: string;
			/** Choose the query that will be used to calculate data for the custom rollup field (integer). */
			readonly RollUpQueryCustomIntegerId: string;
			/** Choose the query that will be used to calculate data for the custom rollup field (money). */
			readonly RollUpQueryCustomMoneyId: string;
			/** Choose the query that will be used to calculate data for the in-progress rollup field (decimal). */
			readonly RollUpQueryInprogressDecimalId: string;
			/** Choose the query that will be used to calculate data for the in-progress rollup field (integer). */
			readonly RollUpQueryInprogressIntegerId: string;
			/** Choose the query that will be used to calculate data for the in-progress rollup field (money). */
			readonly RollUpQueryInprogressMoneyId: string;
			/** Shows whether the goal is open, completed, or canceled. Completed and canceled goals are read-only and can't be edited. */
			readonly StateCode: string;
			/** Select the goal's status. */
			readonly StatusCode: string;
			/** Select a stretch target (decimal) of the goal to define a higher or difficult level of goal than the usual ones. */
			readonly StretchTargetDecimal: string;
			/** Select the stretch target (integer) of the goal to define a higher or difficult level of goal than the usual ones. */
			readonly StretchTargetInteger: string;
			/** Select stretch target (money) of the goal to define a higher or difficult level of goal than the usual ones. */
			readonly StretchTargetMoney: string;
			/** Shows the stretch target (money) in base currency to indicate a higher or difficult level of goal than the usual ones. */
			readonly StretchTargetMoney_Base: string;
			/** Stretch target value for all data types. */
			readonly StretchTargetString: string;
			/** Select a goal target of the decimal type to use for tracking data that include partial numbers, such as pounds sold of a product sold by weight. */
			readonly TargetDecimal: string;
			/** Select a goal target of the integer type to use for tracking anything countable in whole numbers, such as units sold. */
			readonly TargetInteger: string;
			/** Select a goal target (money) to track a monetary amount such as revenue from a product. */
			readonly TargetMoney: string;
			/** Shows the goal target of the money type in base currency. */
			readonly TargetMoney_Base: string;
			/** Target value of the goal. */
			readonly TargetString: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Type a title or name that describes the goal. */
			readonly Title: string;
			/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
			readonly TransactionCurrencyId: string;
			/** Unique identifier of the goal tree. */
			readonly TreeId: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version number of the goal. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace Goal {
		enum AmountDataType {
			/** 1 */
			Decimal,
			/** 2 */
			Integer,
			/** 0 */
			Money
		}
		enum FiscalPeriod {
			/** 301 */
			Annual,
			/** 104 */
			April,
			/** 108 */
			August,
			/** 112 */
			December,
			/** 102 */
			February,
			/** 101 */
			January,
			/** 107 */
			July,
			/** 106 */
			June,
			/** 103 */
			March,
			/** 105 */
			May,
			/** 111 */
			November,
			/** 110 */
			October,
			/** 401 */
			P1,
			/** 410 */
			P10,
			/** 411 */
			P11,
			/** 412 */
			P12,
			/** 413 */
			P13,
			/** 402 */
			P2,
			/** 403 */
			P3,
			/** 404 */
			P4,
			/** 405 */
			P5,
			/** 406 */
			P6,
			/** 407 */
			P7,
			/** 408 */
			P8,
			/** 409 */
			P9,
			/** 1 */
			Quarter_1,
			/** 2 */
			Quarter_2,
			/** 3 */
			Quarter_3,
			/** 4 */
			Quarter_4,
			/** 201 */
			Semester_1,
			/** 202 */
			Semester_2,
			/** 109 */
			September
		}
		enum FiscalYear {
			/** 1970 */
			FY1970,
			/** 1971 */
			FY1971,
			/** 1972 */
			FY1972,
			/** 1973 */
			FY1973,
			/** 1974 */
			FY1974,
			/** 1975 */
			FY1975,
			/** 1976 */
			FY1976,
			/** 1977 */
			FY1977,
			/** 1978 */
			FY1978,
			/** 1979 */
			FY1979,
			/** 1980 */
			FY1980,
			/** 1981 */
			FY1981,
			/** 1982 */
			FY1982,
			/** 1983 */
			FY1983,
			/** 1984 */
			FY1984,
			/** 1985 */
			FY1985,
			/** 1986 */
			FY1986,
			/** 1987 */
			FY1987,
			/** 1988 */
			FY1988,
			/** 1989 */
			FY1989,
			/** 1990 */
			FY1990,
			/** 1991 */
			FY1991,
			/** 1992 */
			FY1992,
			/** 1993 */
			FY1993,
			/** 1994 */
			FY1994,
			/** 1995 */
			FY1995,
			/** 1996 */
			FY1996,
			/** 1997 */
			FY1997,
			/** 1998 */
			FY1998,
			/** 1999 */
			FY1999,
			/** 2000 */
			FY2000,
			/** 2001 */
			FY2001,
			/** 2002 */
			FY2002,
			/** 2003 */
			FY2003,
			/** 2004 */
			FY2004,
			/** 2005 */
			FY2005,
			/** 2006 */
			FY2006,
			/** 2007 */
			FY2007,
			/** 2008 */
			FY2008,
			/** 2009 */
			FY2009,
			/** 2010 */
			FY2010,
			/** 2011 */
			FY2011,
			/** 2012 */
			FY2012,
			/** 2013 */
			FY2013,
			/** 2014 */
			FY2014,
			/** 2015 */
			FY2015,
			/** 2016 */
			FY2016,
			/** 2017 */
			FY2017,
			/** 2018 */
			FY2018,
			/** 2019 */
			FY2019,
			/** 2020 */
			FY2020,
			/** 2021 */
			FY2021,
			/** 2022 */
			FY2022,
			/** 2023 */
			FY2023,
			/** 2024 */
			FY2024,
			/** 2025 */
			FY2025,
			/** 2026 */
			FY2026,
			/** 2027 */
			FY2027,
			/** 2028 */
			FY2028,
			/** 2029 */
			FY2029,
			/** 2030 */
			FY2030,
			/** 2031 */
			FY2031,
			/** 2032 */
			FY2032,
			/** 2033 */
			FY2033,
			/** 2034 */
			FY2034,
			/** 2035 */
			FY2035,
			/** 2036 */
			FY2036,
			/** 2037 */
			FY2037,
			/** 2038 */
			FY2038
		}
		enum GoalOwnerIdType {
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
			/** 2 */
			Discarded,
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