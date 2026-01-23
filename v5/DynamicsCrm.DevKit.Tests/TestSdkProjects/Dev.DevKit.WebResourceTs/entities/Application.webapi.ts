/**
 * Application.webapi.ts - Application WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Application WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IApplicationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IApplicationApi, 'FormattedValue'>]: string };
	/** Application Access */
	Access: number | null;
	/** Unique identifier: Microsoft Entra application id */
	ApplicationId: DevKit.Guid | null;
	/** Indicates if the application is commonly used */
	CommonlyUsed: boolean | null;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** The name of the Application. */
	Name: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
}

const ApplicationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Access: { logicalName: 'access', type: 'Integer' },
	ApplicationId: { logicalName: 'applicationid' },
	CommonlyUsed: { logicalName: 'commonlyused', type: 'Boolean' },
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { logicalName: 'createdby', readOnly: true },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { logicalName: 'createdonbehalfby', readOnly: true },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { logicalName: 'modifiedby', readOnly: true },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { logicalName: 'modifiedonbehalfby', readOnly: true },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
};

/**
 * Application WebApi class for early-bound style coding
 * Usage: const application = new ApplicationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ApplicationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IApplicationApi>(entity, 'application', 'applications', ApplicationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ApplicationApi extends IApplicationApi { }
