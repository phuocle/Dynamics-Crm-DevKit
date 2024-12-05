//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_collabspaceteamassociation_Information {
		interface Tabs {
		}
		interface Body {
			msdyn_crmrecordid: DevKit.Controls.String;
			msdyn_crmrecordtype: DevKit.Controls.String;
			msdyn_crmtype: DevKit.Controls.String;
			msdyn_data: DevKit.Controls.String;
			msdyn_dataversion: DevKit.Controls.Integer;
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			msdyn_teamid: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_collabspaceteamassociation_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_collabspaceteamassociation_Information */
		Body: DevKit.Formmsdyn_collabspaceteamassociation_Information.Body;
		/** The Navigation of form msdyn_collabspaceteamassociation_Information */
		Navigation: DevKit.Formmsdyn_collabspaceteamassociation_Information.Navigation;
		/** The SidePanes of form msdyn_collabspaceteamassociation_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_collabspaceteamassociationApi {
		/**
		* DynamicsCrm.DevKit msdyn_collabspaceteamassociationApi
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
		msdyn_collabspaceteamassociationId: string;
		msdyn_crmrecordid: string;
		msdyn_crmrecordtype: string;
		msdyn_crmtype: string;
		msdyn_data: string;
		msdyn_dataversion: number;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Identifier to track the association of this record with a Copilot product type */
		msdyn_producttype: OptionSet.msdyn_collabspaceteamassociation.msdyn_producttype;
		msdyn_teamid: string;
		/** Team Web URL */
		msdyn_teamweburl: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Collab Space Team Association */
		statecode: OptionSet.msdyn_collabspaceteamassociation.statecode;
		/** Reason for the status of the Collab Space Team Association */
		statuscode: OptionSet.msdyn_collabspaceteamassociation.statuscode;
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
			readonly msdyn_collabspaceteamassociationId: string;
			readonly msdyn_crmrecordid: string;
			readonly msdyn_crmrecordtype: string;
			readonly msdyn_crmtype: string;
			readonly msdyn_data: string;
			readonly msdyn_dataversion: string;
			/** The name of the custom entity. */
			readonly msdyn_name: string;
			/** Identifier to track the association of this record with a Copilot product type */
			readonly msdyn_producttype: string;
			readonly msdyn_teamid: string;
			/** Team Web URL */
			readonly msdyn_teamweburl: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Collab Space Team Association */
			readonly statecode: string;
			/** Reason for the status of the Collab Space Team Association */
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
	namespace msdyn_collabspaceteamassociation {
		enum msdyn_producttype {
			/** 10000 */
			Copilot_for_Sales,
			/** 10001 */
			Copilot_for_Service,
			/** 11000 */
			Shared
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