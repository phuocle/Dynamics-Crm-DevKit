//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class CanvasAppApi {
		/**
		* DynamicsCrm.DevKit CanvasAppApi
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
		/** Unique identifier of the user who created the canvas app. */
		AADCreatedById: string;
		/** Unique identifier of the user who last modified the application. */
		AADLastModifiedById: string;
		/** Unique identifier of the user who last published the application. */
		AADLastPublishedById: string;
		/** Indicates whether the canvas app was marked for bypass consent by an admin. */
		AdminControlBypassConsent: boolean;
		/** The app component dependencies. */
		AppComponentDependencies: string;
		/** The app components. */
		AppComponents: string;
		/** The app open URI. */
		AppOpenUri: string;
		/** The application version. */
		AppVersion: string;
		/** Assets for Canvas Apps. */
		readonly Assets_name: string;
		/** The authorization references of the application. */
		AuthorizationReferences: string;
		/** The background image color. */
		BackgroundColor: string;
		/** Background image for Canvas Apps. */
		readonly BackgroundImage_name: string;
		/** Indicates whether the canvas app should bypass consent from consumers. */
		BypassConsent: boolean;
		/** The type of the canvas app. */
		CanConsumeAppPass: boolean;
		/** For internal use only. */
		CanvasAppId: string;
		/** For internal use only. */
		readonly CanvasAppRowId: string;
		/** The type of the canvas app. */
		CanvasAppType: OptionSet.CanvasApp.CanvasAppType;
		/** Internal use. The app dependency details. */
		CdsDependencies: string;
		/** The commit message of the app. */
		CommitMessage: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.CanvasApp.ComponentState;
		/** The connection references of the application. */
		ConnectionReferences: string;
		/** The version of the client that was used to author the application. */
		CreatedByClientVersion: string;
		/** Date and time when the application was created. */
		CreatedTime_UtcDateAndTime: Date;
		/** The database references of the application. */
		DatabaseReferences: string;
		/** The description of the app. */
		Description: string;
		/** The display name of the app. */
		DisplayName: string;
		/** Document for Canvas Apps. */
		readonly Document_name: string;
		/** Internal use. The embedded app information. */
		EmbeddedApp: string;
		/** The gallery item identifier. */
		GalleryItemId: string;
		/** Version in which the canvas app is introduced. */
		IntroducedVersion: string;
		/** Indicates whether the canvas app contains CDS 1.0 references. */
		IsCdsUpgraded: boolean;
		/** Information that specifies whether this component can be customized. */
		IsCustomizable: string;
		/** Indicates whether the canvas app is a featured app. */
		IsFeaturedApp: boolean;
		/** Indicates whether the canvas app is a hero app. */
		IsHeroApp: boolean;
		/** Indicates whether the canvas app is hidden from a user's list. */
		IsHidden: boolean;
		/** Indicates whether the solution component is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Large icon for Canvas Apps. */
		readonly LargeIcon_name: string;
		/** Date and time when the application was last modified. */
		LastModifiedTime_UtcDateAndTime: Date;
		/** Date and time when the application was last published. */
		LastPublishTime_UtcDateAndTime: Date;
		/** Medium icon for Canvas Apps. */
		readonly MediumIcon_name: string;
		/** The version of the client that was used to author the application. */
		MinClientVersion: string;
		/** Name of the CanvasApp */
		Name: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier of the business unit that owns the process. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns the process. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns the process. */
		readonly OwningUser: string;
		/** The publisher of the app. */
		Publisher: string;
		/** Small icon for Canvas Apps. */
		readonly SmallIcon_name: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** A value indicating whether the application is ready for consumption. */
		Status: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** The metadata tags of the application. */
		Tags: string;
		/** Teams icon for Canvas Apps. */
		readonly TeamsIcon_name: string;
		/** The globally unique canvas app id */
		UniqueCanvasAppId: string;
		readonly VersionNumber: number;
		/** Wide icon for Canvas Apps. */
		readonly WideIcon_name: string;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the canvas app. */
			readonly AADCreatedById: string;
			/** Unique identifier of the user who last modified the application. */
			readonly AADLastModifiedById: string;
			/** Unique identifier of the user who last published the application. */
			readonly AADLastPublishedById: string;
			/** Indicates whether the canvas app was marked for bypass consent by an admin. */
			readonly AdminControlBypassConsent: string;
			/** The app component dependencies. */
			readonly AppComponentDependencies: string;
			/** The app components. */
			readonly AppComponents: string;
			/** The app open URI. */
			readonly AppOpenUri: string;
			/** The application version. */
			readonly AppVersion: string;
			/** Assets for Canvas Apps. */
			readonly Assets_name: string;
			/** The authorization references of the application. */
			readonly AuthorizationReferences: string;
			/** The background image color. */
			readonly BackgroundColor: string;
			/** Background image for Canvas Apps. */
			readonly BackgroundImage_name: string;
			/** Indicates whether the canvas app should bypass consent from consumers. */
			readonly BypassConsent: string;
			/** The type of the canvas app. */
			readonly CanConsumeAppPass: string;
			/** For internal use only. */
			readonly CanvasAppId: string;
			/** For internal use only. */
			readonly CanvasAppRowId: string;
			/** The type of the canvas app. */
			readonly CanvasAppType: string;
			/** Internal use. The app dependency details. */
			readonly CdsDependencies: string;
			/** The commit message of the app. */
			readonly CommitMessage: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** The connection references of the application. */
			readonly ConnectionReferences: string;
			/** The version of the client that was used to author the application. */
			readonly CreatedByClientVersion: string;
			/** Date and time when the application was created. */
			readonly CreatedTime_UtcDateAndTime: string;
			/** The database references of the application. */
			readonly DatabaseReferences: string;
			/** The description of the app. */
			readonly Description: string;
			/** The display name of the app. */
			readonly DisplayName: string;
			/** Document for Canvas Apps. */
			readonly Document_name: string;
			/** Internal use. The embedded app information. */
			readonly EmbeddedApp: string;
			/** The gallery item identifier. */
			readonly GalleryItemId: string;
			/** Version in which the canvas app is introduced. */
			readonly IntroducedVersion: string;
			/** Indicates whether the canvas app contains CDS 1.0 references. */
			readonly IsCdsUpgraded: string;
			/** Information that specifies whether this component can be customized. */
			readonly IsCustomizable: string;
			/** Indicates whether the canvas app is a featured app. */
			readonly IsFeaturedApp: string;
			/** Indicates whether the canvas app is a hero app. */
			readonly IsHeroApp: string;
			/** Indicates whether the canvas app is hidden from a user's list. */
			readonly IsHidden: string;
			/** Indicates whether the solution component is part of a managed solution. */
			readonly IsManaged: string;
			/** Large icon for Canvas Apps. */
			readonly LargeIcon_name: string;
			/** Date and time when the application was last modified. */
			readonly LastModifiedTime_UtcDateAndTime: string;
			/** Date and time when the application was last published. */
			readonly LastPublishTime_UtcDateAndTime: string;
			/** Medium icon for Canvas Apps. */
			readonly MediumIcon_name: string;
			/** The version of the client that was used to author the application. */
			readonly MinClientVersion: string;
			/** Name of the CanvasApp */
			readonly Name: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier of the business unit that owns the process. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns the process. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns the process. */
			readonly OwningUser: string;
			/** The publisher of the app. */
			readonly Publisher: string;
			/** Small icon for Canvas Apps. */
			readonly SmallIcon_name: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** A value indicating whether the application is ready for consumption. */
			readonly Status: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** The metadata tags of the application. */
			readonly Tags: string;
			/** Teams icon for Canvas Apps. */
			readonly TeamsIcon_name: string;
			/** The globally unique canvas app id */
			readonly UniqueCanvasAppId: string;
			readonly VersionNumber: string;
			/** Wide icon for Canvas Apps. */
			readonly WideIcon_name: string;
		}
	}
}
declare namespace OptionSet {
	namespace CanvasApp {
		enum CanvasAppType {
			/** 1 */
			App_Component_Library,
			/** 0 */
			Classic_Canvas_App,
			/** 2 */
			Custom_Canvas_Page,
			/** 3 */
			Unified_App
		}
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