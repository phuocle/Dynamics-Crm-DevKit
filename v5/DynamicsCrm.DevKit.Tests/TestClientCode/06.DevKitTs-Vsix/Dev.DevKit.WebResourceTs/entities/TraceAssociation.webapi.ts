/**
 * TraceAssociation.webapi.ts - TraceAssociation WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for TraceAssociation
 * All fields return string representation of their values
 */
export interface ITraceAssociationFormattedValue {
	readonly OrganizationId: string;
	readonly RegardingObjectId: string;
	readonly TraceAssociationId: string;
	readonly TraceLogId: string;
}

/**
 * TraceAssociation WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ITraceAssociationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ITraceAssociationFormattedValue;
	/** Unique identifier of the organization associated with the trace association. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Unique identifier of the object the trace association is regarding. */
	RegardingObjectId: DevKit.Guid | null;
	/** Unique identifier of the trace association. */
	TraceAssociationId: DevKit.Guid | null;
	/** Unique identifier of the trace. */
	TraceLogId: DevKit.Guid | null;
}

const TraceAssociationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	RegardingObjectId: { logicalName: 'regardingobjectid' },
	TraceAssociationId: { logicalName: 'traceassociationid' },
	TraceLogId: { schemaName: 'TraceLogId', logicalName: '_tracelogid_value', entityCollectionName: 'tracelogs', entityLogicalName: 'tracelog' },
};

/**
 * TraceAssociation WebApi class for early-bound style coding
 * Usage: const traceAssociation = new TraceAssociationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class TraceAssociationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ITraceAssociationApi>(entity, 'traceassociation', 'traceassociations', TraceAssociationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface TraceAssociationApi extends ITraceAssociationApi { }
