/**
 * msdyn_odatav4ds.webapi.ts - msdyn_odatav4ds WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_odatav4ds WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_odatav4dsApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_odatav4dsApi, 'FormattedValue'>]: string };
	/** Type additional information to describe this OData v4 data source. What environment does this data source target and what is the purpose of this system ? */
	msdyn_description: string | null;
	/** Parameter10 Type */
	msdyn_isparameter10header: boolean | null;
	/** Parameter1 Type */
	msdyn_isparameter1header: boolean | null;
	/** Parameter2 Type */
	msdyn_isparameter2header: boolean | null;
	/** Parameter3 Type */
	msdyn_isparameter3header: boolean | null;
	/** Parameter4 Type */
	msdyn_isparameter4header: boolean | null;
	/** Parameter5 Type */
	msdyn_isparameter5header: boolean | null;
	/** Parameter6 Type */
	msdyn_isparameter6header: boolean | null;
	/** Parameter7 Type */
	msdyn_isparameter7header: boolean | null;
	/** Parameter8 Type */
	msdyn_isparameter8header: boolean | null;
	/** Parameter9 Type */
	msdyn_isparameter9header: boolean | null;
	/** Name of the OData v4 data source. This name appears in the data source drop-down list when creating a new entity. */
	msdyn_name: string | null;
	/** Unique identifier for entity instances */
	msdyn_odatav4dsId: DevKit.Guid | null;
	/** Pagination Mode */
	msdyn_paginationmode: boolean | null;
	/** Pagination Mode */
	msdyn_paginationtype: number | null;
	/** parameter10name */
	msdyn_parameter10name: string | null;
	/** parameter10value */
	msdyn_parameter10value: string | null;
	/** parameter1name */
	msdyn_parameter1name: string | null;
	/** parameter1value */
	msdyn_parameter1value: string | null;
	/** parameter2name */
	msdyn_parameter2name: string | null;
	/** parameter2value */
	msdyn_parameter2value: string | null;
	/** parameter3name */
	msdyn_parameter3name: string | null;
	/** parameter3value */
	msdyn_parameter3value: string | null;
	/** parameter4name */
	msdyn_parameter4name: string | null;
	/** parameter4value */
	msdyn_parameter4value: string | null;
	/** parameter5name */
	msdyn_parameter5name: string | null;
	/** parameter5value */
	msdyn_parameter5value: string | null;
	/** parameter6name */
	msdyn_parameter6name: string | null;
	/** parameter6value */
	msdyn_parameter6value: string | null;
	/** parameter7name */
	msdyn_parameter7name: string | null;
	/** parameter7value */
	msdyn_parameter7value: string | null;
	/** parameter8name */
	msdyn_parameter8name: string | null;
	/** parameter8value */
	msdyn_parameter8value: string | null;
	/** parameter9name */
	msdyn_parameter9name: string | null;
	/** parameter9value */
	msdyn_parameter9value: string | null;
	/** Return Inline Count */
	msdyn_returninlinecount: boolean | null;
	/** Amount of time to wait, in seconds, before timing out an OData v4 request. */
	msdyn_timeout: number | null;
	/** URL of the OData v4 web service endpoint this data source will target. */
	msdyn_uri: string | null;
}

const msdyn_odatav4dsFieldConfig: DevKit.IWebApiFieldConfigMap = {
	msdyn_description: { logicalName: 'msdyn_description' },
	msdyn_isparameter10header: { logicalName: 'msdyn_isparameter10header', type: 'Boolean' },
	msdyn_isparameter1header: { logicalName: 'msdyn_isparameter1header', type: 'Boolean' },
	msdyn_isparameter2header: { logicalName: 'msdyn_isparameter2header', type: 'Boolean' },
	msdyn_isparameter3header: { logicalName: 'msdyn_isparameter3header', type: 'Boolean' },
	msdyn_isparameter4header: { logicalName: 'msdyn_isparameter4header', type: 'Boolean' },
	msdyn_isparameter5header: { logicalName: 'msdyn_isparameter5header', type: 'Boolean' },
	msdyn_isparameter6header: { logicalName: 'msdyn_isparameter6header', type: 'Boolean' },
	msdyn_isparameter7header: { logicalName: 'msdyn_isparameter7header', type: 'Boolean' },
	msdyn_isparameter8header: { logicalName: 'msdyn_isparameter8header', type: 'Boolean' },
	msdyn_isparameter9header: { logicalName: 'msdyn_isparameter9header', type: 'Boolean' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_odatav4dsId: { logicalName: 'msdyn_odatav4dsid' },
	msdyn_paginationmode: { logicalName: 'msdyn_paginationmode', type: 'Boolean' },
	msdyn_paginationtype: { logicalName: 'msdyn_paginationtype', type: 'Integer' },
	msdyn_parameter10name: { logicalName: 'msdyn_parameter10name' },
	msdyn_parameter10value: { logicalName: 'msdyn_parameter10value' },
	msdyn_parameter1name: { logicalName: 'msdyn_parameter1name' },
	msdyn_parameter1value: { logicalName: 'msdyn_parameter1value' },
	msdyn_parameter2name: { logicalName: 'msdyn_parameter2name' },
	msdyn_parameter2value: { logicalName: 'msdyn_parameter2value' },
	msdyn_parameter3name: { logicalName: 'msdyn_parameter3name' },
	msdyn_parameter3value: { logicalName: 'msdyn_parameter3value' },
	msdyn_parameter4name: { logicalName: 'msdyn_parameter4name' },
	msdyn_parameter4value: { logicalName: 'msdyn_parameter4value' },
	msdyn_parameter5name: { logicalName: 'msdyn_parameter5name' },
	msdyn_parameter5value: { logicalName: 'msdyn_parameter5value' },
	msdyn_parameter6name: { logicalName: 'msdyn_parameter6name' },
	msdyn_parameter6value: { logicalName: 'msdyn_parameter6value' },
	msdyn_parameter7name: { logicalName: 'msdyn_parameter7name' },
	msdyn_parameter7value: { logicalName: 'msdyn_parameter7value' },
	msdyn_parameter8name: { logicalName: 'msdyn_parameter8name' },
	msdyn_parameter8value: { logicalName: 'msdyn_parameter8value' },
	msdyn_parameter9name: { logicalName: 'msdyn_parameter9name' },
	msdyn_parameter9value: { logicalName: 'msdyn_parameter9value' },
	msdyn_returninlinecount: { logicalName: 'msdyn_returninlinecount', type: 'Boolean' },
	msdyn_timeout: { logicalName: 'msdyn_timeout', type: 'Integer' },
	msdyn_uri: { logicalName: 'msdyn_uri' },
};

/**
 * msdyn_odatav4ds WebApi class for early-bound style coding
 * Usage: const msdyn_odatav4ds = new msdyn_odatav4dsApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_odatav4dsApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_odatav4dsApi>(entity, 'msdyn_odatav4ds', 'msdyn_odatav4dses', msdyn_odatav4dsFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_odatav4dsApi extends Imsdyn_odatav4dsApi { }
