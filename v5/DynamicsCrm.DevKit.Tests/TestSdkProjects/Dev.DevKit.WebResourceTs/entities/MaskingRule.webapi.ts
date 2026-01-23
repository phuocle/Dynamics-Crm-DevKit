/**
 * MaskingRule.webapi.ts - MaskingRule WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * MaskingRule WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IMaskingRuleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IMaskingRuleApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description of the secured masking rule */
	Description: string | null;
	/** The display name of the secured masking rule. */
	DisplayName: string | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Character used to mask */
	MaskedCharacter: string | null;
	/** Rich text test data evaluated by a secured masking rule */
	MaskedRichTestData: string | null;
	/** Test data evaluated by a secured masking rule */
	MaskedTestData: string | null;
	/** Unique identifier for entity instances */
	MaskingRuleId: DevKit.Guid | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The unique name of the secured masking rule. */
	Name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Regular Expression in C# */
	RegularExpression: string | null;
	/** Rich text test data to evaluate a secured masking rule */
	RichTestData: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Test data to evaluate a secured masking rule */
	TestData: string | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const MaskingRuleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { logicalName: 'createdby', readOnly: true },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { logicalName: 'createdonbehalfby', readOnly: true },
	Description: { logicalName: 'description' },
	DisplayName: { logicalName: 'displayname' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	MaskedCharacter: { logicalName: 'maskedcharacter' },
	MaskedRichTestData: { logicalName: 'maskedrichtestdata' },
	MaskedTestData: { logicalName: 'maskedtestdata' },
	MaskingRuleId: { logicalName: 'maskingruleid' },
	ModifiedBy: { logicalName: 'modifiedby', readOnly: true },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { logicalName: 'modifiedonbehalfby', readOnly: true },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	RegularExpression: { logicalName: 'regularexpression' },
	RichTestData: { logicalName: 'richtestdata' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TestData: { logicalName: 'testdata' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * MaskingRule WebApi class for early-bound style coding
 * Usage: const maskingRule = new MaskingRuleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class MaskingRuleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IMaskingRuleApi>(entity, 'maskingrule', 'maskingrules', MaskingRuleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface MaskingRuleApi extends IMaskingRuleApi { }
