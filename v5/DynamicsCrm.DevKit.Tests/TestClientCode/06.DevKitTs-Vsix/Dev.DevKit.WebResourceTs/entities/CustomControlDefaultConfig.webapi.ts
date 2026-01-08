/**
 * CustomControlDefaultConfig.webapi.ts - CustomControlDefaultConfig WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * CustomControlDefaultConfig WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ICustomControlDefaultConfigApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ICustomControlDefaultConfigApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Custom control configuration data in JSON format. */
	ControlDescriptionJson: string | null;
	/** controlDescriptionXML of the custom control default config. */
	ControlDescriptionXML: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the Custom Control Default Config for the Microsoft Dynamics 365. */
	CustomControlDefaultConfigId: DevKit.Guid | null;
	/** For internal use only. */
	readonly CustomControlDefaultConfigIdUnique: DevKit.Guid | null;
	/** The events XML of the custom control default config. */
	EventsXml: string | null;
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the web resource. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Version number of the Custom Control Default Config. */
	readonly VersionNumber: number | null;
}

const CustomControlDefaultConfigFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ControlDescriptionJson: { logicalName: 'controldescriptionjson' },
	ControlDescriptionXML: { logicalName: 'controldescriptionxml' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomControlDefaultConfigId: { logicalName: 'customcontroldefaultconfigid' },
	CustomControlDefaultConfigIdUnique: { logicalName: 'customcontroldefaultconfigidunique', readOnly: true },
	EventsXml: { logicalName: 'eventsxml' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * CustomControlDefaultConfig WebApi class for early-bound style coding
 * Usage: const customControlDefaultConfig = new CustomControlDefaultConfigApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class CustomControlDefaultConfigApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ICustomControlDefaultConfigApi>(entity, 'customcontroldefaultconfig', 'customcontroldefaultconfigs', CustomControlDefaultConfigFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface CustomControlDefaultConfigApi extends ICustomControlDefaultConfigApi { }
