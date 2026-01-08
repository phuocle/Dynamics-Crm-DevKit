/**
 * OptionSet.webapi.ts - OptionSet WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * OptionSet WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IOptionSetApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IOptionSetApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** The name of this OptionSet. */
	Name: string | null;
	/** Unique identifier of the attribute. */
	OptionSetId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
}

const OptionSetFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	Name: { logicalName: 'name' },
	OptionSetId: { logicalName: 'optionsetid' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
};

/**
 * OptionSet WebApi class for early-bound style coding
 * Usage: const optionSet = new OptionSetApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class OptionSetApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IOptionSetApi>(entity, 'optionset', 'optionsets', OptionSetFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface OptionSetApi extends IOptionSetApi { }
