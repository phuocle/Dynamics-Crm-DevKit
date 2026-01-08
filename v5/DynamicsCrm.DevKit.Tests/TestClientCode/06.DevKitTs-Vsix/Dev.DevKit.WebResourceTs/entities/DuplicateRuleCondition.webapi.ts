/**
 * DuplicateRuleCondition.webapi.ts - DuplicateRuleCondition WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * DuplicateRuleCondition WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IDuplicateRuleConditionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IDuplicateRuleConditionApi, 'FormattedValue'>]: string };
	/** Field that is being compared. */
	BaseAttributeName: string | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the condition. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the condition was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the duplicate rule condition. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the condition. */
	DuplicateRuleConditionId: DevKit.Guid | null;
	/** Determines whether to consider blank values as non-duplicate values */
	IgnoreBlankValues: boolean | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Field that is being compared with the base field. */
	MatchingAttributeName: string | null;
	/** Unique identifier of the user who last modified the condition. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the condition was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the duplicate rule condition. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Operator for this rule condition. */
	OperatorCode: number | null;
	/** Parameter value of N if the operator is Same First Characters or Same Last Characters. */
	OperatorParam: number | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the user or team who owns the duplicate rule condition. */
	readonly OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the condition. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the user who owns the condition. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the object with which the condition is associated. */
	RegardingObjectId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** UniqueRuleName */
	UniqueRuleName: string | null;
}

const DuplicateRuleConditionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	BaseAttributeName: { logicalName: 'baseattributename' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DuplicateRuleConditionId: { logicalName: 'duplicateruleconditionid' },
	IgnoreBlankValues: { logicalName: 'ignoreblankvalues', type: 'Boolean' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	MatchingAttributeName: { logicalName: 'matchingattributename' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OperatorCode: { logicalName: 'operatorcode', type: 'Integer' },
	OperatorParam: { logicalName: 'operatorparam', type: 'Integer' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { logicalName: 'owningbusinessunit', readOnly: true },
	OwningUser: { logicalName: 'owninguser', readOnly: true },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'duplicaterules', entityLogicalName: 'duplicaterule' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	UniqueRuleName: { logicalName: 'uniquerulename' },
};

/**
 * DuplicateRuleCondition WebApi class for early-bound style coding
 * Usage: const duplicateRuleCondition = new DuplicateRuleConditionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class DuplicateRuleConditionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IDuplicateRuleConditionApi>(entity, 'duplicaterulecondition', 'duplicateruleconditions', DuplicateRuleConditionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface DuplicateRuleConditionApi extends IDuplicateRuleConditionApi { }
