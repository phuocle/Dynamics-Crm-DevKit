//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormGoal_Information {
		interface tab__242FCD83_2A50_478E_922A_F4641920DDE0_Sections {
			/** Participating Records */
			_8ECDE6CB_085B_46D1_97A9_E357C5799076: DevKit.Controls.Section;
		}
		interface tab__349A439D_6ED5_BAE8_7C7D_3721869367CA_Sections {
			/** Time Period */
			_3A5C2DC2_2EE7_848C_83EB_A2B1E4D1C703: DevKit.Controls.Section;
		}
		interface tab_general_Sections {
			/** Information */
			information: DevKit.Controls.Section;
		}
		interface tab_notes_Sections {
			/** Notes */
			notes: DevKit.Controls.Section;
		}
		/** Participating Records */
		interface tab__242FCD83_2A50_478E_922A_F4641920DDE0 extends DevKit.Controls.ITab {
			Section: tab__242FCD83_2A50_478E_922A_F4641920DDE0_Sections;
		}
		/** Time Period */
		interface tab__349A439D_6ED5_BAE8_7C7D_3721869367CA extends DevKit.Controls.ITab {
			Section: tab__349A439D_6ED5_BAE8_7C7D_3721869367CA_Sections;
		}
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		/** Notes */
		interface tab_notes extends DevKit.Controls.ITab {
			Section: tab_notes_Sections;
		}
		interface Tabs {
			/** Participating Records */
			_242FCD83_2A50_478E_922A_F4641920DDE0: tab__242FCD83_2A50_478E_922A_F4641920DDE0;
			/** Time Period */
			_349A439D_6ED5_BAE8_7C7D_3721869367CA: tab__349A439D_6ED5_BAE8_7C7D_3721869367CA;
			/** General */
			general: tab_general;
			/** Notes */
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
			GoalEndDate: DevKit.Controls.DateOnly;
			/** Choose the user or team responsible for meeting the goal. */
			GoalOwnerId: DevKit.Controls.Lookup;
			/** Enter the date and time when the period for tracking the goal begins. */
			GoalStartDate: DevKit.Controls.DateOnly;
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
		interface Grid {
			/** Goals */
			child_goals: DevKit.Controls.Grid;
		}
	}
	export class FormGoal_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Goal_Information */
		Body: DevKit.FormGoal_Information.Body;
		/** The Grid of form Goal_Information */
		Grid: DevKit.FormGoal_Information.Grid;
	}
	export class GoalApi {
		/**
		* DynamicsCrm.DevKit GoalApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** Shows the actual value (Decimal type) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount and the amount data type is Decimal. */
		ActualDecimal: number | null;
		/** Shows the actual value (integer) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount or Count and the amount data type is Integer. */
		ActualInteger: number | null;
		/** Shows the actual value (Money type) achieved towards the target as of the last rolled-up date. This field appears when the metric type of the goal is Amount and the amount data type is Money. */
		ActualMoney: number | null;
		/** Shows the actual value (money type) in base currency to track goal results against the target. */
		readonly ActualMoney_Base: number | null;
		/** Actual Value of the goal. */
		readonly ActualString: string | null;
		/** Data type of the amount. */
		AmountDataType: OptionSet.Goal.AmountDataType | null;
		/** Shows the expected amount for actual value (decimal type) against the target goal. */
		readonly ComputedTargetAsOfTodayDecimal: number | null;
		/** Shows the expected amount for actual value (integer type) against the target goal as of the current date. */
		readonly ComputedTargetAsOfTodayInteger: number | null;
		/** Shows the expected amount for actual value (money type) against the target goal as of the current date. */
		readonly ComputedTargetAsOfTodayMoney: number | null;
		/** Shows the expected amount in base currency for actual value (money type) against the target goal as of the current date. */
		readonly ComputedTargetAsOfTodayMoney_Base: number | null;
		/** Shows the expected value for percentage achieved against the target goal as of the current date. */
		readonly ComputedTargetAsOfTodayPercentageAchieved: number | null;
		/** Select whether only the goal owner's records, or all records, should be rolled up for goal results. */
		ConsiderOnlyGoalOwnersRecords: boolean | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Indicates a placeholder rollup field for a decimal value to track a third category of results other than actuals and in-progress results. */
		CustomRollupFieldDecimal: number | null;
		/** Indicates a placeholder rollup field for an integer value to track a third category of results other than actuals and in-progress results. */
		CustomRollupFieldInteger: number | null;
		/** Indicates a placeholder rollup field for a money value to track a third category of results other than actuals and in-progress results. */
		CustomRollupFieldMoney: number | null;
		/** Indicates a placeholder rollup field for a money value in base currency to track a third category of results other than actuals and in-progress results. */
		readonly CustomRollupFieldMoney_Base: number | null;
		/** Placeholder rollup field for the goal. */
		readonly CustomRollupFieldString: string | null;
		/** Depth of the goal in the tree. */
		readonly Depth: number | null;
		/** The default image for the entity. */
		EntityImage: string | null;
		EntityImage_Timestamp: number | null;
		EntityImage_URL: string | null;
		/** For internal use only. */
		readonly EntityImageId: string | null;
		/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
		readonly ExchangeRate: number | null;
		/** Select the fiscal period for the goal. */
		FiscalPeriod: OptionSet.Goal.FiscalPeriod | null;
		/** Select the fiscal year for the goal that's being tracked. */
		FiscalYear: OptionSet.Goal.FiscalYear | null;
		/** Enter the date when the goal ends. */
		GoalEndDate_UtcDateOnly: Date | null;
		/** Unique identifier of the goal. */
		GoalId: string | null;
		/** Enter the date and time when the period for tracking the goal begins. */
		GoalStartDate_UtcDateOnly: Date | null;
		/** Unique identifier of the goal that caused an error in the rollup of the goal hierarchy. */
		GoalWithErrorId: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** Shows the in-progress value (decimal) against the target. This value could contribute to a goal, but is not counted yet as actual. */
		InProgressDecimal: number | null;
		/** Shows the in-progress value (integer) against the target. This value could contribute to a goal, but is not counted yet as actual. */
		InProgressInteger: number | null;
		/** Shows the in-progress value (money) against the target. This value could contribute to a goal, but is not counted yet as actual. */
		InProgressMoney: number | null;
		/** Shows the in-progress value (money) in base currency to track goal results against the target. */
		readonly InProgressMoney_Base: number | null;
		/** In-progress value of the goal. */
		readonly InProgressString: string | null;
		/** Indicates whether the metric type is Count or Amount. */
		IsAmount: boolean | null;
		/** Select whether the goal period is a fiscal period or custom period. */
		IsFiscalPeriodGoal: boolean | null;
		/** Select whether the system rollup fields are updated. If set to Yes, the next system rollup will not update the values of the rollup fields with the system calculated values. */
		IsOverridden: boolean | null;
		/** Indicates whether the values of system rollup fields can be updated. */
		IsOverride: boolean | null;
		/** Shows the date and time when the goal was last rolled up. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		LastRolledupDate_UtcDateAndTime: Date | null;
		/** Choose the metric for the goal. This metric determines how the goal is tracked. */
		MetricId: string | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the goal. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user who owns the record. */
		readonly OwningUser: string | null;
		/** Choose a parent goal if the current goal is a child goal. This sets up a parent-child relationship for reporting and analytics. */
		ParentGoalId: string | null;
		/** Shows the percentage achieved against the target goal. */
		Percentage: number | null;
		/** Error code associated with rollup. */
		RollupErrorCode: number | null;
		/** Select whether the data should be rolled up only from the child goals. */
		RollupOnlyFromChildGoals: boolean | null;
		/** Choose the query that will be used to calculate the actual data for the goal (decimal). */
		RollUpQueryActualDecimalId: string | null;
		/** Choose the query that will be used to calculate the actual data for the goal (integer). */
		RollupQueryActualIntegerId: string | null;
		/** Choose the query that will be used to calculate the actual data for the goal (money). */
		RollUpQueryActualMoneyId: string | null;
		/** Choose the query that will be used to calculate data for the custom rollup field (decimal). */
		RollUpQueryCustomDecimalId: string | null;
		/** Choose the query that will be used to calculate data for the custom rollup field (integer). */
		RollUpQueryCustomIntegerId: string | null;
		/** Choose the query that will be used to calculate data for the custom rollup field (money). */
		RollUpQueryCustomMoneyId: string | null;
		/** Choose the query that will be used to calculate data for the in-progress rollup field (decimal). */
		RollUpQueryInprogressDecimalId: string | null;
		/** Choose the query that will be used to calculate data for the in-progress rollup field (integer). */
		RollUpQueryInprogressIntegerId: string | null;
		/** Choose the query that will be used to calculate data for the in-progress rollup field (money). */
		RollUpQueryInprogressMoneyId: string | null;
		/** Shows whether the goal is open, completed, or canceled. Completed and canceled goals are read-only and can't be edited. */
		StateCode: OptionSet.Goal.StateCode | null;
		/** Select the goal's status. */
		StatusCode: OptionSet.Goal.StatusCode | null;
		/** Select a stretch target (decimal) of the goal to define a higher or difficult level of goal than the usual ones. */
		StretchTargetDecimal: number | null;
		/** Select the stretch target (integer) of the goal to define a higher or difficult level of goal than the usual ones. */
		StretchTargetInteger: number | null;
		/** Select stretch target (money) of the goal to define a higher or difficult level of goal than the usual ones. */
		StretchTargetMoney: number | null;
		/** Shows the stretch target (money) in base currency to indicate a higher or difficult level of goal than the usual ones. */
		readonly StretchTargetMoney_Base: number | null;
		/** Stretch target value for all data types. */
		readonly StretchTargetString: string | null;
		/** Select a goal target of the decimal type to use for tracking data that include partial numbers, such as pounds sold of a product sold by weight. */
		TargetDecimal: number | null;
		/** Select a goal target of the integer type to use for tracking anything countable in whole numbers, such as units sold. */
		TargetInteger: number | null;
		/** Select a goal target (money) to track a monetary amount such as revenue from a product. */
		TargetMoney: number | null;
		/** Shows the goal target of the money type in base currency. */
		readonly TargetMoney_Base: number | null;
		/** Target value of the goal. */
		readonly TargetString: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Type a title or name that describes the goal. */
		Title: string | null;
		/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
		readonly TransactionCurrencyId: string | null;
		/** Unique identifier of the goal tree. */
		readonly TreeId: string | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version number of the goal. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Decimal = 1*/
			Decimal = 1,
			/** Integer = 2*/
			Integer = 2,
			/** Money = 0*/
			Money = 0
		}
		enum FiscalPeriod {
			/** Annual = 301*/
			Annual = 301,
			/** April = 104*/
			April = 104,
			/** August = 108*/
			August = 108,
			/** December = 112*/
			December = 112,
			/** February = 102*/
			February = 102,
			/** January = 101*/
			January = 101,
			/** July = 107*/
			July = 107,
			/** June = 106*/
			June = 106,
			/** March = 103*/
			March = 103,
			/** May = 105*/
			May = 105,
			/** November = 111*/
			November = 111,
			/** October = 110*/
			October = 110,
			/** P1 = 401*/
			P1 = 401,
			/** P10 = 410*/
			P10 = 410,
			/** P11 = 411*/
			P11 = 411,
			/** P12 = 412*/
			P12 = 412,
			/** P13 = 413*/
			P13 = 413,
			/** P2 = 402*/
			P2 = 402,
			/** P3 = 403*/
			P3 = 403,
			/** P4 = 404*/
			P4 = 404,
			/** P5 = 405*/
			P5 = 405,
			/** P6 = 406*/
			P6 = 406,
			/** P7 = 407*/
			P7 = 407,
			/** P8 = 408*/
			P8 = 408,
			/** P9 = 409*/
			P9 = 409,
			/** Quarter_1 = 1*/
			Quarter_1 = 1,
			/** Quarter_2 = 2*/
			Quarter_2 = 2,
			/** Quarter_3 = 3*/
			Quarter_3 = 3,
			/** Quarter_4 = 4*/
			Quarter_4 = 4,
			/** Semester_1 = 201*/
			Semester_1 = 201,
			/** Semester_2 = 202*/
			Semester_2 = 202,
			/** September = 109*/
			September = 109
		}
		enum FiscalYear {
			/** FY1970 = 1970*/
			FY1970 = 1970,
			/** FY1971 = 1971*/
			FY1971 = 1971,
			/** FY1972 = 1972*/
			FY1972 = 1972,
			/** FY1973 = 1973*/
			FY1973 = 1973,
			/** FY1974 = 1974*/
			FY1974 = 1974,
			/** FY1975 = 1975*/
			FY1975 = 1975,
			/** FY1976 = 1976*/
			FY1976 = 1976,
			/** FY1977 = 1977*/
			FY1977 = 1977,
			/** FY1978 = 1978*/
			FY1978 = 1978,
			/** FY1979 = 1979*/
			FY1979 = 1979,
			/** FY1980 = 1980*/
			FY1980 = 1980,
			/** FY1981 = 1981*/
			FY1981 = 1981,
			/** FY1982 = 1982*/
			FY1982 = 1982,
			/** FY1983 = 1983*/
			FY1983 = 1983,
			/** FY1984 = 1984*/
			FY1984 = 1984,
			/** FY1985 = 1985*/
			FY1985 = 1985,
			/** FY1986 = 1986*/
			FY1986 = 1986,
			/** FY1987 = 1987*/
			FY1987 = 1987,
			/** FY1988 = 1988*/
			FY1988 = 1988,
			/** FY1989 = 1989*/
			FY1989 = 1989,
			/** FY1990 = 1990*/
			FY1990 = 1990,
			/** FY1991 = 1991*/
			FY1991 = 1991,
			/** FY1992 = 1992*/
			FY1992 = 1992,
			/** FY1993 = 1993*/
			FY1993 = 1993,
			/** FY1994 = 1994*/
			FY1994 = 1994,
			/** FY1995 = 1995*/
			FY1995 = 1995,
			/** FY1996 = 1996*/
			FY1996 = 1996,
			/** FY1997 = 1997*/
			FY1997 = 1997,
			/** FY1998 = 1998*/
			FY1998 = 1998,
			/** FY1999 = 1999*/
			FY1999 = 1999,
			/** FY2000 = 2000*/
			FY2000 = 2000,
			/** FY2001 = 2001*/
			FY2001 = 2001,
			/** FY2002 = 2002*/
			FY2002 = 2002,
			/** FY2003 = 2003*/
			FY2003 = 2003,
			/** FY2004 = 2004*/
			FY2004 = 2004,
			/** FY2005 = 2005*/
			FY2005 = 2005,
			/** FY2006 = 2006*/
			FY2006 = 2006,
			/** FY2007 = 2007*/
			FY2007 = 2007,
			/** FY2008 = 2008*/
			FY2008 = 2008,
			/** FY2009 = 2009*/
			FY2009 = 2009,
			/** FY2010 = 2010*/
			FY2010 = 2010,
			/** FY2011 = 2011*/
			FY2011 = 2011,
			/** FY2012 = 2012*/
			FY2012 = 2012,
			/** FY2013 = 2013*/
			FY2013 = 2013,
			/** FY2014 = 2014*/
			FY2014 = 2014,
			/** FY2015 = 2015*/
			FY2015 = 2015,
			/** FY2016 = 2016*/
			FY2016 = 2016,
			/** FY2017 = 2017*/
			FY2017 = 2017,
			/** FY2018 = 2018*/
			FY2018 = 2018,
			/** FY2019 = 2019*/
			FY2019 = 2019,
			/** FY2020 = 2020*/
			FY2020 = 2020,
			/** FY2021 = 2021*/
			FY2021 = 2021,
			/** FY2022 = 2022*/
			FY2022 = 2022,
			/** FY2023 = 2023*/
			FY2023 = 2023,
			/** FY2024 = 2024*/
			FY2024 = 2024,
			/** FY2025 = 2025*/
			FY2025 = 2025,
			/** FY2026 = 2026*/
			FY2026 = 2026,
			/** FY2027 = 2027*/
			FY2027 = 2027,
			/** FY2028 = 2028*/
			FY2028 = 2028,
			/** FY2029 = 2029*/
			FY2029 = 2029,
			/** FY2030 = 2030*/
			FY2030 = 2030,
			/** FY2031 = 2031*/
			FY2031 = 2031,
			/** FY2032 = 2032*/
			FY2032 = 2032,
			/** FY2033 = 2033*/
			FY2033 = 2033,
			/** FY2034 = 2034*/
			FY2034 = 2034,
			/** FY2035 = 2035*/
			FY2035 = 2035,
			/** FY2036 = 2036*/
			FY2036 = 2036,
			/** FY2037 = 2037*/
			FY2037 = 2037,
			/** FY2038 = 2038*/
			FY2038 = 2038
		}
		enum GoalOwnerIdType {
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum StatusCode {
			/** Closed = 1*/
			Closed = 1,
			/** Discarded = 2*/
			Discarded = 2,
			/** Open = 0*/
			Open = 0
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}