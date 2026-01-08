/**
 * ComplexControl.webapi.ts - ComplexControl WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ComplexControl
 * All fields return string representation of their values
 */
export interface IComplexControlFormattedValue {
	readonly ComplexControlId: string;
	readonly ComplexControlIdUnique: string;
	readonly ComplexControlXml: string;
	readonly ComponentState: string;
	readonly Description: string;
	readonly IntroducedVersion: string;
	readonly IsManaged: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly SolutionId: string;
	readonly SupportingSolutionId: string;
	readonly Type: string;
	readonly Version: string;
	readonly VersionNumber: string;
}

/**
 * ComplexControl WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IComplexControlApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IComplexControlFormattedValue;
	/** Unique identifier of the complex control. */
	ComplexControlId: DevKit.Guid | null;
	/** Unique identifier of the form used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook. */
	readonly ComplexControlIdUnique: DevKit.Guid | null;
	/** XML representation of the complex control layout. */
	ComplexControlXml: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Description of the complex control. */
	Description: string | null;
	/** Version in which the component is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this component is managed. */
	readonly IsManaged: boolean | null;
	/** Name of the complex control. */
	Name: string | null;
	/** Unique identifier of the organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Type of the complex control, for example, Process Control or Link Control. */
	Type: number | null;
	/** For internal use only. */
	Version: number | null;
	/** Represents a version of customizations to be synchronized with the Microsoft Dynamics 365 client for Outlook. */
	readonly VersionNumber: number | null;
}

const ComplexControlFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComplexControlId: { logicalName: 'complexcontrolid' },
	ComplexControlIdUnique: { logicalName: 'complexcontrolidunique', readOnly: true },
	ComplexControlXml: { logicalName: 'complexcontrolxml' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	Description: { logicalName: 'description' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	Type: { logicalName: 'type', type: 'Integer' },
	Version: { logicalName: 'version', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ComplexControl WebApi class for early-bound style coding
 * Usage: const complexControl = new ComplexControlApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ComplexControlApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IComplexControlApi>(entity, 'complexcontrol', 'complexcontrols', ComplexControlFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ComplexControlApi extends IComplexControlApi { }
