//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class CanvasAppApi {
		/**
		* DynamicsCrm.DevKit CanvasAppApi
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
		CanvasAppId: string | null;
		/** For internal use only. */
		readonly CanvasAppRowId: string | null;
		/** The type of the canvas app. */
		CanvasAppType: OptionSet.CanvasApp.CanvasAppType | null;
		/** Internal use. The app dependency details. */
		CdsDependencies: string | null;
		/** The commit message of the app. */
		CommitMessage: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.CanvasApp.ComponentState | null;
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
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string | null;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string | null;
		/** Unique identifier of the business unit that owns the process. */
		readonly OwningBusinessUnit: string | null;
		/** Unique identifier of the team who owns the process. */
		readonly OwningTeam: string | null;
		/** Unique identifier of the user who owns the process. */
		readonly OwningUser: string | null;
		/** The publisher of the app. */
		Publisher: string | null;
		/** Small icon for Canvas Apps. */
		readonly SmallIcon_name: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** A value indicating whether the application is ready for consumption. */
		Status: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** The metadata tags of the application. */
		Tags: string | null;
		/** Teams icon for Canvas Apps. */
		readonly TeamsIcon_name: string | null;
		/** The globally unique canvas app id */
		UniqueCanvasAppId: string | null;
		readonly VersionNumber: number | null;
		/** Wide icon for Canvas Apps. */
		readonly WideIcon_name: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** App_Component_Library = 1*/
			App_Component_Library = 1,
			/** Classic_Canvas_App = 0*/
			Classic_Canvas_App = 0,
			/** Code_App = 4*/
			Code_App = 4,
			/** Custom_Canvas_Page = 2*/
			Custom_Canvas_Page = 2,
			/** Mobile_App = 5*/
			Mobile_App = 5,
			/** Unified_App = 3*/
			Unified_App = 3
		}
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