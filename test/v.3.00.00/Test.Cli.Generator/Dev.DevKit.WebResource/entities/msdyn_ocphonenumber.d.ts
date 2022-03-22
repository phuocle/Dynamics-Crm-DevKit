//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocphonenumber_Information {
		interface Tabs {
		}
		interface Body {
			/** The name of the custom entity. */
			msdyn_name: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Process extends DevKit.Controls.IProcess {
		}
	}
	class Formmsdyn_ocphonenumber_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocphonenumber_Information */
		Body: DevKit.Formmsdyn_ocphonenumber_Information.Body;
		/** The Process of form msdyn_ocphonenumber_Information */
		Process: DevKit.Formmsdyn_ocphonenumber_Information.Process;
		/** The SidePanes of form msdyn_ocphonenumber_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ocphonenumberApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocphonenumberApi
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
		/** Application module picklist */
		msdyn_appmodule: Array<OptionSet.msdyn_ocphonenumber.msdyn_appmodule>;
		/** Carrier associated to the phone number */
		msdyn_carrierid: string;
		/** ISO code for the country */
		msdyn_countryisocode: string;
		/** The name of the custom entity. */
		msdyn_name: string;
		/** Objective of the phone number */
		msdyn_Objective: OptionSet.msdyn_ocphonenumber.msdyn_Objective;
		/** Unique identifier for Communication Provider Setting associated with Phone Number. */
		msdyn_occommunicationprovidersettingId: string;
		/** Unique identifier for entity instances */
		msdyn_ocphonenumberId: string;
		/** Source of phone number */
		msdyn_ocphonenumbersource: OptionSet.msdyn_ocphonenumber.msdyn_ocphonenumbersource;
		/** Indicates if inbound calling is enabled on the phone number */
		msdyn_phoneinboundenabled: boolean;
		/** The phone number of the phone number entity. */
		msdyn_phonenumber: string;
		/** Indicates if inbound calling is enabled on the phone number */
		msdyn_phoneoutboundenabled: boolean;
		/** Indicates if inbound SMS is enabled on the phonenumber */
		msdyn_smsinboundenabled: boolean;
		/** Indicates if outbound SMS is enabled on the phone number */
		msdyn_smsoutboundenabled: boolean;
		/** The phone number type */
		msdyn_type: OptionSet.msdyn_ocphonenumber.msdyn_type;
		/** Date and time that the record was migrated. */
		OverriddenCreatedOn_UtcDateOnly: Date;
		/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
		OwnerId_systemuser: string;
		/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
		OwnerId_team: string;
		/** Unique identifier for the business unit that owns the record */
		readonly OwningBusinessUnit: string;
		/** Unique identifier for the team that owns the record. */
		readonly OwningTeam: string;
		/** Unique identifier for the user that owns the record. */
		readonly OwningUser: string;
		/** Status of the phone number */
		statecode: OptionSet.msdyn_ocphonenumber.statecode;
		/** Reason for the status of the phone number */
		statuscode: OptionSet.msdyn_ocphonenumber.statuscode;
		/** For internal use only. */
		TimeZoneRuleVersionNumber: number;
		/** Time zone code that was in use when the record was created. */
		UTCConversionTimeZoneCode: number;
		/** Version Number */
		readonly VersionNumber: number;
	}
}
declare namespace OptionSet {
	namespace msdyn_ocphonenumber {
		enum msdyn_appmodule {
			/** 192350000 */
			Service
		}
		enum msdyn_Objective {
			/** 192350000 */
			Conversation,
			/** 192350001 */
			Lead
		}
		enum msdyn_ocphonenumbersource {
			/** 192350000 */
			Direct_Offer,
			/** 192350001 */
			Direct_Routing
		}
		enum msdyn_type {
			/** 192350000 */
			Geo,
			/** 192350002 */
			Short_code,
			/** 192350001 */
			Toll_free
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
//{'UseForm':true,'UseWebApi':true,'Version':'3.00.00','WebApiVersion':'2'}