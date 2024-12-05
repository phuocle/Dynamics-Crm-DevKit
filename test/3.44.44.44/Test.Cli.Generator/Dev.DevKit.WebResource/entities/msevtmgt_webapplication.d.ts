//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsevtmgt_webapplication_Information {
		interface Tabs {
		}
		interface Body {
			/** Date and time when the record was created */
			CreatedOn: DevKit.Controls.DateTime;
			msevtmgt_aadclientid: DevKit.Controls.String;
			msevtmgt_aadmetadataendpoint: DevKit.Controls.String;
			msevtmgt_learnmorelink: DevKit.Controls.String;
			/** The name of the custom entity */
			msevtmgt_name: DevKit.Controls.String;
			msevtmgt_origin: DevKit.Controls.String;
			msevtmgt_publicendpoint: DevKit.Controls.String;
			msevtmgt_publicendpointv2_api: DevKit.Controls.String;
			msevtmgt_publicendpointv2_app: DevKit.Controls.String;
			msevtmgt_publicendpointv2_docs: DevKit.Controls.String;
			msevtmgt_token: DevKit.Controls.String;
			msevtmgt_userauthenticationtype: DevKit.Controls.OptionSet;
		}
		interface Navigation {

		}
	}
	class Formmsevtmgt_webapplication_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msevtmgt_webapplication_Information */
		Body: DevKit.Formmsevtmgt_webapplication_Information.Body;
		/** The Navigation of form msevtmgt_webapplication_Information */
		Navigation: DevKit.Formmsevtmgt_webapplication_Information.Navigation;
		/** The SidePanes of form msevtmgt_webapplication_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msevtmgt_webapplicationApi {
		/**
		* DynamicsCrm.DevKit msevtmgt_webapplicationApi
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
		/** Unique identifier of the user who created the record */
		readonly CreatedBy: string;
		/** Date and time when the record was created */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record */
		readonly ModifiedOnBehalfBy: string;
		msevtmgt_aadclientid: string;
		msevtmgt_aadmetadataendpoint: string;
		msevtmgt_learnmorelink: string;
		/** The name of the custom entity */
		msevtmgt_name: string;
		msevtmgt_origin: string;
		msevtmgt_publicendpoint: string;
		msevtmgt_publicendpointv2_api: string;
		msevtmgt_publicendpointv2_app: string;
		msevtmgt_publicendpointv2_docs: string;
		msevtmgt_token: string;
		msevtmgt_userauthenticationtype: OptionSet.msevtmgt_webapplication.msevtmgt_userauthenticationtype;
		/** Unique identifier for entity instances */
		msevtmgt_webapplicationId: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the web application */
		statecode: OptionSet.msevtmgt_webapplication.statecode;
		/** Reason for the status of the web application */
		statuscode: OptionSet.msevtmgt_webapplication.statuscode;
		/** For internal use only */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record */
			readonly CreatedBy: string;
			/** Date and time when the record was created */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record */
			readonly ModifiedOnBehalfBy: string;
			readonly msevtmgt_aadclientid: string;
			readonly msevtmgt_aadmetadataendpoint: string;
			readonly msevtmgt_learnmorelink: string;
			/** The name of the custom entity */
			readonly msevtmgt_name: string;
			readonly msevtmgt_origin: string;
			readonly msevtmgt_publicendpoint: string;
			readonly msevtmgt_publicendpointv2_api: string;
			readonly msevtmgt_publicendpointv2_app: string;
			readonly msevtmgt_publicendpointv2_docs: string;
			readonly msevtmgt_token: string;
			readonly msevtmgt_userauthenticationtype: string;
			/** Unique identifier for entity instances */
			readonly msevtmgt_webapplicationId: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the web application */
			readonly statecode: string;
			/** Reason for the status of the web application */
			readonly statuscode: string;
			/** For internal use only */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msevtmgt_webapplication {
		enum msevtmgt_userauthenticationtype {
			/** 100000001 */
			Azure_Active_Directory_B2C
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