//@ts-check
///<reference path="devkit.d.ts" />
declare namespace DevKit {
	namespace Formmsdyncrm_imagestyle_Information {
		interface Tabs {
		}
		interface Body {
			msdyncrm_align: DevKit.Controls.String;
			msdyncrm_alttext: DevKit.Controls.String;
			msdyncrm_autowidth: DevKit.Controls.Boolean;
			msdyncrm_fit: DevKit.Controls.OptionSet;
			msdyncrm_height: DevKit.Controls.String;
			msdyncrm_imagesource: DevKit.Controls.String;
			msdyncrm_link: DevKit.Controls.String;
			msdyncrm_marginbottom: DevKit.Controls.String;
			msdyncrm_marginleft: DevKit.Controls.String;
			msdyncrm_marginright: DevKit.Controls.String;
			msdyncrm_margintop: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_noalttext: DevKit.Controls.Boolean;
			msdyncrm_originalheight: DevKit.Controls.String;
			msdyncrm_originalwidth: DevKit.Controls.String;
			msdyncrm_paddingbottom: DevKit.Controls.String;
			msdyncrm_paddingleft: DevKit.Controls.String;
			msdyncrm_paddingright: DevKit.Controls.String;
			msdyncrm_paddingtop: DevKit.Controls.String;
			msdyncrm_roundedcorners: DevKit.Controls.String;
			msdyncrm_verticalalign: DevKit.Controls.String;
			msdyncrm_width: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyncrm_imagestyle_Information extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_imagestyle_Information */
		Body: DevKit.Formmsdyncrm_imagestyle_Information.Body;
		/** The Navigation of form msdyncrm_imagestyle_Information */
		Navigation: DevKit.Formmsdyncrm_imagestyle_Information.Navigation;
		/** The SidePanes of form msdyncrm_imagestyle_Information */
		SidePanes: DevKit.SidePanes;
	}
	namespace Formmsdyncrm_imagestyle_Information2 {
		interface Tabs {
		}
		interface Body {
			msdyncrm_align: DevKit.Controls.String;
			msdyncrm_alttext: DevKit.Controls.String;
			msdyncrm_autowidth: DevKit.Controls.Boolean;
			/** Email text to be used for image asset suggestions */
			msdyncrm_emailtext: DevKit.Controls.String;
			msdyncrm_fileid: DevKit.Controls.String;
			msdyncrm_fit: DevKit.Controls.OptionSet;
			msdyncrm_height: DevKit.Controls.String;
			msdyncrm_imagesource: DevKit.Controls.String;
			msdyncrm_link: DevKit.Controls.String;
			msdyncrm_marginbottom: DevKit.Controls.String;
			msdyncrm_marginleft: DevKit.Controls.String;
			msdyncrm_marginright: DevKit.Controls.String;
			msdyncrm_margintop: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_noalttext: DevKit.Controls.Boolean;
			msdyncrm_originalheight: DevKit.Controls.String;
			msdyncrm_originalwidth: DevKit.Controls.String;
			msdyncrm_paddingbottom: DevKit.Controls.String;
			msdyncrm_paddingleft: DevKit.Controls.String;
			msdyncrm_paddingright: DevKit.Controls.String;
			msdyncrm_paddingtop: DevKit.Controls.String;
			msdyncrm_roundedcorners: DevKit.Controls.String;
			msdyncrm_tracking: DevKit.Controls.Boolean;
			msdyncrm_verticalalign: DevKit.Controls.String;
			msdyncrm_width: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class Formmsdyncrm_imagestyle_Information2 extends DevKit.IForm {
		/**
		* Information [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form msdyncrm_imagestyle_Information2 */
		Body: DevKit.Formmsdyncrm_imagestyle_Information2.Body;
		/** The Navigation of form msdyncrm_imagestyle_Information2 */
		Navigation: DevKit.Formmsdyncrm_imagestyle_Information2.Navigation;
		/** The SidePanes of form msdyncrm_imagestyle_Information2 */
		SidePanes: DevKit.SidePanes;
	}
	namespace FormPopup_form {
		interface Tabs {
		}
		interface Body {
			msdyncrm_align: DevKit.Controls.String;
			msdyncrm_alttext: DevKit.Controls.String;
			msdyncrm_fileid: DevKit.Controls.String;
			msdyncrm_height: DevKit.Controls.String;
			msdyncrm_paddingleft: DevKit.Controls.String;
			msdyncrm_imagesource: DevKit.Controls.String;
			/** The name of the custom entity. */
			msdyncrm_name: DevKit.Controls.String;
			msdyncrm_paddingtop: DevKit.Controls.String;
			msdyncrm_width: DevKit.Controls.String;
			/** Owner Id */
			OwnerId: DevKit.Controls.Lookup;
		}
		interface Navigation {

		}
	}
	class FormPopup_form extends DevKit.IForm {
		/**
		* Popup form [Main Form]
		* @param executionContext the execution context
		* @param defaultWebResourceName default resource name. E.g.: "devkit_/resources/Resource"
		*/
		constructor(executionContext: any, defaultWebResourceName?: string);
		/** Utility functions/methods/objects for Dynamics 365 form */
		Utility: DevKit.Utility;
		/** The Body section of form Popup_form */
		Body: DevKit.FormPopup_form.Body;
		/** The Navigation of form Popup_form */
		Navigation: DevKit.FormPopup_form.Navigation;
		/** The SidePanes of form Popup_form */
		SidePanes: DevKit.SidePanes;
	}
	class msdyncrm_imagestyleApi {
		/**
		* DynamicsCrm.DevKit msdyncrm_imagestyleApi
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
		msdyncrm_align: string;
		msdyncrm_alttext: string;
		msdyncrm_autowidth: boolean;
		/** Email text to be used for image asset suggestions */
		msdyncrm_emailtext: string;
		msdyncrm_fileid: string;
		msdyncrm_fit: OptionSet.msdyncrm_imagestyle.msdyncrm_fit;
		msdyncrm_height: string;
		msdyncrm_imagesource: string;
		/** Unique identifier for entity instances */
		msdyncrm_imagestyleId: string;
		msdyncrm_link: string;
		msdyncrm_marginbottom: string;
		msdyncrm_marginleft: string;
		msdyncrm_marginright: string;
		msdyncrm_margintop: string;
		/** The name of the custom entity. */
		msdyncrm_name: string;
		msdyncrm_noalttext: boolean;
		msdyncrm_originalheight: string;
		msdyncrm_originalwidth: string;
		msdyncrm_paddingbottom: string;
		msdyncrm_paddingleft: string;
		msdyncrm_paddingright: string;
		msdyncrm_paddingtop: string;
		msdyncrm_roundedcorners: string;
		msdyncrm_tracking: boolean;
		msdyncrm_verticalalign: string;
		msdyncrm_width: string;
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
		/** Status of the imagestyle */
		statecode: OptionSet.msdyncrm_imagestyle.statecode;
		/** Reason for the status of the imagestyle */
		statuscode: OptionSet.msdyncrm_imagestyle.statuscode;
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
			readonly msdyncrm_align: string;
			readonly msdyncrm_alttext: string;
			readonly msdyncrm_autowidth: string;
			/** Email text to be used for image asset suggestions */
			readonly msdyncrm_emailtext: string;
			readonly msdyncrm_fileid: string;
			readonly msdyncrm_fit: string;
			readonly msdyncrm_height: string;
			readonly msdyncrm_imagesource: string;
			/** Unique identifier for entity instances */
			readonly msdyncrm_imagestyleId: string;
			readonly msdyncrm_link: string;
			readonly msdyncrm_marginbottom: string;
			readonly msdyncrm_marginleft: string;
			readonly msdyncrm_marginright: string;
			readonly msdyncrm_margintop: string;
			/** The name of the custom entity. */
			readonly msdyncrm_name: string;
			readonly msdyncrm_noalttext: string;
			readonly msdyncrm_originalheight: string;
			readonly msdyncrm_originalwidth: string;
			readonly msdyncrm_paddingbottom: string;
			readonly msdyncrm_paddingleft: string;
			readonly msdyncrm_paddingright: string;
			readonly msdyncrm_paddingtop: string;
			readonly msdyncrm_roundedcorners: string;
			readonly msdyncrm_tracking: string;
			readonly msdyncrm_verticalalign: string;
			readonly msdyncrm_width: string;
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
			/** Status of the imagestyle */
			readonly statecode: string;
			/** Reason for the status of the imagestyle */
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
	namespace msdyncrm_imagestyle {
		enum msdyncrm_fit {
			/** 164230001 */
			Custom,
			/** 164230000 */
			Fill
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