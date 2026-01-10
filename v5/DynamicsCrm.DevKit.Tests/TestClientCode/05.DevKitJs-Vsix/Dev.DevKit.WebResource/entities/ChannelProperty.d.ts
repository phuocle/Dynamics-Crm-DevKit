//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormChannel_Property {
		interface tab_general_Sections {
			/** Channel Property Information */
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
	}
	export class FormChannel_Property extends DevKit.IForm {
		/**
		* Channel Property [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form Channel_Property */
		Body: DevKit.FormChannel_Property.Body;
	}
	export class ChannelPropertyApi {
		/**
		* DynamicsCrm.DevKit ChannelPropertyApi
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
		/** Type the name of the application that the property is associated with. */
		Applicationsource: string | null;
		/** Unique identifier of the channel property */
		ChannelPropertyId: string | null;
		/** For Internal Use Only */
		readonly ChannelPropertyIdUnique: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.ChannelProperty.ComponentState | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Enter the data type for the property. */
		DataType: OptionSet.ChannelProperty.DataType | null;
		/** Description of property */
		Description: string | null;
		/** Unique identifier of the data import or data migration that created this property. */
		ImportSequenceNumber: number | null;
		/** For internal use only. */
		readonly IsManaged: boolean | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Type the name of the property as received in the information provided by the external application. */
		Name: string | null;
		/** Unique identifier of the organization associated with the channel property. */
		readonly OrganizationId: string | null;
		/** Date and time that the attribute was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** Properties contained with a particular bag. */
		RegardingObjectId: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** State of the channel property */
		statecode: OptionSet.ChannelProperty.statecode | null;
		/** Status of the channel property */
		statuscode: OptionSet.ChannelProperty.statuscode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Version number of the channel property. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
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
			/** Deleted = 2*/
			Deleted = 2,
			/** Deleted_Unpublished = 3*/
			Deleted_Unpublished = 3,
			/** Published = 0*/
			Published = 0,
			/** Unpublished = 1*/
			Unpublished = 1
		}
		enum DataType {
			/** Floating_Point_Number = 0*/
			Floating_Point_Number = 0,
			/** Single_Line_Of_Text = 1*/
			Single_Line_Of_Text = 1,
			/** Whole_Number = 2*/
			Whole_Number = 2
		}
		enum RegardingObjectTypeCode {
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