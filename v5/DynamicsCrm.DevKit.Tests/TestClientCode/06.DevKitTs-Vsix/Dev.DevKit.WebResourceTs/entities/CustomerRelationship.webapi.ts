/**
 * CustomerRelationship.webapi.ts - CustomerRelationship WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for CustomerRelationship
 * All fields return string representation of their values
 */
export interface ICustomerRelationshipFormattedValue {
	readonly ConverseRelationshipId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly CustomerId: string;
	readonly CustomerRelationshipId: string;
	readonly CustomerRoleDescription: string;
	readonly CustomerRoleId: string;
	readonly ImportSequenceNumber: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly PartnerId: string;
	readonly PartnerRoleDescription: string;
	readonly PartnerRoleId: string;
	readonly UniqueDscId: string;
	readonly VersionNumber: string;
}

/**
 * CustomerRelationship WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ICustomerRelationshipApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ICustomerRelationshipFormattedValue;
	/** Unique identifier of the converse relationship of the customer relationship. */
	ConverseRelationshipId: DevKit.Guid | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the customer relationship was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Select the primary account or contact involved in the customer relationship. */
	CustomerId: DevKit.Guid | null;
	/** Unique identifier of the customer relationship. */
	CustomerRelationshipId: DevKit.Guid | null;
	/** Type additional information about the primary party's role in the customer relationship, such as the length or quality of the relationship. */
	CustomerRoleDescription: string | null;
	/** Choose the primary party's role or nature of the relationship the customer has with the second party. The field is read-only until both parties have been selected. Administrators can configure role values under Business Management in the Settings area. */
	CustomerRoleId: DevKit.Guid | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the customer relationship. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the customer relationship. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the customer relationship. */
	readonly OwningUser: DevKit.Guid | null;
	/** Select the secondary account or contact involved in the customer relationship. */
	PartnerId: DevKit.Guid | null;
	/** Type additional information about the secondary party's role in the customer relationship, such as the length or quality of the relationship. */
	PartnerRoleDescription: string | null;
	/** Choose the secondary party's role or nature of the relationship the customer has with the primary party. The field is read-only until both parties have been selected. Administrators can configure role values under Business Management in the Settings area. */
	PartnerRoleId: DevKit.Guid | null;
	/** For internal use only. */
	readonly UniqueDscId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
}

const CustomerRelationshipFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ConverseRelationshipId: { schemaName: 'ConverseRelationshipId', logicalName: '_converserelationshipid_value', entityCollectionName: 'customerrelationships', entityLogicalName: 'customerrelationship' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CustomerId: { schemaName: 'CustomerId', logicalName: '_customerid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	CustomerRelationshipId: { logicalName: 'customerrelationshipid' },
	CustomerRoleDescription: { logicalName: 'customerroledescription' },
	CustomerRoleId: { schemaName: 'CustomerRoleId', logicalName: '_customerroleid_value', entityCollectionName: 'relationshiproles', entityLogicalName: 'relationshiprole' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PartnerId: { schemaName: 'PartnerId', logicalName: '_partnerid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	PartnerRoleDescription: { logicalName: 'partnerroledescription' },
	PartnerRoleId: { schemaName: 'PartnerRoleId', logicalName: '_partnerroleid_value', entityCollectionName: 'relationshiproles', entityLogicalName: 'relationshiprole' },
	UniqueDscId: { logicalName: 'uniquedscid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * CustomerRelationship WebApi class for early-bound style coding
 * Usage: const customerRelationship = new CustomerRelationshipApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class CustomerRelationshipApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ICustomerRelationshipApi>(entity, 'customerrelationship', 'customerrelationships', CustomerRelationshipFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface CustomerRelationshipApi extends ICustomerRelationshipApi { }
