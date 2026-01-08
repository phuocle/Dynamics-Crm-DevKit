/**
 * CanvasApp.webapi.ts - CanvasApp WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for CanvasApp
 * All fields return string representation of their values
 */
export interface ICanvasAppFormattedValue {
	readonly AADCreatedById: string;
	readonly AADLastModifiedById: string;
	readonly AADLastPublishedById: string;
	readonly AdminControlBypassConsent: string;
	readonly AppComponentDependencies: string;
	readonly AppComponents: string;
	readonly AppOpenUri: string;
	readonly AppVersion: string;
	readonly Assets_name: string;
	readonly AuthorizationReferences: string;
	readonly BackgroundColor: string;
	readonly BackgroundImage_name: string;
	readonly BypassConsent: string;
	readonly CanConsumeAppPass: string;
	readonly CanvasAppId: string;
	readonly CanvasAppRowId: string;
	readonly CanvasAppType: string;
	readonly CdsDependencies: string;
	readonly CommitMessage: string;
	readonly ComponentState: string;
	readonly ConnectionReferences: string;
	readonly CreatedByClientVersion: string;
	readonly CreatedTime_UtcDateAndTime: string;
	readonly DatabaseReferences: string;
	readonly Description: string;
	readonly DisplayName: string;
	readonly Document_name: string;
	readonly EmbeddedApp: string;
	readonly GalleryItemId: string;
	readonly IntroducedVersion: string;
	readonly IsCdsUpgraded: string;
	readonly IsCustomizable: string;
	readonly IsFeaturedApp: string;
	readonly IsHeroApp: string;
	readonly IsHidden: string;
	readonly IsManaged: string;
	readonly LargeIcon_name: string;
	readonly LastModifiedTime_UtcDateAndTime: string;
	readonly LastPublishTime_UtcDateAndTime: string;
	readonly MediumIcon_name: string;
	readonly MinClientVersion: string;
	readonly Name: string;
	readonly OverwriteTime_UtcDateOnly: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly Publisher: string;
	readonly SmallIcon_name: string;
	readonly SolutionId: string;
	readonly Status: string;
	readonly SupportingSolutionId: string;
	readonly Tags: string;
	readonly TeamsIcon_name: string;
	readonly UniqueCanvasAppId: string;
	readonly VersionNumber: string;
	readonly WideIcon_name: string;
}

/**
 * CanvasApp WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface ICanvasAppApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: ICanvasAppFormattedValue;
	/** Unique identifier of the user who created the canvas app. */
	AADCreatedById: string | null;
	/** Unique identifier of the user who last modified the application. */
	AADLastModifiedById: string | null;
	/** Unique identifier of the user who last published the application. */
	AADLastPublishedById: string | null;
	/** Indicates whether the canvas app was marked for bypass consent by an admin. */
	AdminControlBypassConsent: boolean | null;
	/** The app component dependencies. */
	AppComponentDependencies: string | null;
	/** The app components. */
	AppComponents: string | null;
	/** The app open URI. */
	AppOpenUri: string | null;
	/** The application version. */
	AppVersion: string | null;
	/** Assets for Canvas Apps. */
	readonly Assets_name: string | null;
	/** The authorization references of the application. */
	AuthorizationReferences: string | null;
	/** The background image color. */
	BackgroundColor: string | null;
	/** Background image for Canvas Apps. */
	readonly BackgroundImage_name: string | null;
	/** Indicates whether the canvas app should bypass consent from consumers. */
	BypassConsent: boolean | null;
	/** The type of the canvas app. */
	CanConsumeAppPass: boolean | null;
	/** For internal use only. */
	CanvasAppId: DevKit.Guid | null;
	/** For internal use only. */
	readonly CanvasAppRowId: DevKit.Guid | null;
	/** The type of the canvas app. */
	CanvasAppType: number | null;
	/** Internal use. The app dependency details. */
	CdsDependencies: string | null;
	/** The commit message of the app. */
	CommitMessage: string | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** The connection references of the application. */
	ConnectionReferences: string | null;
	/** The version of the client that was used to author the application. */
	CreatedByClientVersion: string | null;
	/** Date and time when the application was created. */
	CreatedTime_UtcDateAndTime: Date | null;
	/** The database references of the application. */
	DatabaseReferences: string | null;
	/** The description of the app. */
	Description: string | null;
	/** The display name of the app. */
	DisplayName: string | null;
	/** Document for Canvas Apps. */
	readonly Document_name: string | null;
	/** Internal use. The embedded app information. */
	EmbeddedApp: string | null;
	/** The gallery item identifier. */
	GalleryItemId: string | null;
	/** Version in which the canvas app is introduced. */
	IntroducedVersion: string | null;
	/** Indicates whether the canvas app contains CDS 1.0 references. */
	IsCdsUpgraded: boolean | null;
	/** Information that specifies whether this component can be customized. */
	IsCustomizable: string | null;
	/** Indicates whether the canvas app is a featured app. */
	IsFeaturedApp: boolean | null;
	/** Indicates whether the canvas app is a hero app. */
	IsHeroApp: boolean | null;
	/** Indicates whether the canvas app is hidden from a user's list. */
	IsHidden: boolean | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Large icon for Canvas Apps. */
	readonly LargeIcon_name: string | null;
	/** Date and time when the application was last modified. */
	LastModifiedTime_UtcDateAndTime: Date | null;
	/** Date and time when the application was last published. */
	LastPublishTime_UtcDateAndTime: Date | null;
	/** Medium icon for Canvas Apps. */
	readonly MediumIcon_name: string | null;
	/** The version of the client that was used to author the application. */
	MinClientVersion: string | null;
	/** Name of the CanvasApp */
	Name: string | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateOnly: Date | null;
	/** Unique identifier of the user or team who owns the canvas app. */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier of the business unit that owns the process. */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier of the team who owns the process. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier of the user who owns the process. */
	readonly OwningUser: DevKit.Guid | null;
	/** The publisher of the app. */
	Publisher: string | null;
	/** Small icon for Canvas Apps. */
	readonly SmallIcon_name: string | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** A value indicating whether the application is ready for consumption. */
	Status: string | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** The metadata tags of the application. */
	Tags: string | null;
	/** Teams icon for Canvas Apps. */
	readonly TeamsIcon_name: string | null;
	/** The globally unique canvas app id */
	UniqueCanvasAppId: string | null;
	readonly VersionNumber: number | null;
	/** Wide icon for Canvas Apps. */
	readonly WideIcon_name: string | null;
}

const CanvasAppFieldConfig: DevKit.IWebApiFieldConfigMap = {
	AADCreatedById: { logicalName: 'aadcreatedbyid' },
	AADLastModifiedById: { logicalName: 'aadlastmodifiedbyid' },
	AADLastPublishedById: { logicalName: 'aadlastpublishedbyid' },
	AdminControlBypassConsent: { logicalName: 'admincontrolbypassconsent', type: 'Boolean' },
	AppComponentDependencies: { logicalName: 'appcomponentdependencies' },
	AppComponents: { logicalName: 'appcomponents' },
	AppOpenUri: { logicalName: 'appopenuri' },
	AppVersion: { logicalName: 'appversion' },
	Assets_name: { logicalName: 'assets', readOnly: true },
	AuthorizationReferences: { logicalName: 'authorizationreferences' },
	BackgroundColor: { logicalName: 'backgroundcolor' },
	BackgroundImage_name: { logicalName: 'background_image', readOnly: true },
	BypassConsent: { logicalName: 'bypassconsent', type: 'Boolean' },
	CanConsumeAppPass: { logicalName: 'canconsumeapppass', type: 'Boolean' },
	CanvasAppId: { logicalName: 'canvasappid' },
	CanvasAppRowId: { logicalName: 'canvasapprowid', readOnly: true },
	CanvasAppType: { logicalName: 'canvasapptype', type: 'Integer' },
	CdsDependencies: { logicalName: 'cdsdependencies' },
	CommitMessage: { logicalName: 'commitmessage' },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	ConnectionReferences: { logicalName: 'connectionreferences' },
	CreatedByClientVersion: { logicalName: 'createdbyclientversion' },
	CreatedTime_UtcDateAndTime: { logicalName: 'createdtime', type: 'DateTime' },
	DatabaseReferences: { logicalName: 'databasereferences' },
	Description: { logicalName: 'description' },
	DisplayName: { logicalName: 'displayname' },
	Document_name: { logicalName: 'document', readOnly: true },
	EmbeddedApp: { logicalName: 'embeddedapp' },
	GalleryItemId: { logicalName: 'galleryitemid' },
	IntroducedVersion: { logicalName: 'introducedversion' },
	IsCdsUpgraded: { logicalName: 'iscdsupgraded', type: 'Boolean' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsFeaturedApp: { logicalName: 'isfeaturedapp', type: 'Boolean' },
	IsHeroApp: { logicalName: 'isheroapp', type: 'Boolean' },
	IsHidden: { logicalName: 'ishidden', type: 'Boolean' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	LargeIcon_name: { logicalName: 'large_icon', readOnly: true },
	LastModifiedTime_UtcDateAndTime: { logicalName: 'lastmodifiedtime', type: 'DateTime' },
	LastPublishTime_UtcDateAndTime: { logicalName: 'lastpublishtime', type: 'DateTime' },
	MediumIcon_name: { logicalName: 'medium_icon', readOnly: true },
	MinClientVersion: { logicalName: 'minclientversion' },
	Name: { logicalName: 'name' },
	OverwriteTime_UtcDateOnly: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	Publisher: { logicalName: 'publisher' },
	SmallIcon_name: { logicalName: 'small_icon', readOnly: true },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	Status: { logicalName: 'status' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	Tags: { logicalName: 'tags' },
	TeamsIcon_name: { logicalName: 'teams_icon', readOnly: true },
	UniqueCanvasAppId: { logicalName: 'uniquecanvasappid' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
	WideIcon_name: { logicalName: 'wide_icon', readOnly: true },
};

/**
 * CanvasApp WebApi class for early-bound style coding
 * Usage: const canvasApp = new CanvasAppApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class CanvasAppApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<ICanvasAppApi>(entity, 'canvasapp', 'canvasapps', CanvasAppFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface CanvasAppApi extends ICanvasAppApi { }
