/**
 * PrincipalObjectAttributeAccess.webapi.ts - PrincipalObjectAttributeAccess WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for PrincipalObjectAttributeAccess
 * All fields return string representation of their values
 */
export interface IPrincipalObjectAttributeAccessFormattedValue {
	readonly AttributeId: string;
	readonly ObjectId: string;
	readonly OrganizationId: string;
	readonly PrincipalId: string;
	readonly PrincipalObjectAttributeAccessId: string;
	readonly ReadAccess: string;
	readonly UpdateAccess: string;
	readonly VersionNumber: string;
}

/**
 * PrincipalObjectAttributeAccess WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPrincipalObjectAttributeAccessApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IPrincipalObjectAttributeAccessFormattedValue;
	/** Unique identifier of the shared secured field */
	AttributeId: DevKit.Guid | null;
	/** Unique identifier of the entity instance with shared secured field */
	ObjectId: DevKit.Guid | null;
	/** Unique identifier of the associated organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Unique identifier of the principal to which secured field is shared */
	PrincipalId: DevKit.Guid | null;
	/** Unique identifier of the shared secured field instance */
	PrincipalObjectAttributeAccessId: DevKit.Guid | null;
	/** Read permission for secured field instance */
	ReadAccess: boolean | null;
	/** Update permission for secured field instance */
	UpdateAccess: boolean | null;
	readonly VersionNumber: number | null;
}

const PrincipalObjectAttributeAccessFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AttributeId: { logicalName: 'attributeid' },
	ObjectId: { schemaName: 'ObjectId', logicalName: '_objectid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	PrincipalId: { schemaName: 'PrincipalId', logicalName: '_principalid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PrincipalObjectAttributeAccessId: { logicalName: 'principalobjectattributeaccessid' },
	ReadAccess: { logicalName: 'readaccess', type: 'Boolean' },
	UpdateAccess: { logicalName: 'updateaccess', type: 'Boolean' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * PrincipalObjectAttributeAccess WebApi class for early-bound style coding
 * Usage: const principalObjectAttributeAccess = new PrincipalObjectAttributeAccessApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PrincipalObjectAttributeAccessApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPrincipalObjectAttributeAccessApi>(entity, 'principalobjectattributeaccess', 'principalobjectattributeaccesses', PrincipalObjectAttributeAccessFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PrincipalObjectAttributeAccessApi extends IPrincipalObjectAttributeAccessApi { }
