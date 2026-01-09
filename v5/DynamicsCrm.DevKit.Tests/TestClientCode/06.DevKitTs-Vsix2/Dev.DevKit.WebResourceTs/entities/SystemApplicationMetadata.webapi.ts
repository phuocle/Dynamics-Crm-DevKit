/**
 * SystemApplicationMetadata.webapi.ts - SystemApplicationMetadata WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SystemApplicationMetadata WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISystemApplicationMetadataApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISystemApplicationMetadataApi, 'FormattedValue'>]: string };
	/** The logical name of the entity this application metadata is associated with. */
	AssociatedEntityLogicalName: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** For internal use only. */
	Data: string | null;
	/** For internal use only. */
	Dependency: string | null;
	/** For internal use only. */
	DisplayName: string | null;
	/** For internal use only. */
	FormFactor: number | null;
	/** For internal use only. */
	IsDefault: boolean | null;
	/** For internal use only. */
	Lcid: number | null;
	/** For internal use only. */
	MetadataSubtype: number | null;
	/** For internal use only. */
	MetadataType: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	SourceId: string | null;
	/** For internal use only. */
	State: number | null;
	/** For internal use only. */
	SystemApplicationMetadataId: DevKit.Guid | null;
	/** For internal use only. */
	Version: string | null;
}

const SystemApplicationMetadataFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AssociatedEntityLogicalName: { logicalName: 'associatedentitylogicalname' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Data: { logicalName: 'data' },
	Dependency: { logicalName: 'dependency' },
	DisplayName: { logicalName: 'displayname' },
	FormFactor: { logicalName: 'formfactor', type: 'Integer' },
	IsDefault: { logicalName: 'isdefault', type: 'Boolean' },
	Lcid: { logicalName: 'lcid', type: 'Integer' },
	MetadataSubtype: { logicalName: 'metadatasubtype', type: 'Integer' },
	MetadataType: { logicalName: 'metadatatype', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	SourceId: { logicalName: 'sourceid' },
	State: { logicalName: 'state', type: 'Integer' },
	SystemApplicationMetadataId: { logicalName: 'systemapplicationmetadataid' },
	Version: { logicalName: 'version' },
};

/**
 * SystemApplicationMetadata WebApi class for early-bound style coding
 * Usage: const systemApplicationMetadata = new SystemApplicationMetadataApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SystemApplicationMetadataApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISystemApplicationMetadataApi>(entity, 'systemapplicationmetadata', 'systemapplicationmetadatacollection', SystemApplicationMetadataFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SystemApplicationMetadataApi extends ISystemApplicationMetadataApi { }
