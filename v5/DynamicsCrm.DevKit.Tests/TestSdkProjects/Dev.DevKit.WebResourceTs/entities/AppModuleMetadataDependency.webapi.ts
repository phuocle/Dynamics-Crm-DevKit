/**
 * AppModuleMetadataDependency.webapi.ts - AppModuleMetadataDependency WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * AppModuleMetadataDependency WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAppModuleMetadataDependencyApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IAppModuleMetadataDependencyApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	AppModuleMetadataDependencyId: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** For internal use only. */
	DependentComponentId: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** For internal use only. */
	RequiredComponentId: DevKit.Guid | null;
	/** For internal use only. */
	RequiredComponentInternalId: string | null;
	/** For internal use only. */
	RequiredComponentSubType: number | null;
	/** For internal use only. */
	RequiredComponentType: number | null;
	/** For internal use only. */
	RequiredComponentVersion: number | null;
	/** For internal use only. */
	State: number | null;
}

const AppModuleMetadataDependencyFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AppModuleMetadataDependencyId: { logicalName: 'appmodulemetadatadependencyid' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	DependentComponentId: { logicalName: 'dependentcomponentid' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	RequiredComponentId: { logicalName: 'requiredcomponentid' },
	RequiredComponentInternalId: { logicalName: 'requiredcomponentinternalid' },
	RequiredComponentSubType: { logicalName: 'requiredcomponentsubtype', type: 'Integer' },
	RequiredComponentType: { logicalName: 'requiredcomponenttype', type: 'Integer' },
	RequiredComponentVersion: { logicalName: 'requiredcomponentversion', type: 'Integer' },
	State: { logicalName: 'state', type: 'Integer' },
};

/**
 * AppModuleMetadataDependency WebApi class for early-bound style coding
 * Usage: const appModuleMetadataDependency = new AppModuleMetadataDependencyApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AppModuleMetadataDependencyApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAppModuleMetadataDependencyApi>(entity, 'appmodulemetadatadependency', 'appmodulemetadatadependencycollection', AppModuleMetadataDependencyFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AppModuleMetadataDependencyApi extends IAppModuleMetadataDependencyApi { }
