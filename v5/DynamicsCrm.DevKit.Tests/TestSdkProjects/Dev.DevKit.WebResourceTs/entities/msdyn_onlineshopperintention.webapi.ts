/**
 * msdyn_onlineshopperintention.webapi.ts - msdyn_onlineshopperintention WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_onlineshopperintention WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_onlineshopperintentionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_onlineshopperintentionApi, 'FormattedValue'>]: string };
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Administrative */
	msdyn_Administrative: number | null;
	/** Administrative_Duration */
	msdyn_Administrative_Duration: number | null;
	/** BounceRates */
	msdyn_BounceRates: number | null;
	/** Browser */
	msdyn_Browser: number | null;
	/** ExitRates */
	msdyn_ExitRates: number | null;
	/** Informational */
	msdyn_Informational: number | null;
	/** Informational_Duration */
	msdyn_Informational_Duration: number | null;
	/** Month */
	msdyn_Month: string | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** Unique identifier for entity instances */
	msdyn_onlineshopperintentionId: DevKit.Guid | null;
	/** OperatingSystems */
	msdyn_OperatingSystems: number | null;
	/** PageValues */
	msdyn_PageValues: number | null;
	/** ProductRelated */
	msdyn_ProductRelated: number | null;
	/** ProductRelated_Duration */
	msdyn_ProductRelated_Duration: number | null;
	/** Region */
	msdyn_Region: number | null;
	/** Revenue (Label) */
	msdyn_Revenue: boolean | null;
	/** SpecialDay */
	msdyn_SpecialDay: number | null;
	/** TrafficType */
	msdyn_TrafficType: number | null;
	/** VisitorType */
	msdyn_VisitorType: string | null;
	/** Weekend */
	msdyn_Weekend: boolean | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Status of the Online Shopper Intention */
	statecode: number | null;
	/** Reason for the status of the Online Shopper Intention */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_onlineshopperintentionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_Administrative: { logicalName: 'msdyn_administrative', type: 'Integer' },
	msdyn_Administrative_Duration: { logicalName: 'msdyn_administrative_duration', type: 'Number' },
	msdyn_BounceRates: { logicalName: 'msdyn_bouncerates', type: 'Number' },
	msdyn_Browser: { logicalName: 'msdyn_browser', type: 'Integer' },
	msdyn_ExitRates: { logicalName: 'msdyn_exitrates', type: 'Number' },
	msdyn_Informational: { logicalName: 'msdyn_informational', type: 'Integer' },
	msdyn_Informational_Duration: { logicalName: 'msdyn_informational_duration', type: 'Number' },
	msdyn_Month: { logicalName: 'msdyn_month' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_onlineshopperintentionId: { logicalName: 'msdyn_onlineshopperintentionid' },
	msdyn_OperatingSystems: { logicalName: 'msdyn_operatingsystems', type: 'Integer' },
	msdyn_PageValues: { logicalName: 'msdyn_pagevalues', type: 'Number' },
	msdyn_ProductRelated: { logicalName: 'msdyn_productrelated', type: 'Integer' },
	msdyn_ProductRelated_Duration: { logicalName: 'msdyn_productrelated_duration', type: 'Number' },
	msdyn_Region: { logicalName: 'msdyn_region', type: 'Integer' },
	msdyn_Revenue: { logicalName: 'msdyn_revenue', type: 'Boolean' },
	msdyn_SpecialDay: { logicalName: 'msdyn_specialday', type: 'Number' },
	msdyn_TrafficType: { logicalName: 'msdyn_traffictype', type: 'Integer' },
	msdyn_VisitorType: { logicalName: 'msdyn_visitortype' },
	msdyn_Weekend: { logicalName: 'msdyn_weekend', type: 'Boolean' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_onlineshopperintention WebApi class for early-bound style coding
 * Usage: const msdyn_onlineshopperintention = new msdyn_onlineshopperintentionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_onlineshopperintentionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_onlineshopperintentionApi>(entity, 'msdyn_onlineshopperintention', 'msdyn_onlineshopperintentions', msdyn_onlineshopperintentionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_onlineshopperintentionApi extends Imsdyn_onlineshopperintentionApi { }
