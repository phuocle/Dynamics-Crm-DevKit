/**
 * IsvConfig.webapi.ts - IsvConfig WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for IsvConfig
 * All fields return string representation of their values
 */
export interface IIsvConfigFormattedValue {
	readonly ConfigXML: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly IsvConfigId: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OrganizationId: string;
	readonly VersionNumber: string;
}

/**
 * IsvConfig WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IIsvConfigApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IIsvConfigFormattedValue;
	/** Structured XML data representing the customizations. */
	ConfigXML: string | null;
	/** Unique identifier of the user who created the ISV configuration. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the ISV configuration was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the isvconfig. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the ISV configuration. */
	IsvConfigId: DevKit.Guid | null;
	/** Unique identifier of the user who last modified the ISV configuration. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the ISV configuration was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the isvconfig. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the ISV configuration XML. */
	readonly OrganizationId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const IsvConfigFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ConfigXML: { logicalName: 'configxml' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	IsvConfigId: { logicalName: 'isvconfigid' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * IsvConfig WebApi class for early-bound style coding
 * Usage: const isvConfig = new IsvConfigApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class IsvConfigApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IIsvConfigApi>(entity, 'isvconfig', 'isvconfigs', IsvConfigFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface IsvConfigApi extends IIsvConfigApi { }
