//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormChannel_Property {
		interface tab_general_Sections {
			channelpropertyinformation: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Type the name of the application that the property is associated with. */
			Applicationsource: DevKit.Controls.String;
			/** Description of property */
			Description: DevKit.Controls.String;
			/** Type the name of the property as received in the information provided by the external application. */
			Name: DevKit.Controls.String;
			/** Enter the data type for the property. */
			DataType: DevKit.Controls.OptionSet;
		}
		interface Navigation {

		}
	}
	class FormChannel_Property extends DevKit.IForm {
		/**
		* Channel Property [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Channel_Property */
		Body: DevKit.FormChannel_Property.Body;
		/** The Navigation of form Channel_Property */
		Navigation: DevKit.FormChannel_Property.Navigation;
		/** The SidePanes of form Channel_Property */
		SidePanes: DevKit.SidePanes;
	}
	class ChannelPropertyApi {
		/**
		* DynamicsCrm.DevKit ChannelPropertyApi
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
		/** Type the name of the application that the property is associated with. */
		Applicationsource: string;
		/** Unique identifier of the channel property */
		ChannelPropertyId: string;
		/** For Internal Use Only */
		readonly ChannelPropertyIdUnique: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.ChannelProperty.ComponentState;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Enter the data type for the property. */
		DataType: OptionSet.ChannelProperty.DataType;
		/** Description of property */
		Description: string;
		/** Unique identifier of the data import or data migration that created this property. */
		ImportSequenceNumber: number;
		/** For internal use only. */
		readonly IsManaged: boolean;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Type the name of the property as received in the information provided by the external application. */
		Name: string;
		/** Unique identifier of the organization associated with the channel property. */
		readonly OrganizationId: string;
		/** Date and time that the attribute was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** Properties contained with a particular bag. */
		RegardingObjectId: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** State of the channel property */
		statecode: OptionSet.ChannelProperty.statecode;
		/** Status of the channel property */
		statuscode: OptionSet.ChannelProperty.statuscode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Version number of the channel property. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Type the name of the application that the property is associated with. */
			readonly Applicationsource: string;
			/** Unique identifier of the channel property */
			readonly ChannelPropertyId: string;
			/** For Internal Use Only */
			readonly ChannelPropertyIdUnique: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Enter the data type for the property. */
			readonly DataType: string;
			/** Description of property */
			readonly Description: string;
			/** Unique identifier of the data import or data migration that created this property. */
			readonly ImportSequenceNumber: string;
			/** For internal use only. */
			readonly IsManaged: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Type the name of the property as received in the information provided by the external application. */
			readonly Name: string;
			/** Unique identifier of the organization associated with the channel property. */
			readonly OrganizationId: string;
			/** Date and time that the attribute was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** Properties contained with a particular bag. */
			readonly RegardingObjectId: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** State of the channel property */
			readonly statecode: string;
			/** Status of the channel property */
			readonly statuscode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Version number of the channel property. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace ChannelProperty {
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
		enum DataType {
			/** 0 */
			Floating_Point_Number,
			/** 1 */
			Single_Line_Of_Text,
			/** 2 */
			Whole_Number
		}
		enum RegardingObjectTypeCode {
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