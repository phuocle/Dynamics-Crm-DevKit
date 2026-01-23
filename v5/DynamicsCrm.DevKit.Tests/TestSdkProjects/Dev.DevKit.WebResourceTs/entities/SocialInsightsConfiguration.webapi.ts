/**
 * SocialInsightsConfiguration.webapi.ts - SocialInsightsConfiguration WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SocialInsightsConfiguration WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISocialInsightsConfigurationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISocialInsightsConfigurationApi, 'FormattedValue'>]: string };
	/** Id of the control. */
	ControlId: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the form with which the like is associated. */
	FormId: DevKit.Guid | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier of the organization associated with the solution. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Unique identifier of the associated record. */
	RegardingObjectId: DevKit.Guid | null;
	/** Data Item Id for social data. */
	SocialDataItemId: string | null;
	/** Type of social data item. */
	SocialDataItemType: number | null;
	/** Parameters used to render social data. */
	SocialDataParameters: string | null;
	/** Shows the ID of the social insights configuration. */
	SocialInsightsConfigurationId: DevKit.Guid | null;
}

const SocialInsightsConfigurationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ControlId: { logicalName: 'controlid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	FormId: { schemaName: 'FormId', logicalName: '_formid_value', entityCollectionName: 'posts', entityLogicalName: 'post' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	RegardingObjectId: { logicalName: 'regardingobjectid' },
	SocialDataItemId: { logicalName: 'socialdataitemid' },
	SocialDataItemType: { logicalName: 'socialdataitemtype', type: 'Integer' },
	SocialDataParameters: { logicalName: 'socialdataparameters' },
	SocialInsightsConfigurationId: { logicalName: 'socialinsightsconfigurationid' },
};

/**
 * SocialInsightsConfiguration WebApi class for early-bound style coding
 * Usage: const socialInsightsConfiguration = new SocialInsightsConfigurationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SocialInsightsConfigurationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISocialInsightsConfigurationApi>(entity, 'socialinsightsconfiguration', 'socialinsightsconfigurations', SocialInsightsConfigurationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SocialInsightsConfigurationApi extends ISocialInsightsConfigurationApi { }
