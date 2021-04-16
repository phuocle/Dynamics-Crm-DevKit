//@ts-check
///<reference path="devkit.d.ts" />
declare namespace MyDog {
	namespace FormChannel_Property_Group {
		interface tab_property_bag_summary_Sections {
			property_bag_properties_1: DevKit.Form.Controls.ControlSection;
			property_bag_items_1: DevKit.Form.Controls.ControlSection;
		}
		interface tab_property_bag_summary extends DevKit.Form.Controls.IControlTab {
			Section: tab_property_bag_summary_Sections;
		}
		interface Tabs {
			property_bag_summary: tab_property_bag_summary;
		}
		interface Body {
			Tab: Tabs;
			propertiesGrid: DevKit.Form.Controls.ControlGrid;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Form.Controls.ControlDateTime;
			/** Type the name of the channel property group. */
			Name: DevKit.Form.Controls.ControlString;
			/** Select the activity that the property group is associated with. */
			RegardingTypeCode: DevKit.Form.Controls.ControlOptionSet;
		}
	}
	class FormChannel_Property_Group extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Channel_Property_Group
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Channel_Property_Group */
		Body: MyDog.FormChannel_Property_Group.Body;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the channel property group */
		ChannelPropertyGroupId: DevKit.WebApi.GuidValue;
		/** For Internal Use Only */
		ChannelPropertyGroupIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a description for the property group. */
		Description: DevKit.WebApi.StringValue;
		/** Unique identifier of the data import or data migration that created this property. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type the name of the channel property group. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the channel property group. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the attribute was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Select the activity that the property group is associated with. */
		RegardingTypeCode: DevKit.WebApi.OptionSetValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** State of the channel property group */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Status of the channel property group */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Version number of the channel property group. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ChannelPropertyGroup {
		enum ComponentState {
			/** 0 */
			Published,
			/** 1 */
			Unpublished,
			/** 2 */
			Deleted,
			/** 3 */
			Deleted_Unpublished
		}
		enum RegardingTypeCode {
			/** 4210 */
			Phone_Call,
			/** 4202 */
			Email,
			/** 4201 */
			Appointment,
			/** 4212 */
			Task,
			/** 4216 */
			Social_Activity,
			/** 10042 */
			Custom_Activity
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
//{'JsForm':['Channel Property Group'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':null}