//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSavedQuery_Information {
		interface tab_general_Sections {
			account_information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Shows who created the record. */
			CreatedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			CreatedOn: DevKit.Controls.DateTime;
			/** Type additional information to describe the view, such as the filter criteria or intended results set. */
			Description: DevKit.Controls.String;
			/** Tells whether the component can be customized. */
			IsCustomizable: DevKit.Controls.String;
			/** Tells whether the view is the default view for the specified record type (entity). */
			IsDefault: DevKit.Controls.Boolean;
			/** Choose whether the view is compatible with Quick Find. When users search for specific items, you define the fields that are searched in. */
			IsQuickFindQuery: DevKit.Controls.Boolean;
			/** Tells whether the view was created by a user. */
			IsUserDefined: DevKit.Controls.Boolean;
			/** Shows who last updated the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Type a name for the view to describe what results the view will contain. This name is visible to users in the View list. */
			Name: DevKit.Controls.String;
		}
	}
	class FormSavedQuery_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form SavedQuery_Information
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SavedQuery_Information */
		Body: DevKit.FormSavedQuery_Information.Body;
	}
	class SavedQueryApi {
		/**
		* DynamicsCrm.DevKit SavedQueryApi
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
		/** Type the column name that will be used to group the results from the data collected across multiple records from a system view. */
		AdvancedGroupBy: DevKit.WebApi.StringValue;
		/** Tells whether the view can be deleted. */
		CanBeDeleted: DevKit.WebApi.ManagedPropertyValue;
		/** Contains the columns and sorting criteria for the view, stored in XML format. */
		ColumnSetXml: DevKit.WebApi.StringValue;
		/** For internal use only. */
		ComponentState: DevKit.WebApi.OptionSetValueReadonly;
		/** Type information about how the items in the system view are formatted. */
		ConditionalFormatting: DevKit.WebApi.StringValue;
		/** Shows who created the record. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who created the record on behalf of another user. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type additional information to describe the view, such as the filter criteria or intended results set. */
		Description: DevKit.WebApi.StringValue;
		/** String specifying the query in Fetch XML language. */
		FetchXml: DevKit.WebApi.StringValue;
		/** Version in which the form is introduced. */
		IntroducedVersion: DevKit.WebApi.StringValue;
		/** Tells whether a user created the view. */
		IsCustom: DevKit.WebApi.BooleanValueReadonly;
		/** Tells whether the component can be customized. */
		IsCustomizable: DevKit.WebApi.ManagedPropertyValue;
		/** Tells whether the view is the default view for the specified record type (entity). */
		IsDefault: DevKit.WebApi.BooleanValue;
		/** Tells whether the record is part of a managed solution. */
		IsManaged: DevKit.WebApi.BooleanValueReadonly;
		/** Choose whether the view is compatible with Quick Find. When users search for specific items, you define the fields that are searched in. */
		IsQuickFindQuery: DevKit.WebApi.BooleanValue;
		/** Tells whether the view was created by a user. */
		IsUserDefined: DevKit.WebApi.BooleanValueReadonly;
		/** Layout data in JSON format. */
		LayoutJson: DevKit.WebApi.StringValue;
		/** For internal use only. */
		LayoutXml: DevKit.WebApi.StringValue;
		/** Shows who last updated the record. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Shows who last updated the record on behalf of another user. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Type a name for the view to describe what results the view will contain. This name is visible to users in the View list. */
		Name: DevKit.WebApi.StringValue;
		/** String specifying the corresponding sql query for the fetch xml specified for offline use. */
		OfflineSqlQuery: DevKit.WebApi.StringValue;
		/** Choose the ID of the organization that the record is associated with. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For the organization, type the tab order to determine how users navigate through the screen using only the Tab key. */
		OrganizationTabOrder: DevKit.WebApi.IntegerValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		/** For internal use only. */
		QueryAPI: DevKit.WebApi.StringValueReadonly;
		/** For internal use only. */
		QueryAppUsage: DevKit.WebApi.IntegerValue;
		/** Shows the type of the query. */
		QueryType: DevKit.WebApi.IntegerValue;
		/** Unique identifier of the view. */
		SavedQueryId: DevKit.WebApi.GuidValue;
		/** For internal use only. */
		SavedQueryIdUnique: DevKit.WebApi.GuidValueReadonly;
		/** Unique identifier of the associated solution. */
		SolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Shows the status of the view. */
		StateCode: DevKit.WebApi.OptionSetValue;
		/** Shows the reason code that explains the status of the record. */
		StatusCode: DevKit.WebApi.OptionSetValue;
		/** For internal use only. */
		SupportingSolutionId: DevKit.WebApi.GuidValueReadonly;
		/** Version number of the view. */
		VersionNumber: DevKit.WebApi.BigIntValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SavedQuery {
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
		enum StateCode {
			/** 0 */
			Active,
			/** 1 */
			Inactive
		}
		enum StatusCode {
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
//{'JsForm':['Information'],'JsWebApi':true,'IsDebugForm':true,'IsDebugWebApi':true,'Version':'2.12.31','JsFormVersion':'v2'}