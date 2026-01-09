/**
 * InvalidDependency.webapi.ts - InvalidDependency WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * InvalidDependency WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IInvalidDependencyApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IInvalidDependencyApi, 'FormattedValue'>]: string };
	/** Unique identifier of the object that has an invalid dependency */
	readonly ExistingComponentId: DevKit.Guid | null;
	/** Component type of the object that has an invalid dependency */
	readonly ExistingComponentType: number | null;
	/** The dependency type of the invalid dependency. */
	readonly ExistingDependencyType: number | null;
	/** Unique identifier of the invalid dependency. */
	readonly InvalidDependencyId: DevKit.Guid | null;
	/** Indicates whether the existing node is the required component in the dependency */
	readonly IsExistingNodeRequiredComponent: boolean | null;
	/** Unique identifier of the missing component. */
	MissingComponentId: DevKit.Guid | null;
	readonly MissingComponentInfo: string | null;
	/** The lookup type of the missing component. */
	readonly MissingComponentLookupType: number | null;
	/** The object type code of the missing component. */
	readonly MissingComponentType: number | null;
}

const InvalidDependencyFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ExistingComponentId: { logicalName: 'existingcomponentid', readOnly: true },
	ExistingComponentType: { logicalName: 'existingcomponenttype', readOnly: true, type: 'Integer' },
	ExistingDependencyType: { logicalName: 'existingdependencytype', readOnly: true, type: 'Integer' },
	InvalidDependencyId: { logicalName: 'invaliddependencyid', readOnly: true },
	IsExistingNodeRequiredComponent: { logicalName: 'isexistingnoderequiredcomponent', readOnly: true, type: 'Boolean' },
	MissingComponentId: { logicalName: 'missingcomponentid' },
	MissingComponentInfo: { logicalName: 'missingcomponentinfo', readOnly: true },
	MissingComponentLookupType: { logicalName: 'missingcomponentlookuptype', readOnly: true, type: 'Integer' },
	MissingComponentType: { logicalName: 'missingcomponenttype', readOnly: true, type: 'Integer' },
};

/**
 * InvalidDependency WebApi class for early-bound style coding
 * Usage: const invalidDependency = new InvalidDependencyApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class InvalidDependencyApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IInvalidDependencyApi>(entity, 'invaliddependency', 'invaliddependencies', InvalidDependencyFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface InvalidDependencyApi extends IInvalidDependencyApi { }
