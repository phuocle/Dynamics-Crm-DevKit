/**
 * MultiSelectAttributeOptionValues.webapi.ts - MultiSelectAttributeOptionValues WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * MultiSelectAttributeOptionValues WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IMultiSelectAttributeOptionValuesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IMultiSelectAttributeOptionValuesApi, 'FormattedValue'>]: string };
	readonly MultiSelectFullTextIdKey: number | null;
	/** Object Column Number */
	readonly ObjectColumnNumber: number | null;
	/** Object Id */
	ObjectId: DevKit.Guid | null;
	/** Multi Select Option Values */
	SelectedOptionValues: string | null;
}

const MultiSelectAttributeOptionValuesFieldConfig: DevKit.IWebApiFieldConfigMap = {
	MultiSelectFullTextIdKey: { logicalName: 'multiselectfulltextidkey', readOnly: true, type: 'Integer' },
	ObjectColumnNumber: { logicalName: 'objectcolumnnumber', readOnly: true, type: 'Integer' },
	ObjectId: { logicalName: 'objectid' },
	SelectedOptionValues: { logicalName: 'selectedoptionvalues' },
};

/**
 * MultiSelectAttributeOptionValues WebApi class for early-bound style coding
 * Usage: const multiSelectAttributeOptionValues = new MultiSelectAttributeOptionValuesApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class MultiSelectAttributeOptionValuesApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IMultiSelectAttributeOptionValuesApi>(entity, 'multiselectattributeoptionvalues', 'multiselectattributeoptionvaluescollection', MultiSelectAttributeOptionValuesFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface MultiSelectAttributeOptionValuesApi extends IMultiSelectAttributeOptionValuesApi { }
