/**
 * sensitivitylabel.webapi.ts - sensitivitylabel WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for sensitivitylabel
 * All fields return string representation of their values
 */
export interface IsensitivitylabelFormattedValue {
	readonly ApplicableTo: string;
	readonly Color: string;
	readonly Description: string;
	readonly DisplayName: string;
	readonly IsDefault: string;
	readonly IsEnabled: string;
	readonly LabelActions: string;
	readonly Name: string;
	readonly ParentSensitivityLabelId: string;
	readonly Priority: string;
	readonly sensitivitylabelId: string;
	readonly Tooltip: string;
}

/**
 * sensitivitylabel WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IsensitivitylabelApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IsensitivitylabelFormattedValue;
	/** The formats that the sensitivity label is applicable to. */
	readonly ApplicableTo: string | null;
	/** The color of the sensitivity label. */
	readonly Color: string | null;
	/** The description of the sensitivity label. */
	readonly Description: string | null;
	/** The display name of the sensitivity label. */
	readonly DisplayName: string | null;
	/** Indicates if the sensitivity label is the default. */
	readonly IsDefault: boolean | null;
	/** Indicates if the sensitivity label is enabled. */
	readonly IsEnabled: boolean | null;
	/** The label actions of the sensitivity label. */
	readonly LabelActions: string | null;
	/** The name of the sensitivity label. */
	readonly Name: string | null;
	/** Unique identifier of a parent sensitivity label. */
	readonly ParentSensitivityLabelId: DevKit.Guid | null;
	/** The priority of the sensitivity label. */
	readonly Priority: number | null;
	/** Unique identifier of a Sensitivity Label. */
	readonly sensitivitylabelId: DevKit.Guid | null;
	/** The tooltip of the sensitivity label. */
	readonly Tooltip: string | null;
}

const sensitivitylabelFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ApplicableTo: { logicalName: 'applicableto', readOnly: true },
	Color: { logicalName: 'color', readOnly: true },
	Description: { logicalName: 'description', readOnly: true },
	DisplayName: { logicalName: 'displayname', readOnly: true },
	IsDefault: { logicalName: 'isdefault', readOnly: true, type: 'Boolean' },
	IsEnabled: { logicalName: 'isenabled', readOnly: true, type: 'Boolean' },
	LabelActions: { logicalName: 'labelactions', readOnly: true },
	Name: { logicalName: 'name', readOnly: true },
	ParentSensitivityLabelId: { logicalName: 'parentsensitivitylabelid', readOnly: true },
	Priority: { logicalName: 'priority', readOnly: true, type: 'Integer' },
	sensitivitylabelId: { logicalName: 'sensitivitylabelid', readOnly: true },
	Tooltip: { logicalName: 'tooltip', readOnly: true },
};

/**
 * sensitivitylabel WebApi class for early-bound style coding
 * Usage: const sensitivitylabel = new sensitivitylabelApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class sensitivitylabelApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IsensitivitylabelApi>(entity, 'sensitivitylabel', 'sensitivitylabels', sensitivitylabelFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface sensitivitylabelApi extends IsensitivitylabelApi { }
