//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class msdyn_mobileappApi {
		/**
		* DynamicsCrm.DevKit msdyn_mobileappApi
		* @param entity The entity object from OData response
		*/
		constructor(entity?: Record<string, any>)
		/**
		 * Get the raw value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The raw value or null if not found
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of an aliased field
		 * @param alias The alias field name
		 * @param isMultiOptionSet True if the field is a multi-option set
		 * @returns The formatted value or empty string if not found
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string | string[];
		/** The entity object for Create/Update operations*/
		readonly Entity: Record<string, any>;
		/** The OData entity object containing raw data*/
		readonly ODataEntity: Record<string, any>;
		/** The entity name */
		readonly EntityName: string;
		/** The entity collection name */
		readonly EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependent on the fields that are retrieved */
		readonly "@odata.etag": string;
		/** For internal use only. */
		readonly ComponentIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_mobileapp.ComponentState | null;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string | null;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string | null;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number | null;
		/** For internal use only. */
		IsCustomizable: string | null;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string | null;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string | null;
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
		msdyn_mobileappId: string | null;
		/** Organization Name in App Center */
		msdyn_orgName: string | null;
		/** Platform Type of Phone IOS/Android. */
		msdyn_platformType: string | null;
		/** Primary Published Canvas App to used in the Wrap. */
		msdyn_primaryPublishedAppName: string | null;
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
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string | null;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Status of the MobileApp */
		statecode: OptionSet.msdyn_mobileapp.statecode | null;
		/** Reason for the status of the msdyn_mobileapp */
		statuscode: OptionSet.msdyn_mobileapp.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number | null;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number | null;
		/** Version Number */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** For internal use only. */
			readonly ComponentIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsCustomizable: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Color used for action button when highlighted. */
			readonly msdyn_actionButtonHighlight: string;
			/** Active Directory Authentication Library Id used for Wrap. */
			readonly msdyn_adalClientId: string;
			/** Active Directory Authentication Library redirect URI used for Wrap. */
			readonly msdyn_adalRedirectUri: string;
			/** Android App center API token */
			readonly msdyn_AndroidAppCenterAPIToken: string;
			/** Notify if the user have saved the Android token. */
			readonly msdyn_AndroidAppCenterAPITokenSaved: string;
			/** Android App Center AppId aab. */
			readonly msdyn_appCenterAppIdAab: string;
			/** Android App Center AppId. */
			readonly msdyn_appCenterAppIdApk: string;
			/** IOS App center app id for ipa. */
			readonly msdyn_appCenterAppIdIpa: string;
			/** App Icon with 1024 x 1024 dimension */
			readonly msdyn_appIcon1024x1024_name: string;
			/** App Icon with 120 x 120 dimension */
			readonly msdyn_appIcon120x120_name: string;
			/** App Icon with 152 x 152 dimension */
			readonly msdyn_appIcon152x152_name: string;
			/** App Icon with 167 x 167 dimension */
			readonly msdyn_appIcon167x167_name: string;
			/** App Icon with 180 x 180 dimension */
			readonly msdyn_appIcon180x180_name: string;
			/** App Icon with 162 x 162 dimension */
			readonly msdyn_appIconHdpi_name: string;
			/** App Icon with 108 x 108 dimension */
			readonly msdyn_appIconMdpi_name: string;
			/** App Icon with 216 x 216 dimension */
			readonly msdyn_appIconXdpi_name: string;
			/** App Icon with 324 x 324 dimension */
			readonly msdyn_appIconXxhdpi_name: string;
			/** App Icon with 432 x 432 dimension */
			readonly msdyn_appIconXxxhdpi_name: string;
			/** Account Name of the Azure Blob Storage where the builds will be uploaded. */
			readonly msdyn_azureBlobStorageAccountName: string;
			/** Container Name of the Azure Blob Storage where the builds will be uploaded. */
			readonly msdyn_azureBlobStorageContainerName: string;
			/** Branch. */
			readonly msdyn_branch: string;
			/** All Build details of the App. */
			readonly msdyn_buildDetails: string;
			/** The bundleIds resource represents the app's unique identifier that you can register, modify, and delete. */
			readonly msdyn_bundleIdentifier: string;
			/** The Button color used in the App. */
			readonly msdyn_buttonColor: string;
			/** Custom Dimensions. */
			readonly msdyn_customDimensions: string;
			/** Display name of the App. */
			readonly msdyn_displayName: string;
			/** Fill color of the App. */
			readonly msdyn_fillColor: string;
			/** Heading Text Color in the App. */
			readonly msdyn_headingTextColor: string;
			/** Hyper Link Color in the App. */
			readonly msdyn_hyperLinkColor: string;
			/** IOS App Center API token */
			readonly msdyn_IOSAppCenterAPIToken: string;
			/** Notify if the user have saved the IOS token. */
			readonly msdyn_IOSAppCenterAPITokenSaved: string;
			/** iOS Enterprise Signing Enabled. */
			readonly msdyn_iosEnterpriseSigningEnabled: string;
			/** Is App Signing Enabled. */
			readonly msdyn_isAppSigningEnabled: string;
			/** Key Vault Uri. */
			readonly msdyn_keyVaultUri: string;
			/** Launch App Resources used to package the App. */
			readonly msdyn_launchAppResources_name: string;
			/** Mobile App Definition Android to package App. */
			readonly msdyn_mobileAppDefinitionAndroid_name: string;
			/** Mobile App Definition IOS to package App. */
			readonly msdyn_mobileAppDefinitionIOS_name: string;
			/** Unique identifier for entity instances */
			readonly msdyn_mobileappId: string;
			/** Organization Name in App Center */
			readonly msdyn_orgName: string;
			/** Platform Type of Phone IOS/Android. */
			readonly msdyn_platformType: string;
			/** Primary Published Canvas App to used in the Wrap. */
			readonly msdyn_primaryPublishedAppName: string;
			/** Pro Dev Custom Package. */
			readonly msdyn_proDev_customPackage_name: string;
			/** Push Notifications Android JSON. */
			readonly msdyn_pushNotificationsAndroidJson_name: string;
			/** Push Notifications Enabled Android. */
			readonly msdyn_pushNotificationsEnabled_android: string;
			/** Push Notifications Enabled iOS. */
			readonly msdyn_pushNotificationsEnabled_ios: string;
			/** Push Notifications iOS Plist. */
			readonly msdyn_pushNotificationsIosPlist_name: string;
			/** Recent build details of the App. */
			readonly msdyn_recentBuild: string;
			/** Secondary Apps used for Wrap. */
			readonly msdyn_secondaryApps: string;
			/** Secondary Published App Names to used in the Wrap. */
			readonly msdyn_secondaryPublishedAppNames: string;
			/** Status Bar Content Color Mode of the App. */
			readonly msdyn_statusBarContentColorMode: string;
			/** Storage type where the builds will be uploaded. */
			readonly msdyn_storageTypeForUpload: string;
			/** Tenant Splash Image in the App. */
			readonly msdyn_tenantSplashImage_name: string;
			/** Tenant Welcome Image in the App. */
			readonly msdyn_tenantWelcomeImage_name: string;
			/** Unique Name for the entity. */
			readonly msdyn_UniqueName: string;
			/** The name of the custom entity. */
			readonly name: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateAndTime: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Status of the MobileApp */
			readonly statecode: string;
			/** Reason for the status of the msdyn_mobileapp */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_mobileapp {
		enum ComponentState {
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum statecode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum statuscode {
			/** Active = 1*/
			Active = 1,
			/** Inactive = 2*/
			Inactive = 2
		}
		enum RollupState {
			/** NotCalculated = 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** Calculated = 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** OverflowError = 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** OtherError = 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** RetryLimitExceeded = 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** HierarchicalRecursionLimitReached = 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** LoopDetected = 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}