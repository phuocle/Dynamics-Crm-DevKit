//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormUserQuery_Information {
		interface tab_general_Sections {
			Information: DevKit.Controls.Section;
		}
		interface tab_general extends DevKit.Controls.ITab {
			Section: tab_general_Sections;
		}
		interface Tabs {
			general: tab_general;
		}
		interface Body {
			Tab: Tabs;
			/** Type additional information to describe the saved view, such as the filter criteria or intended results set. */
			Description: DevKit.Controls.String;
			/** Shows who last updated the record. */
			ModifiedBy: DevKit.Controls.Lookup;
			/** Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			ModifiedOn: DevKit.Controls.DateTime;
			/** Type a descriptive name for the saved view. */
			Name: DevKit.Controls.String;
			/** Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormUserQuery_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form UserQuery_Information */
		Body: DevKit.FormUserQuery_Information.Body;
		/** The Navigation of form UserQuery_Information */
		Navigation: DevKit.FormUserQuery_Information.Navigation;
		/** The SidePanes of form UserQuery_Information */
		SidePanes: DevKit.SidePanes;
	}
	class UserQueryApi {
		/**
		* DynamicsCrm.DevKit UserQueryApi
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
		/** Type the column name that will be used to group the results from the data collected across multiple records from a user view. */
		AdvancedGroupBy: string;
		/** Shows the columns and sorting criteria for the saved view, stored in XML format. */
		ColumnSetXml: string;
		/** Type information about how the items in the user view are formatted. */
		ConditionalFormatting: string;
		/** Shows who created the record. */
		readonly CreatedBy: string;
		/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Shows who created the record on behalf of another user. */
		readonly CreatedOnBehalfBy: string;
		/** Type additional information to describe the saved view, such as the filter criteria or intended results set. */
		Description: string;
		/** Contains the Fetch XML query that defines the entities and attributes included in the saved view. */
		FetchXml: string;
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
		/** Type a descriptive name for the saved view. */
		Name: string;
		/** String specifying the corresponding sql query for the fetch xml specified for offline use. */
		OfflineSqlQuery: string;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Shows the business unit that the record owner belongs to. */
		readonly OwningBusinessUnit: string;
		/** Unique identifier of the team who owns this saved view. */
		readonly OwningTeam: string;
		/** Unique identifier of the user who owns this saved view. */
		readonly OwningUser: string;
		/** Shows the code for the query type to indicate whether the saved view is an address book filter, advanced search, or other view. */
		QueryType: number;
		/** Shows whether the saved view is active or inactive. */
		StateCode: OptionSet.UserQuery.StateCode;
		/** Select the item's status. */
		StatusCode: OptionSet.UserQuery.StatusCode;
		/** Unique identifier of the saved view. */
		UserQueryId: string;
		/** Version number of the saved view. */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Type the column name that will be used to group the results from the data collected across multiple records from a user view. */
			readonly AdvancedGroupBy: string;
			/** Shows the columns and sorting criteria for the saved view, stored in XML format. */
			readonly ColumnSetXml: string;
			/** Type information about how the items in the user view are formatted. */
			readonly ConditionalFormatting: string;
			/** Shows who created the record. */
			readonly CreatedBy: string;
			/** Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Shows who created the record on behalf of another user. */
			readonly CreatedOnBehalfBy: string;
			/** Type additional information to describe the saved view, such as the filter criteria or intended results set. */
			readonly Description: string;
			/** Contains the Fetch XML query that defines the entities and attributes included in the saved view. */
			readonly FetchXml: string;
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
			/** Type a descriptive name for the saved view. */
			readonly Name: string;
			/** String specifying the corresponding sql query for the fetch xml specified for offline use. */
			readonly OfflineSqlQuery: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Shows the business unit that the record owner belongs to. */
			readonly OwningBusinessUnit: string;
			/** Unique identifier of the team who owns this saved view. */
			readonly OwningTeam: string;
			/** Unique identifier of the user who owns this saved view. */
			readonly OwningUser: string;
			/** Shows the code for the query type to indicate whether the saved view is an address book filter, advanced search, or other view. */
			readonly QueryType: string;
			/** Shows whether the saved view is active or inactive. */
			readonly StateCode: string;
			/** Select the item's status. */
			readonly StatusCode: string;
			/** Unique identifier of the saved view. */
			readonly UserQueryId: string;
			/** Version number of the saved view. */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace UserQuery {
		enum ReturnedTypeCode {
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
			/** 3 */
			All,
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