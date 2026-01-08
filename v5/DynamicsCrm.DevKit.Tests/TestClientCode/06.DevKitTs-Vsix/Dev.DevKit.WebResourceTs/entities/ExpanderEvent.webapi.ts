/**
 * ExpanderEvent.webapi.ts - ExpanderEvent WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ExpanderEvent
 * All fields return string representation of their values
 */
export interface IExpanderEventFormattedValue {
	readonly ContextUri: string;
	readonly CorrelationId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ExpanderEventId: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OrganizationId: string;
	readonly Registrations: string;
	readonly VersionNumber: string;
}

/**
 * ExpanderEvent WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IExpanderEventApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IExpanderEventFormattedValue;
	/** The URI where the context is stored. */
	ContextUri: string | null;
	/** Unique identifier used to correlate between expander events and SDK message invocations. */
	CorrelationId: DevKit.Guid | null;
	/** Unique identifier of the user who created the event. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the event was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the event. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the expander event. */
	ExpanderEventId: DevKit.Guid | null;
	/** Unique identifier of the user who last modified the event. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the event was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the event. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the event. */
	Name: string | null;
	/** Unique identifier of the organization with which the event is associated. */
	readonly OrganizationId: DevKit.Guid | null;
	/** The workloads that have registered to send an event. */
	Registrations: string | null;
	/** Version number of the event. */
	readonly VersionNumber: number | null;
}

const ExpanderEventFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ContextUri: { logicalName: 'contexturi' },
	CorrelationId: { logicalName: 'correlationid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ExpanderEventId: { logicalName: 'expandereventid' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	Registrations: { logicalName: 'registrations' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * ExpanderEvent WebApi class for early-bound style coding
 * Usage: const expanderEvent = new ExpanderEventApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ExpanderEventApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IExpanderEventApi>(entity, 'expanderevent', 'expanderevents', ExpanderEventFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ExpanderEventApi extends IExpanderEventApi { }
