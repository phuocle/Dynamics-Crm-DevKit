/**
 * mobileofflineprofileitemfilter.webapi.ts - mobileofflineprofileitemfilter WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for mobileofflineprofileitemfilter
 * All fields return string representation of their values
 */
export interface ImobileofflineprofileitemfilterFormattedValue {
	readonly CreatedOn_UtcDateAndTime: string;
	readonly fetchxml: string;
	readonly IsActivity: string;
	readonly IsIntersect: string;
	readonly mobileofflineprofileid: string;
	readonly mobileofflineprofileitemfilterId: string;
	readonly mobileofflineprofileitemid: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly Name: string;
	readonly offlinesql: string;
	readonly OrganizationId: string;
	readonly outerFetchXml: string;
	readonly subtype: string;
	readonly type: string;
	readonly versionnumber: string;
}

/**
 * mobileofflineprofileitemfilter WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ImobileofflineprofileitemfilterApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ImobileofflineprofileitemfilterFormattedValue;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** FetchXML */
	fetchxml: string | null;
	/** IsActivity */
	IsActivity: boolean | null;
	/** IsIntersect */
	IsIntersect: boolean | null;
	/** Unique identifier for Mobile Offline Profile associated with MobileOfflineProfileItemFilter. */
	mobileofflineprofileid: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	mobileofflineprofileitemfilterId: DevKit.Guid | null;
	/** MobileOfflineProfileItemId */
	mobileofflineprofileitemid: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Name */
	Name: string | null;
	/** OfflineSQL */
	offlinesql: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
	/** OuterFetchXML */
	outerFetchXml: string | null;
	/** Subtype */
	subtype: number | null;
	/** Type */
	type: number | null;
	/** Version number. */
	readonly versionnumber: number | null;
}

const mobileofflineprofileitemfilterFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	fetchxml: { logicalName: 'fetchxml' },
	IsActivity: { logicalName: 'isactivity', type: 'Boolean' },
	IsIntersect: { logicalName: 'isintersect', type: 'Boolean' },
	mobileofflineprofileid: { schemaName: 'mobileofflineprofileid', logicalName: '_mobileofflineprofileid_value', entityCollectionName: 'mobileofflineprofiles', entityLogicalName: 'mobileofflineprofile' },
	mobileofflineprofileitemfilterId: { logicalName: 'mobileofflineprofileitemfilterid' },
	mobileofflineprofileitemid: { logicalName: 'mobileofflineprofileitemid' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	Name: { logicalName: 'name' },
	offlinesql: { logicalName: 'offlinesql' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
	outerFetchXml: { logicalName: 'outerfetchXml' },
	subtype: { logicalName: 'subtype', type: 'Integer' },
	type: { logicalName: 'type', type: 'Integer' },
	versionnumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * mobileofflineprofileitemfilter WebApi class for early-bound style coding
 * Usage: const mobileofflineprofileitemfilter = new mobileofflineprofileitemfilterApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class mobileofflineprofileitemfilterApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ImobileofflineprofileitemfilterApi>(entity, 'mobileofflineprofileitemfilter', 'mobileofflineprofileitemfilters', mobileofflineprofileitemfilterFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface mobileofflineprofileitemfilterApi extends ImobileofflineprofileitemfilterApi { }
