/**
 * Goal.webapi.ts - Goal WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for Goal
 * All fields return string representation of their values
 */
export interface IGoalFormattedValue {
	readonly ActualDecimal: string;
	readonly ActualInteger: string;
	readonly ActualMoney: string;
	readonly ActualMoney_Base: string;
	readonly ActualString: string;
	readonly AmountDataType: string;
	readonly ComputedTargetAsOfTodayDecimal: string;
	readonly ComputedTargetAsOfTodayInteger: string;
	readonly ComputedTargetAsOfTodayMoney: string;
	readonly ComputedTargetAsOfTodayMoney_Base: string;
	readonly ComputedTargetAsOfTodayPercentageAchieved: string;
	readonly ConsiderOnlyGoalOwnersRecords: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CustomRollupFieldDecimal: string;
	readonly CustomRollupFieldInteger: string;
	readonly CustomRollupFieldMoney: string;
	readonly CustomRollupFieldMoney_Base: string;
	readonly CustomRollupFieldString: string;
	readonly Depth: string;
	readonly EntityImage: string;
	readonly EntityImageId: string;
	readonly ExchangeRate: string;
	readonly FiscalPeriod: string;
	readonly FiscalYear: string;
	readonly GoalEndDate_UtcDateOnly: string;
	readonly GoalId: string;
	readonly GoalOwnerId: string;
	readonly GoalStartDate_UtcDateOnly: string;
	readonly GoalWithErrorId: string;
	readonly ImportSequenceNumber: string;
	readonly InProgressDecimal: string;
	readonly InProgressInteger: string;
	readonly InProgressMoney: string;
	readonly InProgressMoney_Base: string;
	readonly InProgressString: string;
	readonly IsAmount: string;
	readonly IsFiscalPeriodGoal: string;
	readonly IsOverridden: string;
	readonly IsOverride: string;
	readonly LastRolledupDate_UtcDateAndTime: string;
	readonly MetricId: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly ParentGoalId: string;
	readonly Percentage: string;
	readonly RollupErrorCode: string;
	readonly RollupOnlyFromChildGoals: string;
	readonly RollUpQueryActualDecimalId: string;
	readonly RollupQueryActualIntegerId: string;
	readonly RollUpQueryActualMoneyId: string;
	readonly RollUpQueryCustomDecimalId: string;
	readonly RollUpQueryCustomIntegerId: string;
	readonly RollUpQueryCustomMoneyId: string;
	readonly RollUpQueryInprogressDecimalId: string;
	readonly RollUpQueryInprogressIntegerId: string;
	readonly RollUpQueryInprogressMoneyId: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly StretchTargetDecimal: string;
	readonly StretchTargetInteger: string;
	readonly StretchTargetMoney: string;
	readonly StretchTargetMoney_Base: string;
	readonly StretchTargetString: string;
	readonly TargetDecimal: string;
	readonly TargetInteger: string;
	readonly TargetMoney: string;
	readonly TargetMoney_Base: string;
	readonly TargetString: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly Title: string;
	readonly TransactionCurrencyId: string;
	readonly TreeId: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * Goal WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IGoalApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IGoalFormattedValue;
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
	AmountDataType: number | null;
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
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
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
	/** For internal use only. */
	readonly EntityImageId: DevKit.Guid | null;
	/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
	readonly ExchangeRate: number | null;
	/** Select the fiscal period for the goal. */
	FiscalPeriod: number | null;
	/** Select the fiscal year for the goal that's being tracked. */
	FiscalYear: number | null;
	/** Enter the date when the goal ends. */
	GoalEndDate_UtcDateOnly: Date | null;
	/** Unique identifier of the goal. */
	GoalId: DevKit.Guid | null;
	/** Choose the user or team responsible for meeting the goal. */
	GoalOwnerId: DevKit.Guid | null;
	/** Enter the date and time when the period for tracking the goal begins. */
	GoalStartDate_UtcDateOnly: Date | null;
	/** Unique identifier of the goal that caused an error in the rollup of the goal hierarchy. */
	GoalWithErrorId: DevKit.Guid | null;
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
	MetricId: DevKit.Guid | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the goal. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user who owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Choose a parent goal if the current goal is a child goal. This sets up a parent-child relationship for reporting and analytics. */
	ParentGoalId: DevKit.Guid | null;
	/** Shows the percentage achieved against the target goal. */
	Percentage: number | null;
	/** Error code associated with rollup. */
	RollupErrorCode: number | null;
	/** Select whether the data should be rolled up only from the child goals. */
	RollupOnlyFromChildGoals: boolean | null;
	/** Choose the query that will be used to calculate the actual data for the goal (decimal). */
	RollUpQueryActualDecimalId: DevKit.Guid | null;
	/** Choose the query that will be used to calculate the actual data for the goal (integer). */
	RollupQueryActualIntegerId: DevKit.Guid | null;
	/** Choose the query that will be used to calculate the actual data for the goal (money). */
	RollUpQueryActualMoneyId: DevKit.Guid | null;
	/** Choose the query that will be used to calculate data for the custom rollup field (decimal). */
	RollUpQueryCustomDecimalId: DevKit.Guid | null;
	/** Choose the query that will be used to calculate data for the custom rollup field (integer). */
	RollUpQueryCustomIntegerId: DevKit.Guid | null;
	/** Choose the query that will be used to calculate data for the custom rollup field (money). */
	RollUpQueryCustomMoneyId: DevKit.Guid | null;
	/** Choose the query that will be used to calculate data for the in-progress rollup field (decimal). */
	RollUpQueryInprogressDecimalId: DevKit.Guid | null;
	/** Choose the query that will be used to calculate data for the in-progress rollup field (integer). */
	RollUpQueryInprogressIntegerId: DevKit.Guid | null;
	/** Choose the query that will be used to calculate data for the in-progress rollup field (money). */
	RollUpQueryInprogressMoneyId: DevKit.Guid | null;
	/** Shows whether the goal is open, completed, or canceled. Completed and canceled goals are read-only and can't be edited. */
	StateCode: number | null;
	/** Select the goal's status. */
	StatusCode: number | null;
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
	readonly TransactionCurrencyId: DevKit.Guid | null;
	/** Unique identifier of the goal tree. */
	readonly TreeId: DevKit.Guid | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of the goal. */
	readonly VersionNumber: number | null;
}

const GoalFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ActualDecimal: { logicalName: 'actualdecimal', type: 'Number' },
	ActualInteger: { logicalName: 'actualinteger', type: 'Integer' },
	ActualMoney: { logicalName: 'actualmoney', type: 'Number' },
	ActualMoney_Base: { logicalName: 'actualmoney_base', readOnly: true, type: 'Number' },
	ActualString: { logicalName: 'actualstring', readOnly: true },
	AmountDataType: { logicalName: 'amountdatatype', type: 'Integer' },
	ComputedTargetAsOfTodayDecimal: { logicalName: 'computedtargetasoftodaydecimal', readOnly: true, type: 'Number' },
	ComputedTargetAsOfTodayInteger: { logicalName: 'computedtargetasoftodayinteger', readOnly: true, type: 'Integer' },
	ComputedTargetAsOfTodayMoney: { logicalName: 'computedtargetasoftodaymoney', readOnly: true, type: 'Number' },
	ComputedTargetAsOfTodayMoney_Base: { logicalName: 'computedtargetasoftodaymoney_base', readOnly: true, type: 'Number' },
	ComputedTargetAsOfTodayPercentageAchieved: { logicalName: 'computedtargetasoftodaypercentageachieved', readOnly: true, type: 'Number' },
	ConsiderOnlyGoalOwnersRecords: { logicalName: 'consideronlygoalownersrecords', type: 'Boolean' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomRollupFieldDecimal: { logicalName: 'customrollupfielddecimal', type: 'Number' },
	CustomRollupFieldInteger: { logicalName: 'customrollupfieldinteger', type: 'Integer' },
	CustomRollupFieldMoney: { logicalName: 'customrollupfieldmoney', type: 'Number' },
	CustomRollupFieldMoney_Base: { logicalName: 'customrollupfieldmoney_base', readOnly: true, type: 'Number' },
	CustomRollupFieldString: { logicalName: 'customrollupfieldstring', readOnly: true },
	Depth: { logicalName: 'depth', readOnly: true, type: 'Integer' },
	EntityImage: { logicalName: 'entityimage' },
	EntityImageId: { logicalName: 'entityimageid', readOnly: true },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	FiscalPeriod: { logicalName: 'fiscalperiod', type: 'Integer' },
	FiscalYear: { logicalName: 'fiscalyear', type: 'Integer' },
	GoalEndDate_UtcDateOnly: { logicalName: 'goalenddate', type: 'DateTime' },
	GoalId: { logicalName: 'goalid' },
	GoalOwnerId: { schemaName: 'GoalOwnerId', logicalName: '_goalownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	GoalStartDate_UtcDateOnly: { logicalName: 'goalstartdate', type: 'DateTime' },
	GoalWithErrorId: { schemaName: 'GoalWithErrorId', logicalName: '_goalwitherrorid_value', entityCollectionName: 'goals', entityLogicalName: 'goal' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	InProgressDecimal: { logicalName: 'inprogressdecimal', type: 'Number' },
	InProgressInteger: { logicalName: 'inprogressinteger', type: 'Integer' },
	InProgressMoney: { logicalName: 'inprogressmoney', type: 'Number' },
	InProgressMoney_Base: { logicalName: 'inprogressmoney_base', readOnly: true, type: 'Number' },
	InProgressString: { logicalName: 'inprogressstring', readOnly: true },
	IsAmount: { logicalName: 'isamount', type: 'Boolean' },
	IsFiscalPeriodGoal: { logicalName: 'isfiscalperiodgoal', type: 'Boolean' },
	IsOverridden: { logicalName: 'isoverridden', type: 'Boolean' },
	IsOverride: { logicalName: 'isoverride', type: 'Boolean' },
	LastRolledupDate_UtcDateAndTime: { logicalName: 'lastrolledupdate', type: 'DateTime' },
	MetricId: { schemaName: 'MetricId', logicalName: '_metricid_value', entityCollectionName: 'metrics', entityLogicalName: 'metric' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ParentGoalId: { schemaName: 'ParentGoalId', logicalName: '_parentgoalid_value', entityCollectionName: 'goals', entityLogicalName: 'goal' },
	Percentage: { logicalName: 'percentage', type: 'Number' },
	RollupErrorCode: { logicalName: 'rolluperrorcode', type: 'Integer' },
	RollupOnlyFromChildGoals: { logicalName: 'rolluponlyfromchildgoals', type: 'Boolean' },
	RollUpQueryActualDecimalId: { schemaName: 'RollUpQueryActualDecimalId', logicalName: '_rollupqueryactualdecimalid_value', entityCollectionName: 'goalrollupqueries', entityLogicalName: 'goalrollupquery' },
	RollupQueryActualIntegerId: { schemaName: 'RollupQueryActualIntegerId', logicalName: '_rollupqueryactualintegerid_value', entityCollectionName: 'goalrollupqueries', entityLogicalName: 'goalrollupquery' },
	RollUpQueryActualMoneyId: { schemaName: 'RollUpQueryActualMoneyId', logicalName: '_rollupqueryactualmoneyid_value', entityCollectionName: 'goalrollupqueries', entityLogicalName: 'goalrollupquery' },
	RollUpQueryCustomDecimalId: { schemaName: 'RollUpQueryCustomDecimalId', logicalName: '_rollupquerycustomdecimalid_value', entityCollectionName: 'goalrollupqueries', entityLogicalName: 'goalrollupquery' },
	RollUpQueryCustomIntegerId: { schemaName: 'RollUpQueryCustomIntegerId', logicalName: '_rollupquerycustomintegerid_value', entityCollectionName: 'goalrollupqueries', entityLogicalName: 'goalrollupquery' },
	RollUpQueryCustomMoneyId: { schemaName: 'RollUpQueryCustomMoneyId', logicalName: '_rollupquerycustommoneyid_value', entityCollectionName: 'goalrollupqueries', entityLogicalName: 'goalrollupquery' },
	RollUpQueryInprogressDecimalId: { schemaName: 'RollUpQueryInprogressDecimalId', logicalName: '_rollupqueryinprogressdecimalid_value', entityCollectionName: 'goalrollupqueries', entityLogicalName: 'goalrollupquery' },
	RollUpQueryInprogressIntegerId: { schemaName: 'RollUpQueryInprogressIntegerId', logicalName: '_rollupqueryinprogressintegerid_value', entityCollectionName: 'goalrollupqueries', entityLogicalName: 'goalrollupquery' },
	RollUpQueryInprogressMoneyId: { schemaName: 'RollUpQueryInprogressMoneyId', logicalName: '_rollupqueryinprogressmoneyid_value', entityCollectionName: 'goalrollupqueries', entityLogicalName: 'goalrollupquery' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	StretchTargetDecimal: { logicalName: 'stretchtargetdecimal', type: 'Number' },
	StretchTargetInteger: { logicalName: 'stretchtargetinteger', type: 'Integer' },
	StretchTargetMoney: { logicalName: 'stretchtargetmoney', type: 'Number' },
	StretchTargetMoney_Base: { logicalName: 'stretchtargetmoney_base', readOnly: true, type: 'Number' },
	StretchTargetString: { logicalName: 'stretchtargetstring', readOnly: true },
	TargetDecimal: { logicalName: 'targetdecimal', type: 'Number' },
	TargetInteger: { logicalName: 'targetinteger', type: 'Integer' },
	TargetMoney: { logicalName: 'targetmoney', type: 'Number' },
	TargetMoney_Base: { logicalName: 'targetmoney_base', readOnly: true, type: 'Number' },
	TargetString: { logicalName: 'targetstring', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	Title: { logicalName: 'title' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', readOnly: true, entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	TreeId: { logicalName: 'treeid', readOnly: true },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Goal WebApi class for early-bound style coding
 * Usage: const goal = new GoalApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class GoalApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IGoalApi>(entity, 'goal', 'goals', GoalFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface GoalApi extends IGoalApi { }
