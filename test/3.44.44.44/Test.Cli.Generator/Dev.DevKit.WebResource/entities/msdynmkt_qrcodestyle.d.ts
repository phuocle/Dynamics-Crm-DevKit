//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdynmkt_qrcodestyle_Information {
		interface Tabs {
		}
		interface Body {
			msdynmkt_align: DevKit.Controls.String;
			msdynmkt_alttext: DevKit.Controls.ActionCards;
			msdynmkt_autowidth: DevKit.Controls.Boolean;
			msdynmkt_height: DevKit.Controls.String;
			msdynmkt_link: DevKit.Controls.String;
			msdynmkt_marginbottom: DevKit.Controls.String;
			msdynmkt_marginleft: DevKit.Controls.String;
			msdynmkt_marginright: DevKit.Controls.String;
			msdynmkt_margintop: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdynmkt_name: DevKit.Controls.String;
			msdynmkt_noalttext: DevKit.Controls.Boolean;
			msdynmkt_originalheight: DevKit.Controls.String;
			msdynmkt_originalwidth: DevKit.Controls.String;
			msdynmkt_paddingbottom: DevKit.Controls.String;
			msdynmkt_paddingleft: DevKit.Controls.String;
			msdynmkt_paddingright: DevKit.Controls.String;
			msdynmkt_paddingtop: DevKit.Controls.String;
			msdynmkt_tracking: DevKit.Controls.Boolean;
			msdynmkt_verticalalign: DevKit.Controls.String;
			msdynmkt_width: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdynmkt_qrcodestyle_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdynmkt_qrcodestyle_Information */
		Body: DevKit.Formmsdynmkt_qrcodestyle_Information.Body;
		/** The Navigation of form msdynmkt_qrcodestyle_Information */
		Navigation: DevKit.Formmsdynmkt_qrcodestyle_Information.Navigation;
		/** The SidePanes of form msdynmkt_qrcodestyle_Information */
		SidePanes: DevKit.SidePanes;
	}
	class msdynmkt_qrcodestyleApi {
		/**
		* DynamicsCrm.DevKit msdynmkt_qrcodestyleApi
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
		msdynmkt_align: string;
		msdynmkt_alttext: string;
		msdynmkt_autowidth: boolean;
		msdynmkt_emailstatuscode: OptionSet.msdynmkt_qrcodestyle.msdynmkt_emailstatuscode;
		msdynmkt_height: string;
		msdynmkt_link: string;
		msdynmkt_marginbottom: string;
		msdynmkt_marginleft: string;
		msdynmkt_marginright: string;
		msdynmkt_margintop: string;
		/** The name of the custom entity. */
		msdynmkt_name: string;
		msdynmkt_noalttext: boolean;
		msdynmkt_originalheight: string;
		msdynmkt_originalwidth: string;
		msdynmkt_paddingbottom: string;
		msdynmkt_paddingleft: string;
		msdynmkt_paddingright: string;
		msdynmkt_paddingtop: string;
		msdynmkt_placeholders: string;
		/** Unique identifier for entity instances */
		msdynmkt_qrcodestyleId: string;
		msdynmkt_tracking: boolean;
		msdynmkt_verticalalign: string;
		msdynmkt_width: string;
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
		/** Status of the QR code style */
		statecode: OptionSet.msdynmkt_qrcodestyle.statecode;
		/** Reason for the status of the QR code style */
		statuscode: OptionSet.msdynmkt_qrcodestyle.statuscode;
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
			readonly msdynmkt_align: string;
			readonly msdynmkt_alttext: string;
			readonly msdynmkt_autowidth: string;
			readonly msdynmkt_emailstatuscode: string;
			readonly msdynmkt_height: string;
			readonly msdynmkt_link: string;
			readonly msdynmkt_marginbottom: string;
			readonly msdynmkt_marginleft: string;
			readonly msdynmkt_marginright: string;
			readonly msdynmkt_margintop: string;
			/** The name of the custom entity. */
			readonly msdynmkt_name: string;
			readonly msdynmkt_noalttext: string;
			readonly msdynmkt_originalheight: string;
			readonly msdynmkt_originalwidth: string;
			readonly msdynmkt_paddingbottom: string;
			readonly msdynmkt_paddingleft: string;
			readonly msdynmkt_paddingright: string;
			readonly msdynmkt_paddingtop: string;
			readonly msdynmkt_placeholders: string;
			/** Unique identifier for entity instances */
			readonly msdynmkt_qrcodestyleId: string;
			readonly msdynmkt_tracking: string;
			readonly msdynmkt_verticalalign: string;
			readonly msdynmkt_width: string;
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
			/** Status of the QR code style */
			readonly statecode: string;
			/** Reason for the status of the QR code style */
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
	namespace msdynmkt_qrcodestyle {
		enum msdynmkt_emailstatuscode {
			/** 1 */
			Draft,
			/** 100 */
			Inactive,
			/** 3 */
			Live_editing,
			/** 2 */
			Ready_to_send
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