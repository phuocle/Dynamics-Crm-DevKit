//@ts-check
///<reference path="DevKit.d.ts" />
declare namespace LuckyStar {
	namespace FormChannel_Property {
		interface tab_general_Sections {
			channelpropertyinformation: DevKit.Form.Controls.ControlSection;
		}
		interface tab_general extends DevKit.Form.Controls.IControlTab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Type the name of the application that the property is associated with. */
			Applicationsource: DevKit.Form.Controls.ControlString;
			/** Enter the data type for the property. */
			DataType: DevKit.Form.Controls.ControlOptionSet;
			/** Description of property */
			Description: DevKit.Form.Controls.ControlString;
			/** Type the name of the property as received in the information provided by the external application. */
			Name: DevKit.Form.Controls.ControlString;
		}
	}
	class FormChannel_Property extends DevKit.Form.IForm {
		/**
		* DynamicsCrm.DevKit form Channel_Property
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Form.Utility;
		/** Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement */
		WebApi: DevKit.Form.WebApi;
		/** The Body section of form Channel_Property */
		Body: LuckyStar.FormChannel_Property.Body;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Type the name of the application that the property is associated with. */
		Applicationsource: DevKit.WebApi.StringValue;
		/** Unique identifier of the channel property */
		ChannelPropertyId: DevKit.WebApi.GuidValue;
		/** For Internal Use Only */
		ChannelPropertyIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Enter the data type for the property. */
		DataType: DevKit.WebApi.OptionSetValue;
		/** Description of property */
		Description: DevKit.WebApi.StringValue;
		/** Unique identifier of the data import or data migration that created this property. */
		ImportSequenceNumber: DevKit.WebApi.IntegerValue;
		/** For internal use only. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type the name of the property as received in the information provided by the external application. */
		Name: DevKit.WebApi.StringValue;
		/** Unique identifier of the organization associated with the channel property. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** Date and time that the attribute was migrated. */
		OverriddenCreatedOn_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValue;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** Properties contained with a particular bag. */
		RegardingObjectId: DevKit.WebApi.LookupValue;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** State of the channel property */
		statecode: DevKit.WebApi.OptionSetValue;
		/** Status of the channel property */
		statuscode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Version number of the channel property. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace ChannelProperty {
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
		enum DataType {
			/** 0 */
			Floating_Point_Number,
			/** 1 */
			Single_Line_Of_Text,
			/** 2 */
			Whole_Number
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
//{'JsForm':['Channel Property'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true}