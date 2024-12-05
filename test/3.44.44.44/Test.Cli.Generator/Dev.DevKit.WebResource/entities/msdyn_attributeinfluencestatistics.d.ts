//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_attributeinfluencestatistics_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_attributename: DevKit.Controls.String;
			msdyn_entityname: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_notselectedreason: DevKit.Controls.Integer;
			msdyn_predictioniD: DevKit.Controls.String;
			msdyn_submodelid: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_attributeinfluencestatistics_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_attributeinfluencestatistics_Information */
		Body: DevKit.Formmsdyn_attributeinfluencestatistics_Information.Body;
		/** The Navigation of form msdyn_attributeinfluencestatistics_Information */
		Navigation: DevKit.Formmsdyn_attributeinfluencestatistics_Information.Navigation;
		/** The SidePanes of form msdyn_attributeinfluencestatistics_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_attributeinfluencestatisticsApi {
		/**
		* DynamicsCrm.DevKit msdyn_attributeinfluencestatisticsApi
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
		/** Unique identifier of the user who created the record. */
		readonly CreatedBy: string;
		/** Date and time when the record was created. */
		readonly CreatedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who created the record. */
		readonly CreatedOnBehalfBy: string;
		/** Sequence number of the import that created this record. */
		ImportSequenceNumber: number;
		/** Unique identifier of the user who modified the record. */
		readonly ModifiedBy: string;
		/** Date and time when the record was modified. */
		readonly ModifiedOn_UtcDateAndTime: Date;
		/** Unique identifier of the delegate user who modified the record. */
		readonly ModifiedOnBehalfBy: string;
		/** Unique identifier for entity instances */
		msdyn_attributeinfluencestatisticsId: string;
		msdyn_attributename: string;
		msdyn_entityname: string;
		/** Stores boolean value to tell if blank values of attribute needs to be ignored by ML or not. */
		msdyn_IgnoreIfBlank: boolean;
		/** Stores importance for the attribute calculated using ML. */
		msdyn_Importance: number;
		/** Stores boolean value to tell if attribute is crm attribute or some engineered attribute. */
		msdyn_IsCrmAttribute: boolean;
		/** Stores boolean value to tell if attribute is recommended for use by ML algo or not. */
		msdyn_IsRecommended: boolean;
		/** Is Valid */
		msdyn_isvalid: boolean;
		msdyn_modelid: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		msdyn_notselectedreason: number;
		msdyn_predictioniD: string;
		msdyn_statistics: string;
		msdyn_submodelid: string;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Attribute Influence Statistics */
		statecode: OptionSet.msdyn_attributeinfluencestatistics.statecode;
		/** Reason for the status of the Attribute Influence Statistics */
		statuscode: OptionSet.msdyn_attributeinfluencestatistics.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
		readonly FormattedValue: {
			/** Unique identifier of the user who created the record. */
			readonly CreatedBy: string;
			/** Date and time when the record was created. */
			readonly CreatedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who created the record. */
			readonly CreatedOnBehalfBy: string;
			/** Sequence number of the import that created this record. */
			readonly ImportSequenceNumber: string;
			/** Unique identifier of the user who modified the record. */
			readonly ModifiedBy: string;
			/** Date and time when the record was modified. */
			readonly ModifiedOn_UtcDateAndTime: string;
			/** Unique identifier of the delegate user who modified the record. */
			readonly ModifiedOnBehalfBy: string;
			/** Unique identifier for entity instances */
			readonly msdyn_attributeinfluencestatisticsId: string;
			readonly msdyn_attributename: string;
			readonly msdyn_entityname: string;
			/** Stores boolean value to tell if blank values of attribute needs to be ignored by ML or not. */
			readonly msdyn_IgnoreIfBlank: string;
			/** Stores importance for the attribute calculated using ML. */
			readonly msdyn_Importance: string;
			/** Stores boolean value to tell if attribute is crm attribute or some engineered attribute. */
			readonly msdyn_IsCrmAttribute: string;
			/** Stores boolean value to tell if attribute is recommended for use by ML algo or not. */
			readonly msdyn_IsRecommended: string;
			/** Is Valid */
			readonly msdyn_isvalid: string;
			readonly msdyn_modelid: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			readonly msdyn_notselectedreason: string;
			readonly msdyn_predictioniD: string;
			readonly msdyn_statistics: string;
			readonly msdyn_submodelid: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Attribute Influence Statistics */
			readonly statecode: string;
			/** Reason for the status of the Attribute Influence Statistics */
			readonly statuscode: string;
			/** For internal use only. */
			readonly TimeZoneRuleVersionNumber: string;
			/** Time zone code that was in use when the record was created. */
			readonly UTCConversionTimeZoneCode: string;
			/** Version Number */
			readonly VersionNumber: string;
		}
	}
}
declare namespace OptionSet {
	namespace msdyn_attributeinfluencestatistics {
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