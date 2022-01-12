//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace FormSharePointData_Information {
		interface Tabs {
		}
		interface Body {

		}
	}
	class FormSharePointData_Information extends DevKit.IForm {
		/**
		* DynamicsCrm.DevKit form SharePointData_Information Main Form
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form SharePointData_Information */
		Body: DevKit.FormSharePointData_Information.Body;
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
		/** The entity object */
		Entity: any;
		/** The entity name */
		EntityName: string;
		/** The entity collection name */
		EntityCollectionName: string;
		/** The @odata.etag is then used to build a cache of the response that is dependant on the fields that are retrieved */
		"@odata.etag": string;
		/** Unique identifier of the user who created the SharePoint Data. */
		CreatedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the SharePoint Data was created. */
		CreatedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who created the SharePoint Data. */
		CreatedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** SharePoint Data Serialized */
		Data: DevKit.WebApi.StringValue;
		/** Is valid */
		IsValid: DevKit.WebApi.BooleanValueReadonly;
		/** Unique identifier of the user who created the SharePoint Data. */
		Location: DevKit.WebApi.LookupValueReadonly;
		/** Unique identifier of the user who last modified the SharePoint Data. */
		ModifiedBy: DevKit.WebApi.LookupValueReadonly;
		/** Date and time when the Sharepoint Data was last modified. */
		ModifiedOn_UtcDateAndTime: DevKit.WebApi.UtcDateAndTimeValueReadonly;
		/** Unique identifier of the delegate user who last modified the SharePoint Data. */
		ModifiedOnBehalfBy: DevKit.WebApi.LookupValueReadonly;
		/** Next Page Token of the SharePoint document. */
		NextPageToken: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the organization associated with the SharePoint Data. */
		OrganizationId: DevKit.WebApi.LookupValueReadonly;
		/** For internal use only. */
		OverwriteTime_UtcDateOnly: DevKit.WebApi.UtcDateOnlyValueReadonly;
		PageNumber: DevKit.WebApi.IntegerValueReadonly;
		/** Previous Page Token of the SharePoint document. */
		PreviousPageToken: DevKit.WebApi.StringValueReadonly;
		/** Regarding Object Id. */
		RegardingObjectId: DevKit.WebApi.StringValueReadonly;
		/** Unique identifier of the SharePoint data record. */
		SharePointDataId: DevKit.WebApi.GuidValue;
		/** Unique identifier of the user who created the SharePoint data. */
		UserId: DevKit.WebApi.LookupValueReadonly;
	}
}
declare namespace OptionSet {
	namespace SharePointData {
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00'}