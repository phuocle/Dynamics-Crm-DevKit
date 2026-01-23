/**
 * mspcat_PackageStore.webapi.ts - mspcat_PackageStore WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * mspcat_PackageStore WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspcat_PackageStoreApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imspcat_PackageStoreApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Async Job used to track this operation.  */
	mspcat_AsyncOperationId: string | null;
	/** Type of Deployment this package is intended to be used for */
	mspcat_IntendedDeploymentType: number | null;
	/** Name */
	mspcat_Name: string | null;
	/** Describes the request operation on this package */
	mspcat_Operation: number | null;
	/** File that the package is stored in */
	readonly mspcat_PackageFile_name: string | null;
	/** Unique identifier for entity instances */
	mspcat_PackageStoreId: DevKit.Guid | null;
	/** Processing Message */
	mspcat_ProcessingMessage: string | null;
	/** Link between the solution unique name and the catalog package */
	mspcat_SolutionUniqueName: string | null;
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
	/** Status of the Package Store */
	statecode: number | null;
	/** Reason for the status of the Package Store */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const mspcat_PackageStoreFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspcat_AsyncOperationId: { logicalName: 'mspcat_asyncoperationid' },
	mspcat_IntendedDeploymentType: { logicalName: 'mspcat_intendeddeploymenttype', type: 'Integer' },
	mspcat_Name: { logicalName: 'mspcat_name' },
	mspcat_Operation: { logicalName: 'mspcat_operation', type: 'Integer' },
	mspcat_PackageFile_name: { logicalName: 'mspcat_packagefile', readOnly: true },
	mspcat_PackageStoreId: { logicalName: 'mspcat_packagestoreid' },
	mspcat_ProcessingMessage: { logicalName: 'mspcat_processingmessage' },
	mspcat_SolutionUniqueName: { logicalName: 'mspcat_solutionuniquename' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * mspcat_PackageStore WebApi class for early-bound style coding
 * Usage: const mspcat_PackageStore = new mspcat_PackageStoreApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspcat_PackageStoreApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspcat_PackageStoreApi>(entity, 'mspcat_packagestore', 'mspcat_packagestores', mspcat_PackageStoreFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspcat_PackageStoreApi extends Imspcat_PackageStoreApi { }
