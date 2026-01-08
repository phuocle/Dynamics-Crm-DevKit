/**
 * FilterTemplate.webapi.ts - FilterTemplate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for FilterTemplate
 * All fields return string representation of their values
 */
export interface IFilterTemplateFormattedValue {
	readonly Description: string;
	readonly FetchXml: string;
	readonly FilterTemplateId: string;
	readonly Name: string;
	readonly QueryType: string;
}

/**
 * FilterTemplate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IFilterTemplateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IFilterTemplateFormattedValue;
	/** For internal use only. */
	Description: string | null;
	/** String that specifies the filter template in Fetch XML language. */
	FetchXml: string | null;
	/** Unique identifier of the filter template. */
	FilterTemplateId: DevKit.Guid | null;
	/** Name of the filter template. */
	Name: string | null;
	/** For internal use only. */
	QueryType: number | null;
}

const FilterTemplateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Description: { logicalName: 'description' },
	FetchXml: { logicalName: 'fetchxml' },
	FilterTemplateId: { logicalName: 'filtertemplateid' },
	Name: { logicalName: 'name' },
	QueryType: { logicalName: 'querytype', type: 'Integer' },
};

/**
 * FilterTemplate WebApi class for early-bound style coding
 * Usage: const filterTemplate = new FilterTemplateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class FilterTemplateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IFilterTemplateApi>(entity, 'filtertemplate', 'filtertemplates', FilterTemplateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface FilterTemplateApi extends IFilterTemplateApi { }
