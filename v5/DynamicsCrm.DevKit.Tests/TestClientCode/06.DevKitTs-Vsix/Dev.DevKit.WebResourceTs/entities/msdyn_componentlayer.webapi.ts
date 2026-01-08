/**
 * msdyn_componentlayer.webapi.ts - msdyn_componentlayer WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_componentlayer
 * All fields return string representation of their values
 */
export interface Imsdyn_componentlayerFormattedValue {
	readonly msdyn_changes: string;
	readonly msdyn_children: string;
	readonly msdyn_componentid: string;
	readonly msdyn_componentjson: string;
	readonly msdyn_componentlayerId: string;
	readonly msdyn_endtime_UtcDateAndTime: string;
	readonly msdyn_name: string;
	readonly msdyn_order: string;
	readonly msdyn_publishername: string;
	readonly msdyn_solutioncomponentname: string;
	readonly msdyn_solutionname: string;
}

/**
 * msdyn_componentlayer WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_componentlayerApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_componentlayerFormattedValue;
	/** Changes */
	msdyn_changes: string | null;
	/** Children */
	msdyn_children: string | null;
	/** Component Id */
	msdyn_componentid: string | null;
	/** Component Json */
	msdyn_componentjson: string | null;
	/** Unique identifier for entity instances */
	msdyn_componentlayerId: DevKit.Guid | null;
	/** Overwrite Time */
	msdyn_endtime_UtcDateAndTime: Date | null;
	/** The name of the component. */
	msdyn_name: string | null;
	/** Order */
	msdyn_order: number | null;
	/** Publisher Name */
	msdyn_publishername: string | null;
	/** Solution Component Name */
	msdyn_solutioncomponentname: string | null;
	/** Solution Name */
	msdyn_solutionname: string | null;
}

const msdyn_componentlayerFieldConfig: DevKit.IWebApiFieldConfigMap = {
	msdyn_changes: { logicalName: 'msdyn_changes' },
	msdyn_children: { logicalName: 'msdyn_children' },
	msdyn_componentid: { logicalName: 'msdyn_componentid' },
	msdyn_componentjson: { logicalName: 'msdyn_componentjson' },
	msdyn_componentlayerId: { logicalName: 'msdyn_componentlayerid' },
	msdyn_endtime_UtcDateAndTime: { logicalName: 'msdyn_overwritetime', type: 'DateTime' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_order: { logicalName: 'msdyn_order', type: 'Integer' },
	msdyn_publishername: { logicalName: 'msdyn_publishername' },
	msdyn_solutioncomponentname: { logicalName: 'msdyn_solutioncomponentname' },
	msdyn_solutionname: { logicalName: 'msdyn_solutionname' },
};

/**
 * msdyn_componentlayer WebApi class for early-bound style coding
 * Usage: const msdyn_componentlayer = new msdyn_componentlayerApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_componentlayerApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_componentlayerApi>(entity, 'msdyn_componentlayer', 'msdyn_componentlayers', msdyn_componentlayerFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_componentlayerApi extends Imsdyn_componentlayerApi { }
