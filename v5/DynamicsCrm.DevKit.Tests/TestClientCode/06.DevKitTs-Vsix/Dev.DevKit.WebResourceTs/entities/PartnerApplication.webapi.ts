/**
 * PartnerApplication.webapi.ts - PartnerApplication WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * PartnerApplication WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPartnerApplicationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IPartnerApplicationApi, 'FormattedValue'>]: string };
	/** Indicates the application role. */
	ApplicationRole: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Contains the metadata URL. */
	MetadataUrl: string | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of Partner Application. */
	Name: string | null;
	/** Unique identifier of the organization associated with the record. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Unique identifier of the partner application. */
	PartnerApplicationId: DevKit.Guid | null;
	/** Principal ID of the partner application. */
	PrincipalId: string | null;
	/** Indicates the realm. */
	Realm: string | null;
	/** Shows the status of the partner application. */
	readonly StateCode: number | null;
	/** Select the partner application's status. */
	StatusCode: number | null;
	/** Shows the tenant ID. */
	TenantId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Select whether the partner application uses an authorization server. */
	UseAuthorizationServer: boolean | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version number of the partner application. */
	readonly VersionNumber: number | null;
}

const PartnerApplicationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ApplicationRole: { logicalName: 'applicationrole', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	MetadataUrl: { logicalName: 'metadataurl' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	PartnerApplicationId: { logicalName: 'partnerapplicationid' },
	PrincipalId: { logicalName: 'principalid' },
	Realm: { logicalName: 'realm' },
	StateCode: { logicalName: 'statecode', readOnly: true, type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	TenantId: { logicalName: 'tenantid' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UseAuthorizationServer: { logicalName: 'useauthorizationserver', type: 'Boolean' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * PartnerApplication WebApi class for early-bound style coding
 * Usage: const partnerApplication = new PartnerApplicationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PartnerApplicationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPartnerApplicationApi>(entity, 'partnerapplication', 'partnerapplications', PartnerApplicationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PartnerApplicationApi extends IPartnerApplicationApi { }
