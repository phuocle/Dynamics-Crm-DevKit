/**
 * msdyn_solutionhistory.webapi.ts - msdyn_solutionhistory WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_solutionhistory WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_solutionhistoryApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_solutionhistoryApi, 'FormattedValue'>]: string };
	/** Activity Id */
	msdyn_activityid: string | null;
	/** Correlation Id */
	msdyn_correlationid: string | null;
	/** End Time */
	msdyn_endtime_UtcDateAndTime: Date | null;
	/** Error Code */
	msdyn_errorcode: string | null;
	/** Exception Message */
	msdyn_exceptionmessage: string | null;
	/** Exception Stack */
	msdyn_exceptionstack: string | null;
	/** Managed */
	msdyn_ismanaged: boolean | null;
	/** Overwrite Customizations */
	msdyn_isoverwritecustomizations: boolean | null;
	/** Patch */
	msdyn_ispatch: boolean | null;
	/** Maximum number of retries. */
	msdyn_maxretries: number | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** Operation */
	msdyn_operation: number | null;
	/** Package Name */
	msdyn_packagename: string | null;
	/** Package Version */
	msdyn_packageversion: string | null;
	/** Publisher Id */
	msdyn_publisherid: string | null;
	/** Publisher Name */
	msdyn_publishername: string | null;
	/** Result */
	msdyn_result: boolean | null;
	/** Retry count */
	msdyn_retrycount: number | null;
	/** Comments associated with solution installation */
	msdyn_solutionhistorydescription: string | null;
	/** Unique identifier for entity instances */
	msdyn_solutionhistoryId: DevKit.Guid | null;
	/** Solution Id */
	msdyn_solutionid: string | null;
	/** Solution Version */
	msdyn_solutionversion: string | null;
	/** Start Time */
	msdyn_starttime_UtcDateAndTime: Date | null;
	/** Status */
	msdyn_status: number | null;
	/** Suboperation */
	msdyn_suboperation: number | null;
	/** Total Time (seconds) */
	msdyn_totaltime: number | null;
}

const msdyn_solutionhistoryFieldConfig: DevKit.IWebApiFieldConfigMap = {
	msdyn_activityid: { logicalName: 'msdyn_activityid' },
	msdyn_correlationid: { logicalName: 'msdyn_correlationid' },
	msdyn_endtime_UtcDateAndTime: { logicalName: 'msdyn_endtime', type: 'DateTime' },
	msdyn_errorcode: { logicalName: 'msdyn_errorcode' },
	msdyn_exceptionmessage: { logicalName: 'msdyn_exceptionmessage' },
	msdyn_exceptionstack: { logicalName: 'msdyn_exceptionstack' },
	msdyn_ismanaged: { logicalName: 'msdyn_ismanaged', type: 'Boolean' },
	msdyn_isoverwritecustomizations: { logicalName: 'msdyn_isoverwritecustomizations', type: 'Boolean' },
	msdyn_ispatch: { logicalName: 'msdyn_ispatch', type: 'Boolean' },
	msdyn_maxretries: { logicalName: 'msdyn_maxretries', type: 'Integer' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_operation: { logicalName: 'msdyn_operation', type: 'Integer' },
	msdyn_packagename: { logicalName: 'msdyn_packagename' },
	msdyn_packageversion: { logicalName: 'msdyn_packageversion' },
	msdyn_publisherid: { logicalName: 'msdyn_publisherid' },
	msdyn_publishername: { logicalName: 'msdyn_publishername' },
	msdyn_result: { logicalName: 'msdyn_result', type: 'Boolean' },
	msdyn_retrycount: { logicalName: 'msdyn_retrycount', type: 'Integer' },
	msdyn_solutionhistorydescription: { logicalName: 'msdyn_solutionhistorydescription' },
	msdyn_solutionhistoryId: { logicalName: 'msdyn_solutionhistoryid' },
	msdyn_solutionid: { logicalName: 'msdyn_solutionid' },
	msdyn_solutionversion: { logicalName: 'msdyn_solutionversion' },
	msdyn_starttime_UtcDateAndTime: { logicalName: 'msdyn_starttime', type: 'DateTime' },
	msdyn_status: { logicalName: 'msdyn_status', type: 'Integer' },
	msdyn_suboperation: { logicalName: 'msdyn_suboperation', type: 'Integer' },
	msdyn_totaltime: { logicalName: 'msdyn_totaltime', type: 'Integer' },
};

/**
 * msdyn_solutionhistory WebApi class for early-bound style coding
 * Usage: const msdyn_solutionhistory = new msdyn_solutionhistoryApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_solutionhistoryApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_solutionhistoryApi>(entity, 'msdyn_solutionhistory', 'msdyn_solutionhistories', msdyn_solutionhistoryFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_solutionhistoryApi extends Imsdyn_solutionhistoryApi { }
