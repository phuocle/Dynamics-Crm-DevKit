/**
 * AuthorizationServer.webapi.ts - AuthorizationServer WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for AuthorizationServer
 * All fields return string representation of their values
 */
export interface IAuthorizationServerFormattedValue {
	readonly AuthorizationServerId: string;
	readonly AuthorizationServerType: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Metadata: string;
	readonly MetadataRefreshedOn_UtcDateAndTime: string;
	readonly MetadataUrl: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly PrincipalId: string;
	readonly Realm: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly TenantId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * AuthorizationServer WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAuthorizationServerApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IAuthorizationServerFormattedValue;
	/** Unique identifier for entity instances */
	AuthorizationServerId: DevKit.Guid | null;
	/**  The type of the Authorization Server  */
	AuthorizationServerType: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Contains the metadata for the authorization server. */
	Metadata: string | null;
	/** Shows the date and time when the metadata was refreshed from the authorization server. */
	readonly MetadataRefreshedOn_UtcDateAndTime: Date | null;
	/** Contains the URL for the metadata. */
	MetadataUrl: string | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type the name of the authorization server. */
	Name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Contains the issuer ID of the authorization server. */
	PrincipalId: string | null;
	/** Indicates the realm. */
	Realm: string | null;
	/** Shows whether the authorization server is active or inactive. */
	readonly StateCode: number | null;
	/** Select the authorization server's status. */
	StatusCode: number | null;
	/** Shows the tenant ID. */
	TenantId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of the authorization server. */
	readonly VersionNumber: number | null;
}

const AuthorizationServerFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AuthorizationServerId: { logicalName: 'authorizationserverid' },
	AuthorizationServerType: { logicalName: 'authorizationservertype', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Metadata: { logicalName: 'metadata' },
	MetadataRefreshedOn_UtcDateAndTime: { logicalName: 'metadatarefreshedon', readOnly: true, type: 'DateTime' },
	MetadataUrl: { logicalName: 'metadataurl' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	PrincipalId: { logicalName: 'principalid' },
	Realm: { logicalName: 'realm' },
	StateCode: { logicalName: 'statecode', readOnly: true, type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	TenantId: { logicalName: 'tenantid' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * AuthorizationServer WebApi class for early-bound style coding
 * Usage: const authorizationServer = new AuthorizationServerApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AuthorizationServerApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAuthorizationServerApi>(entity, 'authorizationserver', 'authorizationservers', AuthorizationServerFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AuthorizationServerApi extends IAuthorizationServerApi { }
