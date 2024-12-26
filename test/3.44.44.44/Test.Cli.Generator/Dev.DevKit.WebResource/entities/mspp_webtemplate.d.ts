//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmspp_webtemplate_Information {
		interface Tabs {
		}
		interface Body {
			/** Shows the MIME type of the web template content. */
			mspp_mimetype: DevKit.Controls.String;
			/** The name of the custom entity. */
			mspp_name: DevKit.Controls.String;
			mspp_source: DevKit.Controls.String;
			mspp_source1: DevKit.Controls.String;
			/** Unique identifier for Website associated with Web Template */
			mspp_websiteid: DevKit.Controls.Lookup;
		}
		interface Navigation {
			mspp_webtemplate_adplacement: DevKit.Controls.NavigationItem,
			mspp_webtemplate_pagetemplate: DevKit.Controls.NavigationItem,
			mspp_webtemplate_pollplacement: DevKit.Controls.NavigationItem,
			mspp_webtemplate_website_footer: DevKit.Controls.NavigationItem,
			mspp_webtemplate_website_header: DevKit.Controls.NavigationItem
		}
	}
	class Formmspp_webtemplate_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form mspp_webtemplate_Information */
		Body: DevKit.Formmspp_webtemplate_Information.Body;
		/** The Navigation of form mspp_webtemplate_Information */
		Navigation: DevKit.Formmspp_webtemplate_Information.Navigation;
		/** The SidePanes of form mspp_webtemplate_Information */
		SidePanes: DevKit.SidePanes;
	}
	class mspp_webtemplateApi {
		/**
		* DynamicsCrm.DevKit mspp_webtemplateApi
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
		/** Shows who created the record. */
		mspp_createdby: string;
		/** Shows the date and time when the record was created. */
		mspp_createdon_UtcDateAndTime: Date;
		/** Shows the MIME type of the web template content. */
		mspp_mimetype: string;
		/** Shows who last updated the record. */
		mspp_modifiedby: string;
		/** Shows the date and time when the record was modified. */
		mspp_modifiedon_UtcDateAndTime: Date;
		/** The name of the custom entity. */
		mspp_name: string;
		mspp_source: string;
		/** Unique identifier for Website associated with Web Template */
		mspp_websiteid: string;
		/** Unique identifier for entity instances */
		mspp_webtemplateId: string;
		/** Status of the Web Template */
		statecode: OptionSet.mspp_webtemplate.statecode;
		/** Reason for the status of the Web Template */
		statuscode: OptionSet.mspp_webtemplate.statuscode;
		readonly FormattedValue: {
			/** Shows who created the record. */
			readonly mspp_createdby: string;
			/** Shows the date and time when the record was created. */
			readonly mspp_createdon_UtcDateAndTime: string;
			/** Shows the MIME type of the web template content. */
			readonly mspp_mimetype: string;
			/** Shows who last updated the record. */
			readonly mspp_modifiedby: string;
			/** Shows the date and time when the record was modified. */
			readonly mspp_modifiedon_UtcDateAndTime: string;
			/** The name of the custom entity. */
			readonly mspp_name: string;
			readonly mspp_source: string;
			/** Unique identifier for Website associated with Web Template */
			readonly mspp_websiteid: string;
			/** Unique identifier for entity instances */
			readonly mspp_webtemplateId: string;
			/** Status of the Web Template */
			readonly statecode: string;
			/** Reason for the status of the Web Template */
			readonly statuscode: string;
		}
	}
}
declare namespace OptionSet {
	namespace mspp_webtemplate {
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