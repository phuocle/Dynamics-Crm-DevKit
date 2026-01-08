/**
 * GlobalSearchConfiguration.webapi.ts - GlobalSearchConfiguration WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for GlobalSearchConfiguration
 * All fields return string representation of their values
 */
export interface IGlobalSearchConfigurationFormattedValue {
	readonly ComponentState: string;
	readonly GlobalSearchConfigurationId: string;
	readonly GlobalSearchConfigurationidUnique: string;
	readonly IsEnabled: string;
	readonly IsLocalized: string;
	readonly IsManaged: string;
	readonly IsSearchBoxVisible: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly SearchProviderName: string;
	readonly SearchProviderResultsPage: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
}

/**
 * GlobalSearchConfiguration WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IGlobalSearchConfigurationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IGlobalSearchConfigurationFormattedValue;
	/** For internal use only. */
	readonly ComponentState: number | null;
	GlobalSearchConfigurationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly GlobalSearchConfigurationidUnique: DevKit.Guid | null;
	/** Information that specifies whether the specified search is enabled. */
	IsEnabled: boolean | null;
	/** Information that specifies whether the search logical name is localized. */
	IsLocalized: boolean | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Information that specifies whether the Search Box is visible. */
	IsSearchBoxVisible: boolean | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	SearchProviderName: string | null;
	SearchProviderResultsPage: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
}

const GlobalSearchConfigurationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	GlobalSearchConfigurationId: { logicalName: 'globalsearchconfigurationid' },
	GlobalSearchConfigurationidUnique: { logicalName: 'globalsearchconfigurationidunique', readOnly: true },
	IsEnabled: { logicalName: 'isenabled', type: 'Boolean' },
	IsLocalized: { logicalName: 'islocalized', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	IsSearchBoxVisible: { logicalName: 'issearchboxvisible', type: 'Boolean' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SearchProviderName: { logicalName: 'searchprovidername' },
	SearchProviderResultsPage: { logicalName: 'searchproviderresultspage' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
};

/**
 * GlobalSearchConfiguration WebApi class for early-bound style coding
 * Usage: const globalSearchConfiguration = new GlobalSearchConfigurationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class GlobalSearchConfigurationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IGlobalSearchConfigurationApi>(entity, 'globalsearchconfiguration', 'globalsearchconfigurations', GlobalSearchConfigurationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface GlobalSearchConfigurationApi extends IGlobalSearchConfigurationApi { }
