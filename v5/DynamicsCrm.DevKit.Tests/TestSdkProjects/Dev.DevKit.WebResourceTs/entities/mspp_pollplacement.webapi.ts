/**
 * mspp_pollplacement.webapi.ts - mspp_pollplacement WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * mspp_pollplacement WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imspp_pollplacementApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imspp_pollplacementApi, 'FormattedValue'>]: string };
	/** Shows who created the record. */
	mspp_createdby: DevKit.Guid | null;
	/** Shows the date and time when the record was created. */
	mspp_createdon_UtcDateAndTime: Date | null;
	/** Shows who last updated the record. */
	mspp_modifiedby: DevKit.Guid | null;
	/** Shows the date and time when the record was modified. */
	mspp_modifiedon_UtcDateAndTime: Date | null;
	/** The name of the custom entity. */
	mspp_name: string | null;
	/** Unique identifier for entity instances */
	mspp_pollplacementId: DevKit.Guid | null;
	/** Unique identifier for Website associated with Poll Placement. */
	mspp_websiteid: DevKit.Guid | null;
	/** Unique identifier for Web Template associated with Poll Placement. */
	mspp_webtemplateid: DevKit.Guid | null;
	/** Status of the Poll Placement */
	statecode: number | null;
	/** Reason for the status of the Poll Placement */
	statuscode: number | null;
}

const mspp_pollplacementFieldConfig: DevKit.IWebApiFieldConfigMap = {
	mspp_createdby: { schemaName: 'mspp_createdby', logicalName: '_mspp_createdby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_createdon_UtcDateAndTime: { logicalName: 'mspp_createdon', type: 'DateTime' },
	mspp_modifiedby: { schemaName: 'mspp_modifiedby', logicalName: '_mspp_modifiedby_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_modifiedon_UtcDateAndTime: { logicalName: 'mspp_modifiedon', type: 'DateTime' },
	mspp_name: { logicalName: 'mspp_name' },
	mspp_pollplacementId: { logicalName: 'mspp_pollplacementid' },
	mspp_websiteid: { schemaName: 'mspp_websiteid', logicalName: '_mspp_websiteid_value', entityCollectionName: 'mspp_websites', entityLogicalName: 'mspp_website' },
	mspp_webtemplateid: { schemaName: 'mspp_webtemplateid', logicalName: '_mspp_webtemplateid_value', entityCollectionName: 'mspp_webtemplates', entityLogicalName: 'mspp_webtemplate' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
};

/**
 * mspp_pollplacement WebApi class for early-bound style coding
 * Usage: const mspp_pollplacement = new mspp_pollplacementApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mspp_pollplacementApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imspp_pollplacementApi>(entity, 'mspp_pollplacement', 'mspp_pollplacements', mspp_pollplacementFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mspp_pollplacementApi extends Imspp_pollplacementApi { }
