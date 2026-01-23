/**
 * AppModuleMetadataOperationLog.webapi.ts - AppModuleMetadataOperationLog WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * AppModuleMetadataOperationLog WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAppModuleMetadataOperationLogApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IAppModuleMetadataOperationLogApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	AppModuleId: DevKit.Guid | null;
	/** For internal use only. */
	AppModuleMetadataOperationLogId: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** For internal use only. */
	RetryCount: number | null;
	/** Date and time when the Async job was started. */
	StartedOn_UtcDateAndTime: Date | null;
	/** For internal use only. */
	State: number | null;
}

const AppModuleMetadataOperationLogFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AppModuleId: { logicalName: 'appmoduleid' },
	AppModuleMetadataOperationLogId: { logicalName: 'appmodulemetadataoperationlogid' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	RetryCount: { logicalName: 'retrycount', type: 'Integer' },
	StartedOn_UtcDateAndTime: { logicalName: 'startedon', type: 'DateTime' },
	State: { logicalName: 'state', type: 'Integer' },
};

/**
 * AppModuleMetadataOperationLog WebApi class for early-bound style coding
 * Usage: const appModuleMetadataOperationLog = new AppModuleMetadataOperationLogApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AppModuleMetadataOperationLogApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAppModuleMetadataOperationLogApi>(entity, 'appmodulemetadataoperationlog', 'appmodulemetadataoperationlogcollection', AppModuleMetadataOperationLogFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AppModuleMetadataOperationLogApi extends IAppModuleMetadataOperationLogApi { }
