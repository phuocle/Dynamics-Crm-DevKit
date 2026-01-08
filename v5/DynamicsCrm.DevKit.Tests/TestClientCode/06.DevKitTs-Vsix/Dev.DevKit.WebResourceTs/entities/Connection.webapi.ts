/**
 * Connection.webapi.ts - Connection WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for Connection
 * All fields return string representation of their values
 */
export interface IConnectionFormattedValue {
	readonly ConnectionId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly Description: string;
	readonly EffectiveEnd_UtcDateOnly: string;
	readonly EffectiveStart_UtcDateOnly: string;
	readonly EntityImage: string;
	readonly EntityImageId: string;
	readonly ExchangeRate: string;
	readonly ImportSequenceNumber: string;
	readonly IsMaster: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly Record1Id: string;
	readonly Record1ObjectTypeCode: string;
	readonly Record1RoleId: string;
	readonly Record2Id: string;
	readonly Record2ObjectTypeCode: string;
	readonly Record2RoleId: string;
	readonly RelatedConnectionId: string;
	readonly StateCode: string;
	readonly StatusCode: string;
	readonly TransactionCurrencyId: string;
	readonly VersionNumber: string;
}

/**
 * Connection WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IConnectionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IConnectionFormattedValue;
	/** Unique identifier of the connection. */
	ConnectionId: DevKit.Guid | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Type additional information to describe the connection, such as the length or quality of the relationship. */
	Description: string | null;
	/** Enter the end date of the connection. */
	EffectiveEnd_UtcDateOnly: Date | null;
	/** Enter the start date of the connection. */
	EffectiveStart_UtcDateOnly: Date | null;
	/** The default image for the entity. */
	EntityImage: string | null;
	/** For internal use only. */
	readonly EntityImageId: DevKit.Guid | null;
	/** Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. */
	readonly ExchangeRate: number | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Indicates that this is the master record. */
	readonly IsMaster: boolean | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the connection. */
	readonly Name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
	OwnerId: DevKit.Guid | null;
	/** Shows the business unit that the record owner belongs to. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the connection. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the connection. */
	readonly OwningUser: DevKit.Guid | null;
	/** Choose the primary account, contact, or other record involved in the connection. */
	Record1Id: DevKit.Guid | null;
	/** Shows the record type of the source record. */
	readonly Record1ObjectTypeCode: number | null;
	/** Choose the primary party's role or relationship with the second party. */
	Record1RoleId: DevKit.Guid | null;
	/** Select the secondary account, contact, or other record involved in the connection. */
	Record2Id: DevKit.Guid | null;
	/** Shows the record type of the target record. */
	readonly Record2ObjectTypeCode: number | null;
	/** Choose the secondary party's role or relationship with the primary party. */
	Record2RoleId: DevKit.Guid | null;
	/** Unique identifier for the reciprocal connection record. */
	readonly RelatedConnectionId: DevKit.Guid | null;
	/** Shows whether the connection is active or inactive. Inactive connections are read-only and can't be edited unless they are reactivated. */
	StateCode: number | null;
	/** Reason for the status of the connection. */
	StatusCode: number | null;
	/** Choose the local currency for the record to make sure budgets are reported in the correct currency. */
	TransactionCurrencyId: DevKit.Guid | null;
	/** Version number of the connection. */
	readonly VersionNumber: number | null;
}

const ConnectionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ConnectionId: { logicalName: 'connectionid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	EffectiveEnd_UtcDateOnly: { logicalName: 'effectiveend', type: 'DateTime' },
	EffectiveStart_UtcDateOnly: { logicalName: 'effectivestart', type: 'DateTime' },
	EntityImage: { logicalName: 'entityimage' },
	EntityImageId: { logicalName: 'entityimageid', readOnly: true },
	ExchangeRate: { logicalName: 'exchangerate', readOnly: true, type: 'Number' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsMaster: { logicalName: 'ismaster', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name', readOnly: true },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Record1Id: { schemaName: 'Record1Id', logicalName: '_record1id_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	Record1ObjectTypeCode: { logicalName: 'record1objecttypecode', readOnly: true, type: 'Integer' },
	Record1RoleId: { schemaName: 'Record1RoleId', logicalName: '_record1roleid_value', entityCollectionName: 'connectionroles', entityLogicalName: 'connectionrole' },
	Record2Id: { schemaName: 'Record2Id', logicalName: '_record2id_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	Record2ObjectTypeCode: { logicalName: 'record2objecttypecode', readOnly: true, type: 'Integer' },
	Record2RoleId: { schemaName: 'Record2RoleId', logicalName: '_record2roleid_value', entityCollectionName: 'connectionroles', entityLogicalName: 'connectionrole' },
	RelatedConnectionId: { schemaName: 'RelatedConnectionId', logicalName: '_relatedconnectionid_value', readOnly: true, entityCollectionName: 'connections', entityLogicalName: 'connection' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	TransactionCurrencyId: { schemaName: 'TransactionCurrencyId', logicalName: '_transactioncurrencyid_value', entityCollectionName: 'transactioncurrencies', entityLogicalName: 'transactioncurrency' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * Connection WebApi class for early-bound style coding
 * Usage: const connection = new ConnectionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ConnectionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IConnectionApi>(entity, 'connection', 'connections', ConnectionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ConnectionApi extends IConnectionApi { }
