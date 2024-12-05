//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class msdyn_mobileappApi {
		/**
		* DynamicsCrm.DevKit msdyn_mobileappApi
		* @param entity The entity object
		*/
		constructor(entity?: any);
		/**
		 * Get the value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedValue(alias: string, isMultiOptionSet?: boolean): any;
		/**
		 * Get the formatted value of alias
		 * @param alias the alias value
		 * @param isMultiOptionSet true if the alias is multi OptionSet
		 */
		getAliasedFormattedValue(alias: string, isMultiOptionSet?: boolean): string;
		/** The entity object for Create/Update */
		Entity: unknown;
		/** The OData entity object */
		ODataEntity: unknown;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** For internal use only. */
		readonly ComponentIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.msdyn_mobileapp.ComponentState;
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		IsCustomizable: string;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Color used for action button when highlighted. */
		msdyn_actionButtonHighlight: string;
		/** Active Directory Authentication Library Id used for Wrap. */
		msdyn_adalClientId: string;
		/** Active Directory Authentication Library redirect URI used for Wrap. */
		msdyn_adalRedirectUri: string;
		/** Android App center API token */
		msdyn_AndroidAppCenterAPIToken: string;
		/** Notify if the user have saved the Android token. */
		msdyn_AndroidAppCenterAPITokenSaved: string;
		/** Android App Center AppId aab. */
		msdyn_appCenterAppIdAab: string;
		/** Android App Center AppId. */
		msdyn_appCenterAppIdApk: string;
		/** IOS App center app id for ipa. */
		msdyn_appCenterAppIdIpa: string;
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
		/** Branch. */
		msdyn_branch: string;
		/** All Build details of the App. */
		msdyn_buildDetails: string;
		/** The bundleIds resource represents the app's unique identifier that you can register, modify, and delete. */
		msdyn_bundleIdentifier: string;
		/** The Button color used in the App. */
		msdyn_buttonColor: string;
		/** Custom Dimensions. */
		msdyn_customDimensions: string;
		/** Display name of the App. */
		msdyn_displayName: string;
		/** Fill color of the App. */
		msdyn_fillColor: string;
		/** Heading Text Color in the App. */
		msdyn_headingTextColor: string;
		/** Hyper Link Color in the App. */
		msdyn_hyperLinkColor: string;
		/** IOS App Center API token */
		msdyn_IOSAppCenterAPIToken: string;
		/** Notify if the user have saved the IOS token. */
		msdyn_IOSAppCenterAPITokenSaved: string;
		/** iOS Enterprise Signing Enabled. */
		msdyn_iosEnterpriseSigningEnabled: string;
		/** Key Vault Uri. */
		msdyn_keyVaultUri: string;
		/** Launch App Resources used to package the App. */
		readonly msdyn_launchAppResources_name: string;
		/** Mobile App Definition Android to package App. */
		readonly msdyn_mobileAppDefinitionAndroid_name: string;
		/** Mobile App Definition IOS to package App. */
		readonly msdyn_mobileAppDefinitionIOS_name: string;
		/** Unique identifier for entity instances */
		msdyn_mobileappId: string;
		/** Organization Name in App Center */
		msdyn_orgName: string;
		/** Platform Type of Phone IOS/Android. */
		msdyn_platformType: string;
		/** Primary Published Canvas App to used in the Wrap. */
		msdyn_primaryPublishedAppName: string;
		/** Pro Dev Custom Package. */
		readonly msdyn_proDev_customPackage_name: string;
		/** Push Notifications Android JSON. */
		readonly msdyn_pushNotificationsAndroidJson_name: string;
		/** Push Notifications Enabled Android. */
		msdyn_pushNotificationsEnabled_android: string;
		/** Push Notifications Enabled iOS. */
		msdyn_pushNotificationsEnabled_ios: string;
		/** Push Notifications iOS Plist. */
		readonly msdyn_pushNotificationsIosPlist_name: string;
		/** Recent build details of the App. */
		msdyn_recentBuild: string;
		/** Secondary Apps used for Wrap. */
		msdyn_secondaryApps: string;
		/** Secondary Published App Names to used in the Wrap. */
		msdyn_secondaryPublishedAppNames: string;
		/** Status Bar Content Color Mode of the App. */
		msdyn_statusBarContentColorMode: string;
		/** Tenant Splash Image in the App. */
		readonly msdyn_tenantSplashImage_name: string;
		/** Tenant Welcome Image in the App. */
		readonly msdyn_tenantWelcomeImage_name: string;
		/** Unique Name for the entity. */
		msdyn_UniqueName: string;
		/** The name of the custom entity. */
		name: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateAndTime: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Status of the MobileApp */
		statecode: OptionSet.msdyn_mobileapp.statecode;
		/** Reason for the status of the msdyn_mobileapp */
		statuscode: OptionSet.msdyn_mobileapp.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum statecode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum statuscode {
			/** 1 */
			Active,
			/** 2 */
			Inactive
		}
		enum RollupState {
			/** 0 - Attribute value is yet to be calculated */
			NotCalculated,
			/** 1 - Attribute value has been calculated per the last update time in <AttributeSchemaName>_Date attribute */
			Calculated,
			/** 2 - Attribute value calculation lead to overflow error */
			OverflowError,
			/** 3 - Attribute value calculation failed due to an internal error, next run of calculation job will likely fix it */
			OtherError,
			/** 4 - Attribute value calculation failed because the maximum number of retry attempts to calculate the value were exceeded likely due to high number of concurrency and locking conflicts */
			RetryLimitExceeded,
			/** 5 - Attribute value calculation failed because maximum hierarchy depth limit for calculation was reached */
			HierarchicalRecursionLimitReached,
			/** 6 - Attribute value calculation failed because a recursive loop was detected in the hierarchy of the record */
			LoopDetected
		}
	}
}
//{'UseForm':true,'UseWebApi':true,'Version':'3.44.44.44'}