/**
 * sa_SuggestedActionCriteria.webapi.ts - sa_SuggestedActionCriteria WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * sa_SuggestedActionCriteria WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Isa_SuggestedActionCriteriaApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Isa_SuggestedActionCriteriaApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for the organization */
	OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** App ID */
	sa_AppID: string | null;
	/** Criteria List */
	sa_CriteriaList: string | null;
	/** Unique identifier for entity instances */
	sa_SuggestedActionCriteriaId: DevKit.Guid | null;
	/** Table Id */
	sa_TableId: string | null;
	/** Status of the Suggested Action Criteria */
	statecode: number | null;
	/** Reason for the status of the Suggested Action Criteria */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const sa_SuggestedActionCriteriaFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	sa_AppID: { logicalName: 'sa_appid' },
	sa_CriteriaList: { logicalName: 'sa_criterialist' },
	sa_SuggestedActionCriteriaId: { logicalName: 'sa_suggestedactioncriteriaid' },
	sa_TableId: { logicalName: 'sa_tableid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * sa_SuggestedActionCriteria WebApi class for early-bound style coding
 * Usage: const sa_SuggestedActionCriteria = new sa_SuggestedActionCriteriaApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class sa_SuggestedActionCriteriaApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Isa_SuggestedActionCriteriaApi>(entity, 'sa_suggestedactioncriteria', 'sa_suggestedactioncriterias', sa_SuggestedActionCriteriaFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface sa_SuggestedActionCriteriaApi extends Isa_SuggestedActionCriteriaApi { }
