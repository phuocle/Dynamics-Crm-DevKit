/**
 * reconciliationentityinfo.webapi.ts - reconciliationentityinfo WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * reconciliationentityinfo WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IreconciliationentityinfoApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IreconciliationentityinfoApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Criteria for running reconciliation. */
	Criteria: string | null;
	/** Table name */
	EntityLogicalName: string | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Last delta converted version. */
	LastDeltaConvertedVersion: number | null;
	/** Last successful reconciliation version. */
	LastSuccessfullReconciledVersion: number | null;
	/** Message during reconciliation. */
	Message: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	reconciliationentityinfoId: DevKit.Guid | null;
	/** Id of the reconciliation operation. */
	ReconciliationInfoId: DevKit.Guid | null;
	/** Status of the ReconciliationEntityInfo */
	statecode: number | null;
	/** Reason for the status of the ReconciliationEntityInfo */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const reconciliationentityinfoFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Criteria: { logicalName: 'criteria' },
	EntityLogicalName: { logicalName: 'entitylogicalname' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	LastDeltaConvertedVersion: { logicalName: 'lastdeltaconvertedversion', type: 'Integer' },
	LastSuccessfullReconciledVersion: { logicalName: 'lastsuccessfullreconciledversion', type: 'Integer' },
	Message: { logicalName: 'message' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	reconciliationentityinfoId: { logicalName: 'reconciliationentityinfoid' },
	ReconciliationInfoId: { schemaName: 'ReconciliationInfoId', logicalName: '_reconciliationinfoid_value', entityCollectionName: 'reconciliationinfos', entityLogicalName: 'reconciliationinfo' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * reconciliationentityinfo WebApi class for early-bound style coding
 * Usage: const reconciliationentityinfo = new reconciliationentityinfoApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class reconciliationentityinfoApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IreconciliationentityinfoApi>(entity, 'reconciliationentityinfo', 'reconciliationentityinfos', reconciliationentityinfoFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface reconciliationentityinfoApi extends IreconciliationentityinfoApi { }
