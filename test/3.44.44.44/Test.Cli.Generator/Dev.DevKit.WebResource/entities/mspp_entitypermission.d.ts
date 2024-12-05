//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_entitypermission_Information {
		interface tab_mspp_entitypermission_general_Sections {
			mspp_entitypermission_account: DevKit.Controls.Section;
			mspp_entitypermission_children: DevKit.Controls.Section;
			mspp_entitypermission_contact: DevKit.Controls.Section;
			mspp_entitypermission_general: DevKit.Controls.Section;
			mspp_entitypermission_parent: DevKit.Controls.Section;
			mspp_entitypermission_privileges: DevKit.Controls.Section;
			mspp_entitypermission_webroles: DevKit.Controls.Section;
		}
		interface tab_mspp_entitypermission_general extends DevKit.Controls.ITab {
			Section: tab_mspp_entitypermission_general_Sections;
		}
		interface Tabs {
			mspp_entitypermission_general: tab_mspp_entitypermission_general;
		}
		interface Body {
			Tab: Tabs;
			mspp_accountrelationship: DevKit.Controls.String;
			/** Controls whether the user can attach another record to the specified record. The Append and Append To permissions work in combination. */
			mspp_append: DevKit.Controls.Boolean;
			/** Controls whether the user can append the specified record to another record. The Append and Append To permissions work in combination. */
			mspp_appendto: DevKit.Controls.Boolean;
			mspp_contactrelationship: DevKit.Controls.String;
			/** The Create privilege controls whether you can create a record. */
			mspp_create: DevKit.Controls.Boolean;
			/** Controls whether the user can delete a record. */
			mspp_delete: DevKit.Controls.Boolean;
			mspp_entitylogicalname: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_entityname: DevKit.Controls.String;
			mspp_parententitypermission: DevKit.Controls.Lookup;
			mspp_parentrelationship: DevKit.Controls.String;
			/** Controls whether the user can read a record. */
			mspp_read: DevKit.Controls.Boolean;
			mspp_scope: DevKit.Controls.OptionSet;
			/** Unique identifier for Website associated with Entity Permission */
			mspp_websiteid: DevKit.Controls.Lookup;
			/** Controls whether the user can update a record. */
			mspp_write: DevKit.Controls.Boolean;
			WebResource_mspp_accountrelationshipname_selector: DevKit.Controls.WebResource;
			WebResource_mspp_contactrelationship_selector: DevKit.Controls.WebResource;
			WebResource_mspp_entitylogicalname_selector: DevKit.Controls.WebResource;
			WebResource_mspp_parentrelationship_selector: DevKit.Controls.WebResource;
		}
		interface Navigation {
			mspp_entitypermission_parententitypermission: DevKit.Controls.NavigationItem
		}
		interface Grid {
			subgrid_childentitypermissions: DevKit.Controls.Grid;
			subgrid_webroles: DevKit.Controls.Grid;
		}
	}
	class Formmspp_entitypermission_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_entitypermission_Information */
		Body: DevKit.Formmspp_entitypermission_Information.Body;
		/** The Navigation of form mspp_entitypermission_Information */
		Navigation: DevKit.Formmspp_entitypermission_Information.Navigation;
		/** The Grid of form mspp_entitypermission_Information */
		Grid: DevKit.Formmspp_entitypermission_Information.Grid;
		/** The SidePanes of form mspp_entitypermission_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_entitypermissionApi {
		/**
		* DynamicsCrm.DevKit mspp_entitypermissionApi
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
		mspp_accountrelationship: string;
		/** Controls whether the user can attach another record to the specified record. The Append and Append To permissions work in combination. */
		mspp_append: boolean;
		/** Controls whether the user can append the specified record to another record. The Append and Append To permissions work in combination. */
		mspp_appendto: boolean;
		mspp_contactrelationship: string;
		/** The Create privilege controls whether you can create a record. */
		mspp_create: boolean;
		/** Shows who created the record. */
		mspp_createdby: string;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date;
		/** Controls whether the user can delete a record. */
		mspp_delete: boolean;
		mspp_entitylogicalname: string;
		/** The name of the custom entity. */
		mspp_entityname: string;
		/** Unique identifier for entity instances */
		mspp_entitypermissionId: string;
		/** Shows who last updated the record. */
		mspp_modifiedby: string;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date;
		mspp_parententitypermission: string;
		mspp_parentrelationship: string;
		/** Controls whether the user can read a record. */
		mspp_read: boolean;
		mspp_scope: OptionSet.mspp_entitypermission.mspp_scope;
		/** Unique identifier for Website associated with Entity Permission */
		mspp_websiteid: string;
		/** Controls whether the user can update a record. */
		mspp_write: boolean;
		/** Status of the Table Permission */
		statecode: OptionSet.mspp_entitypermission.statecode;
		/** Reason for the status of the Table Permission */
		statuscode: OptionSet.mspp_entitypermission.statuscode;
		readonly FormattedValue: {
			readonly mspp_accountrelationship: string;
			/** Controls whether the user can attach another record to the specified record. The Append and Append To permissions work in combination. */
			readonly mspp_append: string;
			/** Controls whether the user can append the specified record to another record. The Append and Append To permissions work in combination. */
			readonly mspp_appendto: string;
			readonly mspp_contactrelationship: string;
			/** The Create privilege controls whether you can create a record. */
			readonly mspp_create: string;
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			/** Controls whether the user can delete a record. */
			readonly mspp_delete: string;
			readonly mspp_entitylogicalname: string;
			/** The name of the custom entity. */
			readonly mspp_entityname: string;
			/** Unique identifier for entity instances */
			readonly mspp_entitypermissionId: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			readonly mspp_parententitypermission: string;
			readonly mspp_parentrelationship: string;
			/** Controls whether the user can read a record. */
			readonly mspp_read: string;
			readonly mspp_scope: string;
			/** Unique identifier for Website associated with Entity Permission */
			readonly mspp_websiteid: string;
			/** Controls whether the user can update a record. */
			readonly mspp_write: string;
			/** Status of the Table Permission */
			readonly statecode: string;
			/** Reason for the status of the Table Permission */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_entitypermission {
		enum mspp_scope {
			/** 756150002 */
			Account,
			/** 756150001 */
			Contact,
			/** 756150000 */
			Global,
			/** 756150003 */
			Parent,
			/** 756150004 */
			Self
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