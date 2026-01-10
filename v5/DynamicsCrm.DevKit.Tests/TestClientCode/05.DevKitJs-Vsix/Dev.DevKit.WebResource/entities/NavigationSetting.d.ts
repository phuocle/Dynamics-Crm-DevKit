//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	export class NavigationSettingApi {
		/**
		* DynamicsCrm.DevKit NavigationSettingApi
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
		/** Enter the position of this NavigationSetting as it should appear within its group in the Advanced Setup menu. */
		AdvancedSettingOrder: number | null;
		/** Enter the App Config record that this Navigation Setting is associated with. */
		AppConfigId: string | null;
		/** For system use only. */
		AppConfigIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.NavigationSetting.ComponentState | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Type a description that describes that Navigation Setting in detail. */
		Description: string | null;
		/** Type the name of the group represented by this Navigation Setting record. */
		GroupName: string | null;
		/** The web resource identifier of the icon to be used for a navigation setting area or sub area. */
		IconResourceId: string | null;
		/** Unique identifier of the data import or data migration that created this record. */
		readonly ImportSequenceNumber: number | null;
		/** Version in which the similarity rule is introduced. */
		IntroducedVersion: string | null;
		/** For internal use only. */
		readonly IsManaged: boolean | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Type a title or name that describes the Navigation Setting so it can be identified in Dynamics CRM views. */
		Name: string | null;
		/** Identifies a single setting page or group of pages configured for use in a single app. */
		NavigationSettingId: string | null;
		/** For system use only. */
		NavigationSettingIdUnique: string | null;
		/** Enter the Object Type Code of the entity associated whose page this Navigation Setting record represents. */
		ObjectTypeCode: number | null;
		/** System-populated field that identifies the organization that owns this Navigation Setting record. */
		readonly OrganizationId: string | null;
		/** Date and time that the record was migrated. */
		readonly OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Type the URL which locates the page associated with this Navigation Setting record. */
		PageUrl: string | null;
		/** The Navigation Setting record that represents the group that this record belongs to. */
		ParentNavigationSettingId: string | null;
		/** Enter the Privilege Mask for the entity associated with this navigation setting page that will be the minimum requirement for the page to be made available to a user. */
		Privileges: number | null;
		/** Select the setup completion level for this Navigation Setting page. */
		ProgressState: boolean | null;
		/** Enter the position of this NavigationSetting as it should appear in the Quick Setup menu. */
		QuickSettingOrder: number | null;
		/** The Web Resource that will be associated with this Navigation Setting record. */
		ResourceId: string | null;
		/** Select the type of group this Navigation Setting record represents. This determines which of the three in-app customization menus will contain this group. */
		SettingType: OptionSet.NavigationSetting.SettingType | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum SettingType {
			/** Advanced_Setup = 0*/
			Advanced_Setup = 0,
			/** Advanced_Setup_Summary = 2*/
			Advanced_Setup_Summary = 2,
			/** Basic_Setup = 1*/
			Basic_Setup = 1,
			/** Basic_Setup_Summary = 3*/
			Basic_Setup_Summary = 3
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