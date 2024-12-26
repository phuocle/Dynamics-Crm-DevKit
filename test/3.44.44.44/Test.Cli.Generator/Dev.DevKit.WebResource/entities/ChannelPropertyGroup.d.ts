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
		interface Navigation {
			ChannelPropertyGroup_ChannelProperty: DevKit.Controls.NavigationItem,
			channelpropertygroup_convertrule: DevKit.Controls.NavigationItem
		}
		interface Grid {
			propertiesGrid: DevKit.Controls.Grid;
		}
	}
	class FormChannel_Property_Group extends DevKit.IForm {
		/**
		* Channel Property Group [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Channel_Property_Group */
		Body: DevKit.FormChannel_Property_Group.Body;
		/** The Navigation of form Channel_Property_Group */
		Navigation: DevKit.FormChannel_Property_Group.Navigation;
		/** The Grid of form Channel_Property_Group */
		Grid: DevKit.FormChannel_Property_Group.Grid;
		/** The SidePanes of form Channel_Property_Group */
		SidePanes: DevKit.SidePanes;
	}
	class ChannelPropertyGroupApi {
		/**
		* DynamicsCrm.DevKit ChannelPropertyGroupApi
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
		/** Unique identifier of the channel property group */
		ChannelPropertyGroupId: string;
		/** For Internal Use Only */
		readonly ChannelPropertyGroupIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.ChannelPropertyGroup.ComponentState;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type a description for the property group. */
		Description: string;
		/** Unique identifier of the data import or data migration that created this property. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		readonly IsManaged: boolean;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Type the name of the channel property group. */
		Name: string;
		/** Unique identifier of the organization associated with the channel property group. */
		readonly OrganizationId: string;
		/** Date and time that the attribute was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Select the activity that the property group is associated with. */
		RegardingTypeCode: OptionSet.ChannelPropertyGroup.RegardingTypeCode;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** State of the channel property group */
		statecode: OptionSet.ChannelPropertyGroup.statecode;
		/** Status of the channel property group */
		statuscode: OptionSet.ChannelPropertyGroup.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Version number of the channel property group. */
		readonly VersionNumber: number;
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
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished,
			/** 0 */
			Published,
			/** 1 */
			Unpublished
		}
		enum RegardingTypeCode {
			/** 4201 */
			Appointment,
			/** 11000 */
			Booking_Alert,
			/** 10691 */
			Conversation,
			/** 10877 */
			Copilot_Transcript,
			/** 10600 */
			Customer_Voice_alert,
			/** 10610 */
			Customer_Voice_survey_invite,
			/** 10612 */
			Customer_Voice_survey_response,
			/** 4202 */
			Email,
			/** 10310 */
			Invite_Redemption,
			/** 11063 */
			Outbound_message,
			/** 4210 */
			Phone_Call,
			/** 10311 */
			Portal_Comment,
			/** 4214 */
			Service_Activity,
			/** 10708 */
			Session,
			/** 4216 */
			Social_Activity,
			/** 4212 */
			Task,
			/** 10185 */
			Teams_chat,
			/** 11070 */
			Voicemail
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