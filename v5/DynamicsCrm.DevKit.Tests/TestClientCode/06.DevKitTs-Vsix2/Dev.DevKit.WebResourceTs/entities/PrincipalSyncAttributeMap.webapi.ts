/**
 * PrincipalSyncAttributeMap.webapi.ts - PrincipalSyncAttributeMap WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * PrincipalSyncAttributeMap WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPrincipalSyncAttributeMapApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IPrincipalSyncAttributeMapApi, 'FormattedValue'>]: string };
	/** Specifies allowed sync directions. */
	AllowedSyncDirection: number | null;
	/** CRM Attribute Display Name. */
	AttributeCRMDisplayName: string | null;
	/** CRM Attribute Name. */
	AttributeCRMName: string | null;
	/** Exchange Attribute Display Name. */
	AttributeExchangeDisplayName: string | null;
	/** Exchange Attribute Name. */
	AttributeExchangeName: string | null;
	/** Computed Properties. */
	ComputedProperties: string | null;
	/** Default Sync Direction */
	DefaultSyncDirection: number | null;
	/** Indicates whether the mapping is a computed property */
	readonly IsComputed: boolean | null;
	/** Mapping Name. */
	MappingName: string | null;
	/** Unique identifier of the associated organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Parent Sync-Attribute Mapping to which this mapping belongs */
	ParentPrincipalSyncAttributeMappingId: DevKit.Guid | null;
	PrincipalId: DevKit.Guid | null;
	/** Unique identifier of the principal sync attribute mapping. */
	PrincipalSyncAttributeMapId: DevKit.Guid | null;
	/** Sync Direction */
	SyncDirection: number | null;
	readonly VersionNumber: number | null;
}

const PrincipalSyncAttributeMapFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AllowedSyncDirection: { logicalName: 'allowedsyncdirection', type: 'Integer' },
	AttributeCRMDisplayName: { logicalName: 'attributecrmdisplayname' },
	AttributeCRMName: { logicalName: 'attributecrmname' },
	AttributeExchangeDisplayName: { logicalName: 'attributeexchangedisplayname' },
	AttributeExchangeName: { logicalName: 'attributeexchangename' },
	ComputedProperties: { logicalName: 'computedproperties' },
	DefaultSyncDirection: { logicalName: 'defaultsyncdirection', type: 'Integer' },
	IsComputed: { logicalName: 'iscomputed', readOnly: true, type: 'Boolean' },
	MappingName: { logicalName: 'mappingname' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	ParentPrincipalSyncAttributeMappingId: { schemaName: 'ParentPrincipalSyncAttributeMappingId', logicalName: '_parentprincipalsyncattributemappingid_value', entityCollectionName: 'principalsyncattributemaps', entityLogicalName: 'principalsyncattributemap' },
	PrincipalId: { logicalName: 'principalid' },
	PrincipalSyncAttributeMapId: { logicalName: 'principalsyncattributemapid' },
	SyncDirection: { logicalName: 'syncdirection', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * PrincipalSyncAttributeMap WebApi class for early-bound style coding
 * Usage: const principalSyncAttributeMap = new PrincipalSyncAttributeMapApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PrincipalSyncAttributeMapApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPrincipalSyncAttributeMapApi>(entity, 'principalsyncattributemap', 'principalsyncattributemaps', PrincipalSyncAttributeMapFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PrincipalSyncAttributeMapApi extends IPrincipalSyncAttributeMapApi { }
