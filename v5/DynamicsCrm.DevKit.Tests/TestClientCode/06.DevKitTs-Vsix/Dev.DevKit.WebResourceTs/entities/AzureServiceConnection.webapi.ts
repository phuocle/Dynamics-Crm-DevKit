/**
 * AzureServiceConnection.webapi.ts - AzureServiceConnection WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for AzureServiceConnection
 * All fields return string representation of their values
 */
export interface IAzureServiceConnectionFormattedValue {
	readonly AccountKey: string;
	readonly AzureServiceConnectionId: string;
	readonly ConnectionType: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly LastConnectionStatusCode: string;
	readonly LastConnectionTime_UtcDateAndTime: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly ServiceUri: string;
	readonly StateCode: string;
	readonly StatusCode: string;
}

/**
 * AzureServiceConnection WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAzureServiceConnectionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IAzureServiceConnectionFormattedValue;
	/** Type the Azure account key. */
	AccountKey: string | null;
	/** Unique identifier of the Azure service connection. */
	AzureServiceConnectionId: DevKit.Guid | null;
	/** Azure service connection type */
	ConnectionType: number | null;
	/** Unique identifier of the user who created the Azure service connection. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the Azure service connection was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the Azure service connection. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Enter a description of the Azure service connection. */
	Description: string | null;
	/** Shows the status of the last connection to the Azure service. */
	LastConnectionStatusCode: number | null;
	/** shows the time of the last connection to the Azure service. */
	LastConnectionTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the user who modified the Azure service connection. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the Azure service connection was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the Azure service connection. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Type a logical name for the connection. */
	Name: string | null;
	/** Unique identifier of the organization associated with the Azure service connection. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Type the service URL for the Azure service. */
	ServiceUri: string | null;
	/** Shows whether the Azure service connection is active or inactive. */
	StateCode: number | null;
	/** Select the Azure service connection's status. */
	StatusCode: number | null;
}

const AzureServiceConnectionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AccountKey: { logicalName: 'accountkey' },
	AzureServiceConnectionId: { logicalName: 'azureserviceconnectionid' },
	ConnectionType: { logicalName: 'connectiontype', type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	LastConnectionStatusCode: { logicalName: 'lastconnectionstatuscode', type: 'Integer' },
	LastConnectionTime_UtcDateAndTime: { logicalName: 'lastconnectiontime', type: 'DateTime' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	ServiceUri: { logicalName: 'serviceuri' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * AzureServiceConnection WebApi class for early-bound style coding
 * Usage: const azureServiceConnection = new AzureServiceConnectionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AzureServiceConnectionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAzureServiceConnectionApi>(entity, 'azureserviceconnection', 'azureserviceconnections', AzureServiceConnectionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AzureServiceConnectionApi extends IAzureServiceConnectionApi { }
