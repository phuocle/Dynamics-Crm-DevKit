/**
 * AppModuleMetadata.webapi.ts - AppModuleMetadata WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * AppModuleMetadata WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAppModuleMetadataApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IAppModuleMetadataApi, 'FormattedValue'>]: string };
	/** For internal use only. */
	AppModuleId: DevKit.Guid | null;
	/** For internal use only. */
	AppModuleMetadataId: DevKit.Guid | null;
	/** For internal use only. */
	ComponentId: DevKit.Guid | null;
	/** For internal use only. */
	ComponentIsDefault: boolean | null;
	/** For internal use only. */
	ComponentIsQuickFindQuery: boolean | null;
	/** For internal use only. */
	ComponentIsTabletEnabled: boolean | null;
	/** For internal use only. */
	ComponentIsUserChart: boolean | null;
	/** For internal use only. */
	ComponentIsUserForm: boolean | null;
	/** For internal use only. */
	ComponentIsUserView: boolean | null;
	/** For internal use only. */
	ComponentStateCode: number | null;
	/** For internal use only. */
	ComponentSubType: number | null;
	/** For internal use only. */
	ComponentType: number | null;
	/** For internal use only. */
	ComponentVersion: number | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** For internal use only. */
	ParentComponentId: DevKit.Guid | null;
	/** For internal use only. */
	State: number | null;
}

const AppModuleMetadataFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AppModuleId: { logicalName: 'appmoduleid' },
	AppModuleMetadataId: { logicalName: 'appmodulemetadataid' },
	ComponentId: { logicalName: 'componentid' },
	ComponentIsDefault: { logicalName: 'componentisdefault', type: 'Boolean' },
	ComponentIsQuickFindQuery: { logicalName: 'componentisquickfindquery', type: 'Boolean' },
	ComponentIsTabletEnabled: { logicalName: 'componentistabletenabled', type: 'Boolean' },
	ComponentIsUserChart: { logicalName: 'componentisuserchart', type: 'Boolean' },
	ComponentIsUserForm: { logicalName: 'componentisuserform', type: 'Boolean' },
	ComponentIsUserView: { logicalName: 'componentisuserview', type: 'Boolean' },
	ComponentStateCode: { logicalName: 'componentstatecode', type: 'Integer' },
	ComponentSubType: { logicalName: 'componentsubtype', type: 'Integer' },
	ComponentType: { logicalName: 'componenttype', type: 'Integer' },
	ComponentVersion: { logicalName: 'componentversion', type: 'Integer' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ParentComponentId: { logicalName: 'parentcomponentid' },
	State: { logicalName: 'state', type: 'Integer' },
};

/**
 * AppModuleMetadata WebApi class for early-bound style coding
 * Usage: const appModuleMetadata = new AppModuleMetadataApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AppModuleMetadataApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAppModuleMetadataApi>(entity, 'appmodulemetadata', 'appmodulemetadatacollection', AppModuleMetadataFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AppModuleMetadataApi extends IAppModuleMetadataApi { }
