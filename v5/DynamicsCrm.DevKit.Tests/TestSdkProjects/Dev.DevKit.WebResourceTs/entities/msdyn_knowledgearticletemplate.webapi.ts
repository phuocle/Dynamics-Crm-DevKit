/**
 * msdyn_knowledgearticletemplate.webapi.ts - msdyn_knowledgearticletemplate WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_knowledgearticletemplate WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_knowledgearticletemplateApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_knowledgearticletemplateApi, 'FormattedValue'>]: string };
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
	/** Shows the body of the article stored in HTML format. */
	msdyn_Content: string | null;
	/** Description */
	msdyn_Description: string | null;
	/** Shows whether this article is only visible internally. */
	msdyn_isinternal: boolean | null;
	/** Keywords */
	msdyn_keywords: string | null;
	/** Unique identifier for entity instances */
	msdyn_knowledgearticletemplateId: DevKit.Guid | null;
	/** Article Template Language Id */
	msdyn_languagelocaleid: string | null;
	/** Article Language Name */
	msdyn_LanguageLocaleIdName: string | null;
	/** Type a name for the Knowledge Article Template */
	msdyn_name: string | null;
	/** Shows the section details of the template for article generation. */
	msdyn_sectiondetails: string | null;
	/** Choose the subject of the article to assist with article searches. You can configure subjects under Business Management in the Settings area. */
	msdyn_subjectid: DevKit.Guid | null;
	/** Type a title for the Knowledge Article Template */
	msdyn_title: string | null;
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
	/** Status of the Knowledge Article Template */
	statecode: number | null;
	/** Reason for the status of the Knowledge Article Template */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_knowledgearticletemplateFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_Content: { logicalName: 'msdyn_content' },
	msdyn_Description: { logicalName: 'msdyn_description' },
	msdyn_isinternal: { logicalName: 'msdyn_isinternal', type: 'Boolean' },
	msdyn_keywords: { logicalName: 'msdyn_keywords' },
	msdyn_knowledgearticletemplateId: { logicalName: 'msdyn_knowledgearticletemplateid' },
	msdyn_languagelocaleid: { logicalName: 'msdyn_languagelocaleid' },
	msdyn_LanguageLocaleIdName: { logicalName: 'msdyn_LanguageLocaleIdName' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_sectiondetails: { logicalName: 'msdyn_sectiondetails' },
	msdyn_subjectid: { schemaName: 'msdyn_subjectid', logicalName: '_msdyn_subjectid_value', entityCollectionName: 'subjects', entityLogicalName: 'subject' },
	msdyn_title: { logicalName: 'msdyn_title' },
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
 * msdyn_knowledgearticletemplate WebApi class for early-bound style coding
 * Usage: const msdyn_knowledgearticletemplate = new msdyn_knowledgearticletemplateApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_knowledgearticletemplateApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_knowledgearticletemplateApi>(entity, 'msdyn_knowledgearticletemplate', 'msdyn_knowledgearticletemplates', msdyn_knowledgearticletemplateFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_knowledgearticletemplateApi extends Imsdyn_knowledgearticletemplateApi { }
