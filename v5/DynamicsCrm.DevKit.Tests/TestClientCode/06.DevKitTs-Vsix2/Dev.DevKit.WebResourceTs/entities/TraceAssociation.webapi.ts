/**
 * TraceAssociation.webapi.ts - TraceAssociation WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * TraceAssociation WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ITraceAssociationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ITraceAssociationApi, 'FormattedValue'>]: string };
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
