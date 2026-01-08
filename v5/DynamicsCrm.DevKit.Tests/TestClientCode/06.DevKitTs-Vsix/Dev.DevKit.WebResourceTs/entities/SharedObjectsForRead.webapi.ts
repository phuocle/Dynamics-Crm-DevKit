/**
 * SharedObjectsForRead.webapi.ts - SharedObjectsForRead WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * SharedObjectsForRead WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ISharedObjectsForReadApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<ISharedObjectsForReadApi, 'FormattedValue'>]: string };
	readonly ObjectId: DevKit.Guid | null;
	readonly ObjectTypeCode: number | null;
	readonly SharedObjectsForReadId: DevKit.Guid | null;
	readonly UserIds: string | null;
	readonly VersionNumber: number | null;
}

const SharedObjectsForReadFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ObjectId: { logicalName: 'objectid', readOnly: true },
	ObjectTypeCode: { logicalName: 'objecttypecode', readOnly: true, type: 'Integer' },
	SharedObjectsForReadId: { logicalName: 'sharedobjectsforreadid', readOnly: true },
	UserIds: { logicalName: 'userids', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * SharedObjectsForRead WebApi class for early-bound style coding
 * Usage: const sharedObjectsForRead = new SharedObjectsForReadApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class SharedObjectsForReadApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ISharedObjectsForReadApi>(entity, 'sharedobjectsforread', '', SharedObjectsForReadFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface SharedObjectsForReadApi extends ISharedObjectsForReadApi { }
