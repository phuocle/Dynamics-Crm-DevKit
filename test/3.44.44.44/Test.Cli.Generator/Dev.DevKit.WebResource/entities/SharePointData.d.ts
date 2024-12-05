//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSharePointData_Information {
		interface Tabs {
		}
		interface Body {

		}
		interface Navigation {

		}
	}
	class FormSharePointData_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SharePointData_Information */
		Body: DevKit.FormSharePointData_Information.Body;
		/** The Navigation of form SharePointData_Information */
		Navigation: DevKit.FormSharePointData_Information.Navigation;
		/** The SidePanes of form SharePointData_Information */
		SidePanes: DevKit.SidePanes;
	}
	class SharePointDataApi {
		/**
		* DynamicsCrm.DevKit SharePointDataApi
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
		/** Unique identifier of the user who created the SharePoint Data. */
		readonly CreatedBy: string;
		/** Date and time when the SharePoint Data was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the SharePoint Data. */
		readonly CreatedOnBehalfBy: string;
		/** SharePoint Data Serialized */
		Data: string;
		/** Is valid */
		readonly IsValid: boolean;
		/** Unique identifier of the user who created the SharePoint Data. */
		readonly Location: string;
		/** Unique identifier of the user who last modified the SharePoint Data. */
		readonly ModifiedBy: string;
		/** Date and time when the Sharepoint Data was last modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who last modified the SharePoint Data. */
		readonly ModifiedOnBehalfBy: string;
		/** Next Page Token of the SharePoint document. */
		readonly NextPageToken: string;
		/** Unique identifier of the organization associated with the SharePoint Data. */
		readonly OrganizationId: string;
		/** For internal use only. */
		readonly OverwriteTime_UtcDateOnly: Date;
		readonly PageNumber: number;
		/** Previous Page Token of the SharePoint document. */
		readonly PreviousPageToken: string;
		/** Regarding Object Id. */
		readonly RegardingObjectId: string;
		/** Unique identifier of the SharePoint data record. */
		SharePointDataId: string;
		/** Unique identifier of the user who created the SharePoint data. */
		readonly UserId: string;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the SharePoint Data. */
			readonly CreatedBy: string;
			/** Date and time when the SharePoint Data was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the SharePoint Data. */
			readonly CreatedOnBehalfBy: string;
			/** SharePoint Data Serialized */
			readonly Data: string;
			/** Is valid */
			readonly IsValid: string;
			/** Unique identifier of the user who created the SharePoint Data. */
			readonly Location: string;
			/** Unique identifier of the user who last modified the SharePoint Data. */
			readonly ModifiedBy: string;
			/** Date and time when the Sharepoint Data was last modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who last modified the SharePoint Data. */
			readonly ModifiedOnBehalfBy: string;
			/** Next Page Token of the SharePoint document. */
			readonly NextPageToken: string;
			/** Unique identifier of the organization associated with the SharePoint Data. */
			readonly OrganizationId: string;
			/** For internal use only. */
			readonly OverwriteTime_UtcDateOnly: string;
			readonly PageNumber: string;
			/** Previous Page Token of the SharePoint document. */
			readonly PreviousPageToken: string;
			/** Regarding Object Id. */
			readonly RegardingObjectId: string;
			/** Unique identifier of the SharePoint data record. */
			readonly SharePointDataId: string;
			/** Unique identifier of the user who created the SharePoint data. */
			readonly UserId: string;
		}
	}
}
declare namespace OptionSet {
	namespace SharePointData {
		enum RegardingObjectTypeCode {
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