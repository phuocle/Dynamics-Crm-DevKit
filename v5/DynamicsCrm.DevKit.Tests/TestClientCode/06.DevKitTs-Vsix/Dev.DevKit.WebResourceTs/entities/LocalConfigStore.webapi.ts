/**
 * LocalConfigStore.webapi.ts - LocalConfigStore WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for LocalConfigStore
 * All fields return string representation of their values
 */
export interface ILocalConfigStoreFormattedValue {
	readonly AssemblyName: string;
	readonly Id: string;
	readonly IsValueSet: string;
	readonly KeyName: string;
	readonly PublicToken: string;
	readonly Value: string;
}

/**
 * LocalConfigStore WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ILocalConfigStoreApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ILocalConfigStoreFormattedValue;
	/** Assembly Name */
	readonly AssemblyName: string | null;
	/** Unique identifier of LocalConfigStore entry. */
	Id: DevKit.Guid | null;
	readonly IsValueSet: boolean | null;
	/** Key Name */
	readonly KeyName: string | null;
	/** Assembly Public Token */
	readonly PublicToken: string | null;
	/** Value */
	readonly Value: string | null;
}

const LocalConfigStoreFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AssemblyName: { logicalName: 'assemblyname', readOnly: true },
	Id: { logicalName: 'id' },
	IsValueSet: { logicalName: 'isvalueset', readOnly: true, type: 'Boolean' },
	KeyName: { logicalName: 'keyname', readOnly: true },
	PublicToken: { logicalName: 'publictoken', readOnly: true },
	Value: { logicalName: 'value', readOnly: true },
};

/**
 * LocalConfigStore WebApi class for early-bound style coding
 * Usage: const localConfigStore = new LocalConfigStoreApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class LocalConfigStoreApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ILocalConfigStoreApi>(entity, 'localconfigstore', 'localconfigstores', LocalConfigStoreFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface LocalConfigStoreApi extends ILocalConfigStoreApi { }
