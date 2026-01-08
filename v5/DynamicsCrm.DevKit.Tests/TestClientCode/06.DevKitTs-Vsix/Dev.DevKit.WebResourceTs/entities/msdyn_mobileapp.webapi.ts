/**
 * msdyn_mobileapp.webapi.ts - msdyn_mobileapp WebApi for early-bound style coding
 * Generated file - DO NOT MODIFY MANUALLY
 */

import { createWebApiEntity } from '../lib/devkit';

/**
 * Formatted values interface for msdyn_mobileapp
 * All fields return string representation of their values
 */
export interface Imsdyn_mobileappFormattedValue {
	readonly ComponentIdUnique: string;
	readonly ComponentState: string;
	readonly CreatedBy: string;
	readonly CreatedOn_UtcDateAndTime: string;
	readonly CreatedOnBehalfBy: string;
	readonly ImportSequenceNumber: string;
	readonly IsCustomizable: string;
	readonly IsManaged: string;
	readonly ModifiedBy: string;
	readonly ModifiedOn_UtcDateAndTime: string;
	readonly ModifiedOnBehalfBy: string;
	readonly msdyn_actionButtonHighlight: string;
	readonly msdyn_adalClientId: string;
	readonly msdyn_adalRedirectUri: string;
	readonly msdyn_AndroidAppCenterAPIToken: string;
	readonly msdyn_AndroidAppCenterAPITokenSaved: string;
	readonly msdyn_appCenterAppIdAab: string;
	readonly msdyn_appCenterAppIdApk: string;
	readonly msdyn_appCenterAppIdIpa: string;
	readonly msdyn_appIcon1024x1024_name: string;
	readonly msdyn_appIcon120x120_name: string;
	readonly msdyn_appIcon152x152_name: string;
	readonly msdyn_appIcon167x167_name: string;
	readonly msdyn_appIcon180x180_name: string;
	readonly msdyn_appIconHdpi_name: string;
	readonly msdyn_appIconMdpi_name: string;
	readonly msdyn_appIconXdpi_name: string;
	readonly msdyn_appIconXxhdpi_name: string;
	readonly msdyn_appIconXxxhdpi_name: string;
	readonly msdyn_azureBlobStorageAccountName: string;
	readonly msdyn_azureBlobStorageContainerName: string;
	readonly msdyn_branch: string;
	readonly msdyn_buildDetails: string;
	readonly msdyn_bundleIdentifier: string;
	readonly msdyn_buttonColor: string;
	readonly msdyn_customDimensions: string;
	readonly msdyn_displayName: string;
	readonly msdyn_fillColor: string;
	readonly msdyn_headingTextColor: string;
	readonly msdyn_hyperLinkColor: string;
	readonly msdyn_IOSAppCenterAPIToken: string;
	readonly msdyn_IOSAppCenterAPITokenSaved: string;
	readonly msdyn_iosEnterpriseSigningEnabled: string;
	readonly msdyn_isAppSigningEnabled: string;
	readonly msdyn_keyVaultUri: string;
	readonly msdyn_launchAppResources_name: string;
	readonly msdyn_mobileAppDefinitionAndroid_name: string;
	readonly msdyn_mobileAppDefinitionIOS_name: string;
	readonly msdyn_mobileappId: string;
	readonly msdyn_orgName: string;
	readonly msdyn_platformType: string;
	readonly msdyn_primaryPublishedAppName: string;
	readonly msdyn_proDev_customPackage_name: string;
	readonly msdyn_pushNotificationsAndroidJson_name: string;
	readonly msdyn_pushNotificationsEnabled_android: string;
	readonly msdyn_pushNotificationsEnabled_ios: string;
	readonly msdyn_pushNotificationsIosPlist_name: string;
	readonly msdyn_recentBuild: string;
	readonly msdyn_secondaryApps: string;
	readonly msdyn_secondaryPublishedAppNames: string;
	readonly msdyn_statusBarContentColorMode: string;
	readonly msdyn_storageTypeForUpload: string;
	readonly msdyn_tenantSplashImage_name: string;
	readonly msdyn_tenantWelcomeImage_name: string;
	readonly msdyn_UniqueName: string;
	readonly name: string;
	readonly OverriddenCreatedOn_UtcDateOnly: string;
	readonly OverwriteTime_UtcDateAndTime: string;
	readonly OwnerId: string;
	readonly OwningBusinessUnit: string;
	readonly OwningTeam: string;
	readonly OwningUser: string;
	readonly SolutionId: string;
	readonly statecode: string;
	readonly statuscode: string;
	readonly SupportingSolutionId: string;
	readonly TimeZoneRuleVersionNumber: string;
	readonly UTCConversionTimeZoneCode: string;
	readonly VersionNumber: string;
}

/**
 * msdyn_mobileapp WebApi entity interface
 * Provides IntelliSense for early-bound style coding
 */
export interface Imsdyn_mobileappApi extends DevKit.IWebApiEntity {
	/** Formatted values for all fields */
	readonly FormattedValue: Imsdyn_mobileappFormattedValue;
	/** For internal use only. */
	readonly ComponentIdUnique: DevKit.Guid | null;
	/** For internal use only. */
	readonly ComponentState: number | null;
	/** Unique identifier of the user who created the record. */
	readonly CreatedBy: DevKit.Guid | null;
	/** Date and time when the record was created. */
	readonly CreatedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who created the record. */
	readonly CreatedOnBehalfBy: DevKit.Guid | null;
	/** Sequence number of the import that created this record. */
	ImportSequenceNumber: number | null;
	/** For internal use only. */
	IsCustomizable: string | null;
	/** Indicates whether the solution component is part of a managed solution. */
	readonly IsManaged: boolean | null;
	/** Unique identifier of the user who modified the record. */
	readonly ModifiedBy: DevKit.Guid | null;
	/** Date and time when the record was modified. */
	readonly ModifiedOn_UtcDateAndTime: Date | null;
	/** Unique identifier of the delegate user who modified the record. */
	readonly ModifiedOnBehalfBy: DevKit.Guid | null;
	/** Color used for action button when highlighted. */
	msdyn_actionButtonHighlight: string | null;
	/** Active Directory Authentication Library Id used for Wrap. */
	msdyn_adalClientId: string | null;
	/** Active Directory Authentication Library redirect URI used for Wrap. */
	msdyn_adalRedirectUri: string | null;
	/** Android App center API token */
	msdyn_AndroidAppCenterAPIToken: string | null;
	/** Notify if the user have saved the Android token. */
	msdyn_AndroidAppCenterAPITokenSaved: string | null;
	/** Android App Center AppId aab. */
	msdyn_appCenterAppIdAab: string | null;
	/** Android App Center AppId. */
	msdyn_appCenterAppIdApk: string | null;
	/** IOS App center app id for ipa. */
	msdyn_appCenterAppIdIpa: string | null;
	/** App Icon with 1024 x 1024 dimension */
	readonly msdyn_appIcon1024x1024_name: string | null;
	/** App Icon with 120 x 120 dimension */
	readonly msdyn_appIcon120x120_name: string | null;
	/** App Icon with 152 x 152 dimension */
	readonly msdyn_appIcon152x152_name: string | null;
	/** App Icon with 167 x 167 dimension */
	readonly msdyn_appIcon167x167_name: string | null;
	/** App Icon with 180 x 180 dimension */
	readonly msdyn_appIcon180x180_name: string | null;
	/** App Icon with 162 x 162 dimension */
	readonly msdyn_appIconHdpi_name: string | null;
	/** App Icon with 108 x 108 dimension */
	readonly msdyn_appIconMdpi_name: string | null;
	/** App Icon with 216 x 216 dimension */
	readonly msdyn_appIconXdpi_name: string | null;
	/** App Icon with 324 x 324 dimension */
	readonly msdyn_appIconXxhdpi_name: string | null;
	/** App Icon with 432 x 432 dimension */
	readonly msdyn_appIconXxxhdpi_name: string | null;
	/** Account Name of the Azure Blob Storage where the builds will be uploaded. */
	msdyn_azureBlobStorageAccountName: string | null;
	/** Container Name of the Azure Blob Storage where the builds will be uploaded. */
	msdyn_azureBlobStorageContainerName: string | null;
	/** Branch. */
	msdyn_branch: string | null;
	/** All Build details of the App. */
	msdyn_buildDetails: string | null;
	/** The bundleIds resource represents the app's unique identifier that you can register, modify, and delete. */
	msdyn_bundleIdentifier: string | null;
	/** The Button color used in the App. */
	msdyn_buttonColor: string | null;
	/** Custom Dimensions. */
	msdyn_customDimensions: string | null;
	/** Display name of the App. */
	msdyn_displayName: string | null;
	/** Fill color of the App. */
	msdyn_fillColor: string | null;
	/** Heading Text Color in the App. */
	msdyn_headingTextColor: string | null;
	/** Hyper Link Color in the App. */
	msdyn_hyperLinkColor: string | null;
	/** IOS App Center API token */
	msdyn_IOSAppCenterAPIToken: string | null;
	/** Notify if the user have saved the IOS token. */
	msdyn_IOSAppCenterAPITokenSaved: string | null;
	/** iOS Enterprise Signing Enabled. */
	msdyn_iosEnterpriseSigningEnabled: string | null;
	/** Is App Signing Enabled. */
	msdyn_isAppSigningEnabled: string | null;
	/** Key Vault Uri. */
	msdyn_keyVaultUri: string | null;
	/** Launch App Resources used to package the App. */
	readonly msdyn_launchAppResources_name: string | null;
	/** Mobile App Definition Android to package App. */
	readonly msdyn_mobileAppDefinitionAndroid_name: string | null;
	/** Mobile App Definition IOS to package App. */
	readonly msdyn_mobileAppDefinitionIOS_name: string | null;
	/** Unique identifier for entity instances */
	msdyn_mobileappId: DevKit.Guid | null;
	/** Organization Name in App Center */
	msdyn_orgName: string | null;
	/** Platform Type of Phone IOS/Android. */
	msdyn_platformType: string | null;
	/** Primary Published Canvas App to used in the Wrap. */
	msdyn_primaryPublishedAppName: DevKit.Guid | null;
	/** Pro Dev Custom Package. */
	readonly msdyn_proDev_customPackage_name: string | null;
	/** Push Notifications Android JSON. */
	readonly msdyn_pushNotificationsAndroidJson_name: string | null;
	/** Push Notifications Enabled Android. */
	msdyn_pushNotificationsEnabled_android: string | null;
	/** Push Notifications Enabled iOS. */
	msdyn_pushNotificationsEnabled_ios: string | null;
	/** Push Notifications iOS Plist. */
	readonly msdyn_pushNotificationsIosPlist_name: string | null;
	/** Recent build details of the App. */
	msdyn_recentBuild: string | null;
	/** Secondary Apps used for Wrap. */
	msdyn_secondaryApps: string | null;
	/** Secondary Published App Names to used in the Wrap. */
	msdyn_secondaryPublishedAppNames: string | null;
	/** Status Bar Content Color Mode of the App. */
	msdyn_statusBarContentColorMode: string | null;
	/** Storage type where the builds will be uploaded. */
	msdyn_storageTypeForUpload: string | null;
	/** Tenant Splash Image in the App. */
	readonly msdyn_tenantSplashImage_name: string | null;
	/** Tenant Welcome Image in the App. */
	readonly msdyn_tenantWelcomeImage_name: string | null;
	/** Unique Name for the entity. */
	msdyn_UniqueName: string | null;
	/** The name of the custom entity. */
	name: string | null;
	/** Date and time that the record was migrated. */
	OverriddenCreatedOn_UtcDateOnly: Date | null;
	/** For internal use only. */
	readonly OverwriteTime_UtcDateAndTime: Date | null;
	/** Owner Id */
	OwnerId: DevKit.Guid | null;
	/** Unique identifier for the business unit that owns the record */
	readonly OwningBusinessUnit: DevKit.Guid | null;
	/** Unique identifier for the team that owns the record. */
	readonly OwningTeam: DevKit.Guid | null;
	/** Unique identifier for the user that owns the record. */
	readonly OwningUser: DevKit.Guid | null;
	/** Unique identifier of the associated solution. */
	readonly SolutionId: DevKit.Guid | null;
	/** Status of the MobileApp */
	statecode: number | null;
	/** Reason for the status of the msdyn_mobileapp */
	statuscode: number | null;
	/** For internal use only. */
	readonly SupportingSolutionId: DevKit.Guid | null;
	/** For internal use only. */
	TimeZoneRuleVersionNumber: number | null;
	/** Time zone code that was in use when the record was created. */
	UTCConversionTimeZoneCode: number | null;
	/** Version Number */
	readonly VersionNumber: number | null;
}

const msdyn_mobileappFieldConfig: DevKit.IWebApiFieldConfigMap = {
	ComponentIdUnique: { logicalName: 'componentidunique', readOnly: true },
	ComponentState: { logicalName: 'componentstate', readOnly: true, type: 'Integer' },
	CreatedBy: { schemaName: 'CreatedBy', logicalName: '_createdby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	CreatedOn_UtcDateAndTime: { logicalName: 'createdon', readOnly: true, type: 'DateTime' },
	CreatedOnBehalfBy: { schemaName: 'CreatedOnBehalfBy', logicalName: '_createdonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ImportSequenceNumber: { logicalName: 'importsequencenumber', type: 'Integer' },
	IsCustomizable: { logicalName: 'iscustomizable' },
	IsManaged: { logicalName: 'ismanaged', readOnly: true, type: 'Boolean' },
	ModifiedBy: { schemaName: 'ModifiedBy', logicalName: '_modifiedby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	ModifiedOn_UtcDateAndTime: { logicalName: 'modifiedon', readOnly: true, type: 'DateTime' },
	ModifiedOnBehalfBy: { schemaName: 'ModifiedOnBehalfBy', logicalName: '_modifiedonbehalfby_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	msdyn_actionButtonHighlight: { logicalName: 'msdyn_actionbuttonhighlight' },
	msdyn_adalClientId: { logicalName: 'msdyn_adalclientid' },
	msdyn_adalRedirectUri: { logicalName: 'msdyn_adalredirecturi' },
	msdyn_AndroidAppCenterAPIToken: { logicalName: 'msdyn_androidappcenterapitoken' },
	msdyn_AndroidAppCenterAPITokenSaved: { logicalName: 'msdyn_androidappcenterapitokensaved' },
	msdyn_appCenterAppIdAab: { logicalName: 'msdyn_appcenterappidaab' },
	msdyn_appCenterAppIdApk: { logicalName: 'msdyn_appcenterappidapk' },
	msdyn_appCenterAppIdIpa: { logicalName: 'msdyn_appcenterappidipa' },
	msdyn_appIcon1024x1024_name: { logicalName: 'msdyn_appicon1024x1024', readOnly: true },
	msdyn_appIcon120x120_name: { logicalName: 'msdyn_appicon120x120', readOnly: true },
	msdyn_appIcon152x152_name: { logicalName: 'msdyn_appicon152x152', readOnly: true },
	msdyn_appIcon167x167_name: { logicalName: 'msdyn_appicon167x167', readOnly: true },
	msdyn_appIcon180x180_name: { logicalName: 'msdyn_appicon180x180', readOnly: true },
	msdyn_appIconHdpi_name: { logicalName: 'msdyn_appiconhdpi', readOnly: true },
	msdyn_appIconMdpi_name: { logicalName: 'msdyn_appiconmdpi', readOnly: true },
	msdyn_appIconXdpi_name: { logicalName: 'msdyn_appiconxdpi', readOnly: true },
	msdyn_appIconXxhdpi_name: { logicalName: 'msdyn_appiconxxhdpi', readOnly: true },
	msdyn_appIconXxxhdpi_name: { logicalName: 'msdyn_appiconxxxhdpi', readOnly: true },
	msdyn_azureBlobStorageAccountName: { logicalName: 'msdyn_azureblobstorageaccountname' },
	msdyn_azureBlobStorageContainerName: { logicalName: 'msdyn_azureblobstoragecontainername' },
	msdyn_branch: { logicalName: 'msdyn_branch' },
	msdyn_buildDetails: { logicalName: 'msdyn_builddetails' },
	msdyn_bundleIdentifier: { logicalName: 'msdyn_bundleidentifier' },
	msdyn_buttonColor: { logicalName: 'msdyn_buttoncolor' },
	msdyn_customDimensions: { logicalName: 'msdyn_customdimensions' },
	msdyn_displayName: { logicalName: 'msdyn_displayname' },
	msdyn_fillColor: { logicalName: 'msdyn_fillcolor' },
	msdyn_headingTextColor: { logicalName: 'msdyn_headingtextcolor' },
	msdyn_hyperLinkColor: { logicalName: 'msdyn_hyperlinkcolor' },
	msdyn_IOSAppCenterAPIToken: { logicalName: 'msdyn_iosappcenterapitoken' },
	msdyn_IOSAppCenterAPITokenSaved: { logicalName: 'msdyn_iosappcenterapitokensaved' },
	msdyn_iosEnterpriseSigningEnabled: { logicalName: 'msdyn_iosenterprisesigningenabled' },
	msdyn_isAppSigningEnabled: { logicalName: 'msdyn_isappsigningenabled' },
	msdyn_keyVaultUri: { logicalName: 'msdyn_keyvaulturi' },
	msdyn_launchAppResources_name: { logicalName: 'msdyn_launchappresources', readOnly: true },
	msdyn_mobileAppDefinitionAndroid_name: { logicalName: 'msdyn_mobileappdefinitionandroid', readOnly: true },
	msdyn_mobileAppDefinitionIOS_name: { logicalName: 'msdyn_mobileappdefinitionios', readOnly: true },
	msdyn_mobileappId: { logicalName: 'msdyn_mobileappid' },
	msdyn_orgName: { logicalName: 'msdyn_orgname' },
	msdyn_platformType: { logicalName: 'msdyn_platformtype' },
	msdyn_primaryPublishedAppName: { schemaName: 'msdyn_primaryPublishedAppName', logicalName: '_msdyn_primarypublishedappname_value', entityCollectionName: 'canvasapps', entityLogicalName: 'canvasapp' },
	msdyn_proDev_customPackage_name: { logicalName: 'msdyn_prodev_custompackage', readOnly: true },
	msdyn_pushNotificationsAndroidJson_name: { logicalName: 'msdyn_pushnotificationsandroidjson', readOnly: true },
	msdyn_pushNotificationsEnabled_android: { logicalName: 'msdyn_pushnotificationsenabled_android' },
	msdyn_pushNotificationsEnabled_ios: { logicalName: 'msdyn_pushnotificationsenabled_ios' },
	msdyn_pushNotificationsIosPlist_name: { logicalName: 'msdyn_pushnotificationsiosplist', readOnly: true },
	msdyn_recentBuild: { logicalName: 'msdyn_recentbuild' },
	msdyn_secondaryApps: { logicalName: 'msdyn_secondaryapps' },
	msdyn_secondaryPublishedAppNames: { logicalName: 'msdyn_secondarypublishedappnames' },
	msdyn_statusBarContentColorMode: { logicalName: 'msdyn_statusbarcontentcolormode' },
	msdyn_storageTypeForUpload: { logicalName: 'msdyn_storagetypeforupload' },
	msdyn_tenantSplashImage_name: { logicalName: 'msdyn_tenantsplashimage', readOnly: true },
	msdyn_tenantWelcomeImage_name: { logicalName: 'msdyn_tenantwelcomeimage', readOnly: true },
	msdyn_UniqueName: { logicalName: 'msdyn_uniquename' },
	name: { logicalName: 'name' },
	OverriddenCreatedOn_UtcDateOnly: { logicalName: 'overriddencreatedon', type: 'DateTime' },
	OverwriteTime_UtcDateAndTime: { logicalName: 'overwritetime', readOnly: true, type: 'DateTime' },
	OwnerId: { schemaName: 'OwnerId', logicalName: '_ownerid_value', entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	OwningBusinessUnit: { schemaName: 'OwningBusinessUnit', logicalName: '_owningbusinessunit_value', readOnly: true, entityCollectionName: 'businessunits', entityLogicalName: 'businessunit' },
	OwningTeam: { schemaName: 'OwningTeam', logicalName: '_owningteam_value', readOnly: true, entityCollectionName: 'teams', entityLogicalName: 'team' },
	OwningUser: { schemaName: 'OwningUser', logicalName: '_owninguser_value', readOnly: true, entityCollectionName: 'systemusers', entityLogicalName: 'systemuser' },
	SolutionId: { logicalName: 'solutionid', readOnly: true },
	statecode: { logicalName: 'statecode', type: 'Integer' },
	statuscode: { logicalName: 'statuscode', type: 'Integer' },
	SupportingSolutionId: { logicalName: 'supportingsolutionid', readOnly: true },
	TimeZoneRuleVersionNumber: { logicalName: 'timezoneruleversionnumber', type: 'Integer' },
	UTCConversionTimeZoneCode: { logicalName: 'utcconversiontimezonecode', type: 'Integer' },
	VersionNumber: { logicalName: 'versionnumber', readOnly: true, type: 'Integer' },
};

/**
 * msdyn_mobileapp WebApi class for early-bound style coding
 * Usage: const msdyn_mobileapp = new msdyn_mobileappApi(entity);
 * @param entity The entity object from OData response (optional for create operations)
 */
export class msdyn_mobileappApi {
	constructor(entity?: Record<string, any>) {
		const webApiEntity = createWebApiEntity<Imsdyn_mobileappApi>(entity, 'msdyn_mobileapp', 'msdyn_mobileapps', msdyn_mobileappFieldConfig);
		Object.defineProperties(this, Object.getOwnPropertyDescriptors(webApiEntity));
	}
}

export interface msdyn_mobileappApi extends Imsdyn_mobileappApi { }
