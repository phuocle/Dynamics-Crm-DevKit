/**
 * sa_SuggestedAction.webapi.ts - sa_SuggestedAction WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * sa_SuggestedAction WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Isa_SuggestedActionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Isa_SuggestedActionApi, 'FormattedValue'>]: string };
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
	/** Action Execution Steps */
	sa_ActionExecutionSteps: string | null;
	/** Action Title */
	sa_ActionTitle: string | null;
	/** App Id */
	sa_AppId: string | null;
	/** Completed By */
	sa_CompletedBy: DevKit.Guid | null;
	/** Completed On */
	sa_CompletedOn_UtcDateAndTime: Date | null;
	/** CriteriaId */
	sa_CriteriaId: DevKit.Guid | null;
	/** Generator Tag */
	sa_GeneratorTag: string | null;
	/** Maker Action Name */
	sa_MakerActionName: string | null;
	/** Rationale */
	sa_Rationale: string | null;
	/** Row ID */
	sa_RowID: string | null;
	/** Unique identifier for entity instances */
	sa_SuggestedActionId: DevKit.Guid | null;
	/** Table ID */
	sa_TableID: string | null;
	/** Status of the SuggestedAction */
	statecode: number | null;
	/** Reason for the status of the SuggestedAction */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const sa_SuggestedActionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	sa_ActionExecutionSteps: { logicalName: 'sa_actionexecutionsteps' },
	sa_ActionTitle: { logicalName: 'sa_actiontitle' },
	sa_AppId: { logicalName: 'sa_appid' },
	sa_CompletedBy: { schemaName: 'sa_CompletedBy', logicalName: '_sa_completedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	sa_CompletedOn_UtcDateAndTime: { logicalName: 'sa_completedon', type: 'DateTime' },
	sa_CriteriaId: { schemaName: 'sa_CriteriaId', logicalName: '_sa_criteriaid_value', entityCollectionName: 'sa_suggestedactioncriterias', entityLogicalName: 'sa_suggestedactioncriteria' },
	sa_GeneratorTag: { logicalName: 'sa_generatortag' },
	sa_MakerActionName: { logicalName: 'sa_makeractionname' },
	sa_Rationale: { logicalName: 'sa_rationale' },
	sa_RowID: { logicalName: 'sa_rowid' },
	sa_SuggestedActionId: { logicalName: 'sa_suggestedactionid' },
	sa_TableID: { logicalName: 'sa_tableid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * sa_SuggestedAction WebApi class for early-bound style coding
 * Usage: const sa_SuggestedAction = new sa_SuggestedActionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class sa_SuggestedActionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Isa_SuggestedActionApi>(entity, 'sa_suggestedaction', 'sa_suggestedactions', sa_SuggestedActionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface sa_SuggestedActionApi extends Isa_SuggestedActionApi { }
