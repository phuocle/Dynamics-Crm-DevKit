/**
 * CallbackRegistration.webapi.ts - CallbackRegistration WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for CallbackRegistration
 * All fields return string representation of their values
 */
export interface ICallbackRegistrationFormattedValue {
	readonly CallbackRegistrationId: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly EntityName2: string;
	readonly FilterExpression: string;
	readonly FilteringAttributes: string;
	readonly HardDelete: string;
	readonly LogicAppsVersion: string;
	readonly Message: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly Name: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly PostponeUntil: string;
	readonly RunAs: string;
	readonly RuntimeIntegrationProperties: string;
	readonly Scope: string;
	readonly SdkMessageName: string;
	readonly SoftDeleteStatus: string;
	readonly Url: string;
	readonly Version: string;
	readonly VersionNumber: string;
}

/**
 * CallbackRegistration WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ICallbackRegistrationApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ICallbackRegistrationFormattedValue;
	/** Unique identifier of the callback registration. */
	CallbackRegistrationId: DevKit.Guid | null;
	/** Shows who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the callback registration was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalfÂ of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Entity Name. */
	EntityName2: string | null;
	/** condition represented with OData $filter syntax */
	FilterExpression: string | null;
	/** Comma-separated list of attributes. If at least one of these attributes is modified, the callback url should be called. */
	FilteringAttributes: string | null;
	/** For internal use only. Holds hard delete information. */
	HardDelete: boolean | null;
	/** For internal use only. Holds version of logic apps trigger. */
	LogicAppsVersion: string | null;
	/** Specifies the message type */
	Message: number | null;
	/** Shows who last updated the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the callback registration was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of callback registration. */
	Name: string | null;
	/** Unique identifier of the user or team who owns the callback registration. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the callback registration. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the callback registration. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the callback registration. */
	readonly OwningUser: DevKit.Guid | null;
	/** delay represented with OData expression */
	PostponeUntil: string | null;
	/** Specifies the user context under which the callback will run */
	RunAs: number | null;
	/** For internal use only. Holds miscellaneous properties related to runtime integration. */
	RuntimeIntegrationProperties: string | null;
	/** Specifies the Scope */
	Scope: number | null;
	/** Name of the SDK message the subscriber is interested in */
	SdkMessageName: string | null;
	/** For internal use only. Holds soft delete information. */
	SoftDeleteStatus: number | null;
	/** Full callback registration Url. */
	Url: string | null;
	/** Specifies the Callback registration version type */
	Version: number | null;
	/** Version number of the callbackregistration. */
	readonly VersionNumber: number | null;
}

const CallbackRegistrationFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CallbackRegistrationId: { logicalName: 'callbackregistrationid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	EntityName2: { logicalName: 'entityname' },
	FilterExpression: { logicalName: 'filterexpression' },
	FilteringAttributes: { logicalName: 'filteringattributes' },
	HardDelete: { logicalName: 'harddelete', type: 'Boolean' },
	LogicAppsVersion: { logicalName: 'logicappsversion' },
	Message: { logicalName: 'message', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	PostponeUntil: { logicalName: 'postponeuntil' },
	RunAs: { logicalName: 'runas', type: 'Integer' },
	RuntimeIntegrationProperties: { logicalName: 'runtimeintegrationproperties' },
	Scope: { logicalName: 'scope', type: 'Integer' },
	SdkMessageName: { logicalName: 'sdkmessagename' },
	SoftDeleteStatus: { logicalName: 'softdeletestatus', type: 'Integer' },
	Url: { logicalName: 'url' },
	Version: { logicalName: 'version', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * CallbackRegistration WebApi class for early-bound style coding
 * Usage: const callbackRegistration = new CallbackRegistrationApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class CallbackRegistrationApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ICallbackRegistrationApi>(entity, 'callbackregistration', 'callbackregistrations', CallbackRegistrationFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface CallbackRegistrationApi extends ICallbackRegistrationApi { }
