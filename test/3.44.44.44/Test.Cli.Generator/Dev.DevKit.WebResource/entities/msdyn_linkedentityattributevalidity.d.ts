//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_linkedentityattributevalidity_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_attributename: DevKit.Controls.String;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_linkedentityattributevalidity_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_linkedentityattributevalidity_Information */
		Body: DevKit.Formmsdyn_linkedentityattributevalidity_Information.Body;
		/** The Navigation of form msdyn_linkedentityattributevalidity_Information */
		Navigation: DevKit.Formmsdyn_linkedentityattributevalidity_Information.Navigation;
		/** The SidePanes of form msdyn_linkedentityattributevalidity_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_linkedentityattributevalidityApi {
		/**
		* DynamicsCrm.DevKit msdyn_linkedentityattributevalidityApi
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
		/** The name of the custom entity. */
		msdyn_attributename: string;
		msdyn_attributetype: OptionSet.msdyn_linkedentityattributevalidity.msdyn_attributetype;
		/** Hash value for the record attribute that was used in the validation API. */
		msdyn_datahash: string;
		msdyn_datavalidity: OptionSet.msdyn_linkedentityattributevalidity.msdyn_datavalidity;
		msdyn_errorcode: OptionSet.msdyn_linkedentityattributevalidity.msdyn_errorcode;
		/** Unique identifier for entity instances */
		msdyn_linkedentityattributevalidityId: string;
		/** Linked Entity Polymorphic Lookup Attribute */
		msdyn_linkeditemlookup_contact: string;
		/** Linked Entity Polymorphic Lookup Attribute */
		msdyn_linkeditemlookup_lead: string;
		msdyn_validationresponse: string;
		msdyn_validationstatus: OptionSet.msdyn_linkedentityattributevalidity.msdyn_validationstatus;
		/** Unique identifier for the organization */
		readonly OrganizationId: string;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Status of the Linked Entity Attribute Validity */
		statecode: OptionSet.msdyn_linkedentityattributevalidity.statecode;
		/** Reason for the status of the Linked Entity Attribute Validity */
		statuscode: OptionSet.msdyn_linkedentityattributevalidity.statuscode;
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
			/** The name of the custom entity. */
			readonly msdyn_attributename: string;
			readonly msdyn_attributetype: string;
			/** Hash value for the record attribute that was used in the validation API. */
			readonly msdyn_datahash: string;
			readonly msdyn_datavalidity: string;
			readonly msdyn_errorcode: string;
			/** Unique identifier for entity instances */
			readonly msdyn_linkedentityattributevalidityId: string;
			/** Linked Entity Polymorphic Lookup Attribute */
			readonly msdyn_linkeditemlookup_contact: string;
			/** Linked Entity Polymorphic Lookup Attribute */
			readonly msdyn_linkeditemlookup_lead: string;
			readonly msdyn_validationresponse: string;
			readonly msdyn_validationstatus: string;
			/** Unique identifier for the organization */
			readonly OrganizationId: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Status of the Linked Entity Attribute Validity */
			readonly statecode: string;
			/** Reason for the status of the Linked Entity Attribute Validity */
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
	namespace msdyn_linkedentityattributevalidity {
		enum msdyn_attributetype {
			/** 0 */
			Email,
			/** 1 */
			Phone
		}
		enum msdyn_datavalidity {
			/** 0 */
			Invalid,
			/** 2 */
			Unknown,
			/** 1 */
			Valid
		}
		enum msdyn_errorcode {
			/** 380 */
			Address_Malformed,
			/** 210 */
			Domain_exists,
			/** 360 */
			Domain_Exists_But_Disposable,
			/** 250 */
			Domain_Exists_But_Expired_Recently,
			/** 220 */
			Domain_Exists_But_Expires_Soon,
			/** 400 */
			Domain_Exists_But_Spam,
			/** 320 */
			Domain_Expired,
			/** 340 */
			Domain_Invalid,
			/** 350 */
			Domain_Unknown,
			/** 390 */
			Email_Does_Not_Exist,
			/** 200 */
			Email_Exists,
			/** 370 */
			Email_Exists_But_Hub,
			/** 420 */
			Email_Exists_But_Spam,
			/** 410 */
			Fake_Alias,
			/** 230 */
			None,
			/** 240 */
			Root_Domain_exists,
			/** 0 */
			Unknown,
			/** 300 */
			Validation_In_Progress
		}
		enum msdyn_linkeditemlookupIdType {
		}
		enum msdyn_validationstatus {
			/** 2 */
			Failed,
			/** 3 */
			In_Progress,
			/** 0 */
			New,
			/** 1 */
			Success
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