/**
 * retentionoperationdetail.webapi.ts - retentionoperationdetail WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * retentionoperationdetail WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IretentionoperationdetailApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IretentionoperationdetailApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Table logical name. */
	EntityLogicalName: string | null;
	/** Total failed records. */
	FailedCount: number | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Is this a root table on which retention ran. */
	IsRootEntity: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the retention operation detail. */
	Name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Total retained records. */
	RetentionCount: number | null;
	/** Unique identifier for entity instances */
	retentionoperationdetailId: DevKit.Guid | null;
	/** Reference id of the retention operation. */
	RetentionOperationId: DevKit.Guid | null;
	/** Status of the retentionoperationdetail */
	statecode: number | null;
	/** Reason for the status of the retentionoperationdetail */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const retentionoperationdetailFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EntityLogicalName: { logicalName: 'entitylogicalname' },
	FailedCount: { logicalName: 'failedcount', type: 'Integer' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsRootEntity: { logicalName: 'isrootentity', type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	RetentionCount: { logicalName: 'retentioncount', type: 'Integer' },
	retentionoperationdetailId: { logicalName: 'retentionoperationdetailid' },
	RetentionOperationId: { schemaName: 'RetentionOperationId', logicalName: '_retentionoperationid_value', entityCollectionName: 'retentionoperations', entityLogicalName: 'retentionoperation' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * retentionoperationdetail WebApi class for early-bound style coding
 * Usage: const retentionoperationdetail = new retentionoperationdetailApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class retentionoperationdetailApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IretentionoperationdetailApi>(entity, 'retentionoperationdetail', 'retentionoperationdetails', retentionoperationdetailFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface retentionoperationdetailApi extends IretentionoperationdetailApi { }
