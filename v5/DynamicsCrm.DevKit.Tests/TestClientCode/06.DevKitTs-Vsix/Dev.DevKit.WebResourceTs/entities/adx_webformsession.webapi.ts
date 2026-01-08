/**
 * adx_webformsession.webapi.ts - adx_webformsession WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * adx_webformsession WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Iadx_webformsessionApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Iadx_webformsessionApi, 'FormattedValue'>]: string };
	/** Anonymous Identification */
	adx_anonymousidentification: string | null;
	/** Unique identifier for Contact associated with Multistep Form Session. */
	adx_contact: DevKit.Guid | null;
	/** The index of the current step the user last visited. */
	adx_currentstepindex: number | null;
	/** Type the name of the custom entity. */
	adx_name: string | null;
	/** Primary Record Entity Primary Key Logical Name */
	adx_primaryrecordentitykeyname: string | null;
	/** Primary Record Table name */
	adx_primaryrecordentitylogicalname: string | null;
	/** Shows the ID of the primary record created by the multistep form.  Used to retrieve the appropriate session record. */
	adx_primaryrecordid: string | null;
	/** History of steps in JSON */
	adx_stephistory: string | null;
	/** Unique identifier for User associated with Multistep Form Session. */
	adx_systemuser: DevKit.Guid | null;
	/** User Host Address */
	adx_userhostaddress: string | null;
	/** User Identity Name */
	adx_useridentityname: string | null;
	/** Unique identifier for entity instances */
	adx_webformsessionId: DevKit.Guid | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in the solution options. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Shows who created the record on behalf of another user. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Shows the sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Shows the date and time when the record was updated. The date and time are displayed in the time zone selected in the solution options. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Shows who last updated the record on behalf of another user. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Unique identifier for Web Form associated with Web Form Session. */
	mspp_webformid: DevKit.Guid | null;
	/** Unique identifier for entity instances */
	mspp_webformstepid: DevKit.Guid | null;
	/** Shows the organization. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Shows the date and time when the record was migrated. The date and time are displayed in the time zone selected in the solution options. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Shows the status of the multistep form session. */
	statecode: number | null;
	/** Select the Multistep Form Session's status.  */
	statuscode: number | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Shows the time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const adx_webformsessionFieldConfig: DevKit.IWebApiFieldConfigMap = {
	adx_anonymousidentification: { logicalName: 'adx_anonymousidentification' },
	adx_contact: { schemaName: 'adx_contact', logicalName: '_adx_contact_value', entityCollectionName: 'contacts', entityLogicalName: 'contact' },
	adx_currentstepindex: { logicalName: 'adx_currentstepindex', type: 'Integer' },
	adx_name: { logicalName: 'adx_name' },
	adx_primaryrecordentitykeyname: { logicalName: 'adx_primaryrecordentitykeyname' },
	adx_primaryrecordentitylogicalname: { logicalName: 'adx_primaryrecordentitylogicalname' },
	adx_primaryrecordid: { logicalName: 'adx_primaryrecordid' },
	adx_stephistory: { logicalName: 'adx_stephistory' },
	adx_systemuser: { schemaName: 'adx_systemuser', logicalName: '_adx_systemuser_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	adx_userhostaddress: { logicalName: 'adx_userhostaddress' },
	adx_useridentityname: { logicalName: 'adx_useridentityname' },
	adx_webformsessionId: { logicalName: 'adx_webformsessionid' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	mspp_webformid: { schemaName: 'mspp_webformid', logicalName: '_mspp_webformid_value', entityCollectionName: 'powerpagecomponents', entityLogicalName: 'powerpagecomponent' },
	mspp_webformstepid: { schemaName: 'mspp_webformstepid', logicalName: '_mspp_webformstepid_value', entityCollectionName: 'powerpagecomponents', entityLogicalName: 'powerpagecomponent' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * adx_webformsession WebApi class for early-bound style coding
 * Usage: const adx_webformsession = new adx_webformsessionApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class adx_webformsessionApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Iadx_webformsessionApi>(entity, 'adx_webformsession', 'adx_webformsessions', adx_webformsessionFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface adx_webformsessionApi extends Iadx_webformsessionApi { }
