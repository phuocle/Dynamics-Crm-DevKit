/**
 * ClientUpdate.webapi.ts - ClientUpdate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for ClientUpdate
 * All fields return string representation of their values
 */
export interface IClientUpdateFormattedValue {
	readonly ClientUpdateId: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly Description: string;
	readonly SqlScript: string;
	readonly VersionNumber: string;
	readonly WasExecuted: string;
	readonly WhenExecute: string;
}

/**
 * ClientUpdate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IClientUpdateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IClientUpdateFormattedValue;
	/** Unique identifier of the client update. */
	ClientUpdateId: DevKit.Guid | null;
	/** For internal use only. Date and time when the ClientUpdate script was created on server. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Description of the client update. */
	Description: string | null;
	/** Contents of the client update. */
	SqlScript: string | null;
	readonly VersionNumber: number | null;
	/** For internal use only. Should be set by client to 1 after action was executed. */
	WasExecuted: boolean | null;
	/** For internal use only. Values are: 1 - Before SchemaChanges; 2 - After SchemaChanges but before Download data; 3 - After download data. */
	WhenExecute: number | null;
}

const ClientUpdateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ClientUpdateId: { logicalName: 'clientupdateid' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	Description: { logicalName: 'description' },
	SqlScript: { logicalName: 'sqlscript' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WasExecuted: { logicalName: 'wasexecuted', type: 'Boolean' },
	WhenExecute: { logicalName: 'whenexecute', type: 'Integer' },
};

/**
 * ClientUpdate WebApi class for early-bound style coding
 * Usage: const clientUpdate = new ClientUpdateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class ClientUpdateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IClientUpdateApi>(entity, 'clientupdate', 'clientupdates', ClientUpdateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface ClientUpdateApi extends IClientUpdateApi { }
