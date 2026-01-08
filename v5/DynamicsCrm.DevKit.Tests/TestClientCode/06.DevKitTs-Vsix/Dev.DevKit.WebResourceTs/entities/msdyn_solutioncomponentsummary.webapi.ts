/**
 * msdyn_solutioncomponentsummary.webapi.ts - msdyn_solutioncomponentsummary WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * msdyn_solutioncomponentsummary WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_solutioncomponentsummaryApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<Imsdyn_solutioncomponentsummaryApi, 'FormattedValue'>]: string };
	/** Canvas App Unique Id */
	msdyn_canvasappuniqueid: string | null;
	/** Component Logical Name */
	msdyn_componentlogicalname: string | null;
	/** msdyn_componenttype */
	msdyn_componenttype: number | null;
	/** Component Type Name */
	msdyn_componenttypename: string | null;
	/** Connector Internal Id */
	msdyn_connectorinternalid: string | null;
	/** msdyn_createdon */
	msdyn_createdon: string | null;
	/** msdyn_culture */
	msdyn_culture: string | null;
	/** msdyn_deployment */
	msdyn_deployment: string | null;
	/** msdyn_description */
	msdyn_description: string | null;
	/** msdyn_displayname */
	msdyn_displayname: string | null;
	/** msdyn_eventhandler */
	msdyn_eventhandler: string | null;
	/** msdyn_executionorder */
	msdyn_executionorder: string | null;
	/** msdyn_executionstage */
	msdyn_executionstage: string | null;
	/** Field Security */
	msdyn_fieldsecurity: string | null;
	/** Field Type */
	msdyn_fieldtype: string | null;
	/** msdyn_hasactivecustomization */
	msdyn_hasactivecustomization: string | null;
	/** msdyn_isappaware */
	msdyn_isappaware: string | null;
	/** App Aware Name */
	msdyn_isappawarename: string | null;
	/** msdyn_isauditenabled */
	msdyn_isauditenabled: string | null;
	/** Audit Name */
	msdyn_isauditenabledname: string | null;
	/** msdyn_iscustom */
	msdyn_iscustom: string | null;
	/** msdyn_iscustomizable */
	msdyn_iscustomizable: string | null;
	/** Customizable Name */
	msdyn_iscustomizablename: string | null;
	/** Is Custom Name */
	msdyn_iscustomname: string | null;
	/** Default */
	msdyn_isdefault: string | null;
	/** Default Name */
	msdyn_isdefaultname: string | null;
	/** msdyn_ismanaged */
	msdyn_ismanaged: string | null;
	/** Managed Name */
	msdyn_ismanagedname: string | null;
	/** msdyn_isolationmode */
	msdyn_isolationmode: string | null;
	/** msdyn_istableenabled */
	msdyn_istableenabled: string | null;
	/** Language code for component */
	msdyn_lcid: number | null;
	/** Logical Collection Name */
	msdyn_logicalcollectionname: string | null;
	/** msdyn_modifiedon */
	msdyn_modifiedon: string | null;
	/** The name of the custom entity. */
	msdyn_name: string | null;
	/** msdyn_objectid */
	msdyn_objectid: string | null;
	/** msdyn_objecttypecode */
	msdyn_objecttypecode: string | null;
	/** msdyn_owner */
	msdyn_owner: string | null;
	/** owning business unit */
	msdyn_owningbusinessunit: string | null;
	/** Primary Entity Name */
	msdyn_primaryentityname: string | null;
	/** Name of the primary id attribute */
	msdyn_primaryidattribute: string | null;
	/** msdyn_publickeytoken */
	msdyn_publickeytoken: string | null;
	/** Related Entity */
	msdyn_relatedentity: string | null;
	/** Related Entity Attribute Name */
	msdyn_relatedentityattribute: string | null;
	/** msdyn_schemaname */
	msdyn_schemaname: string | null;
	/** msdyn_sdkmessagename */
	msdyn_sdkmessagename: string | null;
	/** Unique identifier for entity instances */
	msdyn_solutioncomponentsummaryId: DevKit.Guid | null;
	/** msdyn_solutionid */
	msdyn_solutionid: string | null;
	/** msdyn_standardstatus */
	msdyn_standardstatus: string | null;
	/** msdyn_status */
	msdyn_status: string | null;
	/** Status Name */
	msdyn_statusname: string | null;
	/** msdyn_subtype */
	msdyn_subtype: string | null;
	/** msdyn_synctoexternalsearchindex */
	msdyn_synctoexternalsearchindex: string | null;
	/** msdyn_total */
	msdyn_total: number | null;
	/** msdyn_typename */
	msdyn_typename: string | null;
	/** msdyn_uniquename */
	msdyn_uniquename: string | null;
	/** msdyn_version */
	msdyn_version: string | null;
	/** msdyn_workflowcategory */
	msdyn_workflowcategory: string | null;
	/** Workflow Category Name */
	msdyn_workflowcategoryname: string | null;
	/** Workflow Id Unique */
	msdyn_workflowidunique: string | null;
	/** Unique identifier for the organization */
	readonly OrganizationId: DevKit.Guid | null;
}

const msdyn_solutioncomponentsummaryFieldConfig: DevKit.IWebApiFieldConfigMap = {
	msdyn_canvasappuniqueid: { logicalName: 'msdyn_canvasappuniqueid' },
	msdyn_componentlogicalname: { logicalName: 'msdyn_componentlogicalname' },
	msdyn_componenttype: { logicalName: 'msdyn_componenttype', type: 'Number' },
	msdyn_componenttypename: { logicalName: 'msdyn_componenttypename' },
	msdyn_connectorinternalid: { logicalName: 'msdyn_connectorinternalid' },
	msdyn_createdon: { logicalName: 'msdyn_createdon' },
	msdyn_culture: { logicalName: 'msdyn_culture' },
	msdyn_deployment: { logicalName: 'msdyn_deployment' },
	msdyn_description: { logicalName: 'msdyn_description' },
	msdyn_displayname: { logicalName: 'msdyn_displayname' },
	msdyn_eventhandler: { logicalName: 'msdyn_eventhandler' },
	msdyn_executionorder: { logicalName: 'msdyn_executionorder' },
	msdyn_executionstage: { logicalName: 'msdyn_executionstage' },
	msdyn_fieldsecurity: { logicalName: 'msdyn_fieldsecurity' },
	msdyn_fieldtype: { logicalName: 'msdyn_fieldtype' },
	msdyn_hasactivecustomization: { logicalName: 'msdyn_hasactivecustomization' },
	msdyn_isappaware: { logicalName: 'msdyn_isappaware' },
	msdyn_isappawarename: { logicalName: 'msdyn_isappawarename' },
	msdyn_isauditenabled: { logicalName: 'msdyn_isauditenabled' },
	msdyn_isauditenabledname: { logicalName: 'msdyn_isauditenabledname' },
	msdyn_iscustom: { logicalName: 'msdyn_iscustom' },
	msdyn_iscustomizable: { logicalName: 'msdyn_iscustomizable' },
	msdyn_iscustomizablename: { logicalName: 'msdyn_iscustomizablename' },
	msdyn_iscustomname: { logicalName: 'msdyn_iscustomname' },
	msdyn_isdefault: { logicalName: 'msdyn_isdefault' },
	msdyn_isdefaultname: { logicalName: 'msdyn_isdefaultname' },
	msdyn_ismanaged: { logicalName: 'msdyn_ismanaged' },
	msdyn_ismanagedname: { logicalName: 'msdyn_ismanagedname' },
	msdyn_isolationmode: { logicalName: 'msdyn_isolationmode' },
	msdyn_istableenabled: { logicalName: 'msdyn_istableenabled' },
	msdyn_lcid: { logicalName: 'msdyn_lcid', type: 'Number' },
	msdyn_logicalcollectionname: { logicalName: 'msdyn_logicalcollectionname' },
	msdyn_modifiedon: { logicalName: 'msdyn_modifiedon' },
	msdyn_name: { logicalName: 'msdyn_name' },
	msdyn_objectid: { logicalName: 'msdyn_objectid' },
	msdyn_objecttypecode: { logicalName: 'msdyn_objecttypecode' },
	msdyn_owner: { logicalName: 'msdyn_owner' },
	msdyn_owningbusinessunit: { logicalName: 'msdyn_owningbusinessunit' },
	msdyn_primaryentityname: { logicalName: 'msdyn_primaryentityname' },
	msdyn_primaryidattribute: { logicalName: 'msdyn_primaryidattribute' },
	msdyn_publickeytoken: { logicalName: 'msdyn_publickeytoken' },
	msdyn_relatedentity: { logicalName: 'msdyn_relatedentity' },
	msdyn_relatedentityattribute: { logicalName: 'msdyn_relatedentityattribute' },
	msdyn_schemaname: { logicalName: 'msdyn_schemaname' },
	msdyn_sdkmessagename: { logicalName: 'msdyn_sdkmessagename' },
	msdyn_solutioncomponentsummaryId: { logicalName: 'msdyn_solutioncomponentsummaryid' },
	msdyn_solutionid: { logicalName: 'msdyn_solutionid' },
	msdyn_standardstatus: { logicalName: 'msdyn_standardstatus' },
	msdyn_status: { logicalName: 'msdyn_status' },
	msdyn_statusname: { logicalName: 'msdyn_statusname' },
	msdyn_subtype: { logicalName: 'msdyn_subtype' },
	msdyn_synctoexternalsearchindex: { logicalName: 'msdyn_synctoexternalsearchindex' },
	msdyn_total: { logicalName: 'msdyn_total', type: 'Number' },
	msdyn_typename: { logicalName: 'msdyn_typename' },
	msdyn_uniquename: { logicalName: 'msdyn_uniquename' },
	msdyn_version: { logicalName: 'msdyn_version' },
	msdyn_workflowcategory: { logicalName: 'msdyn_workflowcategory' },
	msdyn_workflowcategoryname: { logicalName: 'msdyn_workflowcategoryname' },
	msdyn_workflowidunique: { logicalName: 'msdyn_workflowidunique' },
	OrganizationId: { logicalName: 'organizationid', readOnly: true },
};

/**
 * msdyn_solutioncomponentsummary WebApi class for early-bound style coding
 * Usage: const msdyn_solutioncomponentsummary = new msdyn_solutioncomponentsummaryApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_solutioncomponentsummaryApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_solutioncomponentsummaryApi>(entity, 'msdyn_solutioncomponentsummary', 'msdyn_solutioncomponentsummaries', msdyn_solutioncomponentsummaryFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_solutioncomponentsummaryApi extends Imsdyn_solutioncomponentsummaryApi { }
