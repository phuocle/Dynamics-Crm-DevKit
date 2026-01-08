/**
 * searchrelationshipsettings.webapi.ts - searchrelationshipsettings WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * searchrelationshipsettings WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IsearchrelationshipsettingsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IsearchrelationshipsettingsApi, 'FormattedValue'>]: string };
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
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** RelationshipMetadataId */
	RelationshipMetadataId: string | null;
	/** RelationshipName */
	RelationshipName: string | null;
	/** The name of the custom entity. */
	relationshipsettingname: string | null;
	/** SearchEntity */
	SearchEntity: number | null;
	/** Unique identifier for entity instances */
	searchrelationshipsettingsId: DevKit.Guid | null;
	/** Status of the SearchRelationshipSettings */
	statecode: number | null;
	/** Reason for the status of the SearchRelationshipSettings */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const searchrelationshipsettingsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	RelationshipMetadataId: { logicalName: 'relationshipmetadataid' },
	RelationshipName: { logicalName: 'relationshipname' },
	relationshipsettingname: { logicalName: 'relationshipsettingname' },
	SearchEntity: { logicalName: 'searchentity', type: 'Integer' },
	searchrelationshipsettingsId: { logicalName: 'searchrelationshipsettingsid' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * searchrelationshipsettings WebApi class for early-bound style coding
 * Usage: const searchrelationshipsettings = new searchrelationshipsettingsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class searchrelationshipsettingsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IsearchrelationshipsettingsApi>(entity, 'searchrelationshipsettings', 'searchrelationshipsettingses', searchrelationshipsettingsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface searchrelationshipsettingsApi extends IsearchrelationshipsettingsApi { }
