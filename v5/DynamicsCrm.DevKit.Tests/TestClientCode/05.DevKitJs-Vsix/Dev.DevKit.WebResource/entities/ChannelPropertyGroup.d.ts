//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormChannel_Property_Group {
		interface tab_property_bag_summary_Sections {
			property_bag_items_1: DevKit.Controls.Section;
			property_bag_properties_1: DevKit.Controls.Section;
		}
		interface tab_property_bag_summary extends DevKit.Controls.ITab {
			Section: tab_property_bag_summary_Sections;
		}
		interface Tabs {
			property_bag_summary: tab_property_bag_summary;
		}
		interface Body {
			Tab: Tabs;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Type the name of the channel property group. */
			Name: DevKit.Controls.String;
			/** Select the activity that the property group is associated with. */
			RegardingTypeCode: DevKit.Controls.OptionSet;
		}
		interface Grid {
			/** Channel Properties */
			propertiesGrid: DevKit.Controls.Grid;
		}
	}
	export class FormChannel_Property_Group extends DevKit.IForm {
		/**
		* Channel Property Group [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Channel_Property_Group */
		Body: DevKit.FormChannel_Property_Group.Body;
		/** The Grid of form Channel_Property_Group */
		Grid: DevKit.FormChannel_Property_Group.Grid;
	}
	export class ChannelPropertyGroupApi {
		/**
		* DynamicsCrm.DevKit ChannelPropertyGroupApi
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
		/** Unique identifier of the channel property group */
		ChannelPropertyGroupId: string | null;
		/** For Internal Use Only */
		readonly ChannelPropertyGroupIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.ChannelPropertyGroup.ComponentState | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Type a description for the property group. */
		Description: string | null;
		/** Unique identifier of the data import or data migration that created this property. */
		ImportSequenceNumber: number | null;
		/** For internal use only. */
		readonly IsManaged: boolean | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Type the name of the channel property group. */
		Name: string | null;
		/** Unique identifier of the organization associated with the channel property group. */
		readonly OrganizationId: string | null;
		/** Date and time that the attribute was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Select the activity that the property group is associated with. */
		RegardingTypeCode: OptionSet.ChannelPropertyGroup.RegardingTypeCode | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** State of the channel property group */
		statecode: OptionSet.ChannelPropertyGroup.statecode | null;
		/** Status of the channel property group */
		statuscode: OptionSet.ChannelPropertyGroup.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Version number of the channel property group. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Unique identifier of the channel property group */
			readonly ChannelPropertyGroupId: string;
			/** For Internal Use Only */
			readonly ChannelPropertyGroupIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type a description for the property group. */
			readonly Description: string;
			/** Unique identifier of the data import or data migration that created this property. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsManaged: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Type the name of the channel property group. */
			readonly Name: string;
			/** Unique identifier of the organization associated with the channel property group. */
			readonly OrganizationId: string;
			/** Date and time that the attribute was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Select the activity that the property group is associated with. */
			readonly RegardingTypeCode: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** State of the channel property group */
			readonly statecode: string;
			/** Status of the channel property group */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Version number of the channel property group. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ChannelPropertyGroup {
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
		enum RegardingTypeCode {
			/** Appointment = 4201*/
			Appointment = 4201,
			/** Email = 4202*/
			Email = 4202,
			/** Invite_Redemption = 10407*/
			Invite_Redemption = 10407,
			/** Phone_Call = 4210*/
			Phone_Call = 4210,
			/** Portal_Comment = 10408*/
			Portal_Comment = 10408,
			/** Social_Activity = 4216*/
			Social_Activity = 4216,
			/** Task = 4212*/
			Task = 4212,
			/** Teams_chat = 10253*/
			Teams_chat = 10253
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