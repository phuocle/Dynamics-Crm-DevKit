//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	class NavigationSettingApi {
		/**
		* DynamicsCrm.DevKit NavigationSettingApi
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
		/** Enter the position of this NavigationSetting as it should appear within its group in the Advanced Setup menu. */
		AdvancedSettingOrder: number;
		/** Enter the App Config record that this Navigation Setting is associated with. */
		AppConfigId: string;
		/** For system use only. */
		AppConfigIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.NavigationSetting.ComponentState;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type a description that describes that Navigation Setting in detail. */
		Description: string;
		/** Type the name of the group represented by this Navigation Setting record. */
		GroupName: string;
		/** The web resource identifier of the icon to be used for a navigation setting area or sub area. */
		IconResourceId: string;
		/** Unique identifier of the data import or data migration that created this record. */
		readonly ImportSequenceNumber: number;
		/** Version in which the similarity rule is introduced. */
		IntroducedVersion: string;
		/** For internal use only. */
		readonly IsManaged: boolean;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Type a title or name that describes the Navigation Setting so it can be identified in Dynamics CRM views. */
		Name: string;
		/** Identifies a single setting page or group of pages configured for use in a single app. */
		NavigationSettingId: string;
		/** For system use only. */
		NavigationSettingIdUnique: string;
		/** Enter the Object Type Code of the entity associated whose page this Navigation Setting record represents. */
		ObjectTypeCode: number;
		/** System-populated field that identifies the organization that owns this Navigation Setting record. */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		readonly OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Type the URL which locates the page associated with this Navigation Setting record. */
		PageUrl: string;
		/** The Navigation Setting record that represents the group that this record belongs to. */
		ParentNavigationSettingId: string;
		/** Enter the Privilege Mask for the entity associated with this navigation setting page that will be the minimum requirement for the page to be made available to a user. */
		Privileges: number;
		/** Select the setup completion level for this Navigation Setting page. */
		ProgressState: boolean;
		/** Enter the position of this NavigationSetting as it should appear in the Quick Setup menu. */
		QuickSettingOrder: number;
		/** The Web Resource that will be associated with this Navigation Setting record. */
		ResourceId: string;
		/** Select the type of group this Navigation Setting record represents. This determines which of the three in-app customization menus will contain this group. */
		SettingType: OptionSet.NavigationSetting.SettingType;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		readonly FormattedValue: {
			/** Enter the position of this NavigationSetting as it should appear within its group in the Advanced Setup menu. */
			readonly AdvancedSettingOrder: string;
			/** Enter the App Config record that this Navigation Setting is associated with. */
			readonly AppConfigId: string;
			/** For system use only. */
			readonly AppConfigIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type a description that describes that Navigation Setting in detail. */
			readonly Description: string;
			/** Type the name of the group represented by this Navigation Setting record. */
			readonly GroupName: string;
			/** The web resource identifier of the icon to be used for a navigation setting area or sub area. */
			readonly IconResourceId: string;
			/** Unique identifier of the data import or data migration that created this record. */
			readonly ImportSequenceNumber: string;
			/** Version in which the similarity rule is introduced. */
			readonly IntroducedVersion: string;
			/** For internal use only. */
			readonly IsManaged: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Type a title or name that describes the Navigation Setting so it can be identified in Dynamics CRM views. */
			readonly Name: string;
			/** Identifies a single setting page or group of pages configured for use in a single app. */
			readonly NavigationSettingId: string;
			/** For system use only. */
			readonly NavigationSettingIdUnique: string;
			/** Enter the Object Type Code of the entity associated whose page this Navigation Setting record represents. */
			readonly ObjectTypeCode: string;
			/** System-populated field that identifies the organization that owns this Navigation Setting record. */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Type the URL which locates the page associated with this Navigation Setting record. */
			readonly PageUrl: string;
			/** The Navigation Setting record that represents the group that this record belongs to. */
			readonly ParentNavigationSettingId: string;
			/** Enter the Privilege Mask for the entity associated with this navigation setting page that will be the minimum requirement for the page to be made available to a user. */
			readonly Privileges: string;
			/** Select the setup completion level for this Navigation Setting page. */
			readonly ProgressState: string;
			/** Enter the position of this NavigationSetting as it should appear in the Quick Setup menu. */
			readonly QuickSettingOrder: string;
			/** The Web Resource that will be associated with this Navigation Setting record. */
			readonly ResourceId: string;
			/** Select the type of group this Navigation Setting record represents. This determines which of the three in-app customization menus will contain this group. */
			readonly SettingType: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
		}
	}
}
declare namespace OptionSet {
	namespace NavigationSetting {
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
		enum SettingType {
			/** 0 */
			Advanced_Setup,
			/** 2 */
			Advanced_Setup_Summary,
			/** 1 */
			Basic_Setup,
			/** 3 */
			Basic_Setup_Summary
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