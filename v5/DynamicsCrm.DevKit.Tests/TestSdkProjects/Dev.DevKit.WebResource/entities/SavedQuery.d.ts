//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSavedQuery_Information {
		interface tab_general_Sections {
			/** Account Information */
			account_information: DevKit.Controls.Section;
		}
		/** General */
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			/** General */
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
	export class FormSavedQuery_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** The Body section of form SavedQuery_Information */
		Body: DevKit.FormSavedQuery_Information.Body;
	}
	export class SavedQueryApi {
		/**
		* DynamicsCrm.DevKit SavedQueryApi
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
		/** Type the column name that will be used to group the results from the data collected across multiple records from a system view. */
		AdvancedGroupBy: string | null;
		/** Tells whether the view can be deleted. */
		CanBeDeleted: string | null;
		/** Contains the columns and sorting criteria for the view, stored in XML format. */
		ColumnSetXml: string | null;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SavedQuery.ComponentState | null;
		/** Type information about how the items in the system view are formatted. */
		ConditionalFormatting: string | null;
		/** Shows who created the record. */
		readonly CreatedBy: string | null;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date | null;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string | null;
		/** Type additional information to describe the view, such as the filter criteria or intended results set. */
		Description: string | null;
		/** Tells whether the view can retrieve data from all cluster partitions. */
		EnableCrossPartition: boolean | null;
		/** String specifying the query in Fetch XML language. */
		FetchXml: string | null;
		/** Version in which the form is introduced. */
		IntroducedVersion: string | null;
		/** Tells whether a user created the view. */
		readonly IsCustom: boolean | null;
		/** Tells whether the component can be customized. */
		IsCustomizable: string | null;
		/** Tells whether the view is the default view for the specified record type (entity). */
		IsDefault: boolean | null;
		/** Tells whether the record is part of a managed solution. */
		readonly IsManaged: boolean | null;
		/** Indicates whether or not this is viewable by the entire organization. */
		readonly IsPrivate: boolean | null;
		/** Choose whether the view is compatible with Quick Find. When users search for specific items, you define the fields that are searched in. */
		IsQuickFindQuery: boolean | null;
		/** Tells whether the view was created by a user. */
		readonly IsUserDefined: boolean | null;
		/** Layout data in JSON format. */
		LayoutJson: string | null;
		/** For internal use only. */
		LayoutXml: string | null;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string | null;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date | null;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string | null;
		/** Type a name for the view to describe what results the view will contain. This name is visible to users in the View list. */
		Name: string | null;
		/** String specifying the corresponding sql query for the fetch xml specified for offline use. */
		OfflineSqlQuery: string | null;
		/** Choose the ID of the organization that the record is associated with. */
		readonly OrganizationId: string | null;
		/** For the organization, type the tab order to determine how users navigate through the screen using only the Tab key. */
		readonly OrganizationTabOrder: number | null;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date | null;
		/** For internal use only. */
		readonly QueryAPI: string | null;
		/** For internal use only. */
		QueryAppUsage: number | null;
		/** Shows the type of the query. */
		QueryType: number | null;
		/** Contains the role display conditions for the SavedQuery. */
		RoleDisplayConditionsXml: string | null;
		/** Unique identifier of the view. */
		SavedQueryId: string | null;
		/** For internal use only. */
		readonly SavedQueryIdUnique: string | null;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string | null;
		/** Shows the status of the view. */
		StateCode: OptionSet.SavedQuery.StateCode | null;
		/** Shows the reason code that explains the status of the record. */
		StatusCode: OptionSet.SavedQuery.StatusCode | null;
		/** For internal use only. */
		readonly SupportingSolutionId: string | null;
		/** Version number of the view. */
		readonly VersionNumber: number | null;
		/**
		* Formatted values for all fields
		* Contains the display-formatted values for fields that have formatting applied
		*/
		readonly FormattedValue: {
			/** Type the column name that will be used to group the results from the data collected across multiple records from a system view. */
			readonly AdvancedGroupBy: string;
			/** Tells whether the view can be deleted. */
			readonly CanBeDeleted: string;
			/** Contains the columns and sorting criteria for the view, stored in XML format. */
			readonly ColumnSetXml: string;
			/** For internal use only. */
			readonly ComponentState: string;
			/** Type information about how the items in the system view are formatted. */
			readonly ConditionalFormatting: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type additional information to describe the view, such as the filter criteria or intended results set. */
			readonly Description: string;
			/** Tells whether the view can retrieve data from all cluster partitions. */
			readonly EnableCrossPartition: string;
			/** String specifying the query in Fetch XML language. */
			readonly FetchXml: string;
			/** Version in which the form is introduced. */
			readonly IntroducedVersion: string;
			/** Tells whether a user created the view. */
			readonly IsCustom: string;
			/** Tells whether the component can be customized. */
			readonly IsCustomizable: string;
			/** Tells whether the view is the default view for the specified record type (entity). */
			readonly IsDefault: string;
			/** Tells whether the record is part of a managed solution. */
			readonly IsManaged: string;
			/** Indicates whether or not this is viewable by the entire organization. */
			readonly IsPrivate: string;
			/** Choose whether the view is compatible with Quick Find. When users search for specific items, you define the fields that are searched in. */
			readonly IsQuickFindQuery: string;
			/** Tells whether the view was created by a user. */
			readonly IsUserDefined: string;
			/** Layout data in JSON format. */
			readonly LayoutJson: string;
			/** For internal use only. */
			readonly LayoutXml: string;
			/** Shows who last updated the record. */
			readonly ModifiedBy: string;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Shows who last updated the record on behalf of another user. */
			readonly ModifiedOnBehalfBy: string;
			/** Type a name for the view to describe what results the view will contain. This name is visible to users in the View list. */
			readonly Name: string;
			/** String specifying the corresponding sql query for the fetch xml specified for offline use. */
			readonly OfflineSqlQuery: string;
			/** Choose the ID of the organization that the record is associated with. */
			readonly OrganizationId: string;
			/** For the organization, type the tab order to determine how users navigate through the screen using only the Tab key. */
			readonly OrganizationTabOrder: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			/** For internal use only. */
			readonly QueryAPI: string;
			/** For internal use only. */
			readonly QueryAppUsage: string;
			/** Shows the type of the query. */
			readonly QueryType: string;
			/** Contains the role display conditions for the SavedQuery. */
			readonly RoleDisplayConditionsXml: string;
			/** Unique identifier of the view. */
			readonly SavedQueryId: string;
			/** For internal use only. */
			readonly SavedQueryIdUnique: string;
			/** Unique identifier of the associated solution. */
			readonly SolutionId: string;
			/** Shows the status of the view. */
			readonly StateCode: string;
			/** Shows the reason code that explains the status of the record. */
			readonly StatusCode: string;
			/** For internal use only. */
			readonly SupportingSolutionId: string;
			/** Version number of the view. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace SavedQuery {
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
		enum ReturnedTypeCode {
		}
		enum StateCode {
			/** Active = 0*/
			Active = 0,
			/** Inactive = 1*/
			Inactive = 1
		}
		enum StatusCode {
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