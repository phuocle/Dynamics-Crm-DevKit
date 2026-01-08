/**
 * PrincipalObjectAccessReadSnapshot.webapi.ts - PrincipalObjectAccessReadSnapshot WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for PrincipalObjectAccessReadSnapshot
 * All fields return string representation of their values
 */
export interface IPrincipalObjectAccessReadSnapshotFormattedValue {
	readonly ChildUserPrincipalsCount: string;
	readonly Count: string;
	readonly CountPercentOfTotalRows: string;
	readonly ObjectTypeCode: string;
	readonly PrincipalId: string;
	readonly PrincipalObjectAccessReadSnapshotId: string;
	readonly PrincipalTypeCode: string;
	readonly RecordCountForOwnerID: string;
	readonly RecordCountForOwnerIDPercentOfTotalRows: string;
	readonly RecordCountForOwningBU: string;
	readonly RecordCountForOwningBUPercentOfTotalRows: string;
	readonly TeamPrincipalsCount: string;
}

/**
 * PrincipalObjectAccessReadSnapshot WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IPrincipalObjectAccessReadSnapshotApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: IPrincipalObjectAccessReadSnapshotFormattedValue;
	readonly ChildUserPrincipalsCount: number | null;
	readonly Count: number | null;
	readonly CountPercentOfTotalRows: number | null;
	readonly ObjectTypeCode: number | null;
	readonly PrincipalId: DevKit.Guid | null;
	readonly PrincipalObjectAccessReadSnapshotId: DevKit.Guid | null;
	/** PrincipalTypeCode. */
	readonly PrincipalTypeCode: number | null;
	readonly RecordCountForOwnerID: number | null;
	readonly RecordCountForOwnerIDPercentOfTotalRows: number | null;
	readonly RecordCountForOwningBU: number | null;
	readonly RecordCountForOwningBUPercentOfTotalRows: number | null;
	readonly TeamPrincipalsCount: number | null;
}

const PrincipalObjectAccessReadSnapshotFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ChildUserPrincipalsCount: { logicalName: 'childuserprincipalscount', readOnly: true, type: 'Integer' },
	Count: { logicalName: 'count', readOnly: true, type: 'Integer' },
	CountPercentOfTotalRows: { logicalName: 'countpercentoftotalrows', readOnly: true, type: 'Integer' },
	ObjectTypeCode: { logicalName: 'objecttypecode', readOnly: true, type: 'Integer' },
	PrincipalId: { logicalName: 'principalid', readOnly: true },
	PrincipalObjectAccessReadSnapshotId: { logicalName: 'principalobjectaccessreadsnapshotid', readOnly: true },
	PrincipalTypeCode: { logicalName: 'principaltypecode', readOnly: true, type: 'Integer' },
	RecordCountForOwnerID: { logicalName: 'recordcountforownerid', readOnly: true, type: 'Integer' },
	RecordCountForOwnerIDPercentOfTotalRows: { logicalName: 'recordcountforowneridpercentoftotalrows', readOnly: true, type: 'Integer' },
	RecordCountForOwningBU: { logicalName: 'recordcountforowningbu', readOnly: true, type: 'Integer' },
	RecordCountForOwningBUPercentOfTotalRows: { logicalName: 'recordcountforowningbupercentoftotalrows', readOnly: true, type: 'Integer' },
	TeamPrincipalsCount: { logicalName: 'teamprincipalscount', readOnly: true, type: 'Integer' },
};

/**
 * PrincipalObjectAccessReadSnapshot WebApi class for early-bound style coding
 * Usage: const principalObjectAccessReadSnapshot = new PrincipalObjectAccessReadSnapshotApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class PrincipalObjectAccessReadSnapshotApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IPrincipalObjectAccessReadSnapshotApi>(entity, 'principalobjectaccessreadsnapshot', 'principalobjectaccessreadsnapshots', PrincipalObjectAccessReadSnapshotFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface PrincipalObjectAccessReadSnapshotApi extends IPrincipalObjectAccessReadSnapshotApi { }
