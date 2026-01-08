/**
 * DuplicateRule.webapi.ts - DuplicateRule WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * DuplicateRule WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IDuplicateRuleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IDuplicateRuleApi, 'FormattedValue'>]: string };
	/** Database table that stores match codes for the record type being evaluated for potential duplicates. */
	readonly BaseEntityMatchCodeTable: string | null;
	/** Record type of the record being evaluated for potential duplicates. */
	BaseEntityName: string | null;
	/** Record type of the record being evaluated for potential duplicates. */
	readonly BaseEntityTypeCode: number | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the duplicate detection rule. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the duplicate detection rule was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the duplicaterule. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description of the duplicate detection rule. */
	Description: string | null;
	/** Unique identifier of the duplicate detection rule. */
	DuplicateRuleId: DevKit.Guid | null;
	/** Determines whether to flag inactive records as duplicates */
	ExcludeInactiveRecords: boolean | null;
	/** Indicates if the operator is case-sensitive. */
	IsCaseSensitive: boolean | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Database table that stores match codes for potential duplicate records. */
	readonly MatchingEntityMatchCodeTable: string | null;
	/** Record type of the records being evaluated as potential duplicates. */
	MatchingEntityName: string | null;
	/** Record type of the records being evaluated as potential duplicates. */
	readonly MatchingEntityTypeCode: number | null;
	/** Unique identifier of the user who last modified the duplicate detection rule. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the duplicate detection rule was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the duplicaterule. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the duplicate detection rule. */
	Name: string | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the user or team who owns the duplicate detection rule. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns duplicate detection rule. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the duplicate detection rule. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the duplicate detection rule. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the duplicate detection rule. */
	readonly StateCode: number | null;
	/** Reason for the status of the duplicate detection rule. */
	StatusCode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** UniqueName */
	UniqueName: string | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const DuplicateRuleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	BaseEntityMatchCodeTable: { logicalName: 'baseentitymatchcodetable', readOnly: true },
	BaseEntityName: { logicalName: 'baseentityname' },
	BaseEntityTypeCode: { logicalName: 'baseentitytypecode', readOnly: true, type: 'Integer' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	DuplicateRuleId: { logicalName: 'duplicateruleid' },
	ExcludeInactiveRecords: { logicalName: 'excludeinactiverecords', type: 'Boolean' },
	IsCaseSensitive: { logicalName: 'iscasesensitive', type: 'Boolean' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	MatchingEntityMatchCodeTable: { logicalName: 'matchingentitymatchcodetable', readOnly: true },
	MatchingEntityName: { logicalName: 'matchingentityname' },
	MatchingEntityTypeCode: { logicalName: 'matchingentitytypecode', readOnly: true, type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	StateCode: { logicalName: 'statecode', readOnly: true, type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UniqueName: { logicalName: 'uniquename' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * DuplicateRule WebApi class for early-bound style coding
 * Usage: const duplicateRule = new DuplicateRuleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class DuplicateRuleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IDuplicateRuleApi>(entity, 'duplicaterule', 'duplicaterules', DuplicateRuleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface DuplicateRuleApi extends IDuplicateRuleApi { }
