/**
 * ServiceEndpoint.webapi.ts - ServiceEndpoint WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * ServiceEndpoint WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IServiceEndpointApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IServiceEndpointApi, 'FormattedValue'>]: string };
	/** Specifies mode of authentication with SB */
	AuthType: number | null;
	/** Authentication Value */
	AuthValue: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Connection mode to contact the service endpoint. */
	ConnectionMode: number | null;
	/** Type of the endpoint contract. */
	Contract: number | null;
	/** Unique identifier of the user who created the service endpoint. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the service endpoint was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the service endpoint. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description of the service endpoint. */
	Description: string | null;
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	readonly IsAuthValueSet: boolean | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	/** Information that specifies whether this component is managed. */
	readonly IsManaged: boolean | null;
	readonly IsSASKeySet: boolean | null;
	readonly IsSASTokenSet: boolean | null;
	/** Unique identifier for keyvaultreference associated with serviceendpoint. */
	KeyVaultReferenceId: DevKit.Guid | null;
	/** Unique identifier for managed identity associated with serviceendpoint. */
	ManagedIdentityId: DevKit.Guid | null;
	/** Specifies the character encoding for message content */
	MessageCharset: number | null;
	/** Content type of the message */
	MessageFormat: number | null;
	/** Unique identifier of the user who last modified the service endpoint. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the service endpoint was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the service endpoint. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of Service end point. */
	Name: string | null;
	/** Full service endpoint address. */
	NamespaceAddress: string | null;
	/** Format of Service Bus Namespace */
	NamespaceFormat: number | null;
	/** Unique identifier of the organization with which the service endpoint is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Path to the service endpoint. */
	Path: string | null;
	/** For internal use only. Holds miscellaneous properties related to runtime integration. */
	RuntimeIntegrationProperties: string | null;
	/** Shared Access Key */
	SASKey: string | null;
	/** Shared Access Key Name */
	SASKeyName: string | null;
	/** Shared Access Token */
	SASToken: string | null;
	/** Specifies schema type for event grid events */
	SchemaType: number | null;
	/** Unique identifier of the service endpoint. */
	ServiceEndpointId: DevKit.Guid | null;
	/** Unique identifier of the service endpoint. */
	readonly ServiceEndpointIdUnique: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Namespace of the App Fabric solution. */
	SolutionNamespace: string | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Full service endpoint Url. */
	Url: string | null;
	/** Use Auth Information in KeyVault */
	UseKeyVaultConfiguration: boolean | null;
	/** Additional user claim value type. */
	UserClaim: number | null;
}

const ServiceEndpointFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AuthType: { logicalName: 'authtype', type: 'Integer' },
	AuthValue: { logicalName: 'authvalue' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ConnectionMode: { logicalName: 'connectionmode', type: 'Integer' },
	Contract: { logicalName: 'contract', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsAuthValueSet: { logicalName: 'isauthvalueset', readOnly: true, type: 'Boolean' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsSASKeySet: { logicalName: 'issaskeyset', readOnly: true, type: 'Boolean' },
	IsSASTokenSet: { logicalName: 'issastokenset', readOnly: true, type: 'Boolean' },
	KeyVaultReferenceId: { schemaName: 'KeyVaultReferenceId', logicalName: '_keyvaultreferenceid_value', entityCollectionName: 'keyvaultreferences', entityLogicalName: 'keyvaultreference' },
	ManagedIdentityId: { schemaName: 'ManagedIdentityId', logicalName: '_managedidentityid_value', entityCollectionName: 'managedidentities', entityLogicalName: 'managedidentity' },
	MessageCharset: { logicalName: 'messagecharset', type: 'Integer' },
	MessageFormat: { logicalName: 'messageformat', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	NamespaceAddress: { logicalName: 'namespaceaddress' },
	NamespaceFormat: { logicalName: 'namespaceformat', type: 'Integer' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	Path: { logicalName: 'path' },
	RuntimeIntegrationProperties: { logicalName: 'runtimeintegrationproperties' },
	SASKey: { logicalName: 'saskey' },
	SASKeyName: { logicalName: 'saskeyname' },
	SASToken: { logicalName: 'sastoken' },
	SchemaType: { logicalName: 'schematype', type: 'Integer' },
	ServiceEndpointId: { logicalName: 'serviceendpointid' },
	ServiceEndpointIdUnique: { logicalName: 'serviceendpointidunique', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SolutionNamespace: { logicalName: 'solutionnamespace' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	Url: { logicalName: 'url' },
	UseKeyVaultConfiguration: { logicalName: 'usekeyvaultconfiguration', type: 'Boolean' },
	UserClaim: { logicalName: 'userclaim', type: 'Integer' },
};

/**
 * ServiceEndpoint WebApi class for early-bound style coding
 * Usage: const serviceEndpoint = new ServiceEndpointApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ServiceEndpointApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IServiceEndpointApi>(entity, 'serviceendpoint', 'serviceendpoints', ServiceEndpointFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ServiceEndpointApi extends IServiceEndpointApi { }
