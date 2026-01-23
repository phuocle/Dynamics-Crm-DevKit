/**
 * WebResource.webapi.ts - WebResource WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * WebResource WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IWebResourceApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IWebResourceApi, 'FormattedValue'>]: string };
	/** Information that specifies whether this component can be deleted. */
	CanBeDeleted: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Bytes of the web resource, in Base64 format. */
	Content: string | null;
	/** Reference to the content file on Azure. */
	readonly ContentFileRef_name: string | null;
	/** Json representation of the content of the resource. */
	ContentJson: string | null;
	/** Reference to the Json content file on Azure. */
	readonly ContentJsonFileRef_name: string | null;
	/** Unique identifier of the user who created the web resource. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the web resource was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the web resource. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** For internal use only. */
	DependencyXml: string | null;
	/** Description of the web resource. */
	Description: string | null;
	/** Display name of the web resource. */
	DisplayName: string | null;
	/** Version in which the form is introduced. */
	IntroducedVersion: string | null;
	/** Information that specifies whether this web resource is available for mobile client in offline mode. */
	IsAvailableForMobileOffline: boolean | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	/** Information that specifies whether this web resource is enabled for mobile client. */
	IsEnabledForMobileClient: boolean | null;
	/** Information that specifies whether this component should be hidden. */
	IsHidden: string | null;
	readonly IsManaged: boolean | null;
	/** Language of the web resource. */
	LanguageCode: number | null;
	/** Unique identifier of the user who last modified the web resource. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the web resource was last modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the web resource. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of the web resource. */
	Name: string | null;
	/** Unique identifier of the organization associated with the web resource. */
	readonly OrganizationId: DevKit.Guid | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Silverlight runtime version number required by a silverlight web resource. */
	SilverlightVersion: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	readonly VersionNumber: number | null;
	/** Unique identifier of the web resource. */
	WebResourceId: DevKit.Guid | null;
	/** For internal use only. */
	readonly WebResourceIdUnique: DevKit.Guid | null;
	/** Drop-down list for selecting the type of the web resource. */
	WebResourceType: number | null;
}

const WebResourceFieldConfig: DevKit.IWebApiFieldConfigMap = {
	CanBeDeleted: { logicalName: 'canbedeleted' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	Content: { logicalName: 'content' },
	ContentFileRef_name: { logicalName: 'contentfileref', readOnly: true },
	ContentJson: { logicalName: 'contentjson' },
	ContentJsonFileRef_name: { logicalName: 'contentjsonfileref', readOnly: true },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	DependencyXml: { logicalName: 'dependencyxml' },
	Description: { logicalName: 'description' },
	DisplayName: { logicalName: 'displayname' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsAvailableForMobileOffline: { logicalName: 'isavailableformobileoffline', type: 'Boolean' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsEnabledForMobileClient: { logicalName: 'isenabledformobileclient', type: 'Boolean' },
	IsHidden: { logicalName: 'ishidden' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	LanguageCode: { logicalName: 'languagecode', type: 'Integer' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	SilverlightVersion: { logicalName: 'silverlightversion' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WebResourceId: { logicalName: 'webresourceid' },
	WebResourceIdUnique: { logicalName: 'webresourceidunique', readOnly: true },
	WebResourceType: { logicalName: 'webresourcetype', type: 'Integer' },
};

/**
 * WebResource WebApi class for early-bound style coding
 * Usage: const webResource = new WebResourceApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class WebResourceApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IWebResourceApi>(entity, 'webresource', 'webresources', WebResourceFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface WebResourceApi extends IWebResourceApi { }
