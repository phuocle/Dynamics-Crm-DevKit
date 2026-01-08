/**
 * msdyn_connectordatasource.webapi.ts - msdyn_connectordatasource WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_connectordatasource WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_connectordatasourceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_connectordatasourceApi, 'FormattedValue'>]: string };
	/** appsenvironment */
	msdyn_appsenvironment: string | null;
	/** clientid */
	msdyn_clientid: string | null;
	/** clientsecret */
	msdyn_clientsecret: string | null;
	/** connectionreference */
	msdyn_connectionreference: string | null;
	/** Unique identifier for Connection Reference associated with ConnectorDataSource. */
	msdyn_ConnectionReferenceId: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	msdyn_connectordatasourceId: DevKit.Guid | null;
	/** Connector Type */
	msdyn_connectortype: string | null;
	/** Dataset Unresolved Value */
	msdyn_dataset_unresolvedvalue: string | null;
	/** Dataset Value */
	msdyn_dataset_value: string | null;
	/** Boolean that indicates if the ACLing is done. */
	msdyn_hasacling: boolean | null;
	/** host */
	msdyn_host: string | null;
	/** Name */
	msdyn_name: string | null;
	/** resource */
	msdyn_resource: string | null;
	/** tenant */
	msdyn_tenant: string | null;
	/** User authentication */
	msdyn_userauth: boolean | null;
}

const msdyn_connectordatasourceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	msdyn_appsenvironment: { logicalName: 'msdyn_appsenvironment' },
	msdyn_clientid: { logicalName: 'msdyn_clientid' },
	msdyn_clientsecret: { logicalName: 'msdyn_clientsecret' },
	msdyn_connectionreference: { logicalName: 'msdyn_connectionreference' },
	msdyn_ConnectionReferenceId: { schemaName: 'msdyn_ConnectionReferenceId', logicalName: '_msdyn_connectionreferenceid_value', entityCollectionName: 'connectionreferences', entityLogicalName: 'connectionreference' },
	msdyn_connectordatasourceId: { logicalName: 'msdyn_connectordatasourceid' },
	msdyn_connectortype: { logicalName: 'msdyn_connectortype' },
	msdyn_dataset_unresolvedvalue: { logicalName: 'msdyn_dataset_unresolvedvalue' },
	msdyn_dataset_value: { logicalName: 'msdyn_dataset_value' },
	msdyn_hasacling: { logicalName: 'msdyn_hasacling', type: 'Boolean' },
	msdyn_host: { logicalName: 'msdyn_host' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_resource: { logicalName: 'msdyn_resource' },
	msdyn_tenant: { logicalName: 'msdyn_tenant' },
	msdyn_userauth: { logicalName: 'msdyn_userauth', type: 'Boolean' },
};

/**
 * msdyn_connectordatasource WebApi class for early-bound style coding
 * Usage: const msdyn_connectordatasource = new msdyn_connectordatasourceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_connectordatasourceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_connectordatasourceApi>(entity, 'msdyn_connectordatasource', 'msdyn_connectordatasources', msdyn_connectordatasourceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_connectordatasourceApi extends Imsdyn_connectordatasourceApi { }
