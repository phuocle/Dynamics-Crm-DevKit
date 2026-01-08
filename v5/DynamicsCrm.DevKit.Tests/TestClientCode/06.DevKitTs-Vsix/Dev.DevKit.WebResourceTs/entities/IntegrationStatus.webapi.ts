/**
 * IntegrationStatus.webapi.ts - IntegrationStatus WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * IntegrationStatus WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IIntegrationStatusApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IIntegrationStatusApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the integration status. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the integration status was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the integrationstatus. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** For internal use only. */
	IntegrationEntryId: DevKit.Guid | null;
	/** Unique identifier of the user who last modified the integration status. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the integration status was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the integrationstatus. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** For internal use only. */
	readonly ObjectId: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the integration status. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Status of the integration. */
	StateCode: number | null;
	/** For internal use only. */
	StateDescription: string | null;
	/** Reason for the status of the integration. */
	StatusCode: number | null;
	/** For internal use only. */
	StatusDescription: string | null;
	/** For internal use only. */
	readonly SystemName: string | null;
	readonly VersionNumber: number | null;
}

const IntegrationStatusFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	IntegrationEntryId: { logicalName: 'integrationentryid' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ObjectId: { logicalName: 'objectid', readOnly: true },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StateDescription: { logicalName: 'statedescription' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	StatusDescription: { logicalName: 'statusdescription' },
	SystemName: { logicalName: 'systemname', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * IntegrationStatus WebApi class for early-bound style coding
 * Usage: const integrationStatus = new IntegrationStatusApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class IntegrationStatusApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IIntegrationStatusApi>(entity, 'integrationstatus', 'integrationstatuses', IntegrationStatusFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface IntegrationStatusApi extends IIntegrationStatusApi { }
