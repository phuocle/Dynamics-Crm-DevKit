/**
 * ServicePlanAppModules.webapi.ts - ServicePlanAppModules WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ServicePlanAppModules
 * All fields return string representation of their values
 */
export interface IServicePlanAppModulesFormattedValue {
	readonly AppModuleId: string;
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly ServicePlanAppModulesId: string;
	readonly ServicePlanId: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly VersionNumber: string;
}

/**
 * ServicePlanAppModules WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IServicePlanAppModulesApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IServicePlanAppModulesFormattedValue;
	readonly AppModuleId: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	readonly ServicePlanAppModulesId: DevKit.Guid | null;
	readonly ServicePlanId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const ServicePlanAppModulesFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AppModuleId: { logicalName: 'appmoduleid', readOnly: true },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	ServicePlanAppModulesId: { logicalName: 'serviceplanappmodulesid', readOnly: true },
	ServicePlanId: { logicalName: 'serviceplanid', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ServicePlanAppModules WebApi class for early-bound style coding
 * Usage: const servicePlanAppModules = new ServicePlanAppModulesApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ServicePlanAppModulesApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IServicePlanAppModulesApi>(entity, 'serviceplanappmodules', '', ServicePlanAppModulesFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ServicePlanAppModulesApi extends IServicePlanAppModulesApi { }
