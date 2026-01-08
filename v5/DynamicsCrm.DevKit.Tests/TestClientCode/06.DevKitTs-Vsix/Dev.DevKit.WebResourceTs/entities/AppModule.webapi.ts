/**
 * AppModule.webapi.ts - AppModule WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * AppModule WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface IAppModuleApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields - auto-mapped to readonly string */
	readonly FormattedValue: { readonly [K in keyof Omit<IAppModuleApi, 'FormattedValue'>]: string };
	/** This field is used to store AI generated Description for Model-driven App */
	aiappdescription: string | null;
	/** This field stores the Time when last AI App Description was generated. */
	aidescriptiongeneratedon_UtcDateAndTime: Date | null;
	/** This field is used to store App Graph for Model-driven App */
	appgraph: string | null;
	/** Unique identifier for entity instances */
	AppModuleId: DevKit.Guid | null;
	/** Unique identifier of the App Module used when synchronizing customizations for the Microsoft Dynamics 365 client for Outlook */
	AppModuleIdUnique: DevKit.Guid | null;
	/** App Module Version */
	AppModuleVersion: string | null;
	/** App Module Xml Managed */
	AppModuleXmlManaged: string | null;
	/** Client Type such as Web or UCI */
	ClientType: number | null;
	/** For internal use only */
	readonly ComponentState: number | null;
	/** Contains configuration XML */
	ConfigXML: string | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Description for entity */
	Description: string | null;
	/** App Module Descriptor */
	readonly Descriptor: string | null;
	/** App Module Event Handlers */
	EventHandlers: string | null;
	/** Form Factor */
	FormFactor: number | null;
	/** Unique identifier of the data import or data migration that created this record. */
	ImportSequenceNumber: number | null;
	/** Version in which the similarity rule is introduced. */
	IntroducedVersion: string | null;
	/** Is Default */
	IsDefault: boolean | null;
	/** Is Featured */
	IsFeatured: boolean | null;
	/** Is Managed */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Name of App Module */
	Name: string | null;
	/** App navigation type */
	NavigationType: number | null;
	/** The client that this app is optimized for */
	OptimizedFor: string | null;
	/** Unique identifier of the organization associated with the app. */
	readonly OrganizationId: DevKit.Guid | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** Internal use only */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Date and time when the record was published. */
	PublishedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the publisher. */
	PublisherId: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the Model-driven App */
	statecode: number | null;
	/** Reason for the status of the Model-driven App */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** Unique Name of App Module */
	UniqueName: string | null;
	/** Contains URL */
	URL: string | null;
	readonly VersionNumber: number | null;
	/** Unique identifier of the Web Resource */
	WebResourceId: DevKit.Guid | null;
	/** Unique identifier of the Web Resource as Welcome Page Id */
	WelcomePageId: DevKit.Guid | null;
}

const AppModuleFieldConfig: DevKit.IWebApiFieldConfigMap = {
	aiappdescription: { logicalName: 'aiappdescription' },
	aidescriptiongeneratedon_UtcDateAndTime: { logicalName: 'aidescriptiongeneratedon', type: 'DateTime' },
	appgraph: { logicalName: 'appgraph' },
	AppModuleId: { logicalName: 'appmoduleid' },
	AppModuleIdUnique: { logicalName: 'appmoduleidunique' },
	AppModuleVersion: { logicalName: 'appmoduleversion' },
	AppModuleXmlManaged: { logicalName: 'appmodulexmlmanaged' },
	ClientType: { logicalName: 'clienttype', type: 'Integer' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ConfigXML: { logicalName: 'configxml' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Description: { logicalName: 'description' },
	Descriptor: { logicalName: 'descriptor', readOnly: true },
	EventHandlers: { logicalName: 'eventhandlers' },
	FormFactor: { logicalName: 'formfactor', type: 'Integer' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsDefault: { logicalName: 'isdefault', type: 'Boolean' },
	IsFeatured: { logicalName: 'isfeatured', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Name: { logicalName: 'name' },
	NavigationType: { logicalName: 'navigationtype', type: 'Integer' },
	OptimizedFor: { logicalName: 'optimizedfor' },
	OrganizationId: { schemaName: 'OrganizationId', logicalName: '_organizationid_value', readOnly: true, entityCollectionName: 'organizations', entityLogicalName: 'organization' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	PublishedOn_UtcDateAndTime: { logicalName: 'publishedon', type: 'DateTime' },
	PublisherId: { schemaName: 'PublisherId', logicalName: '_publisherid_value', entityCollectionName: 'publishers', entityLogicalName: 'publisher' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	UniqueName: { logicalName: 'uniquename' },
	URL: { logicalName: 'url' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WebResourceId: { logicalName: 'webresourceid' },
	WelcomePageId: { logicalName: 'welcomepageid' },
};

/**
 * AppModule WebApi class for early-bound style coding
 * Usage: const appModule = new AppModuleApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class AppModuleApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<IAppModuleApi>(entity, 'appmodule', 'appmodules', AppModuleFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface AppModuleApi extends IAppModuleApi { }
