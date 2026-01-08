/**
 * SyncError.webapi.ts - SyncError WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SyncError WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISyncErrorApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISyncErrorApi, 'FormattedValue'>]: string };
	/** Action Name for which sync error has occurred */
	Action: string | null;
	/** Show the action data */
	ActionData: string | null;
	/** Unique identifier of the user who created the sync error. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the sync Error was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the sync error. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Enter a short description of the sync error. */
	Description: string | null;
	/** Displays the error code. */
	ErrorCode: string | null;
	/** Error description from the exception */
	ErrorDetail: string | null;
	/** Error Message of the exception */
	ErrorMessage: string | null;
	/** Date and time when the upsync request was executed on CRM server */
	ErrorTime_UtcDateAndTime: Date | null;
	/** Select the preferred error type. */
	ErrorType: number | null;
	/** Unique identifier of the user who last modified the sync error. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the sync error was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who last modified the sync error. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Entity name of the record for which sync error has occurred */
	Name: string | null;
	/** Unique identifier of the user or team who owns the sync error. */
	OwnerId: DevKit.Guid | null;
	/** Business unit that owns the sync error. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the sync error. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the sync error. */
	readonly OwningUser: DevKit.Guid | null;
	/** Choose the record that the sync error relates to. */
	RegardingObjectId: DevKit.Guid | null;
	/** Request data for the entity that had the sync error. */
	RequestData: string | null;
	/** Shows whether the sync error is active or resolved. */
	StateCode: number | null;
	/** Select the sync error status. */
	StatusCode: number | null;
	/** Unique identifier of the sync error. */
	SyncErrorId: DevKit.Guid | null;
	/** Shows the version number of the sync error. */
	readonly VersionNumber: number | null;
}

const SyncErrorFieldConfig: DevKit.IWebApiFieldConfigMap = {
	Action: { logicalName: 'action' },
	ActionData: { logicalName: 'actiondata' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	ErrorCode: { logicalName: 'errorcode' },
	ErrorDetail: { logicalName: 'errordetail' },
	ErrorMessage: { logicalName: 'errormessage' },
	ErrorTime_UtcDateAndTime: { logicalName: 'errortime', type: 'DateTime' },
	ErrorType: { logicalName: 'errortype', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	RegardingObjectId: { schemaName: 'RegardingObjectId', logicalName: '_regardingobjectid_value', entityCollectionName: 'accounts', entityLogicalName: 'account' },
	RequestData: { logicalName: 'requestdata' },
	StateCode: { logicalName: 'statecode', type: 'Integer' },
	StatusCode: { logicalName: 'statuscode', type: 'Integer' },
	SyncErrorId: { logicalName: 'syncerrorid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SyncError WebApi class for early-bound style coding
 * Usage: const syncError = new SyncErrorApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SyncErrorApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISyncErrorApi>(entity, 'syncerror', 'syncerrors', SyncErrorFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SyncErrorApi extends ISyncErrorApi { }
