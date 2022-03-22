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
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class FormSavedQuery_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SavedQuery_Information */
		Body: DevKit.FormSavedQuery_Information.Body;
		/** The Process of form SavedQuery_Information */
		Process: DevKit.FormSavedQuery_Information.Process;
		/** The SidePanes of form SavedQuery_Information */
		SidePanes: DevKit.SidePanes;
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
		/** Type the column name that will be used to group the results from the data collected across multiple records from a system view. */
		AdvancedGroupBy: string;
		/** Tells whether the view can be deleted. */
		CanBeDeleted: string;
		/** Contains the columns and sorting criteria for the view, stored in XML format. */
		ColumnSetXml: string;
		/** For internal use only. */
		readonly ComponentState: OptionSet.SavedQuery.ComponentState;
		/** Type information about how the items in the system view are formatted. */
		ConditionalFormatting: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type additional information to describe the view, such as the filter criteria or intended results set. */
		Description: string;
		/** String specifying the query in Fetch XML language. */
		FetchXml: string;
		/** Version in which the form is introduced. */
		IntroducedVersion: string;
		/** Tells whether a user created the view. */
		readonly IsCustom: boolean;
		/** Tells whether the component can be customized. */
		IsCustomizable: string;
		/** Tells whether the view is the default view for the specified record type (entity). */
		IsDefault: boolean;
		/** Tells whether the record is part of a managed solution. */
		readonly IsManaged: boolean;
		/** Indicates whether or not this is viewable by the entire organization. */
		readonly IsPrivate: boolean;
		/** Choose whether the view is compatible with Quick Find. When users search for specific items, you define the fields that are searched in. */
		IsQuickFindQuery: boolean;
		/** Tells whether the view was created by a user. */
		readonly IsUserDefined: boolean;
		/** Layout data in JSON format. */
		LayoutJson: string;
		/** For internal use only. */
		LayoutXml: string;
		/** Shows who last updated the record. */
		readonly ModifiedBy: string;
		/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Shows who last updated the record on behalf of another user. */
		readonly ModifiedOnBehalfBy: string;
		/** Type a name for the view to describe what results the view will contain. This name is visible to users in the View list. */
		Name: string;
		/** String specifying the corresponding sql query for the fetch xml specified for offline use. */
		OfflineSqlQuery: string;
		/** Choose the ID of the organization that the record is associated with. */
		readonly OrganizationId: string;
		/** For the organization, type the tab order to determine how users navigate through the screen using only the Tab key. */
		readonly OrganizationTabOrder: number;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		/** For internal use only. */
		readonly QueryAPI: string;
		/** For internal use only. */
		QueryAppUsage: number;
		/** Shows the type of the query. */
		QueryType: number;
		/** Unique identifier of the view. */
		SavedQueryId: string;
		/** For internal use only. */
		readonly SavedQueryIdUnique: string;
		/** Unique identifier of the associated solution. */
		readonly SolutionId: string;
		/** Shows the status of the view. */
		StateCode: OptionSet.SavedQuery.StateCode;
		/** Shows the reason code that explains the status of the record. */
		StatusCode: OptionSet.SavedQuery.StatusCode;
		/** For internal use only. */
		readonly SupportingSolutionId: string;
		/** Version number of the view. */
		readonly VersionNumber: number;
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}