/**
 * DependencyFeature.webapi.ts - DependencyFeature WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for DependencyFeature
 * All fields return string representation of their values
 */
export interface IDependencyFeatureFormattedValue {
	readonly ComponentState: string;
	readonly DependencyFeatureId: string;
	readonly DependencyFeatureIdUnique: string;
	readonly IntroducedVersion: string;
	readonly IsManaged: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
}

/**
 * DependencyFeature WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IDependencyFeatureApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IDependencyFeatureFormattedValue;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of a dependency feature. */
	readonly DependencyFeatureId: DevKit.Guid | null;
	/** For internal use only. */
	readonly DependencyFeatureIdUnique: DevKit.Guid | null;
	/** Version in which the feature is introduced. */
	IntroducedVersion: string | null;
	/** Tells whether the record is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
}

const DependencyFeatureFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	DependencyFeatureId: { logicalName: 'dependencyfeatureid', readOnly: true },
	DependencyFeatureIdUnique: { logicalName: 'dependencyfeatureidunique', readOnly: true },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
};

/**
 * DependencyFeature WebApi class for early-bound style coding
 * Usage: const dependencyFeature = new DependencyFeatureApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class DependencyFeatureApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IDependencyFeatureApi>(entity, 'dependencyfeature', 'dependencyfeatures', DependencyFeatureFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface DependencyFeatureApi extends IDependencyFeatureApi { }
