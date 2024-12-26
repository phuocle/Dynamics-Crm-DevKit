//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyn_ocgatekeeperengagementctx_Information {
		interface Tabs {
		}
		interface Body {
			/** Id used to identify a person with Gatekeeper authentication. */
			msdyn_gatekeeperpersonid: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyn_ocgatekeeperengagementctx_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyn_ocgatekeeperengagementctx_Information */
		Body: DevKit.Formmsdyn_ocgatekeeperengagementctx_Information.Body;
		/** The Navigation of form msdyn_ocgatekeeperengagementctx_Information */
		Navigation: DevKit.Formmsdyn_ocgatekeeperengagementctx_Information.Navigation;
		/** The SidePanes of form msdyn_ocgatekeeperengagementctx_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdyn_ocgatekeeperengagementctxApi {
		/**
		* DynamicsCrm.DevKit msdyn_ocgatekeeperengagementctxApi
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
		/** Gatekeeper customer enrollment status. */
		msdyn_enrollstatus: string;
		/** Id used to identify a person with Gatekeeper authentication. */
		msdyn_gatekeeperpersonid: string;
		/** Marking a customer as suspicious and potentially fraud. */
		msdyn_issuspicious: boolean;
		/** Reason for marking person as suspicious. */
		msdyn_issuspiciousreason: string;
		/** Unique identifier for Conversation associated with Gatekeeper Engagement Context. */
		msdyn_liveworkitemid: string;
		/** Unique identifier for entity instances */
		msdyn_ocgatekeeperengagementctxId: string;
		/** Reason for opting out of Gatekeeper authentication. */
		msdyn_optedoutreason: string;
		/** Specifies whether a person has opted into or out of Gatekeeper authentication. */
		msdyn_optstatus: OptionSet.msdyn_ocgatekeeperengagementctx.msdyn_optstatus;
		/** Shows the customer verification status. */
		msdyn_verificationstatus: string;
		/** Provides the reason behind the verification result. */
		msdyn_verificationstatusreason: string;
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
		/** Status of the ocgatekeeperengagementctx */
		statecode: OptionSet.msdyn_ocgatekeeperengagementctx.statecode;
		/** Reason for the status of the ocgatekeeperengagementctx */
		statuscode: OptionSet.msdyn_ocgatekeeperengagementctx.statuscode;
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
			/** Gatekeeper customer enrollment status. */
			readonly msdyn_enrollstatus: string;
			/** Id used to identify a person with Gatekeeper authentication. */
			readonly msdyn_gatekeeperpersonid: string;
			/** Marking a customer as suspicious and potentially fraud. */
			readonly msdyn_issuspicious: string;
			/** Reason for marking person as suspicious. */
			readonly msdyn_issuspiciousreason: string;
			/** Unique identifier for Conversation associated with Gatekeeper Engagement Context. */
			readonly msdyn_liveworkitemid: string;
			/** Unique identifier for entity instances */
			readonly msdyn_ocgatekeeperengagementctxId: string;
			/** Reason for opting out of Gatekeeper authentication. */
			readonly msdyn_optedoutreason: string;
			/** Specifies whether a person has opted into or out of Gatekeeper authentication. */
			readonly msdyn_optstatus: string;
			/** Shows the customer verification status. */
			readonly msdyn_verificationstatus: string;
			/** Provides the reason behind the verification result. */
			readonly msdyn_verificationstatusreason: string;
			/** Date and time that the record was migrated. */
			readonly OverriddenCreatedOn_UtcDateOnly: string;
			/** Enter the user who is assigned to manage the record. This field is updated every time the record is assigned to a different user */
			readonly OwnerId_systemuser: string;
			/** Enter the team who is assigned to manage the record. This field is updated every time the record is assigned to a different team */
			readonly OwnerId_team: string;
			/** Unique identifier for the business unit that owns the record */
			readonly OwningBusinessUnit: string;
			/** Unique identifier for the team that owns the record. */
			readonly OwningTeam: string;
			/** Unique identifier for the user that owns the record. */
			readonly OwningUser: string;
			/** Status of the ocgatekeeperengagementctx */
			readonly statecode: string;
			/** Reason for the status of the ocgatekeeperengagementctx */
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
	namespace msdyn_ocgatekeeperengagementctx {
		enum msdyn_optstatus {
			/** 615860001 */
			OptedIn,
			/** 615860002 */
			OptedOut,
			/** 615860000 */
			Unspecified
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